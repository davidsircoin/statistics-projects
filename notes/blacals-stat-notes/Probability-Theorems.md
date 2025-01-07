Tags: [[Stats]], [[Probability-Theory]]

For proofs see [[Probability-Theorems-by-Topic.pdf]].
# Definitions

> [!def] Entropy
> If $X$ is a discrete random variable with a finite range, the **entropy** of $X$ is the function $$H(X)=-\sum_x\pi(x)\log_{2}(\pi(x)).$$
> If $Y$ is also a DRV with a finite range, the **mutual information** of $X$ and $Y$ is defined as $$I(X, Y)=\sum_x\sum_y\pi(x, y)\log_2\left(\dfrac{\pi(x, y)}{\pi(x)\pi(y)}\right).$$
> Furthermore,
> $$
> \begin{align*}
> H(X, Y)&=-\sum_x\sum_y\pi(x, y)\log_2(\pi(x, y))\\
> H(X\mid Y)&=-\sum_y\sum_x\pi(x, y)\log_2(\pi(x\mid y)).
> \end{align*}
> $$

> [!def] Doubly Stochastic
> Let $P$ be the matrix
> $$
> P=\begin{bmatrix}
> p_{00} & p_{01} & p_{02} & \cdots & p_{0m}\\
> p_{10} & p_{11} & p_{12} & \cdots & p_{1m}\\
> \vdots & \vdots & \vdots & \vdots & \vdots\\
> p_{m0} & p_{m1} & p_{m2} & \cdots & p_{mm}
> \end{bmatrix}.
> $$
> We say $P$ is **doubly stochastic** only if, for any $i,$ $$\sum_{j=1}^{m} p_{i,j}=\sum_{j=1}^{m} p_{j,i}=1.$$

# General Theorems

