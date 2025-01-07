Tags: [[Stats]], [[Statistical-Methods]], [[Inferential-Statistics]], [[Classical-Inference]]

The general framework for Classical hypothesis testing resembles the [[Bayesian-Hypothesis-Testing|Bayesian]] case though of course we no longer view the unknown parameter $\theta$ as a random variable. These problems are still characterised by finitely many values exhausting all possibilities of what $\theta$ could be. We use $H_i$ notation instead of $\theta_i$ notation. Throughout we let $X=(X_1,\ldots, X_n)$ be the observation vector of random variables (not necessarily IID) whose distribution depends on which hypothesis is true.

> [!rem] ***Hypothesis Parameter Notation***
> If $A$ is a set, $P(X\in A; H_j)$ is not the conditional probability of $X$ being in $A$ given $H_j$ is true but that $P(X\in A)$ is a function of the hypothesis so the dependence is functional, not conditional. Similarly, $p_X(x; H_j), f_X(x; H_j), p(x; H_j)$ and $\pi(x; H_j)$ all denote the distribution of the observations which are functionally dependent on the hypothesis.

First we explore **Binary Hypothesis Testing** and move to a more general setting.
# Binary Hypothesis Testing

> [!def] ***Characterising a Binary Hypothesis Testing Problem***
> Let $\theta$ be an unknown parameter and $\Theta_0$ is a subset of the parameter space. The **null hypothesis** $H_0$ proposes $\theta\in\Theta_0$ and the **alternative hypothesis** $H_1$ proposes $\theta\notin \Theta_0$. We are to find a decision procedure—a **test**—which maps realised values of $X$ to either $H_0$ or $H_1.$

For a decision procedure $g(X),$ $\breve{g}(H_1)=R$ is the **rejection region** whose values indicate we reject $H_0$ and $R',$ or $R^c,$ is the **acceptance region** which naturally has the values indicating we **accept,** or **failed to reject,** the null hypothesis. A choice of $g,$ then, is a choice of $R.$

> [!def] ***Simple and Complex***
> A **simple hypothesis** asserts $H_0:\theta=\theta_0.$ If the parameter space is a subset of $\mathbb{R},$ a **composite hypothesis** asserts either $\theta>\theta_0$ or $\theta<\theta_0.$ A **two-sided** test is to choose between $$H_0:\theta=\theta_0,\quad H_1:\theta\ne \theta_0.$$
> A **one-sided** test has an alternative hypothesis of the form $H_1:\theta>\theta_0$ or $H_1:\theta<\theta_0.$ 

Typically tests are two-sided since in many situations we lack a reason to say $\theta$ is below or above $\theta_0.$ We use the same phrasing when $\theta_0$ is an unknown parameter.

```ad-warning
title:Careful with Testing Composite Hypotheses

When testing a composite hypothesis involving 1 unknown parameter, it is often simpler to approximate the statistic $\theta-\theta_0,$ or its magnitude, and perform tests with it but, when the test involves computing a CDF where $F_{-Z}(-t)$ differs greatly from $F_Z(t),$ we should take care to track the computations performed by a statistical programme to make sure the order of subtraction is correct.
```

> [!def] ***Error Rates***
> Given a particular choice of $R,$ we define the following error rates:
> - **Type I Error Rate.** The largest probability of a **false rejection** among the values in $\Theta_0:$ $$\alpha(R)=\sup_{\theta\in\Theta_0} P_\theta(X\in R; H_0).$$
> It is also called the **size** of the test. A test has a **level $\alpha$** only if its size is at most $\alpha.$
> - **Type II Error Rate.** The largest probability of a **false acceptance** among all values not in $\Theta_0:$ $$\beta(R)=\sup_{\theta\notin \Theta_0} P_\theta(X\notin R; H_1).$$

The size of a test is a kind of 'worst-case scenario.' We return to levels later when discussing significance testing. Using the notation $P(A;H_0)$ is redundant here since taking the supremum over $\Theta_0,$ or respectively its complement, makes us work under $H_0$ or $H_1.$ In the future it will be omitted in the interest of readability. An immediate consequence is that $1-\beta(R)$ is the probability of correctly rejecting $H_0.$

> [!def] ***Statistical Power***
> If $R$ is the induced rejection region of a statistical test, its **statistical power** is $$\inf_{\theta\notin \Theta_0} P_\theta(X\in R; H_1)=1-\beta(R).$$ A **conservative** method is one with a lower $\beta(R)$ compared to other methods or established standard. **Liberal** methods have higher $\beta(R).$

A common choice for $R$ is the values of $x$ for which a statistic $h(X)=S$ is above a certain value.

> [!def] ***Critical Values***
> Let $h_\theta(X)=S$ be a [[Inferential-Statistics|statistic]] and put $$R=\{x : S>\xi\}.$$ Here we call $\xi$ a **critical value.**

More generally, when a statistic is used in a statistical test we call it a **test statistic.**

> [!def] ***Test Statistics***
> Let $\varphi(x,y,\vec w)$ be a formula and $S$ a statistic. If $R=\{x : \varphi(S(x), \theta, \vec w)\}$ for (formal) parameters $\vec w,$ we call $S$ a **test statistic.**

Since Classical methods do not view formal parameters like $\xi$ as random variables we are free to set them as we like. Often it is possible to recover some formal parameters from viewing the probability $P_\theta(\varphi(S(x), \theta, \vec w); H_0)$ as a real-valued function $f(w_i)$ of a $w_i,$ or less commonly of multiple $w_j,$ and knowing that $f(w_i)=\alpha$ for some $\alpha\in(0,1).$ If $\alpha$ is the type I error rate or the size of the test, these quantities are really functions of the formal parameters.

> [!rem] ***Choosing Critical Values***
> If $$f(w_i)=\sup_{\theta\in\Theta_0} P_\theta(\varphi(S,\theta, \vec w); H_0)=\sup_{\theta\in\Theta_0}P_\theta(X\in R; H_0)$$
> is injective and $\alpha$ is in its range, then from $f(w_i)=\alpha$ we can recover the formal parameter $w_i=f^{-1}(\alpha).$ If $f^{-1}(\alpha)$ cannot be expressed exactly by elementary methods, all that is required is that there be a unique $c$ s.t. $f(c)=\alpha$ and that we can find or approximate it. The approach generalises when considering multiple formal parameters as choosing a tuple satisfying the equality. In particular, if $\varphi: S>\xi$ and the CDF of $S$ under $H_0$ is known or can be well-approximated, then $$1-F_S(\xi)=\alpha,$$
> and so $F_S(\xi)=1-\alpha.$ If there is only one value in the domain of $F_S$ whose image is $1-\alpha,$ then $\xi=F_S^{-1}(1-\alpha).$ 

Going about choosing $\xi$ like this essentially gives us a value for a 'worst-case.' A particular test gives us more options for choosing $\xi$ when its approximate CDF maps many values to $1-\alpha,$ the probability of a correct non-rejection, though we cover this later. But now we have introduced an additional complication in the choice of $\alpha.$ This we leave to the philosophers to determine what is a reasonable, non-zero proportion of false beliefs.

> [!rem] ***Determined Regions***
> When it is useful, we use $R_{\alpha}$ to denote the **rejection region determined** by $\alpha$ when the formal parameters can be determined by $\alpha.$

In these cases we can measure the 'amount of evidence against $H_0.$'

> [!def] ***$p$-values***
> Let $R$ be a fixed rejection region for a test. If for any $\alpha\in(0,1)$ we can determine the formal parameters of $R$ from the equation $\sup_{\theta\in\Theta_0}P(X\in R)=\alpha,$ then a **$p$-value** is the minimum $\alpha$ inducing parameters for which $X\in R:$ $$p\text{-value}=\inf\{\alpha: X\in R_{\alpha}\}.$$

Important for discussing the likelihood ratio test is the following theorem with a trivial proof to anyone familiar with basic order theory:

> [!thm]
> If $f:E\to \mathbb R$ is an increasing injection with $\xi$ and the range of $S$ in its domain, then $$P_\theta(S>\xi; H_0)=P_\theta(f(S)>f(\xi); H_0).$$

Some null hypotheses are naturally stated as a finite sequence of equalities $\forall i\leqslant k.\ \theta_i=\theta_i^*.$ If $\Theta$ is a metric space, a statistic summarising these equalities is the sum of (possibly squared) distances: $$H_0 : \sum_{i=1}^{k} d(\theta_i,\theta_i^*)=0.$$
At times it is simpler to work with squared distances $d(\theta_i,\theta_i^*)^2$ such as when $\Theta\subseteq\mathbb{R}$ and $d(x,y)=|x-y|.$  Furthermore, if $\theta_i$ is some functional of $X_i,$ from which we draw, we may at times form a 'pooled' estimator of their common value, under $H_0.$ For example, if $X_i$ follows a distribution with parameter $\theta_i=E[X_i]$ and we have IID draws $\{X_{i,j}\}_{j=1}^{n_i},$ for $i\leqslant N,$ then the pooled sample mean is $$\overline{X}_p=\dfrac{1}{\sum_{i=1}^{N}n_i}\sum_{i=1}^{N} \sum_{j=1}^{n_i} X_{i,j}.$$

## $p$-values
By definition, a $p$-value is a function of a random variable and so is random. We should not be surprised if there is some variation in $p$-values when repeating experiments. In fact, in many cases it is uniformly distributed.

> [!thm]
> If $S$ is a CRV, then under $H_0:\theta=\theta_0$ a $p$-value is a uniform variable on $(0,1).$ Thus, if we reject $H_0$ when $p<\alpha,$ the probability of a type I error is $\alpha.$

