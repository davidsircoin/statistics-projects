Tags: [[Stats]], [[Statistical-Methods]], [[Inferential-Statistics]], [[Classical-Inference]]

The parameters of a model represent unknown quantities we wish to estimate among all values in the parameter space.
# Regression

> [!def] ***Regression Models***
> Suppose we have pairs $\{(X_i, Y_i)\}_{i=1}^{n},$ where the $X_i$ and $Y_i$ are respectively IID following $F_X$ and $F_Y.$ The **regression function** is the variable $r(x)=E[Y\mid X=x].$ If $r$ is in our finite dimensional model, we have a **parametric regression model** and if it is not finite it is a **non-parametric regression model.** We call $X$ a **predictor, regressor, feature,** or **independent variable** and $Y$ the **outcome,** or **response** or **dependent variable.**

Our interest is to predict $Y_i$ based on $X_i.$ If $Y$ has a finite range, we view prediction as *classification.* If instead we wish to estimate $r,$ we are doing **regression** or **curve estimation.** We could alternatively present regression models as $$Y=r(X)+W=E[Y\mid X]+W,$$
where $E[W]=0.$ Supposing we introduce a model as above, define $\varepsilon=Y-r(X).$ This variable satisfies the needed equality. Additionally, due to iterated expectation,
$$
\begin{align*}
E[W]&=E[E[W\mid X]]\\
&=E[E[Y-r(X)\mid X]]\\
&=E[E[Y\mid X]-E[r(X)\mid X]]\\
&=E[r(X)-r(X)]\\
&=0
\end{align*}
$$
Conversely, if the equality holds,
$$E[Y\mid X]=E[r(X)+W\mid X]=r(X)+E[W\mid X]=r(X).$$

## Linear Regression
Could be seen as the LLMS estimator 'without probabilistic assumptions.' 
### Simple Regression

> [!def] ***Simple Linear Regression Models***
> Given respectively IID sequences $\{X_i\}_{i=1}^{n}$ and $\{Y_i\}_{i=1}^{n}$ following distributions $F_X$ and $F_Y,$ a **simple regression model** supposes $$Y_i=r(X_i)+W_i=\theta_0+\theta_1X_i+W_i,$$
> where $\{W_i\}_{i=1}^{n}$ is an IID sequence of noise variables, $E[W_i\mid X_i=x]=0,$ and $V[W_i\mid X_i=x]=\sigma^{2},$ for any $x.$ We call $\theta_0$ the **intercept** and $\theta_1$ the **slope** for obvious reasons.

 The goal is to estimate $\theta_0,\theta_1,$ and $\sigma.$ Of course if we know these beforehand there are fewer things to do. If we have corresponding estimators $\hat{\Theta}_0$ and $\hat{\Theta}_1,$ our estimated or predicted values (also called **fitted values**) are of the form $$\hat{Y}_i=\hat{\Theta}_0+\hat{\Theta}_1X_i=\hat{r}(X_i).$$
The **$i$-th residual** is the variable $$\widetilde{Y}_i=\hat{W}_i=Y_i-\hat{Y}_i.$$
'Good' estimates, it might seem, are those with 'small residuals.' With a single observation, this is simple. When there are many, we must somehow aggregate the residuals. A simple way is to consider $|\widetilde{Y}|^2.$

> [!def] ***Residual Sum of Squares (RSS)***
> $$\mathrm{RSS}=SS_E=|\hat{W}|^2=\sum_{i=1}^{n} \hat{W}_i^{2}=\sum_{i=1}^{n} (Y_i-\hat{\Theta}_0-\hat{\Theta}_1X_i)^{2}.$$

Simply set the partials w.r.t. $\hat{\Theta}_0$ and $\hat{\Theta}_1$ to $0$ and solve for both, yielding

