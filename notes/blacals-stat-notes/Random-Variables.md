Tags: [[Stats]], [[Probability-Theory]]

# Random Variables and Vectors
Intuitively, the value of $X$ is determined by the outcomes in $\Omega$ of a probabilistic experiment, i.e. it carries outcomes to values. As mentioned [[Probability-Theory|here]], mathematical functions are deterministic, so to model randomness one approach is to constrain ourselves to talking about the distribution of $X.$ Given a distribution on $\Omega,$ measure theory provides us a tool, the push-forward measure, to give a distribution to $X.$ Intuitively, the probability that $X\in A$ is the probability of all outcomes forcing $X$ to take values in $A.$

> [!def] Random Variable
> A measurable function $X:\left\langle \Omega,\mathcal{F},P \right\rangle\to\left\langle \Omega',\mathcal{F}',\mu \right\rangle,$ typically taking $\Omega'$ to be $\mathbb{R}$ and $\mu$ the Lebesgue measure. The **distribution of $X$** is the [[Probability-Theory#Definitions and General Concepts|push-forward]] measure of $X$ on $\Omega'$ defined by $P_X=P\circ \breve X.$ We denote $P_X(A)$ by $P(X\in A).$ If $\Omega'=\mathbb{R},$ the **cumulative distribution function (CDF)** of $X$ is the function $F_X(x)=P_X((-\infty,x]).$ $X$ is **discrete** only if $P(X\in A)=1$ for some at most countable $A\subseteq\mathbb{R},$ $X$ is **continuous** iff $P(X=x)=0$ for each $x,$ **absolutely continuous** iff there is a non-negative function $f_X:\mathbb{R}\to\mathbb{R}$ s.t., for any real $a<b,$ $$P(X\in(a,b])=\int_{(a,b]} f_X d\mu,$$ and otherwise **mixed.** A non-negative function $\pi_X : \Omega' \to\mathbb{R}$ is called a **probability density function (pdf),** of $X,$ or **probability mass function (pmf)** if it is discrete, only if $$P(X\in A)=\int_{A} \pi_X d\mu.$$
> When context is clear, we omit the subscript.

> [!rem] Notation
> Since $P_X$ is determined by $F_X,$ we shall use $F_X$ when integrating.

It is a theorem in measure theory that if $P_X(A)=0$ whenever $\mu(A)=0,$ then, at least for probability spaces, there is a non-negative function $f$ called the **Radon-Nikodym derivative of $P_X$ w.r.t. $\mu,$** denoted $\dfrac{dP_X}{d\mu},$ s.t. $$P(X\in A) = P_X(A)=\int_{A} f d\mu.$$ The function $f$ is not unique but if another function $g$ has these properties then $f=g$ a.e. $(\mu),$ i.e. $\mu(f\ne g)=0.$ For this reason, we shall mostly use the CDF of random variables and avoid mentioning the PDF or PMF.

> [!rem] Convention for PDFs and PMFs
> If $F_X$ is differentiable we take it that $\pi_X=F_X'.$ If this is true, we have a continuous variable. If $X$ is discrete, $\pi_X(x)=P(X=x).$ If a mixed random variable $Z$ has a CDF of the form $$F_Z=\sum_{i=1}^{n}p_iF_{X_i},$$
> where $\sum_{i=1}^{n}p_i=1$ and each $X_i$ is discrete or its CDF is differentiable, the density of $Z$ is set to $$\pi_Z=\sum_{i=1}^{n} p_i\pi_{X_i}.$$

Under our convention for PMFs and PDFs, the PMF of a discrete variable has an obvious interpretation as the probability of taking on the given value. As such, PMFs take values in the unit interval. PDFs, however, can take any value so long as it is non-negative and the function integrates to $1.$ Some are even unbounded, so $\pi_X(x)$ is no probability at all. Only the 'area under the curve' given by $\pi_X(x)$ is a probability. That said, $\pi_X(x)$ can be interpreted heuristically as 'probability mass per unit length' — the rate at which probabilities accumulate — since, for small $\varepsilon>0,$ $$P(X\in B_\varepsilon(x))=\int_{x-\varepsilon}^{x+\varepsilon}\pi_Xd\mu\approx 2\varepsilon\pi_X(x).$$

> [!rem] Modelling Variables with Dense Outcomes
> Discrete outcomes which are sufficiently close to each other, e.g. getting paid a certain amount to the nearest cent, may be modelled as if they were continuous.

