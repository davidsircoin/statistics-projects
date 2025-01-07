Tags: [[Stats]], [[Probability-Theory]]

Throughout let $\{X_i\}_{i=1}^n$ be a sequence of IID random variables with mean and variance $\mu$ and $\sigma^2$ respectively, let $$S_n=\sum_{i=1}^nX_i,$$
and let $\overline{X}_n=S_n/n.$ This shall be covered in more detail, and with more care, when tackling laws of large numbers. Convergence and limit theorems provide interesting interpretations for certain distributions as a calculation based on a long sequence of independent random variables following a simpler distribution. The tools that will be developed can give approximations for some distributions at scales where computation becomes expensive.
# Inequalities
Definitions of convergence in some sense tend to use inequalities, so these will be helpful.

> [!thm] *Markov Inequality*
> If a random variable $X$ takes only non-negative values, then, for any $a > 0,$ $$P(X\geqslant a)\leqslant\frac{E[X]}a.$$

```ad-note
title:Derivation
collapse:closed

$$
\begin{align*}
E[X]&=\int_{-\infty}^{\infty} x\pi(x) dx\\
&=\int_0^{\infty}x\pi(x)dx\\
&=\int_0^ax\pi(x)dx+\int_a^{\infty}x\pi(x)dx\\
&\geqslant \int_a^{\infty}x\pi(x)dx\\
&\geqslant \int_a^{\infty}a\pi(x)dx\\
&=aP(X\geqslant a)
\end{align*}
$$
```

This implies that the probability $X$ takes on large values is small when $E[X]$ is small. To see why this is, let $a>0$ and define the random variable $Y_a$ by $$Y_a=\begin{cases}0 & X<a,\\ a & X\geqslant a.\end{cases}$$
Consider the following:
$$
\begin{align*}
Y_a&\leqslant X\\
E[Y_a]&\leqslant E[X]\\
E[Y_a]&=aP(Y_a=a)=aP(X\geqslant a)\\
aP(X\geqslant a)&\leqslant E[X].
\end{align*}
$$

> [!thm] *Chebyshev Inequality*
> If $X$ is a random variable with mean $\mu$ and variance $\sigma^2,$ both finite, then $$P(|X-\mu|\geqslant c)\leqslant\frac{\sigma^2}{c^2},\quad\forall c>0.$$

There are 2 ways to justify why this is. First, let $X$ be a continuous random variable and introduce the function $$g(x)=\begin{cases}
0 & |x-\mu|<c, \\
c^2 & |x-\mu|\geqslant c.
\end{cases}$$
Note that $(x-\mu)^2\geqslant g(x)$ for all $x.$ By definition, $$\sigma^2=V[X]=\int_{-\infty}^{\infty} (x-\mu)^2f_X(x) dx\geqslant \int_{-\infty}^{\infty} g(x)f_X(x)dx=c^2P(|X-\mu|\geqslant c).$$
For a second justification, we consider $X$ to be any kind of random variable and apply Markov's inequality to the random variable $(X-\mu)^2$ with $a=c^2:$ $$P((X-\mu)^2\geqslant c^2)\leqslant \frac{E[(X-\mu)^2]}{c^2}=\frac{\sigma^2}{c^2}.$$
Since $(X-\mu)^2\geqslant c^2$ is equivalent to $|X-\mu|\geqslant c,$ we get the desired inequality: $$P(|X-\mu|\geqslant c)\leqslant \frac{\sigma^2}{c^2}.$$

> [!thm]
> If $c=k\sigma,$ for $k>0,$ we get that $$P(|X-\mu|\geqslant k\sigma)\leqslant\frac{\sigma^2}{k^2\sigma^2}=\frac1{k^2}.$$

The above bounds the probability of being $k$ standard deviations away from the mean. For $0<k\leqslant 1,$ the above is useless for $1/k^2$ would be greater than $1$ and it is not very informative to know the probability of an event is below, say, $20.$ As such it is most useful for $k>1.$ There is an approximate 'inverse square law' when it comes to the probability of being a constant factor of standard deviations away from the mean. It is immediate that $$P(|X-\mu|\leqslant k\sigma)\geqslant 1-\dfrac1{k^2}.$$
That is, the probability of being within $k$ standard deviations of the mean approaches $1$ quadratically as $k$ increases.

> [!rmk] Empirical Rule
> If $X$ is approximately normal, a sharper approximation is available for then $$P(|X-\mu|\leqslant k\sigma^2)=2\Phi(k)-1.$$ And so, $P(|X-\mu|\geqslant k\sigma^2)=2(1-\Phi(k))$ which vanishes exponentially. This is called the **empirical rule.**

We may use this to place an upper bound on the variance given we know $X$ only takes values in the range $[a,b ].$ First note that for any constant $\gamma$ we have that $$E[(X-\gamma)^2]=E[X^2]-2E[X]\gamma+\gamma^2.$$
It is easy to verify this is minimised for $\gamma=E[X].$ Then, $$\sigma^2=E[(X-E[X])^2]\leqslant E[(X-\gamma)^2],\quad\forall \gamma.$$
In particular, for $\gamma=(a+b)/2,$ $$\sigma^2\leqslant E\left[\left(X-\frac{a+b}{2}\right)^2\right]=E[(X-a)(X-b)]+\frac{(b-a)^2}4\leqslant \frac{(b-a)^2}4.$$
The last inequality follows since, for each $x\in[a,b],$ the product $(x-a)(x-b)\leqslant 0.$ Thus, $$\sigma^2\leqslant \frac{(b-a)^2}4.$$
From this we derive $$P(|X-\mu|\geqslant c)\leqslant \frac{\sigma^2}{c^2}\leqslant \frac{(b-a)^2}{4c^2}.$$
If additionally $P(X=a)=P(X=b)=1/2,$ then the variance is exactly the quotient above. Without more information about $X$ like this, these inequalities are the best we are guaranteed.

