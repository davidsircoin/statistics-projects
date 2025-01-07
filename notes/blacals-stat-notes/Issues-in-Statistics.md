Tags: [[Stats]]

# $p$-values
## The Problems
### Rigidity
A rigid view of [[Classical-Hypothesis-Testing#Significance Testing|NHST]] only considering whether something is significant by comparing $p$ to a fixed $\alpha$ value leads to the obvious issue of obtaining $p=\alpha+\varepsilon$ for very small $\varepsilon$ and declaring it not a significant result yet if it were $p=\alpha-\varepsilon$ we would, even if the difference of $2\varepsilon$ might be vanishingly small. More subtly, however, the choice of statistic and rejection test typically leads to different $p$- values for the very same data set. The following picture could alleviate this specific issue:

![[p-values-by-Strength-of-Evidence.png]]

### Binary Hypothesis Testing
In the classical setting there is only binary hypothesis testing. We are limited to consider evidence against 1 hypothesis at a time, having to repeat the analysis or data collection for other hypotheses. 

### Publication Bias
Some object that a focus on $p$-values has led to a publication bias in favour of studies resulting in small $p$-values, a lack of focus on effect sizes, and little thought paid to the choice of a fixed significance level $1-\alpha.$ For the first point consider simulating multiple independent tests, say 10, on the same research question with the same methods, all assuming $H_0$ is true in all tests. In particular we consider the following setup:

> [!def] The Setup
> Tests on an equal-variance, independent, IID normal populations scenario where $H_0$ asserts they have the same mean.

We might view this as 10 researches or research groups undertaking the same study design or a researcher/group focusing on 10 response variables in the same study whose measuring does not violate the independence assumption. To simulate the academic publishing setting and an alternative, we could either choose to report one of them uniformly at random or pick the results with the lowest $p$-value. The latter happens either because the other 9 results were rejected from publication or the authors decided not to publish knowing they would not be accepted. We will focus on estimating the difference in means between independent populations drawn from respective IID distributions. Suppose they use an $\alpha$ level test, hence the type I error rate is $\alpha$ for most common situations. Let $p_{\mathrm{min}}$ be the least of the 10 $p$-values. By the set up, each $p$-value is a uniform variable on $(0,1).$ The CDF of $p_{\mathrm{min}}$ is of the form $$F_{p_{\mathrm{min}}}(x)=1-(1-F_{\mathcal{U}}(x))^{10}=1-\left( 1-x \right) ^{10},\quad 0<x<1.$$
More generally, of course, this is $1-(1-x)^n$ in the unit interval. As can be seen [here](https://www.desmos.com/calculator/0duhotwasu), this yields a highly skewed false-rejection distribution, giving up the interpretation of significance levels as type I error rates. This applies generally to any hypothesis testing problem with a continuous statistic. Of course, the selection is likely to have us report the more extreme differences and so any estimation work done will overestimate the difference in means. Correction methods such as the [[Classical-Hypothesis-Testing#Multiple Testing|Bonferroni]] correction or the [[Classical-Hypothesis-Testing#Multiple Testing|BH]] method regain this interpretation with the selection bias, though with a more impartial selection these methods interpret significance levels as having at most a probability at mostt $\alpha$ of some type I error.

> [!rmk] Large Studies
> Studies and papers with a large number of tests should report even the insignificant results and should consider adjusting $p$-values.
