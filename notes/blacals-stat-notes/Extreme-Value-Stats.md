Tags: [[Stats]]

- Studies predictable, extreme events, e.g. storms.
- Extrapolate from recent past to far future.
- Naive approach has $X_i$ IID and computes distribution of the max $\max_{i\leqslant n} X_i,$ which is $F_X(x)^n.$
	- But if we don't know $F_X,$ small errors explode horribly as $n$ grows.
- If you take inspiration from classical, something like $\dfrac{n\overline{X} - n\mu}{\sqrt{ n }\sigma}$ works well for approximating distribution.
- Specifically, if $M_n = \max_{i\leqslant n}X_n$ and there are $a_n>0$ and $b_n$ real s.t. $F_{M_n}(xa_n + b_n)\to G(x)$ is a non-degenerate CDF, then $G$ is a GEV (whatever that is).
- Max of GEV is GEV distributed, so nice for this.
- $\mathrm{GEV}(\mu,\sigma,\xi)$ with loc, scale, shape params (not mean, SD).
	- $\mu$ moves the distribution horizontally.
	- $\xi$ determines how skewed it is.
		- Usually has compact support to the left or right of $0$ and infinite support to the other side. In practice we estimate $\xi.$
		- If $\xi < 0,$ it says most of the mass is on the worst (i.e. highest) values.
		- $\xi>0$ most of the time we are fine but things can get arbitrarily bad.
		- $|\xi|\geqslant1/2$ has infinite variance and $|\xi|\geqslant1$ has infinite mean
- Block Maxima (BM):
	- Group data.
	- Compute within-group max.
	- Use them as observations of GEV, do inference, and 
		- What if shape is bad?
- BM is very robust but most of the data doesn't matter and cannot analyse smaller block sizes.
- Independence BM doesn't matter. Only need local dependence in some sense so long as block length goes to $\infty.$
- Trade off is longer block size means better convergence but less data to infer on, and smaller block size means worse convergence but more data.
- Now say we want to know how much worse $X_k$ is compared to $u,$ i.e. $X_k - u\mid X_k>u.$
- Another theorem says if there are functions $a(u)>0$ and $b(u)$ real s.t. $F_{k}(xa(u) + b(u))\to G(x)$ as $k\to\infty$ and $u\to\infty,$ then $G$ is generalised pareto distributed. If the $X_k$ satisfy the GEV theorem and $G_{\mathrm{GEV}}\sim GEV(\mu,\sigma,\xi),$ then $G\sim GP(\widetilde{\sigma},\xi).$ Note same shape.
- Note this is a Poisson process.
- In practice, we need a large threshold $u$ rather than let it go to infinity. Some methods are 'peaking at the data' to pick $u.$
- Declusteting: sometimes a single event might affect the future couple of groups to appear as if multiple events happened in a row, so we need to 'decluster' the data. If there's a lot, however, can reduce data points by a lot.
	- DO NOT MODEL THE DEPENDENCE. Find ways to avoid it, e.g. create new data set without it.
- What if not IID?
- Say $M_t\sim GEV(\mu_0 + \mu t, \sigma,\xi)$ or $\sigma = \exp(\phi_0 + \phi t).$
- Still assuming independence or local independence.

- Book by coles.

- Show max of iid GEV is GEV.
	- $X,Y\sim GEV(\mu_{X/Y},\sigma_{X/Y},\xi),$ $Z = \max(X,Y).$

$$\pi_Z = 2F_X(x)\pi_X$$

$$\xi=0\implies \exp \left(- \exp \left( -\dfrac{x - \mu + \sigma\log 2}{\sigma}\right)  \right)\implies \mu_Z = \mu - \sigma\log 2 = \mu - \sigma \log n ,$$

$$\xi\ne 0\implies \exp\left( -\left( 1 + \xi\left( \dfrac{x - (\mu - \sigma(1 - 2^{\xi})/\xi)}{2^\xi\sigma}\right)  \right)^{-1/\xi}  \right) .$$

$$\mu_Z = \mu - \sigma\lim_{t\to \xi}\dfrac{1 - n^{\xi}}{\xi} = \mu - \sigma\log n.$$
$$\sigma_Z = n^\xi \sigma.$$

$$.$$



# Questions
- [x] Is max the only statistic we care about?
	- No, see Poisson/GP.
- [x] Why not use smaller?
- [x] Can different thresholds create different dependency?
	- Maybe but it doesn't.
- [x] How to find $a_n,a(u)$?
	- You don't and just use that $M_n\sim GEV\implies X_n\sim GP.$ Typically use goodness of fit tests.
- [x] Why linear inside CDF?
	- Same with normalisation. You compensate for increase in mean and likely decrease in variance.
- [x] Open problems?
	- Theory: Multivariate stuff.
	- Practice: How best to converge to MLE.