> [!thm] *Hoeffsing's Inequality*
> Suppose the $X_i$ are merely independent. If $\mu=0$ and $X_i\in[a_i,b_i],$ then for any $\varepsilon,c>0,$ $$P(S_n\geqslant \varepsilon)\leqslant e^{-c\varepsilon}\prod_{i=1}^{n}e^{c^2(b_i-a_i)^2/8}=e^{-c\varepsilon}\exp\left( \dfrac{c^2}{8}\sum_{i=1}^{n} (b_i-a_i)^2 \right) .$$
> When $b_i-a_i=\delta$ is constant, $$P(S_n\geqslant \varepsilon)\leqslant e^{-c\varepsilon}\exp(n\delta^2 c^2/8).$$

```ad-note
title:Derivation
collapse:closed

If $\lambda_i=\dfrac{X_i-a_i}{b_i-a_i},$ we can express $X_i$ as a convex function of $a_i$ and $b_i:$ $$X_i=\lambda_ib_i + (1-\lambda_i)a_i.$$
By the convexity of $e^{cx}$ we have that $$e^{cX_i}\leqslant \lambda_ie^{cb_i} + (1-\lambda_i)e^{ca_i}.$$
Now we take expectations, keeping in mind that $\mu=0:$ $$E[e^{cX_i}]\leqslant -\dfrac{a_i}{b_i-a_i}e^{cb_i} + \dfrac{b_i}{b_i-a_i}e^{ca_i}.$$
If $\gamma=-a_i/(b_i-a_i), u=c(b_i-a_i),$ and $g(x)=-\gamma x+\log(1-\gamma + \gamma e^x),$ simple algebra yields $$E[e^{cX_i}]\leqslant e^{g(u)}.$$
Note that $g(0)=g'(0)=0$ and $g''(x)\leqslant1/4$ for any $x>0,$ so by Taylor's theorem there is a $x\in(0,u)$ s.t.
$$
\begin{align*}
g(u)&=g(0) + ug'(0) + \dfrac{u^2}{2}g''(x)\\
&=\dfrac{u^2}{2}g''(x)\\
&\leqslant \dfrac{u^2}{8}=\dfrac{c^2(b_i-a_i)^2}{8}
\end{align*}
$$
Thus, $$E[e^{cX_i}]\leqslant \exp\left( \dfrac{1}{8}c^2(b_i-a_i)^2 \right) .$$
By Markov's inequality,
$$
\begin{align*}
P(S_n\geqslant \varepsilon)&=P(cS_n\geqslant c\varepsilon)\\
&=P\left( e^{cS_n}\geqslant e^{c\varepsilon} \right) \\
&\leqslant e^{-c\varepsilon}E[e^{cS_n}] && \mbox{Markov}\\
&=e^{-c\varepsilon}\prod_{i=1}^{n}E[e^{cX_i}] && \mbox{Independence}\\
&\leqslant e^{-c\varepsilon}\prod_{i=1}^{n}\exp\left( \dfrac{1}{8}c^2(b_i-a_i)^2 \right)
\end{align*}
$$
```

If $X\sim\mathcal{B}ernoulli(p),$ then $X_i/n - p$ is bounded between $-p$ and $1/n-p,$ i.e. $\delta=1/n,$ and so $$P(\overline{X}_n-p\geqslant \varepsilon)\leqslant e^{-c\varepsilon}e^{c^2/8n}.$$
Similarly, $p-X_i/n$ is bounded between $p-1/n$ and $p:$ $$P(p-\overline{X}_n\geqslant \varepsilon)\leqslant e^{-c\varepsilon}e^{c^2/8n}.$$
Hence, $$P(|\overline{X}_n - p|\geqslant \varepsilon)\leqslant P(\overline{X}_n-p\geqslant \varepsilon) + P(p-\overline{X}_n>\varepsilon)\leqslant 2e^{-c\varepsilon}e^{c^2/8n}.$$
Setting $c=\sqrt{ n },$ or other related quantities, we see that as $n$ grows, the probability of being arbitrarily far from the mean, $\mu=p,$ goes to $0.$

> [!thm] *Mill's Inequality*
> If $Z\sim\mathcal{N}(0,1),$ then $$P(|Z|>c)\leqslant \dfrac{1}{c}\sqrt{ 2/\pi }\exp\left( -\dfrac{c^2}{2} \right) .$$

Now an equality from analysis.

> [!thm] *Cauchy-Schwartz Inequality*
> If $V[X],V[Y]<\infty,$ $$E[XY]\leqslant\sqrt{E[X^2]E[Y^2]}.$$

> [!thm] *Jensen's Inequality*
> If $g$ is convex and differentiable at $E[X],$ $$E[g(X)]\geqslant g(E[X]).$$
> If it is concave, the inequality is reversed.

```ad-note
title:Derivation
collapse:closed

Let $f(x)=g'(E[X])(x-E[X])+g(E[X])$ be the line tangent to $(E[X],g(E[X])).$ Then, $f(E[X])=g(E[X])$ and, by convexity, $$E[g(X)]\geqslant E[f(X)]=g'(E[X])0+g(E[X])=g(E[X]).$$
```



# Convergence Notions
Unlike convergence in analysis where we examine sequences of numbers, there is a sense (many, in fact) in which a sequence of random variables converges.

