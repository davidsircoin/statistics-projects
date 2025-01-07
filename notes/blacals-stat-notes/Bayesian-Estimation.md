Tags: [[Stats]], [[Statistical-Methods]], [[Inferential-Statistics]], [[Bayesian-Inference]]

# Point Estimation
In Bayesian inference problems all relevant information provided by an [[Bayesian-Inference#Posterior Distribution|observation vector]] $X$ but at times we are interested in certain quantities that summarise traits of the posterior. A **point estimate** is a single value that represents our best guess as to what $\Theta$ is, be that a single real number or a single vector in $\mathbb{R}^n.$

> [!def] Estimators and Estimates
> Let $\Theta$ be an unknown factor we wish to estimate.
> 
> - **Estimator.** If $X$ is an observation vector, the random variable $\hat{\Theta}=g(X)$ is called an *estimator* of $\Theta.$
> - **Estimate.** If we make an observation $X=x,$ the value $g(x)=\hat{\theta}$ is called an *estimate* of $\Theta.$

An estimator is called **unbiased** when its conditional and unconditional means are zero. Some popular estimators include:
- **Maximum a Posterior Probability (MAP)** estimator; $\hat{\theta}$ is the value so that the posterior distribution at that value is a maximum. If there are multiple maxima, it arbitrarily chooses one.
- **Least Mean Squares (LMS)** estimator; $\hat{\theta}=E[\Theta\mid X=x].$
 
## Point Estimation Methods
### Maximum a-Posteriori Probability

> [!def] Maximum a Posterior Probability (MAP) Estimate
> Let $\Theta$ be a random variable representing an unknown factor we wish to estimate. Given an observation $X=x,$ we select the value $\hat{\theta}$ that maximises the posterior distribution: $$\hat{\theta}=\arg \max_{\theta} \pi(\theta\mid x).$$

It has intriguing interpretations if $\Theta$ is discrete for in that case the MAP rule maximises the probability of picking the correct value of $\Theta,$ though analytic solutions may not be available. In the continuous case they might be found by setting the derivative of $\pi(\theta\mid x)$ or of $\ln\pi(\theta\mid x)$ to $0$ and solving for $\theta.$ In some cases, however, numerical methods are needed even here.

```ad-summary
title:Explanation
collapse:closed

Consider a general decision rule which selects a value $g(x)$ of $\theta$ upon observing the value $x.$ Denote the MAP rule by $g_{\mathrm{MAP}}(x)$ upon observing the same value. Let $I$ and $I_{\mathrm{MAP}}$ be Bernoulli random variables taking on the value $1$ if the general decision rule and the MAP rule, respectively, make a correct decision—otherwise $0.$ Then, $\{I=1\}$ and $\{ g(X)=\Theta\}$ are equivalent and similarly for $I_{\mathrm{MAP}}$ and $g_{\mathrm{MAP}}(X).$ By definition it follows that, for any value $x$ that $X$ could take, $$E[I\mid X]=P(g(X)=\Theta\mid X)\leqslant P(g_{\mathrm{MAP}}=\Theta\mid X)=E[I_{\mathrm{MAP}}\mid X].$$
The first and last equalities follows from $I$ and $I_{\mathrm{MAP}}$ being Bernoulli random variables. The [[Joint-Random-Variables#Conditional Expectation and Variance#Expectation|law]] of iterated expectation gives us $$E[E[I\mid X]]=E[I]\leqslant E[E[I_{\mathrm{MAP}}\mid X]]=E[I_{\mathrm{MAP}}] .$$
It is easy to show iterated expectation preserves inequalities. Equivalently, $$P(g(X)=\Theta)\leqslant P(g_{\mathrm{MAP}}(X)=\Theta).$$
Thus, the MAP rule, out of all decision rules, maximises the probability that we choose correctly. Note that this requires $\Theta$ be discrete for if, conditioned on $X=x,$ it were continuous then the probability of a correct decision is $0$ under any rule.
```

In general, since the denominator in $\pi(\theta\mid x)$ does not depend on $\theta,$ instead it depends on $x,$ and since both the numerator and denominator are non-negative, maximising the posterior value is equivalent to maximising $\pi(\theta)\pi(x\mid \theta).$ If the posterior is **unimodal** (i.e. has a single maximum) and it is symmetric around the mean, then the maximum value occurs at the mean, i.e. the single maximum value is $\pi(E[\Theta\mid X=x]\mid x).$
### Least Mean Squares

> [!def] Least Mean Squares (LMS) Estimate
> If we wish to estimate an unknown parameter $\Theta$ given an observation $X,$ the conditional expectation of $\Theta$ given $X,$ denoted $\hat{\Theta}=E[\Theta\mid X],$ minimises the estimation error: $$E[(\Theta-\hat{\Theta})^2]\leqslant E[(\Theta-g(X))^2],\qquad\forall \text{ estimators }g(X).$$

Consider first the problem of estimating $\Theta$ with a constant $\hat{\theta}$ prior to any observations. Although the estimation error $\hat{\theta}-\Theta$ is random, the **mean squared error** $E[(\Theta-\hat{\theta})^2]$ is a function of $\hat{\theta},$ so we may minimise it over $\hat{\theta},$ i.e. find a value of $\hat{\theta}$ for which the mean squared error is a minimum value. As it turns out, $E[\Theta],$ a number, is such a minimal value. First note that, for any estimate $\hat{\theta},$ $$E[(\Theta-\hat{\theta})^{2}]=V[\Theta-\hat{\theta}]+(E[\Theta-\hat{\theta}])^{2}=V[\Theta]+(E[\Theta]-\hat{\theta})^{2}.$$
The first equality follows from $E[Y^2]=V[Y]+E[Y]^2$ for any random variable $Y,$ and the second holds due to the linearity of expectation and that $\hat{\theta}$ is a constant. To minimise this, then, is to minimise $(E[\Theta]-\hat{\theta})^{2}.$ This occurs only when $E[\Theta]-\hat{\theta}=0,$ or equivalently when $E[\Theta]=\hat{\theta}.$
$\qquad$Now, suppose we wish to estimate $\Theta$ based on an observation $X.$ Upon knowing the value $x$ of $X,$ the situation is identical: we are asked to minimise the function $E[(\Theta-\hat{\theta})^2\mid X=x]$ of $\hat{\theta}.$ Similar arguments as above reveal that $E[\Theta\mid X=x]$ minimises the conditional mean squared error.
$\qquad$More generally, for any estimator $g(X),$ the (unconditional) mean squared estimation error of $g(X)$ is defined as $$E[(\Theta-g(X))^{2}].$$
If we view $E[\Theta\mid X]$ as an estimator of $\Theta$ based on $X,$ the analysis above shows that the mean squared estimation error of $g(X)$ is minimised when $g(X)=E[\Theta\mid X].$ More formally, for any value $x$ of $X,$ we have that $$E\left[ (\Theta-E[\Theta\mid X=x])^{2}\mid X=x \right]\leqslant E\left[ (\Theta-g(x))^{2}\mid X=x \right].$$
Thus, $$E\left[ (\Theta-E[\Theta\mid X])^{2}\mid X \right]\leqslant E\left[ (\Theta-g(X))^{2}\mid X\right].$$
The law of iterated expectations allows to conclude $$E\left[ (\Theta-\hat{\Theta})^{2} \right]\leqslant E\left[ (\Theta-g(X))^{2} \right],\qquad\forall \text{ estimators }g(X).$$
> [!rmk] MAP and LMS Estimates Differ in Estimation Error
> By design, the estimation error of the MAP estimate is greater than or equal to that of the LMS estimate but they often differ by some degree.

The LMS estimate might lay close to the value chosen by MAP, usually more so as we make more observations, but both give *no guarantee of accuracy* in the general case. 
#### Additional Properties
Let $\hat{\Theta}=E[\Theta\mid X]$ be the LMS estimate and $\tilde{\Theta}=\hat{\Theta}-\Theta$ the **estimation error.** 

> [!thm] The Estimation Error is Unbiased
> $$E[\tilde{\Theta}]=0,\qquad\qquad E[\tilde{\Theta}\mid X=x]=0,\qquad\forall x.$$

First note that
$$
\begin{align*}
E[\tilde{\Theta}\mid X]&=E[\hat{\Theta}-\Theta\mid X]\\
&=E[\hat{\Theta}\mid X]-E[\Theta\mid X]\\
&=E[E[\Theta\mid X]\mid X]-\hat{\Theta}\\
&=E[\Theta\mid X]-\hat{\Theta}\\
&=\hat{\Theta}-\hat{\Theta}\\
&=0.
\end{align*}
$$
The fourth equality follows since, for each $x,$ $E[\Theta\mid X=x]$ is just a number which, for any $x',$ the conditional expectation $E[c\mid X=x']$ simply returns. That is, $$E[E[\Theta\mid X=x]\mid X=x'],\qquad\forall x,x'.$$
By the law of [[Joint-Random-Variables#Conditional Expectation and Variance|iterated expectation]], $E[\tilde{\Theta}]=E[E[\tilde{\Theta}\mid X]]=E[0]=0.$ Thus, for any value $x$ of $X,$ the conditional expected value of $\tilde{\Theta}$ is $0.$

> [!thm] The Estimation Error and the Estimate are Uncorrelated
> $$\operatorname{cov}(\hat{\Theta}, \tilde{\Theta})=0.$$
> 
> See [[Joint-Random-Variables#Covariance and Correlation|here]] for more on the covariance.

By definition, $\operatorname{cov}(\hat{\Theta}, \tilde{\Theta})=E[\hat{\Theta}\tilde{\Theta}]-E[\hat{\Theta}]E[\tilde{\Theta}]=E[\hat{\Theta}\tilde{\Theta}].$ But, the law of iterated expectation tells us that $$E[\hat{\Theta}\tilde{\Theta}]=E[E[\hat{\Theta}\tilde{\Theta}\mid  X]]=E[\hat{\Theta}E[\tilde{\Theta}\mid X]]=0.$$
The second equality follows from a similar argument as above. Let $x$ and $x'$ be arbitrary values of $X.$ Then,
$$
\begin{align*}
E[\hat{\Theta}\tilde{\Theta}\mid X=x']&=E\left[ \hat{\Theta}^2\mid X=x' \right]-E\left[ \Theta \hat{\Theta}\mid X=x' \right]\\
&=E\left[ E[\Theta\mid X=x]^2\mid X=x' \right]-E\left[ \Theta E[\Theta\mid X=x]\mid X=x' \right]\\
&=E[\Theta\mid X=x]E\left[ E[\Theta\mid X=x]\mid X=x' \right]-E[\Theta\mid X=x]E\left[ \Theta \mid X=x' \right]\\
&=\hat{\Theta}(E\left[ E[\Theta\mid X=x]\mid X=x' \right]-E[\Theta\mid X=x'])\\
&=\hat{\Theta}E\left[\hat{\Theta}-\Theta\mid X=x'\right]\\
&=\hat{\Theta}E\left[ \tilde{\Theta}\mid X=x' \right].
\end{align*}
$$
Clearly from this we derive the second equality. Hence $\operatorname{cov}(\hat{\Theta}, \tilde{\Theta})=0.$

> [!thm] Decomposition of Variance
> $$V[\Theta]=V[\tilde \Theta]+V[\hat \Theta].$$

It immediately follows from the definitions that $\Theta=\hat{\Theta}-\tilde{\Theta}.$ The variance of a sum of random variables is the sum of their variances [[Joint-Random-Variables#Covariance and Correlation|plus]] their covariance, so $$V[\Theta]=V[\hat{\Theta}-\tilde{\Theta}]=V[\hat{\Theta}]+V[-\tilde{\Theta}]+2\operatorname{cov}(\hat{\Theta}, -\tilde{\Theta})=V[\hat{\Theta}]+V[\tilde{\Theta}].$$
#### Uninformative Observations

> [!def] Definition
> An observation $X$ is **uninformative** only if the mean squared error $E[\tilde{\Theta}^2]=V[\tilde{\Theta}]$ is the same as the variance $V[\Theta].$

The decomposition of the variance of $\Theta$ tells us $X$ being uninformative is equivalent to $V[\hat{\Theta}]=0.$ For certain distributions, this is equivalent to $$E[\Theta\mid X]=\hat{\Theta}=E[\hat{\Theta}]=E[E[\Theta\mid X]]=E[\Theta].$$
If $X$ and $\Theta$ are independent, and the distributions of $\Theta$ are 'nice,' then $X$ is uninformative. The converse, however, is not generally true.
#### Multi-Parameter Case
Suppose now that $X=(X_1,\ldots,X_n)$ is a vector, instead of a single random variable, whilst $\Theta$ is still a single parameter. The optimality of the LMS estimate remains in this more general case.

> [!thm] Generalising
> For any estimator $g(X),$ we have that $$E\left[(\Theta-E[\Theta\mid X])^2\right]\leqslant E\left[(\Theta-g(X))^2\right].$$

The computation of $\hat{\Theta}$ in this context is often unwieldy for it involves a complete expression of $\pi(\theta\mid x_1,\ldots,x_n),$ which even if it is available $E[\Theta\mid X]$ might be a very complex function of $n$ many random variables. An optimal estimator is not always desirable and it is common to need a computationally-simpler estimator that is close enough for practical purposes. We can generalise further at the cost of ease of computation.

> [!def] Fully Generalised LMS Estimate
> Suppose we wish to estimate finitely many parameters $\{\Theta_i\}_{i=1}^{m}$ based on multiple observations $X=(X_1,\ldots,X_n).$ Let $\{\hat \Theta_i\}_{i=1}^m$ be a family of estimators. We now wish to minimise the expression $$\sum_{i=1}^m E\left[(\Theta_i-\hat\Theta_i)^2\right],$$
> for each of the estimators. This is equivalent to minimising $E\left[ (\Theta_i-\hat\Theta_i)^{2} \right]$ for each $i.$
> $$\hat{\Theta}_i=E[\Theta_i\mid X]\text{ minimises }E\left[ (\Theta_i-\hat\Theta_i)^{2} \right],\qquad\forall i.$$

#### Bayesian Linear LMS Estimation

> [!def] Linear LMS (LLMS) Estimator
> A linear estimator of $\Theta,$ based on observations $X=(X_1,\ldots,X_n),$ is of the form $$\hat\Theta=\sum_{i=1}^na_iX_i+b=a_1X_1+\cdots+a_nX_n+b,$$
> for scalars $\{a_i\}_{i=1}^n$ and $b.$ The **linear LMS estimator** chooses scalars to minimise the mean squared error of $\hat\Theta:$ $$E\left[ \left( \Theta-\sum_{i=1}^na_iX_i-b \right)^2  \right]=E\left[ (\Theta-a_1X_1-\cdots-a_nX_n-b)^2\right].$$

This class of estimators involves simple computation and reasoning, with only means, variances, and covariances of parameters and observations, at the cost of a higher mean squared error. The $3$ nice properties of the general LMS estimator hold for the LLMS estimator.
##### Single Observation
With a single observation $X,$ we are tasked in finding scalars $a$ and $b$ which minimise the mean squared error $E\left[ (\Theta-aX-b)^{2} \right]$ of the learn estimator $aX+b$ of $\Theta.$ It is enough to consider our choice of $a$ for $b$ is expressible in terms of $a.$ Indeed, a minimal choice of $b$ is equivalent to choosing an estimator for $\Theta-aX$ with a minimal mean estimation error. We know this must be $$b=E[\Theta-aX]=E[\Theta]-aE[X].$$
Thus, we must find a scalar $a$ which minimises the expression $$E\left[ (\Theta-aX-E[\Theta]+aE[X])^{2} \right] .$$
This is nothing but $$V[\Theta-aX]=\sigma_\Theta^2+a^2\sigma_X^2+2\operatorname{cov}(\Theta, -aX)=a^2\sigma_X^2-2a\operatorname{cov}(\Theta, X)+\sigma_\Theta^2,$$
where $\sigma_\Theta^2$ and $\sigma_X^2$ are the variances of $\Theta$ and $X$ respectively. The covariance of $\Theta$ and $X$ is a constant, so this is a quadratic polynomial of $a.$ Simple differential calculus yields that expression is minimised for $$a=\frac{\operatorname{cov}(\Theta, X)}{\sigma_X^2}=\frac{\rho\sigma_\Theta\sigma_X}{\sigma_X^2}=\rho\frac{\sigma_\Theta}{\sigma_X},$$
where $\rho$ is the [[Joint-Random-Variables#Covariance and Correlation|correlation coefficient]] of $\Theta$ and $X.$ With these scalars, the mean squared error of our estimator is given by
$$
\begin{align*}
V[\Theta-\hat{\Theta}]&=V[\Theta-aX-b]\\
&=V[\Theta-aX]\\
&=a^2\sigma_X^2-2a\operatorname{cov}(\Theta, X)+\sigma_\Theta^2\\
&=\rho^2\frac{\sigma_\Theta^2}{\sigma_X^2}\sigma_X^2-2\rho\frac{\sigma_\Theta}{\sigma_X}\rho\sigma_\Theta\sigma_X+\sigma_\Theta^2\\
&=(1-\rho^2)\sigma_\Theta^2.
\end{align*}
$$

> [!thm] LLMS Estimator Expression
> The LLMS estimator with optimal scalars is given by
> $$\hat{\Theta}=E[\Theta]+\rho\frac{\sigma_\Theta}{\sigma_X}\left( X-E[X] \right),$$
> where $\sigma_\Theta$ and $\sigma_X$ are the standard deviations of $\Theta$ and $X$ respectively, with a mean square error of $$V[\Theta-\hat\Theta]=(1-\rho^2)\sigma_\Theta^2,$$
> where $$\rho=\frac{\operatorname{cov}(\Theta, X)}{\sigma_\Theta\sigma_X}.$$

Suppose $\rho>0.$ The LLMS estimator starts with $E[\Theta]$ as an estimate of $\Theta$ and adjusts it by $X-E[X],$ scaled by some positive amount. When $X>E[X],$ the positive correlation between $X$ and $\Theta$ suggests $\Theta$ to be larger than $E[\Theta],$ and when $X<E[X]$ it suggests $\Theta$ to be less than $E[\Theta].$ Similar statements can be made for when $\rho<0$ or when $\rho=0.$ Further, the exact value of $\rho$ tells us how accurate $\hat{\Theta}$ will be. If $|\rho|$ is close to $1,$ the mean squared error is close to $0,$ so knowing $X$ allows us to accurately estimate $\Theta.$
##### Multiple Observations and Multiple Parameters
There is a straightforward generalisation of the LLMS estimator to multi-parameter cases. Suppose we wish to estimate $\Theta=(\Theta_1, \ldots, \Theta_m)$ based on observations $X=(X_1, \ldots, X_n).$ Our goal is to minimise $$\sum_{i=1}^mE\left[ (\Theta_i-\hat{\Theta}_i)^{2} \right] $$
over all linear estimators $\hat{\Theta}_1,\ldots,\hat{\Theta}_m.$ This reduces to minimising each $E\left[ (\Theta_i-\hat{\Theta}_i)^{2} \right]$ individually. In essence, we are dealing with $m$ many LLMS estimation problems.
$\qquad$In certain cases, the calculations simplify even further. Suppose $\Theta$ is a random variable with mean $\mu$ and variance $\sigma_0^{2}.$ For each $i,$ let $X_i=\Theta+W_i,$ where $W_i$ is a random variable with mean $0$ and variance $\sigma_i^{2}$ meant to represent observation errors. Assume $\Theta$ and the $W_i$ are uncorrelated and consider the function $$h(a_1,\ldots,a_n, b)=E\left[ (\Theta-b-\sum_{i=1}^na_iX_i)^{2} \right] .$$
Setting its partial derivatives to $0$ w.r.t. $b$ and the $a_i$ and solving for them minimises this function, resulting in $$b=\frac{\mu\sigma_0^{-2}}{\displaystyle\sum_{i=0}^n\sigma_i^{-2}},\qquad\qquad a_j=\frac{\sigma_j^{-2}}{\displaystyle\sum_{i=0}^n\sigma_i^{-2}},\qquad\forall j\leqslant n.$$
Thus, $$\hat{\Theta}=\frac{\mu\sigma_0^{-2}+\displaystyle\sum_{i=1}^nX_i\sigma_i^{-2}}{\displaystyle\sum_{i=0}^n\sigma_i^{-2}}.$$
> [!rmk] Choice of Variables
> Let $\{X_i\}_{i=1}^n$ be a family of observations. If $h$ is a **bijective** function, then, for the purposes of the LMS estimator, $h(X_i)$ provides as much information as $X_i$ for each $i:$ $$E[\Theta\mid h(X_1),\ldots, h(X_n)]=E[\Theta\mid X_1,\ldots, X_n].$$
> This does not hold completely for the linear LMS estimator. At times the $X_i$ will be unhelpful (e.g. values drawn from a distribution with variance $\Theta$) in that they make the LLMS estimator highly inaccurate. Certain transformations of the $X_i$ with bijective functions will improve performance, though finding these transformations is often difficult.

##### Normal Models
There are some cases where the LMS estimator is linear in the observations $X.$ The LLMS estimator is the optimal estimator over *all* others in those cases. An important class of these cases is estimating a normal random variable $\Theta$ based on observations $X_i=\Theta+W_i,$ where the $W_i$ are independent $0$-mean normal  noise, all independent of $\Theta.$ This is equivalent to a model where $\Theta$ has a normal prior with mean and variance $x_0$ and $\sigma_0^{2}$ (more details [[Bayesian-Priors#Conditionally Independent Normal Observations|here]]). The posterior mean in that example was a linear function of the observations and known constants. Thus, the **LMS and LLMS coincide** for these normal models. If in the multi-parameter case above one replaces $\mu$ with $X_0,$ the formulas coincide. More generally,

```ad-info
title:Normal Models and LMS Estimates

If $\Theta$ and the $X_i$ are all linear function of a family of independent normal random variables, the LMS and LLMS estimators are the same. Further, the estimates will also coincide with the MAP estimator for the normal distribution is symmetric and unimodal.
```

With this in mind, we are open to another interpretation of the LLMS estimator beyond being simpler to compute: it is the best estimator were we to pretend all random variables involved are normal with known means, variances, and covariances. Thus, the LLMS estimator is not just a computational shortcut, but also represents a certain kind of model simplification.
## Bayesian Linear Regression
Given some variables $Y=(Y_1,\ldots, Y_n)$ and $X_{j}=(X_{j, 1},\ldots, X_{j,n}),$ for $1\leqslant j\leqslant m,$ where the $Y_i$ are IID and so are all the $X_{j,i}$ for each $i,$ we wish to model the relationship between the $Y_i$ and the $X_{j,i}$ based on realised observation pairs $(x_{i,1},\ldots, x_{i,m}, y_i).$ The $Y_i$ need not share a distribution or be independent from the $X_{j,i},$ and the $X_j$ also may not share a distribution—only the component vectors must be composed of IID random variables $X_{j,i}.$ These problems are often complex so we focus here on cases where a linear approximation is 'good enough.' That is, we assume $$y_i\approx \Theta_0+\Theta_1x_{i,1}+\Theta_2x_{i,2}+\cdots+\Theta_mx_{i,m},\qquad\forall i.$$
Here the $\Theta_j$ are unknown random variables we wish to estimate. We call the $X_j$ **explanatory variables.**
### Simple Regression
These are the cases where $j=1:$ $$y_i=\Theta_0+\Theta_1x_i\qquad\forall i.$$
Still we must make further simplifying model assumptions.
#### Linear Model Normal Noise
Suppose the $x_i$ are numbers rather than realisations of random variables but maintain the $y_i$ as actual values of the variables $Y_i$ obeying the linear relation $$Y_i=\Theta_0+\Theta_1x_i+W_i,\qquad\forall i\leqslant n,$$
where $\Theta=(\Theta_0, \Theta_1)$ is an unknown parameter we are to estimate and the $W_i$ are IID zero-mean normal variables with known common variance $\sigma^{2}.$ Assume that $\Theta_0, \Theta_1,$ and the $W_i$ are independent and that $\Theta_0$ and $\Theta_1$ are zero-mean normal variables and variances $\sigma_0^{2}$ and $\sigma_1^{2}$ respectively. 
$\qquad$We use the MAP estimator and our assumptions to maximise the posterior $\pi(\theta_0, \theta_1\mid \mathbf{y})$ over $\theta_0$ and $\theta_1.$ If $c$ is the reciprocal of the value obtained from the integral in the denominator of the posterior, which we note does not depend on $\theta_0$ nor on $\theta_1,$ then $$\pi(\theta_0, \theta_1\mid \mathbf{y})=c\pi(\theta_0, \theta_1)\pi(\mathbf{y}\mid \theta_0, \theta_1).$$
Under our normality assumptions this is nothing but $$c\exp\left( -\frac{\theta_0^{2}}{2\sigma_0^{2}} \right)\exp\left( -\frac{\theta_1^{2}}{2\sigma_1^{2}} \right) \prod_{i=1}^{n}\exp\left( -\frac{(y_i-\theta_0-x_i\theta_1)^{2}}{2\sigma^{2}} \right).$$
By rules of exponents, this is $$c\exp\left( -\frac{\theta_0^{2}}{2\sigma_0^{2}}-\frac{\theta_1^{2}}{2\sigma_1^{2}}-\sum_{i=1}^{n} \frac{(y_i-\theta_0-x_i\theta_1)^{2}}{2\sigma^{2}} \right) .$$
To maximise this expression over $\theta_0$ and $\theta_1$ is to minimise the negative of the inside expression: $$\frac{\theta_0^{2}}{2\sigma_0^{2}}+\frac{\theta_1^{2}}{2\sigma_1^{2}}+\sum_{i=1}^{n} \frac{(y_i-\theta_0-x_i\theta_1)^{2}}{2\sigma^{2}}.$$
Set the partial derivatives w.r.t. $\theta_0$ and $\theta_1$ to zero and solve for them.
> [!thm] Solution
> Given observation pairs $(x_i, y_i),$ the MAP estimates of $\Theta_0$ and $\Theta_1$ are
> $$
> \begin{align*}
> \hat{\Theta}_0&=\frac{n\sigma_0^{2}(\overline{y}-\hat{\Theta}_1\overline{x})}{\sigma^{2}+n\sigma_0^{2}}\\
> \hat{\Theta}_1&=\frac{\sigma_1^{2}}{\sigma^{2}+\sigma_1^{2}S_{x,x}}S_{x,y},
> \end{align*}
> $$
> where $$S_{x,x}=\sum_{i=1}^{n} (x_i-\overline{x})^{2},\qquad\qquad S_{x,y}=\sum_{i=1}^{n} (x_i-\overline{x})(y_i-\overline{y}).$$

For sufficiently large $\sigma^{2},$ when compared to $\sigma_0^{2}$ and $\sigma_1^{2},$ the estimators are close to $0$ since their denominators would be very large compared to their numerator. If the prior variances increase to infinite, the MAP estimates become independent of $\sigma^{2}$ and agree with the [[Classical-Statistical-Models#Simple Regression|classical]] Linear Regression estimators.
$\qquad$If the [[Classical-Estimation#Sample Statistics|sample mean]] $\overline{x}=0,$ the contribution of the value $y_i$ for estimating $\Theta_1$ are weighted according to the magnitude of the corresponding value $x_i.$ Intuitively, when $x_i$ is large, $\Theta_1 x_i$ will contribute greatly to the value of $Y_i$ so it will be useful when estimating $\Theta_1;$ when $x_i=0,$ the observation $Y_i$ is independent of $\Theta_1,$ hence we ignore it. The case of zero-sample-mean makes this effect stronger.
$\qquad$The MAP estimators are linear estimators of $y_i,$ though they involve the $x_i,$ for the $y_i$ are realisations of random variables but $x_i$ is a constant.