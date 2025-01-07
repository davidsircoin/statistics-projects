Tags: [[Stats]], [[Statistical-Methods]]

# Realised Distributions

> [!def] Frequency
> Suppose we have a sequence of IID random variables following the distribution of $X$ and let $\widehat{F}_{n}$ be the [[Classical-Estimation#Estimating Functionals|empirical]] distribution. If $a=\displaystyle\min_{i\leqslant n}x_i$  and $b=\displaystyle\max_{i\leqslant n}x_i,$ the **tails** of $\widehat{F}_n$ on an equal-length partition of $[a, b]$ are the values $\widehat{P}_n(I)$ near $a$ or $b,$ referred to as the left or right tail respectively. If the range of the left tail is sufficiently larger than that of the right tail, we say the distribution **skews left,** and similarly for **skew right.**

Relative frequency distributions are in a sense 'realised probability distributions' and are used in [[Classical-Estimation|estimating]] distributions. From the strong law of large numbers we know $\widehat{F}_n(x)$ a.s. converges to $F_X(x).$ They do not perfectly mimic probability distributions. At times we may witness an outlier value among the $x_i,$ an unlikely value which is sufficiently far away from the rest of the values, possibly measured by its distance from the sample mean and comparing it to the sample SD or, more commonly, seeing if it lies 1.5 times away from the **Inter-Quartile Range (IQR)** $Q_3-Q_1.$ Empirical distributions can be used with categorical data to present how many times a certain outcome was observed.

> [!def] Frequency Tables
> Let $X$ be a discrete random variable with range $\{x_i\}_{i=1}^N.$ A **frequency table** is a table whose first column, labeled $X,$ contains the $x_i,$ whose second column, labeled Frequency, contains the corresponding $n\widehat\pi_n(x_i),$ i.e. $\sum_{j=1}^n\mathbb1(X_j=x_i),$ and whose third column, labeled Relative Frequency, contains the corresponing $\widehat\pi_n(x_i):$
> 
> $X$|Frequency|Relative Frequency
> -|-|-
> $x_1$|$n\widehat{\pi}_n(x_1)$|$\widehat{\pi}_n(x_1)$
> $x_2$|$n\widehat{\pi}_n(x_2)$|$\widehat{\pi}_n(x_2)$
> $\vdots$|$\vdots$|$\vdots$
> $x_N$|$n\widehat{\pi}_n(x_N)$|$\widehat{\pi}_n(x_N)$
> Totals|$n$|$1$

Note the frequencies must sum to $n$ and the relative frequencies to $1.$

``````ad-rem
title:R Implementation

```r
library(summarytools)
tib %>% freq(col, style = "rmarkdown", report.nas = F, cumul = F) # tib is the data and col is X.
```
``````

> [!def] Summaries
> A collection of statistics communicating relevant aspects of collected data, i.e. realised random variables. The **5 number summary** is a collection of 5 common statistics:
> - The minimum.
> - The first quartile.
> - The median.
> - The third quartile.
> - The largest value.

``````ad-rmk
title:R Details

```r
library(mosaic)
favstats(tib$col)
```
``````

> [!rmk] Context-Sensitive Decisions
> The choice in summary statistics is highly sensitive to the details of a case. For example, the sample mean and sample SD statistics are only appropriate with the frequency distribution of the data is roughly symmetric.

Summary statistics ought to improve the readability of a statistical analysis or report. At times it is more useful to give a statistic from a scaled or standardised version of the data. For example, dividing by the standard deviation ensures that a scaled data point $3$ unit from the mean is $3$ standard deviations away from the mean in the original data. The usual standardisation—remove the mean and divide by the SD—makes the process easier.

> [!def] Resistant Summaries
> A scalar-valued statistic $S_n=S(X_1,\ldots,X_n)$ are **resistant** only if $S_{n+1}(x)\approx S_n$ for outliers $x.$

The sample median is example of a resistant statistic even for low $n$ whilst to sample mean and variance, in general, are not.

## Multiple Predictors
When we have at least 2 predictive variables and 1 response often, specially when there are at least 3 or 4 predictors, we need different tools. For instance, where as in the single predictor case we would present the sample sizes of different levels, if appropriate, with a table:

Var $A$|$l_1$|$l_2$|$\ldots$
-|-|-|-
Response|$x_1$|$x_2$|$\ldots$

When we have 2 variables now we need a *contingency table:*

> [!def] Contingency Table
> Given $2$ variables $A$ and $B$ with $n$ and $m$ levels respectively, an **$n\times m$ contingency table** is one whose first row and first column contain the levels of the indicated variable and the remaining $i,j$ entry is the response at the $i$-th and $j$-th $A$ and $B$ level respectively:
> 
> $A/B$|$b_1$|$b_2$|$\ldots$
> -|-|-|-
> $a_1$|$x_{1,1}$|$x_{1,2}$|$\ldots$
> $a_2$|$x_{2,1}$|$x_{2,2}$|$\ldots$
> $\vdots$|$\vdots$|$\vdots$|$\ddots$
> 

``````ad-rmk
title:R Details

```r
tally(A ~ B, data = tib)
```
``````

# Graphics
Graphical presentations could efficiently present information that typically requires some pages of explanation. Of course, it is helpful to still include those explanations so as to not assume familiarity without warrant. Whatever advantages are found in graphical presentations are owed in large part to good labelling.

> [!def] Fat and Light Tails
> A distribution has a **heavy-tail** when its tails decay faster than a normal distribution, and it has a **light-tail** when they decay slower than a normal distribution.

## Plots
R implementations will include at least ggplot2. For more customisation see [[R-Language#Geom Functions|here]]. Any charts with a definite vertical direction can be rotated by changing `x` to `y` or vice versa in `aes(...)`.
### Bar Charts

> [!def]
> Given a partition of the data by the values of a categorical measure, a **bar chart** is a series of bars each labeled by the values of the categorical variable and their height being either the number of data points with that value or the relative frequency. When the bairs are in descending order, the bar chart is a **Pareto chart.**

``````ad-rmk
title:R Details

```r
library(ggplot2)

tib %>% ggplot(mapping = aes(x = col)) + # col contains the categorical values.
	geom_bar() # For frequency.
#	geom_bar(aes(y = after_stat(prop), group = 1)) # For relative frequency.
```
If we group the data according to `colgrp`, a side-by-side bar chart can be obtained with
```r
tib %>% ggplot(mapping = aes(x = col, fill = colgrp)) +
	geom_bar(position = 'dodge', colour = "black") # Black outline is recommended for identifiability.
```
``````

### Histograms

> [!def]
> A graph of the frequency (or relative frequency) distribution on a specified partition of the data. Members of the partition are called **bins.**

If the data are real numbers, the bins tend to be chosen as pairwise-disjoint intervals of equal length, that length, or a related quantity (see below), being called the **bin size.** There is a danger in those cases of obscuring relevant information by choosing too large a bin size around dense data points—specially relevant when this density is around the mode. But a bin size too small makes it difficult to see or interpret data. It can be easier to first decide on the number of bins $N$ and taking the bin size as a number close to $\operatorname{diam}(X_1,\ldots,X_n)/N.$ The intervals need not form a partition of the real line or of the interval $[\min X,\max X].$ In these cases the bin size is not the length of an interval but resembles the length of discrete intervals of integers, being the distance from consecutive lower limits of an interval.

``````ad-rmk
title:R Details

```r
library(mosaic)

hist(tib$col, breaks = 15, xlab = "col") # Breaks here is the number of bins, though it can be a numeric vector specifying the points of the partition.
```
Or,
```r
library(ggplot2) # For convenience use tidyverse.

tib %>% ggplot(mapping = aes(x = col)) + # tib is the data and col is the variable of interest.
	geom_histogram(bins = 30) # Default is 30.
```
``````

### Frequency Polygons and Ogives

> [!def]
> Given a partition of the data into intervals, a **frequency distribution** is formed by placing and connecting dots at the average of consecutive lower-ends and the frequency of the interval of the lesser end. An **ogive** is the graph of $\widehat F_n$ restructed to the data and connected by lines.

### Density Curve

> [!def] Density Curve
> idk how they work

In a sense these are the 'continuous analogues' of histograms without the burden of choosing a bin size. They tend not to differ in effectiveness from histograms near intervals with few data points but we can at a glance see in these what the mean or mode roughly is.

``````ad-rmk
title:R Details

```r
library(ggplot2)

tib %>% ggplot(mapping = aes(x = col)) +
	geom_density()
```
``````

### Pie Chart

> [!def]
> A circle partitioned by labeled sectors whose label is the value of a categorical variable and whose proportional area corresponds to the proportion of the data with that categorical value.

``````ad-rmk
title:R Details

See [here](https://r-charts.com/part-whole/pie-chart-labels-outside-ggplot2/) for placing the labels outside the sectors with lines attached.

```r
tibsum <- data.frame( # For labelling, make a data frame with unique factor levels.
	colgrp = unique(tib$colgrp), $ colgrp is the categorical variable.
	grpstat = map_vec(unique(tib$colgrp), \(x) <FUN>(filter(tib, colgrp == x))) # <FUN> is any function returning a single number from a tibble or data frame, e.g. sum(filter(...)$resp) when resp is the response.
)

tibsum %>% ggplot(mapping = aes(x = "", y = grpstat, fill = colgrp)) +
    geom_col(position = "stack", width = 1) +
    geom_text(aes(label = grpstat, x = 1), position = position_stack(vjust = 0.5)) + # x value could be changed. vjust = 0.5 places the labels in the middle of the sectors. This geom could be removed to leave only the colour legend.
    coord_polar("y") + # Making the circle.
    theme_void() # Removing unnecessary background and axis labels.
```
``````

### Box
> [!def] Box and Whiskers
> A box of some width and a height extending vertically from $Q_1$ to $Q_3$ and lines perpendicular to the top and bottom of the box with bars at their extremes (the **whiskers**) at some designated place, usually the maximum and minimum $x_i$ or symmetrically at the smallest and largest data values at msot $\dfrac32(Q_3-Q_1)$ from $[Q_1,Q_3].$ The median is marked by a horizontal bar in the box.

A common measure of skew is the distances between the median and the extreme values or, crucially for these plots, from the extremes of the whiskers. We may also observe the distance from the median to the extremes of IQR. With the standard threshold for outliers, the longer whisker will be pointing to the longer tail, hence the lower whisker is longer only if the empirical distribution is skewed left and similarly for the higher whisker.

> [!rmk] Side-by-Side Comparison
> If the data are quantitative and are able to be grouped under multiple categorical variables, we may general a boxplot of each grouping and compare across variables.

``````ad-rmk
title:R Details

```r
library(ggplot2)
tib %>% ggplot(mapping = aes(y = col)) + # col is numeric
	geom_boxplot()
```
``````

### Rug

> [!def]
> A one dimensional plot with a small vertical line for each point of data.

Large collections of dense data are not suited for this presentation as the great density makes it difficult to see the relative size of groups. It is common to offset the position of the marks with small, uniform random noise to help asses relative sizes.

``````ad-rmk
title:R Details

```r
library(ggplot2)
tib %>% ggplot(mapping = aes(x = col)) + # col is numeric. Use y = col to place the vertical strips on the side.
	geom_rug(aes(y=0), position = "jitter", sides = "b")
```

For vertical and horizontal plots of distinct data, use

```r
tib %>% ggplot(mapping = aes(x = col1)) +
	geom_rug(aes(y = col2), position = "jitter")
```
``````

### QQ Plots

> [!def]
> Given data sets $X$ and $Y,$ a **Quantile-Quantile plot (QQ plot)** plots the quantiles of one against the other. That is, a plot of $\bar Q_X(X)$ against $\bar Q_Y(Y).$

For any point $(x,y)$ on the plot, if $x=Q_X(p),$ then $y=Q_Y(p).$ The plot thus represents the set $$\{(Q_X(p),Q_Y(p)):p\in\operatorname{dom}Q_X\cap\operatorname{dom}Q_Y\}.$$
Typically $Y\sim\mathcal{N}(0,1),$ yielding a *normal* QQ-plot. These are particularly helpful for identifying skewness. If we have the points $(Q_X(p),Q_{Y}(p))$ and $(Q_X(p'),Q_{Y}(p)),$ then $Q_Y(p)=Q_Y(p'),$ by definition, hence, if both distributions are continuous, $p=p'$ and $Q_X(p)=Q_X(p').$ By a similar argument one can show the graph must be functional.

> [!thm]
> A QQ-plot of valid distributions, both continuous, is an injective, functional graph.

When one of the distributions is discrete, it is possible for the plot to have vertical or horizontal lines. Analysing the plots is aided by imposing the graphs of the CDFs of the distributions involved. This avoids spurious interpretations arising from plots which are close to a line near the centre but away from the centre it differs greatly from a line. To what extent this indicates a bad fit of distributions depends on the 'probability mass' assigned to the deviant values.

> [!rmk] QQ-Plots and Probability Mass
> Suppose in a normal QQ-plot we observe a perfect line from $-4$ to $4$ and outside this interval there is great deviation. Because this interval contains a good deal of the probability mass in a normal distribution, we should expect a bell shape, so the deviations are unlikely.

Assessing whether a distribution is normal does not require us to use a QQ-plot with a non-standard normal. Indeed, if $Y\sim\mathcal{N}(\mu,\sigma^{2}),$ then the normal QQ-plot will be the line $x\sigma+\mu.$

> [!thm] *Linear Graphs in QQ-plots*
> Let $Y$ be a random variable with mean $\mu$ and variance $\sigma^{2}.$ $Y\sim\mathcal{N}(\mu,\sigma^{2})$ iff its normal QQ-plot is the line graph of the equation $y=x\sigma+\mu.$

Knowing the (sample) mean and variance of a distribution, we can assess deviations from the line $x\sigma+\mu.$ Note that now the probability mass is centred symmetrically around $(-\mu,0),$ with the concentration being inversely proportional to the steepness of the line. Still, for ease of reading it is recommended that we standardise our data before putting it in a normal QQ-plot.

> [!rmk] Standardise Before Comparing
> Though it is possible to make comparisons using standard normal QQ-plots when the given distribution does not have a 0 mean or unit variance, it is recommended that we use standardised values.

``````ad-rmk
title:R Details

```r
library(ggplot2)
tib %>% ggplot(mapping = aes(sample = col)) +
	geom_qq() +
	geom_qq_line()
```
``````

### Pirate Plots

> [!def]
> Vertical density plots of the data with their values in a vertical label, the data points with some jitter, a horizontal bar at the sample mean, and vertical lines sprouting from the mean to convey the confidence interval of the true mean.

### Interaction Plots

> [!def]
> Given data $\{Y_{i,j,k}\}_{k=1}^{n}$ for $i\leqslant n_1$ and $j\leqslant n_2,$ an **interaction plot** is $n_1$ line plots laid atop each other with the $i$-th plot giving the means $\overline{Y}_{i,j}$ as $j$ varies with confidence intervals. The values of $j$ are labels on the horizontal axis and the vertical axis is labelled with the units of the $Y_{i,j,k}.$

These are useful for visually inspecting if an obvious interaction occurs between variables. For this it will be more useful to represent the data with $(X_i,Z_i,Y_i)$ where $X_i$ and $Z_i$ are predictive variables replacing the $i,j$ indices.

> [!rmk] Assessing Interactions
> If as we vary $X$ the line plots of $\overline{Y}_{X,Z}$ are not equal up to adding a constant—for when $X$ has few values and the gaps are visible this is equivalent to there being non-parallel lines—then there is likely an interaction. Of course it varies by model, but for common models when there is no interaction the effects are typically additive on the means. If we find shifted plots, or something close to it, our focus should then be on the vertical distance of the plots and how the means change as the $x$ values change.

### Time Series

> [!def]
> If $X_i$ was measured at time $T_i,$ a **time series** is a plot of the points $(T_i,X_i)$ connected by lines.

### Scatter Plot

> [!def] 
> Given data pairs $\{(X_i,Y_i)\}_{i=1}^{n}$ of real-valued variables, a **scatter** draws the points $(X_i,Y_i)$ on the plane $\mathbb{R}^2.$