> [!thm]+ ***Least Square Estimates***
> The following values minimise the sum of squared residuals: $$\hat{\Theta}_0=\overline{Y}-\hat{\Theta}_1\overline{X},\quad\quad \hat{\Theta}_1=\dfrac{\overline{S}_{X,Y}}{\overline{S}_{X}^2},$$
> where $\overline{S}_{X,Y}$ and $\overline{S}_{X}^2$ are the biased sample covariance and variance estimators respectively.

```ad-note
title:Derivation
collapse:closed

Take $\partial_0f$ as the partial derivative of $f$ w.r.t. $\widehat{\Theta}_0$ and similarly for $\partial_1f.$ Then,
$$
\begin{align*}
\partial_0\mathrm{RSS}&=\sum_{i=1}^{n} \partial_0(Y_i-\widehat{\Theta}_0-\widehat{\Theta}_1X_i)^2\\
&=-2\sum_{i=1}^{n} (Y_i-\widehat{\Theta}_0-\widehat{\Theta}_1X_i)
\end{align*}
$$
Setting it to $0$ we arrive at the equations
$$
\begin{align*}
\sum_{i=1}^{n} (Y_i-\widehat{\Theta}_0-\widehat{\Theta}_1X_i)&=0\\
\sum_{i=1}^{n} (Y_i-\widehat{\Theta}_1X_i)&=n\widehat{\Theta}_0\\
\widehat{\Theta}_0&=\widehat{Y}-\widehat{\Theta}_1\overline{X}
\end{align*}
$$
Similarly, 
$$
\begin{align*}
\partial_1\mathrm{RSS}&=-2\sum_{i=1}^{n} X_i(Y_i-\widehat{\Theta}_0-\widehat{\Theta}_1X_i)\\
&=-2\sum_{i=1}^{n} (X_iY_i-\widehat{\Theta}_0X_i-\widehat{\Theta}_1X_i^{2})\\
&=-2\sum_{i=1}^{n} (X_iY_i-X_i\overline{Y}+X_i\widehat{\Theta}_1\overline{X}-\widehat{\Theta}_1X_i^{2})\\
&=-2\sum_{i=1}^{n} (X_iY_i-X_i\overline{Y}-\widehat{\Theta}_1(X_i^{2}-\overline{X}X_i))\\
&=-2\left( \sum_{i=1}^{n} (X_iY_i-X_i\overline{Y})-\widehat{\Theta}_1\sum_{i=1}^{n} (X_i^{2}-\overline{X}X_i) \right) 
\end{align*}
$$
Setting this to $0$ we get the following equations:
$$
\begin{align*}
\sum_{i=1}^{n} (X_iY_i-X_i\overline{Y})-\widehat{\Theta}_1\sum_{i=1}^{n} (X_i^{2}-\overline{X}X_i)&=0\\
\sum_{i=1}^{n} (X_iY_i-X_i\overline{Y})&=\widehat{\Theta}_1\sum_{i=1}^{n} (X_i^{2}-\overline{X}X_i)\\
\dfrac{1}{n}\sum_{i=1}^{n} X_iY_i-\overline{Y}\dfrac{1}{n}\sum_{i=1}^{n} X_i&=\widehat{\Theta}_1\left( \dfrac{1}{n}\sum_{i=1}^{n} X_i^{2}-\overline{X}\dfrac{1}{n}\sum_{i=1}^{n} X_i \right) \\
\overline{S}_{X,Y}&=\widehat{\Theta}_1\overline{S}^{2}_X\\
\widehat{\Theta}_1&=\dfrac{\overline{S}_{X,Y}}{\overline{S}^{2}_X}
\end{align*}
$$
```

This relies on there being an *approximate* linear relation, so there may well be a non-linear relation which is close to linear. It can be shown these are unbiased estimators, and from this we find an unbiased estimator of $\sigma.$

