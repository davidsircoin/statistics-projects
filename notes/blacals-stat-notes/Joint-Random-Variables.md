Tags: [[Stats]], [[Probability-Theory]]

# Joint Random Variables
Suppose $X$ and $Y$ are random variables associated with the same experiment (e.g. if I pick people randomly and uniformly from a population, $X$ is their height and $Y$ is the sum of the digits on their birth year). A **joint probability law** will be a function from $\Omega$ to $\mathbb{R}$ which captures the probability of $X$ taking on a certain value and $Y$ taking on a certain value *simultaneously.*

> [!def]+ Association with an Experiment
> Multiple random variables are associated with the same experiment only when they have the same domain—the same sample space.

## Joint CDF
If $X$ and $Y$ are similarly associated random variables, their **joint CDF** is defined by $$F_{X,Y}(x,y)=P(X\leqslant  x,Y\leqslant y).$$
This applies to *any* pair of random variables. When context allows, we omit the subscript and simply write $F(x, y)$ for $F_{X, Y}(x, y).$

> [!def]+ Conditional CDF
> If $X$ and $Y$ are similarly associated random variables and $A$ is a possible event, the **conditional CDF** of $X$ given $A,$ of $X$ and $Y$ given $A,$ and of $X$ given $Y=y$ are defined as
> $$
> \begin{align*}
> F_{X\mid A}(x)&=P(X\leqslant x\mid A)\\
> F_{X,Y\mid A}(x, y)&=P(X\leqslant x, Y\leqslant y\mid A)\\
> F_{X\mid Y}(x\mid y)&=P(X\leqslant x\mid Y=y).
> \end{align*}
> $$
> When it is clear, we write $F(x\mid A)$ of $F_X(x\mid A)$ for $F_{X\mid A}(x),$ $F(x,y\mid A)$ or $F_{X,Y}(x,y\mid A)$ for $F_{X,Y\mid A}(x,y),$ and either $F(x\mid y), F_X(x\mid y),$ or $F_X(x\mid Y=y)$ for $F_{X\mid Y}(x\mid y).$

# Covariance and Correlation

> [!def]+ Definition
> The **covariance** of two random variables $X$ and $Y,$ denoted as $\operatorname{cov}(X, Y),$ is defined as $$\operatorname{cov}(X, Y)=E[(X-E[X])(Y-E[Y])].$$

If $\operatorname{cov}(X, Y)=0,$ we say they are **uncorrelated.** If it is negative, then the values of $X-E[X]$ 'tend' to have the opposite sign as those of $Y-E[Y],$ and positive if they 'tend' to have the same sign. Alternatively we can define it as $$\operatorname{cov}(X, Y)=E[XY]-E[X]E[Y],$$
which allows us to see that independence implies 0 covariance, though the converse is not generally true.

```ad-example
title:Counter-Example for the Converse
collapse:closed

Suppose the pair of random variables $(X, Y)$ takes the values $(1, 0), (0, 1), (-1, 0), (0, -1)$ with equal likelihood. Their marginals are symmetric around 0 and $E[X]=E[Y]=0.$ Since for each pair $(x, y)$ one component is a 0, $XY=0$ and $E[XY]=0,$ so they are uncorrelated. However, if $X$ is non-zero, then we know $Y$ must be 0, so they are not independent.
$\quad$In general, if $X$ and $Y$ are DRVs that satisfy $$E[X\mid Y=y]=E[X],\quad\forall y,$$then by the total expectation theorem we have that $$E[XY]=\sum_yyp_Y(y)E[X\mid Y=y]=E[X]\sum_yyp_Y(y)=E[X]E[Y].$$Thus, $X$ and $Y$ are uncorrelated. The case is similar if they are continuous. Thus, any pair of dependent random variables which meet this condition serve as a counter-model.
```

**Properties.** If $a$ and $b$ are fixed scalars and $Z$ is a random variable, then
$$
\begin{align*}
\operatorname{cov}(X, X)&=V[X]\\
\operatorname{cov}(X, Y)&=\operatorname{cov}(Y, X)\\
\operatorname{cov}(X, aY+b)&=a\cdot\operatorname{cov}(X, Y)\\
\operatorname{cov}(X, Y+Z)&=\operatorname{cov}(X, Y)+\operatorname{cov}(X, Z)
\end{align*}
$$

