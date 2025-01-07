Tags: [[Stats]], [[Statistical-Methods]]

A list of named statistics grouped by which family they fit into the best alongside a brief discussion on when to use them and which models they might arise from. For theorems surrounding these, see [[Probability-Theorems|here]]; for a list of models and their properties, see [[Classical-Statistical-Models|here]]; and for more on statistical methods and classical hypothesis testing see [[Statistical-Methods|here]] and [[Classical-Hypothesis-Testing|here]]. Most use-cases for these, for now, are in the classical context.

# Proportions
## Equal Variance Two Independent Samples

> [!def]
> Let $\{X_{1,i}\}_{i=1}^{n_1}$ and $\{X_{2,i}\}_{i=1}^{n_2}$ be respectively IID, independent Bernoulli variables with parameters $p_1$ and $p_2.$
> 1. The **pooled sample proportion** is the statistic $$\widehat{p}=\dfrac{n_1\overline{X}_1+n_2\overline{X}_2}{n_1+n_2}=\dfrac{1}{n_1+n_2}\sum_{i=1}^{2} \sum_{j=1}^{n_i} X_{i,j}.$$
> 2. The **equal variance two-independent sample $z$-score** is the statistic $$Z=\dfrac{\overline{X}_1-\overline{X}_2}{\sqrt{ \dfrac{p_1(1-p_1)}{n_1}+\dfrac{p_2(1-p_2)}{n_2} }}.$$
> 3. The corresponding $1-\alpha$ CI for $p_1-p_2$ has bounds $$\overline{X}_1-\overline{X}_2\pm z_{\alpha/2}\sqrt{ \dfrac{p_1(1-p_1)}{n_1}+\dfrac{p_2(1-p_2)}{n_2} }.$$

# $F$-Statistics
## Independent Normal Samples

> [!def]
> Let $\{X_{i,j}\}_{j=1}^{n_i}$ be IID normal variables with mean $\mu_i$ and variance $\sigma_i^{2},$ for $i\in\{1,2\}.$ Suppose the $X_{1,i}$ are independent from the $X_{2,i}.$ The **$F$-statistic** is the variable $$F_0=\dfrac{\widehat{S}_1^{2}}{\widehat{S}_2^{2}}.$$
> Here we have $$H_0:\sigma_1=\sigma_2,\qquad H_1:\sigma_1\ne \sigma_2,$$
> and **reject $H_0$** only if either $F_0<F_{n_1-1,n_2-1,1-\alpha/2}$ or $F_0>F_{n_1-1,n_2-1,\alpha/2}.$ If $H_1:\sigma_1<\sigma_2,$ we reject only if $F_0>F_{n_1-1,n_2-1,\alpha},$ and if $H_1:\sigma_1>\sigma_2,$ we reject only if $F_0<F_{n_1-1,n_2-1,1-\alpha}.$ If $F$ is the $F$ CDF with DoF $n_1-1$ and $n_2-1,$ it has $p$-value $2(1-F(F_0))$ if $F_0>1$ and $2F(F_0),$ $F(F_0),$ and $1-F(F_0),$ respectively.

> [!warning]
> This test is not robust and mild violations of the assumptions will severely alter the reliability of the test.

When the design is balanced, $F_0$ more exactly follows an $F$ distribution with the appropriate degrees for note $$F_0=\dfrac{(n-1)^{-1}\sum_{i=1}^{n} (X_{1,i}-\overline{X}_1)^{2}}{(n-1)^{-1}\sum_{i=1}^{n} (X_{2,i}-\overline{X}_2)^{2}}=\dfrac{\sum_{i=1}^{n} (X_{1,i}-\overline{X}_1)^{2}/\sigma^{2}}{\sum_{i=1}^{n} (X_{2,i}-\overline{X}_2)^{2}/\sigma^{2}}.$$
If we replace $\overline{X}_1$ and $\overline{X}_2$ by $\mu_1$ and $\mu_2,$ respectively, the numerator and denominator will be exact $\chi^{2}_n$ distributions. It is fortunate that even when replacing $\mu_i$ by $\overline{X}_i$ we have exact $\chi^{2}$ variables, though with one fewer degree of freedom. Intuitively, this is due to the $X_{1,j}$ having to sum to $n\overline{X}_1.$

