Tags: [[Stats]], [[Probability-Theory]]
# Continuous-Random-Variables
A **continuous random variable** (CRV) $X$ is one that can be described by a **probability density function** (PDF): a non-negative function $f_X$ s.t. $$P(X\in B)=\int_{B}f_X(x)dx,\quad\forall B\subseteq\mathbb{R}.$$

> [!rmk]+ Alternative Notation
> When it is clear that we are talking about the PDF of $X,$ we write $\pi(x)$ or $p(x)$ to denote $f_X(x).$

In particular,
$$
\begin{align*}
P(a\leqslant X\leqslant b)&=\int_a^bf_X(x)dx\\
\int_{\mathbb{R}}f_X(x)dx&=1.
\end{align*}
$$
So $P(X=a)=\int_a^af_X(x)dx=0$. Due to this, we only speak of a random variable being between certain distinct values, with or without the endpoints. Since any single point adds essentially nothing to the probability (something covered more extensively in a measure theory course), we can restrict ourselves to strict inequalities: $$P(a\leqslant X\leqslant b)=P(a<X<b)=P(a\leqslant X<b)=P(a<X\leqslant b).$$
 (for variables with a continuous range that are not themselves continuous, see [[Random-Variables]]).

> [!def] Expected Value
> If $X$ is a continuous random variable, its **expected value** or **mean** is the integral $$E[X]=\int_{\mathbb{R}}x\pi(x)dx.$$

The expected value does not always exist. Many of the properties from DRVs are retained. If $g(X)$ is a function of $X$, then $$E[g(X)]=\displaystyle\int_{\mathbb{R}} g(x)\pi(x)dx.$$
As before, if $g$ is linear: $$E[aX+b]=aE[X]+b$$

> [!def] Variance
> $$V[X]=E[(X-E[X])^2]=\int_{\mathbb{R}}(x-E[X])^2\pi(x)dx.$$

It behaves familiarly:
$$
\begin{align*}
V[X]&=E[X^{2}]-E[X]^{2}\\
V[aX+b]&=a^2V[X].
\end{align*}
$$

> [!def] Median
> The **median** of $X$ is the point $x$ s.t. $P(X\leqslant x)=0.5$ 

> [!def] CDF
> $$F_X(x)=P(X\leqslant x)=\int_{-\infty}^x \pi(t)dt.$$
> 
> If it is clear, we omit the subscript.

Given the heuristic of 'probability mass per unit length' for $\pi(x),$ another way to see it is with the CDF. If there's a large jump in value in the PDF curve, there will be a corresponding upward jump in the CDF curve. Unlike with DRVs, if $X$ is a CRV then $F(x)$ is a continuous function of $x.$ As before, though, the PDF and CDF can be obtained from each other: $$F(x)=\int_{-\infty}^x\pi(t)dt,$$
and, if $\pi(x)$ is continuous at $a$, $$ \pi(x)=\frac{dF}{dx}(a).$$
See [[Random-Variables|here]] for general facts that apply to both kinds of variables.
# Joint PDFs
If $X$ and $Y$ are CRVs [[Joint-Random-Variables|associated]] with the same experiment, we say they are **joint continuous** and described by the **joint PDF** $f_{X,Y}$ iff $f_{X,Y}$ is a non-negative function s.t. $$P((X,Y)\in B)=\int\int_{(x,y)\in B}f_{X, Y}(x,y)dxdy,\quad \forall B\subseteq\mathbb{R}^2.$$

> [!rmk]+ Alternative Notation
> When it is clear that we are talking about the joint PDF of $X$ and $Y,$ we agree to write $\pi(x, y)$ or $p(x, y)$ for $f_{X, Y}(x,y),$ or for any number of joint random variables.