> [!thm] Variance of the Sum of Random Variables
> Let $\{X_i\}_{i=1}^n$ be a family of random variables. If they are all independent, then the variance of the sum is simply the sum of their variance, but in general we have that $$V\left[\sum_{i=1}^nX_i\right]=\sum_{i=1}^nV[X_i]+\sum_{\{(i, j):i\ne j\}}\operatorname{cov}(X_i, X_j).$$

```ad-note
title:Derivation
collapse:close

Let $\widetilde{X}_i=X_i-E[X_i].$ Then
$$
\begin{align*}
V\left[\sum_{i=1}^nX_i\right]&=E\left[\left(\sum_{i=1}^n\widetilde{X}_i\right)^2\right]\\
&=E\left[\sum_{i=1}^n\sum_{j=1}^n\widetilde{X}_i\widetilde{X}_j\right]\\
&=\sum_{i=1}^nE[\widetilde{X}_i^2]+\sum_{\{(i, j):i\ne j\}}E[\widetilde{X}_i\widetilde{X}_j]\\
&=\sum_{i=1}^nV[X_i]+\sum_{\{(i, j):i\ne j\}}\operatorname{cov}(X_i, X_j)
\end{align*}
$$
```

> [!def]+ Correlation Coefficient
> Let $X$ and $Y$ be random variables with non-zero variance. Their **correlation coefficient** is defined as $$\rho(X, Y)=\frac{\operatorname{cov}(X, Y)}{\sqrt{V[X]V[Y]}}.$$

If $\rho>0,$ then the values of $X-E[X]$ and $Y-E[Y]$ will 'tend' to be the similar, and if it is strictly negative they will 'tend' to differ. The size $\mid \rho\mid ,$ which ranges from 0 to 1, quantifies the extent to which they 'tend' to differ or be similar.

> [!thm]
> Suppose $X$ and $Y$ are random variables with non-zero variance.
> - $\rho\in[-1, 1]$
> - If they both have positive variance, then
> $$
> \begin{align*}
> \rho=1&\text{ iff }\exists c>0.\ Y-E[Y]=c(X-E[X])\\
> \rho=-1&\text{ iff }\exists c<0.\ Y-E[Y]=c(X-E[X]).
> \end{align*}
> $$

If $\sigma_X^{2}=V[X],\sigma_Y^{2}=V[Y],$ by expanding the definition of $\operatorname{cov}(X,Y)$ we may rephrase $\rho$ as $$\rho=E\left[ \left( \dfrac{X-\mu_X}{\sigma_X} \right) \left( \dfrac{Y-\mu_Y}{\sigma_Y} \right)  \right] .$$

It is the average product of their standardised values, or, by interpreting standardised values, the average product of the number of standard deviations each variable is away from the mean.

# Conditional Expectation and Variance
## Expectation

For some random variables $X$ and $Y,$ we introduce a function $E[X\mid Y]$ of $Y$ which takes on the value $E[X\mid Y=y]$ when $Y=y.$ Since it is a random variable, its expectation is given by $$E[E[X\mid Y]]=\begin{cases}\displaystyle\sum_yE[X\mid Y=y]p_Y(y), & Y\text{ is discrete}\\\displaystyle\int_{\mathbb{R}}E[X\mid Y=y]f_Y(y)dy, & Y\text{ is continuous}\end{cases}$$

> [!thm]+ Law of Iterated Expectations
> By the respective theorems on conditional expectation in both of these cases, for any random variable $Y,$ so long as $E[X]$ is well-defined and finite, we have $$E[E[X\mid Y]]=E[X].$$

If $Z=g(Y)$ is a function of $Y,$ then $$E[XZ\mid Y]=ZE[X\mid Y].$$
We adopt the following notation: $$\widehat{X}=E[X\mid Y],\quad\quad \widetilde{X}=\widehat{X}-X.$$
## Variance

> [!thm] Conditional Variance Definition
> We define the **conditional variance** as a random variable which is function of $Y:$ $$V[X\mid Y]=E[(X-E[X\mid Y])^2\mid Y]=E[\widetilde X^2\mid Y],$$which takes the value $V[X\mid Y=y]=E[\widetilde X^2\mid Y=y]$ when $Y=y.$

