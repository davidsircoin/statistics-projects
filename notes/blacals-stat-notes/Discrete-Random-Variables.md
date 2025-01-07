Tags: [[Stats]], [[Probability-Theory]]
# Discrete Random Variables
A **discrete random variable** is a random variable whose range is countable. Functions of these are also discrete random variables.

A **discrete probability law** must follow $$P(\{x_i\}_{i=1}^n)=\sum_{i=1}^n P(x_i).$$ where $P(\{x\})=P(x)$. If the $x_n$ are all equally likely, then $$P(A)=\frac{|A|}{n}.$$
The **probability mass function (PMF)** of a discrete random variable $X$ is the function $p_X(x)=P(\{X=x\}).$

> [!rmk]+ Alternative Notation
> When it is clear that we are talking about the PMF of $X,$ we write $\pi(x)$ or $p(x)$ to denote $\pi(x).$

Further, we write $P(X\in S)$ to denote the probability that $X$ takes any value in $S$. Since each event $\{X=x\}$ is disjoint, if $S\subseteq\text{ ran }X$, then $\displaystyle P(X\in S)=\sum_{x\in S}\pi(x)=\sum_{x\in S}\pi(x).$
$\quad$More formally, $$P(X=x)=P(\{\omega\in\Omega:X(\omega)=x\})$$
> [!rmk] Remark on Notation
> By $\displaystyle\sum_x\pi(x)$ we mean the sum over the range of $X.$
If we pass a discrete random variable $X$ through a function $Y=g(X)$, we get another discrete random whose PMF is $$\pi(y)=\sum_{\{x:g(x)=y\}}\pi(x).$$
## Expected Values and Variance
> [!def] Expected Value
> The **expected value** of a random variable, or the *mean* if it is a discrete random variable, is the value we should expect in each independent trial: $$E[X]=\displaystyle\sum_{x}x\pi(x).$$
> We denote it typically with $\mu.$