> [!def]+ Convergence in Probability
> Let $\{Y_n\}_{n=1}^{\infty}$ be a sequence of random variables and let $Y$ be another random variable all valued in a metric space with the metric $d.$ We say the $Y_{n}$ **converge to $X$ in probability,** writing $Y_n\overset{ P }{ \to }Y$ when the metric is clear, iff, for any $\varepsilon>0,$ $$\lim_{ n \to \infty } P(d(Y_{n},Y)\geqslant \varepsilon)=0.$$

The notion makes sense even when $Y$ is 'constant,' i.e. $P(Y=c)=1$ for a fixed $c$ and instead we write $Y_n\overset{P}{\to}c,$ and typically we will work with the euclidean metric on $\mathbb{R}.$ By the Chebyshev inequality, if all $Y_{n}$ have the same mean $\mu$ and $V[Y_n]$ converges to $0,$ then the sequence of $Y_n$ converges to $\mu$ in probability. More explicitly we may also rephrase the above definition as follows:

> [!def]+ Alternative Definition
> A sequence $\{Y_n\}_{n=1}^\infty$ of random variables **converges in probability** to $Y$ iff for each $\varepsilon,\delta>0$ there is a natural $N$ s.t. $$\forall n\geqslant N.\ P(|Y_n-a|\geqslant \varepsilon)\leqslant \delta.$$

We can think of $\varepsilon$ as the *accuracy level* and $\delta$ as the *confidence level,* giving us the following intuition: for any given levels of accuracy and confidence, $Y_n\approx Y$ within these levels provided $n$ is sufficiently large. This we use in the weak law of large numbers. There is an even weaker notion, in the appropriate sense:

> [!def] Convergence in Distribution
> $\{Y_n\}_{n=1}^{\infty}$ **converges in distribution** to $Y$ iff $\{F_{Y_n}\}_{n=1}^{\infty}$ converges pointwise to $F_Y$ on the set of values at which $F_Y$ is continuous.

The notion restricts us to at most variables valued in $\mathbb{R}^k$ but that is not the source of its weakness. Rather, converging in other senses typically implies convergence in distribution with the converse not being generally true. There are 2 more common senses of convergence.

> [!def] Almost Surely Convergence
> $\{Y_n\}_{n=1}^{\infty}$ **converge almost surely (a.s.)** or **with probability 1** to $Y,$ written $Y_n\overset{\mathrm{a.s.}}{\to}Y,$ iff $$P\left( \lim_{ n \to \infty}Y_n=Y \right)=1.$$

Unlike with convergence in probability, almost surely convergence requires we view our sample space as the set of all sequences of real numbers and our random variable as taking on one of these sequences as a value. If a sequence almost surely converges to $Y,$ it means the probability density is concentrated on sequences $\{y_n-y\}_{n=1}^{\infty}$ converging to $0.$ As with continuous probability, an event of probability $0$ is not impossible, only extremely unlikely. When $Y$ is a 'constant' $c,$ it would also mean substantial deviations from $c$ happen only finitely many times for all values of our random variable in the reasonably likely sequences. If it happened infinitely often, then we would have a subsequence either converging to a number other than $c$ or not converging at all obtained by picking these deviations.

> [!def] $L^p$ Convergence
> For any positive natural $p,$ $\{Y_n\}_{n=1}^{\infty}$ **converges to $Y$ in $L^p,$** typically written $Y_n\overset{L^p}{\to}Y,$ iff $$E[|Y_n-Y|^p]\to0.$$
> If $p=2,$ we say the $Y_n$ converge to $Y$ **in the mean squared** or **in quadratic mean,** writing $Y_n\overset{\mathrm{q.m.}}{\to}Y.$

$L^p$ convergence is mainly of theoretical interest for it helps proving other kinds of convergence, though it has applications. The following theorem summarises the relationship between these notions.

> [!thm]
> 1. $Y_n\overset{L^p}{\to}Y\implies Y_n\overset{P}{\to}Y.$
> 2. $Y_n\overset{P}{\to}Y\implies Y_n\overset{d}{\to}Y.$
> 3. $Y_n\overset{\mathrm{a.s.}}{\to}Y\implies Y_n\overset{P}{\to}Y.$
> 4. $Y_n\overset{d}{\to}c\implies Y_n\overset{P}{\to}c.$
> 5. If the $Y_n$ and $Y$ are discrete, $Y_n\overset{d}{\to}Y$ implies $Y_n\overset{P}{\to}Y.$
> 6. If $V[Y_n]\to0$ and $E[Y_n]\to\mu,$ then $Y_n \overset{L^2}{\to}\mu.$