Like before
$$
\begin{align*}
P((X, Y)\in [a, b]\times[c, d])&=\int_c^d\int_a^b\pi(x, y)dxdy\\
\int\int_{\mathbb{R}^2}\pi(x, y)dxdy&=1.
\end{align*}
$$
And, for some sufficiently small $\delta,$ $P(X\in[a,a+\delta], Y\in[c,c+\delta])\approx \pi(a,c)\cdot\delta^2$ justifies us thinking of $\pi(a,c)$ as 'probability per unit area.'
$\quad$By the **marginal PDF** we mean the function the PDF of one of the jointly continuous variables, which can be obtained through the following: $$\pi(x)=\int_{\mathbb{R}}\pi(x,y)dy,$$and similarly for $\pi(y).$
$\quad$**Expected Value.** If $Z=g(X,Y)$ is a function of $X$ and $Y,$ then $$E[g(X,Y)]=\int\int_{\mathbb{R}^2}g(x,y)\pi(x,y)dxdy.$$
If $Z=aX+bY+c,$ then $$E[aX+bY+c]=aE[X]+bE[Y]+c.$$
We define their CDF by $$F_{X, Y}(x,y)=\int_{-\infty}^x\int_{-\infty}^y\pi(s,t)dtds.$$
Again, we omit the subscript if it is clear what is meant. If $f_{X,Y}$ is continuous at $(a, b),$ then we can recover it from the CDF by $$\pi(a,b)=\frac{\partial^2F_{X,Y}}{\partial x\partial y}(a,b).$$

> [!rmk]+ Generalising
> If $\{X_i\}_{i=1}^n$ is a family of similarly-associated CRVs and $\textbf{X},\textbf{x}$ are vectors defined as in the discrete case, then they are jointly continuous iff they are described by a non-negative function $f_{\textbf{X}}$ s.t. $$P(\textbf{X}\in B)=\int\cdots\int_{\textbf{x}\in B}\pi(\textbf{x})d\textbf{x},\quad\forall B\subseteq\mathbb{R}^n.$$
> The marginal PDF for the variables of any subclass $\{X_j\}_{j=1}^m$ of $\{X_i\}_{i=1}^n$ is calculated by integrating over the other variables. Let $\textbf{X}_n$ be the original vector, $\textbf{X}_m$ the vector of our new subclass, and $\textbf{X}_{n-m}$ the vector with those variables that are not in our new subclass; then $$\pi(\textbf{x}_m)=\int\cdots\int_{\mathbb{R}^{n-m}}\pi(\textbf{x}_n)d\textbf{x}_{n-m}.$$
> If $Z=g(\textbf{X})$ is a function, then we define the expected value as $$E[g(\textbf{X})]=\int\cdots\int_{\mathbb{R}^n}g(\textbf{x})\pi(\textbf{x})d\textbf{x}.$$
> If $g$ is linear, then $$E[c_0+\sum_{k=1}^nc_kX_k]=c_0+\sum_{k=1}^nc_kE[X_k].$$
> Their CDF is defined as $$F(\textbf{x})=\int_{-\infty}^{x_1}\cdots\int_{-\infty}^{x_n}\pi(\textbf{x})d\textbf{x},$$ and can be used to retrieve the PDF by $$\pi(\textbf{a})=\frac{\partial^nF}{\partial x_1\partial x_2\cdots\partial x_n}(\textbf{a}).$$
# Conditioning

> [!def]+ Definition
> Let $X$ be a CRV. Given an event $A$ with non-zero probability, we define the **conditional PDF** of $X$ given an event $A$ as a non-negative function $f_{X\mid A}$ s.t. $$P(X\in B\mid A)=\int_Bf_{X\mid A}(x)dx,\quad\forall B\subseteq\mathbb{R}.$$

> [!rmk]+ Alternative Notation
> When it is clear that we are talking about the conditional PDF of $X$ given $A,$ we write $\pi(x\mid A)$ or $p(x\mid A)$ to denote $f_{X\mid A}(x).$

If $B=\mathbb{R},$ then we can verify normalisation and that it is a valid PDF: $$\int_{\mathbb{R}}\pi(x)dx=1.$$
If we condition on an event of the form $\{X\in A\}$ s.t. $P(X\in A)>0,$ we get something similar to the traditional definition: $$P(X\in B\mid  X\in A)=\frac{1}{P(X\in A)}\int_{A\cap B}\pi(x)dx.$$
This gets us the fact $$\pi(x\mid X\in A)=\frac{\pi(x)}{P(X\in A)},\quad\forall x\in A,$$
and 0 otherwise. Since $\dfrac{1}{P(X\in A)}$ is a constant, this conditional PDF is a scaled version of the normal PDF on the set $A.$ If $X$ and $Y$ are jointly continuous, and again conditioning on an event with strictly positive probability of the form $C=\{(X,Y)\in A\},$ then we get the **conditional joint PDF**: $$\pi(x, y\mid C)=\frac{\pi(x,y)}{P(C)},\quad\forall x\in A,$$
and 0 otherwise. We obtain the conditional marginal PDF $\pi(x\mid C)$ by integrating over one of the variables of the conditional joint PDF.

