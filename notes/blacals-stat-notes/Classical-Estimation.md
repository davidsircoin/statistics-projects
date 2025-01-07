Tags: [[Stats]], [[Statistical-Methods]], [[Inferential-Statistics]], [[Classical-Inference]]

> [!def] Definitions
> - **Estimator.** Given some observations $X=(X_1,\ldots,X_n)$ whose distribution depends on $\theta,$ an **estimator** is a random variable $\widehat{\Theta}_n=g(X),$ for some function $g,$ with mean and variance $E_\theta(\widehat{\Theta})$ and $V_\theta[\widehat{\Theta}]$ respectively. If it is clear, we omit [[Classical-Estimation|parameter]] notation.
> - **Estimate.** A realised value of $\widehat{\Theta}.$
> - **Estimation Error.** $\widetilde{\Theta}_n=\widehat{\Theta}_n-\theta.$
> - **Standard Error (SE).** $SE(\widehat{\Theta}_n)=\sqrt{ V[\widehat{\Theta}_n] }.$ If it contains some unknown parameters, $\widehat{SE}(\widehat \Theta_n)$ will be the estimated SE. The method might vary by case.
> - **Mean Squared Error (MSE).** $MSE_\theta(\widehat\Theta_n)=E_\theta[\widetilde{\Theta}_n^2]=E_\theta[(\widehat{\Theta}_n - \theta)^2].$
> - **Bias.** The expected value of the estimation error: $$\operatorname{bias}_\theta(\widehat{\Theta}_n)=E_\theta[\widehat{\Theta}_n]-\theta.$$
> - **Unbiased.** An estimator of $\theta$ is **unbiased** only when its expected value is $\theta$ for all possible values of $\theta.$
> - **Asymptotically Unbiased.** An estimator $\widehat{\Theta}$ of $\theta$ is **asymptotically unbiased** only when $\displaystyle\lim_{n \to \infty}E_\theta[\widehat{\Theta}_n]=\theta,$ for each value of $\theta.$
> - **Consistent.** A sequence of estimators $\{\widehat{\Theta}_n\}_{n=1}^{\infty}$ is **consistent** only if $\widehat{\Theta}_n\overset{P}{\to}\theta$ for every value of $\theta.$
> - **Asymptotically Normal.** An estimator $\widehat\Theta_n$ of a scalar parameter $\theta$ is **asymptotically normal** only when $$\lim_{n\to\infty}\dfrac{\widehat\Theta_n-\theta}{SE(\widehat{\Theta}_n)}\sim\mathcal{N}(0, 1).$$
> - **Asymptotic Relative Efficiency.** Given two estimators $\widehat{\Theta}_n$ and $\widehat{T}_n,$ their **asymptotic relative efficiency (ARE)** is the limit $$\mathrm{ARE}(\widehat{\Theta},T)=\lim_{n \to \infty}\dfrac{V[\widehat{\Theta}_n]}{V[\widehat{T}_n]}.$$
> If $\mathrm{ARE}(\widehat{\Theta},\widehat{T})<1,$ we say $\widehat{\Theta}_n$ is **asymptotically more efficient** than $\widehat{T}_n.$ If $\mathrm{ARE}(\widehat{\Theta},\widehat{T})>1,$ $\widehat{T}_n$ is asymptotically more efficient, and otherwise they are asymptotically equally efficient. If $\widehat{\Theta}_n$ is asymptotically more or equally as efficient as any other estimator, it is **asymptotically optimal** or **efficient.**

The expected value, and therefore the variance and bias, of an estimator depend on $\theta,$ as expected, but also on the observations $X.$

> [!thm] *MSE $=$ bias$^2+$ variance*
> $$MSE_\theta(\widehat{\Theta}_n)=\operatorname{bias}_\theta(\widehat{\Theta}_n)^2 + V[\widehat{\Theta}_n].$$

```ad-note
title:Derivation
collapse:closed

For any random variable $Y,$  $$E[Y^{2}]=E[Y]^{2}+V[Y].$$
Now let $Y=\widetilde{\Theta}_n.$ Since $\mathrm{bias}_\theta(\widehat{\Theta}_n)=E_\theta[\widetilde{\Theta}],$ we have that $$E_\theta[\widetilde{\Theta}_n^{2}]=\operatorname{bias}_\theta^{2}(\widehat{\Theta}_n)+V_\theta[\widehat{\Theta}_n-\theta]=\operatorname{bias}_\theta^{2}(\widehat{\Theta}_n)+V_\theta[\widehat{\Theta}_n].$$
```

> [!rmk] ***Bias-Variance Tradeoff***
> Keeping the MSE fixed, a decrease in the bias leads to an increase in variance and vice versa.