```ad-note
title:Derivation
collapse:closed

1. From Markov's inequality, $$P(|X_n-X|\geqslant \varepsilon)=P(|X_n-X|^p\geqslant \varepsilon^p)\leqslant \dfrac{E[|X_n-X|^p]}{\varepsilon^p}\to 0.$$
2. Let $y$ be a point at which $F_Y$ is continuous. Then, 
$$
\begin{align*}
F_{Y_n}(y)&=P(Y_n\leqslant y,Y\leqslant y+\varepsilon\cup Y>y+\varepsilon)\\
&=P(Y_n\leqslant y, Y\leqslant y+\varepsilon)+P(Y_n\leqslant y,Y>y+\varepsilon)\\
&\leqslant P(Y\leqslant y+\varepsilon) + P(|Y_n-Y|>\varepsilon)\\
&=F_Y(y+\varepsilon)+P(|Y_n-Y|>\varepsilon).
\end{align*}
$$
Similarly,
$$
\begin{align*}
F_Y(y-\varepsilon)&=P(Y\leqslant y-\varepsilon,Y_n\leqslant y)+P(Y\leqslant y-\varepsilon,Y_n>y)\\
&\leqslant F_{Y_n}(y)+P(|X_n-X|>\varepsilon)
\end{align*}
$$
Thus, $$F_Y(y-\varepsilon)-P(|Y_n-Y|>\varepsilon)\leqslant F_{Y_n}(y)\leqslant F_Y(y+\varepsilon)+P(|Y_n-Y|>\varepsilon).$$
First taking limits of $n$ we see that $$F_Y(y-\varepsilon)\leqslant \liminf_{n\to \infty}F_{Y_n}(y)\leqslant \limsup_{n\to \infty}F_{Y_n}(y)\leqslant F_Y(y+\varepsilon).$$
This holds for any $\varepsilon>0.$ Now we take limits of $\varepsilon\to0,$ yielding that the superior and inferior limits are equal to $F_Y(y)$ and hence $F_{Y_n}(y)\to F_Y(y)$ for all $y$ at which $F_Y$ is continuous. Note we used the continuity of the CDF at $y$ when taking limits of $\varepsilon.$
3. Almost surely convergence can be rephrased as follows: $$P\left( \bigcap_{r>0}\bigcup_{N=1}^{\infty} \bigcap_{n\geqslant N}|Y_n-Y|<r\right)=1.$$
We may replace $r$ for $\varepsilon$ to obtain $$ P(\lim_{n \to \infty}Y_n=Y)\leqslant P\left( \bigcup_{N=1}^{\infty} \bigcap_{n\geqslant N}|Y_n-Y| >\varepsilon\right) =1.$$
Note the following sequence of events is increasing, so the probability of their union is the limit of their probabilities: $$\left\{ \bigcap_{n\geqslant N}|Y_n-Y|>\varepsilon \right\} _{N=1}^{\infty}.$$
Hence,
$$
\begin{align*}
P\left( \bigcup_{N=0}^{\infty} \bigcap_{n\geqslant N}|Y_n-Y| >\varepsilon\right)&=\lim_{N \to \infty}P\left( \bigcap_{n\geqslant N}|Y_n-Y|<\varepsilon \right)=1\\
\lim_{N \to \infty}P\left( \bigcup_{n\geqslant N}|Y_n-Y|\geqslant \varepsilon \right)&=0
\end{align*}
$$
The event $|Y_n-Y|\geqslant\varepsilon,$ when $n\geqslant N,$ is a subset of the union, so for any strictly increasing sequence $\{n_k\}_{k=1}^{\infty},$ we have that $$\lim_{N \to \infty}P(|Y_{n_N}-Y|\geqslant \varepsilon)=0.$$
In particular it holds for $n_N=N:$ $$\lim_{n \to \infty}P(|Y_n-Y|\geqslant \varepsilon)=0.$$
4. For any $\varepsilon>0,$
$$
\begin{align*}
P(|Y_n-c|>\varepsilon)&=P(Y_n<c-\varepsilon)+P(Y_n>c+\varepsilon)\\
&\leqslant P(Y_n\leqslant c-\varepsilon)+P(Y_n>c+\varepsilon)\\
&=F_{Y_n}(c-\varepsilon)+1-F_{Y_n}(c+\varepsilon)\\
&\to F_Y(c-\varepsilon)+1-F_{Y}(c+\varepsilon) && \mbox{as }n\to \infty\\
&=0+1-1\\
&=0
\end{align*}
$$
```

```ad-example
title:Convergence in Probability Does not Imply a.s. Convergence
collapse:closed

Consider a discrete-time arrival process. We partition the set of times into intervals of the form $$I_k=\left\{ 2^k+m: 0\leqslant m\leqslant 2^k-1 \right\}.$$
Clearly, $I_k$ has $2^k$ many elements. Suppose there is exactly $1$ arrival in each such interval, that all times within an interval are equally likely to have an arrival, and that all times in different intervals are independent. Define a random variable so that $Y_n=1$ if there is an arrival at time $n$ and is $0$ otherwise. Then, for each $n\in I_k,$ we have that $P(Y_{n}\ne 0)=1/2^k,$ and, since $n$ belongs to intervals $I_k$ with larger indices as it increases, $$\lim_{ n \to \infty } P(Y_{n}\ne 0)=\lim_{ k \to \infty } \frac{1}{2^k}=0.$$
Thus, $Y_n$ converges to $0$ in probability$^\dagger$. But $Y_n=1$ for infinitely many values of $n,$ so $P\left( \displaystyle\lim_{ n \to \infty }Y_n=0 \right)=0.$ The sequence of the $Y_n,$ then, does not almost surely converge to $0.$ Intuitively, at any given time, there is a small chance of a substantial deviation from $0$ which decreases as $n$ increases. Given enough time, though, a substantial deviation from $0$ is certain to occur so we do not converge to $0$ with probability $1.$

$\dagger:$ If $\varepsilon,\delta>0,$ then $2^{\left\lceil \delta \right\rceil}$ is a number s.t. for all $n$ larger than it, $Y_{n}\ne 0,$ which, since $\varepsilon\ne 0,$ is equivalent to $Y_n\geqslant\varepsilon,$ with probability $1/2^{\left\lceil \delta \right\rceil}$ or less, which is guaranteed to be less than $\delta.$
```

Although we might conjecture some sense of converge to $Y$ should imply $E[Y_n]\to E[Y],$ this is not true in general for any of the senses introduced so far except for convergence in $L^p.$ With an additional condition, when $Y$ is a.s. constant, we may conclude $E[Y_n]\to c.$ Now we establish the algebraic properties of thlese notions:

