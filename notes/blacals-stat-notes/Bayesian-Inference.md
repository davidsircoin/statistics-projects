Tags: [[Stats]], [[Statistical-Methods]], [[Inferential-Statistics]]

# Bayes Rule
Suppose $B$ is any event with non-zero probability and $\{A_i\}_{i=1}^n$ is a partition of the sample space into non-zero probability events. Then, using the [[Probability-Theory#Conditional Probabilities|TPT]], we can derive a generalised version of Bayes's Rule for each $i:$

> [!thm]+ Generalised Bayes's Rule
> $$
> \begin{align*}
> P(A_i\mid B)&=\frac{P(A_i)P(B\mid A_i)}{P(B)}\\
> &=\frac{P(A_i)P(B\mid A_i)}{P(A_1)P(B\mid A_1)+P(A_2)P(B\mid A_2)+\ldots+P(A_n)P(B\mid A_n)}\\
> &=P(A_i)P(B\mid A_i)\left(\sum_{k=1}^nP(A_k)P(B\mid A_k)\right)^{-1}
> \end{align*}
> $$

Looking at only $A$ and $B$ we have that $$P(A\mid B)=\frac{P(A)P(B\mid A)}{P(B)}=\frac{P(A)P(B\mid A)}{P(A)P(B\mid A)+P(A')P(B\mid A')}.$$
since $\{A, A'\}$ is a partition of the sample space where $A'$ is the complement of $A$. In the general case, $P(A_i)$ is called the **prior probability**, or just prior, and $P(A_i\mid B)$ the **posterior probability**, or just the posterior. This equation is used for inferencing cause-and-effect relations where $B$ is the effect and each $A_i$ is associated with the causes: what is the probability $P(A_i\mid B)$ that the cause $A_i$ is present given $B$ is observed, though this won't really be touched here.

> [!thm]+ Discrete version
> If $X$ is a DRV and $A$ is any event with strictly positive probability, then
> $$p_{X\mid A}(x)=\frac{p_X(x)P(A\mid X=x)}{P(A)}=\frac{p_X(x)P(A\mid X=x)}{\sum_tp_X(t)P(A\mid X=t)}.$$

> [!thm]+ Continuous version
> If $X$ is continuous, $$f_{X\mid A}(x)=\frac{f_X(x)P(A\mid X=x)}{P(A)}=\frac{f_X(x)P(A\mid X=x)}{\int_{\mathbb{R}}f_X(t)P(A\mid X=t)dt}.$$
## Inference From Known Distributions
Although the following formulas might present bayesian inference as an easy matter, the troubles mainly lie in choosing the right way to model an experiment, as well with the general difficulty of certain sums or integrals.
$\quad$Let $A$ be an observed event whose occurrence is unknown and $Y$ be a random variable s.t. we know the conditional PDF or PMF of $Y$ conditioned on $A$ and on $A'.$ Excluding mixed variables, we have 2 cases: $Y$ is continuous or discrete.
### $Y$ is Continuous
Here we can think of $\{Y=y\}$ as the probability that $Y$ is in a sufficiently small interval around $y.$ Assuming $f_Y(y)>0,$ due to Baye's Rule we have:
$$
\begin{align*}
P(A\mid Y=y)&\approx P(A\mid Y\in[y, y+\delta])\\
&=\frac{P(A)P(Y\in[y,y+\delta]\mid A)}{P(Y\in[y,y+\delta])}\\
&\approx\frac{P(A)f_{Y\mid A}(y)\delta}{f_Y(y)\delta}\\
&=\frac{P(A)f_{Y\mid A}(y)}{f_Y(y)}.
\end{align*}
$$
Since $\{A, A'\}$ partitions the sample space, by the TPT we can calculate the denominator, leaving us with $$P(A\mid Y=y)=\frac{P(A)f_{Y\mid A}(y)}{f_Y(y)}=\frac{P(A)f_{Y\mid A}(y)}{P(A)f_{Y\mid A}(y)+P(A')f_{Y\mid A'}(y)}.$$Note that we must know $P(A), f_{Y\mid A}(y),$ and $f_{Y\mid A'}(y).$ As noted above, we can manipulate these to get any of the values in terms of the others. 
$\quad$If $A$ is an event of the form $\{X=x\}$ for a **DRV** $X,$ then we have a slightly different formula using conditional PDFs:

> [!thm]+ ***$X$ is Discrete***
> $$
> \begin{align*}
> P(X=x\mid Y=y)&=\frac{p_X(x)f_{Y\mid X}(y\mid x)}{f_Y(y)}\\
> &=\frac{p_X(x)f_{Y\mid X}(y\mid x)}{\displaystyle\sum_zp_X(z)f_{Y\mid X}(y\mid z)}\\
> f_Y(y)&=\sum_zp_X(z)f_{Y\mid X}(y\mid z)
> \end{align*}
> $$
Like above, we may manipulate these equations to get, for example, $f_{Y\mid X}(y\mid x)$ in terms containing $p_{X\mid Y}(x\mid y).$

> [!thm]+ ***$X$ is Continuous***
> $$
> \begin{align*}
> f_{X\mid Y}(x\mid y)&=\frac{f_X(x)f_{Y\mid X}(y\mid x)}{f_Y(y)}\\
> &=\frac{f_X(x)f_{Y\mid X}(y\mid x)}{\displaystyle\int_{\mathbb{R}}f_X(t)f_{Y\mid X}(y\mid t)dt}.
> \end{align*}
> $$
### $Y$ is discrete
Apply the usual translation (PDF for PMF and sums for integrals etc.).
$$
\begin{align*}
P(A\mid Y=y)&=\frac{P(A)p_{Y\mid A}(y)}{p_Y(y)}\\
&=\frac{P(A)p_{Y\mid A}(y)}{P(A)p_{Y\mid A}(y)+P(A')p_{Y\mid A'}(y)}\\
&=\frac{P(A)p_{Y\mid A}(y)}{\displaystyle\sum_t P(A\mid Y=t)}\\
\end{align*}
$$
We also obtain similar formulas for the conditional probability law of a random variable $X$ given $Y=y.$
> [!thm]+ $X$ is Continuous
> $$
> \begin{align*}
> p_{X\mid Y}(x\mid y)&=\frac{f_X(x)p_{Y\mid X}(y\mid x)}{p_Y(y)}\\
> &=\frac{f_X(x)p_{Y\mid X}(y\mid x)}{\displaystyle\int_{\mathbb{R}}f_X(t)p_{Y\mid X}(y\mid t)dt}\\
> p_Y(y)&=\int_{\mathbb{R}}f_X(t)p_{Y\mid X}(y\mid t)dt
> \end{align*}
> $$

> [!thm]+ $X$ is Discrete
> $$
> \begin{align*}
> p_{X\mid Y}(x\mid y)&=\frac{p_X(x)p_{Y\mid X}(y\mid x)}{p_Y(y)}\\
> &=\frac{p_X(x)p_{Y\mid X}(y\mid x)}{\displaystyle\sum_tp_X(t)p_{Y\mid X}(y\mid t)}
> \end{align*}
> $$
# Posterior Distribution
The main aim of Bayesian inference is to find the posterior distribution of the unknown factors given some evidence. Our model is set up as follows:

1. Let $\Theta$ be a random variable that models the unknown factors in our model. It may represent a single parameter, multiple, be composed of multiple random variables, or whatever else. Unless otherwise stated we assume $\Theta$ is a single random variable, not a collection.
2. Our observations will be captured by the collection $X=(X_1,\ldots, X_n)$ of related random variables called our **observations, measurements,** or an **observation vector.** 
3. Suppose we know (i) the prior distribution $p_\Theta$ or $f_\Theta$ of $\Theta,$ depending on what kind of random variable it is, and (ii) the conditional distribution $p_{X\mid \Theta}$ or $f_{X\mid \Theta}$ depending what sort of random variable $X$ is. 

Once we make an observation $x$ of $X$ the posterior distribution $\pi(\theta\mid x)$ ($\pi$ [[Random-Variables|notation]]) gives a complete answer to the Bayesian inference problem. We summarise the versions of Bayes's Rule with $\pi$ notation, understanding that if $\Theta$ is a vector then the sums and integrals are also appropriately multi-dimentional:

> [!thm]+ The Four Versions of Bayes's Rule
> - $\Theta$ discrete: $$\pi(\theta\mid x)=\frac{\pi(\theta)\pi(x\mid \theta)}{\displaystyle\sum_{\theta'}\pi(\theta')\pi(x\mid \theta')}.$$
> - $\Theta$ continuous: $$\pi(\theta\mid x)=\frac{\pi(\theta)\pi(x\mid \theta)}{\displaystyle\int_{\mathbb{R}} \pi(\theta')\pi(x\mid \theta')d\theta'}.$$
A list of priors and their properties can be found [[Bayesian-Priors|here]].
## Recursive Inference
If we the posterior distribution of $\Theta$ is in the same family as the prior, we can efficiently solve inference problems for any new observations recursively. That is, if we've made observations $X_1,\ldots,X_n,$ $\pi(\theta\mid x)\sim D(\mathbf{a}),$ where $D(\mathbf{a})$ is a distribution with parameters $\mathbf{a},$ and $\pi(\theta)\sim D(\mathbf{b}),$ then we may solve the inference problem induced by a new observation $X_{n+1}$ recursively by treating the old posterior $f_{\Theta\mid X_1,\ldots,X_n}$ as the new prior to solve for $f_{\Theta\mid X_1,\ldots, X_{n+1}}$ instead of starting again from the beginning. This is not very common. Prominent examples are normal priors, binomial (and therefore Bernoulli), and beta priors.
## Multiparameter Problems
The general methods for inference problems involving multiple unknown parameters are near identical to the ones we use for single-variable problems. Exact solutions tend to be evermore computationally intractable so numerical methods are employed—even those become inaccurate at higher dimensions.

```ad-example
title:Bivariate Normal Priors
collapse:closed

Let $\Theta=(\Theta_1, \Theta_2)$ have a standard bivariate normal prior with $\Theta_1$ and $\Theta_2$ uncorrelated. That is, $$\pi(\theta_1,\theta_2)=\dfrac{1}{2\pi}\exp\left( -\dfrac{\theta_1^{2}+\theta_2^{2}}{2} \right) .$$
Let $\mathbf{s}_i=(a_i, b_i)$ be fixed, let $\{X_i\}_{i=1}^{n}$ be a sequence of conditionally independent Bernoulli variables with respective parameters $\exp(-|\mathbf{s}_i-\vec\theta|)$ given $\Theta=\vec \theta,$ and let $S=\{i\leqslant n: X_i=1\}.$ Then, $$\pi(\theta)\pi(\vec x\mid\vec \theta)=\dfrac{1}{2\pi}\exp\left( -\dfrac{\theta_1^{2}+\theta_2^{2}}{2}-\sum_{i\in S}|\mathbf{s}_i-\vec\theta| \right)\prod_{i\notin S}\left( 1-\exp\left( -|\mathbf{s}_i-\vec \theta| \right)  \right) .$$
```