In many statistical problems this equation makes any change in our estimator to lower the variance also increase the bias. The 'best' estimators minimise both so as to minimise the mean square error (see [[#Desirability of Asymptotic Properties|below]] for a discussion on how desirable these properties are). The theorem also gives us sufficient conditions for an asymptotically unbiased estimator. 

> [!thm]
> If $\operatorname{bias}_\theta(\widehat{\Theta}_n)\to0$ and $V[\widehat{\Theta}_n]\to0,$ then $\widehat{\Theta}_n\overset{P}{\to}\theta.$

```ad-note
title:Derivation
collapse:closed

From the previous theorem, if the hypotheses hold, $\widehat\Theta_n\overset{L^2}{\to}\theta,$ so by [[Convergence-Phenomena-and-Inequalities#Convergence Notions|convergence]] theorems $\widehat{\Theta}_n\overset{P}{\to}\theta.$
```

It is also desired for an estimator to be **invariant** under bijective transformations:

> [!def] ***Invariance Principle***
> Given some observations $X=(X_1,\ldots,X_n)$ and a bijection $h,$ $g(X)=\widehat{\Theta}_n$ is an **invariant estimator** only when $h(\widehat{\Theta}_n)$  is an estimator for $h(\theta)$ in the same family as $\widehat{\Theta}_n,$ that is $$g(h(X))=h(g(X)).$$

An example of such an estimator is the [[Bayesian-Estimation#Multiple Observations and Multiple Parameters|Least Mean Squares]] estimator since $$E[\Theta\mid h(X_1),\ldots,h(X_n)]=E[\Theta\mid X_1,\ldots,X_{n}].$$
Often we are interested in the distribution of a statistic but just as often it depends on possibly unknown parameters such as the variance of a distribution from which we draw. We replace these unknown parameters by estimators. In particular, some statistics will have unit variance after dividing by the true standard deviation. Replacing it with an estimator will yield a more complicated distribution in return for a workable statistic in practice.

> [!def] ***Studentise***
> We **studentise** a statistic by dividing by an estimator for the standard deviation, typically the sample or pooled standard deviation (see below).

## Desirability of Asymptotic Properties
Although intellectually satisfying, it is not clear that asymptotically unbiased estimators, or even those that are unbiased simpliciter, are substantially more desirable all else equal. The same can be said of consistent estimators and those converging in $L^p$ or a.s. Often, theorems stating these results do not give us bounds for when we can be sufficiently confident in our results — how many samples we must take to be sure we are close for any practical matters. These properties should then not be ends in themselves, rather they should be stepping stones to the most important property in estimation: the creation of confidence sets, or, as is often the case, confidence intervals. These are simply more useful than bare point estimates for they tell us about other likely values without committing to a value that, although the most reasonable answer, may not be significantly more reasonable than other answers. As will be [[#Confidence Intervals|seen]], confidence intervals often allow for computing bounds for the sample sizes needed for an approximate level of confidence. Even if an estimator is biased, inconsistent, and whatever else, so long as the confidence sets are small in size, we may carry on our estimation work.

> [!rem] ***Identifiability***
> Many estimators often require [[Inferential-Statistics|identifiable]] models to have any of these asymptotic properties.

# Parametric Estimation
At times we are interested in obtaining a single particular value for an unknown parameter rather than its distribution, which for classical inference methods is not always available in contrast to Bayesian inference, or a range of potential values. Often these estimators are a form of the [[#Plug-in Estimator|plug-in]] estimator when we are interested in estimating a function of $\theta$ expressible as a functional. Throughout we assume $\theta$ is a $k$-tuple.
## Sample Statistics
### Sample Mean

> [!def] ***Sample Mean (SM) Estimator***
> Let $X=(X_1,\ldots,X_n)$ be a sequence of IID random variables with an unknown common mean $\theta.$ The **sample mean** is the estimator of $\theta$ defined as $$\overline{X}_n=\frac1n\sum_{i=1}^nX_i.$$

By the strong law of [[Convergence-Phenomena-and-Inequalities#Laws of Large Numbers|large]] numbers we know the SM estimator is unbiased and consistent. The MSE, then, is its variance $V[\overline{X}_n]=\sigma^{2}/n,$ where $V[X]=\sigma^{2},$ and it does not depend on $\theta.$ It does not have the smallest variance, e.g. $\widehat{\Theta}_n=0$ has no variance but it is unhelpful. Furthermore,

> [!thm] *SM Converges in $L^2$*
> If $\sigma$ is finite, $$\overline{X}_n\overset{L^2}{\to}\mu.$$

If $X$ is continuous, sometimes we might divide the interval $(\min X_{i},\max X_i)$ into $k$ equal-length intervals $\{I_i\}_{i=1}^{m}$ and are given the frequencies $f_i=\sum_{j=1}^{n}\mathbb{1}(X_j\in I_i).$ It is not in general possible to recover $\overline{X}_n$ exactly though if we know the $I_i$ we can estimate it and give a bound for the error. Let $x_i$ be the midpoint of $I_i$ and suppose $\varepsilon=\operatorname{diam}I_i.$ Now, the approximate sample mean is the quantity $$\dfrac{1}{n}\sum_{i=1}^{m} x_if_i.$$
Now, note that $$\overline{X}_n=\dfrac{1}{n}\sum_{i=1}^{m} \sum\{X_j\in I_i : j\leqslant n\}=\dfrac{1}{n}\sum_{i=1}^{m} \sum_{j=1}^{f_i} X_{i,j},$$
where $X_{i,j}$ is the $j$-th observation in $I_i.$ Hence, $$\left| \overline{X}_n-\sum_{i=1}^{m} x_if_i \right|=\dfrac{1}{n}\left| \sum_{i=1}^{m} \sum_{j=1}^{f_i} X_{i,j}-x_i \right|\leqslant \dfrac{1}{n}\sum_{i=1}^{m} \sum_{j=1}^{f_i} |X_{i,j}-x_i|<\dfrac{1}{n}\sum_{i=1}^{m} \sum_{j=1}^{f_i} \dfrac{\varepsilon}{2}=\dfrac{\varepsilon}{2}.$$
Thus, the error in approximating the sample mean with midpoints is at most half the width of the intervals. Often for continuous observations $m$ is an unbounded, increasing function of $n.$ If the range of $X$ is bounded, this means $\varepsilon,$ as a function of $n,$ vanishes. Otherwise, since $\varepsilon$ depends on $\min X_i$ and $\max X_i,$ we state more weakly that $\varepsilon_n\overset{P}{\to}0.$
### Pooled Mean
FOR LATER
### Sample Variance

> [!def] ***Sample Variance (SV) Estimators***
> Let $\{X_i\}_{i=1}^{\infty}$ be a sequence of IID random variables with unknown common mean and variance $\mu$ and $\sigma^{2}.$ The **sample variance** estimators are defined as $$\overline{S}_n^2=\frac1n\sum_{i=1}^n(X_i-\overline{X}_n)^2,\quad\quad\widehat{S}_n^2=\frac1{n-1}\sum_{i=1}^n(X_i-\overline{X}_n)^2.$$

These are both asymptotically unbiased but $\widehat{S}_n^2$ is unbiased whilst $\overline{S}_n^2$ is not. Note that $$\widehat{S}_n^2=\frac{n}{n-1}\overline{S}_n^2.$$
The following easily-verifiable facts will allow us to see this is the correct scaling factor: $$E_{(\theta,\sigma^{2})}[\overline{X}_n]=\theta,\quad E_{(\theta,\sigma^{2})}[X_i^2]=\theta^2+\sigma^{2},\quad E_{(\theta,\sigma^{2})}[\overline{X}_n^{2}]=\theta^2+\frac{\sigma^{2}}{n}.$$
Then,

> [!thm]
> $$E_{(\theta,\sigma^{2})}[\overline{S}_n^{2}]=\frac{n-1}{n}\sigma^{2}.$$

```ad-note
title:Derivation
collapse:closed

$$
\begin{align*}
E_{(\theta,\sigma^{2})}[\overline{S}_n^{2}]&=\frac{1}{n}E_{(\theta,\sigma^{2})}\left[ \sum_{i=1}^{n} X_{i}^{2}-2\overline{X}_n\sum_{i=1}^{n} X_i+n\overline{X}_n^{2} \right]\\
&=E_{(\theta,\sigma^{2})}\left[ \frac{1}{n}\sum_{i=1}^{n} X_{i}^{2}-2\overline{X}_n\frac{1}{n}\sum_{i=1}^{n} X_i+\overline{X}_n^{2} \right]\\
&=E_{(\theta,\sigma^{2})}\left[ \frac{1}{n}\sum_{i=1}^{n} X_i^{2}-2\overline{X}_n^{2}+\overline{X}_n^{2} \right] \\
&=E_{(\theta,\sigma^{2})}\left[ \frac{1}{n} \sum_{i=1}^{n} X_i^2-\overline{X}_n^{2} \right]\\
&=\frac{1}{n}\sum_{i=1}^{n} E_{(\theta,\sigma^{2})}\left[ X_i^2\right]-\left( \theta^{2}+\frac{\sigma^{2}}{n} \right)\\
&=\frac{1}{n}\sum_{i=1}^{n} (\theta^{2}+\sigma^{2})-\theta^{2}-\frac{\sigma^{2}}{n}\\
&=\theta^{2}-\theta^{2}+\sigma^{2}-\frac{\sigma^{2}}{n}\\
&=\frac{n-1}{n}\sigma^{2}.
\end{align*}
$$
```

The SV estimator $\overline{S}_n^{2}$ is biased by a factor of $1-1/n,$ so dividing by said factor gives us an unbiased estimator $\widehat{S}_n^{2}$ with mean $E_{(\theta,\sigma^{2})}[\widehat{S}_n^{2}]=\sigma^{2}.$ Since they are both asymptotically unbiased, they are near identical for large values of $n.$
$\qquad$As before, when $X$ is continuous and we have only the frequencies $f_i=\sum_{j=1}^{m}\mathbb{1}(X_j\in I_i)$ of the unique values of the $X_i,$ we must approximate $\widehat{S}_n^{2}$ with $$\dfrac{1}{n-1}\sum_{i=1}^{m} \left( x_i-\dfrac{1}{n}\sum_{j=1}^{m} x_jf_j \right) ^{2}f_i.$$
Here $x_i$ has the same meaning as before. Its error is more difficult to bound.
### Pooled Variance

> [!def] ***Pooled Sample Variance (PSV) Estimator***
> Let $\{X_{i,j}\}_{j=1}^{n_i}$ be a sequence of IID r.v.s for positive integers $\{n_i\}_{i=1}^{m}$ which all share a common variance $\sigma^{2},$ called the **pooled variance,** and are independent of each other. The *biased* estimator for this quantity is $$\overline{S}_p^{2}=\dfrac{1}{\sum_{i=1}^{m} n_i}\sum_{i=1}^{m}n_i\overline{S}_i^{2},$$
> where $\overline{S}_i^{2}$ is the biased SV estimator for $\{X_j\}_{j=1}^{n_i}.$

If each group of variables represents a population, instead of repeating tests for each group to obtain a good estimate of $\sigma^{2}$ we could treat them as being part of the same population and observe the average squared distance from their respective mean, hence, letting $N=\displaystyle\sum_{i=1}^{m}n_i,$ $$\overline{S}_p^{2}=\dfrac{1}{N}\sum_{i=1}^{m} \left( \sum_{j=1}^{n_i} (X_j-\overline{X}_i)^{2} \right) .$$
As one would expect, this estimator is biased: $$E[\overline{S}_p^{2}]=\dfrac{1}{N}\sum_{i=1}^{m} n_iE[\overline{S}_i^{2}]=\dfrac{1}{N}\sum_{i=1}^{m} (n_i-1)\sigma^{2}=\dfrac{N-m}{N}\sigma^{2}.$$
Thus, the unbiased version:

> [!def] ***Unbiased PSV***
> With the same hypothesis as before, $$\widehat{S}_p^{2}=\dfrac{N}{N-m}\overline{S}_p^{2}=\dfrac{1}{N-m}\sum_{i=1}^{m} n_i\overline{S}_i^{2}=\dfrac{1}{N-m}\sum_{i=1}^{m} \left( \sum_{j=1}^{n_i} (X_j-\overline{X}_i)^{2} \right) .$$

Typical presentations sum the terms $(n_i-1)\widehat{S}_i^{2}$ but clearly this is the same quantity as $n_i\overline{S}_i^{2}.$

> [!rem] ***Precision Issues***
> The greater the distance between the SMs $\overline{X}_i,$ the less precise $\widehat{S}_p^{2}$ is as an estimator.

Holding $m$ fixed, as $N\to\infty,$ $E_{\sigma^{2}}[\overline{S}_p^{2}]\to0,$ so it is asymptotically unbiased.
### Sample Covariance

> [!def] ***Sample Covariance (SC) Estimator***
> $$\overline{S}_{X,Y}=\dfrac1n\sum_{i=1}^{n} (X_i-\overline{X})(Y_i-\overline{Y}),\quad \widehat{S}_{X,Y}=\dfrac{1}{n-1}\sum_{i=1}^{n} (X_i-\overline{X})(Y_i-\overline{Y}).$$

We could take inspiration from the identity $\operatorname{cov}(X,Y)=E[XY]-E[X]E[Y]$ to conjecture the identity $$\overline{S}_{X,Y}=\dfrac{1}{n}\sum_{i=1}^{n} X_iY_i-\overline{X}\cdot\overline{Y}.$$
An indeed it holds.

> [!thm]
> $$\overline{S}_{X,Y}=\dfrac{1}{n}\sum_{i=1}^{n} X_iY_i-\overline{X}\cdot \overline{Y}.$$

From this we can estimate the [[Joint-Random-Variables#Covariance and Correlation|correlation coefficient]] $\rho.$
### SLCC

> [!def] ***Sample Linear Correlation Coefficient (SLCC)***
> If $\widehat{S}_X^{2}$ is the SV estimator for $V[X]$ and similarly for $\widehat{S}_Y^{2},$ the **sample linear correlation coefficient (SLCC)** is given by $$\widehat{r}=\dfrac{\widehat{S}_{X,Y}}{\widehat{S}_X\widehat{S}_Y}.$$

Its name derives from the use of $\rho$ in motivating classical [[Classical-Statistical-Models#Approximate Bayesian LLMS Estimation of a General Model|simple linear regression estimators]]. The SLCC is not resistant, i.e. its value will change a lot in response to outliers. Alternatively we may define it as $$\widehat{r}=\dfrac{1}{n-1}\sum_{i=1}^{n} \left( \dfrac{X_i-\overline{X}}{\widehat{S}_X} \right)\left( \dfrac{Y_i-\overline{Y}}{\widehat{S}_Y} \right)  .$$
That is, we compute the $z$-scores, take a dot product, and divide by $n-1.$
### Sample Proportion

> [!def] ***Sample Proportion***
> Let $A$ be a fixed, measurable set containing the range of $X.$ Given IID samples $\{X_i\}_{i=1}^{n}$ of $A,$ the **sample proportion** estimator of $A$ is the variable $$\widehat{p}_{A,n}=\dfrac{1}{n}\sum_{i=1}^{n} \chi_A(X_i),$$
> where $\chi_A$ is the indicator function on $A.$

Alternatively, inspired by the [[Classical-Estimation#Plug-in Estimator|plug-in estimator]], $\widehat{p}_{A,n}$ is the plug-in estimator for $T(F)=\int_AdF.$ Of course, this is nothing but the sample mean of IID Bernoulli variables with parameter $p=P(X\in A).$ By the [[Convergence-Phenomena-and-Inequalities#Laws of Large Numbers|laws of large numbers]], $\widehat{p}_{A,n}$ converges a.s. and in probability to $P(X\in A).$

> [!thm]
> $\widehat{p}_{A,n}$ is consistent, asymptotically normal, unbiased, and $$\widehat{p}_{A,n}\overset{L^2}{\to}P(X\in A).$$

## Method of Moments
The $p$-th moment with $\theta$ as a parameter can be described as the functions $T_p(F_X)=\int x^pdF_{X}(x;\theta).$ Fixing $X,$ we can rephrase this as functions $\alpha_p(\theta)=T_p(F_X).$ For large samples, if $T_p(\widehat{F}_n)$ is sufficiently close to $E_\theta[X^k],$ the candidates for possible $\theta$ values should narrow and any other value $\theta'$ satisfying $E_{\theta'}[X^k]=T_p(\widehat{F}_n)$ will be close to $\theta'.$ Although this is not generally true, requiring an identifiable model, it motivates the following estimation procedure:

> [!def] ***Sample Moments and Method of Moments Estimator***
> The **$p$-th sample moment** is the estimator $$\widehat{\alpha}_p=\dfrac{1}{n}\sum_{i=1}^{n}X_i^p.$$
> The **method of moments (MoM) estimator** takes on the value $\widehat{\Theta}_n$ of $\theta$ s.t. $\alpha_p(\widehat{\Theta}_n)=\widehat{\alpha}_p$ for any $1\leqslant p\leqslant k.$

There are a few worries already. First, there might not be any value $\widehat{\Theta}_n$ so that the first $k$ sample moments are equal to the corresponding literally moment under $\widehat{\Theta}_n.$ Under appropriate conditions, this is almost surely true, however.

> [!thm]
> Let $\widehat{\Theta}_n$ be the MoM estimator of $\theta,$ if it exists. Given appropriate conditions,
> 1. $\displaystyle\lim_{n \to \infty}P(\exists\theta'\in\Theta.\ \theta'=\widehat{\Theta}_n)\to1.$
> 2. $\widehat{\Theta}_n$ is consistent.
> 3. $\widehat{\Theta}_n$ is asymptotically normal with $$\sqrt{ n }(\widehat{\Theta}_n-\theta)\overset{d}{\to }\mathcal{N}(0,\Sigma),$$
> where $$\Sigma=gE_\theta[YY^T]g^T,\qquad Y_i=X^i,\qquad g_i=\partial_\theta\alpha_i^{-1},\qquad \forall i\leqslant k.$$

The final statement can be used to construct [[#Confidence Intervals|confidence sets]], though a [[#Bootstrapping|bootstrap]] construction is often preferred.

## Maximum Likelihood Estimation

> [!def] ***Maximum Likelihood (ML) Estimate***
> The **maximum likelihood estimate** is a possible value of $\theta$ which maximises $\pi(X; \theta),$ the **likelihood function,** over all $\theta:$ $$\widehat{\Theta}_n=\arg\max_\theta\pi(X;\theta).$$
> If the observations $X_i$ are independent, the likelihood function is of the form $$\pi(X;\theta)=\prod_{i=1}^n\pi_{i}(X_i;\theta).$$
> Taking the $\log$ gets us the **log-likelihood function** $$\log\pi(X;\theta)=\log\prod_{i=1}^n\pi_i(X_i;\theta)=\sum_{i=1}^n\log\pi_i(X_i;\theta).$$

We should interpret 'likelihood' correctly. First, suppose $\theta$ and $X$ are discrete, i.e. there are at most countably many possible values of $\theta.$ Note that $\pi(x;\theta')$ is not the probability that $\theta'=\theta,$ unlike the posterior probability $\pi(\theta\mid x)$ in the [[Bayesian-Estimation|MAP]] estimator, but, when $X$ is discrete, the probability of observing $x$ in particular *when $\theta'=\theta$* ([[Classical-Inference|again]], this is not statistical dependence or a conditional probability, rather it expresses functional dependence). Then, the ML estimate is the value of $\theta$ under which we are most likely to observe $X=x,$ again assuming $X$ is discrete. If we were to view $\pi(x; \theta)$ as a conditional PMF, the ML estimate is equivalent to a MAP estimate with a uniform, or **flat,** prior for then maximising the posterior over $\theta$ is equivalent to maximising $\pi(x\mid\theta),$ which we interpreted as $\pi(x; \theta).$
$\qquad$If instead $\theta$ is continuous with all possible values contained in an interval and $X$ is still discrete, we may interpret the ML estimate as MAP estimation with a uniform prior $\pi(\theta)=c$ for some $c\in \mathbb{R}.$ Many of the properties of the MLE require assumptions be put on the model. There is one desirable property that is still had in general: invariance under bijective mappings. The MLE of $h(\theta^*)$ is $h(\widehat{\Theta}_n).$ This is primarily due to re-indexing. At first the distributions in the model were indexed by parameters in $\Theta$ but now they are indexed by parameters in $\bar h(\Theta)$ in that $F_{\theta}=F_{h(\theta)},$ i.e. $F_{h^{-1}(\tau)}=F_{\tau}.$

> [!thm] Theorem (***Invariance***)
> Let $h:\Theta\to T$ be a bijection. If $\widehat{\Theta}_n$ is the ML estimate of $\theta,$ $h(\widehat{\Theta}_n)$ is the ML estimate of $h(\theta).$

```ad-note
title:Derivation
collapse:closed

If $\tau$ maximises the likelihood, since $F_{\tau}=F_{h^{-1}(\tau)},$ $\theta=h^{-1}(\tau)$ will also maximise the likelihood. More explicitly, $$\pi(\vec X;\tau)=\pi(\vec X;h^{-1}(\tau))=\pi(\vec X;\theta).$$
Thus, $\widehat{\Theta}_n=h^{-1}(\widehat{T}_n)$ and so $\widehat{T}_n=h(\widehat{\Theta}_n).$
```

### Properties in Identifiable Models
Suppose henceforth we have an identifiable model. We start with consistency. Let $\ell_n(\theta)=\log\pi(\vec X;\theta),$ $\ell(\theta)=\pi(X;\theta),$ and let $\theta^*$ be the true value of our parameter. Note $D_{\mathrm{KL}}(\theta^*\|\theta)=E_{\theta^*}[\ell(\theta^*)-\ell(\theta)]$ so that maximising $\ell(\theta)$ should turn into minimising $D_{\mathrm{KL}}(\theta^*\|\theta),$ i.e. maximising $-D_{\mathrm{KL}}(\theta^*\|\theta).$ Of course, without knowing $\theta^*,$ we likely do not know this distance. For large samples, we may approximate with $$M_n(\theta)=\dfrac{1}{n}(\ell_n(\theta)-\ell_n(\theta^*)).$$
It seems reasonable to expect the value maximising $M_n(\theta)$ converges to $\theta^*.$ However, not only must the model be identifiable, $M_n$ must converge 'uniformly' to $-D_{\mathrm{KL}}(\theta^*\|\theta).$

> [!thm] Theorem (***Consistency***)
> Let $M(\theta)=-D_{\mathrm{KL}}(\theta^*\|\theta).$ Suppose $$\sup_{\theta\in\Theta}|M_n(\theta)-M(\theta)|\overset{P}{\to }0,$$
> and that for every $\varepsilon>0,$ $$\sup_{\theta\in\Theta-B_\varepsilon(\theta^*)}M(\theta)<M(\theta^*).$$
> Then, the ML estimate of $\theta^*$ is consistent.

```ad-abstract
title:Proof
collapse:closed

Let $\widehat{\Theta}_n$ be the ML estimate. Maximising $\ell_n(\theta)$ over $\theta$ is the same as maximising $M_n(\theta)$ over $\theta$ since $\ell_n(\theta^*)$ is constant w.r.t. $\theta.$ Thus, $M_n(\theta^*)\leqslant M_n(\widehat{\Theta}_n)$ and so
$$
\begin{align*}
M(\theta^*) - M(\widehat{\Theta}_n) &= M(\theta^*) - M(\widehat{\Theta}_n) + M_n(\theta^*) - M_n(\theta^*)\\
&= M_n(\theta^*) - M(\widehat{\Theta}_n) + M(\theta^*) - M_n(\theta^*)\\
&\leqslant M_n(\widehat{\Theta}_n) - M(\widehat{\Theta}_n) + M(\theta^*) - M_n(\theta^*)\\
&\leqslant \|M_n - M\| + M(\theta^*) - M_n(\theta^*)\\
&\leqslant 2\|M_n - M\|\\
&\overset{P}{\to }0
\end{align*}
$$
Whenever $|M(\theta^*) - M(\widehat{\Theta}_n)|\geqslant\varepsilon,$ certainly $\|M_n-M\|\geqslant \varepsilon/2,$ so $$P(|M(\theta^*) - M(\widehat{\Theta}_n)|\geqslant\varepsilon)\leqslant P(\|M_n-M\|\geqslant \varepsilon/2)\to 0.$$
Hence the convergence is in probability. Now, as for why this shows $\widehat{\Theta}_n$ is consistent, because $M(\widehat{\Theta}_n)$ is consistent, for any $\delta>0,$ $P(M(\widehat{\Theta}_n) < M(\Theta^*) - \delta)\to0.$ If $\theta\in \Theta - B_\varepsilon(\theta^*),$ then $$M(\theta) - M(\theta^*)\leqslant \sup_{t\in \Theta - B_\varepsilon(\theta^*)}M(t) - M(\theta^*) < 0.$$
Pick $\delta>0$ s.t. $-\delta > \sup M(t) - M(\theta^*),$ the supremum taken over $t\in \Theta - B_\varepsilon(\theta^*).$ Thus, $|\widehat{\Theta}_n - \theta^*|\geqslant\varepsilon$ implies $M(\widehat{\Theta}_n) - M(\theta^*) < -\delta,$ i.e. $M(\theta^*) - M(\widehat{\Theta}_n) > \delta,$ and so $$P(|\widehat{\Theta}_n - \theta^*|\geqslant \varepsilon)\leqslant P(M(\theta^*) - M(\widehat{\Theta}_n)> \delta)\to 0.$$
```

The ML estimate, under the right assumptions, is asymptotically normal. Properly stating it again requires some notation.

> [!def] ***Fisher Information***
> Let $X=(X_1,\ldots,X_n).$ For a model $\{P_\theta\}_{\theta\in \Theta},$ the **score function** is the variable $$s(X;\theta) = \partial_\theta\log\pi(X;\theta).$$
> The **Fisher information** of the model is $$I_n(\theta) = V_\theta\left[ \sum_{i=1}^{n} s(X_i;\theta) \right] = \sum_{i=1}^{n} V_\theta[s(X_i;\theta)],$$
> for IID variables $X_i$ with distribution $F_\theta.$ We write $I(\theta)$ for $I_1(\theta).$ If $\theta$ is a vector, the fisher information is a matrix whose $i,j$ entry is $$I_n(\theta)_{i,j} = -E_\theta\left[ \partial_{i,j}\log\pi(X;\theta) \right] .$$

The score tells us how responsive the likelihood is to changes in $\theta,$ and the Fisher information encodes the total amount of *influence* the $X_i$ have on the likelihood. $V_\theta[s(X_i;\theta)]/I_n(\theta)$ measures the amount of variance 'explained' by the $i$-th variable — how much it contributes to the total variance. For this reason, it makes sense to interpret it as a kind of influence.

> [!thm]
> If $\Theta\subseteq\mathbb{R},$
> 1. $E_\theta[s(X;\theta)]=0$ and so $V_\theta[s(X;\theta)]=E_\theta[s(X;\theta)^2].$
> 2. $I_n(\theta)=nI(\theta)$ and $$I(\theta) = -E_\theta \left[ \partial_\theta^2\log\pi(X;\theta) \right] .$$

> [!thm] ***Asymptotically Normal***
> Let $J_n(\theta) = J_n = I_n(\theta)^{-1}$ and $\widehat{J}_n=J_n(\widehat{\Theta}_n).$ Under the appropriate assumptions,
> 1. The distribution of $\widehat{\Theta}_n-\theta$ is approximately follows a $\mathcal{N}(0,J_n)$ distribution, i.e. $$J_n^{-1/2}(\widehat{\Theta}_n-\theta)\overset{d}{\to }\mathcal{N}(0,\mathbb{1}).$$
> 2. $\operatorname{cov}(\widehat{\Theta}_{n,i},\widehat{\Theta}_{n,j})\approx J_n(i,j),$ the $i,j$ entry of $J_n.$
> 3. If $\widehat{SE}_{n,i} = \sqrt{ J_n(i,i) },$ $$\dfrac{\widehat{\Theta}_{n,i} - \theta_i}{\widehat{SE}_{n,i}}\overset{d}{\to }\mathcal{N}(0,\mathbb{1}).$$

> [!thm] ***Delta Method***
> Suppose $g$ is differentiable and $\nabla g(\theta)\ne 0.$ If $\widehat{J}_n=I_n(\widehat{\Theta}_n)^{-1},$ then $$\dfrac{g(\widehat{\Theta}_n) - g(\theta)}{\sqrt{ \left\langle \nabla g(\widehat{\Theta}_n),\widehat{J}_n(\nabla g(\widehat{\Theta}_n)) \right\rangle  }} \overset{d}{\to} \mathcal{N}(0,\mathbb{1}).$$
> If $\Theta\subseteq\mathbb{R}$ and $g$ is real-valued, an interval with bounds $g(\widehat{\Theta}_n)\pm z_{\alpha/2}|g'(\widehat{\Theta}_n)|\widehat{SE}(\widehat{\Theta}_n)$ is an asymptotic $1-\alpha$ CI.

Asymptotic normality gives us an estimate of the standard error of $\widehat{\Theta}_n,$ and the delta method in particular often gives a closed form estimate for the SE of $g(\widehat{\Theta}_n).$ Lastly, the ML estimate is efficient.

> [!thm] ***Efficiency***
> The ML estimator is efficient (needs qualification).

# Confidence Intervals

> [!def] ***Confidence Level (CL) and Confidence Intervals (CI)***
> Suppose we wish to estimate an unknown factor $\theta.$ Let $0\leqslant\alpha\leqslant1$ be a fixed real number and let $\widehat{\Theta}_n^-$ be a **lower estimator** and $\widehat{\Theta}_n^+$ an **upper estimator** s.t. $\widehat{\Theta}_n^-\leqslant\widehat{\Theta}_n^+$ and $$P_\theta(\widehat{\Theta}_n^-\leqslant \theta\leqslant \widehat{\Theta}_n^+)\geqslant 1-\alpha,\quad\text{for all possible values of }\theta.$$
> We call $[\widehat{\Theta}_n^-, \widehat{\Theta}_n^+]$ a **$1-\alpha$ confidence interval** for the desired **confidence level** $1-\alpha.$

Generally we construct intervals with bounds $\widehat{\Theta}_n\pm\varepsilon^{\pm}.$ We call $\pm\varepsilon^\pm$ the **Margin of Error (ME).** When estimating a vector in a finite dimensional vector space, instead we typically have a **confidence set.**

> [!def] ***Confidence Sets and Asymptotic Confidence***
> Let $\Theta\subseteq\mathbb{R}^k$ and let $C_n$ be a random variable valued in $\wp(\mathbb{R}^k)$ for each $n.$ 
> - The $C_n$ are **$1-\alpha$ confidence sets** only when $P_\theta(\theta\in C_n)\geqslant1-\alpha,$ for each $\theta\in\Theta.$
> - The $C_n$ are **$1-\alpha$ pointwise asymptotic** confidence sets only if $\liminf_{n\to\infty}P_\theta(\theta\in C_n)\geqslant1-\alpha,$ for each $\theta\in\Theta.$
> - The $C_n$ are **$1-\alpha$ uniform asymptotic** confidence sets iff $$\liminf_{n\to\infty}\inf_{\theta\in\Theta}P_\theta(\theta\in C_n)\geqslant1-\alpha.$$

## Parametric Construction
As estimators, the lower and upper estimators are functions of the observations that (functionally) depend on $\theta.$ If for an **asymptotically normal** point-estimator $\widehat{\Theta}_n$ the distribution of $\widetilde{\Theta}_n$ is known or can be approximated, then we may construct lower and upper estimators from it. First let $\beta=1-\alpha/2$ and notice the random variable $\widetilde{\Theta}_n/SE(\widehat{\Theta}_n)$ approaches a [[Probability-Distributions#Continuous#Normal|standard normal]] CDF as $n$ increases. Consider $$P_\theta\left( \frac{\left| \widehat{\Theta}_n-\theta \right|}{SE(\widehat{\Theta}_n)}\leqslant \Phi^{-1}(\beta)\right)\approx 1-\alpha.$$
The standard normal CDF $\Phi:\mathbb{R}\to (0,1)$ is an order isomorphism so its inverse exists and is defined for all numbers in the interval $(0,1).$ This is equivalent to $$P_\theta\left( \widehat{\Theta}_n-\Phi^{-1}(\beta)SE\leqslant \theta\leqslant \widehat{\Theta}_n+\Phi^{-1}(\beta)SE \right)\approx 1-\alpha.$$

> [!thm] *Normal CI*
> Let $\widehat{\Theta}_n$ be an asymptotically normal estimator of $\theta$ and let $z_{\alpha/2}=\Phi^{-1}(1-\alpha/2).$ Then, $$P_\theta(\widehat{\Theta}_n-z_{\alpha/2}\widehat{SE}\leqslant \theta\leqslant \widehat{\Theta}_n+z_{\alpha/2}\widehat{SE})\to 1-\alpha.$$

``````ad-rmk
title:R Details

```r
library(tidyverse)
library(mosaic)
# tib contains the observations.
Alpha <- 0.05
z <- qnorm(1 - Alpha/2)
theta_hat + c(-1,1)*z*sd(tib) # Vector containing the bounds. Some of these may be changed for equivalent expressions depending on the situation.
```
``````

### $\chi^{2}$ Interval
When estimating the variance of a normal variable, we may use a $\chi^{2}$ distribution (see [[Classical-Hypothesis-Testing#$ chi {2}$-Test|here]]). Since $\overline{X}\sim\mathcal{N}(\mu,\sigma^{2}/n),$
$$
\begin{align*}
X-\overline{X}&\sim\mathcal{N}(0,\sigma^{2}(n-1)/n)\\
\dfrac{\sqrt{ n }(X-\overline{X})}{\sigma\sqrt{ n-1 }}&\sim\mathcal{N}(0,1)
\end{align*}
$$
Thus, we may equivalently define a $\chi^{2}$ variable as $$\chi^{2}=\sum_{i=1}^{n} \left( \dfrac{\sqrt{ n }(X-\overline{X})}{\sigma\sqrt{ n-1 }} \right)^{2}=\dfrac{n}{\sigma^{2}}\widehat{S}^{2}_n .$$
Rearranging, we obtain $$\sigma^{2}=\dfrac{n\widehat{S}^{2}_n}{\chi^{2}_{n-1}}.$$
$n\widehat{S}^{2}_n/\sigma^{2}=\chi^{2}_{n-1}$ lies between $\chi^{2}_{n-1,\xi}$ and $\chi^{2}_{n-1,\beta}$ if and only if $$\dfrac{n\widehat{S}^{2}_n}{\chi^{2}_{n-1,\beta}}<\sigma^{2}<\dfrac{n\widehat{S}^{2}_n}{\chi^{2}_{n-1,\xi}}.$$
Hence
$$
\begin{align*}
P\left( \dfrac{n\widehat{S}^{2}_n}{\chi^{2}_{n-1,\beta}}<\sigma^{2}<\dfrac{n\widehat{S}^{2}_n}{\chi^{2}_{n-1,\xi}} \right)&=P(\chi^{2}_{\xi}<\chi^{2}<\chi^{2}_{\beta})\\
&=P(\chi^{2}<\chi^{2}_{\beta})-P(\chi^{2}<\chi^{2}_{\xi})\\
&=1-P(\chi^{2}\geqslant \chi^{2}_{\beta}) - (1-P(\chi^{2}\geqslant \chi^{2}_{\xi}))\\
&=\xi-\beta\\
\end{align*}
$$
For this to make a $1-\alpha$ CI, we must have $\xi-\beta=1-\alpha,$ or equivalently, $\xi=1-\alpha+\beta$ and it must be that $\xi>\beta$ since $\chi^{2}_x$ is decreasing w.r.t. $x.$ Naturally, if $\alpha<1/2,$ we pick $\beta=\alpha/2$ and so $\xi=1-\alpha/2.$

> [!thm] Theorem (***$\chi^{2},$ $1-\alpha$ CI for Normal Variance Estimation***)
> Suppose $\{X_i\}_{i=1}^{n}$ are IID normal variables with mean $\mu$ and variance $\sigma^{2}.$ Then, $$P\left( \dfrac{n\widehat{S}^{2}_n}{\chi^{2}_{\alpha/2}}<\sigma^{2}<\dfrac{n\widehat{S}^{2}_n}{\chi^{2}_{1-\alpha/2}} \right)=1-\alpha,$$
> where $\widehat{S}^2_n$ is the unbiased SV estimator and $\chi^{2}_{x}=Q_{\chi^{2}}(1-x)$ for a $\chi^{2}$ variable with $n-1$ DoF.

Unlike the normal construction, a $\chi^{2}$-based CI is not, in general, symmetric about $\sigma^{2},$ so the concept of a 'margin of error' does not apply. Furthermore, note this construction does not rely on the mean $\mu$ nor does it offer a point estimate of $\sigma^{2}.$

``````ad-rmk
title:R Details

```r
# tib contains the observations
Alpha <- 0.05
n <- length(tib)
bounds <- n*sd(tib)/qchisq(c(Alpha/2, 1 - Alpha/2),n-1)
```
``````

## Non-Parametric Construction
### Bootstrapping
Suppose we have $n$ observations with the proportion that lie in $[a,b]$ is close to $P(a\leqslant X\leqslant b)$ and that there is a matrix $\{X_{i,j}\}_{i,j=1}^{m,n}$ with the variable $\{X_{i,j}\}_{j=1}^{n}$ being IID uniform draws from the distribution of the proportions of $X,$ the observations. Let $S_{i,n}=h(X_{i})$ be a statistic from the $i$-th group and $Q$ the PPF of the proportion distribution of the $S_{i,n},$ taking the value $$\inf\left\{S_{i,n} : \dfrac{|\{S_{j,n}<S_{i,n}:j<m\}|}{m}\right\}.$$
> [!def] ***Percentile Construction***
> The $1-\alpha$ CI constructed through the **percentile method** has bounds $Q(1/2)\pm Q(1-\alpha/2).$

In practice a fine enough binning well-approximates the graph of $Q.$

``````ad-rmk
title:R Details

```r
library(mosaic)

# h.stat is the statistic and vctr is the data.

m <- 10000 # Some high number.
set.seed(1234) # For reproducibility.
Sdist <- matrix(NA, nrow = m) # Initialise an empty matrix to hold the S_i.
for (i in (1:m)){
	Sdist[b] <- h.stat(formula, data = resample(vctr))
}

estBounds <- cdata(Sdist, p = 1-Alpha)[1:2] # From mosaic, it gives back the upper and lower bounds for a 1-Alpha CI.

lBound <- estBounds[1]
uBound <- estBounds[2]

# Alternatively,
estBounds <- qdata(Sdist, p = c(Alpha/2, 1 - Alpha/2))
```
``````

## Mean and Variance Estimation
First a parametric procedure. Let $X=(X_1,\ldots,X_n)$ be a sequence of IID observations with common unknown mean and variance $\theta$ and $v$ respectively. We will estimate $\theta$ with the SM estimator $$\widehat{\Theta}_n=\frac{1}{n}\sum_{i=1}^{n} X_i,$$
and estimate $v$ with the unbiased SV estimator $$\widehat{S}_n^{2}=\frac{1}{n-1}\sum_{i=1}^{n} (X_i-\widehat{\Theta}_n)^{2}.$$
We may estimate the variance $v/n$ of $\widehat{\Theta}_n$ by $\widehat{S}_n^{2}/n.$ Given what was said above about constructing $1-\alpha$ CIs, we have the interval $$\left[ \widehat{\Theta}_n-z\frac{\widehat{S}_n}{\sqrt{ n }}, \widehat{\Theta}_n+z\frac{\widehat{S}_n}{\sqrt{ n }} \right],$$
where $z=\Phi^{-1}(1-\alpha/2).$ There are 2 distinct approximations in this process: first we assume $\widehat{\Theta}_n$ is normal, or at least close enough to a normal variable, and second we approximate its variance with $\widehat{S}_n^{2}/n.$ Even if the $X_i$ were normal, the CI produced is still approximate for $\widehat{S}_n^{2}$ is only approximate and the random variable $$T_n=\frac{\sqrt{ n }(\widehat{\Theta}_n-\theta)}{\widehat{S}_n}=\frac{\widetilde{\Theta}_n}{\widehat{SE}(\widehat{\Theta}_n)}$$
is not normal. It is asymptotically normal by the CLT but for any practical purposes we are using a normal approximation. We can, at times, get an exact construction:

> [!def] ***$t$-distribution***
> Let $\{X_i\}_{i=1}^{n}$ be a sequence of IID normal random variables with common mean $\theta$ and variance $v.$ Let $\widehat{\Theta}_n$ be the sample mean estimator for $\theta$ and $\widehat{S}_n^{2}$ the sample variance estimator for $v.$ There is a closed form PDF, the **$t$-distribution with $n-1$ degrees of freedom,** of the variable $$T_n=\frac{\sqrt{ n }(\widehat{\Theta}_n-\theta)}{\widehat{S}_n}=\dfrac{\widehat \Theta_n-\theta}{\widehat{SE}(\widehat \Theta_n)},$$
> and it does not depend on $\theta$ nor $v.$ We denote its CDF with $\Psi_{n-1}(z).$

Using the exact formula for $\Psi_{n-1},$ we get the improved $1-\alpha$ CI $$\left[ \widehat{\Theta}_n-z\widehat{SE}(\widehat{\Theta}_n), \widehat{\Theta}_n+z\widehat{SE}(\widehat{\Theta}_n) \right],$$
where now $z=\Psi_{n-1}^{-1}(1-\alpha/2).$ When $n$ is large, usually at least $50,$ the corresponding $t$-distribution is close to normal so our earlier approximate CI is good enough for practical purposes.
$\quad$As seen, we can improve on the basic construction of an approximate CI depending on the kinds of observations we are dealing with. Beyond improving on our estimate of $T_n,$ we can also get better estimators for the variance. Suppose, for example, that the $X_i$ are IID Bernoulli with unknown mean $\theta$ and variance $v=\theta(1-\theta).$ Instead of $\widehat{S}_n^{2},$ we could use $\widehat{\Theta}_n(1-\widehat{\Theta}_n)$ as an estimator of $v.$ One can verify it is consistent. Alternatively, since $\theta(1-\theta)\leqslant1/4$ for all $\theta$ in the unit interval, we could use $1/4$ as a conservative estimate of $v.$

> [!rem] ***General Procedure***
> Let $\widehat\Theta$ be an estimator for $\theta$ s.t. $T=(\widehat\Theta-\theta)/\widehat{SE}(\widehat\Theta)$ has an approximate $t$-distribution with known DoF. The $1-\alpha$ CI for $\theta$ has bounds $\widehat\Theta^\pm=\widehat\Theta\pm z\cdot \widehat{SE}(\widehat \Theta),$ where $z=\Psi_{df}^{-1}(1-\alpha/2).$ If the SE of $\widehat \Theta$ is unavailable, an estimate should suffice.

```ad-summary
title:Derivation
collapse:closed

$$
\begin{align*}
P\left( \dfrac{|\widehat{\Theta}|}{SE(\widehat{\Theta})}\leqslant z \right)&=1-\alpha\\
&=P(|\widehat{\Theta}|\leqslant z\cdot SE(\widehat{\Theta}))
\end{align*}
$$
That is,
$$
\begin{align*}
P(|\widehat{\Theta}|\leqslant \xi)&=1-\alpha\\
P(|T|\leqslant \xi/SE(\widehat{\Theta}))&=\\
P(-z\leqslant T\leqslant z)&= && \mbox{Letting }z=\xi/SE(\widehat{\Theta})\\
\Psi_{n-1}(z)-\Psi_{n-1}(-z)&=\\
\Psi_{n-1}(z)-(1-\Psi_{n-1}(z))&= && \mbox{Symmetry}\\
2\Psi_{n-1}(z)-1&=1-\alpha\\
2\Psi_{n-1}(z)&=2-\alpha
\end{align*}
$$

Thus,
$$
\begin{align*}
z&=\Psi_{n-1}^{-1}(1-\alpha/2)\\
\xi&=z\cdot SE(\widehat{\Theta})
\end{align*}
$$

And so our CI has bounds $\widehat \Theta^\pm=\widehat \Theta\pm z\cdot SE(\widehat\Theta).$ 
```

``````ad-rmk
title:R Details

```r
library(tidyverse)
library(mosaic)
lm_stat <- lm(X ~ 1, data = tib) # Assuming the data are in the column of tib named X.
Alpha <- 0.05
confint(lm_stat, level = 1 - Alpha) # CI for the mean.
```
``````

Through bootstrapping we would instead write

``````ad-rmk
title:R Details

```r
library(tidyverse)
library(mosaic)
m <- 1000
set.seed(1234)
Sdist <- matrix(data = NA, nrow = m)
Alpha = 0.05
for (i in (1:m)) {
	Sdist[i] <- mean(resample(tib))
}
estBounds <- cdata(Sdist, p = 1-Alpha)[1:2]
```
``````

# Nonparametric Estimation
## Estimating Functionals

> [!def] ***Statistical Functionals***
> Any function $T$ of CDFs or probability laws.

The most simple functional is the identity functional $T(F)=F.$ Other examples are the mean $$\mu(F)=\int xdF(x),$$
the variance $$\sigma(F)=\int(x-\mu(F))^{2}dF(x),$$
the median $x_{1/2}(F)=\inf\{x : F(x)\geqslant1/2\},$ and more generally the quantile function $$Q(\alpha)=\inf\{x : F(x)\leqslant \alpha\}.$$

> [!def] ***Empirical Distribution Function***
> Given IID random variables $\{X_i\}_{i=1}^n$ following the same distribution as $X,$ the **emperical distribution of $X$** is the function $$\widehat{F}_{n}(x)=\dfrac{1}{n}\sum_{i=1}^{n}\mathbb1(X_i\leqslant x).$$ When context allows, let $\widehat{P}_n(A)=\dfrac1n\displaystyle\sum_{i}^{n}\mathbb1(X_i\in A)$ and, when $X$ is discrete, $\widehat\pi_n(x)=\widehat P_n(\{x\}).$

By the strong law of large numbers, $\widehat{F}_n(x)$ a.s. converges to $F_X(x)$ for any $x.$ We may construct a Bernoulli variable $Y_x=\mathbb{1}(X\leqslant x)$ with parameter $F_X(x).$ Then, $\widehat{F}_n(x)$ is the sample mean of variables identically distributed to $Y_x,$ hence it converges a.s. to $E[Y_x]=F_X(x).$

> [!thm]
> For any $x,$
> 1. $E[\widehat{F}_n(x)]=F_X(x).$
> 2. $V[\widehat{F}_n(x)]=\dfrac{F(x)(1-F(x))}{n}.$
> 3. $MSE(\widehat{F}_n(x))=\dfrac{F(x)(1-F(x))}{n}\to0.$
> 4. $\widehat{F}_n(x)\overset{a.s.}{\to}F(x)$ and so $\widehat{F}_n(x)\overset{P}{\to}F(x).$

Estimators of statistical functionals are in general harder to measure on how good the estimate is. There is a standard metric on euclidean spaces, so estimators of points in $\mathbb{R}^k$ can be evaluated with said metric or an easier but related quantity such as the square of the metric for [[Classical-Statistical-Models#Why Least Squared Residuals?|regression]] or $MSE.$ On function spaces, many distance functions are available, and many more when the functions are distributions or primitives thereof—the CDF. An initial suggestion is the largest absolute difference $$\sup_{x}|\widehat{F}_n(x)-F(x)|.$$
Not only does it converge in probability to $0,$ there is convergence almost surely.

> [!thm] *Glibenko-Cantelli*
> $$\sup_{x}|\widehat{F}_n(x)-F(x)|\overset{a.s.}{\to }0.$$

Even bounds are known for its likely error.

> [!thm] *Dvoretzky-Kiefer-Wolfowitz (DKW) Inequality*
> For any $\varepsilon>0,$ $$P\left( \sup_{x}|\widehat{F}_n(x)-F(x)|>\varepsilon| \right)\leqslant 2\exp(-2n\varepsilon^2).$$

From the inequality we can construct something analogous to confidence sets, here known as a **confidence band.**

> [!thm] *Non-Parametric $1-\alpha$ Confidence Band*
> Let
> $$
> \begin{align*}
> \varepsilon_n&=\sqrt{ \dfrac{1}{2n}\log\left( \dfrac{2}{\alpha} \right)  }\\
> L_n(x)&=\max(\widehat{F}_n(x)-\varepsilon_n,0)\\
> U_n(x)&=\min(\widehat{F}_n(x)+\varepsilon_n,1)
> \end{align*}
> $$
> Then, $$P\left( \forall x.\ F_X(x)\in[L_n(x),U_n(x)] \right)\geqslant 1-\alpha.$$

### Plug-in Estimator
When faced with a functional, like we interchange $E[X]$ for $\overline{X}$ and $V[X]$ for $\widehat{S}_n^{2},$ the most obvious estimator for $T(F)$ is $T(\widehat{F}_n).$

> [!def] ***Plug-in Estimator***
> If $\theta=T(F),$ the **plug-in estimator** of $\theta$ is $\widehat{\Theta}_n=T(\widehat{F}_n).$

An important class of functionals are the linear functionals, those satisfying $$T(aF_1+bF_2)=aT(F_1)+bT(F_2).$$
A subset of the linear functionals are those of the form $$T(F)=\int g(x)dF,$$
for some function $g.$ Of course, these are really $E[g(X)]$ and there is already an obvious, parametric estimator for these: $\overline{g(X)}.$ Fortunately, the plug-in estimator coincides with it.

> [!thm]
> If $T(F)=\int g(x)dF$ for some function $g,$ then $$T(\widehat{F}_n)=\dfrac{1}{n}\sum_{i=1}^{n} g(X_i).$$

The convergence properties of the plug-in estimator vary by what $g$ is. Soon we will see a general, non-parametric procedure for estimating the $SE$ of estimators of these linear functionals. Although the $SE$ is a functional, the plug-in estimator would be for the joint distribution of the observations, not necessarily the underlying distribution of $X.$

> [!rem] ***Unbalanced Estimation***
> If we have independent random variables $X=(X_1,\ldots,X_N)$ and independent, IID draws from each $\{X_{i,j}\}_{j=1}^{n_i},$ with the independence assumption, we may form empirical distributions $\{\widehat{F}_{n_i}\}_{i=1}^{N}$ for each of the variables. Then we estimate a functional $T(F_{X_1},\ldots,F_{X_N})$ with $T(\widehat{F}_{n_1},\ldots,\widehat{F}_{n_N}).$

## Bootstrapping
Obtaining a good approximation usually requires a large number of samples and that may be done by simulating large draws from the distribution of the observations. Of course, we do not always know the underlying distribution but from the above section we can estimate it with $\widehat{F}_n.$ In particular, we often wish to know the $SE$ of plug-in estimators but their variance depends not on the empirical distribution but on the underlying distribution of $X.$ We may emphasise the dependence by denoting $V[T(\widehat{F}_n)]$ as $V_{F_X}[\widehat{F}_n].$ Bootstrapping has us plug-in again to get $V_{\widehat{F}_n}[\widehat{F}_n].$ More generally, if $g(X_1,\ldots,X_n)=T_n$ is a statistic with finite variance, we estimate $V_{F_X}[T_n]$ with $V_{\widehat{F}_n}[T_n].$

> [!thm]
> If $g(X)$ is a function of $X$ and $\|E[g(X)]\|$ is finite, then $$\dfrac{1}{n}\sum_{i=1}^{n} g(X_i)\overset{a.s.}{\to }E[g(X)].$$
> In particular, $$\dfrac{1}{n} \sum_{i=1}^{n} (g(X_i) - \overline{g(X)})^{2} \overset{P}{\to }V[g(X)].$$

A single draw from the distribution is really $n$ draws from $\widehat{F}_n.$ Since the latter places equal probability mass on each data point, a single draw amounts to sampling from the data with replacement. Thus, if $\{X_i^*\}_{i=1}^{n}$ are IID draws from $\widehat{F}_n,$ bootstrapping has us compute $g(X_1^*,\ldots,X_n^*)$ many times.

> [!def] ***Bootstrap $SE$***
> Let $\{X_{j,i}^*\}_{i=1}^{n}$ be IID draws from $\widehat{F}_n$ for $j\leqslant B$ and $B$ a fixed natural number. If $T_i^*=g(X_{i,1}^*,\ldots,X_{i,n}^{*}),$ **bootstrapping** estimates $V[g(X_1,\ldots,X_n)]$ with $$V_B=\widehat{SE}_B^2 = \dfrac{1}{B}\sum_{i=1}^{B} \left( T_{i}^{*}-\dfrac{1}{B}\sum_{j=1}^{B} T_{j}^{*} \right)^{2} .$$

``````ad-rmk
title:R Details
collapse:close

It is recommended to use the `boot` package.
```r
# Given data in tib$resp and a scalar-valued function statf, basic bootstrapping computes the following:

library(mosaic)

n <- length(tib$resp)
Tboot <- matrix(data = NA, nrow = B) # B is a large number.
for (i in c(1:B)) {
	respStar <- mosaic::sample(x = tib$resp, size = n, replace = T) # Sample with replacement.
	Tboot[i] <- statf(respStar)
}

sehat <- sd(Tboot)
```
``````

Here $n$ is fixed and $B$ is the limiting variable so that $V_B\overset{P}{\to}V[T_n].$
### Bootstrap CI
The method also allows us to construct confidence intervals for many estimators with unknown distributions which are not asymptotically normal. Of course, if $T_n$ is asymptotically normal, we may construct a normal CI:

> [!def] ***Bootstrap Normal CI***
> With $\widehat{SE}_B$ as above, the **bootstrap normal $1-\alpha$ CI** has bounds $\widehat{\Theta}_n^{*,\pm}=T_n\pm z_{\alpha/2}\widehat{SE}_B,$ where $z_{\alpha/2}=\Phi^{-1}(1-\alpha/2).$

#### Percentile CI
Let $\theta=T(F_X), \widehat{\Theta}_n=T(\widehat{F}_n),$ let $\widehat{\Theta}_{n,i}^{*}$ be the $i$-th bootstrap draw for $\widehat{\Theta}_n,$ define $$\widehat{F}_{\Theta,B}(x)=\dfrac{1}{B}\sum_{i=1}^{B} \mathbb{1}(\widehat{\Theta}_{n,i}^{*}\leqslant x),$$
and let $\widehat{\Theta}_{\alpha}^{*}$ be a minimal $\widehat{\Theta}_{n,i}^{*}$ s.t. $\widehat{F}_{\Theta,B}(\widehat{\Theta}_{\alpha})\geqslant\alpha.$ A first guess at a $1-\alpha$ confidence interval, in view of how normal CIs tend to look like, is $(\widehat{\Theta}_{\alpha/2}^{*},\widehat{\Theta}_{1-\alpha/2}^{*}),$ as if we were 'estimating' $\widehat{\Theta}_n$ which itself is estimating $\theta.$ 

> [!def] ***Bootstrap Percentile Interval***
> A **$1-\alpha$ bootstrap percentile CI** for $T(F_X),$ with the definitions as above, has lower and upper bounds $\widehat{\Theta}_{\alpha/2}^{*}$ and $\widehat{\Theta}_{1-\alpha/2}^{*}$ respectively.

``````ad-rmk
title:R Details
collapse:close

```r
# tib$resp contains the X_i, Tstat is the functional (now also taking data sets as arguments)

library(mosaic)

n <- length(tib$resp)
TBoot <- matrix(data = NA, nrow = B) # B is large.
for (i in c(1:B)) {
	respStar <- mosaic::sample(x = tib$resp, size = n, replace = T)
	TBoot[i] <- Tstat(respStar)
}

perBootCI <- qdata(p = c(alpha/2, 1 - alpha/2), TBoot) # Lower and upper bounds for the CI. Assumes 0 < alpha < 1, ideally below 1/2.
```
``````

Under certain assumptions, these indeed form a $1-\alpha$ CI.

> [!thm]
> If there exists an increasing function $f$ s.t. $f(T(\widehat{F}_{X,n}))\sim\mathcal{N}(f(T(F_X)),c^{2})$ for some fixed $c>0$ not depending on the $X_i,X,$ nor their distributions, then $$P(\theta\in(\widehat{\Theta}_{\alpha/2}^{*},\widehat{\Theta}_{1-\alpha/2}^{*}))=1-\alpha.$$

```ad-note
title:Derivation
collapse:closed

Let $U_i^{*}=f(\widehat{\Theta}_{n,i}^{*}),$ let $u_{\alpha}^{*}$ be a minimal $U_{i}^{*}$ s.t. $\widehat{F}_{U,B}(U_i^{*})\geqslant\alpha,$ and let $f(\theta)=M.$ Note that $U_i^{*},$ by the assumption on $f,$ follows a normal distribution with mean $f(T(\widehat{F}_n))=U,$ due to the underlying distribution of $X_{i,j}^{*}$ being $\widehat{F}_n,$ and variance $c^{2}.$ Since increasing functions preserve quantiles, $u_{\alpha}^{*}=f(\widehat{\Theta}_{\alpha}^{*});$ $U\sim\mathcal{N}(M,c^{2}),$ so the $\alpha/2$ quantile of $U$ is $M-z_{\alpha/2}c,$ hence $u_{\alpha/2}^{*}=U+z_{\alpha/2}c$ and $u_{1-\alpha/2}^{*}=U-z_{\alpha/2}c.$ Thus,
$$
\begin{align*}
P(\widehat{\Theta}_{\alpha/2}^{*}\leqslant \theta\leqslant \widehat{\Theta}_{1-\alpha/2}^{*})&=P(u_{\alpha/2}^{*}\leqslant M\leqslant u_{1-\alpha/2}^{*})\\
&=P\left( z_{\alpha/2}\leqslant\dfrac{U-M}{c} \leqslant -z_{\alpha/2} \right)\\
&=1-\alpha/2 - \alpha/2\\
&=1-\alpha
\end{align*}
$$
```

The function $f$ need not be known explicitly, only its existence is assumed. Note that $\theta$ need not be from a parameter space $\Theta$ and so this kind of bootstrapping is non-parametric. See [[#Parametric Bootstrap|below]] for parametric bootstrapping.
#### Pivotal CI
There is a different approach where we more directly estimate $\theta.$

> [!def] ***Bootstrap Pivot CI***
> Let $R_n=\widehat{\Theta}_n-\theta.$ If $F_R(r)=P_{F_X}(R_n\leqslant r),$ we may define a **$1-\alpha$ CI** $C_n^{*}=(a,b)$ where $$a=\widehat{\Theta}_n-F_R^{-1}(1-\alpha/2),\quad\quad b=\widehat{\Theta}_n-F_R^{-1}(\alpha/2).$$

> [!thm]
> For the pivot CI, $P(\theta\in C_n^{*})=1-\alpha.$

```ad-note
title:Derivation
collapse:closed

$$
\begin{align*}
P(a\leqslant \theta\leqslant b)&=P(a-\widehat{\Theta}_n\leqslant -R_n\leqslant b-\widehat{\Theta}_n)\\
&=P(\widehat{\Theta}_n-b\leqslant R_n\leqslant \widehat{\Theta}_n-a)\\
&=F_R(\widehat{\Theta}_n-a)-F_R(\widehat{\Theta}_n-b)\\
&=F_R(F_R^{-1}(1-\alpha/2))-F_R(F_R^{-1}(\alpha/2))\\
&=1-\alpha
\end{align*}
$$
```

Of course, we do not always know the distribution of $R_n$ but we may estimate it with bootstrapping. Note that $R_n(F_X)=T(\widehat{F}_n)-T(F_X),$ hence we may replace $R_n$ with $R_{n,i}^{*}=\widehat{\Theta}_{n,i}^{*}-\widehat{\Theta}_n.$ Here, $\widehat{\Theta}_n$ estimates $T(F_X)$ and $\widehat{\Theta}_{n,i}^{*}$ 'estimates' $\widehat{\Theta}_{n}.$ With that in view, let $$\widehat{F}_{R,B}(r)=\dfrac{1}{B}\sum_{i=1}^{B} \mathbb{1}(R_{n,i}^{*}\leqslant r).$$
It is clear we have at least convergence in probability. The $\alpha$ quantile of this distribution, by how the $R_{n,i}^{*}$ are defined, is the $\alpha$ quantile of the bootstrap distribution of $\widehat{\Theta}_n$ minus $\widehat{\Theta}_n.$ Now we have the estimated bounds $$\widehat{a}=2\widehat{\Theta}_n-\widehat{\Theta}_{1-\alpha/2}^{*},\quad\quad \widehat{b}=2\widehat{\Theta}_n-\widehat{\Theta}_{\alpha/2}^{*}.$$

> [!def] ***Bootstrap Pivotal CI***
> Given a real-valued functional $T(F)=\theta,$ a plug-in estimator $\widehat{\Theta}_n=T(\widehat{F}_{X,n}),$ and statistics $\{\widehat{\Theta}_{n,i}^{*}\}_{i=1}^{B}$ taken from IID draws of $\widehat{F}_{X,n},$ for any $\alpha\in(0,1),$ let $\widehat{\Theta}_\alpha^{*}$ be a minimal $\widehat{\Theta}_{n,i}^{*}$ s.t. $\widehat{F}_{\Theta,B}(\widehat{\Theta}_\alpha)\geqslant\alpha$ where $$\widehat{F}_{\Theta,B}(x)=\dfrac{1}{B}\sum_{j=1}^{B} \mathbb{1}(\widehat{\Theta}_{n,j}^{*}\leqslant x).$$
> The **$1-\alpha$ bootstrap pivotal confidence interval** is the interval with a lower bound $2\widehat{\Theta}_n-\widehat{\Theta}_{1-\alpha/2}^{*}$ and upper bound $2\widehat{\Theta}_n-\widehat{\Theta}_{\alpha/2}^{*}.$

> [!thm]
> Let $T,\widehat{\Theta}_n,$ and $\widehat{\Theta}_{\alpha}^{*}$ be as above. If $C_n$ is the $1-\alpha$ pivotal CI, under weak conditions on $T,$ $$P_{F_X}(\theta\in C_n)\to 1-\alpha.$$

``````ad-rmk
title:R Details
collapse:close

```r
# tib$resp contains the X_i, Tstat is the functional (now also taking data sets as arguments)

library(mosaic)

ThetaHat <- Tstat(tib$resp)
n <- length(tib$resp)
TBoot <- matrix(data = NA, nrow = B) # B is large.
for (i in c(1:B)) {
	respStar <- mosaic::sample(x = tib$resp, size = n, replace = T)
	TBoot[i] <- Tstat(respStar)
}

perBootCI <- 2*ThetaHat - qdata(p = c(1 - alpha/2, alpha/2), TBoot) # Lower and upper bounds for the CI. Assumes 0 < alpha < 1, ideally below 1/2.
```
``````

Not only can we estimate the standard error of plug-in estimators, bootstrapping gives us a method to estimate a wide range of functionals.

> [!rem] ***Unbalanced CI Construction***
> If we have a family of independent random variables, a functional of their distributions, and IID draws (possibly of differing sizes) from the respective distribution, the same procedure tends to work. Note we have an independence assumption of the underlying distributions.

#### Jackknife Variance Estimation

> [!def] ***Jackknife Estimator***
> Let $T_{n,(-i)}$ be $T_n$ with $X_i$ removed as an argument, i.e. $T(X_1,\ldots,X_{i-1},X_{i+1},\ldots,X_n).$ Let $$\overline{T}_n = \dfrac{1}{n} \sum_{i=1}^{n} T_{n,(-i)}.$$
> The **Jackknife** estimator of $V[T_n]$ is $$V_{\mathrm{jack}} = \dfrac{n-1}{n}\sum_{i=1}^{n} (T_{n,(-i)} - \overline{T}_n)^{2}.$$
> $\widehat{SE}_{\mathrm{jack}} = \sqrt{ V_{\mathrm{jack}} }.$

Given certain assumptions about $T,$ the Jackknife estimator 'consistently estimates' $V[T_n]$ in that $$V_{\mathrm{jack}}/V[T_n] \overset{P}{\to }1.$$

> [!thm]
> Given suitable assumptions on $T,$ $$V_{\mathrm{jack}}/V[T_n] \overset{P}{\to }1.$$

Despite that, the Jackknife does not consistently estimate the $SE$ of sample quantiles (i.e. when $T_n$ is the sample quantile on $n$ draws) in the literal sense of consistency.
### Parametric Bootstrap

> [!def] ***Parametric Bootstrap***
> Suppose there is a parametric model $\{F(-;\theta)\}_{\theta\in\Theta}.$ Given an estimator $\widehat{\Theta}_n$ of $\theta,$ let $\{X_{j,i}^*\}_{i=1}^{n}$ be IID draws from $F(-;\widehat{\Theta}_n)$ for $j\leqslant B$ and $B$ a fixed natural number. If $T_i^*=g(X_{i,1}^*,\ldots,X_{i,n}^{*}),$ **parametric bootstrapping** estimates $V[g(X_1,\ldots,X_n)]$ with $$V_B=\widehat{SE}_B^2 = \dfrac{1}{B}\sum_{i=1}^{B} \left( T_{i}^{*}-\dfrac{1}{B}\sum_{j=1}^{B} T_{j}^{*} \right)^{2} .$$

$\widehat{\Theta}_n$ could be the ML or MoM estimator. In the former case, if $g = h\circ T$ where $h : \mathbb{R}^m\to\mathbb{R}$ is differentiable and $T$ is some appropriate function of the random draws, we can estimate $V[g(X)]$ either with the [[#Maximum Likelihood Estimation#Properties in Identifiable Models|delta method]] or parametric bootstrapping. The delta method often gives a closed form expression for the estimated SE but the parametric bootstrap is often easier to obtain with modern technology.
## Order Statistic

> [!def] ***Order Statistics***
> If $\{X_i\}_{i=1}^{n}$ is a sequence of random variables, the **$i$-th order statistic** is the $i$-th least variable, ordering by index in case two have the same value. That is, it is the $i$-th element of $$\displaystyle\bigoplus_{x\in\mathbb{R}}\{X_i = x : i\leqslant n\},$$
> where each $\{X_i=x : i\leqslant n\}$ is ordered by the index $i.$

> [!def] ***Plotting Position***
> If $Y_i$ is the $i$-th order statistic, a **plotting position** $p_i$ is an estimator of $F_X\left( \dfrac{Y_i-\mu_X}{\sigma_X} \right)$ ([Gulledge and Looney](https://www.jstor.org/stable/2683917)).

The name is derived from its use in plotting empirical distributions since if the $X_i$ truly are IID draws from $F_X,$ then we would plot them by arranging them in order and computing $F_X(X_i).$ Often it is more useful to work with the standardised values.

> [!rmk] ***Common Plotting Positions***
> Let $W_i=\dfrac{Y_i-\mu_X}{\sigma_X}$According to Gulledge and Looney (see definition), the following are common plotting positions:
> $$
> \begin{align*}
> p_i&=\dfrac{i-1/2}{n}\\
> p_i&=\dfrac{i}{n+1}\\
> p_i&=\dfrac{i-3/8}{n+1/4}\\
> p_i&=F_X(E[W_i])\\
> p_i&=F_X(\operatorname{median} W_i)
> \end{align*}
> $$
> The last third, the authors report, serves as an approximation of $F_X(E[W_i])$ when $X$ is normal.

# Sufficient Statistics

> [!def] ***Sufficient***
> A statistic $T$ is **sufficient** only if, for all $t,$ the distribution $P_\theta(X\in A\mid T(X)=t)$ is independent of $\theta.$ It is **minimally sufficient** only if for any other sufficient statistic $S$ there is a function $f$ s.t. $S(X)=f(T(X)).$

Roughly, sufficient statistics allow us to know the shape of the distribution of the data given we know $T(\vec X).$ Equivalently, $P_\theta(X\in A\mid T(X)=t)$ is the same for all $\theta.$ In fact, we can say more than this.

> [!thm] Theorem (***Factorisation***)
> $T$ is sufficient iff there are functions $g(t,\theta)$ and $h(\vec x)$ s.t. $$\pi(\vec x;\theta) = g(T(\vec x),\theta)h(\vec x).$$

> [!thm]
> Write $\vec x\leftrightarrow\vec y$ when there is a constant $c$ s.t. for any $\theta,$ $\pi(\vec x;\theta)=c\pi(\vec y;\theta).$ $T$ is sufficient only if $T(\vec x)=T(\vec y)$ implies $\vec x\leftrightarrow\vec y.$ It is minimal sufficient only if the converse also holds, i.e. $T(\vec x)= T(\vec y)$ iff $\vec x\leftrightarrow\vec y.$