A result which is not significant, one with a high $p$-value, is not one where we say $H_0$ is true. We either reject or fail to reject $H_0.$ Typically the latter happens due to a small sample size or more generally insufficient evidence. It might happen by chance in random sampling from populations that our sample is pathological. $p$-values, then, are random and dependent on the observations. This motivates a view of $p$-values as a gradient with $p\propto1/\text{`amount of evidence against }H_0\text{'}.$

![[p-values-by-Strength-of-Evidence.png]]

Note the evidence is against $H_0$ and comparison of $p$-values across contexts and methodologies is not always warranted. Once a $p$-value is obtained, if we were interested in the existence of effects, now we estimate the [[Design-and-Analysis-of-Experiments#Interpretations#Effect Sizes|effect size]]. Computing them tends to be simple if we know or can approximate the distribution of the statistic.

> [!thm] *Computation*
> Suppose we reject $H_0$ only if $S>\xi(\alpha).$ If $S'$ is IID with $S,$ then $$p=\sup_{\theta\in\Theta_0}P_\theta(S'>S) = 1-\inf_{\theta\in\Theta_0}F_{S'}(S).$$
> If $\Theta_0=\{\theta_0\},$ then $p=1-F_{S'}(S;\theta_0).$ More generally, if $P(f(S)>\xi;H_0)$ is a decreasing function $g$ of $F_{S}(\xi;H_0),$ then $p=g(F_{S'}(S;H_0)),$ supposing here that $\Theta_0=\{\theta_0\}.$

```ad-note
title:Derivation
collapse:closed

Suppose $S'$ is IID with $S(X)$ and that, for any $\alpha\in(0,1),$ there is only one $\xi\in\mathbb{R}$ s.t. $$\sup_{\theta\in\Theta_0}P_\theta(S(X)>\xi)=\alpha.$$
Thus we are free to swap $\alpha$ for the left side expression and take an $\inf$ with a parameter $\xi$ in $(-\infty, S(X))$ in what follows:
$$
\begin{align*}
p&=\inf\{\alpha\in[0,1] : S(X)>\xi(\alpha)\}\\
&=\inf\{\sup_{\theta\in\Theta_0}P_\theta(S'>\xi) : S(X)>\xi\} && \mbox{By assumption}\\
&=1-\sup\{\sup_{\theta\in\Theta_0}F_{S'}(\xi;\theta) : S(X)>\xi\}\\
&=1-\sup_{\theta\in\Theta_0}F_{S'}(S(X);\theta)\\
&=\inf_{\theta\in\Theta_0}P_{\theta}(S'>S(X))
\end{align*}
$$
The rest is trivial.
```

Minimising $g(F(\xi;H_0))$ is equivalent to maximising $F(\xi;H_0),$ over those values which are below $S,$ and passing it through $g.$ Because $F$ is increasing, this is the same as maximising $\xi.$ The realised value of $S$ is the supremum of these values and indeed will give us the least $\alpha.$ Hence, $p=g(F_{S'}(S;H_0))$ where we replace $S$ by its realised value. Something similar holds, at times, for more complicated hypotheses:

> [!thm] *Independent Approximate CDFs*
> Suppose $F_S(t;\theta)\to F_Z(t),$ for any $\theta\in\Theta_0,$ and that $F_Z$ does not depend on $\theta.$ Then, $p$ approaches $1-F_Z(S).$

For example, if $F_S$ is approximately normal or is close to a $t$-distribution, then rejecting $H_0$ when $S>\xi,$ where $\xi$ satisfies $\sup_{\theta\in\Theta_0} P_\theta(S>\xi)=\alpha,$ will induce a critical value close to $F_Z^{-1}(1-\alpha)$ and a $p$-value $p\approx1-F_Z(S).$

> [!rem] ***Computation Errors***
> When hypothesis testing, take care when seeing a $p$-value of 0 and instead report that it is below a negative power of $10$ or $20$ depending on the accuracy of the computation methods. If the programme rounds everything below $10^{-3}$ to 0, report that $p<10^{-3}.$

## Common Tests
### Likelihood Ratio Test
We borrow from [[Bayesian-Hypothesis-Testing#Threshold Cases in Binary Hypothesis Testing|Bayesian]] hypothesis testing the **likelihood ratio** $L_\theta(X)$ but alter it to use functional dependence instead of conditional dependence:

> [!def] ***Likelihood Ratio Test (LRT)***
> The **likelihood ratio** is given by $$\lambda_{LR}(X)=\frac{\sup_{\theta\in\Theta}\pi(X;\theta)}{\sup_{\theta\in\Theta_0}\pi(X;\theta)}.$$
> The **Likelihood Ratio Test (LRT)** is determined by the following rejection region $$R=\{x: \lambda_{LR}(x)>\xi\}.$$

The definition is provisional for we will soon change it in light of a certain theorem. Note that the test works generally for vector-valued $\theta$ and it is best used when $\Theta_0$ contains values in $\Theta$ with some components fixed in place, making it in a sense a 'subspace.' If $\xi=1,$ the test is equivalent to the [[Bayesian-Hypothesis-Testing#Maximum a-Posteriori Probability|MAP]] rule from Bayesian hypothesis testing. A change in $\xi$ is associated with a trade-off between $\alpha$ and $\beta$ where a high value of $\alpha$ entails a low value of $\beta$ and vice versa. They need not, however, add to $1$ and lower values of $\alpha$ make it increasingly difficult to reject false hypotheses. As a function of $\xi,$ $\beta$ is increasing.
$\quad$Obviously we need to at least approximate $\lambda_{LR}$ (or related random variables such as $\log \lambda_{LR}$) and $\xi.$ Common values of $\alpha,$ depending on the field, are $0.1, 0.05,$ and $0.01.$

> [!thm]
> If $\lambda_{LR}$ is a CRV, as we increase $\xi,$ the probability of a false rejection goes from $1$ to $0$ continuously, hence there is always a value of $\xi$ for which $P(\lambda_{LR}>\xi; H_0)=\alpha$ no matter what we choose $\alpha$ to be when $\Theta_0$ contains a single value.

There is no such guarantee in the discrete case. There could be, for example, an interval $(a,b)$ of values of $\xi$ for which the false rejection probability is constant on that interval. We could settle for an approximate equality, choosing the smallest $\xi$ satisfying $$P(\lambda_{LR}>\xi; H_0)\leqslant \alpha,$$
or use
> *an exogenous source of randomness to choose between two alternative candidate critical values. This variant (known as a "randomized likelihood ratio test" ) is of some theoretical interest.*
> \- Bertsekas and Tsitsiklis (2008). *Introduction to Probability.* 2nd ed.

> [!rem] ***Potentially Redundant Notation***
> Given the likelihoods in $\lambda_{LR}$ use an estimate of $\theta$ under various conditions, it seems $\theta$ itself plays no role in the quantity $\sup_{\theta\in\Theta_0}P(\lambda_{LR}(X)>\xi).$ It is not in that capacity that $\theta$ plays a role but instead when we view the likelihoods as any other function. Suppose the distribution of $X$ involves $\theta$ and suppose $\lambda_{LR}(X;\theta')=|\theta' X|^2.$ Then, if $\theta'$ maximises the likelihood over $\Theta$ and $\Theta_0,$ $$\sup_{\theta\in \Theta_0}P(\lambda_{LR}(X)>\xi)=\sup_{\theta\in\Theta_0}P(|\theta' X|^2 > \xi).$$ This is clearly a sensible expression.

Beyond analogies to Bayesian hypothesis testing, the LRT can arise independently as the decision procedure which minimises the Type II error rate, literally the most powerful test.

> [!thm] ***Neyman-Pearson Lemma***
> Let $\xi$ be chosen by the LRT resulting in error rates $$P(\lambda_{LR}>\xi; H_0)=\alpha,\quad\quad P(\lambda_{LR}\leqslant \xi; H_1)=\beta.$$
> Suppose a decision procedure chose a rejection region $R$ s.t. $$P(X\in R; H_0)\leqslant \alpha.$$
> Then, $$P(X\notin R; H_1)\geqslant\beta.$$
> The inequality is strict when $P(X\in R; H_0)<\alpha.$

Consider a Bayesian hypothesis testing problem with prior probabilities $$\pi(\theta_0)=\frac{\xi}{1+\xi},\quad\quad\pi(\theta_1)=\frac{1}{1+\xi}.$$
Clearly, $\xi=\pi(\theta_0)/\pi(\theta_1).$ This is a case where the MAP decision rule reduces to a threshold case with $\xi$ as its critical value. The probability of error $$e_{\mathrm{MAP}}=\pi(\theta_0)\alpha+\pi(\theta_1)\beta=\frac{\xi\alpha+\beta}{1+\xi},$$
where $\alpha=\pi(\lambda_{LR}>\xi\mid \theta_0)$ and $F_{\lambda_{LR}}(\xi\mid \theta_1),$ is minimised over all Bayesian decision rules. We noted all decision procedures in these cases maybe be represented by their rejection region $R,$ hence $$e_{\mathrm{MAP}}\leqslant \frac{1}{1+\xi}(\xi P(X\in R; H_0)+P(X\notin R; H_1)),\quad\forall \text{ rejection regions }R.$$
Equivalently, $$\xi\alpha+\beta\leqslant \xi P(X\in R; H_0)+P(X\notin R; H_1).$$
Suppose $\alpha\geqslant P(X\in R; H_0).$ If $\beta\geqslant P(X\notin R; H_1),$ for this relation to hold, it must be that $$\beta=P(X\notin R; H_1).$$ If instead $\beta<P(X\notin R; H_1),$ the lemma obviously still holds.

> [!def] ***Efficient Frontier***
> For an observation space $\operatorname{ran}X,$ construct the set $\mathcal{E}$ of all pairs $(\alpha(R), \beta(R))$ as $R$ ranges over all subsets of $\operatorname{ran}X.$ The **efficient frontier** of $\mathcal{E}$ is the subset of all pairs $(\alpha, \beta)\in\mathcal{E}$ for which there is no $(\alpha', \beta')\in \mathcal{E}$ satisfying either $$\alpha'\leqslant \alpha\text{ and }\beta'<\beta,\quad\text{or}\quad\alpha'<\alpha\text{ and }\beta'\leqslant \beta.$$

The N-P Lemma states the pairs chosen by the LRT lie on the efficient frontier of $\mathcal{E}.$ 
#### Wilk's Theorem
For theoretical purposes it will be simply to work with the following, final definition:

> [!def] ***LRS***
> If $\widehat\theta$ and $\widehat\theta_0$ are the ML estimates of $\theta$ over $\Theta$ and $\Theta_0$ respectively, then the **likelihood ratio statistic (LRS)** is $$\lambda_{LR}(X)=2\log\left( \dfrac{\pi(X;\widehat{\theta})}{\pi(X;\widehat{\theta}_0)} \right) .$$

Choosing the ML estimates of $\theta$ over a restricted domain is the same as maximising the likelihood over that domain. The comparison asks whether there is a model, represented by the ML estimate $\widehat{\theta},$ more compatible with $H_1$ than with $H_0.$ Suppose $\Theta$ is an $n$ dimensional parameter space and $\Theta_0$ is $k<n$ dimensional, for simplicity taking it that the last $n-k$ components of points in $\Theta_0$ are fixed, and in this sense it is $k$-dimensional. Segments of a vector will be indicated with $X_{a:b}$ to mean $(X_a,\ldots, X_b).$

> [!thm] *Wilk's Theorem*
> $\lambda_{LR}(X_{1:n})$ converges in distribution to a $\chi^2$ variable with $df=n-m$ DoF, the difference in dimension between $\Theta$ and $\Theta_0.$

The $\chi^2$ distribution is described below with its associated test.

> [!rem] ***LRT $p$-value***
> For large $n,$ the $p$-value for the test on observations $x$ is given by $1-F_{\chi_{df}^2}(\lambda_{LR}).$

### $\chi^{2}$ Test

> [!def] ***The $\chi^2$ Distribution***
> The $\chi^{2}$ distribution with $df$ degrees of freedom is the distribution of the variable $$\chi^{2}=\sum_{i=1}^{df} Z^{2}_i,$$
> where the $Z_i$ are IID standard normal random variables.

Consider a random variable $Y$ which takes on the value of some non-zero natural numbers up to $m\in \mathbb{N}$ with $P(Y=k)=\theta_k.$ The distribution of $Y$ is fully described by the random vector $\theta=(\theta_1,\ldots, \theta_m).$ Define the hypotheses $$H_0:\theta=\theta'=(\theta_1',\ldots, \theta_m'),\quad H_1:\theta\ne(\theta_1',\ldots, \theta_m'),$$
where the $\theta_i'$ add up to $1.$ Draw $n$ independent samples of $Y$ and let $X_k$ record the number of samples which took on the value $k.$ Our observation vector is of the form $X=(X_1,\ldots, X_m).$ Note that these must sum up to $n.$ Faced with vector-valued parameters, we turn to the LRT, with $\Theta$ containing all vectors with non-negative components adding to 1 and $\Theta_0=\{\theta'\}.$ Note this is not the final statistic. Requiring that the sum of the components is 1 makes $\Theta$ of dimension $m-1$ instead of $m.$ The samples in general have a joint distribution $$\pi(x;\theta)=\prod_{i=1}^{m}P(X_i=x_i)=\prod_{i=1}^{m}P\left( \bigcap_{j=1}^{x_i} Y=i \right)\propto \prod_{i=1}^{m}\theta_i^{x_i},$$
where the $x_i$ are the components of $x.$ It is typically easier to instead work with the log-likelihood function $$\log\pi(x; \theta)=\log c+\sum_{i=1}^{m-1} x_i\log \theta_i+x_m\log\left( 1-\sum_{i=1}^{m-1} \theta_i\right),$$
where $c$ is a proportionality constant present in the original distribution. The last term comes from the requirement that the $\theta_i$ add to $1.$ If the components of the maximising vector $\widehat{\theta}$ are strictly positive, setting the partial derivatives w.r.t. the components to $0$ yields $$\frac{x_k}{\widehat{\theta}_k}=\frac{x_m}{1-\displaystyle\sum_{i=1}^{m-1} \widehat{\theta}_i}=\frac{x_m}{\widehat{\theta}_m}.$$
We conclude all ratios $x_k/\widehat{\theta}_k$ are equal to $x_m/\widehat{\theta}_m.$ Thus,
$$\widehat{\theta}_k=\frac{x_k}{n}.$$

```ad-note
title:Derivation
collapse:closed

$$
\begin{align*}
\frac{x_k}{\widehat{\theta}_k}&=\frac{x_j}{\widehat{\theta}_j}\\
\frac{x_k}{x_j}&=\frac{\widehat{\theta}_k}{\widehat{\theta}_j}, && \forall j,k,\\
\frac{n}{x_k}&=\frac{1}{x_k}\sum_{i=1}^{m} x_i\\
&=\sum_{i=1}^{m} \frac{x_i}{x_k}\\
&=\sum_{i=1}^{m} \frac{\widehat{\theta}_i}{\widehat{\theta}_k}\\
&=\frac{1}{\widehat{\theta}_k}\sum_{i=1}^{m} \widehat{\theta}_k\\
&=\frac{1}{\widehat{\theta}_k}\\
\widehat{\theta}_k&=\frac{x_k}{n}, && \forall k.
\end{align*}
$$
```

Even if some of the $x_k$ are 0, the ML estimates still maximises the likelihood function for then the corresponding $\widehat{\theta}_k^{x_k}$ is $1,$ so we ignore it when computing the product, and the term $x_k\log\widehat{\theta}_k$ in the log-likelihood function is also $0$ and thus ignored.

> [!thm] ***Rejection Condition***
> The rejection region $R$ contains all natural-valued vectors $x$ s.t.
> $$\frac{\pi(x; \widehat{\theta})}{\pi(x;\theta')}=\prod_{k=1}^{m}\frac{(x_k/n)^{x_k}}{(\theta_k')^{x_k}}>\xi,$$
> where $\xi$ is chosen to satisfy $P(\lambda_{LR}(X)>2\log\xi; H_0)=\alpha,$ here using the updated definition in light of Wilk's theorem. The ML estimate over $\Theta_0$ is simply $\theta'$ given it is the only value.

By taking the log of both sides, the test reduces to rejecting $H_0$ only when $$\sum_{k=1}^{m} x_k\log\left( \frac{x_k}{n\theta'_k} \right)>\log\xi .$$
Let $S$ be equal to the LHS, replacing $x_k$ with $X_k.$ We are to choose a value of $\xi$ satisfying $$P(S>\log \xi;H_0)=\alpha.$$
The distribution of $S$ under $H_0$ is not always known in closed form, though for large $n$ significant simplification and approximation is available. Under $H_0,$ the observed frequencies $\widehat{\theta}_k=x_k/n,$ by the [[Convergence-Phenomena-and-Inequalities#Strong Law|strong law]] of large numbers, will almost surely converge to $\theta'_k$ as $n$ increases. A second order Taylor series expansion of the inner expression, i.e. the first 2 terms in the Taylor series expansion of $y\log(y/y')$ around $y'>0$ with $y=X_k$ and $y'=n\theta'_k,$ yields our statistic $S$ to be well approximated by $T/2,$ where

> [!def] ***Pearson's $\chi^2$ Statistic***
> Given the same hypothesis we started with, **Pearson's $\chi^2$ statistic** is given by $$T=\sum_{k=1}^{m} \frac{(X_k-n\theta'_k)^{2}}{n\theta'_k}.$$

Note the second order expansion $y\log(y/y')\approx y-y'+(y-y')^{2}/2y'$ is only approximate when $y\approx y'.$ Hence $$\sum_{k=1}^{m} y\log\left( \frac{y}{y'} \right)\approx \sum_{k=1}^{m} (y-y')+\frac{1}{2}\sum_{k=1}^{m} \frac{(y-y')^{2}}{y'}\approx \frac{1}{2}\sum_{k=1}^{m} \frac{(y-y')^{2}}{y'}=\frac{T}{2}.$$
Furthermore,

> [!thm]
> Under $H_0,$ $T,$ and hence $2S,$ approaches in distribution a $\chi_{m-1}^2$ distribution.

The CDF of this distribution is known and with this we have enough to state the full test.

> [!def] ***Pearson's $\chi^2$ Test***
> Suppose $X=(X_1,\ldots, X_m)$ has a multinomial distribution with parameter $\theta$ and that its components add to $n.$ Let $H_0:\theta=\theta'$ and $H_1$ be its negation and let $T$ be Pearson's $\chi^{2}$ statistic for $X:$ $$T=\sum_{k=1}^{m} \dfrac{(X_k-n\theta'_k)^{2}}{n\theta'_k}.$$
> The **$\chi^2$ test** has us reject $H_0$ only if $T>\chi^{2}_{m-1,\alpha},$ for any desired level $\alpha.$ For large $n,$ the **$p$-value** is given by $p=1-F_{\chi_{m-1}^{2}}(T).$

The reason for the $\chi^{2}$ approximation of $T$ is that $X_k/n$ is asymptotically normal and approaches $\theta'_k$ as $n$ increases. Thus, $T$ is the sum of squares of $m$ approximately standard normal variables $(X_k-n\theta'_k)/\sqrt{ n\theta'_k }.$ They are not, however, all independent for the $X_k$ must add to $n.$ Alternatively, we know $\lambda_{LR}$ approaches a $\chi^{2}$ distribution with $m-1-0$ DoF—remember that $\Theta$ only has dimension $m-1$ and $\Theta_0,$ having only a point, has dimension 0—and $T\approx 2S = \lambda_{LR}.$
#### Goodness-of-Fit Tests
Suppose we have a parametric model with observations coded to be in $\{1,\ldots,k\}.$ The codes are essentially categories and $H_0$ will state the data are IID draws from some distribution in the model $\mathfrak{F}=\{f(\vec x;\theta) : \theta\in\Theta\}$ — that with a certain probability we shall have an observation in category $i.$ That is, $$H_0:\exists \theta\in\Theta.\ \pi_{\mathbf{Y}}=f(-;\theta).$$
Let $p_i(\theta)=\pi(Y=i; \theta),$ suppose $\dim\Theta=s,$ and let $X_j$ be the number of observations in the $j$-th category. If $\{Y_i\}_{i=1}^{n}$ are the IID samples of $Y,$ the likelihood based on $\theta$ takes a multinomial distribution: $$\pi_{\mathbf{Y}}(\vec y)=\prod_{i=1}^{n}\pi_{Y}(y_i;\theta)=\prod_{i=1}^{k}p_i(\theta)^{X_i}.$$
It is tempting to apply the $\chi^2$ test since our main goal is not to estimate $\theta$ but assess whether the data are IID. For that very reason, however, we cannot use the ML estimate of $\theta$ seen in that test. Rather, the ML estimate $\tilde{\theta}$ here will produce a vector of probabilities $\mathbf{p}(\theta)$ maximising the likelihood. If instead we tried to estimate $p_i(\theta),$ we arrive at the usual estimate. That is, $p_i(\tilde{\theta})$ is approximately $X_i/n.$ Our statistic will resemble that of the $\chi^2$ test: $$S=\sum_{i=1}^{k} \dfrac{(X_i-np_i(\tilde{\theta}))^2}{np_i(\tilde{\theta})}.$$
Naturally, this approaches some $\chi^2$ distribution. $np_i$ should be thought of as the expected number of observations in category $i$ and $X_i$ as the actual number, hence we have $$S=\sum_{i=1}^{k} \dfrac{(X_i - E_i)^{2}}{E_i}.$$
We should think of $p_i(\tilde{\theta})$ as probabilities under $H_0$ as in the case [[#$ chi {2}$-Test|above]].

> [!def] ***The Goodness-of-Fit Test***
> Let $\theta$ be an $s$-dimensional vector and $$S=\sum_{i=1}^{k} \dfrac{(X_i-np_i(\tilde{\theta}))^{2}}{np_i(\tilde{\theta})},$$
> where $p_i$ is the functions $p_i(\theta)=P(Y=i;\theta)$ and $\tilde{\theta}$ is chosen to maximise $$\prod_{i=1}^{k}p_i(\tilde\theta)^{X_i}.$$
> We are to **reject $H_0$ only if** $S>\chi_{k-1-s,\alpha}^{2}.$ The $p$-value is approximately $1-F_{\chi^{2}_{k-1-s}}(S).$

> [!thm]
> Under $H_0,$ the statistic $S$ used in goodness-of-fit testing converges in distribution to a $\chi^2$ distribution with $k-1-s$ DoF. The $p$-value for the test is given by $1-F_{\chi^2_{k-1-s}}(S).$

If we reject $H_0,$ then it is reasonable to conclude we should not use the model for all observations. If we fail to reject it, however, it might be that the test did not have enough power for the given model. Whenever possible, we should use nonparametric methods to avoid parametric assumptions that might limit the power of our tests.
#### Independence Test
Let $X,Y,$ be random variables with a finite ranges of size $n$ and $m$ respectively, for convenience taken to be $\{1,\ldots,n\}$ and $\{1,\ldots,m\}.$ We wish to know if these are independent. The variable $Z=\{(X_i,Y_j)\}_{i,j=1}^{n,m}$ will follow a multinomial distribution with parameter matrix $\theta=\{\theta_{i,j}\}_{i,j=1}^{n,m}.$ Let $\theta_X,\theta_Y$ consist of the probabilities for the marginal distributions: $$\theta'=(\theta_X,\theta_Y)=(\pi_X(1),\ldots,\pi_X(n),\pi_Y(1),\ldots,\pi_Y(m)).$$
Thus we have $H_0:\theta=\theta_X\theta_Y^T.$ In a similar derivation to [[#$ chi {2}$-Test|before]], we may show

> [!thm]
> If $N_i=\sum_{j=1}^{m}Z_{i,j}$ and $M_j=\sum_{i=1}^{n}Z_{i,j},$ the ML estimate of $\theta'$ has components $\widehat{\theta}_k=N_k/N$ if $k\leqslant n,$ and $\widehat{\theta}_{n+k}=M_k/N$ if $k\leqslant m.$

By the above theorems, the statistic $$S=\sum_{i=1}^{n}\sum_{j=1}^{m} \dfrac{(Z_{i,j}-N\widehat{\theta}_{i,j})^{2}}{N\widehat{\theta}_{i,j}}=\sum_{i=1}^{n}\sum_{j=1}^{m} \dfrac{(Z_{i,j}-N_iM_j/N)^{2}}{N_iM_j/N}$$
approximately follows a $\chi^{2}$ distribution with DoF $nm-(n+m-2)=(n-1)(m-1),$ where $Z_{i,j}$ is the number of observation pairs in the $(i,j)$ category, giving us a test. The $-2$ is due to requiring $$\vec1\cdot\theta_X=\vec1\cdot\theta_Y=1$$
Note we do not need to know the marginal distributions to apply this test.

> [!def] ***$\chi^{2}$ Test for Independence***
> Let $Z_{i,j}$ count the number of observation pairs $(X,Y)$ drawn from a multinomial distribution with parameter $\theta=\{\theta_{k,l}\}_{k,l=1}^{n,m},$ where $X=i$ and $Y=j,$ and suppose $$H_0:\exists \theta'.\ \theta_{i,j}=\theta'_{i}\theta'_{n+j}.$$ Let $$S=\sum_{i=1}^{m} \sum_{j=1}^{n} \dfrac{(Z_{i,j} - N_iM_j/N)^{2}}{N_iM_j/N},$$
> We are to **reject $H_0$** only if $S>\chi^{2}_{(n-1)(m-1),\alpha}.$ The $p$-value is approximately $1-F_{\chi^{2}_{(n-1)(m-1)}}(S).$

``````ad-rmk
title:R Details

```r
later
```
``````

The procedure can be generalised to $m$ many variables, the $i$-th having $n_i$ values in its range. Let $N(i,j)$ be the sum of $Z_{\vec m}$ as $m_i=j$ and the rest of the components are allowed to vary. $N$ is as before.

> [!thm]
> The ML estimate of the $\theta'$ has components $$\widehat{\theta}_{\vec m}=\dfrac{1}{N^{m}}\prod_{i=1}^{m}N(i,m_i).$$

> [!def] ***$\chi^{2}$ Test for Independence with $m$ Variables***
> Let $Z_{\vec m}$ count the number of observations $X$from a multinomial distribution with parameter $\theta=\{\theta_{\vec m}\}$ where $X_{i}=m_i$ and suppose $$H_{0} : \exists \theta'_{X_i}.\ \theta_{\vec m}=\prod_{i=1}^{m}\theta'_{X_i,m_i}.$$
> Let $$S= \sum_{\vec m}\dfrac{(Z_{\vec m}-N\widehat{\theta}_{\vec m})^{2}}{\widehat{\theta}_{\vec m}},$$
> where $\widehat{\theta}_{\vec m}$ is as before. We are to **reject $H_0$** iff $S>\chi^{2}_{df,\alpha}$ where $$df=\prod_{i=1}^{m}(n_i-1).$$
> It has an approximate $p$-value of $1-F_{\chi^{2}_{df}}(S).$

##### Homogeneous Proportions
These procedures can be used to test if the proportion of a test in independent populations is constant. Specifically, suppose we have $n$ populations, $X$ keeping track of this index, and say $Y=1$ if the trait is observed, otherwise $Y=2.$ Because they are independent, $\pi(i,j)=\pi_X(i)\pi_Y(j),$ and if $\pi(1,j)=q$ and $\pi_X(i)=p$ we have $\pi_Y(j)=q/p.$
### Wald Test

> [!def] ***The Wald Test***
> Let $\widehat{\Theta}_n$ be an asymptotically normal estimator of $\theta,$ let $\widehat{SE}(\widehat{\Theta}_n)$ be the estimated SE of $\widehat{\Theta}_n,$ and suppose we have the hypotheses $$H_0:\theta=\theta_0,\quad\quad H_1:\theta\ne \theta_0,$$
> for $\theta$ real. The **Wald statistic** is the variable $$W_n=\dfrac{\widehat{\Theta}_n-\theta_0}{\widehat{SE}(\widehat{\Theta}_n)}.$$
> The **Wald Test** has us reject $H_0$ only when $|W_n|>\Phi^{-1}(1-\alpha/2)$ for a desired size $\alpha.$

Removing $\theta_0$ is possible since $\theta_0$ is known, and if $H_0$ holds this should standardise the distribution of $\widehat{\Theta}_n.$ Some simple theorems that are easy to see about the test:

> [!thm]
> Let $\xi=\Phi^{-1}(1-\alpha/2).$
> 
> 1. $P(|W_n|>\xi)\to\alpha.$
> 2. The test has an approximate power of $$1-\sup_{\theta\ne \theta_0} \Phi^{-1}\left( \dfrac{\theta_0-\theta}{\widehat{SE}(\widehat{\Theta}_n)}+\xi \right)+\sup_{\theta\ne\theta_0}\Phi^{-1}\left( \dfrac{\theta_0-\theta}{\widehat{SE}(\widehat{\Theta}_n)}-\xi \right) .$$
> 3. A size $\alpha$ Wald test is equivalent to rejecting $H_0 : \theta=\theta_0$ only if $\theta_0$ is not in the $1-\alpha$ CI with bounds $\widehat{\Theta}_n\pm\widehat{SE}(\widehat{\Theta}_n)\xi.$
> 4. The $p$-value of the test is approximately $2\Phi(-|W_n|).$

A particular common example of the Wald Test is when we have IID normal data with unknown mean.

> [!def] ***The $t$ Test***
> Suppose we have IID normal data $X$ following a distribution with parameter $\theta=(\mu, \sigma^{2})$ and hypotheses $$H_0:\mu=\mu_0,\quad H_1:\mu\ne \mu_0.$$
> The **$t$-statistic** is the variable $$T=\dfrac{M_n-\mu_0}{\widehat{SE}(\overline{X})}=\dfrac{\sqrt{ n }(M_n-\mu_0)}{\widehat{S}_n}$$
> We reject $H_0$ only if $|T|>\xi.$ The $p$-value of the test is approximately $2\Psi_{n-1}(-|T|).$

> [!rem] ***Single-Tailed Tests***
> If $H_1$ is of the form $\theta>\theta_0$ or $\theta<\theta_0,$ the statistic is no longer $|T|$ but simply $T$ and $p$-values are computed with it as $1-\Psi_{n-1}(T)$ and $\Psi_{n-1}(T)$ respectively. The same is true when they are computed with $\Phi.$

> [!rem] ***Proportions, Derived Variance, and Standardisation***
> Some distributions have the variance be a function of the mean — crucially, the Bernoulli distribution with $\sigma^{2}=\mu(1-\mu).$ Here there is no need to estimate $SE(\overline{X})$ under $H_0:\mu=\mu_0$ for it is known. Then the Wald test, rather than the $t$ test, is more appropriate.

### Permutation Testing

> [!def] ***The Setup***
> Suppose we have independent sequences $\{X_i\}_{i=1}^{m}$ and $\{Y_i\}_{i=1}^{n}$ of IID variables following distributions $F_X$ and $F_Y$ respectively. Our hypotheses are of the form $$H_0:F_X=F_Y,\quad H_1:F_X\ne F_Y.$$
> Let $S=h(X, Y)$ be a statistic and let $N=m+n.$ Enumerate the $N!$ permutations of the variables and denote the statistic for the $k$-th permutation with $S_k.$ Under $H_0,$ the probability that $S$ is equal to $S_k$ follows a uniform distribution, called the **permutation distribution** of $S,$ placing a probability mass $1/N!$ on each outcome. We are to reject $H_0$ when $S>\xi,$ with a $p$-value $$p=P(S'>S; H_0) = \dfrac{1}{N!}\sum_{i=1}^{N!} I(S_i>S),$$
> where $S'$ has the same distribution as $S.$

A permutation of the variables refers to permuting their positions in $h.$ This is described only as setup due to how intractable it is to produce and compute $N!$ permutations and statistics. Instead, the test in practice will have us approximate $p.$

> [!def] ***The Permutation Test***
> Let $S$ be as above. Permute the data $B$ times uniformly at random and let $S_k$ be the statistic of the $k$-th permutation. The **permutation test** rejects $H_0$ only if $S>\xi,$ for an obvious choice of $\xi.$

> [!thm]
> The permutation test has an approximate $p$-value of $$\dfrac1B\sum_{i=1}^BI(S_i>S).$$

If $H_0$ holds for a given data set, it is likely to hold under many permutations. The $p$-value comes from the laws of large numbers,

See [[Test-Statistics#Equal Variance Two Independent Samples|here]] for an example of a permutation method.

``````ad-rmk
title:R Details

```r
library(mosaic)

# h.stat is the statistic and tib is columns XY and Lab, the latter containing only "X" and "Y".

m <- 10000 # Some high number.
set.seed(1234) # For reproducibility.
Sdist <- matrix(NA, nrow = m) # Initialise an empty matrix to hold the S_i.
for (i in (1:m)){
	Sdist[b] <- h.stat(shuffle(Lab)) # e.g. coeff(lm(XY ~ shuffle(Lab), data = tib))[2]
}
pVal = pdata(data = Sdist, h.stat(XY ~ Lab, data = tib), lower.tail = F)
```
``````

### Looney-Gulledge Normality Assesment
Taken from the paper [*Use of the Correlation Coefficient with Normal Probability Plots*](https://www.jstor.org/stable/2683917). Let $Y_i$ be the $i$-th [[Classical-Estimation#Order Statistic|order statistic]] of the $X_j$ and $W_i=\operatorname{median}Y_i.$ If indeed the $X_i$ are sampled from $Z\sigma+\mu,$ then the plot $\{(W_i,Y_i)\}_{i=1}^{n}$ (or the one with flipped pairs) is approximately linear. Now, we know $|\rho(X,Y)|=1$ only if $X$ and $Y$ are linearly related with probability 1. Then we have an obvious statistic: the [[Classical-Estimation#Sample Covariance|SLCC]] between the $Y_i$ and $W_i.$ Of course, if we do not know the distribution of $W_i,$ it will be difficult to compute the statistic. [[Classical-Estimation#Order Statistic|Plotting positions]] $\{p_i\}_{i=1}^{n}$ remedy this by introducing the approximation (or estimator) $\widehat{W}_i=Q_X(p_i).$ Some are available for when $Z\sim\mathcal{N}(0,1).$ Now the SLCC is taken between the $Y_i$ and $Q_Z(p_i).$

INCOMPLETE
# ANOVA

> [!def] ***Analysis of Variance***
> Suppose we can group the data in $m$ ways each with $n_k$ subgroups s.t. variables in the same subgroup follow distributions with equal means. **Analysis of Variance (ANOVA or at times AOV)** is a test for the hypothesis stating group means are equal

Analysing differences in the mean between groupings and groups gives as a way to assess if, in practice, an observed difference is due to random variance or due to how the data can be grouped or to belonging to a particular group.

> [!rem] ***Differences From Pairwise Comparisons***
> A simple way to assess differences in means is via **pairwise comparisons,** considering a binary hypothesis testing problem for each pair of groups or subgroups and in some way aggregating the evidence so as to not inflate the Type I error rate. ANOVA methods in a sense skip over the pairwise comparisons and give a straight assessment of the hypothesis that they all yield equal means.

## One-Way ANOVA

> [!def] ***One-Way ANOVA***
> ANOVA applied to the case with only one grouping $\{Y_{i,j}\}_{i,j=1,1}^{m,n_i}.$ Let $Y$ be a vector whose first $n_1$ components are $Y_{1,j},$ the next $n_2$ components are $Y_{2,j},$ and so on.

### Linear Models and the $F$-Test

> [!def] ***Reference-Coded Model***
> If $\mu$ is some fixed constant, then the corresponding **reference-coded model** is of the form $$Y_{i,j}=\mu+\alpha_i+\varepsilon_{i,j},$$ where the $\varepsilon_{i,j}$ are IID, zero-mean normal variables with variance $\sigma^2.$

By stipulating $\varepsilon_{i,j}\sim\mathcal{N}(0,\sigma^2)$ are IID, we have assumed each $Y_{i,j}$ is IID normal with mean $\mu+\alpha_i$ and **common variance $\sigma^{2},$** being shared among all observations. Briefly stated, $$Y_{i,j}\sim \mathcal{N}(\mu+\alpha_i,\sigma^{2}).$$
$\mu$ we interpret, under $H_0,$ as a global mean and the $\alpha_i$ represent the [[Design-and-Analysis-of-Experiments#Interpretations|effect]] of being in the $i$-th group. Due to concerns with regression estimators, it is useful to constrain the $\alpha_k.$ Commonly we assume the $\alpha_k$ sum to 0. There is an alternative parameterisation with an accompanying alternative model.

> [!def] ***Cell-Means Linear Models***
> If $\mu_i=E[Y_{i,1}]$ and $\varepsilon=\{\varepsilon_{i,j}\}_{i,j=1,1}^{m,n_i}$ is a sequence of IID variables $\varepsilon_{i,j}\sim\mathcal{N}(0,\sigma^2),$ **cell means linear models** are of the form $$Y_{i,j}=\mu_i+\varepsilon_{i,j}.$$

This one may not extend as easily to two-way ANOVA problems, so we mainly consider the sum-to-zero constraint. This alternative reparameterisation is just an algebraic simplification away from the original with $\mu_i=\alpha_i+\mu.$ In either case the null hypothesis becomes $$H_0:\alpha_i=0,\forall i.$$
By convention we would set $\alpha_1=0,$ hence $\mu=\mu_1.$ Under the null these equivalent formulations are $$Y_{i,j}=\mu+\varepsilon_{i,j}=\mu_1+\varepsilon_{i,j}.$$

> [!rem] ***Default R Behaviour***
> By default, `lm` objects in R when passed with a formula of the form `num ~ col` will output in a form more convenient for reference-coded models, giving first $\alpha$ as an estimate in the `Intercept` row and thereafter the $\alpha_i.$ For a cell-means representation, use a formula of the form `num ~ col - 1`.

Let $N=\sum_{k=1}^{m}n_k$ be the amount of data, $\widehat{Y}_{i,j}$ the estimate of $Y_{i,j},$ and $\widetilde{Y}=Y-\widehat{Y}$ be the residuals. From facts about [[Classical-Statistical-Models#Linear Model with Normal Noise|linear models]] with normal noise, $\widehat{Y}$ is the least squares estimator of $\mu_i,$ what there we denoted $\widehat{\Theta}_0.$ Simply let $\theta_1=0$ and see that focusing on a single group leaves us in the same situation with IID data, having now to estimate $\theta_0$ but not $\theta_1.$ The ML estimates for each group are given by $\widehat{\Theta}_0=\overline{Y}_i,$ thus $\widehat{Y}_{i,j}=\overline{Y}_i,$ the sample mean of the $i$-th group.

> [!def] ***Total and Group RSS***
> Let $\overline{\overline{Y}}$ be the sample mean of all the data, called the **total** or **grand mean.**
> - The **Total Sum of Squares** (for this note denoted $SS_{T}$) is the quantity $$\sum_{i=1}^{m} \sum_{j=1}^{n_i} (Y_{i,j}-\overline{\overline{Y}})^2.$$
> - If the groupings are done by a variable $A,$ **$A$'s Sum of Squares** (denoted here by $SS_A$) is the total sum of squares of the fitted values: $$\sum_{i=1}^{m} \sum_{j=1}^{n_i} (\overline{Y}_i-\overline{\overline{Y}})^{2}=\sum_{i=1}^{m} n_i(\overline{Y}_i-\overline{\overline{Y}})^{2}.$$
> - The **Residual Sum of Squares** ($SS_E$) is the sum of squared residuals $|\widetilde{Y}|^{2}.$

> [!thm] *Sums of Squares Decomposition*
> $$SS_{T}=SS_A+SS_E.$$

We will develop first a test using the probabilistic properties of $SS_A$ and $SS_E,$ connecting them to known distributions, and then we shall present an alternative test by applying a known test to this case. A theorem due to Cochcran tells us the exact distribution of these.

> [!thm] *Cochran's Theorem*
> Let $Z=(Z_1,\ldots,Z_N)$ be a vector of IID random variables with distribution $\mathcal{N}(0,\sigma^{2}).$ For $k\leqslant m,$ let $A_k$ be an $N\times N$ symmetric matrix with entries $a_{i,j}^k$ and let $$Q_k=Z^TA_kZ=\sum_{i,j=1}^{N} a_{i,j}^kZ_iZ_j.$$
> Suppose $$\sum_{k=1}^{p}Z_k^2=\sum_{k=1}^{s} Q_k.$$
> If $r_k$ is the rank of $A_k,$ them $\sum_{k=1}^{s}r_k=m$ iff the $Q_k$ are independent variables with $Q_k/\sigma^{2}\sim\chi_{r_k}^{2}.$

It helps to express our linear model in the language of linear algebra to apply this theorem. Let $\beta=(\mu,\alpha_1,\ldots,\alpha_{m-1})^T,$ $\varepsilon=(\varepsilon_{1,1},\ldots,\varepsilon_{1,n_1},\ldots,\varepsilon_{m,n_m})^T,$ and $X$ is a $N\times m$ matrix whose first column is all 1s, all but the second column are 0s for the first $n_1$ rows, all but the third are $0$ for the next $n_2$ rows, and so on, with the remaining columns in the last $n_{m+1}$ rows being $-1.$ Now our model is stated as $$Y=X\beta+\varepsilon.$$
The product $X\beta$ will have $Y_{i,j}=\mu+\alpha_{i}+\varepsilon_{i,j}$ as desired. The $-1$'s near the end come from the fact that $\alpha_m=-\sum_{k=1}^{m-1}\alpha_k$ by our assumption that the sum of the $\alpha_k$ is $0.$

> [!rem] ***Alternative Constraint***
> When instead we assume $\alpha_1=0,$ the column in $X$ representing $\alpha_1$ is removed and one representing $\alpha_m$ is added, not changing the dimension. Instead of a row mainly consisting of $-1$'s there is now a $1$ at the final column of these rows as well as the beginning and all other $1$'s representing some $\alpha_i$ is moved to the left. This means the first $n_1$ rows have all but the first column be all $0$'s. The next $n_2$ rows have their second column be all $1$'s, and so on. Both constraints guarantee $X^TX$ is invertible.

The least squares estimator for $\beta,$ when we have a balanced design (i.e. $n_i=n_j$), is given by $\widehat{\beta}=(X^TX)^{-1}X^TY.$ With the theorem we may show

> [!thm]
> $SS_E/\sigma^{2}\sim\chi_{N-k}^{2}$ and $SS_A/\sigma^{2}\sim\chi_{m-1}^{2}.$

```ad-warning
title:Speculation

It is simple to verify $X^TX$ is invertible. $XX^T$ is symmetric, so let it play the role of $A_k.$ That is, $Q_k=(X^T\varepsilon)^TX^T\varepsilon=|X^T\varepsilon|^2.$
```

Thus their ratio follows an $F$-distribution.

> [!def] ***$F$-distribution***
> If $S_1\sim\chi_{d_1}^{2}$ and $S_2\sim\chi_{d_2}^{2},$ the **$F$-distribution with $d_1$ and $d_2$ DoF** is the distribution of the variable $$F=\dfrac{S_1/d_1}{S_2/d_2}.$$

Taking the ratio of $SS_E/\sigma^{2}(N-m)$ and $SS_A/\sigma^{2}(m-1)$ will cancel the $\sigma^{2},$ leaving us with $$F=\dfrac{SS_A/(m-1)}{SS_E/(N-m)}.$$

In this setting we call $SS_{-}/df$ a **mean square,** thus the mean square of $A$ is $MSE_A=SS_A/(m-1)$ and the mean square of the residuals is $MSE_E=SS_E/(N-m).$

> [!rem] ***Estimator Interpretation***
> These can be seen as estimators, respectively, for the variance of the $Y_{i,j}$ around their group mean $\overline{Y}_i$ and the variance around their total mean $\overline{\overline{Y}}$ — the so-called **within-sample variability** and **between-sample variability.**

There is enough information to formulate a test.

> [!def] ***$F$-test***
> With $Y_{i,j},H_0,$ and $H_1$ as above, the $\alpha$ level **$F$-test** has us reject $H_0$ only if $F>F_{m-1,N-m,\alpha}.$ The $p$-value is $1-F_{F'_{m-1,N-m}}(F),$ where $F'_{m-1,N-m}$ follows an $F$ distribution.

Information relevant to the $F$-test are collected in an *ANOVA table.*

> [!def] ***One-Way ANOVA Table***
> A table of 2 rows and 5 columns:
> 
> $\;$|DoF | Sum of Squares | Mean Squares | $F$ Value | $p$-value
> -|-|-|-|-|-
> $A$ group|$m-1$|$SS_A$|$SS_A/(m-1)$|$F$|$P(F>F')$
> Residuals|$N-m$|$SS_E$|$SS_E/(N-m)$|

``````ad-rmk
title:R Details

```r
# tib contains the columns num and colgrp contain the data and labels respectively.

# By hand
m <- length(unique(tib$colgrp)) # Number of groups, m.
N <- length(tib$num) # Number of data points, N.

group_lengths <- map_vec(unique(tib$colgrp),\(x) length(filter(tib, colgrp == x)$colgrp)) # vector of the lengths of the groups in alphabetical order.

btwn_grp_diffs <- (mean(num ~ colgrp, data = tib) - mean(tib$num))^2 # Vector containing the squared differences between the group means and the total mean.

SS_A <- sum(group_lengths * btwn_grp_diffs) # Elementwise product of group lengths and squared distance from the total mean.

SS_E <- sum(map_vec(unique(tib$colgrp), \(x) sum((filter(tib, colgrp == x)$num - mean(filter(tib, colgrp == x)$num))^2))) # For each group, filter tib for only the values in that group and look at the sum of squared distances from the mean of the group. Finally, add these sums.

F_stat <- (SS_A/(m-1))/(SS_E/(N-m)) # Definition of F.
p <- pf(F_stat, df1 = m-1, df2 = N-m, lower.tail = F) # p-value.

# By lm
ANOVA_table <- anova(lm(num ~ colgrp, data = tib))
F <- ANOVA_table[1,4]
p <- ANOVA_table[1,5]
```
``````

After an ANOVA $F$-test, it is common to perform a [[#Tukey-Kramer HSD]] test to determine which means in particular differ and to obtain CIs for each difference of means $|\mu_i-\mu_j|.$
#### Non-Parametric Approach
Since claiming the means are equal is equivalent to saying the distributions of the groups are equal, a permutation test is applicable. $SS_T$ is permutation independent but $SS_A$ and $SS_E$ are not, so one of these seems like an applicable statistic. If the null hypothesis holds, then we are likely to obtain similar data across groups, leading to similar group means and so $SS_A,$ or $SS_E,$ should not differ greatly across permutations.

> [!thm]
> Suppose we have hypotheses $H_0:F_{Y_i}=F_{Y_j},\forall i,j$ and $H_1:F_{Y_i}\ne F_{Y_j},\exists i,j.$ Let $F_k$ be the $F$-statistic computed on the $k$-th permutation. The $\alpha$ level test has us reject $H_0$ only if $S>\xi$ where $P(F>\xi;H_0)=\alpha.$ If we generate $B$ random permutations, it has an approximate $p$-value $$p=P(F'>F;H_0)\approx\dfrac{1}{B}\sum_{k=1}^{B}I(F_k>F).$$

``````ad-rmk
title:R Details

```r
F <- anova(lm(num ~ colgrp, data = tib))[1,4] # F-statistic on the original data.
B <- 1000 # large value.
F_perm <- matrix(data = NA, nrow = B) # Initialise matrix to contain the permuted statistics.
for (k in c(1:B)) {
	F_perm[k] <- anova(lm(num ~ shuffle(colgrp), data = tib))[1,4] # Permuted statistic.
}

p <- pdata(F_perm, F, lower.tail = FALSE)[[1]] # Non-parametric p-value.
```
``````

#### Assessing Assumptions
Independence of observations is assumed unless the design of an experiment warrants suspicion. Equal variance could be assessed by taking the sample SDs of each groups and taking every possible ratio. If none are above $2,$ specially with large sample sizes, we are likely safe to proceed.

``````ad-rmk
title:R Details

```r
# tib has columns num and colgrp
tibsd <- sd(num ~ colgrp, data = tib)
outer(tibsd, tibsd, FUN = \(x,y) x/y)>2 # If the ouput contains only FALSE, we are likely safe.
```
``````

The $F$-test is particularly resistant to violations of its assumptions. Lastly, we require that the residuals be normally distributed. We can use a [[Presentation-of-Data#QQ Plots|normal QQ-plot]] for this.

``````ad-rmk
title:R Details

```r
par(mfrow = c(2,2)) # Allowing for multiple plots on screen
plot(lm(num ~ colgrp, data = tib), pch = 16) # The normal QQ-plot should be close to the identity line at least for a wide ball around the origin.
```
``````

## Two-Way ANOVA
$$\Huge{INCOMPLETE}.$$

We now consider the case of 2 grouping variables and 1 response: $Y_i=C(A_i,B_i),$ where $Y_i$ is the response. More compactly, at the cost of some formalism, we might write $Y_{i,j,k}.$ There are $7$ possibilities:
1. One of $A$ or $B$ has an [[Design-and-Analysis-of-Experiments#Kinds of Data|effect]] but not the other and there is no interaction.
2. One of $A$ or $B$ has an effect but not the other and there is an interaction.
3. Neither has an effect and hence there is no interaction.
4. Both have an effect without interaction.
5. Both have an effect and interact.

> [!rem] ***$A$ and $B$ are not Always Treatments***
> In practice only one variable may be called a treatment and the other could be a [[Design-and-Analysis-of-Experiments|blocking]] or grouping variable for something we expect might interact with the treatment — a [[Design-and-Analysis-of-Experiments#Observational Studies and Confounding|confounding variable]]. For example, the levels of $A$ could be different dosages of a drug and $B$ might record the age or sex of a subject.

### Linear Model with Fixed Effects

> [!def] Two-Way ANOVA Interaction Model
> Suppose we have variables $\{Y_{i,j,k}\}_{k=1}^{n_{i,j}}$ for $i\leqslant I,j\leqslant J,$ let $M_i=\sum_{j=1}^{J}n_{i,j}, N_j=\sum_{i=1}^{I}n_{i,j},$ and let $N=\sum_{i=1}^{I}M_i=\sum_{j=1}^{J}N_j.$ The **Two-Way ANOVA interaction model** stipulates the following distribution for the $Y_{i,j,k}:$
> $$Y_{i,j,k}=\mu+\alpha_i+\beta_j+\omega_{i,j}+\varepsilon_{i,j,k},$$
> where the $\varepsilon_{i,j,k}$ are IID, zero-mean normal variables with variance $\sigma$ and the $\alpha_i,\beta_j,$ and $\omega_{i,j}$ are constants. We call the $\alpha_i$ and $\beta_j$ the **main effect coefficients** and the $\omega_{i,j}$ the **interaction terms** or **interaction coefficients.** When $\omega_{i,j}=0$ for all $i,j,$ we call the resulting model the **additive two-way model** and at times the two-way interaction model the **full model.**

If we collect the response variables into a $N$ dimensional vector $Y,$ ordering them lexicographically, we collect the $\alpha_i$ into $\alpha,$ and similarly for $\beta,\omega,$ and $\varepsilon,$ we can represent the problem as $$Y=X\theta+\varepsilon,$$
for some $N\times(I+J+IJ-1)$ matrix $X$ consisting of $0$s, $1$s, and $-1$s, and a vector in $I+J+IJ-1$ dimensional space $\theta=(\mu,\alpha_{1:I-1}^T, \beta_{1:J-1}^T,\omega^T)^T.$ In particular, if $i>N-M_I,$ the $I-1$ entries of $X$ after $X_{i,1}$ are all $-1;$ if $\sum_{l=1}^{k}M_l-n_{k,J}<i\leqslant \sum_{l=1}^{k}M_l,$ the $J-1$ entries after $X_{i,I}$ are all $-1.$ $X_{i,j}=1$ iff either
- $j=1.$ The first column capturing $\mu$ is all $1$'s.
- $\sum_{l=1}^{k-1}M_l+\sum_{l=1}^{m-1}n_{k,l}<i\leqslant\sum_{l=1}^{k-1}M_l+\sum_{l=1}^{m}n_{k,l}\leqslant N-M_I,$ $m<J,$ and $j$ is either $1+k,$ $I+m,$ or $I+kJ+m-1.$ Here the thought is that when $i$ is in these bounds we are in the group $Y_{k,m,-}$ where $k\ne I$ and $m\ne J.$ To obtain the $\alpha_k$ coefficient from $\theta$ we simply go to the $(k+1)$-st column, adding $1$ to account for the $\mu$ at the start. The $\beta_{m}$ coefficient is in the $(1+I-1+m)$-th position of $\theta$ since we need to first go through all but the last entry of $\alpha$ in addition to $\mu$ before arriving at $\beta,$ and $\omega_{k,m}$ is at the $$(1+I-1+J-1+(k-1)J+m)\text{-th position}$$
for having to clear $\mu,\alpha,\beta,$ and $\omega_{1,1:J}\ldots,\omega_{k-1,1:J}$ before being in the $\omega_{k,-}$ group, at which point we go $m$ positions further to $\omega_{k,m}.$

All other entries are $0.$

> [!rmk] Zero Sum Constraint
> For the model parameters to be identifiable, we assume $$\sum_{i=1}^{I}\alpha_i = \sum_{j=1}^{J} \beta_j = 0.$$
> This allows us to remove $\alpha_I$ and $\beta_{J}$ from $\beta.$

As before we should think of $\mu$ as the mean of the $Y_{i,j,k}$ when there is no treatment, so alternatively, if appropriate, we might consider the first group $Y_{1,1,k}$ the untreated group. The groups $Y_{1,j,k}$ and $Y_{i,1,k}$ represent variables which received only treatment $B$ or treatment $A,$ respectively, so there is no interaction. This is done, instead of the sum-to-zero constraints, by assuming, for all $i,j,$ that $\alpha_1=\beta_1=\omega_{i,1}=\omega_{1,j}=0.$

> [!rmk] Alternative Matrix
> The alternative constraint to the sum-to-zero assumption of course requires a different design matrix $X.$ The changes are obvious.

There are 3 possible null hypotheses of interest: $$H_{0,0}:\forall i,j.\ \omega_{i,j}=0,\quad H_{0,1}:\forall i.\ \alpha_i=0,\quad H_{0,2}:\forall j.\ \beta_j=0.$$
Often we are most interested in $H_{0,0}$ for if an interaction is present the main effects are not as important as the interaction terms. If the interaction test is not significant and it appears that all interaction terms are fairly close to $0,$ we can then switch to the additive model for the remaining tests, re-estimating the parameters.

> [!rmk] Estimating Parameters When There is no Interaction
> Even in the additive model, including the effect of another variable is likely to change the estimates for the parameters of the other compared to the one-way linear model. For the Two-Way ANOVA this is not a concern if we have a balanced design. Here the variables $A$ and $B$ act as [[Design-and-Analysis-of-Experiments#Observational Studies and Confounding|confounding variables]] for each other.

#### Balanced Design
Suppose the $n_{i,j}$ are equal to $n.$ Then $M_i=nJ$ and $N_j=nI.$

> [!def] Sums of Squares
> - **Total Sum of Squares:** $$SS_T=\sum_{i=1}^{I}\sum_{j=1}^{J} \sum_{k=1}^{n} (Y_{i,j,k}-\overline{\overline{Y}})^{2}.$$
> - **$A$'s Sum of Squares:** $$SS_A=\sum_{i=1}^{I} nJ(\overline{Y}_{i,-}-\overline{\overline{Y}})^{2}.$$
> - **$B$'s Sum of Squares:** $$SS_B=\sum_{j=1}^{J} nI(\overline{Y}_{-,j}-\overline{\overline{Y}})^{2}.$$
> - **Interaction Sum of Squares:** $$SS_{A,B}=\sum_{i=1}^{I} \sum_{j=1}^{J} n(\overline{Y}_{i,j}-\overline Y_{i,-}-\overline Y_{-,j} +\overline{\overline{Y}})^{2}.$$
> - **Residual Sum of Squares:** $$SS_{E}=\sum_{i=1}^{I} \sum_{j=1}^{J} |\widetilde{Y}_{i,j}|^2.$$

The exact form of the residuals depends on whether we are examining an additive model or the full model. $SS_{A,B}$ is explained below.
##### Additive Model
First we deal with the simpler situation involving no interaction terms. Like in the one-way case, we can decompose $SS_T$ into the other sums of squares and the sums of squares divided by the appropriate value follow a certain $\chi^2$ distribution. Fitted values under an additive model take the form $$\widehat{Y}_{i,j,k}=\overline{\overline{Y}}+(\overline{Y}_{i,-}-\overline{\overline{Y}})+(\overline{Y}_{-,j}-\overline{\overline{Y}}).$$
Hence $SS_E$ will be the following sum: $$SS_E=\sum_{i=1}^{I} \sum_{j=1}^{J} \sum_{k=1}^{n} (Y_{i,j,k}-\overline{Y}_{i,-}-\overline{Y}_{-,j}+\overline{\overline{Y}})^2.$$
By the equation $$Y_{i,j,k}=\widehat{Y}_{i,j,k}+(Y_{i,j,k}-\widehat{Y}_{i,j,k})=\overline{\overline{Y}}+(\overline{Y}_{i,-}-\overline{\overline{Y}})+(\overline{Y}_{-,j}-\overline{\overline{Y}})+(Y_{i,j,k}-\overline{Y}_{i,-}-\overline{Y}_{-,j}+\overline{\overline{Y}}),$$
the desired decomposition follows.

> [!thm]
> - $SS_T=SS_{A}+SS_{B}+SS_{E}.$
> - Under $H_0,$ $SS_A/\sigma^{2}\sim\chi^{2}_{I-1},SS_B/\sigma^2\sim\chi^{2}_{J-1},$ and $SS_E/\sigma^{2}\sim\chi^{2}_{N-J-I+1}.$

Hence we have the following $F$ ratios and their distributions under $H_0:$
$$
\begin{align*}
F_A&=\dfrac{SS_A/(I-1)}{SS_E/(N-J-K+1)}\sim F_{I-1,N-J-I+1}\\
F_B&=\dfrac{SS_B/(J-1)}{SS_E/(N-J-K+1)}\sim F_{J-1,N-J-I+1}
\end{align*}
$$
The DoF for $SS_E/\sigma^{2}$ comes from the sum of all DoF having to equal the DoF of $SS_T/\sigma^{2}$ which are $N-1.$ From knowing $df_A=I-1,df_B=J-1,$ and $df_A+df_B+df_E=N-1,$ we can solve for $df_E:$ $$df_E=N-1-I-J+2=N-I-J+1.$$

##### Full Model
Our fitted-values are now of the form
$$
\begin{align*}
\widehat{Y}_{i,j,k}&=\widehat{\mu}+\widehat{\alpha}_i+\widehat{\beta}_j+\widehat{\omega}_{i,j}\\
&=\overline{\overline{Y}}+(\overline{Y}_{i,-}-\overline{\overline{Y}})+(\overline{Y}_{-,j}-\overline{\overline{Y}})+(\overline{Y}_{i,j}-(\overline{Y}_{i,-}-\overline{\overline{Y}})-(\overline{Y}_{-,j}-\overline{\overline{Y}})-\overline{\overline{Y}})\\
&=\overline{Y}_{i,j}.
\end{align*}
$$
Now we have $$SS_E=\sum_{i=1}^{I} \sum_{j=1}^{J} \sum_{k=1}^{n} (Y_{i,j,k}-\overline{Y}_{i,j})^2.$$
Again we decompose via the identity $Y_{i,j,k}=\widehat{Y}_{i,j,k}+\widetilde{Y}_{i,j,k}.$

> [!thm]
> - $SS_T=SS_A+SS_B+SS_{AB}+SS_E.$
> - Under $H_0,$ 
> $$
> \begin{align*}
> SS_A/\sigma^{2}&\sim \chi^{2}_{I-1}\\
> SS_B/\sigma^{2}&\sim \chi^{2}_{J-1}\\
> SS_{AB}/\sigma^{2}&\sim \chi^{2}_{(I-1)(J-1)}\\
> SS_E/\sigma^{2}&\sim \chi^{2}_{N-IJ}
> \end{align*}
> $$

Now there are 3 $F$ ratios, under $H_0:$
$$
\begin{align*}
F_A&=\dfrac{SS_A/(I-1)}{SS_E/(N-IJ)}\\
F_B&=\dfrac{SS_B/(J-1)}{SS_E/(N-IJ)}\\
F_{AB}&=\dfrac{SS_{AB}/(I-1)(J-1)}{SS_E/(N-IJ)}
\end{align*}
$$

#### Unbalanced Design
Confounding makes it so the results of a test will be affected by the order in which they are done. If we test $H_{0,1}$ and then $H_{0,2},$ we might get different results than testing in the reverse order. We could use alternative sums of squares than what is obvious and of interest there are [3 or 4 types](https://www.ars.usda.gov/ARSUserFiles/60540520/Two-wayANOVAspreadsheet.pdf). First some notation.


```ad-warning
title:Residual Sums of Squares (COULD BE WRONG)
collapse:closed

Define the following residual sum of squares:
$$
\begin{align*}
R(1)&=\sum_{i=1}^{I} \sum_{j=1}^{J} \sum_{k=1}^{n_{i,j}} (Y_{i,j,k}-\overline{\overline{Y}})^{2}\\
R(A)&=\sum_{i=1}^{I} \sum_{j=1}^{J} \sum_{k=1}^{n_{i,j}} (Y_{i,j,k}-(\overline{\overline{Y}}+(\overline{Y}_{i,-}-\overline{\overline{Y}})))^{2}\\
&=\sum_{i=1}^{I} \sum_{j=1}^{J} \sum_{k=1}^{n_{i,j}} (Y_{i,j,k}-\overline{Y}_{i,-})^{2}\\
R(B)&=\sum_{i=1}^{I} \sum_{j=1}^{J} \sum_{k=1}^{n_{i,j}} (Y_{i,j,k}-\overline{Y}_{-,j})^{2}\\
R(A,B)&=\sum_{i=1}^{I} \sum_{j=1}^{J} \sum_{k=1}^{n_{i,j}} (Y_{i,j,k}-(\overline{\overline{Y}}+(\overline{Y}_{i,-}-\overline{\overline{Y}})+(\overline{Y}_{-,j}-\overline{\overline{Y}})))^{2}\\
&=\sum_{i=1}^{I} \sum_{j=1}^{J} \sum_{k=1}^{n_{i,j}} (Y_{i,j,k}-\overline{Y}_{i,-}-\overline{Y}_{-,j}+\overline{\overline{Y}})^{2}\\
R(A,B,AB)&=\sum_{i=1}^{I} \sum_{j=1}^{J} \sum_{k=1}^{n_{i,j}} (Y_{i,j,k}-)^{2}
\end{align*}
$$
```

# Multiple Testing
Suppose we have $m$ pairs of hypotheses, performing a level $\alpha$ test on each. The result of one test might reasonably impact our decision on rejecting another but the interaction is generally vague. Still, there are classical methods to deal with these, typically rejecting multiple 

> [!def] ***Bonferroni Method***
> Let $\{P_i\}_{i=1}^{m}$ be $p$-values obtained from level $\alpha$ tests on, respectively, hypotheses $H_{0,i}$ and $H_{1,i}.$ The **Bonferroni method** has us reject $H_{0,i}$ only if $P_i<\dfrac{\alpha}{m}.$

> [!thm] *Error Rates*
> Using the Bonferroni method, the probability of some type I error occurring is at most $\alpha.$

The method is conservative, attempting to minimise the possibility of at least one type I error, called the **family-wise error rate.**

> [!def] ***Family-wise Error Rate***
> Let $R_i$ be the event of a false rejection of the $i$-th null hypothesis. The **family-wise error rate** is the probability $$P\left( \bigcup_{i=1}^{m}R_i\right).$$
> that at least one type I error is made. At times we can describe a test as being performed at the $\alpha$ family-wise level when certain parameters are chosen appropriately.

If the false rejection of any one test is independent of the rest, then the error rate is $1$ minus the product of a type I error rate on the $i$-th test for each $i.$ If additionally all tests are made at the $\alpha$ level and every statistic involved is a continuous variable, then the family-wise error rate is $1-\alpha^m.$

> [!thm]
> The Bonferroni method is equivalent to rejecting $H_{i,0}$ only if $mP_i<\alpha$ when $mP_i\leqslant 1,$ otherwise we fail to reject it.

However, at times we want to minimise the average proportion of false rejections.

> [!def] ***False Discovery Rate (FDR)***
> Suppose we reject all hypotheses who corresponding test results in a $p$-values below a common threshold. Let $\eta_1$ be the number of rejections and $\varepsilon_1$ the number of incorrect rejections. The **False Discovery Proportion (FDP)** is defined as $0$ when $\eta_1=0,$ otherwise $\varepsilon_1/\eta_1.$ The **False Discovery Rate (FDR)** is the expected value of the FDP.

> [!def] ***Benjamini-Hochberg (BH) Method***
> Suppose the $p$-values are in increasing order, that all tests were performed at the $\alpha$ level, and define $$\ell_i=\dfrac{i\alpha}{C_mm},\quad r=\max\{k : P_k<\ell_k\},$$
> where $C_m$ is 1 if all $p$-values are independent, otherwise it is the $m$-th harmonic number. The **BH rejection threshold** is the statistic $S=P_r.$ We are to reject all hyptoheses $H_{0,i}$ s.t. $P_i\leqslant S.$

> [!thm] *Benjamini-Hochberg*
> If the BH method is applied, then the FDR is at most $\alpha.$

The result holds regardless of the distributions of the $p$-values or how many null hypotheses were 'true' during the experiments.

## Tukey-Kramer HSD

Suppose $Y_{i,j}\sim\mathcal{N}(\mu_i,\sigma)$ for means $\{\mu_i\}_{i=1}^{m}.$ As in the [[Classical-Hypothesis-Testing#ANOVA|ANOVA]] case, our hypotheses are the following: $$H_0:\mu_i=\mu_j,\quad\quad H_1:\exists i,j.\ \mu_i\ne\mu_j.$$
Let $\delta=\operatorname{diam}\{\mu_i:i\leqslant m\},$ $\widehat{\delta}=\operatorname{diam}\{\overline{Y}_i : i\leqslant m\},$ and let $\pm \varepsilon$ be the bounds of a $1-\alpha$ CI for $\delta$ centred at $\widehat{\delta}$ and $\varepsilon>0.$ That is, $P(|\delta-\widehat{\delta}|\leqslant\varepsilon)\geqslant1-\alpha.$ Under $H_0,$ then, $\delta=0$ and we have $1-\alpha$ CIs for all the differences between means. Note that if $\widehat{\delta}<\varepsilon,$ then $|\overline{Y}_i-\overline{Y}_j|<\varepsilon.$ The distribution of $\widehat{\delta}$ is unwieldy for a statistic. To ease reasoning we shall standardise it. Each difference of means is a normal variable with mean $\mu_i-\mu_j$ and variance $\sigma^{2}(n_i^{-1}+n_j^{-1}).$ Under $H_0$ we are left only to worry about the variance. Of course, dividing by $\sigma\sqrt{ n_i^{-1} + n_j^{-1} }$ will give us a standard normal variable. [[Classical-Estimation|Studentising]] the statistic with the pooled sample variance complicates the distribution but now we have something to compute — a workable test. However, we do not just have a difference in means. Rather, we are choosing the largest of finitely many, dependent random variables each with this studentised distribution. Despite these facts, we will proceed with the test.

> [!def] ***Tukey-Kramer Test***
> Suppose we have the set up just described above. The **studentised range** with parameter $m$ and DoF $N-m$ is the statistic $$Q=\dfrac{\overline{Y}_{\max}-\overline{Y}_{\min}}{\sqrt{\dfrac{\widehat{S}_p^2}{2} \left(\dfrac1{n_{\max}}+\dfrac1{n_{\min}}\right) }},$$
> where $\widehat{S}_p^{2}$ is the [[Classical-Estimation#Pooled Variance|pooled sample variance]] with $N-m$ DoF, $\overline{Y}_{\max}$ is the largest sample mean, and $n_{\max}$ is the size of the corresponding group — similarly for $\overline{Y}_{\min}$ and $n_{\min}.$ The **Tukey-Kramer test,** at the $\alpha$ level, has us **reject $H_0$** only when $Q>q_{N-m,m,\alpha}.$ It has a $p$-value of $1-F_{q_{N-m,m}}(Q)$ and provides us with CIs for each $|\mu_i-\mu_j|$ with bounds $$\overline{Y}_{i}-\overline{Y}_j\pm q_{N-m,m}\dfrac{\widehat{S}_p}{\sqrt{ 2 }}\sqrt{ n_i^{-1}+n_j^{-1}}.$$

```ad-warning
title:Conflicting Definitions

There seem to be multiple definitions for the studentised range, varying in the denominator. They all divide by the pooled variance but some include a factor of $\sqrt{2/n},$ just $1/\sqrt{n},$ or, as seen here, $1/\sqrt{n_{\max}^{-1}+n_{\min}^{-1}}.$ So long as the group sizes are similar, these should make little difference.
```

With the notation of [[Classical-Hypothesis-Testing#ANOVA|ANOVA]] we can express $\widehat{S}_p^{2}$ as ${ SS_E/(N-m) },$ the residual mean square. The individual CIs allow us to test individual differences between pairs and, if we did detect some difference, to report which particular differences were significant as well as the estimated effect size.

> [!rem] ***Naming Convention***
> When $n_i=n_j$ for each $i,j,$ it is common to call the method **Tukey's Honest Significant Difference (HSD) Test.**

Typically we construct these CIs after an ANOVA (whether the result was significant or not) to estimate effect sizes.

```ad-warning
title:Contradictory Results

It is possible to obtain a significant ANOVA result but an insignificant Tukey-Kramer result and vice versa.
```

If we treat the largest comparison as if it were a Wald test, then whenever $0$ is not in the confidence interval so constructed we will not obtain a significant result—again, pretending this were a binary hypothesis testing problem. The more confidence intervals we have lacking $0$ as a member, the more evidence we have against $H_0.$

> [!cnj]
> A familywise level $\alpha$ Tukey HSD test is equivalent to rejecting $H_0$ iff $0$ is not in any CI $\overline{Y_i}-\overline{Y}_j\pm\dfrac{\xi}{\sqrt{ 2 }}\widehat{S}_p\sqrt{ n_i^{-1} + n_j^{-1} }$ for any $i,j$ where that difference is non-negative.

# Significance Testing

> [!def] ***Null Hypothesis Significance Testing (NHST)***
> In a more general context, suppose we are dealing with uncertain phenomena, ones which involve probabilistic models. There is a *default* hypothesis $H_0,$ still called the **null hypothesis,** and we are to reject or accept it based on observations $X=(X_1,\ldots, X_n).$ 

First we will restrict ourselves to parametric models with a simple $H_0$ and $H_1$ being its negation. Not all significance testing problems deal with models of this kind. Still, this is quite general.

> [!rem] ***Methodology***
> Let $X=(X_1,\ldots, X_n)$ be the observation vector and let the null hypothesis $H_0$ state that $\theta=\theta_0.$ Prior to any realisation of $X,$ we do the following:
> 
> - Consider research questions and tailor the study design to address as many of these as possible.
> - Choose a **statistic** $S=h(X)$ which will summarise the observations and should help address the research questions.
> 	- Additionally, if appropriate, choose a **model** containing the distributions of some of the observations.
> - Specify the **shape** of the rejection region as a function of $\xi,$ which we are yet to choose, so as to satisfy $$P(X\in R; H_0)=\alpha.$$
> Typically these are informed by the alternative hypothesis so that, for example, if $H_1:\theta>\theta_0,$ then a plausible rejection region is of the form $X\in R$ iff $|\widehat\Theta_n-\theta_0|>\xi,$ where $\xi$ is chosen based on the relation $$P(|\widehat\Theta_n-\theta_0|>\xi; H_0)=\alpha.$$
> - Choose a **significance level,** a probability $\alpha$ of false rejection.
> - Determine or approximate $\xi$ so that the probability of false rejection is $\alpha.$
> 
> This fully determines the rejection region. Once we have observed values $x=(x_1,\ldots, x_n)$ of $X$ there are 2 (or 1) final computation steps:
> 
> - Calculate $s=h(x).$
> - Reject $H_0$ when $s$ is in the rejection region, and here we say $H_0$ is **rejected at the $\alpha$ significance level,** otherwise we **fail to reject** the null hypothesis.
> - Alternatively, calculate the $p$-value and reject $H_0$ if $p<\alpha.$
> 
> Everything after this is discussion, reporting, and interpretation.

There is no general principle for choosing $S.$ At times it might be obvious (e.g. in determining whether a coin is fair, let $S$ be the sum of IID Bernoulli random variables recording the outcome of each toss), it might involve a generalisation of $\lambda_{LR},$ and yet in others a primary consideration is how simple $S$ is to compute, even approximately, so that we can determine $\xi.$ We might estimate the distribution of $S$ through bootstrapping and other re-sampling methods. Once chosen, the rejection region for a particular $S$ tends to be near a peak in the distribution of $S$ under $H_0.$ As we make more observations, the [[Convergence-Phenomena-and-Inequalities#Central Limit Theorem|CLT]] often applies to $S$ and there we could expect the rejection region to be symmetric around the mean of $S.$ A word on interpreting significance levels and rejection regions.

> [!rem] ***Interpreting Significance Levels***
> When we say $H_0$ is rejected at the $\alpha$ significance level, this does not mean the probability of $H_0$ being true is less than $\alpha.$ Instead, in the classical context, we should interpret it in terms of *frequency,* as saying that **under this methodology, we will falsely reject the null hypothesis an $\alpha$ fraction of the time, and that is not to say the null hypothesis is true only an $\alpha$ fraction of the time.** In a Bayesian framework we could view $\alpha$ as the probability of observing a certain outcome when $H_0$ is true—the Type I error rate.

We mentioned the alternative hypothesis $H_1$ is merely the negation of $H_0$ but there is nuance here depending on, among other thing, the number of parameters to be estimated and what relationship we claim holds between them. 

```ad-example
title:IID Normal Observations with Unknown Mean and Possibly Known Variance
collapse:closed

Let $X=(X_1,\ldots, X_n)$ be a vector of IID normal random variables with mean $\theta$ and, for now, known variance $\sigma^{2}.$ The hypotheses at first are $H_0:\theta=0$ and $H_1:\theta\ne 0.$ A seemingly reasonable statistic is the SM estimator $\overline{X}$ or the scaled version $$S=\frac{1}{\sigma\sqrt{ n }}\sum_{i=1}^{n} X_i=\overline{X}\frac{\sqrt{ n }}{\sigma}.$$
Further we might choose to reject $H_0$ only when $|S|>\xi.$ We know $S$ has a standard normal distribution under the null hypothesis and from this we derive the rejection region given a particular choice of $\alpha.$ First, $$P(|S|>\xi; H_0)=1-P(|S|\leqslant\xi; H_0).$$
From the relation $P(|S|>\xi; H_0)=\alpha$ we derive $$P(|S|\leqslant \xi; H_0)=P(-\xi\leqslant  S\leqslant \xi; H_0)=1-\alpha.$$
But we noted $S$ had a standard normal distribution so calculations are straightforward:
$$
\begin{align*}
P(|S|\leqslant \xi; H_0)&=\Phi(\xi)-\Phi(-\xi)\\
&=\Phi(\xi)-1+\Phi(\xi)\\
&=2\Phi(\xi)-1\\
2\Phi(\xi)-1&=1-\alpha\\
2\Phi(\xi)&=2-\alpha\\
\Phi(\xi)&=1-\alpha/2\\
\xi&=\Phi^{-1}(1-\alpha/2).
\end{align*}
$$
Further, the rejection condition is equivalently stated as $$\text{`reject }H_0\text{ when }\left| \sum_{i=1}^{n} X_i \right|>\xi\sigma\sqrt{ n },\text{'}$$
where $\xi$ is a constant derived from normal tables. Let us stipulate additional conditions. A **one-sided** significance testing problem would state the *alternative hypothesis* as $H_1:\theta>0.$ We could use the very statistic but now we reject $H_0$ when $S>\xi$ instead of the absolute value of $S$ being strictly greater than $\xi=\Phi^{-1}(1-\alpha).$
$\quad$Now suppose the variance $\sigma^{2}$ is unknown. We could replace it with the unbiased SV estimator $$\widehat{S}^{2}_n=\frac{1}{n-1}\sum_{i=1}^{n} \left( X_i-\overline{X}\right)^{2}.$$
The resulting statistic $S$ no longer has a standard normal distribution but instead a $t$-distribution with $n-1$ degrees of freedom. The rest is similar.
```

Now we look to an example of a **composite** null hypothesis in that multiple parameters are compatible with $H_0.$ 

```ad-example
title:Testing the Means of Two Populations
collapse:closed

Suppose we wish to test whether a certain medicine is equally effective on distinct populations. Let $X=(X_1, \ldots, X_n)$ be a vector of IID Bernoulli indicator variables with unknown mean $\theta_X$ and $Y=(Y_1, \ldots, Y_m)$ also be a vector of IID Bernoullis with unknown mean $\theta_Y.$ The variables in $X$ are independent of the variables in $Y.$ First we consider the hypotheses $H_0:\theta_X=\theta_Y$ and $H_1:\theta_X\ne\theta_Y.$ Any ordered pair of the form $(a, a),$ for $a\in [0, 1],$ is compatible with $H_0.$ We have a null hypothesis asserting an uncountably infinite disjunction of statements. This we call a **composite** hypothesis. The alternative hypothesis is equivalent to either $\theta_X<\theta_Y$ or $\theta_Y<\theta_X$ being true. We choose the statistic $S=\theta_X-\theta_Y,$ which will be $0$ if they are equal. The SM estimators $\widehat{\Theta}_X$ and $\widehat{\Theta}_Y$ for $\theta_X$ and $\theta_Y$ respectively seem suitable. We might reject $H_0$ when we observe $$|\widehat{\Theta}_X-\widehat{\Theta}_Y|=|\widehat{S}|>\xi,$$
which we determine from a choice of $\alpha.$ Because $H_0$ is compatible with multiple statements, the distribution of $\widehat{S},$ even under $H_0,$ is not obviously computable. Let us change the statistic to a computable expression. Note that the sums $n\widehat{\Theta}_X$ and $m\widehat{\Theta}_Y$ have a binomial distribution which, for large $n$ and $m,$ are [[Convergence-Phenomena-and-Inequalities#Approximating the Binomial|approximately]] normal so our estimators are approximately normal. Since $X$ and $Y$ are independent, $\widehat{S}$ is also approximately normal with mean $\theta_X-\theta_Y$ and variance $$V\left[ \widehat{\Theta}_X-\widehat{\Theta}_Y \right] = V[\widehat{\Theta}_X]+V[\widehat{\Theta}_Y]=\frac{\theta_X}{n}(1-\theta_X)+\frac{\theta_Y}{m}(1-\theta_Y).$$
Under $H_0,$ we know $\widehat{S}$ has mean $0$ but its variance is still out of reach. There is an estimate, under $H_0,$ for the common value of $\theta_X$ and $\theta_Y:$ $$\widehat{\Theta}=\frac{n\overline{X}+m\overline{Y}}{n+m}.$$
The variance $V[\widehat{S}],$ then, could be approximated as $$\widehat{\sigma}^{2}=\left( \frac{1}{n}+\frac{1}{m} \right) \widehat{\Theta}(1-\widehat{\Theta}).$$
Now, redefine $S=(\widehat{\Theta}_X-\widehat{\Theta}_Y)/\widehat{\sigma},$ which we know to be approximately a standard normal random variable. Our  new rejection region is so determined that we reject $H_0$ only when $$|S|=\frac{|\widehat{\Theta}_X-\widehat{\Theta}_Y|}{\widehat{\sigma}}>\xi.$$
Like before we choose $\xi=\Phi^{-1}(1-\alpha/2).$ This is enough to give a satisfactory, approximate solution. Suppose we rule out the case $\theta_X<\theta_Y.$ The alternative hypothesis would then say $H_1:\theta_Y<\theta_X.$ The rejection region is changed to be **one-sided:** $$\text{reject }H_0\iff\widehat{\Theta}_X-\widehat{\Theta}_Y>\widehat{\sigma}\xi=\widehat{\sigma}\Phi^{-1}(1-\alpha).$$
```

The last example demonstrated a situation with an uncomputable statistic, not even approximately computable, that needed change. A suitable statistic must at least have an approximate distribution, and preferably one whose closed form is identical for any observations. Both examples mentioned *one-sided* and *two-sided* versions of a problem. Simply, the latter are those whose alternative hypothesis is of the form $H_1:\theta_0>\theta_1$ or $\theta_0<\theta_1$ and in the former it takes the form $H_1:\theta_1<\theta_0$ or $H_1:\theta_0<\theta_1,$ where at least one of $\theta_0$ or $\theta_1$ is unknown. Without a good reason to posit one quantity is larger than the other, we use a two-sided hypothesis.