> [!thm] Theorem (***Cochran's Theorem***)
> If $\{Z_i\}_{i=1}^{n}$ are IID standard normal variables, then $n\overline{S}^{2}_n=\displaystyle\sum_{i=1}^{n}(Z_i-\overline{Z})^{2}$ follows a $\chi^{2}_{n-1}$ distribution.

```ad-note
title:Derivation
collapse:closed

Let $Z=(Z_1,\ldots,Z_n).$ Then, $$n\overline{S}_n^{2}=|Z|^{2}+\dfrac{1}{n}(\vec1\cdot Z)^{2}=Z^TZ+\dfrac{1}{n}Z^T\vec 1\vec 1^T Z=Z^T\left( \mathbb{1}_n-\dfrac{1}{n}\vec 1\vec 1^T \right)Z.$$
If $M=\mathbb{1}_n-n^{-1}\vec 1\vec 1^T,$ we have $n\overline{S}_n^{2}=Z^TMZ.$ We shall use the spectral decomposition of $M$  note that $M-\mathbb{1}_n$ is almost a projection, i.e. $(M-\mathbb{1}_n)^2=M-\mathbb{1}_n,$ and in fact $$(M-\mathbb{1}_n)^m=(-1)^{m+1}(M-\mathbb{1}_n).$$
Thus,
$$
\begin{align*}
M^2&=(\mathbb{1}_n+M-\mathbb{1}_n)^2\\
&=\mathbb{1}_n^2+2(M-\mathbb{1}_n)+(M-\mathbb{1}_n)^{2}\\
&=\mathbb{1}_n+2(M-\mathbb{1}_n)-(M-\mathbb{1}_n)\\
&=\mathbb{1}_n+M-\mathbb{1}_n\\
&=M
\end{align*}
$$
Hence $M$ is a projection with eigenvalues $0$ and $1.$ Because $$\dim\ker(M-0\mathbb{1})^n=\dim\ker M^n=\dim\ker M=1,$$
$0$ has multiplicity $1$ and $1$ has multiplicity $n-1,$ making the characteristic polynomial $$p(z)=(z-1)^{n-1}z.$$
$\vec 1$ is an eigenvector of $0$ and, since $M$ is symmetric, the rest may be chosen so that $M=QDQ^T,$ where $D=\operatorname{diag}\{\lambda_i\}_{i=1}^{n}$ and the eigenbasis matrix $Q$ is orthogonal. Let $X=Q^TZ.$ Since $M,$ and consequently $Q,$ is not random, $X$ is a normal vector with parameters $$E[Q^TZ]=Q^TE[Z]=0,\qquad V[Q^TZ]=Q^TV[Z]Q=Q^T\mathbb{1}_nQ=\mathbb{1}_n.$$
Thus, $X$ is a standard normal vector. Hence, $$Z^TMZ=X^TQ^TMQX=X^TDX=X^T\begin{bmatrix}
0 \\
X_2 \\
\vdots \\
X_n
\end{bmatrix}=\sum_{i=2}^{n} X_i^{2}.$$
Because $X\sim\mathcal{N}(\vec0,\mathbb{1}_n),$ its components are independent:
$$
\begin{align*}
\pi_X(\vec x)&=\left( \dfrac{1}{\sqrt{ 2\pi }} \right) ^n\exp\left( -\dfrac{1}{2}(\vec x-\vec0)^T\mathbb{1}_n^{-1/2}(\vec x-\vec0) \right)\\
&=\left( \dfrac{1}{\sqrt{ 2\pi }} \right) ^n\exp\left( -\dfrac{1}{2}|\vec x|^2 \right)\\
&=\prod_{i=1}^{n}\dfrac{1}{\sqrt{ 2\pi }}\exp\left( -\dfrac{1}{2}x_i^{2} \right)\\
&=\prod_{i=1}^{n}\pi_{X_i}(x_i)
\end{align*}
$$
Therefore, $\displaystyle\sum_{i=2}^{n}X_i^{2}$ exactly follows a $\chi_{n-1}^{2}$ distribution.
```



# $t$-statistics
## Homoskedastic Two Independent Samples

> [!def]
> Let $\{X_{i,j}\}_{j=1}^{n_i}$ be IID normal variables with mean $\mu_i$ and variance $\sigma^{2},$ with the $X_{1,i}$ independent from the $X_{2,i}.$ The **equal variance two-independent sample $t$-statistic** is given by
> $$T=\dfrac{\overline{X}_1-\overline{X}_2}{S_p\sqrt{ \dfrac{1}{n_1}+\dfrac{1}{n_2} }},$$
> where the **pooled sample standard deviation** is the quantity $$S_p=\sqrt{ \dfrac{(n_1-1)\widehat{S}_1^{2}+(n_2-1)\widehat{S}_2^{2}}{n_1+n_2-2} }.$$

As the name implies, this is typically used in a two independent sample means scenario, supposing the variances are equal. As is typical, $T$ is of the form $\hat{\Theta}/SE(\hat{\Theta}),$ with unknown standard deviations being replaced by estimators. Supposing, crucially, that **the variances are approximately equal,** $T$ approximately follows a $t$-distribution with $df=n_1+n_2-2$ DoF.

> [!def] The Test
> Given the setup as above, we have $$H_0:\mu_1-\mu_2=0,\qquad H_1:\mu_1-\mu_2\ne 0.$$
> We are to **reject $H_0$** only if $|T|>t_{df,\alpha}$ where $df=n_1+n_2-2.$ It has the same $p$-value as a $t$-test.

``````ad-rem
title:R Details

```r
# tib has the data in X1 and X2 respectively.
t.test(tib$X1, tib$X2, var.equal = T, alternative = "two.sided", conf.level = 1-Alpha)
# tib has the data in X with labels in lab.
t.test(X ~ lab, data = tib, var.equal = T, alternative = "two.sided", conf.level = 1-Alpha)
# or
lm_test <- lm(X ~ lab, data = tib)
summary(lm_test)$coef[2,4]
```
``````

> [!rem]
> Equivalent to method considered in Ch. 3 and 4 of *Intermediate Statistics with R.*

The situation is similar to estimating parameters for IID variables and so the $1-\alpha$ CI built [[Classical-Estimation#Sample Statistics|here]] applies when replacing $\hat{S}_n/\sqrt{ n }$ by $\hat{SE}(\hat{\Theta}),$ known to be $S_p\sqrt{ n_1^{-1} + n_2^{-1} }.$

> [!def] Equal Variance, Two-Sample $t$ CI
> A CI with bounds $$\overline{X}_1-\overline{X}_2\pm\Psi_{df}^{-1}(1-\alpha/2)S_p\sqrt{ \dfrac{1}{n_1} + \dfrac{1}{n_2} }.$$

``````ad-rem
title:R Details

```r
library(tidyverse)
library(mosaic)
# tib has 2 columns `X` and `lab` with the latter having 2 value types.
lm_stat <- lm(X ~ lab, data = tib)
Alpha <- 0.05
confint(lm_stat, level = Alpha)[2,] # Will display the lower and upper bounds of the CI, with the same assumptions as above.
```
``````

## Welch Test

> [!def] Welch's Approximate $t$
> Let $\{X_{1,i}\}_{i=1}^{n_1}$ and $\{X_{2,i}\}_{i=1}^{n_2}$ be IID normal variables, respectively, with parameters $\mu_1,\sigma_1^{2}$ and $\mu_2,\sigma_2^{2}.$ **Welch's approximate $t$** statistic is given by $$T=\dfrac{\overline{X}_1-\overline{X}_2}{\sqrt{ \widehat{S}_1^{2}/n_1 + \widehat{S}_2^{2}/n_2 }}.$$
> It has an approximate $p$-value $p\mid T=2P(T'<T)$ where $T'$ follows a $t$-distribution with $df$ DoF.

$T$ here follows an approximate $t$-distribution with DoF $\min(n_1-1,n_2-1),$ though a better approximation is given by $$df=\left\lfloor \dfrac{(\widehat{S}_1^{2}/n_1 + \widehat{S}_2^{2}/n_2)^{2}}{(\widehat{S}_1^{2}/n_1)^2/(n_1-1) + (\widehat{S}_2^{2}/n_2)^2/(n_2-1)} \right\rfloor .$$
Since $t_{\alpha,df}$ is decreasing in $df$ for $\alpha<1/2$ and this latter formula is typically larger than $\min(n_1-1,n_2-1),$ critical values in hypothesis testing determined via the first method are larger, and hence more stringent, than those determined via the second method. Put another way, the [[Classical-Hypothesis-Testing#Binary Hypothesis Testing|Type I error rate]] of the first method is typically lower than $\alpha$ whilst the second is closer to $\alpha.$

> [!def] Heteroskedastic Two-Independent Samples CI
> A CI with bounds $$\overline{X}_1-\overline{X}_2\pm t_{\alpha/2,df}\sqrt{ \widehat{S}_1^{2}/n_1 + \widehat{S}_2^{2}/n_2 }.$$

> [!rem] Whether to Use Homo or Heteroskedastic Versions
> Because this test statistic requires fewer assumptions to be applicable than its homoskedastic version, and checking equal variances involves volatile tests, the Welsh $t$ statistic is recommended.

```r
# tib contains X1 and X2 data in the corresponding columns.
t.test(tib$X1, tib$X2, alternative = "two.sided", conf.level = 1-Alpha)

# tib contains data in X with labels in lab.
t.test(X ~ lab, data = tib, alternative = "two.sided", conf.level = 1-Alpha)
```


# Questions
- **What if in any of these tests we replace 0 by $\theta$?**
- **What if in any 2-tailed test we replace it with a single tailed test involving $\theta$?**
