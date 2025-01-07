Tags: [[Stats]],

Contained here are general descriptions of terminology and listings of common situations and what to do there. Implementation details and the theory behind them are in their own notes if we are using these methods for [[Classical-Hypothesis-Testing||hypothesis testing]], [[Classical-Estimation|estimation]], or whatever else.

> [!rmk] Notation
> Throughout $S$ shall be a statistic unless otherwise indicated, and simple functions of $S,$ e.g. absolute value, powers of $S,$ constant multiples, etc., are not explicitly listed in most cases.

> [!def] Resistance
> A method is **resistant** to a violation of an assumption only if its outputs ($p$-values or estimates) are not typically impacted greatly by a violation.

# Parametric
> [!def]
> Methods relying on some finitely many parameters, typically unknown parameters affecting the distribution of the observations.

See the probability theory behind [[Classical-Hypothesis-Testing#Significance Testing|significance testing]] for more.

# Randomisation
> [!def]
> Non-parametric methods (i.e. they do not rely on finitely many parameters if any) which simulate observations to estimate their statistical information of the underlying process. Most common are **re-sampling methods** where we pick points from our sample in a specified manner, in effect sampling from the samples.

Though these methods typically do not assume as much as parametric methods, they still contain assumptions. When the assumptions for parametric methods are roughly met, the results from randomisation methods tend to be very similar to those obtained from parametric methods.

> [!rmk] A Subclass of Non-parametric Methods
> There are more non-parametric methods than these!

## Re-Sampling
> [!def]
> Techniques picking out points from the data according to a function with an initial value called a **seed.** If between choosings the distribution of picking an element does not change, so it is possible to pick the same data point twice, then the method **samples with replacement.** If once an element is chosen it cannot be picked again (i.e. an element may be picked at most one time), forcing us to adjust the distribution between choosings, the sampling was done **without replacement.**

Typically we sample with a uniform distribution, that is, a function that when composed with itself repeatedly forms a sequence that is roughly uniform.
### Bootstrapping

> [!def] Bootstrapping
> Supposing the sample is **representative** of the target population, **bootstrapping** methods have us pick values from the sample to simulate observations made on the population.

Sampling is typically done with replacement, i.e. the distribution of an element being picked is the same throughout the draws, and so that each draw is independent of the others. As with many non-parametric methods, it requires fewer assumptions than a parametric method that might assume the data come from a normal distribution. 

## Shuffling
### Permutations
If a hypothesis $H_i$ is true of the data, almost certainly it should hold when randomly permuting the groupings whilst fixing the values of the variables.

> [!def] Permutations
> Let $\{Y_{i,j}\}_{i=1}^{n_j}$ be the $j$-th group of the data. A **permutation** may be represented by a bijection $f$ from the index pairs to themselves and another $g(Y_{i,j})=Y_{f(i,j)}.$

See [[Classical-Hypothesis-Testing#Common Tests#Permutation Testing|here]] for the theory behind permutation testing, the main application of permutation methods. The function $f$ does the permuting whilst holding the size of the groups fixed. Imagine laying the data on a line s.t. the groups form a partition from intervals, i.e. $Y_{i,j}$ is mapped to have the single index $i+\sum_{k=1}^{j}n_k.$ Now imagine the boundaries between partition classes are rigid and will not change under permutations of the data points. The new permutation will be grouped according to where they landed in relation to the rigid barriers. How exactly we permute in a 'random' manner depends on the method. Any reasonable procedure will likely end with a permutation which agrees with $H_i$ when $H_i$ is true. A particular $Y_{i,j}$ is likely to be placed in a large group $k.$ But if the $k$-th group is large, then the $Y_{i,k}$ are likely to land again in $k,$ giving us a similar grouping to what we started with and for this reason $H_i$ ought to hold for similar realisations of the $Y_{i,j}.$

> [!rmk] Sampling Method
> For permuting the labels of the data, typically we sample without replacement. The decision when doing hypothesis testing mainly falls on which
> > *'mechanism most closely matches the null hypotheses we will be testing.'*
> > 
> > \- Greenwood, M. C. (2022). *ISwR*, pp. 39

Permutation methods typically suppose the following:

> [!def] Assumptions
> - **Independence.** The observations are independent or there is only negligible dependence.
> - **Equal Variance.** The variance in the distributions (both probability and frequency distributions) of the groups is roughly the same across groups.
> - **Approximate Distributions.** The distributions of the groups are roughly equal.
> 	- Preferably a normal distribution.

The methods are typically sensitive to violations of the independence and equal variance, specially the latter by detecting differences in the variance rather than differences in whatever parameter we are interested in.

> [!def] SoI
> The scope of inference is as large as the one for a typical parametric method, though it might vary by context.

### Monte-Carlo

# Situations
## Multiple Sample Means

> [!def] Assumptions
> - **Variables involved.** For any $j\leqslant m,$ $\{Y_{i,j}\}_{i=1}^{n_j}$ is a sequence of IID random variables with mean $\mu_{j}$ and they are all independent from all other $Y_{i,k}$ when $k\ne j.$
> - **Hypotheses.** $$H_0:\forall j,k.\ \mu_{j}=\mu_{k},\quad H_1:\exists j,k.\ \mu_j\ne \mu_k.$$
> - **Statistics.**
> 	- If $m=2,$ $S=\overline{Y}_{1}-\overline{Y}_2$ or $S=\dfrac{\overline{Y}_1-\overline{Y}_2}{\hat{\sigma}^{2}}$ where $$\hat{\sigma}^{2}=\left( \dfrac{1}{n}+\dfrac{1}{m} \right)\left( \dfrac{n\overline{Y}_1+m\overline{Y}_2}{n+m} \right) \left( 1-\dfrac{n\overline{Y}_1+m\overline{Y}_2}{n+m} \right).$$
> - **Models.** 
> 	- **Normal Model.** Let $W_{i,j}$ be a sequence of IID, zero-mean normal variables with common variance $\sigma^{2}$ for $j\leqslant m$ and $i\leqslant n_j.$ $$H_0: Y_{i,j}=\mu+W_{i,j},\quad H_1:Y_{i,j}=\mu_{j}+W_{i,j}.$$

It should be reiterated that a normal model supposes the data are approximately normal. This is distinguished from a normal *noise* model where there are additional variables, say, $X_{i,j}$ and the $W_{i,j}$ act as measurement noise.