> [!thm]+
> - $\hat{\Theta}$ is an unbiased estimator of $\theta.$
> - $\hat{S}^{2}=\dfrac{\mathrm{RSS}}{n-2}=\dfrac{|\hat{W}|^{2}}{n-2}$ is an unbiased estimator of $\sigma^{2}.$
> - $V[\hat{\Theta}_0\mid X]=V[\hat{\Theta}_1\mid X]\cdot |X|^{2}/n.$
> - $V[\hat{\Theta}_1\mid X]=\left( \dfrac{\sigma}{\overline{S}_nn} \right)^{2}.$
> - $\hat{SE}(\hat{\Theta}_1\mid X)=\displaystyle\dfrac{\mathrm{RSS}}{(n-2)\sum_{i=1}^{n}(X_i-\overline{X})^2}=\dfrac{\sum_{i=1}^{n}(Y_i-\widehat{Y}_i)^{2}}{(n-2)\sum_{i=1}^{n}(X_i-\overline{X})^{2}}.$

More conventional properties like consistency and asymptotic normality require further assumptions.

> [!thm]+
> Under suitable assumptions, $\hat{\Theta}$ is consistent and its components are asymptotically normal.

Due to this, we can reliably construct $1-\alpha$ confidence intervals for $\theta_0$ and $\theta_1.$ For similar reasons, they can be used for a Wald test for the hypotheses $H_{0,0}:\theta_0=\theta'$ and $H_{1,0}:\theta_1=\theta'$ with two-sided alternatives.

> [!rem] ***Interpretation***
> $\widehat{Y}_i$ we interpreted not only as the predicted value of $Y_i,$ it is also taken as the estimated mean of the $Y_j$ s.t. $X_j=X_i.$ Note that given the model, $E[Y\mid X=X_i]=\theta_0+\theta_1X_i+0=\theta_0+\theta_1X_i.$ Then, $$\widehat{Y}_i=\widehat{\Theta}_0+\widehat{\Theta}_1X_i$$
> is simply the estimated conditional expectation. When $X$ is continuous or has a large discrete range, we might not have many observations taking on the value $X_i,$ hence estimating it with all the observations alongside the value of $X_i$ can be cost-effective. In practice we only use the fitted values for $X$ values which are not far from the range of the observations.

Perhaps $Y$ is not exactly a linear function of $X,$ if it is a function of $X$ at all, or the observations $Y_i$ vary in their value for reasons other than just the linear relation and the value of $X_i.$ Often we are interested in the degree to which $V[Y]$ is explained by the approximate linearity and for this we introduce new terminology.

> [!def] ***Sums of Square***
> - The **total sum of squares** is the quantity $$SS_T=n\overline{S}_Y^2=\sum_{i=1}^{n} (Y_i-\overline{Y})^{2}.$$
> - The **explained sum of squares** is the quantity $$SS_{exp}=\sum_{i=1}^{n} (\widehat{Y}_i-\overline{Y})^{2}.$$

Simple algebraic manipulations allow us to express $SS_T$ in terms of $SS_{exp}$ and $\mathrm{RSS}:$

> [!thm]
> $$SS_T=SS_{exp}+SS_E=SS_{exp}+\mathrm{RSS}.$$

To the extent that the linear relationship between $X$ and $Y$ holds and 'explains' the value of $V[Y],$ we might measure it as the ratio between $E[(r(X)-E[Y])^2]$ and $V[Y].$ Note that the $W_i$ represent measurement errors and noise, hence we ignore it. When the relationship holds exactly, this ratio is $$\dfrac{\theta_1^{2}V[X]}{\theta_1^{2}V[X]+\sigma^{2}}.$$
The higher the variance of noise, the less of $V[Y]$ can be explained by the linear relation. For samples, we estimate this with $$\dfrac{SS_{exp}/n}{SS_{T}/n}.$$

> [!def] ***Coefficient of Determination***
> $$R^2=\dfrac{SS_{exp}/n}{SS_T/n}=\dfrac{SS_{exp}}{SS_T}.$$