> [!thm] *Algebraic Properties of Convergence*
> Let $\{Y_n\}_{n=1}^{\infty}$ and $\{W_n\}_{n=1}^{\infty}$ be sequences of random variables, $Y$ and $W$ be random variables which the sequences converge to in the relevant sense, and let $g$ be a continuous function whose domain contains the range of these random variables.
> 1. If we have *convergence in distribution,* $g(Y_n)\overset{d}{\to}g(Y).$
> 2. Suppose we have *convergence in probability.*
> 	1. $aY_n+bW_n\overset{ P }{ \to }aY+bW,$ for real $a,b.$
> 	2. $Y_nW_n\overset{ P }{ \to } YW.$
> 	3. $g(Y_n)\overset{ P }{ \to }g(Y).$
> 	4. If $P(W_n=0)=P(W=0)=0,$ then $Y_n/W_n\overset{ P }{ \to }Y/W.$
> 	5. $(Y_n, W_n)\overset{ P }{ \to }(Y,W).$
> 	6. If $Y_n\overset{ P }{ \to }W,$ then $P(W=Y)=1.$
> 
> 3. Suppose we have *convergence in $L^p.$*
> 	1. $E[|Y_n|^p]\to E[|Y|^p]$
> 	2. $aY_n+bW_n\overset{ L^p }{ \to }aY+bW,$ for real $a,b.$
> 	3. If $Y_n\overset{ L^p }{ \to }W,$ then $P(W=Y)=1.$
> 
> 4. Suppose we have *a.s. convergence.*
> 	1. $aY_n+bW_n\overset{ a.s. }{ \to }aY+bW,$ for real $a,b.$
> 	2. $Y_nW_n\overset{ a.s. }{ \to } YW.$
> 	3. If $P(W_n=0)=P(W=0)=0,$ then $Y_n/W_n\overset{ a.s. }{ \to }Y/W.$
> 	4. If $Y_n\overset{ a.s. }{ \to }W,$ then $P(W=Y)=1.$

The main properties of convergence in distribution are separated into their own, named theorem.

> [!thm] *Slutzky's Theorem*
> Suppose $Y_n,W_n,Y,$ and $W$ are as above and that $Y_n\overset{d}{\to}Y$ and $W_n\overset{d}{\to}W.$ If $P(W=c)=1,$ then
> 1. $Y_nW_n\overset{ d }{ \to } Yc$
> 2. $Y_n+W_n\overset{ d }{ \to } Y+c.$

```ad-warning

When $W$ is not a.s. constant, convergence in distribution does not in general imply $Y_nW_n\overset{d}{\to}YW$ nor that $Y_n+W_n\overset{d}{\to}Y+W.$
```

For later use we record how convergence of MGFs relates to these notions.

> [!thm]
> If $M_{Y_n}$ converges pointwise to $M_Y$ in a neighbourhood around $0,$ then $Y_n\overset{d}{\to}Y.$

If the MGFs converge at all in a neighbourhood around $0,$ the resulting variable will have a distribution identical to $Y$ by assumption.

# Laws of Large Numbers
## Weak Law
Consider the sequence of IID random variables at the beginning and assume $E[X_i]$ is well-defined. Then,

> [!thm] *Weak Law of Large Numbers*
> $$\overline{X}_n\overset{P}{\to}\mu.$$

```ad-note
title:Derivation
collapse:closed

Suppose $\sigma<\infty.$ By Chebyshev's inequality, $$P(|\overline{X}_n-\mu|>\varepsilon)\leqslant \dfrac{V[\overline{X}_n]}{\varepsilon^{2}}=\dfrac{1}{\varepsilon^2n^2}\sum_{k=1}^{n} V[X_k]=\dfrac{\sigma^{2}}{n\varepsilon^{2}}.$$
The RHS goes to $0$ as $n$ grows. The other case will follows from the strong law below.
```

As $n$ grows larger, the probability that the sample mean is arbitrarily far away from the true mean goes to $0.$ That is, considering an interval of positive length $[\mu-\varepsilon, \mu+\varepsilon]$ around $\mu,$ there is a high probability $\overline{X}_n$ is in that interval. As $n$ grows larger, that probability converges to $1.$ The smaller $\varepsilon$ is, though, the larger $n$ has to be before $\overline{X}_n$ is highly likely to be in that interval—but either way we are guaranteed to eventually fall in.
$\quad$Since the variance of $\overline{X}_n$ has $n$ in the denominator, to goes to $0$ as $n$ increases. By the above discussion, and since its mean is the true mean $\mu,$ we can see why this is true. With greater care, we can show this holds even if $V[X_i]$ is infinite.

> [!rmk]+ Approximating Probabilities with Indicator Variables
> Suppose $P(A)=p$ where $A$ is an event. Define each $X_i$ to take the value $1$ when $A$ occurs and $0$ otherwise. Their shared expected value will be $p=E[X_i].$ In this context, the sample mean $\overline{X}_n$ is often called the **empirical frequency** of $A$ for it records the fraction of the time that $A$ is observed. As $n$ gets large, $\overline{X}_n$ approaches the probability of $A$ occurring. **For this reason we can interpret empirical frequencies as good enough estimates of $p,$ or, conversely, the probability $p$ as long-run frequency.**

## Strong Law

> [!thm] *Strong Law of Large Numbers*
> $$P\left(\lim_{n\to\infty}\overline{X}_n=\mu\right)=1.$$

