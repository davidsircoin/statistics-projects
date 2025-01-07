Tags: [[Stats]], [[Statistical-Methods]], [[Inferential-Statistics]], [[Bayesian-Inference]]

Let $\Theta$ be an unknown parameter we wish to estimate for which we know the prior distribution and the conditional distribution of an [[Bayesian-Inference#Posterior Distribution|observation]] vector $X$ given $\Theta=\theta.$ Suppose we have narrowed the possible values of $\Theta$ to finitely many $\{\theta_i\}_{i=0}^m$—that is, the $\theta_i$ **exhaust** all possible values of $\Theta$. This characterises a **hypothesis testing** problem. The event $H_i=\{ \Theta=\theta_i \}$ is referred to as the *$i$-th hypothesis.* If $m=1,$ we are tasked with a **binary** hypothesis testing problem. If we are not able to narrow all possible values of $\Theta$ to finitely many, we take it as a [[Stats|model assumption]] when all other values are incredibly unlikely. Upon an observation $X=x,$ we may calculate the posterior probabilities $\pi(\theta_i\mid x)$ for each $i$ and proceed with any of the methods described below.
# Hypothesis Testing Methods
## Maximum a-Posteriori Probability
According to the [[Bayesian-Estimation#Maximum a-Posteriori Probability|MAP]] rule, we are to choose the hypothesis with the largest posterior probability, or, if there are many maximal values, any of those. It is optimal in that this procedure maximises the probability of a correct decision and minimises the probability of selecting the incorrect hypothesis for any value of $X.$ Equivalently, it chooses a hypothesis $H_i$ for which $\pi(\theta_i)\pi(x\mid \theta_i)$ is largest.

> [!rmk] A Consequence of Exhausting all Possibilities
> The $\pi$ [[Random-Variables|notation]] hides some detail: if $X$ is discrete, we are to maximise $\pi(\theta_i)p_{X\mid \Theta}(x\mid \theta_i);$ if $X$ is continuous, we are to maximise $\pi(\theta_i)f_{X\mid \Theta}(x\mid \theta_i).$ Note that $\pi(\theta_i),$ and subsequently $\pi(\theta_i\mid x),$ is *always* discrete for the hypotheses $H_i$ are assumed to **exhaust all possibilities.**

It is also noteworthy that we can give a general formula for the probability of choosing correct with the MAP rule, though actual computation will require further details as to what the $\theta_i$ are; if $g_{\mathrm{MAP}}(x)$ is the hypothesis selected by the MAP rule upon observing that $X=x,$ the probability of a correct decision is given by $$P(\Theta=g_{\mathrm{MAP}}(x)\mid X=x).$$
Now, let $S_i=\{x:g_{\mathrm{MAP}}(x)=\theta_i\}.$ That is, $S_i$ is the set of all $x$ which would force us to choose $\theta_i$ by the MAP rule. Then, the probability of a correct decision is
$$
\begin{align*}
P(\Theta=g_{\mathrm{MAP}}(X))&=\sum_iP(\Theta=\theta_i, X\in S_i)\\
&=\sum_iP(X\in S_i\mid \Theta=\theta_i)P(\Theta=\theta_i).
\end{align*}
$$
The corresponding probability of an *incorrect* decision is
$$
\begin{align*}
P(\Theta\ne g_{\mathrm{MAP}}(X))&=\sum_iP(\Theta\ne \theta_i, X\in S_i)\\
&=\sum_iP(X\in S_i\mid \Theta\ne \theta_i)(1-P(\Theta=\theta_i)).
\end{align*}
$$
### Threshold Cases in Binary Hypothesis Testing
Suppose there is only $H_0$ and $H_1.$ At times the MAP decision rule is equivalently stated as $$g_{\mathrm{MAP}'}(x)=\begin{cases}
H_0 & L(x)\leqslant \xi, \\
H_1 & L(x)>\xi,
\end{cases}\quad\forall x,$$
where $$L(x)=\frac{\pi(x\mid \theta_1)}{\pi(x\mid \theta_0)},\quad\text{and}\quad\xi=\frac{\pi(\theta_0)}{\pi(\theta_1)}.$$
We call $L(x)$ the **likelihood ratio** and $\xi$ the **critical value.**

```ad-example
title:Binary Hypothesis Testing with Biased Coins
collapse:closed

Suppose we have a pair of biased coins, coin $1$ and coin $2,$ with probabilities of heads $p_1$ and $p_2$ respectively. We choose a coin uniformly at random and wish to know which coin it is based on a single toss. Let $\Theta=1$ and $\Theta=2$ be the hypotheses that we chose coin $1$ and $2$ respectively. Let $X$ be $1$ when the outcome is tails and $0$ otherwise.
$\quad$The MAP rule requires that we choose the larger value between $\pi(x\mid 1)$ and $\pi(x\mid 2)$ since $\pi(\theta)=1/2$ for either $\theta=1$ or $\theta=2.$ Suppose for now that $p_1=0.46,$ $p_2=0.52,$ and that we observe a tail, i.e. $X=0.$ Then, $$\pi(0\mid 1)=1-0.46>1-0.52=\pi(0\mid 2),$$
so we say coin $1$ was chosen.
$\quad$Now, suppose we toss the chosen coin $n$ times, all independent from each other, and let $X$ be the number of heads observed. Since $p_\Theta(1)=p_\Theta(2)=1/2$ still, we must again only focus on $\pi(x\mid \theta).$ That is, if $X=k$ and $$p_1^k(1-p_1)^{n-k}>p_2^{k}(1-p_2)^{n-k},$$
we infer that $\Theta=1,$ otherwise that $\Theta=2.$ In binary hypothesis testing problems like this, it is common that our choice of hypothesis reduces to whether the amount of observed successes $k$ is above or below some threshold $k^*.$ In such cases the probability of error has a straight-forward calculation:
$$
\begin{align*}
P(\text{error})&=\sum_iP(\Theta\ne \theta_i, X\in S_i)\\
&=P(\Theta\ne2, X\in S_2)+P(\Theta\ne 1, X\in S_1) \\
&=P(\Theta=1, X\in S_2)+P(\Theta=2, X\in S_1) \\
&=P(\Theta=1, X>k^{*})+P(\Theta=2, X\leqslant k^{*})\\
&=\pi(1)\pi(X>k^{*}\mid 1)+\pi(2)P(X\leqslant k^{*}\mid 2)\\
&=\pi(1)\sum_{k=k^{*}+1}^{n}\pi(k\mid 1)+\pi(2)\sum_{k=1}^{k^{*}}\pi(k\mid 2)\\
&=\frac{1}{2}\sum_{k=k^{*}+1}^n{n\choose k}p_1^k(1-p_1)^{n-k}+\frac{1}{2}\sum_{k=1}^{k^{*}}{n\choose k}p_2^k(1-p_2)^{n-k}\\
&=\frac{1}{2}\left(\sum_{k=k^{*}+1}^n{n\choose k}p_1^k(1-p_1)^{n-k}+\sum_{k=1}^{k^{*}}{n\choose k}p_2^k(1-p_2)^{n-k}\right).
\end{align*}
$$
Note that $S_i=\breve g(\theta_i),$ where $g$ is our threshold decision rule expressed by $$g(k)=\begin{cases}1, & k\leqslant k^{*},\\ 2, & k>k^{*}.\end{cases}$$
Given fixed values for $p_1, p_2,$ and $n,$ we may [plot](https://www.desmos.com/calculator/xekmly4mtx) the probability of error as a function of the threshold, so a point $(k, y)$ on the graph represents the probability of error $y$ were we to choose coin 1 if we observe at most $k$ many heads and otherwise choose coin 2. The MAP rule chooses a threshold which minimises this probability.
```

```ad-example
title:Signal Detection and Matched Filters
collapse:closed

A transmitter sends one of $2$ possible messages, message $1$ or message $2.$ Let $\Theta$ be a random variable equal to $1$ if message $1$ was sent and similarly for message $2.$ Suppose either message is equally likely to be sent, i.e. $\pi(1)=\pi(2)=1/2.$ The transmitter sends a sequence of signals $S=(S_1,\ldots, S_n)$ where each $S_i$ is a real number. If $\Theta=1,$ it sends a fixed sequence $S=(a_1,\ldots,a_n),$ and sends a sequence $(b_1,\ldots,b_n)$ of equal energy if $\Theta=2.$ That is, $$\sum_{i=1}^na_i^2=\sum_{i=1}^nb_i^2.$$
A receiver observes $X_i,$ the transmitted signal with additional noise: $$X_i=S_i+W_i,\quad\forall i,$$
where the $W_i$ are standard normal random variables independent of each other and of the signal. If $X=(X_1,\ldots, X_n),$ under the hypothesis $\Theta=1,$ the $X_i$ are IID normal with mean $a_i$ and unit variance: $$f_{X\mid \Theta}(x\mid 1)=\frac{1}{(\sqrt{ 2\pi })^n}\exp\left( -\frac{1}{2}\sum_{i=1}^n(x_i-a_i)^{2} \right).$$
When $\Theta=2,$ $$\pi(x\mid 2)=\frac{1}{(\sqrt{ 2\pi })^n}\exp\left( -\frac{1}{2}\sum_{i=1}^n(x_i-b_i)^{2} \right) .$$
Since each observation is conditionally independent given $\Theta=\theta,$ we multiply the $\pi(x_i\mid \theta)$ to get the results above. Now, from Bayes's rule we get that $$\pi(1\mid x)=\dfrac{\exp\left( -\frac{1}{2}\sum_{i=1}^n(x_i-a_i)^2 \right) }{\exp\left( \frac{1}{2}\sum_{i=1}^n(x_i-a_i)^2 \right)+\exp\left( \frac{1}{2}\sum_{i=1}^n(x_i-b_i)^2 \right)  }.$$
Using our assumption that the squared sums of the $a_i$ is identical to that of the $b_i,$ expanding the squared terms, and after a bit of algebra, leaves us with $$\pi(1\mid x)=\dfrac{\exp\left( \sum_{i=1}^n a_ix_i \right) }{\exp(\sum_{i=1}^n a_ix_i)+\exp(\sum_{i=1}^n b_ix_i)}.$$
A similar expression is obtained for $\pi(2\mid x).$ Since the denominator is the same in either case, the MAP rule asks which inner product is larger: $$g_{\mathrm{MAP}}(x)=\begin{cases}
1, & \displaystyle\sum_{i=1}^n a_ix_i > \sum_{i=1}^n b_ix_i, \\
2, & \displaystyle\sum_{i=1}^n a_ix_i < \sum_{i=1}^n b_ix_i.
\end{cases}$$
If the inner products are equal, we may choose either hypothesis. This kind of decision procedure is called a **matched filter** for we match the received signal $(x_1,\ldots, x_n)$ with the candidate signals by comparing inner products and deciding on a maximum value, the 'best match.'
$\quad$We may generalise this for $m>2$ equally likely messages. Suppose that for message $k$ the transmitter sends a fixed signal $\{a_{k, i}\}_{i=1}^{n},$ where the sum of the squared terms is assumed to be the same for each $k.$ Then, with the same normal-noise model, we decide on a message whose signal has a maximal inner product.
```