Since $E[\widetilde X]=0,$ $$V[\widetilde X]=E\left[ (\widetilde X-E[\widetilde X])^2 \right] =E\left[ \widetilde X^2 \right] =E\left[ E\left[ \widetilde{X}^2\mid Y \right]  \right] =E[V[X\mid Y]].$$
This yields

> [!thm]+ Law of Total Variance
> $$V[X]=E[V[X\mid Y]]+V[E[X\mid Y]]$$

This allows us to condition variables and calculate the variance in that way, which is at times useful.
# Transforms
## Moment Generating Functions

> [!def] Moment Generating Function (MGF)
> The **moment generating function** (MGF) of a random variable $X$ is a function $$M_X(s)=E[e^{sX}],$$where $s$ is a scalar.

If it is clear which random variable we are referring to, we simply write $M(s).$ If $X$ is discrete or continuous, then, we have
$$
\begin{align*}
M(s)&=\sum_xe^{sx}\pi_X(x)&&\mbox{if $X$ is discrete,}\\
M(s)&=\int_{\mathbb{R}}e^{sx}\pi_X(x)dx&&\mbox{if $X$ is continuous.}
\end{align*}
$$
In one equation, $$M_X(s)=\int_{\mathbb{R}}e^{sx}dF_X.$$
They get their name since we can calculate the moments of a random variable by looking at the $n$-th derivative at 0 w.r.t. $s,$ for example
$$
\begin{align*}
\frac{d}{ds}M(s)&=\frac{d}{ds}\int_{\mathbb{R}}e^{sx}dF_X\\
&=\int_{\mathbb{R}}\frac{d}{ds}e^{sx}dF_X&&\mbox{Assuming we can interchange them}\\
&=\int_{\mathbb{R}}xe^{sx}dF_X\\
&=E[X]&&\mbox{If }s=0.
\end{align*}
$$
More generally,

> [!thm] *MGF-to-Moments*
> $$M_X^{(n)}(0)=\int_{\mathbb{R}}x^nf_X(x)dx=E[X^n].$$

Lastly, note that
$$
\begin{align*}
M_X(0)=E[e^{0X}]=E[1]=1,\\
\lim_{s\to-\infty}M_X(s)=P(X=0).
\end{align*}
$$
We may also use an MGF to find the probability law of a random variable.

> [!thm] *Unique Determination*
> Suppose $M_X(s)$ is finite in a neighbourhood $V$ of $0.$
> 
> 1. This uniquely determines the CDF, and therefore the distribution, of $X.$ That is, if $M_X=M_Y$ on $V,$ $F_Y=F_X.$
> 2. $M_X$ is smooth on $V$ with Taylor expansion $$M_X(s)=\sum_{n=0}^{\infty} \dfrac{s^nE[X^n]}{n!}.$$

If $X$ were discrete, and its transform is given by $$M_X(s)=\sum_{i}d_i\exp(sc_i),$$
where $\{d_i\}_{i\in I}$ and $\{c_i\}_{i\in I}$ are families of constants, then $$p_X(c_i)=\begin{cases}d_i & i\in I\\0 & \text{otherewise}\end{cases}$$
For a continuous $X,$ there are explicit formulas but in practice we typically pattern-match $M_X(s)$ to the transform of a known distribution.

> [!rmk] Deriving Mixed Distributions
> Let $\{X_i\}_{i=1}^n$ be a family of random variables with a respective CDF $F_{X_i}.$ Suppose $Y$ is a random variable which takes the value $X_i$ with probability $p_i.$ Then
> $$
> \begin{align*}
> F_Y(y)&=\sum_{i=1}^np_iF_{X_i}(y),\\
> M_Y(s)&=\sum_{i=1}^np_iM_{X_i}(s).
> \end{align*}
> $$
> 
> Given a sum of transforms, then, we may derive the CDF of $Y$ as a sum of CDFs with coefficients, afterwhich we may derive the PDF or PMF of $Y.$

