Tags: [[Stats]], [[Probability-Theory]]

THINGS TO ADD:
- 2-D uniform PDF, page 169-70
- Circular uniform PDF, page 180 (170 on top left)
# Distributions and Properties
At the bottom of the description of each distribution is what you place in the python template (next section) to get that distribution into python.
## Discrete
### Bernoulli
- def. A random variable is **Bernoulli**, $X\sim \mathcal{B}(p)$ iff the determining experiment is a **Bernoulli experiment**, one with only 2 outcomes, with a probability of success $p$ and of failure $1-p$, and with only 1 trial
- $S=\{0, 1\}$
- **PMF**. If $x\in\Omega$, then $P(X=x)=\begin{cases}p & x=1\\1-p & x=0\end{cases}$
	- or, $P(X=x)=p^x(1-p)^{1-x}$, otherwise $0$
- $E[X]=p$
- $V[X]=p(1-p)$
- **CDF**, $P(X\leq x)=\begin{cases}1 & 1\leq x\\1-p & 0\leq x <1\\0 & x<0\end{cases}$
- $\breve{X}=\begin{cases}0 & p<0.5\\ [0, 1] & p=0.5\\1 & p> 0.5\end{cases}$
- [Code](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.bernoulli.html#scipy.stats.bernoulli):
```Python
p = 'prob of success'

LOW = 0.01
HIGH = 1

X = sp.stats.bernoulli(p)
```
### Binomial
- def. A random variable is a **Binomial random variable**, $X\sim \mathcal{B}in(n, p)$, iff it is the sum of $n$ independent and equally distributed Bernoulli random variable, i.e. the trials are independent Bernoulli trials in which the parameter $p$ does not change between trials and the random variable counts the number of successes
	- More concisely, if $\{X_i\}_{i=1}^n$ is a family of Bernoulli random variables and $Y=\sum_{i=1}^nX_i$, then $Y\sim\mathcal{B}in(n, p)$
- $\Omega=\{0, 1,\ldots, n\}$
- **PMF**. If $x\in\Omega$, then $P(X=x)=\displaystyle{n \choose x}p^x(1-p)^{n-x}$, otherwise $0$
- $E[Y]=np$
```ad-note
title:Derivation
collapse:close

$E(Y)=E(\displaystyle\sum_{i=1}^nX_i)=\sum_{i=1}^nE(X_i)=\sum_{i=1}^np=np$

The additivity of $E$ relies on trial-independence
```
- $V[Y]=np(1-p)$
```ad-note
title:Derivation
collapse:close

$V(Y)=\displaystyle V(\sum_{i=1}^nX_i)=\sum_{i=1}^nV(X_i)=\sum_{i=1}^np(1-p)=np(1-p)$
```
- **CDF**, $P(Y\leq y)=\displaystyle\sum_{i=0}^y{n\choose i}p^i(1-p)^{n-i}$
```ad-note
title:Derivation
collapse:close

$P(Y\leq y)=\displaystyle\sum_{i=0}^yP(Y=i)=\sum_{i=0}^y{n\choose i}p^i(1-p)^{n-i}$
```
- [Code](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.binom.html#scipy.stats.binom):
```Python
p = 'prob of success'
n = 'trials'

LOW = 0.01
HIGH = 1

X = sp.stats.binom(n, p)
```
### Geometric
- def. A random variable is a **geometric** random variable, $X\sim\mathcal{G}eo(p)$, iff it counts the number of independent Bernoulli trials until the first success
	- If $\{X_i\}_{i=1}^\infty$ is a family of independent Bernoulli random variables s.t. $X_i\sim\mathcal{B}(p)$, $\forall i\in\mathbb{N}$ and $Y=\inf\{i:X_i=1\}$, then $Y\sim\mathcal{G}eo(p).$
- $\Omega=\mathbb{N}^*$
- **PMF.** If $x\in\Omega$, then $P(X=x)=(1-p)^{x-1}p$, otherwise $0.$
- $E[X]=\dfrac{1}{p}.$
```ad-note
title:Derivation
collapse:close

Note that $$E[X]=P(X=1)E[X\mid X=1]+P(X>1)E[X\mid X>1].$$

For the first summand, consider that $$E[X\mid X=1]=\sum_xxp_{X\mid X}(x\mid 1)=1\cdot p_{X\mid X}(1\mid 1)=1.$$The second equality follows due to the probability $p_{X\mid X}(x\mid 1)$ being 0 for any $x$ that is not 1, so $$P(X=1)E[X\mid X=1]=p.$$For the second summand, we must show that $p_{X\mid X>1}(x)=p_X(x-1)$ for any $x>1.$

$\quad$Let $x>1$ be a natural number; $p_X(x-1)=(1-p)^{x-2}p$ by definition, and similarly

$$
\begin{align}
p_{X\mid X>1}(x)&=\frac{P(X=x\cap X>1)}{P(X>1)}\\
&=\frac1{1-P(X=1)}P(X=x\cap X>1)\\
&=\frac1{1-p}P(X>1\mid X=x)P(X=x)\\
&=\frac1{1-p}P(X=x)\\
&=\frac1{1-p}(1-p)^{x-1}p\\
&=(1-p)^{x-2}p
\end{align}
$$

Thus, we may substitute $p_X(x-1)$ for the conditional probabilities in the defining sum of $E[X\mid X>1],$ giving us
$$
\begin{align}
E[X]&=p+(1-p)E[X+1]\\
&=p+(1-p)(1+E[X])\\
&=p+1+E[X]-p(1+E[X])\\
&=p+1+E[X]-p-pE[X].
\end{align}
$$

With basic algebra we derive $$E[X]=\dfrac{1}{p}.$$
```
- $V[X]=\dfrac{1-p}{p^2}.$
```ad-note
title:Derivation
collapse:close

Like before, consider that $$E[X^2|X=1]=1\text{ and }E{X^2|X>1}=E[(1+X)^2]=1+2E[X]+E[X^2].$$ Then,
$$
\begin{align*}
E[X^2]&=P(X=1)E[X^2|X=1]+P(X>1)E[X^2|X>1]\\
&=p+(1-p)(1+2E[X]+E[X^2]).
\end{align*}
$$

With some basic algebra this simplifies to $$E[X^2]=\frac{1+2(1-p)E[X]}{p},$$ which can be simplified further given we know $E[X]=\dfrac{1}{p}$: $$E[X^2]=\frac{2}{p^2}-\frac{1}{p}.$$ Now we can simply calculate the variance:
$$
\begin{align*}
V[X]&=E[X^2]-E[X]^2\\
&=\frac{2}{p^2}-\frac{1}{p}-\frac{1}{p^2}\\
&=\frac{1-p}{p^2}
\end{align*}
$$
```
- **CDF.** $P(X\leq x)=1-(1-p)^x.$
```ad-note
title:Derivation
collapse:close

$$
\begin{align*}
F_X(x)&=\sum_{n=-\infty}^xP(X=n)\\
&=\sum_{n=1}^{x}p(1-p)^{n-1}\\
&=\frac{p(1-(1-p)^{x})}{1-(1-p)}&&\mbox{Partial Geometric Sum}\\
&=\frac{p(1-(1-p)^{x})}{p}\\
&=1-(1-p)^{x}
\end{align*}
$$
```
- [Code](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.geom.html#scipy.stats.geom):
```Python
p='probability of success in all Bernoulli Trials'

LOW = 0
HIGH = 1-0.01

X=sp.stats.geom(p)
```
### Discrete-Uniform
- def. A discrete random variable is **uniformly distributed**, $X\sim\mathcal{U}(a, b)$, iff it has an equal chance to be any value in the sample space
- $\Omega=[a,b]\cap\mathbb{N}$, where $a<b$
- **PMF.** If $x\in\Omega$, then $P(X=x)=\dfrac{1}{b-a+1}$, otherwise $0$
- $E[X]=\dfrac{a+b}{2}$
- $V[X]=\dfrac{(b-a)(b-a+2)}{12}$
- **CDF.** $P(X\leq x)=\dfrac{x-a+1}{b-a+1}$
```ad-note
title:Derivation
collapse:close

$$
\begin{align*}
P(X\leq x)&=\sum_{i=a}^x\frac{1}{b-a+1}\\
&=\sum_{n=0}^{x}\frac{1}{b-a+1}-\sum_{n=0}^{a}\frac{1}{b-a+1}+P(X=a)\\
&=\frac{x-a+1}{b-a+1}
\end{align*}
$$
```
- [Code](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.randint.html#scipy.stats.randint):
```Python
a='lower bound'
b='upper bound'

LOW = 0.01
HIGH = 1

X = sp.stats.randint(a, b+1)
```
### Poisson
- def. A random variable is a **Poisson random variable**, $X\sim \mathcal{P}os(\lambda)$, iff it counts the number of successes/occurrences over an interval or area given the average rate of success/occurrences $\lambda$
	- If we know the average rate of occurrences $r$ over an interval or area $t$, and we want to plot the probability of finding $X$ successes over an interval or area $nt$, then $\lambda = rn$
- $\Omega=\mathbb{N}\cup\{0\}$
- **PMF**. If $x\in\Omega$, then $P(X=x)=\dfrac{e^{-\lambda}\lambda^x}{x!}$, otherwise $0$
- $E[X]=\lambda$
```ad-note
title:Derivation
collapse:close

$$
\begin{align*}
E[X]&=\sum_{x=0}^\infty xP(X=x)\\
&=\sum_{x=0}^{\infty}\frac{xe^{-\lambda}\lambda^{x}}{x!}\\
&=\sum_{x=1}^{\infty}\frac{xe^{-\lambda}\lambda^{x}}{x!}&\mbox{since the 0th term is 0}\\
&=\lambda\sum_{x=1}^{\infty}\frac{e^{-\lambda}\lambda^{x-1}}{(x-1)!}\\
&=\lambda\sum_{m=0}^{\infty}\frac{e^{-\lambda}\lambda^{m}}{m!}&\mbox{Let $m=k-1$}\\
&=\lambda
\end{align*}
$$
```
- $V[X]=\lambda$
```ad-note
title:Derivation
collapse:close

$$
\begin{align*}
V[X]&=E[X^2]-E[X]^2\\
&=\sum_{x=0}^{\infty}\frac{x^2e^{-\lambda}\lambda^{x}}{x!}-\lambda^2\\
&=\sum_{x=1}^{\infty}\frac{x^2e^{-\lambda}\lambda^{x}}{x!}-\lambda^2\\
&=\lambda\sum_{x=1}^{\infty}\frac{xe^{-\lambda}\lambda^{x-1}}{(x-1)!}-\lambda^2\\
&=\lambda\sum_{m=0}^{\infty}\frac{(m+1)e^{-\lambda}\lambda^{m}}{m!}-\lambda^2\\
&=\lambda\sum_{m=0}^{\infty}\frac{me^{-\lambda}\lambda^{m}}{m!}+\lambda\sum_{m=0}^{\infty}\frac{e^{-\lambda}\lambda^{m}}{m!}-\lambda^2\\
&=\lambda^2+\lambda-\lambda^2\\
&=\lambda
\end{align*}
$$
```
- **CDF**, $P(X\leq x)=\displaystyle\sum_{k=0}^{\lfloor x\rfloor}\dfrac{e^{-\lambda}\lambda^x}{k!}.$
- [Code](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.poisson.html#scipy.stats.poisson):
```Python
r = 'rate per interval/area t'
t = 'number of intervals in the larger interval'
Lambda = r*t

LOW = 0
HIGH = 1-0.01

X = sp.stats.poisson(Lambda)
# Poisson might generate too many things if you leave it at 0, so make LOW strictly greater than 0
```
### Hypergeometric
- def. A variables is **Hypergeometric**, $X\sim\mathcal{H}yper(m, n, k)$, iff it counts the successes in $k$ draws or trials, without replacement, from a finite population containing $m$ succeses and $n$ failures
	- Use it over Binom if the sample space is finite and there's no replacement, i.e. the trials are dependent
- $\Omega=\{\max{\{0,k-n\}},\ldots,\min{\{k,m\}}\}$
- **PMF**, generally, $P(X=x)=\dfrac{(\text{\# of ways to succeed in the given trials})(\text{\# of ways to fail })}{\text{total \# of ways to arrange the population for the trials}}$
More specifically, given our parameters and $k$ being the sample size and assuming $x\in S$, $$P(X=x)=\dfrac{{m\choose x}{n\choose k-x}}{{m+n\choose k}}$$ You could parametrise it differently, maybe with $K$ being population successes, $N$ population size, $n$ being the sample size, and $N-K$ being the failures.
- $E[X]=k\dfrac{m}{n+m}$
```ad-note
title:Derivation
collapse:close

lol no
```
- $V[X]=k\dfrac{m}{m+n}\dfrac{n}{m+n}\dfrac{m+n-k}{m+n-1}$
```ad-note
title:Derivation
collapse:close

lol no
```
- **CDF**, $P(X\leq x)=\displaystyle\sum_{i=\max\{0,k-n\}}^{x}\dfrac{{m\choose i}{n\choose k-i}}{{m+n\choose k}}$
- [Code](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.hypergeom.html#scipy.stats.hypergeom):
```Python
# These are the hypergeometric parameters as shown in the scipy documentation with an H prefixed. If you know that population = success + failure, it's easy to translate
Hn = 'successes'
# HM > HN must hold
HM = 'population'
HN = 'sample size/draws'

LOW = 0
HIGH = 1-LOW

X = sp.stats.hypergeom(HM, Hn, HN)
```
## Continuous
### Uniform
- def. A random variable is **Uniformly distributed**, $X\sim\mathcal{U}(a, b)$, iff it has an equal likelihood to be any value in the sample space.
- $\Omega=[a,b]$
- **PDF.** If $x\in\Omega$, then $f_X(x)=\dfrac{1}{b-a}$ 0 otherwise
	- $P(X\in\Omega)=\displaystyle\int_a^b\dfrac{1}{b-a}dx=1$
- $E[X]=\dfrac{a+b}{2}$
```ad-note
title:Derivation
collapse:close

$$
\begin{align*}
E[X]&=\displaystyle\int_{-\infty}^\infty xf_X(x)dx\\
&=\int_a^b\dfrac{x}{b-a}dx\\
&=\dfrac{1}{b-a}\int_a^bxdx\\
&=\dfrac{1}{b-a}\dfrac{b^2-a^2}{2}\\
&=\dfrac{a+b}{2}
\end{align*}
$$
```
- $V[X]=\dfrac{(b-a)^2}{12}$
```ad-note
title:Derivation
collapse:close

$$
\begin{align*}
V[X]&=\int_{-\infty}^{\infty}(x-E[X])^{2}f_{X}(x)dx\\
&=\int_{a}^{b}\frac{(x-\frac{a+b}{2})^{2}}{b-a}dx\\
&=\frac{1}{b-a}\int_{a}^{b}(\frac{2x-(a+b)}{2})^{2}dx\\
&=\frac{1}{4(b-a)}\int_{a}^{b}(2x-(a+b))^{2}dx\\
&=\frac{1}{4(b-a)}\int_{a}^{b}4x^{2}-4x(b+a)+(b+a)^{2}dx
\end{align*}
$$

We shall then calculate the last integral:
$$
\begin{align*}
\int_{a}^{b}4x^{2}-4x(b+a)+(b+a)^{2}dx&=4\int_{a}^{b}x^{2}dx-4(b+a)\int_{a}^{b}xdx+(b+a)^{2}\int_{a}^{b}dx\\
&=4\frac{b^{3}-a^{3}}{3}-2(a+b)^{2}(b-a)+(a+b)^{2}(b-a)\\
&=(b-a)\left(4\frac{(a^{2}+ab+b^{2})}{3}-(a+b)^{2}\right)
\end{align*}
$$

Thus,
$$
\begin{align*}
V[X]&=\displaystyle\frac{(b-a)}{4(b-a)}\left(4\frac{(a^{2}+ab+b^{2})}{3}-(a+b)^{2}\right)\\
&=\frac{(a^{2}+ab+b^{2})}{3}-\frac{(a+b)^{2}}{4}\\
&=\frac{4a^{2}+4ab+4b^{2}-3a^{2}-6ab-3b^{2}}{12}\\
&=\frac{b^{2}-2ab+a^{2}}{12}\\
&=\frac{(b-a)^{2}}{12}
\end{align*}
$$
```
- **CDF.** $F_X(x)=P(X\leq x)=\dfrac{x-a}{b-a}$
```ad-note
title:Derivation
collapse:close

$$
\begin{align*}
F_{X}(x)&=\displaystyle\int_{-\infty}^{x}f_{X}(t)dt\\
&=\frac{1}{b-a}\int_{a}^{x}dt\\
&=\frac{x-a}{b-a}
\end{align*}
$$
```
- $\breve{X}=\dfrac{a+b}{2}$
```ad-note
title:Derivation
collapse:close

$$
\begin{align*}
P(X\geq x)&=\frac{1}{2}=1-P(X\leq x)\\
1-\frac{x-a}{b-a}&=\frac{b-a-x+a}{b-a}\\
b-x&=\frac{b-a}{2}\\
x&=b-\frac{b-a}{2}\\
&=\frac{2b-b+a}{2}\\
&=\frac{a+b}{2}
\end{align*}
$$
```
- **PPF.** $Q(p)=p(b-a)+a$
```ad-note
title:Derivation
collapse:close

$$
\begin{align*}
p&=\frac{Q(p)-a}{b-a}\\
p(b-a)&=Q(p)-a\\
Q(p)&=p(b-a)+a
\end{align*}
$$
```
- [Code](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.uniform.html#scipy.stats.uniform):
```Python
a='lower bound'
b='upper bound'

LOW = 0
HIGH = 1-LOW

X=sp.stats.uniform(a, b)
```
### Exponential
- def. A variable is **Exponentially distributed**, $X\sim\mathcal{E}xp(\lambda)$, iff it describes an events whose probability of occurring decreases over time given the rate of occurrence $\lambda$. Useful for when $X$
- $\Omega=[0,\infty).$
- **PDF.** If $x\in\Omega$, then $f_X(x)=\lambda e^{-\lambda x}$, otherwise $0.$
	- $P(X\in\Omega)=\displaystyle\int_{0}^{\infty}\lambda e^{-\lambda x}dx=1.$
```ad-note
title:Derivation
collapse:close

$$
\begin{align*}
P(X\in\Omega)&=\int_{0}^{\infty}\lambda e^{-\lambda x}dx\\
&=\lambda\int_{0}^{\infty}e^{-\lambda x}dx\\
&=-\int_{0}^{-\infty}e^{u}du&&\mbox{let }u=-\lambda x\\
&=\int_{-\infty}^{0}e^{u}du\\
&=e^{0}-e^{-\infty}\\
&=1-0\\
&=1
\end{align*}
$$
```
- $E[X]=\dfrac{1}{\lambda}.$
```ad-note
title:Derivation
collapse:close

$$
\begin{align*}
E[X]&=\int_{0}^{\infty}x\lambda\ e^{-\lambda\ x}dx\\
&=\lambda\ \int_{0}^{\infty}xe^{-\lambda\ x}dx\\
&=-\frac{1}{\lambda}\int_{0}^{-\infty}ue^{u}du&&u=-\lambda x\implies x=-\frac{u}{\lambda}\text{ and }dx=-\frac{1}{\lambda}du\\
&=-\frac{1}{\lambda}((0-1)e^{0}-\lim_{n\to -\infty}(n-1)e^{n})\\
&=-\frac{1}{\lambda}\cdot(-1)\\
&=\frac{1}{\lambda}
\end{align*}
$$
```
- $V[X]=\dfrac{1}{\lambda^2}.$
```ad-note
title:Derivation
collapse:close

$$
\begin{align*}
E[X^2]&=\int_0^\infty x^2\lambda e^{-\lambda x}dx\\
&=-\frac{1}{\lambda^2}\int_0^{-\infty}u^2e^udu&&u=-\lambda x\implies x=-\frac{u}{\lambda}\\
&=\frac{1}{\lambda^2}(u^2e^u-2ue^u+2e^u)|_{-\infty}^0&&\mbox{repeated IBP}\\
&=\frac{2}{\lambda^2}
\end{align*}
$$

We can now derive the variance:

$$
\begin{align*}
V[X]&=E[X^2]-E[X]^2\\
&=\frac{2}{\lambda^2}-\frac{1}{\lambda^2}\\
&=\frac{1}{\lambda^2}
\end{align*}
$$
```
- **CDF.** $F_X(x)=\int_{-\infty}^x\lambda e^{-\lambda t}dt=1-e^{-\lambda x}.$
```ad-note
title:Derivation
collapse:close

$$
\begin{align*}
F_X(x)&=\int_{-\infty}^x\lambda e^{-\lambda t}dt\\
&=\lambda\int_0^xe^{-\lambda t}dt\\
&=-\int_0^{-\lambda x}e^udu&&u=-\lambda t\implies t=-\frac{u}{\lambda}\\
&=e^u|_{-\lambda x}^0\\
&=1-e^{-\lambda x}
\end{align*}
$$
```
- $\breve{X}=\dfrac{\ln(2)}{\lambda}.$
```ad-note
title:Derivation
collapse:close

$$
\begin{align*}
P(X\geq x)&=1-P(X\leq x)=\frac{1}{2}\\
1-(1-e^{-\lambda x})&=\frac{1}{2}\\
\ln(e^{-\lambda x})&=\ln(2^{-1})\\
-\lambda x&=-\ln(2)\\
x&=\frac{\ln(2)}{\lambda}
\end{align*}
$$
```
- **PPF.** $Q(p)=-\dfrac{\ln(1-p)}{\lambda}.$
```ad-note
title:Derivation
collapse:close

$$
\begin{align*}
1-e^{-\lambda Q(p)}&=p\\
e^{-\lambda Q(p)}&=1-p\\
-\lambda Q(p)&=\ln(1-p)\\
Q(p)&=-\frac{\ln(1-p)}{\lambda}
\end{align*}
$$
```
- [Code](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.expon.html#scipy.stats.expon)
```Python
Lambda = 'rate of occurance'

LOW = 0
HIGH = 1-0.01

X = sp.stats.expon(scale = 1/Lambda)
```
### Normal
- def. Defined by its PDF, the normal distribution, $\mathcal{N}(\mu, \sigma^2)$, obtains most of its usage due to the Central Limit Theorem. The **standard** normal distribution (also called the Z-distribution) has no parameters, $\mathcal{N}(0, 1)$, and its PDF is at times denoted by $\phi(z)$ while its CDF is denoted by $\Phi(z)$.
- $\Omega=\mathbb{R}$
- **PDF.** $$f_X(x)=\dfrac{1}{\sigma\sqrt{2\pi}}\cdot\exp\left(-\dfrac{(x-\mu)^2}{2\sigma^2}\right)$$
	- $P(X\in\Omega)=\dfrac{1}{\sigma\sqrt{2\pi}}\displaystyle\int_{-\infty}^\infty \exp\left(-\dfrac{(x-\mu)^2}{2\sigma^2}\right)=1$
- $E[X]=\mu$
- $V[X]=\sigma^2$
```ad-note
title:Derivation

```
- **CDF.** Cannot be written with elementary functions. There are tables of approximate values for the standard CDF which can be used to calculate any Normal CDF as $$F_X(x)=\Phi(\frac{x-\mu}{\sigma})$$
- $\breve{X}=\mu$
- **PPF.** $$
\begin{align*}
\Phi^{-1}(p)&=\sqrt{2}\mathrm{erf}^{-1}(2p-1)\\
F^{-1}(p)&=\mu+\sigma\Phi^{-1}(p)=\mu+\sigma\sqrt{2}\mathrm{erf}^{-1}(2p-1)
\end{align*}
$$
- [[Normal-Distribution-Extras|Extras here]]
- [Code](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.norm.html#scipy.stats.norm)
```Python
mu = 'mean'
Sigma = 'standard deviation'

LOW = 0.0001
HIGH = 1-LOW

X = sp.stats.norm(loc = mu, scale = Sigma)
```

### Laplace
- $X\sim\mathcal{L}(\mu, \lambda),$ where $\lambda>0.$
- $\Omega=\mathbb{R}.$
- **PDF.** $\pi(z)=\dfrac{1}{2\lambda}\exp(-|x+\mu|/\lambda).$
- **CDF.** $F(x)=\dfrac{1}{2}+\dfrac{1}{2}\operatorname{sng}(x-\mu)\left( 1-\exp\left( -|x-\mu|/\lambda \right) \right).$
- $E[X]=\mu.$
- $V[X]=2\lambda^{2}.$
- $\breve X=\mu.$
- **PPF.** $Q(p)=\mu-\lambda\operatorname{sgn}\left( p-\dfrac{1}{2} \right)\ln\left( 1-2\left| p-\dfrac{1}{2} \right| \right).$

# Coding Them
[Scipy zscore](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.zscore.html#scipy.stats.zscore)
## Python
The general template is as follows:

```Python
import math
import numpy as np
import scipy as sp
import seaborn as sns
import matplotlib.pyplot as plt

# Grouping useful numbers under a function. Depending on the argument, it will show a plot of the distribution, though by default it does not do this. You must specify whether you are using a continuous ('cont') or discrete ('disc') YOU MUST INCLUDE QUOTES. If you want to plot the distribution, include PLOT = True. You may specify if you wish scipy to use mean() ('M') or expect() ('E'). Mean tends to have greater accuracy but expect() works with more distributions. By default it uses mean(). Lastly, if you are plotting a discrete distribution, you may specifiy if the bins are centred on x value or to the side
# The plots are highly general and you may want to learn how to actually plot each one. At least for continuous distributions, there's a link to a blog at the end
def OUTPUT(arg1, PLOT = False, MorE = 'M', DISCRETE = True):
    try:
        if MorE=='M':
            print(f'Expected value: {X.mean()}\n')
        elif MorE=='E':
            print(f'Expected value: {X.expect()}\n')
        else:
            raise TypeError
        print(f'Variance: {X.var()}')
        print(f'STD: {X.std()}\n')
        print(f'Median: {X.median()}\n')

        print(f'CDF at {x1}: {X.cdf(x1)}')
        print(f'Probability of at least {x1}: {X.sf(x1)}')
        print(f'PPF at {x2}: {X.ppf(x2)}')
        if arg1=='cont':
            print(f'PDF at {x0}: {X.pdf(x0)}\n')
            if type(PLOT) != bool:
                raise TypeError
            elif PLOT:
                plt.plot(np.linspace(X.ppf(LOW), X.ppf(HIGH), RES), X.pdf(np.linspace(X.ppf(LOW), X.ppf(HIGH), RES)))
                plt.show()
        elif arg1=='disc':
            print(f'PMF at {x0}: {X.pmf(x0)}\n')
            if type(PLOT) != bool:
                raise TypeError
            elif PLOT:
                if type(DISCRETE) != bool:
                    raise TypeError
                elif DISCRETE:
                    sns.displot(x=np.arange(X.ppf(LOW),X.ppf(HIGH)), weights = X.pmf(np.arange(X.ppf(LOW),X.ppf(HIGH))), discrete=True)
                else:
                    sns.displot(x=np.arange(X.ppf(LOW),X.ppf(HIGH)), weights = X.pmf(np.arange(X.ppf(LOW),X.ppf(HIGH))), bins=len(np.arange(X.ppf(LOW), X.ppf(HIGH))))
                plt.show()
        else:
            raise TypeError
    except TypeError:
        raise TypeError('Something went wrong. Check that OUTPUT() has at least 1 argument, that the first argument is either "cont" or "disc". If it has further arguments, ensure the second is a bool and try to specify it as a kwarg (e.g. PLOT = True); ensure that the third is either "M" or "E"; and ensure the fourth is a boolean, or simply write it as a kwarg, e.g. DISCRETE = True')

# here go the parameter variables

# establishes X as a random variable obeying a DISTRIBUTION distribution with *PARAMETERS as parameters. E.g. if X should be a bernoulli random variable, then X = sp.stats.bernoulli(p)
X = sp.stats.DISTRIBUTION(*PARAMETERS)

# These define how much of the graph is shown, going from the tails to the centre. LOW = 0 and HIGH = 0.99 will result in showing the graph from the beginning (left) up to 99% (right). If the sample space is not bounded in either direction, let LOW = 0.01, adding more 0s for your preferred precision. If the sample space is bounded below or above, let LOW = 0 or HIGH = 1 respectively.
LOW = 0
HIGH = 1-LOW

# Specifies the number of points to use when plotting a continuous variable, so essentially the resolution.
RES = 5000

# x0 will be used for the PMF/PDF
# x1 for the CDF
# x2 for the PPF
x0=1
x1=2
x2=0.5

# Modify the arguments for the function here. Remember. first one is necessary and specifies whether the distribution is discrete of continuous, second one specifies whether to plot the distribution, the third specifies whether to use mean() or expect(), and the fourth specifies whether the bins in a discrete plot are centered at their x values or to the side.
OUTPUT('disc')
```
[Blog](https://emredjan.xyz/blog/2017/07/19/plotting-distributions/?source=post_page-----c5ebaafdeedd----------------------) about plotting distributions with SciPy and Matplotlib
### Custom-Discrete-Distribution
If you have the sample space and the associated probabilities, you may [construct a custom](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.rv_discrete.html) distribution:
```Python
Space = 'sample space'
Probabilities = 'probability corresponding to the elements of the sample space with the same index'

X = sp.stats.rv_discrete(name='custm', values=(Space, Probabilities))
```
### Custom-Continuous-Distribution
Same as before. [SciPy link](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.rv_continuous.html#scipy.stats.rv_continuous)
```Python
idk figure it out
```