For simple linear regression, we may compute it more simply as $R^2=\widehat{r}^{2}$ (see [[Classical-Estimation#Sample Covariance|here]] for more).

> [!thm]
> For simple linear regression, $R^2=\widehat{r}^2.$

```ad-note
title:Derivation
collapse:closed

Since $$\widehat{r}^{2}=\dfrac{(n\overline{S}_{X,Y})^{2}}{n\overline{S}^{2}_Xn\overline{S}_{Y}^{2}}=\dfrac{(n\overline{S}_{X,Y})^{2}}{n\overline{S}_X^{2}SS_T},$$
it is enough to show $(n\overline{S}_{X,Y})^2/n\overline{S}_X^{2}=\sum_{i=1}^{n}(\widehat{Y}_i-\overline{Y})^{2}.$
$$
\begin{align*}
\sum_{i=1}^{n} (\widehat{Y}_i-\overline{Y})^{2}&=\sum_{i=1}^{n} (-\widehat{\Theta}_1\overline{X}+\widehat{\Theta}_1X_i)^{2}\\
&=\widehat{\Theta}_1^{2}\sum_{i=1}^{n}(X_i-\overline{X})^{2}\\
&=\dfrac{(\overline{S}_{X,Y})^{2}}{\overline{S}_X^4}n\overline{S}_X^{2}\\
&=\dfrac{n^2(\overline{S}_{X,Y})^{2}}{n\overline{S}_X^{2}}\\
&=\dfrac{(n\overline{S}_{X,Y})^{2}}{n\overline{S}_X^{2}}
\end{align*}
$$
```

#### Why Least Squared Residuals?
There are different kinds of simplifying model assumptions that could justify our claim that a good estimate minimises the sum of square residuals.
##### Linear Model with Normal Noise
Suppose $W_i\mid x_i\sim\mathcal{N}(0,\sigma^{2})$ are IID. Then the $Y_i\mid x_i\sim\mathcal{N}(\mu_i,\sigma^{2})$ are independent normal variables with mean $\mu_i=\theta_0+\theta_1x_i$ (collecting these in a vector $\mu$) and common variance $\sigma^2.$ Note $\mu_i$ is the $i$-th fitted value. Our focus is on the joint distribution, in this case the likelihood: $$\pi(x_i,y_i)=\pi(x_i)\pi(y_i\mid x_i)\propto \pi(x_i)\dfrac{1}{\sigma}\exp\left( -\dfrac{(y_i-\mu_i)^{2}}{2\sigma^{2}} \right)=\dfrac{\pi(x_i)}{\sigma}\exp\left( -\dfrac{(y_i-\theta_0-\theta_1x_i)^{2}}{2\sigma^{2}} \right) .$$
$\pi(x_i)$ is independent of $\theta$ and $\sigma$ so we can ignore it. Due to independence, the full (conditional) likelihood is
$$
\begin{align*}
\pi(\mathbf{y}\mid \mathbf{x};\theta_0, \theta_1)=\prod_{i=1}^{n}\pi(y_i\mid x_i;\theta_0,\theta_1)&\propto \sigma^{-n}\exp\left( -\frac{|\mathbf{y-\mu}|^{2}}{2\sigma^{2}}\right)\\
&=\sigma^{-n}\exp\left( -\frac{|\hat{w}|^{2}}{2\sigma^{2}}\right)\\
&=\sigma^{-n}\exp\left( -\frac{1}{2\sigma^{2}}\sum_{i=1}^{n} (y_i-\mu_i)^{2}\right).
\end{align*}
$$
The ML estimate would have us maximise it by changing the estimators $\hat{\Theta}_0$ and $\hat{\Theta}_1,$ meaning we are to maximise the expression inside the $\exp(-),$ which in turn is equivalent to minimising RSS for we have a negative sign. In this context, the linear regression estimates are unbiased, and further the variances of the estimators can be calculated explicitly.

> [!thm]
> If $W_i\mid x_i\sim\mathcal{N}(0, \sigma^2)$ and $Y_i\mid x_i\sim\mathcal{N}(\mu_i, \sigma^{2})$ where $\mu_i=\theta_0+\theta_1x_i,$ for different indices the corresponding variables are independent of these, and $$Y_i=\theta_0+\theta_1X_i+W_i,$$
> then the ML estimators of $\theta_0$ and $\theta_1$ are the least squares estimator.

If we do not happen to know $\sigma^{2},$ treating it as a parameter the ML estimator, maximising the conditional likelihood still, is $|\mathbf{y-\mu}|^{2}/n.$

##### Approximate Bayesian LLMS Estimation of a General Model
Assume that both the $x_i$ and $y_i$ are realisations of corresponding random variables. The pairs $(X_i, Y_i)$ are IID but with an unknown (possibly non-linear) distribution. Consider an additional, independent, zeroth pair $(X_0, Y_0)$ with the same distribution. Assume lastly that we observe $X_0$ and want to estimate $Y_0$ using a [[Bayesian-Estimation#Bayesian Linear LMS Estimation#Single Observation|LLMS]] estimator of the form $$\hat{Y}_0=\hat{\Theta}_0+\hat{\Theta}_1X_0.$$
We know then that the LLMS estimator of $Y_0$ given $X_0$ is given by $$\hat{Y}_0=E[Y_0]+\rho\sqrt{ \dfrac{V[Y]}{V[X]} }(X_0-E[X_0])=E[Y_0]+\dfrac{\operatorname{cov} (X,Y)}{V[X]}(X_0-E[X_0]).$$
Thus, $$\hat{\Theta}_0=E[Y_0]-\hat{\Theta}_1E[X_0],\quad\quad \hat{\Theta}_1=\frac{\operatorname{cov}(X_0, Y_0)}{V[X_0]}.$$
Here $\hat{\Theta}_0$ plays the role of $a$ and $\hat{\Theta}_1$ the role of $b.$ We have no knowledge of distribution of $(X_0, Y_0),$ hence we use SM estimates for $E[X_0]$ and $E[Y_0],$ the biased SV estimate for $V[X_0],$ and we estimate the covariance with $$\frac{1}{n}\sum_{i=1}^{n} (x_i-\overline{x})(y_i-\overline{y}).$$
Substituting these values for $\hat{\Theta}_0$ and $\hat{\Theta}_1$ again gives us the expression for linear regression. This is for the general case where the $X_i$ and $Y_i$ could have a non-linear relationship, only our choice of estimator was linear.
###### Bayesian LLMS for a Linear Model
Again let the pairs $(X_i, Y_i)$ be random and IID but now also assume they satisfy the equation $$Y_i=\theta_0+\theta_1X_i+W_i,\quad\forall i,$$
where as above the $W_i$ are IID zero-mean normal variables independent of the $X_i$ with variance $\sigma^{2}.$ Now, we [[Bayesian-Estimation#Least Mean Squares|know]] $E[Y_0\mid X_0]$ minimises the mean squared error $E[(Y_0-g(X_0))^{2}]$ for all functions $g.$ Our assumptions yield $E[Y_0\mid X_0]=\theta_0+\theta_1X_0.$ The $W_0$ has mean $0$ and under any realisation of $X_0$ its expected value is a constant, hence we have $X_0$ instead of $E[X_0].$ Thus the unknown constant parameters $\theta_0$ and $\theta_1$ minimise $$E[(Y_0-\hat{\Theta}_0-\hat{\Theta}_1X_0)^{2}],$$
over all $\hat{\Theta}_0$ and $\hat{\Theta}_1.$ By the [[Convergence-Phenomena-and-Inequalities#Weak Law|weak]] law of large numbers this is nothing but the limit of the sum of square residuals divided by $n.$ That is, $$\lim_{n \to \infty}\frac{1}{n}\sum_{i=1}^{n} (Y_i-\hat{\Theta}_0-\hat{\Theta}_1X_i)^{2}=E[(Y_0-E[Y_0\mid X_0])^{2}].$$
If, given finitely many observations for a large $n,$ we replace the variables on the RHS by their observed values, then values $\hat{\Theta}_0$ and $\hat{\Theta}_1$ which minimise the above expression, because the true values do as well, are good estimators of $\theta_0$ and $\theta_1.$ Note that both of the above justifications approximate a Bayesian estimator with frequentist methods.
### Multiple Regression
A model of this kind would base its estimate on, say, triples of the form $(x_i, y_i, z_i)$ and our goal is to estimate the unknown parameters $\theta_j$ in $$y_i\approx \theta_0+\theta_1x_i+\theta_2z_i,\quad\forall i.$$
We do this again by minimising the sum of squared residuals over the $\theta_j:$ $$\sum_{i=1}^{n} (y_i-\theta_0-\theta_1x_i-\theta_2z_i)^{2}.$$
Now we generalise to multiple variables, at the cost of having a matrix of variables.

> [!def]+ ***General Linear Regression Models***
> Let $\mathbf{Y}=(Y_1,\ldots, Y_n)^T$ be a vector of IID random variables, $\mathbf{x}$ an $n\times m$ matrix for $m\leqslant n,$ $\vec\theta=(\theta_0,\ldots, \theta_m)$ a vector of unknown parameters, and $\mathbf{H}$ be a matrix with $n$ rows where a row $i$ is of the form $(1, h_1(x_{i, 1}),\ldots, h_m(x_{i, m})),$ where the $h_j$ are real-valued functions that capture the expected dependence of $Y_i$ on $\mathbf{x}_i.$ Based on realised observation pairs $(y_i, \mathbf{x}_i)$ of the random vector and the $i$-th row of $\mathbf{x},$ a **Linear Regression** model supposes these obey the approximate equality $$\mathbf{y}\approx \mathbf{H}\vec\theta.$$
> Our estimate for $\vec\theta$ is the vector $\hat{\Theta}$ that minimises the inner product of $\mathbf{y}-\mathbf{H}\hat{\Theta}$ with itself, i.e. our estimators minimise $$\sum_{i=1}^{n} \left( y_i-\hat{\Theta}_0-\sum_{j=1}^{m} \hat{\Theta}_jh_j(x_{i, j}) \right)^{2},$$
> over all $\hat{\Theta}_k.$ 

The functions $h_j$ could result in $\mathbf{H}_i\cdot\vec\theta$ being a non-linear function of the $x_i,$ for example $$y_i\approx \theta_0+\theta_1x_i+\theta_2x_i^{2},.$$
But this product will always be a linear function of the $\theta_j$ and those have closed form solutions or efficient numerical approximations. A related, more common measure to the sum of squared residuals, which is minimised exactly when said sum is minimised, provides as much information and comes with a nice interpretation:

> [!def] ***Residual Standard Error (RSE)***
> The **residual standard error (RSE)** of a linear regression model is $$\mathrm{RSE}=\dfrac{|\widetilde{\mathbf{y}}|}{\sqrt{df}}.$$

For $df\approx n,$ this is approximately the average error in our fitted values.

### General Regression Models
There are more general models where the $y_i$ could obey an approximate equality with $h(\mathbf{x}_i; \theta)$ possibly being a non-linear function of $\theta:$ $$y_i\approx h(\mathbf{x}_i;\theta),\quad\forall i.$$
We are to minimise the sum $$\sum_{i=1}^{n} (y_i-h(\mathbf{x}_i;\theta))^{2}.$$
To see why this is the right course of action, consider the model $$Y_i=h(\mathbf{x}_i;\theta)+W_i,$$
where the $W_i$ are IID zero-mean normal random variables with common variance $\sigma^{2}.$ The ML estimator maximises the the exponent in the likelihood function $$\pi(\mathbf{y}; \theta)=\prod_{i=1}^{n}\frac{1}{\sqrt{ 2\pi }\sigma}\exp\left( -\frac{(y_i-h(\mathbf{x}_i;\theta))^{2}}{2\sigma^{2}} \right) .$$
As before this is equivalent to minimising the above sum. This has no closed form in general and need not even admit efficient numerical approximations but may be more appropriate to the specific circumstance. In practice, non-linear regression models typically have computationally cheap methods (relatively speaking).

#### Practical Considerations
Beyond the presence of a non-linear relation between $y_i$ and the explanatory variables, other problems could appear in practice.

> [!def] ***Heteroskedasticity***
> When relevant variables do not have a common variance. Its opposite is **homoskedasticity.**

In our justifying regression models through ML estimation on zero-mean normal noise models we assumed the noise that affected each data pair had a common variance $\sigma^{2}.$ It can happen, however, that the $W_i,$ even if IID, do not share a common variance and may be strongly affected by the value of $\mathbf{x}_i.$ Such a situation is called **heteroskedasticity.** A possible solution is to consider a **weighted** sum of squared residuals where the weights $\alpha_i$ are inversely proportional to the variance of $W_i.$

> [!rem] ***Assessing Heteroskedasticity***
> In a regression plot, the range of the observed $Y$ values for $X$ values around $x$ should be roughly equal for all $x.$

> [!def] ***Leverage***
> The **leverage** of the observation $X_i$ is $X_i-E[X],$ or, for samples, $X_i-\overline{X}.$

Some observations shift the estimated linear parameters more than others. Observation pairs with a high absolute leverage and absolute residual tend to influence $\widehat{\Theta}_0$ and $\widehat{\Theta}_1$ the most for they are outliers and the OLS estimators are functions of [[Classical-Estimation|non-resistant]] estimators, i.e. the sample mean, sample variance, and sample covariance. When the range of the $X_i$ is large, we care more about the influence of outliers on $\widehat{\Theta}_1.$

- **Multicollinearity.** If there is a linear relation between $Y$ and the explanatory variables, there could still be a linear relation among the explanatory variables, say observation vectors $\mathbf{x}$ and $\mathbf{z}$ s.t. $\mathbf{z}=2\mathbf{x}.$ Then, a model of the form $Y_i=2x_i+1$ cannot be distinguished from the model $Y_i=z_i+1$ merely through regression. In general, if there is a sufficiently strong relation between some of the explanatory variables, there will be multiple indistinguishable models.
- **Overfitting.** When there are a large number of explanatory variables and unknown parameters, there is a danger of creating a model that **fits** the data well—the pairs it produces are very close to the observed data pairs—but that is incorrect. It could, for example, wildly diverge from the true relation everywhere outside the range of our observations or for the values between our observations. In the 2-dimensional case of a single explanatory variable, with $n$ observation pairs there are uncountably many functions of the $x_i$ which pass through the data pairs but differ elsewhere.
- **Causality.** Regression models by themselves do not reveal the direction of causality. It might be that the explanatory variable $\mathbf{x}$ truly has a causal effect on $Y.$ However, it could also be that there is an additional variable $\mathbf{z}$ which causally effect $\mathbf{x}$ and $Y$ in similar ways that makes them appear to have an approximately linear relation.

## Non-Linear Regression

> [!rem] ***Place of Error***
> If there is a reason to think $Y_i=f(\theta\cdot X_i+W_i),$ where now the $X_i$ are vector-valued, instead of $Y_i=r(X_i)+W_i,$ the former can be a more useful representation when $f$ is injective for then we can transform the problem into a linear regression problem.

### Exponential and Power Models

> [!def] ***Exponential and Power Models***
> Given IID pairs $\{(X_i,Y_i)\}_{i=1}^{n},$ a **power model** supposes $$Y_i=r(X_i)+W_i=\theta_0X_i^{\theta_1}+W_i,$$
> assuming the expression $X_i^{\theta_1}$ is defined, i.e. it is not simultaneously true that $X_i<0$ and either $\theta_1$ is a rational number which in lowest terms has an even denominator or $\theta_1$ is irrational. An **exponential model,** in contrast, supposes $$Y_i=r(X_i)+W_i=\theta_0\theta_1^{X_i}+W_i.$$
> For both models we impose the same restrictions on the $W_i$ as in the [[#Simple Regression|linear]] case.

If it is more appropriate to think, e.g., that $Y_i=\theta_0\theta_1^{X_i}W_i,$ we use that instead.
