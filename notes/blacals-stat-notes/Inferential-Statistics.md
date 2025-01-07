Tags: [[Stats]], [[Statistical-Methods]],

> [!def] Models
> A **model** is a family of distributions, densities, or regression functions indexed by parameters. We call the index set $\Theta$ the **parameter space.** If the random variables involved in a problem have their distribution in the model, we say the model is **fully specified.**
> - If $\Theta\subseteq\mathbb{R}^n,$ we say $\Theta$ has $n$ parameters. If we are interested in estimating some components of $\theta\in\Theta,$ the rest are called **nuisance parameters.**
> - If there are finitely many parameters, the model is called **parametric,** otherwise it is **non-parametric.**
> 
> When we assume some realised values come from a distribution in a particular model, this is a **model assumption.**

Given a parametric model with $m$ parameters and $n$ independent observations, many distributions, estimators, and methods rely on the **degrees of freedom (DoF)** of the model, typically denoted $df.$

> [!def] Degrees of Freedom
> Given the above assumptions, typically $df=n-m.$

One should ensure that a particular method uses this computation of $df$ even if it is typical.

> [!rmk] Parameter Notation
> If $X$ is a random vector representing our observations and $\theta$ is an unknown parameter, $\pi(x; \theta)$ is the distribution of $X$ with parameter $\theta,$ assuming it is in the model. It is not necessarily a conditional distribution given $\theta.$ In the Bayesian context it is, so we use $\pi(x\mid \theta)$ instead. But in the classical context we have only functional dependence. Further, $E_\theta[h(X)]$ denotes the expected value of $h(X)$ and $P_\theta(X\in A)$ the probability of $X\in A$ both using $\pi(x; \theta).$

> [!def] Identifiable Models
> A model $\{P_\theta\}_{\theta\in\Theta}$ is **identifiable** only if $\theta=\theta'$ whenever $P_\theta=P_{\theta'}.$