Given a pair of variables $X,Y,$ we should be able to describe the probability that both $X\in A$ and $Y\in B,$ e.g. the probability a die lands on 1 and a coin on heads. Since a measure is uniquely determined by its values on initial segments of $\mathbb{R},$ something similar might hold for $\mathbb{R}^2,$ or indeed $\mathbb{R}^n,$ so that events of the form $\{X\leqslant x, Y\leqslant y\}$ will uniquely determine the whole distribution. Sets of the form $(-\infty,x]\times(-\infty,y]$ are countable intersections of open sets in $\mathbb{R}^2,$ so they completely determine $\mathcal{B}(\mathbb{R}^2),$ allowing us to focus just on these products. The same holds in $\mathbb{R}^n.$ However, $X$ and $Y$ may not be independent, whatever that means for variables, so we cannot just say $$P(X\leqslant x,Y\leqslant y)=P(X\leqslant x)P(Y\leqslant y) .$$
If we treat $P(X\leqslant x,Y\leqslant y)$ as if it meant '$P(X\leqslant x\text{ and }Y\leqslant y),$' the [[Probability-Theory#Conditional Probabilities|TPT]] suggests that $$P(X\leqslant  x)=\sum_{n=1}^{\infty} P(X\leqslant x,Y\in(y_{n-1},y_n]),$$
where $\{(y_{n-1},y_n]\}_{n=1}^{\infty}$ form a partition of $\mathbb{R}.$ More broadly, we want the following to hold: $$P(X\in A)=P(X\in A,Y\in \mathbb{R})=\int_{\mathbb{R}}  dG_A=J(A),$$
where $G_A(B)=P(X\in A,Y\in B).$ If there is such a distribution on $\mathbb{R}^2,$ $J$ is also a distribution:
1. $J(\mathbb{R})=P((X,Y)\in \mathbb{R}^2)=1.$
2. $J(\varnothing)=P((X,Y)\in \varnothing)=0.$
3. If $\{A_n\}_{n=1}^{\infty}$ is a partition of $\mathbb{R},$ $$J\left( \bigcup_{n=1}^{\infty} A_n \right) =P\left((X,Y)\in \bigcup_{n=1}^{\infty}A_n\times \mathbb{R} \right)=\sum_{n=1}^{\infty} J(A_n).$$
All we need is that $J=P_X.$ Because there are multiple choices for a distribution on $(X,Y),$ it is easier to begin with one of these distributions and define the distribution of the individual variables using the same procedure as $J.$

> [!def] Random Vectors and Joint Random Variables
> Measurable functions $X=(X_1,\ldots,X_n)$ valued in $\mathbb{R}^n,$ where $X_i=\pi_i\circ X.$ We denote $P\left( X\in \prod_{i=1}^{n}A_i \right)$ with $P(X_1\in A_1,\ldots, X_n\in A_n).$ The **joint CDF** of $X$ is the function $$F_{X}(\vec x)=P\left( X\in \prod_{i=1}^{n}(-\infty,x_i] \right) .$$
> If $Y=(X_{1},\ldots,X_{k})$ for a strictly increasing sequence $\{i_j\}_{j=1}^{k}$ from $\{1,\ldots,n\},$ the **marginal distribution** of $Y$ is defined by $$P\left( Y\in A \right)=P\left( X\in \breve \pi_{\vec i}(A) \right),$$
> where $\pi_{\vec i}(x)=(x_{i_1},\ldots,x_{i_{k}}).$ The **marginal CDF,** **density,** and **PMF** are similarly defined.

Because rearranging the components of $X$ makes no practical difference, many of the theorems for marginal distributions will be stated for the an initial segment of the components.

> [!thm]
> Let $X$ be a random vector in $\mathbb{R}^n.$
> 1. If $Y=(X_1,\ldots,X_k),$ then $$F_Y(\mathbf{y})=\int_{-\infty}^{y_1} \cdots \int_{-\infty}^{y_k} \int_{-\infty}^{\infty} \cdots\int_{-\infty}^{\infty} dF_X.$$
> 2. If $\dfrac{\partial}{\partial \vec x }F_X(\vec x)=\partial_n\cdots\partial_1F_X(\vec x)$ always exists, it is a density of $X.$

Note that measurable functions of random variables are again random variables for if $X:\Omega\to \mathbb{R}^n$ is a measurable function and $f$ is a measurable function on a subset of $\mathbb{R}^n$ containing $\operatorname{ran}X$ valued in $\mathbb{R}^m,$ $Y=f(X)=f\circ X$ is a measurable function from $\Omega$ to $\mathbb{R}^n.$ Henceforth, all functions of random variables are measurable. The distribution of $Y$ is simple enough theoretically.

> [!thm]
> If $Y=f(X)$ and $A=\displaystyle\prod_{i=1}^{m}(-\infty,y_i],$ then $P_Y=P_X\circ \breve f$ and $$F_Y(\vec y)=\int_{\breve{f}(A)}  dF_X.$$

More elementary expressions can be hard to find. Some can be found [[Inferential-Statistics|here]].

# Conditioning and Independence
There are a few ways to condition a random variable. We could condition on an event $A\subseteq\Omega,$ and event of the form $X\in A,$ or condition on another random variable $Y=y.$ The first two are fairly simple for we know what it means to condition events and the last sense is clear when $Y$ is discrete and less so otherwise.

> [!def] Conditioning on Events or Itself
> Let $A\subseteq\Omega$ be an event, $X,Y$ random vectors, and $B\subseteq \mathbb{R}^n,C\subseteq\mathbb{R}^m$ measurable sets. The **conditional distribution of $X$ given $A,$** **given $X\in B,$** and **given $Y\in C,$** respectively, are the following functions:
> $$
> \begin{align*}
> P(X\in D\mid A)&=\dfrac{P(\breve X(D)\cap A)}{P(A)}\\
> P(X\in D\mid X\in B)&=\dfrac{P(X\in D\cap B)}{P(X\in B)}\\
> P(X\in D\mid Y\in C)&=\dfrac{P(X\in D,Y\in C)}{P(Y\in C)}
> \end{align*}
> $$
> assuming the denominators are positive. The respective CDFs and densities are denoted $F_{X\mid A},\pi_{X\mid A},$ or $F_X(\vec x\mid A),\pi_X(\vec x\mid A),$ and $F_{X}(\vec x\mid X\in B),\pi_{X}(\vec x\mid X\in B).$

Conditioning on $Y=y$ can at times be well-motivated. If $Y$ is discrete, $$P(X\in A\mid Y=y)=\dfrac{1}{P(Y=y)}\int_{A} \pi(x,y) dx,$$
for any density $\pi(x,y)$ of the joint distribution and where $$P(Y=y)=\int_{\mathbb{R}} \pi(x,y)dx.$$
More generally, differentiating we get that the density $\pi(x\mid y)$ for $P(X\in A\mid Y=y)$ is proportional to the joint density with proportionality constant $1/\pi_Y(y),$ assuming $\pi_Y(y)>0.$

> [!def] Conditional Density
> Given random vectors $X,Y$ and $\vec y \in \mathbb{R}^m,$ a version of the **conditional probability of $X\in A$ given $Y=\vec y$** is the quantity $$P(X\in A\mid Y=\vec y) = \dfrac{\int_{A} \pi(\vec x,\vec y) d\vec x}{\pi_Y(\vec y)} = \dfrac{\int_{A} \pi(\vec x,\vec y) d\vec x}{\int_{\mathbb{R}^n} \pi(\vec x,\vec y) d\vec x},$$
> for some joint density $\pi(x,y)$ of the joint probability $P_{X,Y}.$ The corresponding **conditional density of $X$ given $Y=\vec y$** is $$\pi_{X\mid Y}(\vec x\mid \vec y)=\dfrac{\pi(\vec x,\vec y)}{\int_{\mathbb{R}^n} \pi(\vec t,\vec y) d\vec t}=\dfrac{\pi(\vec x,\vec y)}{\pi_Y(\vec y)}.$$
> The corresponding **conditional CDF of $X$ given $Y=\vec y$** is denoted $F_{X\mid Y}(\vec x\mid y).$ When context is clear, we omit the subscripts.

> [!rem] Formal Perspective
> Another perspective is to view $P(X\in A\mid Y=\vec y)$ as a random variable, for $A\in\mathcal{B}(\mathbb{R}^n)$ fixed. It shall satisfy the equation $$\int_{B} P(X\in A\mid Y) dP=P(X\in A\mid Y\in B),$$
> where it is thought of as a function of many variables constant in $\vec x.$ Let $\mathscr{G}=\{\breve Y(E) : E\in\mathcal{B}(\mathbb{R}^m)\}$ and define $$\nu_A(B)=P(A\cap B),\quad \forall B\in\mathscr{G}.$$
> Then it has a Radon-Nikodym derivative $f,$ denoted $P(A\|Y),$ which is a random variable — due to being the derivative of $\nu_A$ — satisfying $$\int_{B} f dP=\int_{B} f(\omega)\pi(\omega) d\mu=\int_{B}P(A\|Y)dP=\nu_A(B)=P(A\cap B),\quad\forall B\in\mathscr{G}.$$
> Any other random variable satisfying these equations is called a version of $P(A\|Y).$ If $A=\breve X(E),$ we may show $P(X\in E\mid Y=\vec y)$ as defined above is a version of $P(A\|Y)$ and all versions agree with probability 1.

> [!thm]
> $$\int_{B} P(X\in A\mid Y) dP=\int_{B} P(X\in A\mid Y=y)\pi(x,y) dxdy=P(X\in A,Y\in B).$$

Since we may take functions of multiple random variables, an obvious question relevant for computation is whether $P(f(X,Y)\mid Y=\vec y)=P(f(X,\vec y)).$ Although this is generally false, something similar holds.

> [!thm] Theorem (UUUUU)
> If $f(X,Y)\in\mathbb{R}^k$ is a function of random vectors $X\in \mathbb{R}^n,Y\in \mathbb{R}^m,$ then, for any $\vec y\in \mathbb{R}^m$ and $A\in\mathcal{B}(\mathbb{R}^k),$ $$P(f(X,Y)\in A\mid Y=\vec y)=P(f(X,\vec y)\in A\mid Y=\vec y).$$

## Independence

> [!def] Independent and Identically Distributed (IID)
> Random variables in a set $V$ are **independent and identically distributed (IID)** iff they are independent and have the same distribution.


> [!thm]+ Total Expectation Theorem
> Let $X$ be a random variable and $\{A_i\}_{i=1}^n$ a partition of the sample space where each $A_i$ has strictly positive probability. Then, $$E[X]=\sum_{i=1}^nP(A_i)E[X\mid A_i]$$

For *any* sequence of random variables $X=\{X_i\}_{i=1}^n$ we say they are **independent** iff $$F_{X}(\vec x)=\prod_{i=1}^n F_{X_i}(x_i),\quad\forall \vec x\in\mathbb{R}^n.$$
The expectation and variance behave as in the case where they are all of the same type:

> [!thm]
> - The expectation of the product of functions of independent random variables is the product of the expectations: $$E\left[\prod_{i=1}^ng_i(X_i)\right]=\prod_{i=1}^nE[g_i(X_i)].$$
> - The variance of their sum is the sum of their variance: $$V\left[\sum_{i=1}^nX_i\right]=\sum_{i=1}^nV[X_i].$$

Conditional independence equally makes sense.

> [!def] Conditionally Independent
> For any event $A,$ we say the general sequence is **conditionally independent** on $A$ iff $$F_{X}(\vec x\mid A)=\prod_{i=1}^nF_{X_i}(x_i\mid A)\quad\forall \vec x\in\mathbb{R}^n.$$


# Expectation and Variance

> [!rem] Formal Conditional Probabilities as Expectations
> Note that $$\int_{B} f dP=\int_{B} f(\omega)\pi(\omega) d\omega,$$
> hence we are stating $E[f\mathbb{1}_B]=E[P(A\|Y)\mathbb{1}(Y\in B)]=P(A\cap B).$ 

# Divergence of Distributions
## Kullback-Leibler

> [!def] Kullback-Leibler Divergence
> Given probability measures $P_1,P_2$ with distributions $F_1,F_2$ and densities $\pi_1,\pi_2,$ on the same space $\Omega$ and $P_1\ll P_2,$ their **KL divergence** or **KL distance** is the quantity $$D_{\mathrm{KL}}(F_1\| F_2) = D_{\mathrm{KL}}(F_1,F_2) = E_1\left[ \log\left( \dfrac{dP_1}{dP_2}(X) \right)  \right] = \int_{\mathcal{X}} \log\left( \dfrac{dP_1}{dP_2} \right) dF_1 = \int_{\mathcal{X}} \log\left( \dfrac{\pi_1}{\pi_2} \right) dF_1.$$
> Given a family of distributions with parameters in $\Theta,$ when context is clear, $$D_{\mathrm{KL}}(\theta\|\theta')=D_{\mathrm{KL}}(\theta,\theta')=D_{\mathrm{KL}}(F(-;\theta),F(-;\theta')).$$

> [!thm]
> 1. $D_{\mathrm{KL}}(F\|G)\geqslant0.$
> 2. $D_{\mathrm{KL}}(F\|F)=0.$

```ad-note
title:Derivation
collapse:closed

The second property is obvious for $\log(\pi_X/\pi_X)=\log1=0$ and $\displaystyle\int_{\mathcal{X}} 0\ dF_X=0.$ As for the first, note that $$D_{\mathrm{KL}}(F\|G)=\int_{\mathcal{X}} -\log\left( \dfrac{\pi_G}{\pi_F} \right)  dF.$$
By [[Convergence-Phenomena-and-Inequalities#Inequalities|Jensen's inequality]], since $-\log$ is convex, $$D_{\mathrm{KL}}(F\|G)\geqslant -\log\left( E_F\left[ \dfrac{\pi_G}{\pi_F} \right]  \right) = -\log\left( \int_{\mathcal{X}} \dfrac{\pi_G}{\pi_F}\pi_F dx \right) = -\log\left( \int_{\mathcal{X}} \pi_G dx \right) = -\log(1)=0.$$
```

Note that in general this is not symmetric and one of $D_{\mathrm{KL}}(F\|G)$ or $D_{\mathrm{KL}}(G\|F)$ may exist without the other.