Since the $X_i$ are independent, $$E[S_n]=\sum_{i=1}^{n} E[X_i]=n\mu,\quad V[S_n]=\sum_{i=1}^nV[X_i]=n\sigma^{2}.$$
Hence, $$E[\overline{X}_n]=\mu,\quad V[\overline{X}_n]=\frac{\sigma^2}n.$$
From this we know that the variance of $\overline{X}_n$ goes to $0$ as $n$ increases and, in turn, more and more of the distribution of $\overline{X}_n$ will concentrate around $\mu.$ To interpret this statement and see how it differs from the weak law, we consider the sample space to be $\mathbb{R}^\omega,$ the set of all sequences of real numbers. Our random variable is now the limit of $\overline{X}_n.$ The weak law only tells us we will not deviate greatly from $\mu.$ But, for each finite $n,$ there is a small chance of deviation. It might be that we infrequently deviate from $n$ infinitely many times as we increase $n.$ The strong laws tells us this cannot be, going further than the weak law. Consider the set $A$ of sequences that converge to $\mu.$ The strong law says the probability density of our random variable is concentrated on $A.$ Then, for any $\varepsilon>0,$ the probability $\left| \overline{X}_n-\mu \right|$ exceeds $\varepsilon$ infinitely often is $0.$ 
# Central Limit Theorem
It is often of interest to approximate $S_n,$ the sum of the first $n$ IID random variables in a sequence. However, although the variance of $\overline{X}_n$ converges to $0$ as $n$ grows, $V[S_n]$ goes to infinity, and the distribution of $S_n$ does not in general converge to anything meaningful. There is a special transformation of $S_n$ that keeps the variance unchanged: $$Z_n=\frac{S_n-n\mu}{\sigma\sqrt{ n }}.$$
Easy calculation reveal
$$
\begin{align*}
E[Z_n]&=\frac{E[S_n-n\mu]}{\sigma\sqrt{ n }}=\frac{E[S_n]-n\mu}{\sigma\sqrt{ n }}=0,\\
V[Z_n]&=V\left[ \frac{S_n}{\sigma\sqrt{ n }}-\frac{n\mu}{\sigma\sqrt{ n }} \right]=\frac{V[S_n]}{\sigma^2n}=\frac{\sigma^2n}{\sigma^2n}=1.
\end{align*}
$$

> [!thm] *Central Limit Theorem (CLT)*
> Let $\{X_n\}_{n=1}^{\infty}$ be a sequence of *any* IID random variables with finite mean and variance $\mu$ and $\sigma^2$ respectively, and let $$Z_n=\frac{\overline{X}_n-\mu}{\sigma/\sqrt{ n }}.$$
> Then, $Z_n\overset{d}{\to}\mathcal{N}(0,1).$

```ad-note
title:Derivation of the CLT
collapse:closed

Let $Y_i=\dfrac{X_i-\mu}{\sigma},$ so that now $$\sum_{i=1}^{n} Y_i=\sum_{i=1}^{n} \dfrac{X_i-\mu}{\sigma}=\dfrac{1}{\sigma}\sum_{i=1}^{n} X_i-\mu=\dfrac{n\overline{X}-n\mu}{\sigma}=\dfrac{\sqrt{ n }}{\sqrt{ n }}\dfrac{n(\overline{X}- \mu)}{\sigma}=\dfrac{n}{\sqrt{ n }}Z_n=\sqrt{ n }Z_n$$
Hence, $$Z_n=\dfrac{1}{\sqrt{ n }}\sum_{i=1}^{n}Y_i.$$
Then, $E[Y_1]=0$ and $E[Y_1^2]=V[Y_1]+E[Y_1]^2=1,$ so
$$
\begin{align*}
M_{Y_1}(t)&=\sum_{k=0}^{\infty} \dfrac{t^k}{k!}E[Y_1^k]\\
&=1+ \dfrac{t^2}{2}+\sum_{k=3}^{\infty} \dfrac{t^k}{k!}E[Y_1^k]\\
\end{align*}
$$
Now,
$$
\begin{align*}
M_{Z_n}(t)&=M_{n\overline{Y}_n}\left( \dfrac{t}{\sqrt{ n }} \right) \\
&= \left( M_{Y_1}\left( \dfrac{t}{\sqrt{ n }} \right)  \right)^n\\
&=\left( 1 + \dfrac{t^2}{2n}+\sum_{k=3}^{\infty} \dfrac{t^k}{k!n^{k/2}}E[Y_1^k] \right)^n\\
&=\left( 1 + \dfrac{1}{n}\left( \dfrac{t^2}{2} + \sum_{k=3}^{\infty} \dfrac{t^k}{k!n^{k/2 - 1}}E[Y_1^k] \right)  \right)^n\\
&\to e^{t^2/2}
\end{align*}
$$
The final limit follows from the fact that $e^x=\lim_{n \to \infty}\left( 1+\dfrac{x}{n} \right)^n,$ the continuity of $e^x,$ and the fact that all higher order terms in the Taylor expansion go to $0$ as $n$ increases. $e^{t^2/2}$ is, of course, the MGF of a [[Joint-Random-Variables#Normal MGF|normal]] distribution. From a theorem above we conclude $Z_n\overset{d}{\to}\mathcal{N}(0,1).$
```

In essence, this tells us that large sums of independent random phenomena is approximately normal. This explains why, in many contexts, random noise is well-described by normal distributions. Further, it allows for easier calculations that only require us to know the mean and variance. There is no need for overly-detailed probabilistic models or tedious manipulations of PMFs and PDFs. By Slutzky's Theorem, since $\widehat{S}_n\overset{d}{\to}\sigma,$ $$\dfrac{\sigma Z_n}{\widehat{S}_n}=\dfrac{\overline{X}_n-\mu}{\widehat{S}_n/\sqrt{ n }}\overset{d}{\to}\mathcal{N}(0,1).$$
When $\sigma$ is unknown to us, we may replace it with an [[Classical-Estimation|estimator]] converging $\sigma$ in distribution. $\sigma Z_n/\widehat{S}_n$ is by definition follows a $t$-distribution with $n-1$ degrees, so this combination of theorems states the $t$-distribution approaches a standard normal as we increase the DoF.

> [!thm] ***$t$-distribution Approaches $\mathcal{N}(0,1)$***
> Let $T_n$ follow a $t$-distribution with $n$ DoF. Then, $$T_n\overset{d}{\to }\mathcal{N}(0,1).$$