The expected value of a random variable does not always exist, i.e. the series could diverge, but when it does it has desirable properties. First, taking expected values is a linear operation: $$E[aX+b]=aE[X]+b,\quad\forall a,b.$$
The proof is trivial. It interacts well with functions of random variables (see [[Probability-Theorems#Discrete Random Variables|derivation]]): If $g(X)$ is a function of $X$, then $$E[g(X)]=\displaystyle\sum_{x}g(x)\pi(x).$$
At times we are interested in the **$n$-th moments** of a variable, defined as $$E[X^n]=\sum_{x}x^n\pi(x).$$
> [!def] Variance
> The **variance** of a random variable is the average distance sequence the variable is from its mean: $$V[X]=E[(X-E[X])^2].$$
> Typically we denote it with $\sigma^2$ and call $\sigma$ the **standard deviation** (SD).

We use the [[Bayesian-Estimation#Least Mean Squares|mean squared error]] instead of the mean of the euclidean distance between $X$ and $E[X]$ for note
$$
\begin{align*}
E[|X-E[X]|]&=\sum_x\pi(x)|x-E[X]|\\
&=\sum_{x\leqslant E[X]}(E[X]\pi(x)-x\pi(x))+\sum_{x>E[X]}x\pi(x)-E[X]\pi(x)\\
&\leqslant \sum_{x}(E[X]\pi(x)-x\pi(x))+\sum_{x}x\pi(x)-E[X]\pi(x)\\
&=E[X]-E[X]+E[X]-E[X]\\
&=0.
\end{align*}
$$
Thus the variance would always be $0,$ unlike the mean squared error. We can express the variance as a difference of powers of moments:
$$
\begin{align*}
V[X]&=\sum_{x}\pi(x)(x^2+E[X]^2-2xE[X])\\
&=\sum_{x}x^2\pi(x)+E[X]^2\pi(x)-2xE[X]\pi(x)\\
&=E[X^2]+E[X]^2-2E[X]^2\\
&=E[X^2]-E[X]^2.
\end{align*}
$$
If the values of a random variable are in meaningful units (e.g. temperature), it is preferable to use the SD instead of the variance to obtain a number in those units. Taking the variance is not a linear operation, a fact of special consequence for sums and differences of random variables later on: 
$$
\begin{align*}
V[aX+b]&=E[(aX+b)^{2}]-E[aX+b]^{2}\\
&=E[a^2X^2+2abX+b^2]-(aE[X]+b)^{2}\\
&=a^2E[X^2]+2abE[X]+b^2-a^2E[X]^2-2abE[X]-b^{2}\\
&=a^2E[X^{2}]-a^{2}E[X]^{2}\\
&=a^2V[X].
\end{align*}
$$
```ad-info
title:Cumulative Distribution Function (CDF)

The **CDF** of $X$ is the value $$F_X(x)=P(X\leqslant x)=\displaystyle\sum_{k\leqslant x}\pi(k).$$ If it is clear, we omit the subscript $F(x)=F_X(x).$
```

The discrete CDF has special properties not guaranteed for other kinds of random variables (for a general random see [[Probability-Theory#CDFs|here]]) accessible [[Probability-Theorems|here]]. Among them, if $X$ takes on integer value and $k$ is one such value then $$\pi(k)=F(k)-F(k-1).$$
```ad-info
title:Median

The **median** of a discrete random variable is a point in the interval $[a, b],$ where $a$ and $b$ are the least values in the range of the variable s.t. $P(X\leqslant a),P(X\geqslant b)\geqslant 0.5,$ respectively.
```
# Joint PMFs
If $X$ and $Y$ are random variables [[Joint-Random-Variables|associated]] with the same experiment, by the **joint PMF** of $X$ and $Y$ we mean the function $$p_{X,Y}(x,y)=P(X=x\cap Y=y)=P(X=x,Y=y).$$
```ad-info
title:Alternative Notation
collapse:open

When it is clear that we are talking about the joint PMF of $X$ and $Y,$ we write $\pi(x, y)$ or $p(x, y)$ to denote $p_{X,Y}(x,y).$
```

If we sum some of the random variables, we get the (joint-)PMF of the remaining random variables:
$$
\begin{align*}
\pi(x)=\sum_y\pi(x,y),&&\pi(y)=\sum_x\pi(x,y).
\end{align*}
$$
**Joint PMFs are well-defined.** Since $\{X=x\}\cap\{Y=y\}\subseteq\Omega,$ if the probability law $P$ is defined on the sample space (i.e. $P(X=x)$ and $P(Y=y)$ are defined) then the following hold:
- If $A\subseteq\mathbb{R}^2,$ then $$P((X,Y)\in A)=\sum_{(x,y)\in A}\pi(x,y).$$
- They are normalised: $$\sum_x\sum_y\pi(x,y)=\sum_x\pi(x)=1.$$
- Additivity holds since each intersection of events is disjoint with all others: $$P(\bigcup_{(i, j)\in I\times J}[X=x_i\cap Y=y_j])=\sum_{i\in I}\sum_{j\in J}\pi(x_i,y_j).$$
Where $I,J\subseteq\mathbb{N}.$
- They are non-negative, for since $\{X=x\}\cap\{Y=y\}\subseteq\Omega$ we know $P(X=x,Y=y)$ is defined and non-negative if $P$ is a valid probability law.

```ad-info
title:Join-CDF
collapse:open

If $X$ and $Y$ are similarly associated DRVs, then the **joint CDF** of $X$ and $Y$ is defined as $$F_{X,Y}(x,y)=\sum_{s\leqslant x}\sum_{t\leqslant y}\pi(s, y).$$

We omit the subscript if what is meant is clear.
```

Functions of joint-PMFs work as with singular PMFs. Let $Z=g(X,Y)$ be a function of discrete random variables $X$ and $Y:$ $$\pi(z)=\sum_{\{(x,y):g(x, y)=z\}}\pi(x, y).$$
The expected value of this can similarly be derived to be $$E[g(X, Y)]=\sum_x\sum_yg(x,y)\pi(x,y).$$
If $g$ is the linear function $g(X,Y)=aX+bY+c$ where $a, b,$ and $c$ are constants, then $$E[aX+bY+c]=aE[X]+bE[Y]+c.$$
```ad-info
title:Generalising
collapse:open

Let $\{X_i\}_{i=1}^n$ be a finite family of discrete random variables associated with the same experiment, let $\mathbf{X}$ be a vector whose components are the $X_i,$ and let $\mathbf{x}$ be a vector of possible values each corresponding component of $\mathbf{X}$ can take. Then,

- For notational convenience, $\pi(\mathbf{x})=P\left(\displaystyle\bigcap_{i\in I}X_i\right).$
- If $A\subseteq\mathbb{R}^n$, $$P(\mathbf{X}\in A)=\sum_{\mathbf{x}\in A}\pi(\mathbf{x}).$$
- Marginal PMFs work as before: $$\pi(x_1,\ldots,x_{n-1})=\sum_{x_n}\pi(x_1,\ldots,x_{n-1},x_n).$$
- Normalisation holds: $$\sum_{x_1}\sum_{x_2}\cdots\sum_{x_n}\pi(\mathbf{x})=1.$$
- Additivity: Let $J_i$ be a finite set of natural numbers, let $\{x_{i, j}\}_{j\in J_i}$ be a family of possible values $X_i$ can take, and let $\text{Pr}=\prod_{i=1}^nJ_i$. Then, $$P\left(\bigcup_{\mathbf{a}\in\text{Pr}}\left[\bigcap_{i\in J}\{X_i=x_{i, \mathbf{a}_i}\}\right]\right)=\sum_{\mathbf{a}}\pi(x_{\mathbf{a}_1},\ldots,x_{\mathbf{a}_n}).$$
- If $\mathbf{x}$ is a vector, then $$F(\mathbf{x})=\sum_{k_1\leqslant x_1}\sum_{k_2\leqslant x_2}\cdots\sum_{k_n\leqslant x_n}\pi(\mathbf{k}).$$
- If $Y=g(\mathbf{X})$ is a function, then $$E[Y]=\sum_{\mathbf{x}}g(\mathbf{x})\pi(\mathbf{x}).$$
- If $g$ is linear, then $$E\left[\sum_{i=1}^nc_iX_i+c_n\right]=\sum_{i=1}^nc_iE[X_i]+c_n.$$
```

# Conditioning
Let $X$ be a discrete random variable. By the **conditional PMF** of $X$ we mean $$p_{X\mid A}(x)=P(\{X=x\}\mid A)=\frac{P(\{X=x\}\cap A)}{P(A)};$$
assuming $P(A)>0$. For notational convenience we write $P(X=x\mid A)$.

```ad-info
title:Alternative Notation
collapse:open

When it is clear that we are talking about the conditional PMF of $X$ given $A,$ we write $\pi(x\mid A)$ or $p(x\mid A)$ to denote $\pi(x\mid A).$
```

Since $\{X=x\}$ are all disjoint events, $$P(A)=\sum_{x}P(\{X=x\}\cap A).$$
Due to that, we can see $\pi(x\mid A)$ follows normalisation: $$\sum_{x}\pi(x\mid A)=\sum_{x}\frac{P(\{X=x\}\cap A)}{P(A)}=\frac{1}{P(A)}\sum_{x}P(\{X=x\}\cap A)=\frac{P(A)}{P(A)}=1.$$
Thus, we must re-scale each $\pi(x)$ so that they add up to 1 were the sample space confined only to $A.$ Once done, the conditional PMF is a valid PMF.

```ad-info
title:Conditional CDF
collapse:open

If $X$ is a CRV and $A$ is a possible event, the **conditional CDF** of $X$ given $A$ is defined as $$F_{X\mid A}(x)=\sum_{k\leqslant x}p_{X\mid A}(k).$$

If it is clear we simply write $F(x\mid A)$ or $F_X(x\mid A).$
```

If $\{A_i\}_{i=1}^n$ is a partition of the sample space s.t. $\forall i.\ P(A_i)>0$, then $$\pi(x)=\sum_{i=1}^n P(A_i)\pi(x\mid A_i)=\sum_{i=1}^n P(A_i)P(X=x\mid A_i).$$
Further, for any event $B$ s.t. $P(A_i\cap B)>0$ for each $i,$ then $$\pi(x\mid B)=\sum_{i=1}^n P(A_i\mid B)\pi(x\mid A_i\cap B)=\sum_{i=1}^n P(A_i\mid B)P(X=x\mid A_i\cap B).$$
The conditioned expected value, and therefore variance, is well-defined (here we use the same assumptions as above): 
$$
\begin{align*}
E[X\mid A]&=\sum_{x}x\pi(x\mid A)\\
E[g(X)\mid A]&=\sum_{x}g(x)\pi(x\mid A),
\end{align*}
$$
for any function $g(X).$
## Independence
Analogous to the general case, we say a discrete random variable $X$ is **independent of an event** $A$ if $$P(X=x\cap A)=P(X=x)P(A)=\pi(x)P(A),\quad\forall x.$$
Like before, if $P(A)>0$, the above is equivalent to $\pi(x\mid A)=\pi(x)$.
## Conditioning Joint PMFs
Suppose $X$ and $Y$ are discrete random variables associated with the same experiment s.t. $\pi(y)>0$ for each $y.$ We denote the probability that $X$ takes a certain value given that $Y$ has taken a certain value as $$p_{X\mid Y}(x\mid y)=P(X=x\mid Y=y)=\frac{\pi(x,y)}{\pi(y)}.$$

```ad-info
title:Alternative Notation
collapse:open

When it is clear that we are talking about the conditional PMF of $X$ given $Y,$ we write $\pi(x\mid y)$ or $p(x\mid y)$ to denote $p_{X\mid Y}(x\mid y).$
```

If we fix $y$ and consider $z=\pi(x\mid y)$ as a function of $x,$ then we get normalisation $$\sum_{x}\pi(x\mid y)=\sum_z\sum_{\{x:\pi(x\mid y)=z\}}\pi(x)=1.$$
This 'function' is a scaled version of $\pi(x,y),$ scaled by $1/\pi(y).$ By simple algebra we can calculate the joint PMF from the conditional PMF $$\pi(x,y)=\pi(y)\pi(x\mid y)=\pi(x)\pi(y\mid x).$$
Applying that to marginal PMFs we get that
$$
\begin{align*}
\pi(x)&=\sum_y\pi(y)\pi(x\mid y)\\
\pi(y)&=\sum_x\pi(x)\pi(x\mid y).
\end{align*}
$$
As an application of the conditional expected value of a random variable, assuming $\displaystyle\sum_y\sum_xx\pi(x,y)$ converges absolutely: $$E[X\mid Y=y]=\sum_xx\pi(x\mid y).$$

```ad-info
title:Total Expectation Theorem (TET)

$$
\begin{align*}
E[X]&=\sum_{i=1}^{n} P(A_i)E[X\mid A_i]\\
E[X\mid B]&=\sum_{i=1}^n P(A_i\mid B)E[X\mid A_i\cap B]\\
E[X]&=\sum_y\pi(y)E[X\mid Y=y].
\end{align*}
$$
```

```ad-info
title:Conditional CDF
collapse:open

If $X$ and $Y$ are similarly associated DRVs, the **conditional CDF** of $X$ given $Y=y$ is defined as $$F_{X\mid Y}(x\mid y)=\sum_{k\leqslant x}p_{X\mid Y}(x\mid y).$$

When context allows we just write $F(x\mid y).$
```
Everything can be generalised for more than 2 random variables.
### Independent Discrete Random Variables
#### Two Random Variables
Similarly to independence of a random variable from an event, we say that 2 similarly-associated discrete random variables $X$ and $Y$ are **independent** iff $$\pi(x,y)=\pi(x)\pi(y),\quad\forall x, y.$$
Which is equivalent to $$\pi(x\mid y)=\pi(x),\quad\forall x, y.\ \pi(y)>0.$$
If $A$ is an event, then they are **conditionally independent** on $A$ iff $$\pi(x,y\mid A)=\pi(x\mid A)\pi(y\mid A),\quad\forall x, y.$$
This condition is equivalent to the general definition of conditional independence given for [[Random-Variables#Conditioning and Independence|any]] pair of random variables ([[Probability-Theorems#Discrete Random Variables|derivation]]), i.e. $$F(x,y\mid A)=F(x\mid A)F(y\mid A)\quad\forall x,y.$$ 
If $X$ and $Y$ are independent, then ([[Probability-Theorems#Joint Random Variables|derivations]]):
- Expectation is linear w.r.t random variables: $$E[XY]=E[X]E[Y].$$
- If $g(X)$ and $h(Y)$ are functions of their respective random variables, then they are independent so $$E[g(X)h(Y)]=E[g(X)]E[h(Y)].$$
- Variance is additive: $$V[X+Y]=V[X]+V[Y].$$
#### More Than Two
Unlike with events, 3 or more random variables $X, Y,$ and $Z,$ independence is defined as $$\pi(x,y,z)=\pi(x)\pi(y)p_Z(z),\quad\forall x,y,z.$$
We proceed in this manner since mutual independence is given by the marginal PMFs; if the above equality holds, then we may sum over all $z,$ say, to get that, by normalisation, $$\pi(x,y)=\pi(x)\pi(y),\quad\forall x,y.$$
If $\{X_i\}_{i=1}^n$ is a family of independent, similarly-associated random variables then functions of them, of any arity less than $n,$ are also independent, e.g. $\{f_i(X_i)\}_{i=1}^n$ is a family of independent random variables but so is $\{f_{1, 2}(X_1,X_2)\}\cup\{f_i(X_i)\}_{i=3}^n,$ which includes a function of 2 arguments, and so on. If a family of functions of random variables has 2 or more members share 1 or more random variables, then independence is not guaranteed, e.g. $f(Y,Z)$ and $g(X,Y)$ are not always independent. Everything above works when generalised to several random variables.