It is fortunate that often we have a simpler criteria for identifiability using [[Random-Variables#Kullback-Leibler|KL divergence]]:

 > [!thm]
 > A model $\{P_\theta\}_{\theta\in\Theta}$ is identifiable only if $D_{\mathrm{KL}}(\theta\|\theta')>0$ for any $\theta\ne \theta'\in\Theta.$



# Statistics

It is common to summarise the observations with a single number such as an estimate for their common mean if the observations are IID variables.

> [!def] Statistics
> Given a vector $X=(X_1,\ldots, X_n),$ a **statistic** is a real-valued, measurable function $h:\mathbb{R}^n\to\mathbb{R}.$ The distribution of $h(X)$ is called the **sampling distribution.**

> [!def] Statistical Functionals
> Functions of a CDF.

## Sufficient Statistic

> [!def] Sufficient Statistic
> A statistic $T=f(X)$ is a **sufficient statistic** for $\theta$ only if for any event $D,$ $P_\theta(Y\in D\mid T=t)$ is the same for all $\theta$ for which the indicated probability is positive.

Intuitively, any observation $Y\in D$ made based on $T=t$ plays no role in estimating $\theta.$ There is an easier criterion characterising sufficient statistics:

> [!thm] *Factorisation*
> $T$ is a sufficient statistic for $\theta$ only if it satisfies the **factorisation criterion:** that $\pi(x;\theta)=g(f(x),\theta)h(x),$ for some functions $g$ and $h.$

# Categories of Inference Problems
There are 3 general kinds of inference problems:

> [!def] Kinds of Problems
> - **Parametric Estimation.** Given a parametric model, we wish to estimate the parameters.
> - **Nonparametric Estimation.** Given a nonparametric model, we wish to estimate some distributions or particular features thereof such as variance.
> - **$m$-ary Hypothesis Testing.** Given $m$ hypotheses exhausting all possibilities, we wish to decide which is more likely to be true or minimises the probability of error. If $m=2,$ it is called **binary** hypothesis testing.

These do not exhaust all statistical inference problems but they help categorise most. We may characterise things more broadly:

> [!def] Kinds of Inference
> - **Model Inference.** The use of model of some process or phenomena based on available data to make predictions.
> - **Variable Inference.** The use of statistical methods to infer likely values for one or more unknown variables.

This is no sharp distinction (e.g. in describing model with a set of variables, a model inference problem may be turned into a variable inference problem); it is introduced for conceptual ease.
# Derived Distributions
## Functions of One Variable
Given a random variable $X$ (or more random variables), we wish to know the distribution of $Y=g(X).$ If all we care about is expected values, we can get that without the distribution of $g(X).$
$\quad$If $X$ is discrete, note $$p_Y(y)=P(g(X)=y)=\sum_{\{x:g(x)=y\}}p_X(x).$$
If on the other hand $X$ is continuous, individual values have 0 probability, so we need something more than $P(g(X)=y).$ If we look at an interval of $Y,\ [y, y+\delta],$ and ask the probability that $Y$ is in that interval, that just is the probability of being in the inverse image of the interval under $g,$ i.e. $$P(Y\in[y,y+\delta])=P(X\in\breve{g}([y,y+\delta]))=\int_{\breve g([y, y+\delta])}\pi_X(x)dx.$$
When everything takes place on the real line and we have CDFs, it is generally better to start this process with CDFs for we can obtain the PDF of $Y$ and reasoning about inequalities can be easier. Again note that $$F_Y(y)=P(X\in \breve{g}((-\infty,y]))=\int_{\{x:g(x)\leqslant y\}}\pi_X(x)dx.$$
If we can express this for all $y,$ differentiate $$\frac{d F_Y}{dy}(y)=\pi_Y(y).$$
If $g$ has an inverse and is increasing, simply apply its inverse.

> [!thm] *Distributions of Strictly Increasing Functions*
> If $g(X)=Y$ is a strictly increasing, differentiable function of $X,$ $$F_Y(y)=F_X(g^{-1}(y)).$$
> Hence $$\pi(y) = \pi_X(g^{-1}(y))(g^{-1})'(y) =\pi_X(g^{-1}(y))\dfrac{1}{g'(g^{-1}(y))}.$$

For example, let $X\sim\mathcal{U}(0,2)$ and $Y=X^3.$ Then,
$$
\begin{align*}
F_Y(y)&=P(Y\leqslant y)\\
&=P(X^3\leqslant y)\\
&=P(X\leqslant \sqrt[3]{y})\\
&=\frac{1}{2}\sqrt[3]{y}\\
\pi_Y(y)&=F_Y'(y)=\frac{1}{6\sqrt[3]{y^2}}
\end{align*}
$$
If it is order-reflecting, $F_Y(y)=1-F_X(g^{-1}(y)).$

> [!thm] *Distributions of Strictly Decreasing Functions*
> If $g(X)=Y$ is a strictly decreasing, differentiable function of $X$ and $X$ is continuous, $$F_Y(y)=1-F_X(g^{-1}(y)).$$
> Thus, $$\pi(y)=-\dfrac{\pi_X(g^{-1}(y))}{g'(g^{-1}(y))}.$$

### Special Cases
Here we assume $X$ is known and continuous.
#### $X^n$
If $n$ is even, then
$$
\begin{align*}
F_Y(y)&=P(X^n\leqslant y)\\
&=P(| X| \leqslant \sqrt[n]{y})\\
&=P(-\sqrt[n]y\leqslant X\leqslant \sqrt[n]y)\\
&=\int_{-\sqrt[n]y}^{\sqrt[n]y}f_X(x)dx\\
&=\int_{-\infty}^{\sqrt[n]y}f_X(x)dx-\int_{-\infty}^{-\sqrt[n]y}f_X(x)dx\\
&=F_X(\sqrt[n]y)-F_X(-\sqrt[n]y)\\
\pi_Y(y)&=\frac{1}{n\sqrt[n]{y^{n-1}}}(\pi_X(\sqrt[n]y)+\pi_X(-\sqrt[n]y))
\end{align*}
$$
If $n$ is odd, then 
$$
\begin{align*}
F_Y(y)&=P(X^n\leqslant y)\\
&=P(X\leqslant \sqrt[n]y)\\
&=F_X(\sqrt[n]y)\\
\pi_Y(y)&=\frac{1}{n\sqrt[n]{y^{n-1}}}\pi_X(\sqrt[n]y)
\end{align*}
$$

#### $aX+b$
We assume $a\ne0.$
$$
\begin{align*}
F_Y(y)&=P\left( aX+b\leqslant y \right) \\
&=P\left( X\leqslant \frac{y-b}{a} \right) \\
&=F_X\left( \frac{y-b}{a} \right) \\
\pi_Y(y)&=\frac1{| a| }\pi_X\left( \frac{y-b}a \right) .
\end{align*}
$$
#### Strictly Monotonic Functions
Suppose that $f_X(x)=0,\ \forall x\notin I$ for some interval $I.$ Let $Y=g(X)$ be **strictly monotonic** and differentiable over $I,$ so it is either strictly incr easing or strictly decreasing over $I.$ If $g^{-1}$ is differentiable, then the PDF of $Y,$ where it is strictly positive, is given by $$\pi_Y(y)=\pi_X(g^{-1}(y))\left| \frac{dg^{-1}}{dy}(y)\right|.$$

## Functions of 2 Variables
The procedure is the same here:

```ad-example
title:Archery Example
collapse:closed

Let $X$ and $Y$ be independent uniform random variables taking values in the range $[0, 1]$ and let $Z=\max\{X, Y\}.$ Since $X$ and $Y$ range from 0 to 1, $z$ does also. Then $$P(X\leqslant z)=P(Y\leqslant z)=\frac{z-0}{1-0}=z.$$ Since they are independent, we have for all $z\in [0,1],$
$$
\begin{align*}
F_Z(z)&=P(\max\{X,Y\}\leqslant z)\\
&=P(X\leqslant z, Y\leqslant z)\\
&=P(X\leqslant z)P(Y\leqslant z)\\
&=z^2
\end{align*}
$$

Thus, $$f_Z(z)=\begin{cases}2z & 0\leqslant z\leqslant 1\\0 & \mbox{otherwise}\end{cases}$$
```
### Sum of Independent Random Variables
For independent random variables $X$ and $Y,$ let $Z=X+Y.$ We now consider 2 cases:
#### Sum of DRVs
If $X$ and $Y$ are both discrete and integer-valued, then for any integer $z$
$$
\begin{align*}
p_Z(z)&=P(X+Y=z)\\
&=\sum_{\{(x, y):x+y=z\}}P(X=x, Y=y)\\
&=\sum_xP(X=x, Y=z-x)\\
&=\sum_xp_X(x)p_Y(z-x)
\end{align*}
$$
This is called the **convolution** of the PMFs of $X$ and $Y.$
#### Sum of CRVs
We will first find the conditional joint PDF of $X$ and $Z,$ then integrate:
$$
\begin{align*}
P(Z\leqslant z\mid X=x)&=P(X+Y\leqslant z\mid X=x)\\
&=P(x+Y\leqslant z\mid X=x)\\
&=P(Y\leqslant z-x)
\end{align*}
$$
Then, by differentiating we have that $f_{Z\mid X}(z\mid x)=f_Y(z-x).$ Secondly, note that $$f_{X,Z}(x,z)=f_X(x)f_{Z\mid X}(z\mid x)=f_{X}(x)f_{Y}(z-x),$$so finally $$f_Z(z)=\int_{\mathbb{R}}f_{X,Z}(x,z)dx=\int_{\mathbb{R}}f_X(x)f_{Y}(z-x)dx.$$
```ad-summary
title:Example of 2 Uniform RVs
collapse:close

Suppose $X$ and $Y$ are uniform on $[-1, 0]$ and $[0, 1]$ respectively. What is $P(\mid X-Y\mid <\dfrac12)$?

Let $Z=Y+X.$ The integrand of the continuous convolution formula is non-zero only when $-1\leqslant x\leqslant 0$ and $0\leqslant z-x\leqslant 1,$ which is to say $z-1\leqslant x\leqslant z.$ Combining these together we get $\max(-1, z-1) \leqslant x\leqslant\min(0, z).$ $Z$ may only take values from -1 to 1, so we have 2 cases:

1. If $-1\leqslant z\leqslant 0,$ then $f_Z(z)=\min(0, z)-\max(-1, z-1)=z+1.$
2. If $0<z\leqslant 1$, then $f_Z(z)=0-z+1=1-z.$

Thus, $$f_Z(z)=\begin{cases}1+z & -1\leqslant z\leqslant 0\\1-z & 0<z\leqslant 1\\ 0 & \text{otherwise}\end{cases}.$$The problem then becomes
$$
\begin{align*}
P(\mid X-Y\mid <\frac12)&=P(-\frac12<Z<\frac12)\\
&=\int_{-\frac12}^{\frac12}f_Z(z)dz\\
&=\int_{-\frac12}^{0}f_Z(z)dz+\int_{0}^{\frac12}f_Z(z)dz\\
&=\int_{-\frac12}^01+zdz+\int_{0}^{\frac12}1-zdz\\
&=z+\frac{z^2}2\Big|_{-\frac12}^0+z-\frac{z^2}2\Big|_0^{\frac12}\\
&=\frac12-\frac18+\frac12-\frac18\\
&=1-\frac14\\
&=\frac34
\end{align*}
$$
```

##### Sum of Independent Normal Variables
Let $X$ and $Y$ be independent normal RVs with expected values $\mu_X, \mu_Y$ and variances $\sigma_X^2, \sigma_Y^2$ respectively, and let $Z=X+Y.$ Then, after tedious calculations, 
$$
\begin{align*}
f_Z(z)&=\int_{\mathbb{R}}\frac1{2\pi\sigma_X\sigma_Y}\exp\left(-\frac{(x-\mu_X)^2}{2\sigma_X^2}-\frac{(z-x-\mu_Y)^2}{2\sigma_Y^2}\right)dx\\
&=\frac1{\sqrt{2\pi(\sigma_X^2+\sigma_Y^2)}}\exp\left(-\frac{(z-\mu_X-\mu_Y)^2}{2(\sigma_X^2+\sigma_Y^2)}\right)
\end{align*}
$$
##### Difference of CRVs
In general, $f_{-Y}(y)=f_Y(-y),$ so $$f_{X-Y}(z)=\int_{\mathbb{R}}f_X(x)f_Y(x-z)dx$$