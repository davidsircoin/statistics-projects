Tags: [[Stats]], [[Probability-Theory]], [[Probability-Distributions]]

For general facts about the normal distribution, see [[Probability-Distributions#Normal|this note]].
# Miscellaneous Things
- If $X\sim\mathcal{N}(\mu, \sigma^2)$ and $Y=aX+b$, then $Y\sim\mathcal{N}(a\mu+b, a^2\sigma^2)$, where $a$ is assumed to be non-zero.
- $\Phi(-x)=1-\Phi(x)$
- Any normally distributed variable $X\sim\mathcal{N}(\mu, \sigma^2)$ can be standardised as $$Y=\frac{X-\mu}{\sigma}\sim\mathcal{N}(0, 1)$$ since $E[Y]=\dfrac{E[X]-\mu}{\sigma}=0$ and $V[Y]=\dfrac{V[X]}{\sigma^2}=1.$ Further, $$F_X(x)=F_Y(\frac{x-\mu}{\sigma}),\quad\text{ for any }x.$$ That is why we standardise.

For some distributions with finite variance, standardisation allows us to measure how far from symmetric it is and whether the deviations are concentrated to the left or right of the mean.

> [!def] Skewness
> Let $X$ be a random variable with finite mean and variance $\mu,\sigma^{2}.$ The **skewness** of $X$ is the quantity $$E\left[ \left( \dfrac{X-\mu}{\sigma} \right) ^{3} \right] .$$

# Approximating Other Distributions
See [[Probability-Theorems#Convergence|CLT]] for why this works. If $X$ and $Y$ are random variables of differing distributions modelling an experiment with the same sample space, then they are approximately equal iff, for any $x,$ $$F_X(x)\approx F_Y(x).$$
If we have a sample of size $n$ of approximately normal data, we may *apply the z-transform* (normalise it, apply the z-score formula, or standardising formula) by the following function where $\overline{X}_n$ is the sample mean, $\mu$ is the population mean for the parameter we are modelling, and $\sigma^2$ is its variance: $$\frac{\overline{X}_n-\mu}{\sqrt{\sigma^2/n}}{\sim}\mathcal{N}(0,1).$$
## Binomial
If $X\sim\mathcal{B}in(n, p)$ and $Y\sim\mathcal{N}(\mu = np,\sigma^2 = np(1-p))$, then $F_X(x)\approx F_Y(x)$. With any $n$ and $p$, the CDFs differ the most at the integers. The higher the sample size and the closer $p$ is $\dfrac{1}{2}$, the closer the approximation, but they do so slowly if $p$ is fixed.

> [!rmk]+ Rule of Thumb
> How good of an approximation you want is determined by the inequalities $$np\geq a\text{ and }n(1-p)\geq a$$
> 
> The higher $a$ is the better the approximation. $a=5$ is fine, and $a\in\{20, 25\}$ is better. For a lot of precision, $a\geq 1000$
> 
> For even better approximations, add $\pm\dfrac{1}{2}$ to the value of $x$ in the CDF. That is, if $X\sim\mathcal{B}in(n, p)$ and $Y\sim\mathcal{N}(np, np(1-p))$, then 
> $$
> \begin{align*}
> F_X(x)&\approx F_Y(x+\dfrac{1}{2})\\
> 1-F_X(x)&\approx 1-F_Y(x-\dfrac{1}{2})
> \end{align*}
> $$
> This gets us a better approximation no matter if the inequality is strict. If we are asked to approximate $P(X=x)$, then that is simply $P(x-\dfrac{1}{2}\leq Y\leq x+\dfrac{1}{2})=F_Y(x+\dfrac{1}{2})-F_Y(x-\dfrac{1}{2})$