The accuracy of the normal approximation is given a bound by the following inequality.

> [!thm] *Berry-Esseen Inequality*
> If the 3rd moment of $X$ is finite, then $$\sup_{z}|F_{Z_n}(z)-\Phi(z)|\leqslant \dfrac{33}{4}\dfrac{E[|X-\mu|^3]}{\sigma^3\sqrt{ n }}.$$

For some probabilities, the normal approximation is exact.

> [!thm]
> $$P(|Z_n|>z)=2\Phi(-z)=2(1-\Phi(z)).$$

```ad-note
title:Derivation
collapse:closed

$$
\begin{align*}
P( |Z_n|>z)&=1-P(Z_n\leqslant z)+P(Z_n\leqslant -z)\\
&=1-\Phi(z)-\delta_n+\Phi(-z)+\delta_n\\
&=2(1-\Phi(z))=2\Phi(-z)
\end{align*}
$$
```

There is also a [[Joint-Random-Variables#Random Vectors|multivariate]] version of the CLT using random vectors and it resembles more the statement that $\sigma Z_n\overset{d}{\to}\mathcal{N}(0,\sigma).$

> [!thm] *Multivariate CLT*
> Let $\{X_i=(X_{1,i},\ldots,X_{m,i})^T\}_{i=1}^{n}$ be a sequence of IID random vectors with finite mean $\mu=E[X]$ and covariance matrix $\Sigma=V[X].$ If $\overline{X}_n=\dfrac{1}{n}\sum_{i=1}^{n}X_i,$ then $$\sqrt{ n }(\overline{X}_n-\mu)\overset{d}{\to }\mathcal{N}(0,\Sigma).$$

## Delta Method
Often in inferential statistics we take transformations of [[Classical-Estimation|asymptotically normal]] estimators and wish to know the resulting distribution as $n$ grows. This is possible when the transformations are continuously differentiable functions of a single variable. The multivariable case is covered shortly.

> [!thm] *Delta Method*
> Let $\{Y_n\}_{n=1}^{\infty}$ be a sequence of random variable and $g$ be a differentiable function on an interval containing the range of $Y_n.$ Suppose $g'(\mu)\ne 0$ and that $$\dfrac{Y_n-\mu}{\sigma/\sqrt{ n }}\overset{d}{\to }\mathcal{N}(0,1).$$
> Then, $$\dfrac{g(Y_n)-g(\mu)}{|g'(\mu)|\sigma/\sqrt{ n }}\overset{d}{\to }\mathcal{N}(0,1).$$

We could rephrase the fact that the $Y_n$ are asymptotically normal as saying $Y_n\approx\mathcal{N}\left( \mu,\dfrac{\sigma^{2}}{n} \right).$ If this holds, the above theorem says, roughly, that $$g(Y_n)\approx \mathcal{N}\left( g(\mu),g'(\mu)^{2}\dfrac{\sigma^{2}}{n} \right) .$$
> [!thm] *Multivariate Delta Method*
> Let $Y_n=(Y_{n,1},\ldots,Y_{n,m})^T$ be a random vector and suppose the sequence of random vectors is asymptotically normal: $$\sqrt{ n }(Y_n-\mu)\overset{d}{\to }\mathcal{N}(0,\Sigma).$$
> Let $g:\mathbb{R}^m\to \mathbb{R}$ be a function whose partial derivatives exist everywhere and suppose no component of $\nabla g(\mu)$ is zero. Then, $$\sqrt{ n }(g(Y_n) - g(\mu))\overset{d}{\to }\mathcal{N}(0,\nabla g(\mu)^T\Sigma\nabla g(\mu)).$$

## Approximation

> [!rmk]+ The Procedure
> Let $S_n$ be defined as in the beginning. If $n$ is large, the probability $P(S_n\leqslant c)$ can be approximated by a normal distribution according to the following steps:
> 1. Calculate $n\mu$ and variance $n\sigma^2$ of $S_n.$
> 2. Calculate the normalised value $$z=\frac{c-n\mu}{\sigma\sqrt{n}}.$$
> 3. Approximate with the formula $$P(S_n\leqslant c)\approx\Phi(z).$$

```ad-summary
title:Polling Example
collapse:close

Let $p$ be the proportion of voters who support a certain candidate for office. We interview $n$ voters and record the fraction $\overline{X}_n$ of them supporting the candidate. Our selections for people to interview are independent and each voter is equally likely to be chosen. We interpret $\overline{X}_n$ as an approximation of $p.$
$\quad$First we approach this with the Chebyshev inequality. Since each voter either does or does not support our candidate of interest, each interview is a Bernoulli random variable $X_i,$ with success probability $p$ and variable $\sigma^2=p(1-p).$ The Chebyshev inequality yields the following:
$$
\begin{align*}
P(\left| \overline{X}_n-p \right|\geqslant \varepsilon)&\leqslant \frac{p(1-p)}{n\varepsilon^2}\\
P(\left| \overline{X}_n-p \right|\geqslant \varepsilon )&\leqslant \frac{1}{4n\varepsilon^2}.
\end{align*}
$$
The last inequality follows from $p(1-p)\leqslant 1/4$—we do this to eliminate the unknown factor, $p,$ from this upper bound. $\varepsilon$ is in a sense the margin of error. Then, $$P(\left| M_{100}-p \right|\geqslant 0.1 )\leqslant \frac{1}{4\cdot 100\cdot (0.1)^2}=\frac14$$
means something like 'the probability our estimate $M_{100}$ is off by at least 0.1 is at most 25%.' Suppose we are comfortable with a 5% probability that our estimate differs from $p$ by at least $0.01.$ How many people must we interview according to this method? Solving the equations
$$
\begin{align*}
P(\left| \overline{X}_n-p \right|\geqslant 0.01 )&\leqslant \frac{1}{4n(0.01)^2}\\
\frac{1}{4n(0.01)^2}&\leqslant 0.05.
\end{align*}
$$
gives us the answer $n\geqslant 50000.$ Obviously, this is far too large for Chebyshev is a conservative upper-bound.
$\quad$We now turn to using a normal approximation for both of these issues. Then, we treat $\overline{X}_n$ and $|\overline{X}_n-p|$ as approximately normal. However, the variance of both is $p(1-p)/n,$ which depends on an unknown. We proceed as above by considering the largest possible variance obtained by changing the value of $p:$ $1/(4n)$ for $p=1/2.$ Thus,
$$
\begin{align*}
z&=\frac{\varepsilon}{1/(2\sqrt{ n })}=2\varepsilon \sqrt{ n }\\
P(\overline{X}_n-p\geqslant \varepsilon)&\leqslant 1-\Phi(z)=1-\Phi(2\varepsilon \sqrt{ n }).
\end{align*}
$$
Since the normal distribution is symmetric about the $x$-axis, we have that $$P(\left| \overline{X}_n-p \right|\geqslant \varepsilon)\approx 2P(\overline{X}_n-p\geqslant \varepsilon).$$
Given the same case as above where $\varepsilon=0.1$ and $n=100,$ we obtain the much smaller upper-bound $$P(\left| M_{100}-p \right|\geqslant 0.1 )\approx 2P(\overline{X}_n-p\geqslant 0.1)\leqslant 2-2\Phi(2\cdot 0.1\cdot \sqrt{ 100 })=2-2\Phi(2)=0.046.$$
And if we wish to have more accurate and precise results? Assuming the worst possible variance, our desired conditions are met when these (equivalent) conditions are fulfilled:
$$
\begin{align*}
2-2\Phi(2\cdot 0.01 \cdot \sqrt{ n })&\leqslant 0.05\\
\Phi(2\cdot 0.01 \cdot \sqrt{ n })&\geqslant 0.975.
\end{align*}
$$
Thus, $2\cdot 0.01 \cdot \sqrt{ n }\geqslant 1.96$ and $n\geqslant 9604.$ This is a much smaller bound than $50000.$
```

In general, there is no rule for when $n$ is large enough so that approximations are within desired bounds. Usually, the closer the $X_i$ are to being normal, and if they are symmetric, the lower $n$ must be to obtain good enough approximations. If, for example, they are all uniform, $S_8$ is already very close to normal. Additionally, the closer $c$ is to the mean of $S_n,$ the closer our approximation will be. Furthermore, it is also possible to determine the minimal sample size needed for our approximation to be within $\varepsilon$ of $\mu$ in the sense that $$P(|\overline{X}-\mu|>\varepsilon)\leqslant \alpha,$$
where $\alpha\in(0,1).$

> [!thm]
> $P(|\overline{X}-\mu|>\varepsilon)\leqslant\alpha$ iff $n\geqslant\left( \dfrac{z_{\alpha/2}\sigma}{\varepsilon} \right)^{2}.$

```ad-note
title:Derivation
collapse:closed

$$
\begin{align*}
P(|\overline{X}-\mu|>\varepsilon)&=P\left( |Z_n|>\varepsilon\sqrt{ n }/\sigma \right) \\
&=2(1-\Phi(\varepsilon\sqrt{ n }/\sigma))\\
2(1-\Phi(\varepsilon\sqrt{ n }/\sigma))&\leqslant  \alpha\\
1-\alpha/2&\leqslant  \Phi(\varepsilon\sqrt{ n }/\sigma)\\
z_{\alpha/\leqslant }&= \varepsilon\sqrt{ n }/\sigma\\
n&\geqslant  \left( \dfrac{z_{\alpha/2}\sigma}{\varepsilon} \right)^{2}
\end{align*}
$$
```

### Approximating the Binomial
Suppose the $X_i$ are Bernoulli random variables with common parameter $p,$ mean $\mu=p,$ and variance $\sigma^2=p(1-p).$ For integers $l$ and $k,$ we will approximate the event $\{ k\leqslant S_n \leqslant l \}.$ We obtain standardised values from the following equivalence: $$k\leqslant S_n\leqslant l\iff\frac{k-np}{\sqrt{ np(1-p)}}\leqslant \frac{S_n-np}{\sqrt{ np(1-p)}}\leqslant \frac{l-np}{\sqrt{ np(1-p)}}.$$
Then, since the middle standardised variable is approximately normal,
$$
\begin{align*}
P(k\leqslant S_n\leqslant l)&=P\left( \frac{k-np}{\sqrt{ np(1-p)}}\leqslant \frac{S_n-np}{\sqrt{ np(1-p)}}\leqslant \frac{l-np}{\sqrt{ np(1-p)}} \right)\\
&\approx \Phi\left( \frac{l-np}{\sqrt{ np(1-p)}} \right)-\Phi\left( \frac{k-np}{\sqrt{ np(1-p)}} \right).
\end{align*}
$$

In fact, a more accurate approximation is obtained by replacing $k$ with $k-1/2$ and $l$ with $l+1/2.$ So,

> [!thm] *De Moivre-Laplace Approximation of the Binomial*
> If $S_n$ is a binomial random variable with parameters $n$ and $p,$ where $n$ is large and $l$ and $k$ are natural numbers, then $$P(k\leqslant S_n\leqslant l)\approx\Phi\left(\frac{l+\frac12-np}{\sqrt{ np(1-p)}}\right)-\Phi\left(\frac{k-\frac12-np}{\sqrt{ np(1-p)}}\right).$$