Transforms can at times help with finding the distribution of a sum of independent random variables. If $Z=\displaystyle\sum_{i=1}^{n}X_i,$ then $$M_Z(s)=\prod_{i=1}^{n}M_{X_i}(s).$$
This is particularly helpful when dealing with a random sum of IID random variables. Suppose $$Y=\sum_{i=1}^NX_i,$$
where $N$ is a random variable that takes natural values and $\{X_i\}_{i=1}^N$ is a family of [[Probability-Theory#Definitions and General Concepts|IID]] random variables independent of $N.$ Let $\mu$ and $\sigma^{2}$ be the common mean and variance respectively. Then,
$$
\begin{align*}
E[Y]&=E[N]\mu\\
V[Y]&=E[N]\sigma^{2}+\mu^2V[N]\\
M_Y(s)&=M_N(\ln M_X(s))=\sum_{n=0}^\infty p_N(n)M_X(s)^n
\end{align*}
$$

```ad-note
title:Derivation
collapse:close

If we fix $N,$ we may calculate the conditional mean, variance, and MGF of $Y.$ Let $n$ be a natural number. Then
$$
\begin{align*}
E[Y\mid N=n]&=E\left[\sum_{i=1}^NX_i\mid N=n\right]\\
&=E\left[\sum_{i=1}^nX_i\mid N=n\right]\\
&=E\left[\sum_{i=1}^nX_i\right]\\
&=\sum_{i=1}^nE[X_i]\\
&=\sum_{i=1}^nE[X]\\
&=nE[X].
\end{align*}
$$
Using the law of iterated expectations, we have that $$E[Y]=E[E[Y\mid N]]=E[NE[X]]=E[N]E[X].$$Similarly,
$$
\begin{align*}
V[Y\mid N=n]&=V\left[\sum_{i=1}^NX_i\mid N=n\right]\\
&=V\left[\sum_{i=1}^nX_i\right]\\
&=nV[X].
\end{align*}
$$
Thus, $V[Y\mid N]=NV[X].$ Using the law of total variance, then
$$
\begin{align*}
V[Y]&=E[V[Y\mid N]]+V[E[Y\mid N]]\\
&=E[NV[X]]+V[NE[X]]\\
&=E[N]V[X]+E[X]^2V[N]
\end{align*}
$$
It is easy to see that $$M_{Y\mid N}(s\mid n)=E[e^{sY}\mid N=n]=\prod_{i=1}^nM_X(s)=M_X(s)^n.$$Thus, $$M_Y(s)=E[e^{sY}]=E[E[e^{sY}\mid N]]=E[M_X(s)^N]=\sum_{n=0}^\infty M_X(s)^np_N(n).$$
Noting that $M_X(s)^n=\exp(n\ln M_X(s)),$ we obtain $$M_Y(s)=\sum_{n=0}^\infty p_N(n)\exp(n\ln M_X(s)).$$
Comparing this to $$M_N(s)=E[e^{sN}]=\sum_{n=0}^\infty e^{sn}p_N(n),$$we see that $$M_Y(s)=M_N(\ln M_X(s)).$$ Alternatively, we may replace each $e^s$ in $M_N(s)$ with $M_X(s).$
```

### Joint MGFs
Let $\mathbf{X}=(X_1,\ldots, X_n)$ be a vector of random variables and let $\mathbf{s}=(s_1,\ldots, s_n)$ be a vector of scalars. The associated **multivariate MGF** is a function of $\mathbf{s}$ defined by $$M_{\mathbf{X}}(\mathbf{s})=E\left[\exp(\mathbf{s}\cdot\mathbf{X})\right].$$

> [!thm] *Multivariate Determination*
> If $\mathbf{Y}=(Y_1,\ldots, Y_n)$ is another vector of random variables and $M_{\mathbf{X}}=M_{\mathbf{Y}}$ on a neighbourhood of the origin, then $F_{\mathbf{X}}=F_{\mathbf{Y}}.$
### Particular Cases
#### Linear MGF
Let $Y=aX+b.$ Then, $$M_Y(s)=E[e^{s(aX+b)}]=e^{sb}E[e^{saX}]=e^{sb}M_X(sa).$$
#### Convolution MGF
If $Z=\displaystyle\sum_{i=1}^nX_i$ is the sum of independent random variables, then $$M_Z(s)=\prod_{i=1}^nM_{X_i}(s),\quad\forall s.$$
#### Discrete-Uniform MGF
If $X$ is a discrete uniform random variable, then $$M_X(s)=\frac{e^{sa}(e^{s(b-a+1)}-1)}{(b-a+1)(e^s-1)}.$$
#### Continuous-Uniform MGF
If $X$ is a continuous uniform random variable, then $$M_X(s)=\frac{e^s(e^b-e^a)}{s(b-a)}.$$
#### Binomial MGF
Let $Z=\displaystyle\sum_{i=1}^nX_i$ be the sum of independent Bernoulli random variables with parameter $p.$ Then $$M_{X_i}(s)=(1-p)e^{0s}+pe^{1s}=1-p+pe^s,\quad\forall i,$$
and $$M_Z(s)=\prod_{i=1}^nM_{X_i}(s)=\prod_{i=1}^n1-p+pe^s=(1-p+pe^s)^n.$$
#### Geometric MGF
If $X$ is a geometric random variable, then $$M_X(s)=\frac{pe^s}{1-(1-p)e^s}.$$
#### Poisson MGF
Let $X$ be a Poisson random variable; $p_X(x)=\dfrac{\lambda^x e^{-\lambda}}{x!}.$ Then $$M(s)=\sum_{x=0}^\infty e^{sx}\frac{\lambda^xe^{-\lambda}}{x!}.$$If we let $a=e^s\lambda,$ we get that $$M(s)=e^{-\lambda}\sum_{x=0}^\infty\frac{a^x}{x!}=e^{-\lambda}e^a=e^{a-\lambda}=\exp({\lambda(e^s-1)}).$$

#### Sum of Independent Poissons MGF
Suppose $Y=\displaystyle\sum_{i=1}^nX_i$ is a sum of independent Poisson random variables with means $\mu_i.$ Then, $$M_Y(s)=\prod_{i=1}^nM_{X_i}(s)=\prod_{i=1}^n\exp(\mu_i(e^s-1))=\exp((e^s-1)\sum_{i=1}^n\mu_i).$$
Thus, $M_Y(s)$ is the transform associated with a Poisson random variable with mean $\displaystyle\sum_{i=1}^n\mu_i,$ so $Y$ is a Poisson random variable since transforms uniquely determine CDFs.
#### Normal MGF
Let $X\sim\mathcal{N}(\mu, \sigma^2).$ First consider the MGF transform of a standard normal random variable $Y:$ $f_Y(y)=\dfrac1{\sqrt{2\pi}}\exp\left(-\dfrac{y^2}{2}\right),$ so
$$
\begin{align*}
M_Y(s)&=\int_{\mathbb{R}}\frac1{\sqrt{2\pi}}\exp\left(-\frac{y^2}2\right)\exp(sy)dy\\
&=\frac1{\sqrt{2\pi}}\int_{\mathbb{R}}\exp\left(sy-\frac{y^2}2\right)dy\\
&=\frac1{\sqrt{2\pi}}\exp\left(\frac{s^2}2\right)\int_{\mathbb{R}}\exp\left(sy-\frac{y^2}2-\frac{s^2}2\right)dy\\
&=\frac1{\sqrt{2\pi}}\exp\left(\frac{s^2}2\right)\int_{\mathbb{R}}\exp\left(-\frac{(y-s)^2}2\right)dy\\
&=\exp\left(\frac{s^2}2\right)&&\mbox{By the normalisation of $\mathcal{N}(s, 1)$}
\end{align*}
$$
Then, since $X=\sigma Y+\mu,$ we have that $$M_X(s)=e^{s\mu}M_Y(s\sigma)=\exp\left(\frac{\sigma^2s^2}2+s\mu\right).$$
#### Sum of Independent Normals MGF
Suppose $W=\displaystyle\sum_{i=1}^nX_i$ is a sum of independent normal random variables with means $\mu_i$ and variances $\sigma_i^2.$ Then $$M_{W}(s)=\prod_{i=1}^nM_{X_i}(s)=\prod_{i=1}^n\exp\left(\frac{s^2\sigma_i^2}2+s\mu_i\right)=\exp\left(\frac{s^2}2\sum_{i=1}^n\sigma_i^2+s\sum_{i=1}^n\mu_i\right).$$
#### Exponential MGF
Let $X$ be an exponential random variable, so $f_X(x)=\lambda e^{-\lambda x}$ for each $x\geq 0.$ Then,
$$
\begin{align*}
M(s)&=\lambda\int_0^{\infty}e^{sx}e^{-\lambda x}dx\\
&=\lambda\int_0^{\infty}e^{(s-\lambda)x}dx\\
&=\lambda\frac{e^{(s-\lambda)x}}{s-\lambda}\Big| _{0}^\infty&&\mbox{If }s<\lambda\\
&=\frac{\lambda}{\lambda-s}
\end{align*}
$$
#### Geometric Sum of Independent Exponentials MGF
Suppose $\{X_i\}_{i=1}^\infty$ is a family of IID exponential random variables and that $N$ follows a geometric distribution. If we let $Y$ be the sum of $N$ many $X_i,$ we have that
$$
\begin{align*}
E[Y]&=E[N]E[X]=\frac1{p\lambda},\\
V[Y]&=E[N]V[X]+E[X]^2V[N]=\frac1{\lambda^2}\left(\frac1{p}+\frac{1-p}{p^2}\right)=\frac1{\lambda^2p^2}.
\end{align*}
$$
Since $$M_X(s)=\frac{\lambda}{\lambda-s},\quad M_N(s)=\frac{pe^s}{1-(1-p)e^s},$$then
$$
\begin{align*}
M_Y(s)&=\frac{pM_X(s)}{1-(1-p)M_X(s)}\\
&=\frac{\dfrac{p\lambda}{\lambda-s}}{1-(1-p)\dfrac{\lambda}{\lambda-s}}\\
&=\frac{p\lambda}{p\lambda-s}.
\end{align*}
$$
Therefore, recognising that this is the MGF of an exponential random variable with parameter $p\lambda,$ $$f_Y(y)=p\lambda e^{-p\lambda y},\quad\forall y\geq 0.$$
#### Geometric Sum of Independent Geometrics MGF
Similarly as before, we have that $$M_N(s)=\frac{pe^s}{1-(1-p)e^s},\quad M_X(s)=\frac{qe^s}{1-(1-p)e^s},$$
so $$M_Y(s)=\frac{pM_X(s)}{1-(1-p)M_X(s)}=\frac{pqe^s}{1-(1-pq)e^s}.$$Thus, $Y$ is geometrically distributed with parameter $pq.$
#### Binomial Sum of Bernoullis MGF
Suppose $\{X_i\}_{i=1}^\infty$ is a family of IID Bernoulli random variables with parameter $p$ and $N$ is a Binomial random variable with parameters $m$ and $q$ independent from that family that takes non-negative values. Let $Y$ be the sum of $N$ many $X_i.$ Then,
$$
\begin{align*}
E[Y]&=E[N]E[X]=mqp\\
V[Y]&=E[N]V[X]+E[X]^2V[N]\\
&=mqp(1-p)+p^{2}mq(1-q)\\
&=mqp(1-p+p(1-q))\\
&=mqp(1-pq)
\end{align*}
$$
Since we know the MGFs of $N$ and each $X_i,$ 
$$
\begin{align*}
M_Y(s)&=(1-q+qM_X(s))^m\\
&=(1-q+q(1-p+pe^s))^m\\
&=(1-pq+pqe^s)^m.
\end{align*}
$$
We note, then, that this is the MGF of a Binomial PMF with parameters $m$ and $pq.$
#### Poisson Sum of Bernoullis MGF
Same as before but $N$ is now a Poisson random variable with parameter $\lambda.$ Then,
$$
\begin{align*}
E[Y]&=E[X]E[N]=p\lambda,\\
V[Y]&=E[N]V[X]+E[X]^2V[N]\\
&=\lambda p(1-p)+p^2\lambda=\lambda p(1-p+p)=\lambda p.
\end{align*}
$$
And,
$$
\begin{align*}
M_Y(s)&=\exp(\lambda(M_X(s)-1)),\\
&=\exp(\lambda(1-p+pe^s-1)),\\
&=\exp(\lambda p(e^s-1));
\end{align*}
$$
this we recognise as the MGF of a Poisson random variable with parameter $\lambda p.$

# Random Vectors

> [!def] Random Vector
> Finite tuples of random variables.

Some concepts from real-valued random variables, specifically joint distributions, have obvious generalisations.

> [!def] Expected Value of a Vector
> If $X=(X_1,\ldots,X_n)^T,$ $\pi(\vec x)$ is the joint distribution of the components and $$E[X]=(E[X_1],\ldots,E[X_n])^T.$$

Less obvious is how to generalise the variance. There are many notions of multiplication for vectors to allow us to interpret $E[(X-E[X])^2].$ One is the inner product but this loses too much detail about the individual variances of each component. A vector of all their variances might work well enough. However there is a more informative notion of variance.

> [!def] Covariance Matrix
> If $X=(X_1,\ldots,X_n)^T,$ $V[X]$ is the matrix $\Sigma,$ called the **covariance matrix,** with entries $\Sigma_{i,j}=\operatorname{cov}(X_i,X_j):$
> $$
> \Sigma=\begin{bmatrix}
> V[X_1] & \operatorname{cov} (X_1,X_2) & \operatorname{cov} (X_1,X_3) & \ldots & \operatorname{cov} (X_1,X_n) \\
> \operatorname{cov} (X_2,X_1) & V[X_2] & \operatorname{cov} (X_2,X_3) & \ldots & \operatorname{cov} (X_2,X_n) \\
> \operatorname{cov} (X_3,X_1) & \operatorname{cov} (X_3,X_2) & V[X_3] & \ldots & \operatorname{cov} (X_3,X_n) \\
> \vdots & \vdots & \vdots & \ddots & \vdots \\
> \operatorname{cov} (X_n,X_1) & \operatorname{cov} (X_n,X_2) & \operatorname{cov} (X_n,X_3) & \ldots & V[X_n]
> \end{bmatrix}
> .$$

Often we divide by the variance of a variable to standardise it or see that multiplying a variable by a number changes the mean and variance. Matrices have a notion of inverses, though it is more restrictive than taking reciprocals, and vectors do not. Because the covariance is commutative, $V[X]$ is a symmetric matrix and these often have nice properties.

> [!thm] *Linear Transformations*
> Let $X$ be a random vector with mean $\mu$ and covariance matrix $\Sigma.$
> 1. If $a\in\mathbb{R}^n,$ $E[a\cdot X]=a\cdot E[X]=a\cdot \mu$ and $V[a\cdot X]=a\cdot V[X] a=a^TV[X]a=a\cdot\Sigma a.$
> 2. If $A$ is an $m\times n$ matrix, $E[AX]=AE[X]=A\mu$ and $V[AX]=AV[X]A^T=A\Sigma A^T.$

> [!thm] Theorem (***Densities of Functions of Random Vectors***)
> If $g$ is an invertible $C^1$ function on an open set $E\subseteq\mathbb{R}^{n}$ into $\mathbb{R}^{n},$ $\operatorname{ran}X\subseteq E,$ and $Y=g(X),$ then the following is a density of $Y:$ $$\pi_Y=|\det((g^{-1})')|(\pi_X\circ g^{-1}).$$
In particular, if $g=A$ is a linear transformation, then $$\pi_Y=\dfrac{1}{|\det A|}(\pi_X\circ A^{-1}).$$

```ad-note
title:Derivation
collapse:closed

Let $B\subseteq E.$ For any measurable $f:\mathbb{R}^n\to\mathbb{R}$ we have that $$\int_{\bar{g}(B)} f d\mu=\int_{B} (f\circ g)|\det g'| d\mu.$$
See Rudin (1987), 7.26. Now, if $f=\pi_X$ and we replace $g$ by $g^{-1},$ $$\int_{B}  dP_Y=\int_{\breve g(B)} \pi_X d\mu=\int_{B} (\pi_{X}\circ g^{-1})|\det((g^{-1})')| d\mu.$$
If additionally $g=A,$ then $g'(\vec x)=g$ and $$\int_{B}  dP_Y=\int_{B} \dfrac{1}{|\det A|}(\pi_X\circ A^{-1}) d\mu.$$
```


