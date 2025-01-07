Tags: [[Stats]], [[Statistical-Methods]], [[Inferential-Statistics]], [[Bayesian-Inference]]

# Prior Distributions and Applications
The derivations for the properties of these distributions can be found in [[Probability-Theorems]].
## Normal Priors
### Conditionally Independent Normal Observations
Suppose we observe a family $\{X_i\}_{i=1}^{n}$ of random variables with an unknown common mean. Given a certain value of the common mean, suppose these are independent normal random variables with known variances $\{\sigma_i^2\}_{i=1}^{n}.$ Let $\Theta$ be a random variable for the common mean and assume a normal prior with known mean and variance $x_0$ and $\sigma^2_0$ respectively. Note that this is equivalent to a model where $$X_{i}=\Theta+W_i,\quad\forall i\leqslant n.$$
Here $\Theta$ and the $W_i$ are independent normal random variables with known means and variances. In this model, for any $\theta$ and $i,$ $$E[W_i]=E[W_i\mid \Theta=\theta]=0,\quad V[W_i]=V[X_i\mid \Theta=\theta]=\sigma_i^2.$$
Such a model is common in settings where multiple independent measurements of an unknown quantity are made.
$\quad$Returning to our original formulation, our assumptions may be stated as
$$
\begin{align*}
\pi(\theta)&=c_1\exp\left( -\frac{(\theta-x_0)^2}{2\sigma_n^2 } \right)\\
\pi(x\mid \theta)&=c_2\prod_{i=1}^n\exp\left( -\frac{(x_i-\theta)^{2}}{2\sigma_i^{2}} \right),
\end{align*}
$$
where $c_1$ and $c_2$ are normalising constants that are not dependent on $\theta$ and $x$ is a possible value for $X.$ This is enough to compute the posterior distribution: $$\pi(\theta\mid x)=\dfrac{\pi(\theta)\pi(x\mid \theta)}{\displaystyle\int\pi(\theta')\pi(x\mid \theta')d\theta'}.$$
The numerator term $\pi(\theta)\pi(x\mid\theta)$ is of the form $$c_1c_2\exp\left( -\sum_{i=0}^n\frac{(x_i-\theta)^{2}}{2\sigma_i^{2}} \right).$$
Some algebra reveals it is also of the form $$d\exp\left( -\frac{(\theta-m)^{2}}{2v} \right),$$
where $$m=\frac{\displaystyle\sum_{i=0}^nx_i\sigma_i^{-2}}{\displaystyle\sum_{i=0}^n\sigma_i^{-2}},\quad\quad v=\frac{1}{\displaystyle\sum_{i=0}^n\sigma_i^{-2}},$$
and $d$ is a constant dependent of $x_i$ but not on $\theta.$ Since the denominator also does not depend on $\theta,$ we may multiply the numerator by some normalising constant $a,$ dependent on $x_i$ but not on $\theta,$ which compensates for the denominator. Then, the posterior PDF is of the form $$\pi(\theta\mid x)=a\exp\left( -\frac{(\theta-m)^{2}}{2v} \right).$$
This is a normal PDF with mean $m$ and variance $v.$
$\quad$If the variances $\{\sigma_i^{2}\}_{i=0}^n$ have a common value $\sigma^2,$ then the mean and variance of the posterior PDF of $\Theta$ are $$m=\frac{\sum_{i=0}^nx_i}{n+1}=\frac{x_0+\ldots+x_{n}}{n+1},\quad\quad v=\frac{\sigma^{2}}{n+1}.$$
In this special case, $x_0$ acts as another observation and the standard deviation of the posterior PDF tends to $0$ as we make more observations at a rate of $1/\sqrt{ n }.$
$\quad$If the variances $\sigma_i^{2}$ differ, the posterior mean $m$ is a weighted average of the $x_i$ with larger weights put on observations with smaller variance. In either case the posterior of $\Theta$ is of the same family as the prior of $\Theta.$ Because of this, (a) the posterior can be characterised by only the mean and variance, and (b) by recursive inference, if we make a new observation $X_{n+1},$ we can solve for the form of the new posterior of $\Theta$ by using the old one: $$f_{\Theta\mid X,X_{n+1}}(\theta\mid x,x_{n+1})=b\exp\left( -\frac{(\theta-M)^{2}}{2V} \right),$$
where $b$ is a normalising constant and $$M=\frac{(m/v)+(x_{n+1}/\sigma_{n+1}^2)}{(1/v)+(1/\sigma_{n+1}^{2})},\quad\quad V=\frac{1}{(1/v)+(1/\sigma_{n+1}^{2})}.$$
The values $m$ and $v$ have the same interpretation as before.
## Beta Prior

> [!def] Beta Function
> $$B(\alpha, \beta)=\dfrac{\Gamma(\alpha)\Gamma(\beta)}{\Gamma(\alpha+\beta)}=\dfrac{(\alpha-1)!(\beta-1)!}{(\alpha+\beta-1)!}.$$

The second equally follows if $\alpha$ and $\beta$ are positive integers. One can prove that $$B(\alpha, \beta)=\int_0^1 x^{\alpha-1}(1-x)^{\beta-1}dx.$$
Suppose we wish to estimate the probability $\Theta$ of success.
> [!def] Beta Prior
> A **beta prior** for $\Theta$ is given by $$\pi(\theta)=\begin{cases}
> \dfrac{c_0}{B(\alpha, \beta)}\theta^{\alpha-1}(1-\theta)^{\beta-1} & 0<\theta<1, \\
> 0 & \text{otherwise},
> \end{cases}$$
> where $\alpha$ and $\beta$ are real numbers independent of $\theta$ and $c_0>0$ is a normalising constant also independent of $\theta.$

Assume that $\alpha>0$ and $\beta>0$ are natural numbers, that we make $n$ independent observations, and let $X$ be the number of successes. Then, the posterior of $\Theta,$ for $\theta\in[0,1],$ is of the form
$$
\begin{align*}
\pi(\theta\mid x)&=\frac{B(\alpha, \beta)}{{n\choose x}c}\pi(\theta)\pi(x\mid \theta),\\
&=\frac{1}{c}\theta^{x}(1-\theta)^{n-x}\pi(\theta),\\
&=\frac{1}{B(x+\alpha,n-x+\beta)}{n\choose x}\theta^{x+\alpha-1}(1-\theta)^{n-x+\beta-1}.
\end{align*}
$$
Otherwise it is $0.$ Here $c$ is the integral from $0$ to $1$ of $\theta^{x+\alpha-1}(1-\theta)^{n-x+\beta-1}$ w.r.t. $\theta.$ Clearly this is beta PDF with parameters $$a=x+\alpha,\quad\quad b=n-x+\beta.$$
```ad-note
title:Derivation
collapse:closed

The computation for the numerator is trivial. For the denominator we have $$\frac{1}{B(\alpha, \beta)}{n\choose x}\int_{0}^{1} t^{x+\alpha-1}(1-t)^{n-x+\beta-1} dt.$$
The constants on the left cancel with the constants of the numerator, so it is only left to evaluate this integral. Let $a=x+\alpha$ and $b=n-x+\beta.$ We proceed by IBP. Note,
$$
\begin{align*}
D(m, t)&=\frac{(b-1)!}{(b-1-m)!}(1-t)^{b-1-m}\\
I(m, t)&=\frac{(a-1)!}{(a-1+m)!}t^{a-1+m}.
\end{align*}
$$
The first is the $m$-th derivative of $(1-t)^{b-1}$ w.r.t. $t$ and the second is the $m$-th repeated integral of $t^{a-1}$ w.r.t. $t.$ Let $$F(t)=\sum_{m=0}^{b-1}D(m, t)I(m+1, t).$$
Performing repeated IBP leaves us with $F(t)$ evaluated from $0$ to $1,$ that is, $F(1)-F(0)$ is the value of our integral. $F(0)=0$ for $a-1+m$ is always strictly greater than $0$ when $0\leqslant m\leqslant b-1,$ so $0$ raised to that power is unambiguously $0,$ implying each term of the sum $F(0)$ is $0;$ due to that, let us focus only on $F(1):$ $$F(1)=\frac{(b-1)!(a-1)!}{(b-1-b+1)!(a+b-1)!}0^0+\sum_{m=0}^{b-2}D(m, 1)I(m+1, 1).$$
The left term is nothing but $B(a, b)$ (I take it that $0^0=1$); the second term expands to $$\sum_{m=0}^{b-2}\frac{(b-1)!(a-1)!}{(b-1+m)!(a+m)!}0^{b-1-m} .$$
Here $m$ is at most $b-2.$ Then, $$1=b-1-b+2\leqslant b-1-m,\quad\forall 0\leqslant m\leqslant b-2.$$
Thus, $0^{b-1-m}$ is unambiguously $0$ and this second term is nothing but $0.$ Hence, $$F(1)=B(a, b)=B(x+\alpha, n-x+\beta).$$
Therefore, $$\pi(\theta\mid x)=\frac{1}{F(1)}\pi(\theta)\pi(x\mid \theta)=\frac{1}{B(x+\alpha, n-x+\beta)}\theta^{x+\alpha-1}(1-\theta)^{n-x+\beta-1} ,\quad\forall \theta\in[0,1],$$
which is nothing but a beta distribution with parameters $a$ and $b.$
```

Beta PDFs appear in many inference problems and have many interesting properties. The $m$-th moment of $\Theta,$ for instance, is given by
$$
\begin{align*}
E[\Theta^m]&=\frac{1}{B(\alpha, \beta)}\int_{0}^{1} \theta^{m+\alpha-1}(1-\theta)^{\beta-1} d\theta\\
&=\frac{B(\alpha+m, \beta)}{B(\alpha, \beta)}\\
&=\frac{\Gamma(\alpha+m)/\Gamma(\alpha)}{\Gamma(\alpha+\beta+m)/\Gamma(\alpha+\beta)}\\
&=\frac{\Gamma(\alpha+m)\Gamma(\alpha+\beta)}{\Gamma(\alpha+\beta+m)\Gamma(\alpha)}\\
&=\frac{(\alpha+m-1)!(\alpha+\beta-1)!}{(\alpha+\beta+m-1)!(\alpha-1)!} && \mbox{if }\alpha,\beta>0\mbox{ are natural numbers,}\\
&=\frac{\alpha(\alpha+1)\cdots(\alpha+m-1)}{(\alpha+\beta)(\alpha+\beta+1)\cdots(\alpha+\beta+m-1)}.
\end{align*}
$$
Thus, $$E[\Theta]=\frac{\alpha}{\alpha+\beta},\quad\quad V[\Theta]=\frac{\alpha\beta}{(\alpha+\beta)^{2}(\alpha+\beta+1)}.$$

# Code-Implementation 