> [!rmk]+ Conditional CDF
> If $X$ and $Y$ are jointly continuous random variables and $A$ is a possible event, then the **conditional CDFs** given $A$ are defined as
> $$
> \begin{align*}
> F_{X\mid A}(x)&=\int_{-\infty}^xf_{X\mid A}(t)dt\\
> F_{X,Y\mid A}(x,y)&=\int_{-\infty}^x\int_{-\infty}^yf_{X,Y\mid A}(s, t)dtst.
> \end{align*}
> $$
> 
> When it is clear we are talking about these conditional CDFs, we write $F(x\mid A)$ or $F_X(x\mid A)$ for $F_{X\mid A}(x)$ and $F(x, y\mid A)$ or $F_{X, Y}(x, y\mid A)$ for $F_{X,Y\mid A}(x, y).$

If $\{A_i\}_{i=1}^n$ partitions the sample space, then by the total probability theorem we get
$$
\begin{align*}
P(X\leqslant x)&=\sum_{i=1}^nP(A_i)P(X\leqslant x\mid A_i)\\
F(x)&=\int_{-\infty}^x\sum_{i=1}^nP(A_i)(t\mid A_i)dt\\
\pi(x)&=\sum_{i=1}^nP(A_i)\pi(x\mid A_i).
\end{align*}
$$
When generalising, if we wish to condition on an event of form $C=\{(X_1,\ldots,X_{n-1})\in A\}$ when there are $n$ jointly continuous variables, simply transform it into $D=\{(X_1,\ldots,X_n)\in A\times\mathbb{R}\}.$ 
## Conditioning on Other Random Variables

> [!def]+ Definition
> If $X$ and $Y$ are jointly-continuous and $f_Y(y)>0,$ then the **conditional PDF** of $X$ given $Y=y$ is *defined* as $$\pi_{X\mid Y}(x\mid y)=\frac{\pi(x,y)}{\pi_Y(y)}.$$

> [!rmk]+ Alternative Notation
> When it is clear that we are talking about the conditional PDF of $X$ given $Y=y,$ we write $\pi(x\mid y)$ or $p(x\mid y)$ to denote $f_{X\mid Y}(x\mid y).$

Since each event $Y$ is a 0 probability event, we require a new definition specifically for conditioning on CRVs. Fixing $y$ as a particular number, we can view $\pi(x\mid y)$ as a function of $x$ which has the same shape as $\pi(x,t)$ but scaled by a factor of $1/\pi(y).$ Heuristically, $\pi(x\mid y)$ gives us the probability that $X$ is in a certain interval $[x, x+\delta_1]$ given that $Y$ is in a small interval $[y,y+\delta_2].$ Since $f_Y(y)$ is a marginal PDF, we get normalisation: $$\int_{\mathbb{R}}\pi(x\mid y)dx=\frac{1}{\pi(y)}\int_{\mathbb{R}}\pi(x,y)dx=\frac{\pi(y)}{\pi(y)}=1.$$
Thus, for all $y,$ $\pi(x\mid y)$ is a valid PDF. If $A\subseteq\mathbb{R},$ $$P(X\in A\mid Y=y)=\int_A\pi(x\mid y)dx.$$
We also get, by definition
$$
\begin{align*}
\pi(x,y)&=\pi(x)\pi(y\mid x)&&\forall x.\ \pi(x)>0,\\
\pi(x,y)&=\pi(y)\pi(x\mid y)&&\forall y.\ \pi(y)>0.
\end{align*}
$$
The **conditional CDFs** of $X$ or $X$ and $Y$ given $Z=z$ are analogously defined and denote by $F_{X\mid Z}(x\mid z), F(x\mid z), F_{X,Y\mid Z}(x,y\mid z),$ or $F(x,y\mid z).$