> [!thm]
> If $A,B,$ and $C$ are events, then
> 
> 1. If $A\subseteq B$, then $P(A)\leqslant P(B).$
> 2. (*Includion-Exclusion*). $P(A\cup B)=P(A)+P(B)-P(A\cap B).$
> 3. $P((A-B)\cup(B-A))=P(A)+P(B)-2P(A\cap B).$
> 4. $P(A\cap B)\geqslant P(A)+P(B)-1.$
> 5. If $P(B)>0,$ then $P(A\cap B\mid B)=P(A\mid B),$ $P(A\cup C\mid B)=P(A\mid B)+P(C\mid B),$ and $P(A'\mid B)=1 - P(A\mid B).$
> 6. $B$ suggests $A$ iff $A$ suggests $B,$ where $P(A), P(B)>0.$ That is, $$P(A\mid B)>P(A)\iff P(B\mid A)>P(B).$$
> 7. If $P(B')>0,$ then $B$ suggests $A$ iff $B'$ does not suggest $A,$ i.e. $$P(A\mid B)>P(A)\iff P(A\mid B')<P(A).$$
> 8. $A$ and $B$ are independent iff $A$ and $B'$ are independent iff $A'$ and $B'$ are independent.
> 9. If $A,B,$ and $C$ are independent and $P(C)>0,$ then $A$ and $B$ are conditionally independent on $C.$

> [!thm]
> Let $\{A_i\}_{i\in I}$ be an at most countable family of events. Then,
> 
> 1. $P\left(\displaystyle\bigcup_{i\in I} A_i\right)\leqslant \displaystyle\sum_{i\in I} P(A_i).$
> 2. If the family is finite and $|I|=n,$ $$P\left(\displaystyle\bigcap_{i=1}^nA_i\right)=P(A_1)\cdot\displaystyle\prod_{i=2}^nP\left(A_i\mid \displaystyle\bigcap_{k=1}^{i-1}A_k\right).$$
> 3. If $|I|=n,$ $P\left( \displaystyle\bigcap_{i=1}^{n} A_i \right)\geqslant \displaystyle\sum_{i=1}^{n} P(A_i)-(n-1).$
> 4. If the $A_i$ are disjoint and $B$ is an event with positive probability, $$P\left( \displaystyle\bigcup_{i\in I}A_i\mid B \right)=\displaystyle\sum_{i\in I}P(A_i\mid B).$$
> 5. If $P(A_i)=1$ for each $i,$ $$P\left( \bigcap_{i\in I}A_i \right)=1.$$

> [!thm] *Total Probability Theorem [TPT]*
> Let $\{A_i\}_{i\in I}$ be an at most countable partition of $\Omega$ s.t. $P(A_i)>0,$ for each $i\in I.$ For any event $B$
> $$
> \begin{align*}
> P(B)&=\sum_{i\in I} P(A_i\cap B)\\
> &=\sum_{i\in I} P(A_i)P(B\mid A_i).
> \end{align*}
> $$

> [!thm] *Bayes's Rule*
> If $A$ and $B$ are events with non-zero probabilities, then $$P(A\mid B)=\frac{P(B\mid A)P(A)}{P(B)}.$$
> If additionally $\{A_i\}_{i=1}^n$ is a sequence of events with non-zero probabilities, then $$P(A_i\mid B)=\frac{P(B\mid A_i)P(A_i)}{P(B)}=\frac{P(B\mid A_i)P(A_i)}{P(A_1)P(B\mid A_1)+\cdots+P(A_n)P(B\mid A_n)}.$$

> [!thm] *Conditional TPT*
> Let $\{C_i\}_{i\in I}$ be an at most countable partition of $\Omega$ s.t. $P(C_i)>0,$ for all $i\in I.$ Let also $A$ and $B$ be events s.t. $P(B\cap C_i)>0,$ for any $i\in I.$ Then,
> $$
> \begin{align*}
> P(A\mid B)&=\sum_{i\in I}P(A\cap C_i\mid B)\\
> &=\sum_{i\in I}P(C_i\mid B)P(A\mid B\cap C_i).
> \end{align*}
> $$

> [!thm] *General Inclusion-Exclusion Principle*
> Let $\{A_i\}_{i=1}^{n}$ be a family of events and $S_m$ a set of vectors in $\mathbb{R}^m$ with positive integer components so that $\mathbf{i}\in S_m$ implies $$1\leqslant i_1<i_2<\cdots<i_m\leqslant n.$$ Then, $$P\left( \bigcup_{i=1}^{n} A_i \right) =\sum_{i=1}^{n} (-1)^{i-1}\sum_{\mathbf{a}\in S_i}P\left( \bigcap_{j\in \mathbf{a}}A_j \right).$$

> [!thm]
> Let $\{A_i\}_{i=1}^{\infty}$ be a sequence of events ordered by inclusion.
> 
> 1. If the sequence is monotonically increasing and $A=\displaystyle\bigcup_{n=1}^{\infty}A_n,$ then $P(A)=\displaystyle\lim_{n \to \infty}P(A_n)$
> 2. If the sequence is monotonically decreasing and $A=\displaystyle\bigcap_{n=1}^{\infty}A_n,$ then, $P(A)=\displaystyle\lim_{n \to \infty}P(A_n).$

> [!thm]
> Let $\Omega=\mathbb{R}.$ Then, $$P([0, \infty))=\lim_{n \to \infty}P([0, n]),\quad\text{and}\quad \lim_{n \to \infty}P([n,\infty])=0.$$

> [!thm]
> Suppose $\{p_i\}_{i=1}^{\infty}$ is a sequence of non-zero probabilities of succeeding in the $i$-th trial.
> 1. If $\displaystyle\sum_{i=1}^{\infty}p_i=\infty$ and the trials are independent, then the probability of failing every trial is $0$ and the probability of succeeding infinitely many times is $1.$
> 2. If $\displaystyle\sum_{i=1}^{\infty}p_i$ converges, then the probability of succeeding infinitely many times is $0.$

# Random Variables

> [!thm]
> The expected value of discrete random variables is linear.

> [!thm]
> 1. $V[X]=E[X^2]-E[X]^2.$
> 2. $V[aX+b]=a^2V[X],$ for any $a,b.$

> [!thm]
> If $\{A_i\}_{i=1}^n$ is a partition of the sample space into events of strictly positive probability, then $$E[X]=\displaystyle\sum_{i=1}^nP(A_i)E[X\mid A_i].$$

> [!thm] *CDF Uniquely Determines Distribution Over Measurable Sets*
> If $F_X=F_Y,$ then $P(X\in A)=P(Y\in A)$ for every measurable set $A.$

> [!thm]
> 1. The CDF is an increasing function.
> 2. The CDF $F(x)$ approaches $0$ as $x$ approaches $-\infty,$ and approaches $1$ as $x$ approaches $\infty.$

> [!thm]
> For any $x,y,$ $P(x<X\leqslant y)=F(y)-F(x).$

> [!thm]
> Let $\{A_i\}_{i\in I}$ be an at most countable partition of the sample space.
> 
> 1. $\pi(x)=\displaystyle\sum_{i\in I}P(A_i)\pi(x\mid A_i).$
> 2. $F(x)=\displaystyle\sum_{i\in I}P(A_i)F(x\mid A_i).$

> [!thm]
> The expected value of $X$ satisfies the following equation: $$E[X]=\int_{0}^{\infty} P(X>x) dx-\int_{0}^{\infty} P(X<-x) dx.$$

> [!thm]
> $$\cov (X, X)=V[X].$$

> [!thm] *Transforms Uniquely Determine Distributions*
> The MGF $M_X(s),$ if it is finite for all $s\in[-a, a]$ where $a\geq0,$ uniquely determines the CDF, and therefore the distribution, of $X.$

> [!thm] *MGF of a Linear Function*
> Let $Y=aX + b$ for scalars $a$ and $b.$ Then, $$M_Y(s)=e^{sb}M_X(sa).$$

## Discrete Random Variables

> [!thm]
> Let $X$ be a discrete random variable and let $Y=g(X)$ be a function of $X.$ Then, 
> 1. $\pi(y)=\displaystyle\sum_{\{x: g(x)=y\}}\pi(x).$
> 2. $F(y)=\displaystyle\sum_{\{x : g(x)\leqslant y\}}\pi(x).$
> 3. $\displaystyle\sum_y\pi(y)=1.$
> 4. $\pi(y)\geqslant 0,$ for each $y.$
> 5. If $A$ is a set of possible value for $y,$ then $$P(Y\in A)=\sum_{y\in A}\pi(y).$$
> 6. $E[g(X)]=\displaystyle\sum_xg(x)\pi(x).$

> [!thm]
> Let $X$ be a DRV.
> 
> 1. If $X$ only takes integer values, then for any integer $k,$ $$\pi(k)=F(k)-F(k-1).$$
> 2. $F(x)$ is a piece-wise constant function of $x.$

> [!thm]
> 1. $E[X\mid A]=\displaystyle\sum_{x}x\pi(x\mid A).$
> 2. $E[g(X)\mid A]=\displaystyle\sum_{x}g(x)\pi(x\mid A),$ for a function $g(X).$

> [!thm]
> If $X$ is a discrete random variable with a finite range containing the values $\{x_i\}_{i=1}^{n}$ and $\{q_i\}_{i=1}^{n}$ is a family of non-negative real numbers whose sum is 1, then $$H(X)\leqslant -\sum_{i=1}^{n} \pi(x_i)\log_2q_i,$$
> with equality iff $q_i=\pi(x_i)$ for ll $i,$ and $$H(X)\leqslant \log_2n,$$
> with equality in this case only if $\pi(x_i)=\dfrac{1}{n},$ for all $i.$

> [!thm] *Moments to Discrete Distributions*
> If $M_X(s)=\displaystyle\sum_{i}d_i\exp(sc_i),$ where $\{d_i\}_{i\in I}$ and $\{c_i\}_{i\in I}$ are families of constants, then $$p_X(c_i)=\begin{cases}d_i, & i\in I,\\0, & \text{otherewise}.\end{cases}$$

> [!thm]
> If $X$ is natural-valued, then $\pi(0)=\displaystyle\lim_{s \to -\infty}M(s).$ More generally, if $X$ is integer-valued for integers greater than or equal to $k\in\mathbb{Z},$ then $\pi(k)=\displaystyle\lim_{s \to -\infty}e^{-sk}M(s).$

> [!thm]
> Let $A(t)$ and $B(t)$ be polynomials with no common roots where $A(t)$ has a degree strictly smaller than that of $B(t)$ and $B(t)$ has distinct, real, non-zero roots $\{1/r_m\}_{i=1}^{m}$ s.t. $|r_m|\leqslant1.$ Suppose $$M_X(s)=\dfrac{A(e^s)}{B(e^s)}=\sum_{i=1}^{m} \dfrac{a_i}{1-r_ie^s},$$
> where $a_i=\displaystyle\lim_{e^s\to 1/r_i}(1-r_ie^s)M(s).$
> 1. $\pi(k)=\displaystyle\sum_{i=1}^{m}a_ir_i^k,$ for natural $k,$ 0 otherwise.
> 2. If $M(s)=e^{sb}\dfrac{A(e^s)}{B(e^s)}$ with the above sum equality unchanged, then $\pi(k)=\displaystyle\sum_{i=1}^{m}a_ir_i^{k-b},$ for natural $k\geqslant b,$ and 0 otherwise.

## Continuous Random Variables
Let $X$ be a continuous random variable.

> [!thm]
> Let $Y=g(X)$ be a function of $X.$ 
> 1. $F(y)=\displaystyle\int_{\{z : g(z)\leqslant y\}}\pi(x)dx.$
> 2. $\displaystyle\int_{\mathbb{R}}\pi(y)dy=1.$
> 3. $\pi(y)\geqslant 0,$ for each $y.$
> 4. If $A$ is a set of possible value for $y,$ then $$P(Y\in A)=\int_{A}\pi(y)dy.$$
> 5. $E[g(X)]=\displaystyle\int_{\mathbb{R}}g(x)\pi(x)dx.$
> 6. If $g$ is injective, then $\pi(y)=\dfrac{d}{dx}F(g^{-1}(y)).$
> 7. If $g$ is strictly increasing, $F_Y(y)=F_X(g^{-1}(y))$ and $$\pi(y)=\dfrac{\pi_X(g^{-1}(y))}{g'(g^{-1}(y))}.$$
> 8. If $g$ is strictly decreasing, then $F_Y(y)=1-F_X(g^{-1}(y))$ and $$\pi(y)=-\dfrac{\pi_X(g^{-1}(y))}{g'(g^{-1}(y))}.$$
> 9. If $Y=X^n$ and $n$ is even, then $$\pi_Y(y)=\frac{1}{n\sqrt[n]{y^{n-1}}}(\pi_X(\sqrt[n]y)+\pi_X(-\sqrt[n]y)).$$
> If $n$ is odd, then $$\pi_Y(y)=\frac{1}{n\sqrt[n]{y^{n-1}}}\pi_X(\sqrt[n]y).$$
> 10. If $Y=aX+b$ for scalar $a\ne0$ and $b,$ then $$\pi_Y(y)=\frac1{| a| }\pi_X\left( \frac{y-b}a \right).$$
> 11. Suppose that $\pi(x)=0,\ \forall x\notin I,$ for some interval $I.$ Let $Y=g(X)$ be strictly monotonic and differentiable over $I.$ If $g^{-1}$ is differentiable, then the PDF of $Y,$ where it is strictly positive, is given by $$\pi_Y(a)=\pi_X(g^{-1}(y))\left| \frac{d}{dy}g^{-1}(y)\right|.$$
> 12. If $Y=e^X,$ then $\pi_Y(y)=\dfrac1{|y|}\pi_X(\ln y).$

> [!thm]
> If $F_X(x)=F_Y(g(x)),$ for any $x$ for which the functions are defined and where $g$ is differentiable, then $$\pi_X(x)=\pi_Y(g(x))g'(x).$$

> [!thm] *Continuity of the CDF*
> $F_X(x)$ is a continuous function of $x.$

> [!thm]
> If $\pi(x)$ is continuous at $a,$ then $$\pi(a)=\dfrac{dF}{dx}(a).$$

> [!thm]+ 
> Let $g(X)$ a function of $X$ and $A$ an event of strictly positive probability.
> 
> 1. $E[X\mid A]=\displaystyle\int_{\mathbb{R}}x\pi(x\mid A)dx.$
> 2. $E[g(X)\mid A]=\displaystyle\int_{\mathbb{R}}g(x)\pi(x\mid A)dx.$

> [!thm] *$n$-th Derivative of a Transform is the $n$-th Moment*
> $$\left.\frac{d^n}{ds^n}M(x)\right\rvert_{s=0}=\int_{\mathbb{R}}x^nf_X(x)dx=E[X^n].$$
  
## Joint Random Variables
Throughout we assume $X$ and $Y$ are joint random variables, that $\{X_i\}_{i=1}^{n}$ is a family of random variables, $\mathbf{X}$ is the vector containing the family, $\mathbf{Y}$ is a vector with the first $0<m\leqslant n$ many $X_i$ from the family, and $\mathbf{Z}$ is a vector containing the rest.

> [!thm]
> Let $A$ be a set of pairs of values of $X$ and $Y.$
> 
> 1. If $X$ and $Y$ are discrete, then
> $$
> \begin{align*}
> P((X, Y)\in A)&=\sum_{(x, y)\in A}\pi(x, y)\\
> P(X\in A\mid Y=y)&=\sum_{x\in A}\pi(x\mid y).
> \end{align*}
> $$
> If the $X_i$ are discrete and $A$ is a set of ordered pairs of values of them, then $$P(\mathbf{X}\in A)=\sum_{\mathbf{x}\in A}\pi(\mathbf{x}).$$
> 2. If they are both continuous, then
> $$
> \begin{align*}
> P(X, Y)\in A&=\iint_{A}\pi(x, y)dxdy\\
> P(X\in A\mid Y=y) &= \int_A\pi(x\mid y)dx.
> \end{align*}
> $$
> If their joint PDF is continuous at $(a, b),$ then $$\pi(a, b)=\dfrac{ \partial^{2} F }{ \partial x\partial y }(a, b).$$
> If the $X_i$ are continuous and $A$ is changed accordingly, then $$P(\mathbf{x}\in A)=\int\cdots\int_{A}\pi(\mathbf{x})d\mathbf{x}.$$
> If $\pi(\mathbf{x})$ is continuous at $\mathbf{a},$ then $$\pi(\mathbf{a})=\dfrac{ \partial^{n} F }{ \partial x_1\partial x_2\cdots\partial x_n }(\mathbf{a}) .$$

> [!thm] *Marginal Distributions*.
> 1. If $X$ and $Y$ are discrete, then $$\pi(x)=\sum_y\pi(x,y)=\sum_{y}\pi(y)\pi(x\mid y),\quad\pi(y)=\sum_x\pi(x,y)=\sum_{x}\pi(x)\pi(y\mid x).$$
> More generally, if the $X_i$ are all discrete, then $$\pi(\mathbf{y})=\sum_{\mathbf{z}}\pi(\mathbf{y}, \mathbf{z})=\sum_{\mathbf{z}}\pi(\mathbf{z})\pi(\mathbf{y}\mid \mathbf{z}),$$
> 2. If they are both continuous, then
> $$\pi(x)=\int_{\mathbb{R}}=\int_{\mathbb{R}} \pi(y)\pi(x\mid y) dy  \pi(x,y)dy,\quad\pi(y)=\int_{\mathbb{R}} \pi(x, y) dx=\int_{\mathbb{R}} \pi(x)\pi(y\mid x) dx.$$
> If the $X_i$ are all continuous, then $$\pi(\mathbf{y})=\int_{\mathbb{R}^{n-m}}\pi(\mathbf{y}, \mathbf{z})d\mathbf{z},$$

> [!thm]
> Let $Z=g(X, Y)$ be a function of $X$ and $Y$ and let $W=h(\mathbf{Y})$ be a function of $\mathbf{Y}.$ If all variables are discrete, then
> 
> 1. $\pi(z)=\displaystyle\sum_{\{(x, y): g(x, y)=z\}}\pi(x, y),$ and $\pi(w)=\displaystyle\sum_{\{\mathbf{y}:h(\mathbf{y})=w\}}\pi(\mathbf{y}).$
> 2. $\displaystyle\sum_z\pi(z)=1,$ and $\displaystyle\sum_{w}\pi(w)=1.$
> 3. $\pi(z),\pi(w)\geqslant0,$ for every $z$ and $w.$
> 4. If $A$ and $B$ are sets of possible values of $Z$ and $W$ respectively, then $$P(Z\in A)=\sum_{z\in A}\pi(z),\quad\text{and}\quad P(W\in B)=\sum_{w\in A}\pi(w).$$
> 5. $E[Z]=\displaystyle\sum_{x}\sum_yg(x, y)\pi(x, y),$ and $E[W]=\displaystyle\sum_{\mathbf{y}}h(\mathbf{y})\pi(\mathbf{y}).$ Problem 2.36.

> [!thm] *Linearity of Expectation*
> The expected value of a linear combination of $X$ and $Y$ is the linear combination of the corresponding expected values: $$E[aX+bY+c]=aE[X]+bE[Y]+c.$$
> More generally, if $\{a_i\}_{i=1}^{n+1}$ is a family of scalars, then $$E\left[ \sum_{i=1}^{n} a_iX_i +a_{n+1}\right]=\sum_{i=1}^{n} a_iE[X_i]+a_{n+1}.$$

> [!thm]
> Let $X$ be a mixed random variable distributed according to the distribution of $Y$ with probability $p$ and according to the distribution of $Z$ with probability $1-p.$ Then,
> $$
> \begin{align*}
> F_X(x)&=pF_Y(x)+(1-p)F_Z(x)\\
> E[X]&=pE[Y]+(1-p)E[Z].
> \end{align*}
> $$

> [!thm]
> If $A$ is an event with non-zero probability, then the following conditions for conditional independence on $A$ are equivalent:
> $$
> \begin{align}
> \pi(x,y\mid A)&=\pi(x\mid A)\pi(y\mid A) & \forall x,y.\tag{1}\\
> F(x,y\mid A)&=F(x\mid A)F(y\mid A) & \forall x,y.\tag2
> \end{align}
> $$

```ad-note
title:Derivation
collapse:close

The right implication is trivial by reasoning about unions of sets of ordered pairs. Then, suppose $F_{X,Y\mid A}(x,y)=F_{X\mid A}(x)F_{Y\mid A}(y),$ for each $x$ and $y.$ First we show how to calculate $P(X\leqslant x, Y=y\mid A)$ using only conditional marginal PMFs and CDFs:
$$
\begin{align*}
	P(X\leqslant x,\ Y=y\mid A)&=\sum_{t=-\infty}^{x}P(X=t,Y=y\mid A)\\
	&=\sum_{t=-\infty}^{x}P(X=t,Y=y\mid A)+\sum_{t=-\infty}^{x}\sum_{u=-\infty}^{y-1}P(X=t,Y=u\mid A)-\sum_{t=-\infty}^{x}\sum_{u=-\infty}^{y-1}P(X=t,Y=u\mid A)\\
	&=\sum_{t=-\infty}^{x}\left(P(X=t,Y=y\mid A)+\sum_{u=-\infty}^{y-1}P(X=t,Y=u\mid A)\right)-\sum_{t=-\infty}^{x}\sum_{u=-\infty}^{y-1}P(X=t,Y=u\mid A)\\
	&=\sum_{t=-\infty}^{x}\sum_{u=-\infty}^{y}P(X=t,Y=u\mid A)-\sum_{t=-\infty}^{x}\sum_{u=-\infty}^{y-1}P(X=t,Y=u\mid A)\\
	&=F_{X,Y\mid A}(x,y)-F_{X,Y\mid A}(x,y-1)\\
	&=F_{X,Y\mid A}(x,y)-F_{X,Y\mid A}(x, y-1)\\
	&=F_{X\mid A}(x)(F_{Y\mid A}(y)-F_{Y\mid A}(y-1))\\
	&=F_{X\mid A}(x)p_{Y\mid A}(y).
\end{align*}
$$
Now consider an infinite $2$-D grid of cells, extending in all directions, where by `the rectangle bounded by $(a,b)$' we mean the portion of the grid covered by $(-\infty, a]\times (-\infty, b].$ A cell $(a, b)$ corresponds to the probability $p_{X, Y\mid A}(a, b),$ and a region corresponds to summing all joint probabilities inside the region. Note that we calculate $p_{X,Y\mid A}(x,y)$ by removing sections from the rectangle bounded by $(x,y).$ Specifically, removing row $y,$ extending left toward $-\infty$ and right up to $x-1,$ and also removing the rectangle bounded by $(x,y-1).$ This corresponds to the following:
$$
\begin{align*}
	p_{X,Y\mid A}(x,y)&=F_{X,Y\mid A}(x,y)-F_{X,Y\mid A}(x,y-1)-P(X\le x-1,Y=y\mid A)\\
	&=F_{X\mid A}(x)F_{Y\mid A}(y)-F_{X\mid A}(x)F_{Y\mid A}(y-1)-P(X\leqslant x-1,Y=y\mid A)\\
	&=F_{X\mid A}(x)F_{Y\mid A}(y)-F_{X\mid A}(x)F_{Y\mid A}(y-1)-F_{X\mid A}(x-1)p_{Y\mid A}(y)\\
	&=(F_{X\mid A}(x-1)+p_{X\mid A}(x))(F_{Y\mid A}(y-1)+p_{Y\mid A}(y))-F_{X\mid A}(x)F_{Y\mid A}(y-1)-F_{X\mid A}(x-1)p_{Y\mid A}(y)\\
	&=F_{Y\mid A}(y-1)F_{X\mid A}(x-1)+F_{Y\mid A}(y-1)p_{X\mid A}(x)+p_{Y\mid A}(y)F_{X\mid A}(x-1)+p_{Y\mid A}(y)p_{X\mid A}(x)-F_{X\mid A}(x)F_{Y\mid A}(y-1)-F_{X\mid A}(x-1)p_{Y\mid A}(y)\\
	&=p_{Y\mid A}(y)p_{X\mid A}(x).
\end{align*}
$$
The fourth, fifth, and sixth equalities follow partially from noting that $F_{X\mid A}(x)=F_{X\mid A}(x-1)+p_{X\mid A}(x).$ Thus, $X$ and $Y$ are conditionally independent on $A.$
```

> [!thm]
> If $X$ and $Y$ are continuous, they are independent iff, for any measurable $A,B\subseteq\mathbb{R},$ the events $\{X\in A\}$ and $\{Y\in B\}$ are independent.

> [!thm]
> If the range of $(X,Y)$ is a possibly infinite $2$-cell in the plane and $\pi(x,y)=g(x)h(y)$ for some functions $g,h$ and any $x,y$ in that range, then $X$ and $Y$ are independent.

> [!thm] *Total Expectation Theorem (TET)*
> Let $A$ and $B$ be events with non-zero probabilities, $\{A_i\}_{i\in I}$ an at most countable partition of the sample space s.t. $P(A_i),P(A_i\cap B)>0,$ for every $i\in I,$ and let $g(X)$ and $h(X, Y)$ be functions.
> 
> 1. $E[X]=\displaystyle\sum_{i=1}^{n} P(A_i)E[X\mid A_i].$
> 2. $E[X\mid B]=\displaystyle\sum_{i=1}^n P(A_i\mid B)E[X\mid A_i\cap B].$
> 
> Suppose $X$ discrete.
> 
> 1. If $\displaystyle\sum_y\sum_xx\pi(x,y)$ converges absolutely when $Y$ is discrete, then $E[X\mid Y=y]=\displaystyle\sum_xx\pi(x\mid y).$
> 2. $E[g(X)\mid Y=y]=\displaystyle\sum_{x}g(x)\pi(x\mid y).$
> 3. $E[Y]=\displaystyle\sum_x\pi(x)E[Y\mid X=x].$
> 4. $E[h(X,Y)\mid Y=y]=\displaystyle\sum_{x}h(x,y)\pi(x\mid y).$
> 5. $E[h(X,Y)]=\displaystyle\sum_{x}E[h(X,Y)\mid X=x]\pi(x).$
> 
> Suppose $X$ is continuous.
> 
> 1. $E[X\mid Y=y]=\displaystyle\int_{\mathbb{R}}x\pi(x\mid y)dx.$
> 2. $E[g(X)\mid Y=y]=\displaystyle\int_{\mathbb{R}}g(x)\pi(x\mid y)dx.$
> 3. $E[h(X,Y)\mid Y=y]=\displaystyle\int_{\mathbb{R}}h(x,y)\pi(x\mid y)dx.$
> 4. $E[Y]=\displaystyle\int_{\mathbb{R}}E[Y\mid X=x]\pi(x)dx.$
> 5. $E[h(X,Y)]=\displaystyle\int_{\mathbb{R}}E[h(X,Y)\mid X=x]\pi(x)dx.$

```ad-note
title:Derivation
collapse:close

1. First note that $f_X(x)=\sum_{i=1}^nP(A_i)f_{X|A_i}(x).$ Multiply both sides by $x$ and integrate over the whole real line to get our result.
2.
$$
\begin{align*}
\int_{\mathbb{R}}E[X|Y=y]f_Y(y)dy&=\int_{\mathbb{R}}\int_{\mathbb{R}}xf_{X|Y}(x|y)dxf_Y(y)dy\\
&=\int\int_{\mathbb{R}^2}xf_{X|Y}(x|y)f_Y(y)dxdy\\
&=\int\int_{\mathbb{R}^2}xf_{X,Y}(x,y)dxdy\\
&=\int_{\mathbb{R}}x\int_{\mathbb{R}}f_{X,Y}(x,y)dydx\\
&=\int_{\mathbb{R}}xf_X(x)dx\\
&=E[X].
\end{align*}
$$
```

> [!thm]
> 1. If $X$ and $Y$ are independent and $g$ and $h$ are functions, then
> $$
> \begin{align*}
> E[XY]&=E[X]E[Y]\\
> E[g(X)h(Y)]&=E[g(X)]E[h(Y)]\\
> V[X+Y]&=V[X]+V[Y]\\
> V[XY]&=E[X]^2V[Y]+E[Y]^2V[X]+V[X]V[Y].
> \end{align*}
> $$
> 2. If the $X_i$ are independent and $\{f_i\}_{i=1}^{n}$ is a family of functions, then
> $$
> \begin{align*}
> E\left[ \prod_{i=1}^{n}X_i \right]&=\prod_{i=1}^{n}E[X_i]\\
> E\left[ \prod_{i=1}^{n}f_i(X_i) \right]&=\prod_{i=1}^{n}E[f_i(X_i)]\\
> V\left[ \sum_{i=1}^{n} X_i \right]&=\sum_{i=1}^{n} V[X_i].
> \end{align*}
> $$
> 3. Let $\{g_{i,j}: 1\leqslant i\leqslant n\text{ and }0<j<n\}$ be a set of functions where $g_{i, m}$ is of arity $m.$ If $\{n_{k}\}_{k=0}^{m}$ is a strictly increasing sequence of natural numbers s.t. $n_0=0$ and $n_m=n,$ then $\{g_{k,n_k}(X_{n_{k-1}+1},\ldots,X_{n_k})\}_{k=1}^{m}$ is a family of independent random variables.

> [!thm] *Schwarz Inequality*
> $$E[XY]^2\leqslant E[X^2]E[Y^2].$$

> [!thm]
> If $X$ and $Y$ are DRVs with finite ranges, then
> 
> 1. $I(X, Y)\geqslant0.$
> 2. $I(X, Y)=0$ iff $X$ and $Y$ are independent.
> 3. $I(X, Y)=H(X)+H(Y)-H(X, Y)=H(X)-H(X\mid Y).$

> [!thm] *Discrete and Continuous Bayes's Rule*
> Let $X$ and $\Theta$ be random variables.
> 
> 1. $\Theta$ discrete: $$\pi(\theta\mid x)=\frac{\pi(\theta)\pi(x\mid \theta)}{\displaystyle\sum_{\theta'}\pi(\theta')\pi(x\mid \theta')}.$$
> 2. $\Theta$ continuous: $$\pi(\theta\mid x)=\frac{\pi(\theta)\pi(x\mid \theta)}{\displaystyle\int_{\mathbb{R}} \pi(\theta')\pi(x\mid \theta')d\theta'}.$$

> [!thm]
> Let $\{Y_i\}_{i=1}^{n}$ be IID random variables and let $S=\{y: \pi(y)>0\}.$ Let $X$ be a random variable s.t. $\pi(x)=0$ for every $x\notin S$ and let $$Z=\dfrac{1}{n}\sum_{i=1}^{n} Y_i\dfrac{\pi_X(Y_i)}{\pi_Y(Y_i)}.$$
> Then, $E[Z]=E[X].$

> [!thm]
> If $X=(X_1,\ldots, X_n)$ is a vector of IID random variables, then
> 1. $P(\min(X)\leqslant m)=1-(1-F(m))^n.$
> 2. $P(\max(X)\leqslant m)=F(m)^n.$

> [!thm]
> Let $\{X_i\}_{i=1}^{n}$ be independent random variables.
> 
> 1. $V\left[ \displaystyle\prod_{i=1}^{n}X_i \right]=\displaystyle\prod_{i=1}^{n}(V[X_i]+E[X_i]^{2})-\displaystyle\prod_{i=1}^{n}E[X_i]^{2}.$
> 2. $\dfrac{V\left[ \prod_{i=1}^{n}X_i \right]}{\prod_{i=1}^{n}E[X_i^{2}]}=\displaystyle\prod_{i=1}^{n}\left( \dfrac{V[X_i]}{E[X_i^{2}]}+1 \right)-1.$

> [!thm]
> Let $\mathbf{X}=(X_1,\ldots, X_n)$ be a vector of random variables. Then, $$\pi(\mathbf{x})=\pi(x_1)\cdot\prod_{i=2}^{n}\pi(x_i\mid x_1,\ldots, x_{i-1}).$$

> [!thm] *Random Sums of Random Variables*
> Let $N$ be a DRV taking on non-zero natural values, let $\{X_i\}_{i=1}^{\infty}$ be a sequence of IID random variables with mean $\mu$ and variance $\sigma^{2},$ and let $Y=\displaystyle\sum_{i=1}^{N}X_i.$ If $N$ is independent from the $X_i,$ then
> 
> 1. $E[Y]=\mu E[N].$
> 2. $V[Y]=\sigma^{2}E[N]+\mu^{2}V[N].$
> 3. $M_Y(s)=M_N(\log M_X(s))=\displaystyle\sum_{n=0}^\infty \pi(n)M_X(s)^n.$

> [!thm] *Convolution*
> Let $X$ and $Y$ be independent random variables and let $Z=X+Y.$ Then, $\pi(z\mid x)=\pi_Y(z-x).$
> 
> 1. If $X$ and $Y$ are discrete, then $$\pi(z)=\sum_x\pi_X(x)\pi_Y(z-x).$$
> 2. If $X$ and $Y$ are continuous, then $$\pi(z)=\int_{\mathbb{R}} f_X(x)f_Y(z-x) dx.$$
> 3. If $Z=X-Y,$ then $\pi(z\mid x)=\pi_Y(x-z)$ and the respective cases are
> $$
> \begin{align*}
> \pi(z)&=\sum_x\pi_X(x)\pi_Y(x-z)\\
> \pi(z)&=\int_{\mathbb{R}} f_X(x)f_Y(x-z) dx.
> \end{align*}
> $$

> [!thm]
> If $a$ and $b$ are scalars, then
> 
> 1. $\cov (X, Y)=E[(X-E[X])(Y-E[Y])]=E[XY]-E[X]E[Y].$
> 2. $\cov (X, Y)=\cov (Y, X).$
> 3. $\cov (X, aY+b)=a\cov (X, Y).$
> 4. $\cov (X, Y+Z)=\cov (X, Y)+\cov (X, Z).$
> 5. If $V[X]=V[Y],$ then $\cov (X-Y, X+Y)=0.$
> 6. If $\{X_i\}_{i=1}^{m}$ and $\{Y_i\}_{i=1}^{n}$ are sequences of random variables and $\{a_i\}_{i=1}^{m}$ and $\{b_i\}_{i=1}^{n}$ are scalars, then $$\cov  \left( \sum_{i=1}^{m} a_iX_i,\sum_{i=1}^{n} b_iY_i \right)=\sum_{i=1}^{m} \sum_{i=1}^{n} a_ib_j\cov  (X_i,Y_j).$$

> [!thm] *Variance of a Sum of Random Variables*
> If $\{X_i\}_{i=1}^n$ is a family of random variables, then $$V\left[\sum_{i=1}^nX_i\right]=\sum_{i=1}^nV[X_i]+\sum_{i\ne j}\cov (X_i, X_j).$$

> [!thm]
> Suppose $X$ and $Y$ are random variables with non-zero variance.
> 
> 1. $-1\leqslant\rho\leqslant1.$
> 2. If $Y-E[Y]$ is a positive multiple of $X-E[X],$ then $\rho=1;$ if it were a negative multiple, then $\rho=-1.$
> 3. If $\rho=1,$ then $Y-E[Y]$ is almost surely a positive multiple of $X-E[X],$ i.e. with probability $1;$ if $\rho=-1,$ then $Y-E[Y]$ is almost surely a negative multiple of $X-E[X].$

> [!thm] *Laws of Iterated Expectation and Total Variance*
> Suppose $E[X]$ exists and let $\widehat{X}=E[X\mid Y]$ and $\widetilde{X}=\widehat{X}-X.$
> 
> 1. (*Law of Iterated Expectation*). $E[E[X\mid Y]]=E[X].$
> 2. If $g(Y)$ is a function of $Y,$ then $E[Xg(Y)\mid Y]=g(Y)E[X\mid Y].$
> 3. For any functions $g(X)$ and $h(Y),$ $E[g(X)h(Y)\mid Y]=g(X)E[h(Y)\mid Y].$
> 4. $E[Y\mid Y]=Y.$
> 5. $E[g(Y)\mid Y]=g(Y).$
> 6. If $Y$ is discrete, $E[E[X\mid Y]]=\displaystyle\sum_yE[X\mid Y=y]\pi(y).$
> 7. If $Y$ is continuous, $E[E[X\mid Y]]=\displaystyle\int_{\mathbb{R}}E[X\mid Y=y]\pi(y)dy.$
> 8. $E[\widetilde{X}]=0.$
> 9. $V[X\mid Y]=E[(X-E[X\mid Y])^2\mid Y]=E[\widetilde X^2\mid Y].$
> 10. $V[\widetilde{X}]=E[V[X\mid Y]].$
> 11. (*Law of Total Variance*). $V[X]=E[V[X\mid Y]]+V[E[X\mid Y]]=V[\widetilde{X}]+V[\widehat{X}].$
> 12. $\cov (\widehat{X}, \widetilde{X})=0.$

> [!thm]
> Let $\{X_i\}_{i=1}^{n}$ be a sequence of IID random variables and let $Y$ be their sum. For any $i,$ $$E[X_i\mid Y]=\dfrac{1}{n}Y.$$

> [!thm] *Transforms Determine Distributions*
> Suppose $M_X(s),M_Y(s)$ exist and agree at all points for which they are defined. Then, $$F_X(x)=F_Y(x),\quad\forall x.$$

> [!thm] *Mixed Transform*
> Let $\{X_i\}_{i=1}^n$ be a family of random variables with a respective and suppose $Y$ is a random variable which takes the value $X_i$ with probability $p_i.$ Then
> $$
> \begin{align*}
> F_Y(y)&=\sum_{i=1}^np_iF_{X_i}(y),\\
> M_Y(s)&=\sum_{i=1}^np_iM_{X_i}(s).
> \end{align*}
> $$

> [!thm] *Transforms of Independent Sums is the Product of the Transforms*
> Let $\{X_i\}_{i=1}^{\infty}$ be a sequence of independent random variables and let $Z=\displaystyle\sum_{i=1}^{n}X_i.$
> 1. If $M_{X_i}(s)$ is defined for all $i,$ then $$M_Z(s)=\displaystyle\prod_{i=1}^{n}M_{X_i}(s).$$
> 2. If the $X_i$ are IID, then $M_Z(s)=(M_X(s))^n$ when $M_X(s)$ is defined.
> 3. Suppose $M_{X_i}(s)=f(s,\mu_i,\sigma_i^{2})$ is s.t. $f(s,\mu_i,\sigma^{2}_i)f(s,\mu_j,\sigma_j^{2})=f(s,\mu_i+\mu_j,\sigma_i^{2}+\sigma_j^{2}).$ Then, $Z$ is of the same family $D$ as the $X_i$ with distribution $D\left( \sum_{i=1}^{n}\sigma_i^{2},\sum_{i=1}^{n}\mu_i \right).$ If additionally the $X_i$ are IID, $\overline{X}\sim D(\sigma^2/n,\mu).$

> [!thm] *Convergence of Transforms Implies Convergence of Distributions*
> Let $\{X_n\}_{n=1}^{\infty}$ be a sequence of random variables whose MGF exists s.t. $\displaystyle\lim_{n \to \infty}M_{X_n}(s)=M_X(s),$ for all $s.$ Then, $$\lim_{n \to \infty}F_{X_n}(x)=F_X(x),\quad\forall x.$$

### Bayesian Inference
Let $\Theta$ and $X$ be (possibly multidimensional) random variables, let $\widehat{\Theta}$ be an estimator, and let $\widetilde{\Theta}=\widehat{\Theta}-\Theta.$

> [!thm] *MAP Uniqueness Sufficiency Conditions*
> If $\pi(\theta\mid x)$ is unimodal and is symmetric around $E[\Theta\mid X=x],$ then $$\max_{\theta}\pi(\theta\mid x)=\pi(E[\Theta\mid X=x]\mid x).$$

> [!thm] *LMS is Optimal*
> Let $\widehat{\Theta}=E[\Theta\mid X].$
> 1. If $g(X)$ is an estimator, then $$E\left[ (\Theta-\widehat{\Theta})^{2} \right]\leqslant E\left[ (\Theta-g(X))^{2} \right].$$
> 2. $E[\widetilde{\Theta}]=E[\widetilde{\Theta}\mid X]=0.$
> 3. $\cov (\widehat{\Theta}, \widetilde{\Theta})=0.$
> 4. If $h:\mathbb{R}^n\to\mathbb{R}$ is a function, then $\cov (\widehat{\Theta}, h(X))=0.$
> 5. $V[\Theta]=V[\widetilde \Theta]+V[\widehat \Theta].$
> 6. If $\Theta=(\Theta_1,\ldots, \Theta_m), X=(X_1,\ldots, X_n),$ and $\widehat{\Theta}$ is a vector with $m$ components $\widehat{\Theta}_i=E[\Theta_i\mid X],$ then $\widehat{\Theta}$ minimises $E\left[ |\Theta-(g_1(X),\ldots, g_m(X))|^2 \right]$ for any family of estimators $\{g_i(X)\}_{i=1}^{m}.$
> 7. Suppose $X=(X_1,\ldots, X_n)^T.$ If $h:\mathbb{R}\to\mathbb{R}$ is a bijection, then $$E[\Theta\mid hX]=E[\Theta\mid X].$$

> [!thm] *LLMS*
> Let $X=(X_1,\ldots, X_n), \Theta$ take on real values, and let $\widehat{\theta}$ be a vector in $\mathbb{R}^{n+1}$ minimising the following expression over all vectors: $$E[(\Theta-(X, 1)\cdot \widehat{\theta})^2].$$
> Finally, let $\widehat{\Theta}=(X, 1)\cdot\widehat{\theta}.$
> 1. $E[\widetilde{\Theta}]=E[\widetilde{\Theta}\mid X]=0.$
> 2. $\cov (\widehat{\Theta}, \widetilde{\Theta})=\cov (X_i, \widetilde{\Theta})=0,$ for all $i.$
> 3. $V[\Theta]=V[\widetilde{\Theta}]+V[\widehat{\Theta}].$
> 4. $V[\Theta]=V[E[\Theta\mid X]]+V[\widetilde{\Theta}].$
> 5. If $n=1,$ then
> $$\widehat{\Theta}=E[\Theta]+\rho\frac{\sigma_\Theta}{\sigma_X}\left( X-E[X] \right),$$
> where $\sigma_\Theta$ and $\sigma_X$ are the standard deviations of $\Theta$ and $X$ respectively, with a mean square error of $$V[\widetilde{\Theta}]=(1-\rho^2)\sigma_\Theta^2,$$
> where $$\rho=\frac{\cov (\Theta, X)}{\sigma_\Theta\sigma_X}.$$
> 6. Suppose $X_i=\Theta+W_i,$ for a sequence $W_i$ of zero-mean independent variables and variance $\sigma_i^{2},$ and that $E[\Theta]=\mu$ and $V[\Theta]=\sigma_0^{2}.$ If $\cov (\Theta, W_i)=0$ for all $i,$ then the $i$-th component of $\widehat{\Theta}$ is given by $$\frac{X_i}{\displaystyle\sum_{j=0}^n\left( \dfrac{\sigma_i}{\sigma_j} \right)^{2} },$$
> and the $(n+1)$-st one is given by $$\frac{\mu}{\displaystyle\sum_{j=0}^n\left( \dfrac{\sigma_0}{\sigma_j} \right)^{2} },$$
> 7. If $\Theta=(\Theta_1,\ldots, \Theta_m),$ minimising $$\sum_{i=1}^{m} E\left[ (\Theta_i-\widehat{\Theta}_i)^{2} \right]$$
> is equivalent to minimising $E\left[ (\Theta_i-\widehat{\Theta}_i)^{2} \right]$ for each $i.$
> 8. Let $X_i=\Theta+W_i$ for a family of independent normal variables $W_i$ all independent of $\Theta,$ and suppose $\Theta$ is normal. Then, the MAP, LMS, and LLMS estimators are identical.

> [!thm] *Bayesian Linear Regression Under Normal Models*
> Let $\{(x_i, Y_i)\}_{i=1}^{n}$ be a family of pairs, $y_i$ a realisation of $Y_i, x_i$ is a real number, and suppose $$Y_i=\Theta_0+\Theta_1x_i+W_i,$$
> where the $W_i$ are IID zero-mean normal variables with common, known variance $\sigma^{2}$ independent of $\Theta_0$ and $\Theta_1,$ both of which are zero-mean normal variables with variances $\sigma^{2}_0$ and $\sigma^2_1$ respectively. Then, under the MAP rule, $$\widehat{\Theta}_0=\frac{n\sigma_0^{2}(\overline{y}-\widehat{\Theta}_1\overline{x})}{\sigma^{2}+n\sigma_0^{2}},\quad\text{and}\quad \widehat{\Theta}_1=\frac{\sigma_1^{2}}{\sigma^{2}+\sigma_1^{2}S_{x,x}}S_{x,y},$$
> where $$S_{x,x}=\sum_{i=1}^{n} (x_i-\overline{x})^{2},\quad\quad S_{x,y}=\sum_{i=1}^{n} (x_i-\overline{x})(y_i-\overline{y}).$$

> [!thm] *Bayesian Hypothesis Testing*
> Suppose the range of $\Theta$ is finite and let $\theta_i$ be the $i$-th value in that range, starting from $0,$ and let $H_i$ be the event that $\Theta=\theta_i.$
> 1. If $S_i=\{x:g_{\mathrm{MAP}}(x)=\theta_i\},$ then
> $$
> \begin{align*}
> P(\Theta=g_{\mathrm{MAP}}(X))&=\sum_iP(\Theta=\theta_i, X\in S_i)\\
> &=\sum_iP(X\in S_i\mid \Theta=\theta_i)P(\Theta=\theta_i)\\
> P(\Theta\ne g_{\mathrm{MAP}}(X))&=\sum_iP(\Theta\ne \theta_i, X\in S_i)\\
> &=\sum_iP(X\in S_i\mid \Theta\ne \theta_i)(1-P(\Theta=\theta_i)).
> \end{align*}
> $$
> 2. Suppose there is only $H_0$ and $H_1$ and that $X$ takes on real values, i.e. it is one dimensional. Let $\xi=\dfrac{\pi(\theta_0)}{\pi(\theta_1)}$ and $L(x)=\dfrac{\pi(x\mid\theta_1)}{\pi(x\mid\theta_0)}.$ Then,
> $$g_{\mathrm{MAP}}(x)=\begin{cases}
> H_0 & L(x)\leqslant \xi, \\
> H_1 & L(x)>\xi.
> \end{cases}$$
> That is, if $X=x,$ MAP chooses $0$ if $\pi(\theta_1\mid x)\leqslant\pi(\theta_0\mid x),$ otherwise $1.$

> [!thm]
> Let $X=(X_1,\ldots, X_n)$ and $X_{[n-1]}=(X_1,\ldots, X_{n-1}).$ Then, $$P(\Theta\ne g_{\mathrm{MAP}}(\vec x)\mid  X=\vec x)\leqslant P(\Theta\ne g_{\mathrm{MAP}}(\vec x_{[n-1]})\mid X_{[n-1]}=\vec x_{[n-1]}).$$
> That is, making additional observations lowers the probability of error. From this it is easy to show the probability of being correct increases: $$P(\Theta= g_{\mathrm{MAP}}(\vec x)\mid  X=\vec x)\geqslant P(\Theta= g_{\mathrm{MAP}}(\vec x_{[n-1]})\mid X_{[n-1]}=\vec x_{[n-1]}).$$

> [!thm]
> Let $\Theta$ and $X$ be continuous with $\pi(\theta, x)=h(q(\theta, x))$ for a non-negative function $h$ and a function $q$ of the form $$q(\theta, x)=a(\theta-t)^{2}+b(x-d)^{2}-2c(\theta-t)(x-d),$$
> where $a,b,c,d,t$ are scalars and $a\ne 0.$
> 1. $E[\Theta\mid X]=t+\dfrac{c}{a}(X-d).$ The LMS and LLMS estimates coincide.
> 2. If $q(\theta,x)\geqslant0$ for all $\theta,x$ and $h$ is monotonically decreasing, then $\pi(\theta\mid x)$ is maximised by $$\theta=t+\dfrac{c}{a}(x-d).$$
> Under these conditions, the MAP, LMS, and LLMS estimates coincide.

> [!thm]
> Let $\Theta, X_1,$ and $X_2$ be variables with known variances and covariances. Suppose $V[X],V[Y]>0$ and $|\rho(X, Y)|<1.$
> 1. The expression $E[(\Theta-aX-bY-c)^{2}]$ is minimised by the scalars
> $$
> \begin{align*}
> a&=\dfrac{V[Y]\cov (\Theta, X)-\cov (\Theta, Y)\cov (X, Y)}{V[X]V[Y]-\cov ^{2}(X, Y)}\\
> b&=\dfrac{V[Y]\cov (\Theta, Y)-\cov (\Theta, X)\cov (X, Y)}{V[X]V[Y]-\cov ^{2}(X, Y)}\\
> c&=E[\Theta]-aE[X]-bE[Y].
> \end{align*}
> $$
> 2. If $X$ and $Y$ are uncorrelated, then it is minimised by $$a=\dfrac{\cov (\Theta, X)}{X},\quad b=\dfrac{\cov (\Theta, Y)}{Y},\quad c=E[\Theta]-aE[X]-bE[Y].$$

#### Priors
See the section below on distributions.
> [!thm] *Bernoulli Priors*
> Let $\Theta$ be a Bernoulli random variable taking the value $1$ with probability $p$ or $2$ with probability $1-p.$ Suppose $\{X_i\}_{i=1}^{n}$ is a sequence of conditionally independent Bernoulli variables with respective parameters $p_{i, \theta}$ given $\Theta=\theta,$ i.e. $\pi(x_i\mid \theta)$ is either $0, p_{i,\theta},$ or $1-p_{i, \theta}.$ Then, $$\pi(\theta\mid \vec x)=\dfrac{\pi(\theta)\displaystyle\prod_{i=1}^{n}\pi(x_i\mid \theta)}{p\displaystyle\prod_{i=1}^{n}\pi(x_i\mid 1)+(1-p)\prod_{i=1}^{m}\pi(x_i\mid 2)}.$$

> [!thm] *Uniform Priors*
> Let $\Theta$ be a uniform random variable on the unit interval, let $X=(X_1,\ldots, X_n)$ be a vector of conditionally IID uniform variables on the interval $[0, \theta]$ given $\Theta=\theta,$ and let $b=\max(\vec x).$
> 1. If $n=1,$ then
> $$
> \begin{align*}
> \pi(\theta\mid x)&=\dfrac{1}{\theta|\log x|},&& x\leqslant \theta\leqslant 1,\\
> g_{\mathrm{MAP}}(x)&=x\\
> E[\widetilde{\Theta}^{2}\mid X=x]&=x^{2}+\dfrac{3x^{2}-4x+1}{2|\log x|} && \widehat\Theta = g_{\mathrm{MAP}}(x)\\
> E[\Theta\mid X=x]&=\frac{1-x}{|\log x|}\\
> E[\widetilde{\Theta}^{2}\mid X=x]&=\dfrac{1-x^{2}}{2|\log x|}-\left( \dfrac{1-x}{\log x} \right)^{2} &&\widehat\Theta = E[\Theta\mid X=x].
> \end{align*}
> $$
> 2. If $n\geqslant2,$
> $$
> \begin{align*}
> \pi(\theta\mid \vec x)&=\dfrac{1-n}{\theta^n(1-b^{1-n})},&& b\leqslant \theta\leqslant 1\\
> g_{\mathrm{MAP}}(\vec x)&=b\\
> \end{align*}
> $$
> 3. If $n=2,$
> $$
> \begin{align*}
> E[\Theta\mid X=\vec x]&=\dfrac{b\log b}{b-1}\\
> E[\widetilde{\Theta}^{2}\mid X=x]&=b-\left(\dfrac{b\ln(b)}{b-1}\right)^{2}, && \widehat\Theta=E[\Theta\mid X=\vec x].
> \end{align*}
> $$
> 4. If $n\geqslant3,$ $$E[\Theta\mid X=\vec x]=\dfrac{(n-1)(1-b^{2-n})}{(n-2)(1-b^{1-n})}.$$
> 5. If $n=3,$
> $$
> \begin{align*}
> E[\widetilde{\Theta}^{2}\mid X=\vec x]&=\dfrac{2b^2}{(b^{2}-1)}\left( \log b-2\dfrac{(b-1)^{2}}{(b^{2}-1)} \right), && \widehat\Theta=E[\Theta\mid X=\vec x]\\
> E[\widetilde{\Theta}^{2}\mid X=x]&=b^{2}\left( \dfrac{2\log b}{b^{2}-1}+1 \right) -2b, && \widehat\Theta=g_{\mathrm{MAP}}(\vec x).
> \end{align*}
> $$
> 6. If $n>3,$
> $$
> \begin{align*}
> E[\widetilde{\Theta}^{2}\mid X=x]&=\dfrac{n-1}{b^{1-n}-1}\left( \dfrac{b^{3-n}-1}{n-3}-\dfrac{(n-1)(b^{2-n}-1)^{2}}{(n-2)^2(b^{1-n}-1)} \right) && \widehat\Theta=E[\Theta\mid X=x]\\
> E[\widetilde{\Theta}^{2}\mid X=x]&=\dfrac{(n-1)(1-b^{n-3})b^{n-1}}{(n-3)(1-b^{n-1})b^{n-3}}-2b+b^{2}, && \widehat\Theta=g_{\mathrm{MAP}}(\vec x).
> \end{align*}
> $$
> 7. If $b=1/2$ for all $n,$ then
> $$
> \begin{align*}
> \lim_{n \to \infty}E[\Theta\mid X=x]&=\dfrac{1}{2}\\
> \lim_{n \to \infty}E[\widetilde{\Theta}^{2}\mid X=\vec x]&=0, && \widehat{\Theta}=E[\Theta\mid X=\vec x]\\
> \lim_{n \to \infty}g_{\mathrm{MAP}}(\vec x)&=\dfrac{1}{2}\\
> \lim_{n \to \infty}E[\widetilde{\Theta}^{2}\mid X=\vec x]&=-\dfrac{1}{2}, && \widehat{\Theta}=g_{\mathrm{MAP}}(\vec x).
> \end{align*}
> $$
> 8. If $b$ is constant for all $n,$ then $$\lim_{n \to \infty}E[\widetilde{\Theta}^{2}\mid X=\vec x]=0, \quad\quad \widehat{\Theta}=E[\Theta\mid X=\vec x].$$

> [!thm] *Normal Priors*
> Let $\Theta$ be a normal variable with known mean $x_0$ and variance $\sigma^{2}_0$ and let $\{X_i\}_{i=1}^{n}$ be a sequence of random variables with common mean $\Theta.$ Suppose the $X_i$ are conditionally independent normal variables with respective variances $\sigma_i^{2}$ given $\Theta=\theta.$ That is,
> $$
> \begin{align*}
> \pi(\theta)&=c_1\exp\left( -\frac{(\theta-x_0)^2}{2\sigma_n^2 } \right)\\
> \pi(\vec x\mid \theta)&=c_2\prod_{i=1}^n\exp\left( -\frac{(x_i-\theta)^{2}}{2\sigma_i^{2}} \right),
> \end{align*}
> $$
> 1. If $a(\vec x)=a$ is a normalising constant dependent on the $x_i$ but not on $\theta,$ then $$\pi(\theta\mid \vec x)=a\exp\left( -\frac{(\theta-m)^{2}}{2v} \right),$$
> where $$m=\frac{\displaystyle\sum_{i=0}^nx_i\sigma_i^{-2}}{\displaystyle\sum_{i=0}^n\sigma_i^{-2}},\quad\quad v=\frac{1}{\displaystyle\sum_{i=0}^n\sigma_i^{-2}}.$$
> 2. $\pi(\theta\mid\vec x)$ is maximised at $\theta=m.$
> 3. $E[\Theta\mid X=\vec x]=am\sqrt{2v\pi}.$
> 4. If the $\sigma_i^{2}$ have a common value $\sigma^{2},$ then $$m=\dfrac{1}{n+1}\sum_{i=0}^{n} x_i,\quad v=\dfrac{\sigma^{2}}{n+1}.$$
> As $n$ increases, $\sqrt{ v }$ converges to 0 at a rate of $1/\sqrt{ n }.$
> 5. If $X_{n+1}$ is the same kind of variable as the $X_i$ for $i\leqslant n,$ then, letting $\vec x$ be an $n$-tuple, $$\pi(\theta\mid \vec x, x_{n+1})=b\exp\left( -\dfrac{(\theta-M)^{2}}{2V} \right),$$
> where $b(\vec x, x_{n+1})=b$ is a normalising constant not dependent on $\theta$ and $$M=\frac{(m/v)+(x_{n+1}/\sigma_{n+1}^2)}{(1/v)+(1/\sigma_{n+1}^{2})},\quad\quad V=\frac{1}{(1/v)+(1/\sigma_{n+1}^{2})}.$$

> [!thm] *Beta Priors*
> Let $\Theta$ be a random variable with the following distribution: $$\pi(\theta)=\dfrac{c_0}{B(\alpha, \beta)}\theta^{\alpha-1}(1-\theta)^{\beta-1},\quad 0<\theta<1,$$
> otherwise $0,$ where $\alpha,\beta>0$ are natural. Let $X$ take natural values s.t. $\pi(x\mid \theta)$ is a binomial distribution with parameters $n$ and $\theta.$
> 1. If $d=c_0\displaystyle{n\choose x},$ then, $$\pi(\theta\mid x)=\dfrac{d}{B(x+\alpha,n-x+\beta)}\theta^{x+\alpha-1}(1-\theta)^{n-x+\beta-1}.$$
> Hence, $\pi(\theta\mid x)$ is proportional to a beta distribution with with parameters $x+\alpha$ and $n-x+\beta.$
> 2. The posterior is maximised by $\theta=\dfrac{x}n.$
> 3. $E[\Theta\mid X=x]=\dfrac{x+1}{n+2}.$
> 4. For any $\widehat{\Theta},$ $$E[\widetilde{\Theta}^{2}\mid X=x]=\widehat{\Theta}^{2}-2\widehat{\Theta}\dfrac{x+1}{n+2}+\dfrac{(x+1)(x+2)}{(n+2)(n+3)}.$$
> 5. If $\widehat{\Theta}=E[\Theta\mid X=x],$ then $$E[\widetilde{\Theta}^{2}\mid X=x]=\dfrac{(x+1)(x+2)}{(n+2)(n+3)}-\left( \dfrac{x+1}{n+2} \right)^{2}.$$
> 6. If $\widehat{\Theta}=x/n,$ then $$E[\widetilde{\Theta}^{2}\mid X=x]=\dfrac{x^{2}}{n}-2\dfrac{x(x+1)}{n(n+2)}+\dfrac{(x+1)(x+2)}{(n+2)(n+3)}.$$

> [!thm] *Bivariate Independent Standard Normal Priors*
> Let $\Theta=(\Theta_1, \Theta_2)$ have a standard bivariate normal prior with $\Theta_1$ and $\Theta_2$ uncorrelated. That is, $$\pi(\theta_1,\theta_2)=\dfrac{1}{2\pi}\exp\left( -\dfrac{\theta_1^{2}+\theta_2^{2}}{2} \right) .$$
> Let $\mathbf{s}_i=(a_i, b_i)$ be fixed, let $\{X_i\}_{i=1}^{n}$ be a sequence of conditionally independent Bernoulli variables with respective parameters $\exp(-|\mathbf{s}_i-\vec\theta|)$ given $\Theta=\vec \theta,$ and let $S=\{i\leqslant n: X_i=1\}.$ Then, $$\pi(\theta)\pi(\vec x\mid\vec \theta)=\dfrac{1}{2\pi}\exp\left( -\dfrac{\theta_1^{2}+\theta_2^{2}}{2}-\sum_{i\in S}|\mathbf{s}_i-\vec\theta| \right)\prod_{i\notin S}\left( 1-\exp\left( -|\mathbf{s}_i-\vec \theta| \right)  \right) .$$

### Classical Inference
Let $\theta$ be a point in euclidean space and let $X=(X_1,\ldots, X_n)$ be a vector of random variables with a distribution $\pi(x; \theta)$ functionally dependent on $\theta,$ let $\widehat{\Theta}_n$ be an estimator of $\theta$ based on $X,$ and let $\widetilde{\Theta}_n=\widehat{\Theta}_n-\theta.$

> [!thm] *ML is a Flat MAP Estimate*
> Let $\widehat{\Theta}$ be the ML estimate of $\theta.$
> 
> 1. If we view $\Theta$ as a random variable taking on possible values of $\theta,$ the ML and MAP estimates coincide when we assume a flat prior on $\Theta.$
> 2. If $h$ is a bijection of $\theta,$ the ML estimate of $h(\theta)$ is $h(\widehat{\Theta}_n).$
> 3. If the $X_i$ are IID, and given certain assumptions, the ML estimate is consistent and asymptotically normal.

> [!thm] *SM Estimator*
> Suppose the $X_i$ are IID random variables with mean $\mu$ and variance $\sigma^2.$ Let $M_n$ be the SM estimator of $\theta$ based on $X.$
> 
> 1. The SM estimator is unbiased, asymptotically unbiased, consistent, and asymptotically normal.
> 2. $V[M_n]=\sigma^2/n.$ Note this does not depend on $\theta.$

> [!thm] *Sample Variance*
> Suppose the $X_i$ are IID with mean $\mu$ and variance $\theta.$
> 
> 1. $\mathrm{b}_{\theta}(\overline{S}_n^{2})=-\dfrac{1}{n}\theta.$
> 2. $\overline{S}_n^{2}$ is asymptotically unbiased.
> 3. $\widehat{S}_n^{2}$ is unbiased.
> 4. $E_{(\mu, \theta)}[\widehat{S}_n^{2}]=\theta.$
> 5. Both $\overline{S}_n^2$ and $\widehat{S}_n^2$ are consistent.

> [!thm] *Pooled Sample Variance*
> Let $\{X_j\}_{j=1}^{n_i}$ be a sequence of IID r.v.s for positive integers $\{n_i\}_{i=1}^{m}$ which all share a common variance $\sigma^{2}=\theta$ and are independent of each other. Let $\overline{S}_p^{2}$ be the biased PSV, let $\widehat{S}_p^{2}$ the unbiased PSV, and let $N=\displaystyle\sum_{i=1}^{m}n_i.$
> 1. $\mathrm{b}_{\theta}(\overline{S}_p^{2})=-\dfrac{m}{N}\theta.$
> 2. Holding $m$ fixed, $\overline{S}_p^{2}$ is asymptotically unbiased: $$\displaystyle\lim_{N \to \infty}E_\theta[\overline{S}_p^{2}]=\theta.$$
> 3. $\widehat{S}_p^{2}$ is unbiased.
> 4. Both are consistent (*tentative*).

> [!thm] *CI Construction*
> Let $\sigma^{2}=V_\theta[\widehat{\Theta}_n], \alpha\in(0,1),$ and let $\beta=1-\alpha/2.$
> 
> 1. $\widetilde{\Theta}_n/\sigma$ approaches a standard normal variables as $n$ increases.
> 2. If $$P_\theta\left( \frac{\left| \widehat{\Theta}_n-\theta \right|}{\sigma}\leqslant \Phi^{-1}(\beta)\right)=1-\alpha,$$
> then $$P_\theta\left( \widehat{\Theta}_n-\Phi^{-1}(\beta)\sigma\leqslant \theta\leqslant \widehat{\Theta}_n+\Phi^{-1}(\beta)\sigma \right)=1-\alpha.$$

> [!thm] *General Linear Models*
> Let $\{(X_i, Y_i)\}_{i=1}^{n}$ be a sequence of IID pairs of random variables satisfying $$Y_i\approx \theta_0+\theta_1X_i,\quad\forall i,$$
> let $\overline{X}, \overline{Y}$ be the SM estimators of the common mean of their respective variables, and let $\widehat{y}_i=\widehat{\Theta}_0+\widehat{\Theta}_1x_i.$
> 1. The sum of squared residuals is minimised by $$\widehat{\Theta}_0=\overline{y}-\widehat{\Theta}_1\overline{x},\quad\quad \widehat{\Theta}_1=\dfrac{\displaystyle\sum_{i=1}^{n}(x_i-\overline{x})(y_i-\overline{y}) }{\displaystyle \sum_{i=1}^{n} (x_i-\overline{x})^{2}}.$$
> 2. These estimators are unbiased.
> 3. If $\displaystyle\sum_{i=1}^{n}(x_i-\overline{x})^{2}$ goes to infinity and $\overline{x}^{2}$ is bounded by a constant as $n$ increases, $V[\widehat{\Theta}_0]$ and $V[\widehat{\Theta}_1]$ both go to 0.

> [!thm] *Linear Models with Normal Noise*
> Let $\{W_i\}_{i=1}^{n}$ be a sequence of IID zero-mean normal variables with variance $\sigma^{2},$ let $\{x_i\}_{i=1}^{n}$ be a sequence of real numbers, and suppose $$Y_i=\theta_0+\theta_1x_i+W_i.$$
> 1. The ML estimates of $\theta_0$ and $\theta_1$ coincide with the linear regression estimates for a general linear model.
> 2. $\dfrac{1}{n-2}\displaystyle\sum_{i=1}^{n}(Y_i-\widehat{\Theta}_0-\widehat{\Theta}_1x_i)^{2}$ is an unbiased estimator of $\sigma^{2}.$

> [!thm] *Neyman-Pearson Lemma*
> Let $\xi$ be chosen by the LRT resulting in error rates $$P(\lambda_{LR}(X)>\xi; H_0)=\alpha,\quad\quad P(\lambda_{LR}(X)\leqslant \xi; H_1)=\beta.$$
> Suppose a decision procedure chose a rejection region $R$ s.t. $$P(X\in R; H_0)\leqslant \alpha.$$
> Then, $$P(X\notin R; H_1)\geqslant\beta.$$
> The inequality is strict when $P(X\in R; H_0)<\alpha.$

> [!thm] *Chi-Squared Test*
> Let $\Theta$ take on the value of some non-zero natural number up to $m\in \mathbb{N}$ with $P(\Theta=k)=\theta_k,$ let $\theta=(\theta_1,\ldots, \theta_m),$ define $$H_0:\theta=\theta'=(\theta_1',\ldots, \theta_m'),\quad H_1:\theta\ne(\theta_1',\ldots, \theta_m'),$$
> where the $\theta_i'$ add up to $1,$ let $\{D_i\}_{i=1}^{n}$ be a sequence of IID random variables with the same distribution as $\Theta,$ let $N_k=|\{i\in\mathbb{N}: D_i=k\}|,$ let $X=(N_1,\ldots, N_m),$ and let $\widehat{\theta}$ be the vector maximising $\pi(x; \vec t)$ over all vectors $\vec t\in \mathbb{R}^m.$
> 1. $\widehat{\theta}_k=\dfrac{n_k}{n},$ for all $k\leqslant m.$
> 2. We reject $H_0,$ according to the LRT, only if $$S=\sum_{k=1}^{m} n_k\log\left( \frac{n_k}{n\theta'_k} \right)>\log\xi ,$$
> where we choose $\xi$ to satsify $$P(S>\log \xi; H_0)=\alpha.$$
> 3. $S$ is a approximately $T/2,$ where $$T=\sum_{k=1}^{m} \dfrac{(N_k-n\theta'_k)^{2}}{n\theta'_k}.$$
> 4. The distribution of $T$ approaches a $\chi^{2}$ distribution with $m-1$ DoF as $n$ increases.

> [!thm] *Factorisation*
> Let $T=f(X)$ be a statistic of $\theta.$
> 
> 1. $T$ is a sufficient statistic for $\theta$ only if $\pi(x;\theta)=g(f(x),\theta)h(x),$ for some functions $g$ and $h.$
> 2. If $T$ is a sufficient statistic for $\theta,$ then it is a sufficient statistic for $h(\theta).$
> 3. If $T$ is a sufficient statistic for $\theta,$ an ML estimate of $\theta$ can be expressed as $\widehat{\Theta}_n=g(T),$ for some function $g.$

> [!thm] *Roa-Blackwell*
> Let $T=f(X)$ be a sufficient statistic for $\theta,$ let $g(X)$ be an estimator for $\theta,$ and let $\widehat{g}(X)=E[g(X)\mid T].$
> 1. $E_\theta[g(X)\mid T]$ is the same for all $\theta.$
> 2. $\mathrm{b}_\theta(g(X))=\mathrm{b}_\theta(\widehat{g}(X)).$
> 3. For any $\theta$ where $V_\theta[g(X)]$ is finite, $$E_\theta\left[ (\widehat{g}(X)-\theta)^{2} \right]\leqslant E_\theta\left[ (g(X)-\theta)^{2} \right].$$
> 4. The above inequality is strict only if $E_\theta[V[g(X)\mid T]]$ is positive.

#### Interaction with Distributions
$\{X_i\}_{i=1}^{\infty}$ is a sequence of variables, $\overline{S}_n^{2}$ is the biased SV estimator, and $\widehat{S}_n^{2}$ is the unbiased SV estimator. Context makes it clear what they are to estimate. Lowercase versions of these are realised values.

> [!thm] *SM Estimate of Bernoulli Parameter*
> Let $\{X_i\}_{i=1}^{\infty}$ be a sequence of IID Bernoulli variables with parameter $\theta.$
> 1. $\overline{X}$ maximises the likelihood function.
> 2. Let $T_k=i$ only if $X_i=1$ and $|\{m\leqslant i:X_m=1\}|=k.$ For a fixed $k,$, $\pi(t_k;\theta)$ is maximised over $\theta$ by $k/t_k.$
> 3. $n\overline{X}$ is a sufficient statistic for $\theta.$

> [!thm] *ML Estimate of Poisson Parameter*
> Suppose the $X_i$ are IID Poisson variables with parameter $\theta$ and let $\widehat{\Theta}_n$ be the ML estimate of $\theta$ based on the $X_i.$
> 1. $\overline{X}=\widehat{\Theta}_n.$
> 2. $n\overline{X}$ is a sufficient statistic for $\theta.$

> [!thm] *Estimating Uniform Parameters*
> Suppose the $X_i$ are IID uniform random variables. 
> 1. If they are uniform over $[0, \theta],$ the ML estimate $\max_{i\leqslant n} X_i$ is asymptotically unbiased and a sufficient statistic for $\theta$ but is inconsistent, it is not asymptotically normal, and is biased by a factor of $-\dfrac{1}{n+1}.$
> 2. If the $X_i$ are uniform over $[0, \theta],$ $2\overline X$ is an unbiased, asymptotically unbiased, consistent, and asymptotically normal estimator of $\theta.$
> 3. If they are uniform over $[\theta, \theta+1],$ there is no ML estimate.
> 4. If the $X_i$ are uniform over $[\theta,\theta+1],$ $\dfrac{2\overline X-1}{2}$ is an unbiased, asymptotically unbiased, consistent, and asymptotically normal estimator of $\theta.$

> [!thm] *ML Estimate of Exponential Parameter*
> Let $\{X_i\}_{i=1}^{\infty}$ be IID exponential variables with parameter $\theta,$ let $Y_k=\displaystyle\sum_{i=1}^{k}X_i,$ for $0\leqslant k,$ and let $\vec x$ be an $n$-tuple.
> 1. The log-likelihood function is given by $\log\pi(\vec x; \theta)=n\log\theta-\theta y_n.$
> 2. The log-likelihood is maximised over $\theta$ by $\widehat\Theta_n=\dfrac{n}{Y_n}=\dfrac1{\overline X}.$
> 3. $\widehat{\Theta}_n$ is consistent.

> [!thm] *ML Estimate of Normal Parameters*
> Let $\{X_i\}_{i=1}^{n}$ be a sequence of IID normal variables with parameters $\mu$ and $\sigma^{2}$ and let $\theta=(\mu, \sigma^{2}).$
> 1. The likelihood function is of the form $$\pi(\vec x;\mu, \sigma^{2})=\sqrt{ (2\pi\sigma^{2})^{-n} }\exp\left( -\dfrac{n(\overline{s}_{x}^{2}+(\overline{x}-\mu)^{2})}{2\sigma^{2}} \right) .$$
> 2. The log-likelihood is given by $$\log\pi(\vec x;\mu,\sigma^{2})=-\dfrac{n}{2}\left( \log(2\pi)+2\log\sigma+\left( \dfrac{\overline{s}_x}{\sigma} \right)^{2} +n(\overline{x}-\mu)^{2} \right) .$$
> 3. The log-likelihood is maximised over $\theta$ by $\widehat{\Theta}_n=(\overline{X}, \overline{S}_n^{2}).$
> 4. $\widehat{\Theta}_n$ is consistent, unbiased, and asymptotically unbiased.
> 5. If $\sigma^{2}$ is known, $n\overline{X}$ is a sufficient statistic for $\mu.$
> 6. If $\mu$ is known, $\displaystyle\sum_{i=1}^{n}(X_i-\mu)^2$ is a sufficient statistic for $\sigma^{2}.$
> 7. $( n\overline{X},|X|^2)$ is a sufficient statistic for $\theta.$

### Random Vectors
Let $X=(X_1,\ldots,X_n)^T$ be a random vector with mean $\mu$ and [[Joint-Random-Variables#Random Vectors|covariance matrix]] $\Sigma.$

> [!thm] *Linear Transformations*
> 1. If $a\in\mathbb{R}^n,$ $E[a\cdot X]=a\cdot E[X]=a\cdot \mu$ and $V[a\cdot X]=a\cdot V[X] a=a^TV[X]a=a^T\Sigma a.$
> 2. If $A$ is an $m\times n$ matrix, $E[AX]=AE[X]=A\mu$ and $V[AX]=AV[X]A^T=A\Sigma A^T.$

# Distributions

> [!thm] *Bernoulli*.
> If $X$ is a Bernoulli random variable, then
> 
> 1. $\pi(k)=p^{k}(1-p)^{1-k}.$
> 2. $E[X]=p.$
> 3. $V[X]=p(1-p).$
> 4. $F(x)=\begin{cases}1 & 1\leqslant x,\\1-p & 0\leqslant x <1,\\0 & x<0.\end{cases}$
> 5. $M(s)=1+p(e^s-1).$

> [!thm] *Binomial*
> If $\{X_i\}_{i=1}^{n}$ is a sequence of IID Bernoulli random variables with parameter $p$ and $Y=\displaystyle\sum_{i=1}^{n}X_i,$ then $Y$ is a binomial random variable with parameters $n$ and $p.$
> 
> 1. $\pi(y)=\displaystyle{n \choose y}p^y(1-p)^{n-y}.$
> 2. $\pi(y+1)=\dfrac{p}{1-p}\cdot\dfrac{n-y}{y+1}\cdot\pi(y).$
> 3. $E[Y]=np.$
> 4. $V[Y]=np(1-p).$
> 5. $F(y)=\displaystyle\sum_{i=0}^{y} \pi(y).$
> 6. $M(s)=(1+p(e^s-1))^n.$
> 7. If $k=\left\lfloor (n+1)p \right\rfloor,$ then $\pi(y)$ is increasing on $[0, k]$ and decreasing on $(k, n).$

> [!thm] *Binomial Sum of IID Bernoullis*
> If $\{X_i\}_{i=1}^{\infty}$ is a sequence of IID Bernoulli random variables with parameter $p$ and $N$ is a Binomial random variable with parameters $m$ and $q$ independent of the $X_i,$ then $Y=\displaystyle\sum_{i=1}^{N}X_i$ is Binomial with parameters $m$ and $pq.$
> 1. $E[Y]=mqp.$
> 2. $V[Y]=mqp(1-pq).$
> 3. $M_Y(s)=(1+pq(e^s-1))^m.$ Thus, $Y$ has a Binomial distribution with parameters $pq$ and $m.$

> [!thm]
> Let $\{X_i\}_{i=1}^{n}$ be a family of independent, Bernoulli random variables with a family of parameters $\{p_i\}_{i=1}^{n}$ respectively and let $X=\displaystyle\sum_{i=1}^{n}X_i.$ If the $p_i$ are chosen s.t. their sum is a fixed $\mu>0,$ then the variance of $X$ is minimised when $p_i=\dfrac{\mu}{n},$ for all $i.$

> [!thm] *Geometric*
> If $\{X_i\}_{i=1}^{\infty}$ is a sequence of IID Bernoulli random variables with parameter $p,$ then $Y=\inf\{i\mid X_i=1\}$ is a Geometric random variable with parameter $p.$
> 
> 1. $\pi(y)=(1-p)^{y-1}p.$
> 2. $E[Y]=\dfrac{1}{p}.$
> 3. $V[Y]=\dfrac{1-p}{p^2}.$
> 4. $F(y)=1-(1-p)^y.$
> 5. $Q(q)=\dfrac{\log(1-q)}{\log(1-p)}.$
> 6. $M(s)=\dfrac{pe^s}{1-(1-p)e^s}.$
> 7. If $k$ is a natural number, then $$E[X\mid X>k]=1+pk.$$

```ad-note
title:Derivation
collapse:close

Let $X\sim\mathcal{Geo}(p)$ and let $x>k.$ Then, $$P(X=x\mid X>k)=\frac{P(X>k\mid X=x)p_X(x)}{P(X>k)}=\frac{p_X(x)}{1-F_X(k)}=\frac{p(1-p)^{x-1}}{1-1+(1-p)^k}=\frac{p}{(1-p)^k}(1-p)^{x-1}.$$

Make the appropriate substitutions:
$$
	\begin{align*}
		E[X\mid X>k]&=\sum_{x=k+1}^{\infty}xP(X=x\mid X>k)\\
		&=\frac{p}{(1-p)^k}\sum_{x=k+1}^{\infty}x(1-p)^{x-1}\\
		&=\frac{p}{(1-p)^k}\sum_{x=1}^{\infty}(x+k)(1-p)^{x-1+k}\\
		&=p\sum_{x=1}^{\infty}(x+k)p_X(x)\\
		&=pE[X+k]\\
		&=p(E[X]+E[k])\\
		&=pE[X]+pk\\
		&=1+pk
	\end{align*}
$$
```

> [!thm]
> If $X$ and $Y$ are IID geometric random variables with parameter $p,$ then $$P(X=i\mid X+Y=n)=\frac{1}{n-1},\quad\forall 0<i<n.$$

> [!thm]
> Let $\{X_i\}_{i=1}^{n}$ be a family of independent, geometric random variables with a family of parameters $\{p_i\}_{i=1}^{n}$ respectively and let $X=\displaystyle\sum_{i=1}^{n}X_i.$ If the $p_i$ are chosen s.t. their sum is a fixed $\mu>0,$ then the variance of $X$ is minimised when $p_i=\dfrac{n}{\mu},$ for all $i.$

> [!thm] *Pascal*
> If $\{X_n\}_{n=1}^{\infty}$ be a sequence of IID geometric variables with parameter $p,$ then $Y_k=\displaystyle\sum_{n=1}^{k}X_n$ is described by a Pascal PMF of order $k.$
> 1. $\pi(y)=\displaystyle{y-1\choose k-1}p^k(1-p)^{y-k},$ for natural $t\geqslant k.$
> 2. $E[Y_k]=\dfrac{k}{p}.$
> 3. $V[Y_k]=\dfrac{k(1-p)}{k^{2}}.$
> 4. $F(y)=.$
> 5. $Q(q)=.$
> 6. $M(s)=M_X(s)^k.$
> 7. If $Z=Y_k-r,$ then $\pi(z)=\pi_{Y_k}(z+r).$ We call $Z$ a **negative binomial.**

> [!thm] *Poisson*
> Let $p\in [0, 1]$ and $n$ be a natural number s.t. $\displaystyle\lim_{n\to\infty}\lim_{p\to0}np=\lambda.$ If $X_{n, p}$ is a binomial random variable with parameters $n$ and $p,$ then $Y=\displaystyle\lim_{n\to\infty}\lim_{p\to0}X_{n, p}$ is a Poisson random variable with parameter $\lambda.$ Then, for a natural $y,$
> 
> 1. $\pi(y)=\dfrac{e^{-\lambda}\lambda^y}{y!}.$
> 2. $E[Y]=\lambda.$
> 3. $V[Y]=\lambda.$
> 4. $F(y)=\displaystyle\sum_{k=0}^{y}\dfrac{e^{-\lambda}\lambda^y}{k!}.$
> 5. $M(s)=\exp(\lambda(e^s-1)).$
> 6. If $k=\left\lfloor \lambda \right\rfloor,$ then $\pi(y)$ is increasing on $[0, k]$ and decreasing on $(k, \infty).$
> 7. If $X\sim\mathcal{P}oi(\mu)$ is independent from $Y,$ $X\mid X+Y=n$ follows a binomial distribution with parameters $n$ and $\dfrac{\mu}{\mu+\lambda}.$

> [!thm] *Poisson Approximation of the Binomial*
> Let $X\sim\mathcal{P}oi(\lambda),$ for $\lambda\in \mathbb{N},$ and let $Y\sim\mathcal{B}in\left( n, \dfrac{\lambda}{n} \right),$ also for $n\in\mathbb{N}.$ Then, $$\lim_{n \to \infty}\pi_{Y}(k)=\pi_X(k).$$
> For large $n$ and small $p,$ $S\sim\mathcal{P}oi(np),$ and $K\sim\mathcal{B}in(n, p),$ we have that $\pi_S(k)\approx\pi_K(k).$

> [!thm]
> Let $X$ and $Y$ be independent Poisson variables with integer parameters $\lambda$ and $\mu$ respectively. Then, $$E[X\mid X+Y]=\dfrac{\lambda}{\lambda+\mu}(X+Y).$$

> [!thm] *Sum of Independent Poissons*
> Let $\{X_i\}_{i=1}^{n}$ be a family of independent Poisson random variables with respective parameters $\lambda_i$ and let $Z=\displaystyle\sum_{i=1}^{n}X_i.$ Then, $Z$ has a Poisson distribution with parameter $\displaystyle\sum_{i=1}^{n}\lambda_i$ and MGF $$M_Z(s)=\exp\left( (e^s-1)\sum_{i=1}^{n} \lambda_i \right) .$$

> [!thm] *Poisson Sum of IID Bernoullis*
> Let $\{X_i\}_{i=1}^{\infty}$ be a sequence of IID Bernoulli random variables with parameter $p,$ let $N$ be a Poisson random variable with parameter $\lambda$ independent of the $X_i,$ and let $Y=\displaystyle\sum_{i=1}^{N}X_i.$
> 1. $E[Y]=p\lambda.$
> 2. $V[Y]=p\lambda.$
> 3. $M_Y(s)=\exp(p\lambda(e^s-1)).$ Thus, $Y$ has a Poisson distribution with parameter $p\lambda.$

> [!thm] *Poisson Sum of IID Binomials*
> Let $\{X_i\}_{i=1}^{\infty}$ be a sequence of IID Binomial random variables with parameters $n$ and $p,$ let $N\sim\mathcal{P}oi(\lambda)$ be independent of the $X_i,$ and let $Y=\displaystyle\sum_{i=1}^{N}X_i.$
> 1. $E[Y]=np\lambda.$
> 2. $V[Y]=.$
> 3. $M(s)=.$

> [!thm] *Transform of a Sum of Independent Poissons*
> Suppose $Y=\displaystyle\sum_{i=1}^nX_i$ is a sum of independent Poisson random variables with means $\mu_i.$ Then, $$M_Y(s)=\prod_{i=1}^n\exp(\mu_i(e^s-1))=\exp((e^s-1)\sum_{i=1}^n\mu_i).$$

> [!thm] *Discrete Uniform*
> Let $X$ take on integer values in the interval $[a, b],$ for integers $a$ and $b,$ with equal probability.
> 1. $\pi(x)=\dfrac{1}{b-a+1}.$
> 2. $E[X]=\dfrac{a+b}{2}.$
> 3. $V[X]=\dfrac{(b-a)(b-a+2)}{12}.$
> 4. $F(x)=\dfrac{x-a+1}{b-a+1}.$
> 5. $Q(p)=p(b-a+1)+a-1.$
> 6. $M(s)=\dfrac{\exp(sa)(\exp(s(b-a+1))-1)}{(b-a+1)(\exp(s)-1)}.$

> [!thm] *Sample Mean and Variance*
> If $\{X_i\}_{i=1}^{n}$ is a family of IID random variables with common mean and variance $\mu$ and $\sigma^{2}$ respectively and $M_n$ is the sample mean, then
> $$
> \begin{align*}
> E[M_n]&=\mu\\
> V[M_n]&=\frac{1}{n}\sigma^{2}.
> \end{align*}
> $$
> If $\widehat{S}_n^{2}$ is the unbiased sample variance, then $$E[\widehat{S}_n^{2}]=\sigma^{2}.$$

> [!thm] *Multinomial*
> Let $\{X_i\}_{i=1}^{n}$ be a sequence of IID Uniform random variables taking integer values in the range $[1, r]$ and for each $k$ let $N_k=|\{i: X_i=k\}|$ be the number of $X_i$ which took on the value $k.$ If $\mathbf{N}=(N_1,\ldots, N_r)$, then $\pi(\mathbf{n})$ is a multinomial distribution and
> 1. $\pi(\mathbf{n})=.$
> 2. $E[N_i]=.$
> 3. $V[N_i]=.$
> 
> problem 2.27

> [!thm] *Continuous Uniform*
> Let $X$ take on values in the interval $[a, b],$ for scalars $a$ and $b,$ with a constant distribution.
> 
> 1. $\pi(x)=\dfrac1{b-a}.$
> 2. $E[X]=\dfrac{a+b}2.$
> 3. $V[X]=\dfrac{(a+b)^2}{12}.$
> 4. $F(x)=\dfrac{x-a}{b-a},$ for $x\in [a,b].$
> 5. $Q(p)=p(b-a)+a.$
> 6. $M(s)=\dfrac{e^s(e^b-e^a)}{s(b-a)}.$

> [!thm] *Multidimentional Continuous Uniform*
> Let $\mathbf{X}$ be a random variable taking on values in the measurable subset $S\subseteq \mathbb{R}^n,$ for $n>1,$ with equal probabilities.
> 
> 1. $\pi(\mathbf{x})=\dfrac{1}{\lambda(S)},$ where $\lambda$ is the Lebesgue measure in $\mathbb{R}^n.$
> 2. If $A\subseteq S$ is measuraable, then $P(\mathbf{X}\in A)=\dfrac{\lambda(A)}{\lambda(S)}.$

> [!thm] *Exponential*
> Let $X$ be an exponential random variable with parameter $\lambda.$
> 
> 1. $\pi(x)=\lambda e^{-\lambda x}.$
> 2. $E[X]=\dfrac{1}{\lambda}.$
> 3. $V[X]=\dfrac{1}{\lambda^{2}}.$
> 4. $F(x)=1-e^{-\lambda x}.$
> 5. $Q(p)=-\dfrac{\log(1-p)}{\lambda}.$
> 6. If $s<\lambda,$ then $M(s)=\dfrac{\lambda}{\lambda-s}.$
> 7. $\sqrt{ X }$ follows a Rayleigh distribution with parameter $1/\sqrt{ 2\lambda }.$

> [!thm] *Competing Exponentials*
> If $\{X_i\}_{i=1}^{n}$ is a family of independent exponential random variables with parameters $\{\lambda_i\}_{i=1}^{n}$ respectively and $Z=\min\{X_i: 1\leqslant i\leqslant n\},$ then $Z$ has an exponential distribution with parameter $\displaystyle\sum_{i=1}^{n}\lambda_i.$

> [!thm] *Transforms of Independent Geometric Sums*
> Let $\{X_i\}_{i=1}^{\infty}$ be a sequence of IID random variables, let $N$ be a geometric random variable with parameter $p$ independent of the $X_i,$ and let $Y=\displaystyle\sum_{i=1}^{N}X_i.$
> 1. If the $X_i$ follows an exponential distribution with parameter $\lambda,$ then $$M_Y(s)=\dfrac{p\lambda}{p\lambda-s}.$$
> Thus, a geometric sum of IID exponential random variables itself follows an exponential distribution with parameter $p\lambda.$
> 2. If the $X_i$ follows a geometric distribution with parameter $q,$ then $$M_Y(s)=\dfrac{pqe^s}{1-(1-pq)e^s}.$$
> A geometric sum of IID geometric variables follows a geometric distribution with parameter $pq.$

> [!thm] *Laplace*
> Let $X$ be a Laplace random variable with parameters $\mu$ and $\lambda.$
> 
> 1. $\pi(x)=\dfrac{1}{2\lambda}\exp\left(-\dfrac{|x+\mu|}{\lambda}\right).$
> 2. $E[X]=\mu.$
> 3. $V[X]=2\lambda^{2}.$
> 4. $F(x)=\dfrac{1}{2}+\dfrac{1}{2}\operatorname{sgn}(x-\mu)\left( 1-\exp\left( -\dfrac{|x-\mu|}{\lambda} \right) \right).$
> 5. $Q(p)=\mu-\dfrac{1}{\lambda}\operatorname{sgn}\left( p-\dfrac{1}{2} \right)\ln\left( 1-2\left| p-\dfrac{1}{2} \right| \right).$
> 6. If $s<1/\lambda,$ then $M(s)=\dfrac{1}{1-\lambda^2s^{2}}e^{sm}.$

> [!thm] *Erlang*
> If $\{X_n\}_{n=1}^{\infty}$ is a sequence of IID exponential variables with common parameter $\lambda,$ then the distribution of $Y_k=\displaystyle\sum_{n=1}^{k}X_n$ is described by the Erlang PDF of order $k.$
> 1. $\pi(y)=\dfrac{\lambda^ky^{k-1}e^{-\lambda y}}{(k-1)!},$ for $y\geqslant0.$
> 2. $E[Y_k]=\dfrac{k}{\lambda}.$
> 3. $V[Y_k]=\dfrac{k}{\lambda^{2}}.$
> 4. $F(y)=1-\displaystyle\sum_{n=0}^{k-1}\dfrac{e^{-\lambda y}(\lambda y)^n}{n!}.$
> 5. $M(s)=\left( 1-\dfrac{s}{\lambda} \right)^{-k},$ for $s<\lambda.$

> [!thm] *Normal*
> Let $X$ be a normal distribution with parameters $\mu$ and $\sigma^{2}.$
> 
> 1. $\pi(x)=\dfrac{1}{\sigma\sqrt{2\pi}}\cdot\exp\left(-\dfrac{(x-\mu)^2}{2\sigma^2}\right).$
> 2. $E[X]=\mu.$
> 3. $V[X]=\sigma^{2}.$
> 4. $F(x)=\Phi\left( \dfrac{x-\mu}{\sigma} \right).$
> 5. $Q(p)=\mu+\sigma\Phi^{-1}(p)=\mu+\sigma\sqrt{2}\mathrm{erf}^{-1}(2p-1).$
> 6. If $Y=aX+b,$ where $a\ne0,$ then $Y$ is a normal random variable with parameters $a\mu+b$ and $a^2\sigma^2.$
> 7. If $Y=\dfrac{X-\mu}{\sigma},$ then $Y$ is a standard normal random variable.
> 8. $\Phi(-y)=1-\Phi(y).$

> [!thm] *Transforms of Normal Variables*
> Let $X$ be a normal variable with mean $\mu$ and variance $\sigma^{2},$ let $Y$ be a standard normal, and let $W=\displaystyle\sum_{i=1}^{n}X_i$ be a sum of independent normal variables with corresponding parameters $(\mu_i, \sigma_i^{2}).$
> 1. $M_Y(s)=\exp(s^{2}/2).$
> 2. $M_X(s)=\exp\left( \dfrac{\sigma^{2}s^{2}}{2} + s\mu \right).$
> 3. $M_W(s)=\exp\left(\dfrac{s^2}2\displaystyle\sum_{i=1}^n\sigma_i^2+s\sum_{i=1}^n\mu_i\right),$ hence $W\sim\mathcal{N}\left( \displaystyle\sum_{i=1}^{n}\sigma_i^{2},\sum_{i=1}^{n}\mu_i \right),$ and, if the $X_i$ are IID, $\overline{X}\sim \mathcal{N}(\sigma^{2}/n,\mu).$

> [!thm]
> Let $X$ and $Y$ be independent, zero-mean normal variables with natural variances $n$ and $m$ respectively. Then, $$E[X\mid X+Y]=\dfrac{n}{n+m}(X+Y).$$

> [!thm] *Multivariate Normal*
> Let $Z$ be a random vector of $n$ IID standard normal variables, let $\mu\in\mathbb{R}^n,$ let $\Sigma$ be a symmetric, positive definite $n\times n$ matrix, and let $X=\mu+\Sigma^{1/2}Z.$
> 
> 1. $Z\sim\mathcal{N}(\vec 0,\mathbb{1}),$ so $$\pi(\mathbf{z})=\dfrac{1}{\sqrt{ (2\pi)^n }}\exp\left( -\dfrac{|\mathbf{z}|^2}{2} \right).$$
> 2. $X\sim\mathcal{N}(\mu,\Sigma),$ so $$\pi(\mathbf{x})=\dfrac{1}{\sqrt{ (2\pi)^n |\Sigma|}}\exp\left( -\dfrac{1}{2} (\mathbf{x}-\mu)^T\Sigma^{-1}(\mathbf{x}-\mu) \right) .$$
> 3. If $Y=\Sigma^{-1/2}(X-\mu),$ then $Y\sim\mathcal{N}(\vec 0, \mathbb{1}_{n}).$
> 4. $X_i\sim\mathcal{N}(\mu_i,\Sigma_{i,i}).$
> 5. $X_i\mid X_j=x_j$ follows a normal distribution with mean and variance $$\mu_i+\dfrac{\Sigma_{i,j}}{\Sigma_{j,j}}(x_j-\mu_j),\quad\quad \Sigma_{i,i}-\dfrac{\Sigma_{i,j}\Sigma_{j,i}}{\Sigma_{j,j}}.$$
> 6. If $a$ is a non-zero vector, $a^TX\sim\mathcal{N}(a\cdot\mu,a\cdot(\Sigma a)).$
> 7. If $Y=(X-\mu)^T\Sigma^{-1}(X-\mu),$ then $Y\sim \chi_{n}^{2}.$

> [!thm] *$\chi^2$ Distribution*
> Let $\{Z_i\}_{i=1}^{\nu}$ be IID standard normal variables and $X=\sum_{i=1}^{\nu}Z_i^2,$ so $X$ follows a $\chi_{\nu}^{2}$ distribution.
> 1. If $\{X_i\}_{i=1}^{n}$ is a family of independent random variables $X_i\sim\chi_{\nu_i}^{2}$ and $Y$ is their sum, $Y$ follows a $\chi^{2}$ distribution with $\sum_{i=1}^{n}\nu_i$ DoF.
> 2. $E[X]=\nu.$
> 3. $V[X]=2\nu.$

> [!thm] *Rayleigh*
> Let $X$ and $Y$ be IID zero-mean normal variables with variance $\sigma$ and let $R\geqslant0$ and $\Theta\in[0,2\pi]$ be defined by $$X=R\cos\Theta,\quad Y=R\sin\Theta.$$
> That is, $R=\sqrt{ X^{2}+Y^{2} }$ and $\Theta=\arg(X+iY).$
> 
> 1. $R$ has a Rayleigh distribution with parameter $\sigma.$
> 2. $\Theta$ is uniformly distributed.
> 3. $\pi(r)=\dfrac{r}{\sigma^{2}}\exp\left( -\dfrac{r^{2}}{2\sigma^{2}} \right),$ for $r\geqslant0.$ $R$ and $\Theta$ are independent.
> 4. $E[R]=\sigma\sqrt{ \pi/2 }.$
> 5. $V[R]=\dfrac{4-\pi}{2}\sigma^{2}.$
> 6. $F(r)=1-\exp\left( -\dfrac{r^2}{2\sigma^{2}} \right).$
> 7. $Q(p)=\sigma\sqrt{ -2\log(1-p) }.$
> 8. $M(s)=1+\sigma s\sqrt{ \pi/2 } \exp((\sigma s)^{2}/2)\left( \operatorname{erf}\left( \dfrac{\sigma s}{\sqrt{ 2 }} + 1 \right) \right).$
> 9. $R^{2}\sim\mathcal{Exp}(1/2\sigma^{2}).$

> [!rmk] Simulation of Standard Normals
> By simulating an exponential random variable $X$ with parameter $1/2$ and a uniform random variable $Y$ on $[0,2\pi],$ we may simulate samples of a standard normal variable with $\sqrt{X}\cos(Y).$

> [!thm] *Bivariate Normal*
> Let $X$ and $Y$ be zero-mean normal variables with variance $\sigma^{2}_X$ and $\sigma^{2}_Y$ respectively and let $Z=(X, Y).$
> 1. $\pi(x, y)=c\exp(-q(x, y))$ where
> $$
> \begin{align*}
> q(x, y)&=\dfrac{s(x)^{2}-2\rho s(x)s(y)+s(y)^{2}}{2(1-\rho^{2})}\\
> s(x)&=\dfrac{x}{\sigma_X}\\
> c&=\dfrac{1}{2\pi\sigma_X\sigma_Y\sqrt{ 1-\rho^{2} }}.
> \end{align*}
> $$
> 2. $E[X\mid Y]-X$ is normal with 0 mean and variance $(1-\rho^{2})\sigma_X^{2}$ and is independent of $Y.$
> 3. $X$ and $Y$ are independent only if they are uncorrelated.

> [!thm] *$t$-distribution*
> Let $\{X_i\}_{i=1}^{n}$ be a sequence of IID normal random variables with common mean $\theta$ and variance $v.$ Let $M_n$ be the sample mean estimator for $\theta$ and $\widehat{S}_n^{2}$ the sample variance estimator for $v,$ and let $$T_n=\frac{\sqrt{ n }(M_n-\theta)}{\widehat{S}_n},$$
> 1. $E[T_n]=0$ if $n>2.$
> 2. $V[T_n]=\dfrac{n-1}{n-3}$ if $n>3.$
> 3. $T_n$ follows a $t$-distribution with $n-1$ DoF.
> 4. $T_2$ follows a Cauchy distribution.

> [!rmk] Standard Error
> Many estimators have the property that $T_n=\dfrac{\widehat{\Theta}_n-\theta}{\sqrt{ V[\widehat{\Theta}_n] }}$ follows some $t$-distribution, though which one varies by the estimator. The bottom quantity is known as the **standard error** of $\widehat{\Theta}_n.$ If $\sqrt{ \widehat \Theta_n }$ involves another unknown quantity, usually the variance of some observations, replacing those with an estimator for said variance typically yields a variable that follows a $T$ distribution.

> [!thm] *Studentised Range Distribution*
> Let $\{X_{i,j}\}_{j=1}^{n}$ be IID normal variables with mean $\mu$ and variance $\sigma^{2}$ for $i\leqslant m$ and let $$Q=\max_{i,j\leqslant m}\left( \dfrac{\overline{X}_i-\overline{X}_j}{\widehat{S}_p/\sqrt{ n }} \right),$$
> where $\widehat{S}_p^{2}$ is the pooled variance with $\nu$ DoF $$\widehat{S}_p^{2}=\dfrac{1}{\nu}\sum_{i=1}^{m} \sum_{j=1}^{n} (X_{i,j}-\overline{X}_i)^{2}.$$
> $Q$ follows a studentised range distribution with parameters $m$ and $\nu=n(m-1).$
> 1. If $q>0,$ $$\pi(q)=\dfrac{\sqrt{ 2\pi }m(m-1)\nu^{\nu/2}}{\Gamma(\nu/2)2^{\nu/2-1}}\int_0^{\infty}t^\nu\varphi(t\sqrt{ \nu })\left[ \int_{-\infty}^{\infty} \varphi(z+qt)\varphi(z)(\Phi(z+qt)-\Phi(z))^{m-2} dz \right]dt .$$

> [!thm] *Gamma*
> Suppose $X\sim\mathcal{G}amma(\alpha,\beta)$ for $\alpha,\beta>0:$
> 1. $\pi(x)$ is positive when $x>0$ and equal to $$\pi(x)=\dfrac{1}{\beta^\alpha\Gamma(\alpha)}x^{\alpha-1}\exp\left( -\dfrac{x}{\beta} \right).$$
> 2. $E[X]=\alpha\beta.$
> 3. $V[X]=\alpha\beta^2.$
> 4. If $\alpha=1,$ $X$ follows an exponential distribution with parameter $1/\beta.$
> 5. If $\{X_i\}_{i=1}^{n}$ are independent variables with $X_i\sim\mathcal{G}amma(\alpha_i,\beta)$ and $Y$ is their sum, then $$Y\sim\mathcal{G}amma\left( \sum_{i=1}^{n}\alpha_i, \beta \right).$$
> 6. $M_X(s)=\left( \dfrac{1}{1-\beta s} \right)^{\alpha},$ for $s<1/\beta.$
> 7. If $\{X_i\}_{i=1}^{n}$ is a sequence of IID exponential variables with parameter $1/\lambda$ and $Y=\sum_{i=1}^{n}X_i,$ then $Y\sim\mathcal{G}amma(n,\lambda).$

> [!thm] *Beta*
> Let $X$ be a random variable with a beta distribution with parameters $\alpha,\beta>0.$
> 
> 1. $\pi(x)$ is non-zero for $x\in[0,1]$ and equal to $$\pi(x)=\dfrac{1}{B(\alpha,\beta)}x^{\alpha-1}(1-x)^{\beta-1},$$
> where $$B(\alpha,\beta)=\int_0^1x^{\alpha-1}(1-x)^{\beta-1}dx.$$
> 2. $E[X]=\dfrac{\alpha}{\alpha+\beta}.$
> 3. $V[X]=\dfrac{\alpha\beta}{(\alpha+\beta)^{2}(\alpha+\beta+1)}.$
> 4. If $m>0$ is a natural number, then $$E[X^m]=\dfrac{B(\alpha+m, \beta)}{B(\alpha, \beta)}.$$

> [!thm] *Cauchy*
> Let $X$ be uniformly distributed in the interval $\left[ -\dfrac{1}{2}, \dfrac{1}{2} \right]$ and let $Y=\tan(\pi X).$
> 1. $\pi(y)=\dfrac{1}{\pi(1+y^2)},$ for $-\infty<y<\infty.$
> 2. $E[Y]=\mathrm{DNE}.$
> 3. $V[Y]=\mathrm{DNE}.$
> 4. $F(y)=\dfrac{1}{\pi}\arctan(y)+\dfrac{1}{2}.$
> 5. $Q(p)=\tan\left( \pi\left( p-\dfrac{1}{2} \right) \right).$
> 6. $M(s)=\mathrm{DNE}.$

> [!thm] *Simulation*
> Let $X$ be a random variable, let $U$ be a continuous uniform random variable on $[0,1],$ and let $S=Q_X(U)=\inf\{s : F_X(s)\geqslant U\}.$ Then, $F_X=F_S.$

> [!thm] *Simulation of Expected Values*
> Let $X$ be a CRV s.t. for some $a,b,c\geqslant0$ we have that $\pi(x)=0$ if $x\notin [a,b]$ and $x\pi(x)\leqslant c$ for any $x.$ Let $\{(V_i, W_i)\}_{i=1}^{n}$ be a sequence of IID random pairs taking on values in the rectangle with corners $(a,b)$ and $(b,0)$ according to a uniform distribution and let $\{Y_i\}_{i=1}^{n}$ be a sequence of IID random variables taking on the value $1$ when $W_i\leqslant V_i\pi_X(V_i)$ and otherwise $0.$ Finally, let $$Z_n=\dfrac{1}{n}\sum_{i=1}^{n} Y_i.$$
> 1. $E[Z_n]=\dfrac{E[X]}{c(b-a)}.$
> 2. $V[Z_n]\leqslant \dfrac{1}{4}.$
> 3. $\displaystyle\lim_{n \to \infty}V[Z_n]=0.$

# Convergence
Let $E[X]=\mu,V[X]=\sigma^{2},$ let $\{X_i\}_{i=1}^{\infty}$ be a sequence of IID random variables with the same distribution as $X,$ let $S_n=\displaystyle\sum_{i=1}^{n}X_i, M_n=\dfrac{S_n}{n},$ and let $$Z_n=\dfrac{S_n-n\mu}{\sigma\sqrt{ n }}.$$
> [!thm]
> 1. $E[M_n]=\mu$ and $V[M_n]=\dfrac{\sigma^{2}}{n}.$
> 2. $E[Z_n]=0$ and $V[Z_n]=1.$
> 3. $M_{Z_n}(s)=\left( M_X\left( \dfrac{s}{\sigma\sqrt{ n }} \right) \right)^n.$

> [!thm] *Markov Inequality*
> If $X$ takes only non-negative values, then for $a>0,$ $$P(X\geqslant a)\leqslant \dfrac{E[X]}a.$$

> [!thm] *Chebyshev Inequality*
> For any $c>0,$ $$P(|X-\mu|\geqslant c)\leqslant \dfrac{\sigma^{2}}{c^{2}}.$$
> In particular, if $c=k\sigma$ for $k>0,$ $$P(|X-\mu|\geqslant k\sigma)\leqslant \dfrac{1}{k^{2}}.$$
> That is, the probability of being at least $k$ standard deviations away from the mean is at most $\dfrac{1}{k^{2}}.$

> [!thm]
> If $X$ only takes values in the interval $[a, b],$ then for any $c>0$ $$P(|X-\mu|\geqslant c)\leqslant \dfrac{(b-a)^{2}}{4c^{2}}.$$

> [!thm] *Chernoff Bound*
> Let $a\in\mathbb{R}, s\geqslant 0,$ let $\phi(a)=\displaystyle\sup_{s\geqslant0}(sa-\ln M(s)),$ and suppose $M(s)$ is finite in a small interval containing $s=0.$
> 
> 1. $P(X\geqslant a)\leqslant e^{-sa}M(s).$
> 2. $P(X\leqslant a)\leqslant e^{-sa}M(s).$
> 3. $P(X\geqslant a)\leqslant e^{-\phi(a)}.$
> 4. If $a>E[X],$ then $\phi(a)>0.$
> 5. If $X$ is a standard normal variable and $a>0,$ then $P(X\geqslant a)\leqslant\exp\left( -\dfrac{a^2}{2} \right)$
> 6. If $a>E[X],$ then $P(M_n\geqslant a)\leqslant e^{-n\phi(a)}.$

> [!thm] *Jensen Inequality*
> Let $f:\mathbb{R}\to\mathbb{R}$ be a twice differential, convex function (i.e. its second derivative is non-negative at all points at which it is defined).
> 1. For any $a$ and $x,$ $f(a)+(x-a)\dfrac{d}{dx}f(a)\leqslant f(x),$ i.e. the first order Taylor approximation of $f$ underestimates $f.$
> 2. $f(E[X])\leqslant E[f(X)].$

> [!thm] *$L^p$ Convergence Implications*
> Convergence in $L^{p+1}\implies$ convergence in $L^p\implies$ convergence in probability $\implies$ convergence in distribution.

> [!thm] *Almost Surely Implications*
> a.s. convergence $\implies$ convergence in probability.

> [!thm]
> If $\{Y_n\}_{n=1}^{\infty}$ is a sequence of DRVs converging in distribution to the DRV $Y,$ then $Y_n\overset{ P }{ \to }Y.$

> [!thm] *Convergence to a Constant*
> Let $c$ be a constant and $\{Y_n\}_{n=1}^{\infty}$ and $\{W_n\}_{n=1}^{\infty}$ sequences of random variables with $Y_n\overset{ P }{ \to } Y$ and $W_n\overset{ d }{ \to } c.$ Then, $$(Y_n,W_n)\overset{ d }{ \to }(Y,c),\quad\quad W_n\overset{ P }{ \to }c.$$
> 

> [!thm]
> If $W_n\overset{ d }{ \to } Y$ and $|W_n-Y_n|\overset{ P }{ \to }0,$ then $Y_n\overset{ d }{ \to } Y.$

> [!thm] *Convergence in Distribution Algebra*
> Let $\{Y_n\}_{n=1}^{\infty}$ and $\{W_n\}_{n=1}^{\infty}$ be sequences of random variables which converge in distribution to $Y$ and $W$ respectively.
> 1. If $P(Y=c)=1,$ for some $c,$ then $Y_n\overset{ P }{ \to }Y.$
> 2. If $W=c,$ then $Y_nW_n\overset{ d }{ \to } Yc$ and $Y_n+W_n\overset{ d }{ \to } Y+c.$
> 3. If $g$ is continuous, then $g(Y_n)\overset{d}{\to}g(Y).$

> [!thm] *Convergence in Probability Algebra*
> Let $\{Y_n\}_{n=1}^{\infty}$ and $\{W_n\}_{n=1}^{\infty}$ be sequences of random variables which converge in probability to $Y$ and $W$ respectively.
> 1. $aY_n+bW_n\overset{ P }{ \to }aY+bW,$ for real $a,b.$
> 2. $Y_nW_n\overset{ P }{ \to } YW.$
> 3. If $g$ is continuous, then $g(Y_n)\overset{ P }{ \to }g(Y).$
> 4. If $P(W_n=0)=P(W=0)=0,$ then $Y_n/W_n\overset{ P }{ \to }Y/W.$
> 5. $(Y_n, W_n)\overset{ P }{ \to }(Y,W).$
> 6. If $Y_n\overset{ P }{ \to }W,$ then $P(W=Y)=1.$
> 7. If $Y_n-W_n\overset{P}{\to}0,$ then $P(W=Y)=1.$

> [!thm]
> If $Y_i$ is the $i$-th order statistic of the $X_i$ and $g_n(i)$ is the maximal $j\leqslant n$ s.t. $Y_j=X_i,$ then for any $a,b\in\mathbb{R}$ and $i\in\mathbb{N},$ $$\dfrac{g_n(i)+a}{n+b}-\widehat{F}_n(X_i)\overset{P}{\to}0.$$

> [!thm] *Convergence in $L^p$ Algebra*
> Let $\{Y_n\}_{n=1}^{\infty}$ and $\{W_n\}_{n=1}^{\infty}$ be sequences of random variables which converge in $L^p$ to $Y$ and $W$ respectively.
> 1. $E[|Y_n|^p]\to E[|Y|^p]$
> 2. $aY_n+bW_n\overset{ L^p }{ \to }aY+bW,$ for real $a,b.$
> 3. If $Y_n\overset{ L^p }{ \to }W,$ then $P(W=Y)=1.$

> [!thm] *a.s. Convergence Algebra*
> Let $\{Y_n\}_{n=1}^{\infty}$ and $\{W_n\}_{n=1}^{\infty}$ be sequences of random variables which almost surely converge to $Y$ and $W$ respectively.
> 1. $aY_n+bW_n\overset{ a.s. }{ \to }aY+bW,$ for real $a,b.$
> 2. $Y_nW_n\overset{ a.s. }{ \to } YW.$
> 3. If $P(W_n=0)=P(W=0)=0,$ then $Y_n/W_n\overset{ a.s. }{ \to }Y/W.$
> 4. If $Y_n\overset{ a.s. }{ \to }W,$ then $P(W=Y)=1.$

> [!thm] *Weak Law of Large Numbers*
> For every $\varepsilon>0,$ we have $$\lim_{ n \to \infty }P(|M_n-\mu|\geqslant \varepsilon)=\lim_{ n \to \infty }P\left(\left|\frac{S_n}n-\mu\right|\geqslant \varepsilon\right)=0.$$

> [!thm] *Strong Law of Large Numbers*
> $$P\left(\lim_{n\to\infty}M_n=\mu\right)=1.$$

> [!thm]
> Let $\{Y_n\}_{n=1}^{\infty}$ be a sequence of IID random variables whose finite sums cannot be 0. Suppose $E[X]=\mu_X$ and $E[Y_i]=\mu_Y$ are both finite and let $$W_n=\dfrac{\displaystyle\sum_{i=1}^{n} X_n}{\displaystyle\sum_{i=1}^{n} Y_n}.$$
> Then, $\{W_n\}_{n=1}^{\infty}$ almost surely converges to $\dfrac{\mu_X}{\mu_Y}.$

> [!thm]
> Let $\{Y_n\}_{n=1}^{\infty}$ be a sequence of non-negative random variables.
> 1. (*Monotone Convergence Theorem*). $E\left[ \displaystyle\sum_{n=1}^{\infty}Y_n \right]=\displaystyle\sum_{n=1}^{\infty}E[Y_n].$
> 2. If $E\left[ \displaystyle\sum_{n=1}^{\infty} Y_n \right]$ converges, the sequence of the $Y_n$ almost surely converges to 0.

> [!thm] *Approximating Probabilities*
> Suppose $P(A)=p$ where $A$ is an event. Define each $X_i$ to take the value $1$ when $A$ occurs and $0$ otherwise. Their shared expected value will be $p=E[X_i].$ Then, $$\lim_{n \to \infty}M_n=p.$$

> [!thm] *Central Limit Theorem*
> For any $x,$ $$\lim_{n\to\infty}P(Z_n\leqslant x)=\Phi(x).$$

> [!thm] *Linear Functions of Asymptotically Normal Variables are Asymptotically Normal*
> If $\{Y_n\}_{n=1}^{\infty}$ is a sequence converging to a standard normal variable, then $\{aY_n+b\}_{n=1}^{\infty},$ for scalars $a$ and $b,$ converges to a normal distribution with parameters $b$ and $a^{2}.$

> [!thm] *Approximating the Distribution $S_n$*
> If $Y$ is a normal random variable with mean $n\mu$ and variance $n\sigma^{2},$
> 1. For any $x,$ $$P(S_n\leqslant  x)\approx\Phi\left(\frac{x-n\mu}{\sigma\sqrt{n}}\right)=F_{Y}(x).$$
> 2.  For any $x,$ let $x_1=x-\varepsilon$ and $x_2=x+\varepsilon,$ for some small $\varepsilon.$ If $x_1,x_2\geqslant0,$ then, $$P(x_1\leq S_n\leq x_2)\approx\Phi\left(\dfrac{x_1-n\mu}{\sigma\sqrt{n}}\right)-\Phi\left(\dfrac{x_2-n\mu}{\sigma\sqrt{n}}\right),$$
> As $|x_1-x_2|$ goes to zero, we get $P(S_n=x)$ for some $x$. Thus, the sum of IID random variables tends to a normal distribution with parameters $\mathcal{N}(n\mu, n\sigma^2).$

> [!thm] *De Moivre-Laplace Approximation of the Binomial*
> If $S_n$ is a binomial random variable with parameters $n$ and $p,$ where $n$ is large and $l$ and $k$ are natural numbers, then $$P(k\leqslant S_n\leqslant l)\approx\Phi\left(\frac{l+\frac12-np}{\sqrt{ np(1-p)}}\right)-\Phi\left(\frac{k-\frac12-np}{\sqrt{ np(1-p)}}\right).$$
**Other Consequences:**
- Since the Poisson is a sum of independent Poisson random variable, it is also approximately normal.
# Stochastic Processes
Let $\{B_i\}_{i=1}^{\infty}$ be a Binomial process with parameter $p,$ $\{P_i\}_{i=1}^{\infty}$ a Poisson process, $\{D_i\}_{i=1}^{\infty}$ a discrete Markov chain, and $\{C_i\}_{i=1}^{\infty}$ a continuous time Markov chain.
## Bernoulli Processes
Let $\{X_n\}_{n=1}^{\infty}$ be a sequence of IID Bernoulli variables with parameter $p,$ let $\{T_n\}_{n=1}^{\infty}$ be a sequence of IID geometric variables with parameter $p,$ and let $Y_n=\displaystyle\sum_{k=1}^{n}T_k.$

> [!thm] *Equivalent Definitions*
> $\{X_n\}_{n=1}^{\infty}$ and $\{Y_n\}_{n=1}^{\infty}$ both describe the same Bernoulli process with $P(X_n=1)=P(Y_k=n),$ for some $k,$ and any $T_n$ describes interarrival times for the $X_i.$

> [!thm] *Memorylessness*
> Note $T_1$ is the time of the first success.
> 1. $\{X_n\}_{n=k}^{\infty}$ is described by the same Bernoulli process as $\{X_n\}_{n=1}^{\infty}.$
> 2. $P(T_1-n=t\mid T_1>n)=P(T_1=t).$
> 3. $E[T_1-n\mid T_1>n]=E[T_1].$
> 
> Let $N$ take non-zero natural values independently of the $T_n.$ Suppose $N=n$ has non-zero probability.
> 
> 4. $P(T_1-N=t\mid T_1>N, N=n)=P(T_1=t).$
> 5. $E[T_1-N\mid T_1>N, N=n]=E[T_1].$

> [!thm]
> The distribution of $Y_k$ is described by the Pascal PMF of order $k.$

> [!thm] *Splitting*
> Let $S_n=1$ only if $X_n=1$ and we 'accept the success' with probability $q,$ independent of all other choices, and let $F_n=1$ only if $X_n=1$ and we rejected the success with probability $1-q.$
> 1. $\{S_n\}_{n=1}^{\infty}$ is a Bernoulli process with parameter $pq.$
> 2. $\{F_n\}_{n=1}^{\infty}$ is a Bernoulli process with parameter $p(1-q).$

> [!thm] *Merging*
> Let $\{Z_n\}_{n=1}^{\infty}$ be a Bernoulli process with parameter $q$ independent of $\{X_n\}_{n=1}^{\infty}.$ Let $S_n=1$ only if either $Z_n=1$ or $X_n=1.$ The sequence $\{S_n\}_{n=1}^{\infty}$ is a Bernoulli process with parameter $$1-(1-p)(1-q)=p+q-pq.$$

> [!thm] *Pascal Processes*
> If $\{P_{n}\}_{n=1}^{\infty}$ is a sequence of IID Pascal random variables of order $k$ with parameter $p$ and $X_m=\displaystyle\sum_{n=1}^{m}P_n,$ then $\{X_n\}_{n=1}^{\infty}$ and $\{Y_{nk}\}_{n=1}^{\infty}$ both describe the same Bernoulli process with success probability $p/k.$

> [!thm] *Bernoulli Random Incidence*
> If $t>0$ is a natural number, let $L_t=Y_{k+1}-Y_{k}=T_{k+1}$ where $k=\sup\{n\in\mathbb{N}: Y_n\leqslant t\}.$ If $L=\displaystyle\lim_{t \to \infty}L_t,$ then $L$ follows a Pascal PDF of order $2.$

CCCC
> [!thm] *Pascal Random Incidence*
> Let $\{X_n\}_{n=1}^{\infty}$ be a sequence of IID Pascal random variables of order $k$ with parameter $p$ and let $S_m=\displaystyle\sum_{n=1}^{m}X_n.$ If $t>0$ is natural, let $L_t=X_{n+1}$ where $n=\sup\{m\in\mathbb{N}: S_m\leqslant t\}.$ If $L=\displaystyle\lim_{t \to \infty}L_t,$ then it follows a Pascal PDF of order $k+1.$

## Poisson Processes
Let $\{N_\tau\}_{\tau>0}$ be a family of independent, Poisson random variables with parameter $\lambda\tau$ respectively, let $\{T_k\}_{k=1}^\infty$ be a family of IID exponential random variables with parameter $\lambda,$ and let $\{Y_k\}_{k=1}^\infty$ be a sequence defined by $Y_k=\displaystyle\sum_{i=1}^kT_i.$

> [!thm] *Equivalent Descriptions*
> Both $\{N_\tau\}_{\tau>0}$ and $\{Y_k\}_{k=1}^{\infty}$ describe the same Poisson process with intensity $\lambda$ and $P(k, \tau)=P(Y_{k+1}>\tau).$ Any $T_k$ describes the interarrival times for the $N_\tau.$

> [!thm] *Memorylessness*
> 1. $\{N_\tau\}_{\tau>t},$ for $t>0,$ is described by the same Poisson process as $\{N_\tau\}_{\tau>0}.$
> 2. $P(T_1-t\leqslant s\mid T_1>t)=P(T_1\leqslant t).$
> 3. $E[T_1-t\mid T_1>t]=E[T_1].$
> 
> Let $X$ take only strictly positive values independently of the $T_n.$ Suppose $\pi(x)>0.$
> 
> 4. $P(T_1-X\leqslant t\mid T_1>X, X=x)=P(T_1\leqslant t).$
> 5. $E[T_1-X\mid T_1>X, X=x]=E[T_1].$

> [!thm]
> The distribution of the $Y_k$ is described by the Erlang PDF of order $k.$

> [!thm] *Splitting*
> If $Y_k=y,$ with probability $p$ let some $Z_n$ record it and with probability $1-p$ let some $W_m$ record it, both independently of the $Y_k,$ and record nothing else.
> 1. $\{Z_n\}_{n=1}^{\infty}$ is a Poisson process with intensity $\lambda p.$
> 2. $\{W_m\}_{m=1}^{\infty}$ is a Poisson process with intensity $\lambda(1-p).$

> [!thm] *Merging*
> Let $\{X_i\}_{i=1}^{n}$ be a sequence of Poisson processes, so each $X_i$ is a sequence of sums of IID exponentials and $X_{i, j}$ is the $j$-th term of $X_i,$ with intensities $\lambda_i$ respectively. Let $\{Z_m\}_{m=1}^{\infty}$ be a sequence defined by
> 1. $Z_1=\min(X_{1,1},X_{2,1},\ldots, X_{n,1}).$
> 2. $Z_{k+1}=\min\left\{ X_{m, p}: m\leqslant n\text{ and }p\leqslant k+1\right\}.$
> 
> The sequence of $Z_m$ is a Poisson process with intensity $$\Lambda=\sum_{i=1}^{n} \lambda_i.$$
> 
> For $n=2,$ the probability that a success in the $Z_m$ originated from $X_1$ or $X_2$ is, respectively, $$\dfrac{\lambda_1}{\lambda_1+\lambda_2},\quad\text{and}\quad\dfrac{\lambda_2}{\lambda_1+\lambda_2}.$$

> [!thm]
> $\pi_{Y_1}(y\mid Y_1\in[0, t], Y_2>t)$ is a uniform PDF.

> [!thm]
> $$\sum_{k=1}^{\infty} \pi_{Y_k}(y)=\lambda,\quad\forall y>0.$$

> [!thm]
> Let $\{Y_n\}_{n=1}^{\infty}$ have intensity $\lambda_1$ and let $\{X_n\}_{n=1}^{\infty}$ be an independent Poisson process with intensity $\lambda_2.$ Then, $$P(Y_n<X_m)=\sum_{k=n}^{n+m-1} {n+m-1 \choose k}\left( \dfrac{\lambda_1}{\lambda_1+\lambda_2} \right)^k\left( \dfrac{\lambda_2}{\lambda_1+\lambda_2} \right)^{n+m-1-k} .$$

> [!thm] *Erlang Processes*
> If $\{E_{n}\}_{n=1}^{\infty}$ is a sequence of IID Erlang random variables of order $k$ with parameter $\lambda$ and $X_m=\displaystyle\sum_{n=1}^{m}E_n,$ then $\{X_n\}_{n=1}^{\infty}$ and $\{Y_{nk}\}_{n=1}^{\infty}$ both describe the same Poisson process with intensity $\lambda/k.$

> [!thm] *Poisson Random Incidence*
> If $t>0,$ let $L_t=Y_{k+1}-Y_{k}=T_{k+1}$ where $k=\sup\{n\in\mathbb{N}: Y_n\leqslant t\}.$ If $L=\displaystyle\lim_{t \to \infty}L_t,$ then $L$ follows an Erlang PDF of order $2.$ 
> 1. $E[L]=\dfrac{2}{\lambda}.$
> 2. $V[L]=\dfrac{2}{\lambda^{2}}.$

CCCC
> [!thm] *Erlang Random Incidence*
> Let $\{X_n\}_{n=1}^{\infty}$ be a sequence of IID Erlang random variables of order $k$ with parameter $\lambda$ and let $S_m=\displaystyle\sum_{n=1}^{m}X_n.$ If $t>0,$ let $L_t=X_{n+1}$ where $n=\sup\{m\in\mathbb{N}: S_m\leqslant t\}.$ If $L=\displaystyle\lim_{t \to \infty}L_t,$ then it follows an Erlang PDF of order $k+1.$

## Finite-State Markov Chains
Let $S=\{1,\ldots, m\}$ be the set of states, let $\{X_n\}_{n=0}^{\infty}$ be a sequence of states, let $A(i)$ be the set of all states accessible from state $i,$ and let 
$$
P=\begin{bmatrix}
p_{00} & p_{01} & p_{02} & \cdots & p_{0m}\\
p_{10} & p_{11} & p_{12} & \cdots & p_{1m}\\
\vdots & \vdots & \vdots & \vdots & \vdots\\
p_{m0} & p_{m1} & p_{m2} & \cdots & p_{mm}
\end{bmatrix}
$$

> [!thm]
> All states in a recurrent class are recurrent.

> [!thm]
> There is at least one recurrent class accessible from any state.

> [!thm]
> If $s$ is recurrent, we will visit $s$ infinitely many times with probability $1$ given that we started in state $s.$

> [!thm]
> 1. Let $\beta=\displaystyle\max_{i\in S}P(X_m\text{ transient}\mid X_0=i).$ For any $n\geqslant1$ and state $i,$ $$P(X_n\text{ is transient}\mid X_0=i)\leqslant \beta^{\frac{n}{m} - n}.$$
> 2. Let $T$ be the first $n$ at which $X_n$ is recurrent. Then, $P(\exists n.\ X_n\text{ recurrent}\mid X_0=i)=1$ for all $i$ and $E[T]$ exists.

> [!thm]
> If $R$ is a recurrent class, it is aperiodic only if there is a $n$ s.t. for any $i,j\in R,$ $r_{ij}(n)>0.$

> [!thm] *Probability Path*
> Let $\{i_k\}_{k=1}^{n}$ be a sequence of states. Then, $$P\left(\bigcap_{k=0}^{n}X_k=i_k\right)=P(X_0=i_0)\prod_{k=1}^np_{i_{k-1}i_k}.$$

> [!thm] *Chapman-Kolmogorov Equation*
> The $n$-step transition probability law may be recursively defined by the following, where $i$ and $j$ are states:
> 1. $r_{i,j}(1)=p_{i,j}.$
> 2. $r_{i,j}(n_0)=\displaystyle\sum_{k=1}^{m}p_{k,j}r_{i,k}(n_0-1),$ for any $1<n_0\leqslant n.$

> [!thm]
> Suppose there is a single recurrent class and furthermore that this class is aperiodic. By the above theorem, choose $n_0$ s.t. $r_{i,j}(n_0)>0,$ for any $i$ and recurrent $j.$ Let $\{Y_n\}_{n=0}^{\infty}$ be a sequence of states independent from the $X_n$ but the with the same transition probability and with $X_0=i,Y_0=k,$ let $T=\min\{n\in \mathbb{N}: X_n=Y_n\},$ and let $\beta=\displaystyle\min_{i\in S}r_{il}(n_0)$ where $l$ is some fixed recurrent state.
> 1. $P(T\geqslant n)\leqslant c\gamma^n,$ where $c=1/(1-\beta^2)^{n_0}$ and $\gamma=(1-\beta^2)^{1/n_0}.$
> 2. $P(X_n=j\mid T\leqslant n)=P(Y_n=j\mid T\leqslant n).$
> 3. $|r_{i,j}(n)-r_{k,j}(n)|\leqslant c\gamma^n,$ for any $i,j,k,n.$
> 4. If $q_j^+(n)=\displaystyle\max_{i\in S}r_{i,j}(n)$ and $q^-_j(n)=\displaystyle\min_{i\in S}r_{i,j}(n),$ then, for any $n,$ $$q_j^-(n)\leqslant q_j^-(n+1)\leqslant q_j^+(n+1)\leqslant q_j^+(n).$$
> 5. For any $i,j,k,$ the following limits converge: $$\lim_{n \to \infty}r_{i,j}(n)=\lim_{n \to \infty}r_{k,j}(n).$$

> [!thm] *Steady-State Convergence Theorem [SSCT]*
> If the Markov Chain has a single, non-periodic recurrent class $R,$ then
> 1. For each $j,$ we have that $$\lim_{n\to\infty}r_{ij}(n)=\lim_{n\to\infty}P(X_n=j\mid X_0=i)=\pi_j,\quad\forall i.$$
> 2. The $\pi_j$ are the unique solutions to the systems of equations:
> $$
> \begin{align}
> \pi_j&=\sum_{k=1}^m\pi_kp_{kj},\quad\forall j\in S,\\
> 1&=\sum_{k=1}^m\pi_k.
> \end{align}
> $$
> 3. And,
> $$
> \begin{align}
> \pi_j&=0,\quad\forall j\notin R,\\
> \pi_j&>0,\quad\forall j\in R.
> \end{align}
> $$
> 4. If $v_{ij}(n)$ is the expected value of the number of visits to $j,$ within the first $n$ transitions, starting from state $i,$ then $$\pi_j=\lim_{n\to\infty}\frac{v_{ij}(n)}n,$$
> 5. If $q_{ij}(n)$ is the expected number of transitions from $i$ to $j,$ then, regardless of the initial state, we have that $$\lim_{n\to\infty}\frac{q_{ij}(n)}n=\pi_ip_{ij}.$$

> [!thm] *SSCT for Doubly Stochastic Matrices*
> Suppose there is a single (possibly periodic) recurrent class and that $P$ is doubly stochastic. Then, for any $j,$ $\pi_j=1/m,$ and these are the unique solutions to the balance and normalisation equations.

> [!thm]
> For $n,l\geqslant1,$ we have that $$r_{i,j}(n+l)=\sum_{k=1}^{m} r_{i,k}(n)r_{k,j}(l).$$

> [!thm]
> Let $Y_n=X_{ln}.$
> 1. $\{Y_n\}_{n=1}^{\infty}$ is a Markov chain wit transition probabilities $$P(Y_{n+1}=i\mid Y_n=j)=P(X_l=i\mid X_0=j).$$
> 2. The steady-state probabilities of $\{Y_n\}_{n=1}^{\infty}$ are identical to the ones for $\{X_n\}_{n=1}^{\infty}.$

> [!thm]
> Suppose the chain of the $X_n$ has a single recurrent class which is aperiodic with steady state probabilities $\pi_j.$
> 1. If $Y_n=(X_{n-1}, X_n),$ the steady-state probabilities of the $Y_n$ are given by $\eta_{i,j}=\pi_ip_{i,j}.$
> 2. If $Y_n=(X_{n-k}, X_{n-k+1},\ldots, X_n),$ the steady-state probabilities are given by $$\eta_{\mathbf{i}}=\pi_{i_0}\prod_{j=1}^{k}p_{i_{j-1}, i_j}.$$

> [!thm] *Local Balance Equations*
> If the Markov Chain is a Birth Death process, then
> 1. $\pi_ib_i=\pi_{i+1}d_{i+1},$ for any $i<m.$
> 2. $\pi_i=\pi_0\displaystyle\prod_{k=1}^{i}\dfrac{b_{k-1}}{d_k}.$

> [!thm] *Absorption Equations*
> Consider a chain where each state is either transient or absorbing and let $s$ be a fixed recurrent state. Then, the probabilities $a_i=P(\exists n.\ X_n=s\mid X_0=i)$ are the unique solutions to the equations
> $$
> \begin{align}
> a_s&=1,\\
> a_i&=0, & \text{for absorbing }i\ne s,\\
> a_i&=\sum_{j=1}^mp_{ij}a_j, & \text{for transient }i.
> \end{align}
> $$

> [!thm] *Expected Absorption Time*
> Let  $s$ be a fixed recurrent state and let
> $$
> \begin{align*}
> \mu_i&=E[\min\{n\geqslant0 : X_n\text{ is recurrent}\}\mid X_0=i]\\
> t_i&=E[\min\{n\geqslant0:X_n=s\}\mid X_0=i]\\
> t_s^*&=E[\min\{n\geqslant1:X_n=s\}\mid X_0=s].
> \end{align*}
> $$
> 
> 1. The $\mu_i$ are the unique solutions to the equations
> $$
> \begin{align}
> \mu_i&=0,&i\text{ recurrent},\\
> \mu_i&=1+\sum_{j=1}^mp_{ij}\mu_j,&i\text{ transient.}
> \end{align}
> $$
> 2. If $s$ is the only absorbing state, the same equations apply to $t_i.$
> 3. If $s$ is simply a state in a recurrent class, $$t_s^*=1+\sum_{j=1}^mp_{ij}t_j.$$

> [!thm]
> Suppose there is a single recurrent class and let $s$ be a particular recurrent state. Let $N=\min\{n\geqslant1: X_n=s\},$ let $\rho_i=E[\#\{n<N : X_n=i\}\mid X_0=s],$ and let $\eta_i=\rho_i/t_s^*.$
> 1. For all $i,$ $$\rho_i=\sum_{k=1}^{m} \rho_kp_{k,i}.$$
> 2. The $\eta_i$ are non-negative numbers satisfying the balance and normalisation equations.
> 3. If $i$ is recurrent, $\eta_i=1/t_i^*,$ otherwise $0.$
> 4. $\eta_i=\pi_i.$

> [!thm]
> Suppose all recurrent classes are aperiodic and let $a_i(k)$ be the probability that from state $i$ we reach the $k$-th recurrent class.
> 1. For transient $i,$ if $j$ is also transient let $\widehat{p}_{i,j}=p_{i,j},$ but if $j$ corresponds to a recurrent class let $\widehat{p}_{i,j}$ be the sum of transition probabilities from $i$ to the states in $j.$ Then, for any transient $i,$ $$a_i(k)=\widehat{p}_{i,k}\sum_{j\text{ transient}}\widehat{p}_{i,j}a_j(k).$$
> 2. If $i$ and $j$ are recurrent but belong to different classes, $r_{i,j}(n)=0.$
> 3. If $i$ and $j$ are recurrent but belong to the same class, $r_{i,j} (n)$ converges to the steady-state probability of $j$ in a chain consisting of only this particular recurrent class.
> 4. If $j$ is transient, $r_{i,j} (n)=0.$
> 5. If $i$ is transient and $j$ is recurrent, then $r_{i,j} (n)$ converges to the product of two probabilities: (1) the probability that starting from $i$ we will reach a state in the recurrent class of $j,$ and (2) the steady-state probability of $j$ conditioned on the initial state being in the class of $j.$

> [!thm]
> Suppose all states are in a single, aperiodic class, let $s$ be a state, let $Y_k=n$ only if $X_n=s$ and $\# \{X_m=s: 0\leqslant m\leqslant n\}=k,$ and let $V_n=\#\{X_m=s: 0\leqslant m \leqslant n\}.$
> 1. $Y_k/k$ a.s. converges to $t_s^*,$ the mean recurrence time of $s.$
> 2. $V_n/n$ a.s. converges to $1/t_s^*.$
> 3. $1/t_s^*=\pi_s,$ and hence $V_n/n$ a.s. converges to $\pi_s.$

### Continuous-Time
Let $X_n$ be the state after the $n$-th transition with $X_0$ being the initial state, $Y_n$ the time of the $n$-th transition with $Y_0=0,$ $T_n$ the time between the $(n-1)$-st and $n$-th transitions, and, if $n$ transitions have occurred so far and $X_n=i,$ let $A$ be a full description of the history of the chain: $$A=\{X_0=i_0,\bigcap_{k=1}^{n} T_k=t_k\text{ and }X_k=i_k\},$$
where $\{i_k\}_{k=0}^{n}$ is a sequence of states with with $i_n=i$ and $\{t_k\}_{k=0}^{n}$ is a sequence of positive real numbers. Lastly, in addition to $P$ define a probability matrix as follows:
$$
Q=\begin{bmatrix}
0 & \nu_0p_{01} & \nu_0p_{02} & \cdots & \nu_0p_{0m}\\
\nu_1p_{10} & 0 & \nu_1p_{12} & \cdots & \nu_1p_{1m}\\
\vdots & \vdots & \vdots & \vdots & \vdots\\
\nu_mp_{m0} & \nu_mp_{m1} & \nu_mp_{m2} & \cdots & 0
\end{bmatrix}.
$$

> [!thm] *Continuous SSCT*
> Suppose there is a single recurrent class. Then, for states $j$ in that class, the steady-state probabilities $\pi_j$ have the following properties:
> 
> 1. For each $j$, $$\lim_{t\to\infty}P(X(t)=j\mid X(0)=i)=\pi_j,\quad\forall i.$$
> 2. The $\pi_j$ are the unique solutions to the equations
> $$
> \begin{align}
> \pi_j\sum_{k\ne j}q_{jk}&=\sum_{k\ne j}\pi_kq_{kj}.\\
> 1&=\sum_{k=1}^m\pi_k.
> \end{align}
> $$
> 3. We have that
> $$
> \begin{align}
> \pi_j&=0, & j\text{ transient},\\
> \pi_j&>0, & j\text{ recurrent}.
> \end{align}
> $$

> [!thm]
> Suppose $\nu_i=\nu_j$ for all $i,j$ and that there is a single recurrent class.
> 1. $\{Y_n\}_{n=1}^{\infty}$ is a Poisson process with intensity $\nu_i.$
> 2. Let $X(t)$ be the state at time $t,$ or, if $t$ is a transition state, let it be the state right after $t$ in the chain. The steady-state probabilities of the $X(t)$ and the $X_n$ are identical.