> [!rmk]+ Generalising
> If $X, Y$ and $Z$ are jointly continuous, we define the following conditional PDFs:
> $$
> \begin{align*}
> \pi(x,y\mid z)=\frac{\pi(x,y,z)}{\pi(z)}&&\forall z.\ \pi(z)>0,\\
> \pi(x\mid y, z)=\frac{\pi(x,y,z)}{\pi(y,z)} &&\forall y, z.\ \pi(y, z)>0,
> \end{align*}
> $$
> and so on. Everything said above follows easily from this.

When taking functions of random variables and conditioning on taking a particular value, it is temping to replace the variable by that value in the function, that $P(f(X,Y)\mid Y=y)=P(f(X,y)).$ Although this is not true, a similar equation holds:

> [!thm] Theorem
> Let $\mathbf{X,Y}$ be random vectors and $f(\mathbf{X},\mathbf{Y})$ a function of both. For any $\mathbf{y}$ of appropriate length and measurable $A,$ $$P(f(\mathbf{X,Y})\in A\mid \mathbf{Y=y})=P(f(\mathbf{X,y})\in A\mid \mathbf{Y=y}).$$
> If $\mathbf{X}$ and $\mathbf{Y}$ are independent, $$P(f(\mathbf{X,Y})\in A\mid \mathbf{Y=y})=P(f(\mathbf{X,y})\in A).$$

If $F(\mathbf{x})=F_{\mathbf{X}}(\mathbf{x}\mid\mathbf{Y=y}),$ Simply note the equations
$$
\begin{align*}
P(f(\mathbf{X,Y})\in A\mid \mathbf{Y=y})&=\int_{A} f(x,y)dF\\
P(f(\mathbf{X,y})\in A\mid \mathbf{Y=y})&=\int_{A} f(x,y) dF.
\end{align*}
$$

### Conditional Expectation

> [!rmk]+ Eveything that was true in the discrete case has a translation
> Let $X$ and $Y$ be jointly continuous, $g(X)$ a function of $X,$ $h(X,Y)$ a function of $X$ and $Y,$ and $A$ is an event of strictly positive probability. (derivations)
> $$
> \begin{align*}
> E[X\mid A]&=\int_{\mathbb{R}}x\pi(x\mid A)dx\\
> E[g(X)\mid A]&=\int_{\mathbb{R}}g(x)\pi(x\mid A)dx\\
> E[X\mid Y=y]&=\int_{\mathbb{R}}x\pi(x\mid y)dx\\
> E[g(X)\mid Y=y]&=\int_{\mathbb{R}}g(x)\pi(x\mid y)dx\\
> E[X]&=\int_{\mathbb{R}}E[X\mid Y=y]\pi(y)dy\\
> E[g(X,Y)\mid Y=y]&=\int_{\mathbb{R}}g(x,y)\pi(x\mid y)dx\\
> E[g(X,Y)]&=\int_{\mathbb{R}}E[g(X,Y)\mid Y=y]\pi(y)dy.
> \end{align*}
> $$

## Independence
Just like in the discrete case, some jointly continuous random variables $X, Y,$ and $Z$ are **independent** iff $$\pi(x,y,z)=\pi(x)\pi(y)\pi(z),\quad\forall x, y, z.$$
For events of the form $\{X\in A\}$ and $\{Y\in B\}$ we also get that $$P(X\in A\cap Y\in B)=P(X\in A)P(Y\in B).$$
Which when applied to the CDF yields $$\pi(x,y)=P(X\leqslant x,Y\leqslant y)=P(X\leqslant x)P(Y\leqslant y)=F(x)F(y),\quad\forall x,y.$$
Remember that the above serves as a definition of independence for [[Random-Variables#Conditioning and Independence|any]] pair of random variables, this equation implies independence as defined at the beginning of the section. Similarly, as with any [[Random-Variables#Conditioning and Independence|sequence]] of independent random variables, the following hold:
- For any function $g$ and $h,$ $$E[h(X)g(Y)]=E[h(X)]E[g(Y)].$$
- $V[X+Y]=V[X]+V[Y].$
- (TO SHOW) If $A$ is an event, $X$ and $Y$ are conditionally independent on $A$ iff $$\pi(x, y\mid A)=\pi(x\mid A)\pi(y\mid A),\quad\forall x, y.$$
The above condition is equivalent to $$F(x,y\mid A)=F(x\mid A)F(y\mid A),\quad\forall x,y.$$