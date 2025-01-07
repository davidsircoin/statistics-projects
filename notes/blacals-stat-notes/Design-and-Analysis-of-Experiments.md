Tags: [[Stats]]


# What is Data?
> [!def] Data
> A **datum** is a realised value of a single random variable. **Data** are realisations of multiple random variables. Data sets are collections of data.

Essentially, 'data' refers to measurements, not collections of [[Presentation-of-Data#Realised Distributions|summary statistics]] as colloquial usage suggests. Often we wish to make inferences from data sets about a population or phenomenon. Any inference will be limited in its **scope of inference (SoI)**—to which situations we can reasonably say the inference applies—by the design of an experiment and its methodology for analysing the data. There are two kinds of data: **categorical** and **quantitative** data. The first may be coded as numbers without much meaning; the latter kind consists of meaningful numbers. Further delineations are available in the next section.

> [!def] Censoring
> Removing subjects or trials with any missing measurement.

## Kinds of Data

> [!def] Kinds of Variables
> A **predictor, explanatory,** or **independent** variable or **treatment** is one which the experimenter is free to change across or within trials. All other variables are called **response** or **dependent** variables.

Formally, if $X=\{X_i\}_{i=1}^{n}$ are the predictors, $Y=C(X)$ is the response, by convention taking $X_i=0$ to mean there was no treatment from the $i$-th variable. We should think of this as a family of random variables indexed by the possible values of $X$ even when $X$ is not random. In practice if $X_i$ measures the extent to which we expose a patient to a substance, $X_i=0$ does not mean the substance is not present only that we did not add more than what was already there. When we have multiple, independent draws $X_i=\{X_{i,j}\}_{j=1}^{n},$ we have a collection of responses $\{Y_i\}_{i=1}^{m}.$ For example, if $n=1,$ the $X_i$ might be the sex of a patient.
## Populations and Samples

> [!def] Populations and Samples
> A **population** is a collection of objects whose statistical properties we wish to estimate. A **sample** thereof is a subset of elements available for experimenters to examine more directly than other objects in the population. A data set collected from the whole population is a **census.**

We shall typically use $n$ for the sample size and $N$ for the population size, unless otherwise indicated. Certain subsets of a sample in an experiment are at times observed under different conditions, possibly under the control of the experimenter. If that is so, we call these groupings **treatment groups.**

> [!rmk] Random Sampling and Treatments
> Often we speak of 'random sampling' or applying treatments 'randomly' to mean these choices were made independently according to a distribution commonly accepted for the task at hand. In the above language, $X$ is independent from every $C(\vec x).$ Random sampling in particular, however, shall always mean the choices were made uniformly at random with probability $1/N.$ There are other sampling methods which use other distributions. Throughout it seems distributions that are roughly uniform are preferred. As for applying a treatment, methods vary by context. Below are some common assignments:
> 
> - **1 Treatment.** Bernoulli distribution, usually with a parameter close to $1/2.$
> - **$m>1$ Treatments.** Binomial, multinomial, or discrete uniform distribution.

At times we are interested in measurements from distinct populations or multiple measurements per member of the same population. In the latter case, we refer to these are **repeated measures** or **replicates.**
### Sampling Methods

> [!def] Kinds of Sampling Methods
> Suppose there are $N$ members in a population and we are trying to obtain a sample of size $n<N.$
> 
> - **Simple Random Sampling.** Methods whose underlying distribution is uniform over $n$-sized subsets of the population. Typically these involve sampling without replacement.
> - **Stratified Sampling.** Partition the population and take simple random samples from these populations whose sizes sum to $n.$ The partition groups are called **strata** and typically they are taken so that members of a group are similar to each other.
> - **Systematic Sampling.** Given values $m<k$ s.t. $m+k(n-1)\leqslant N,$ $m$ chosen randomly, the $i$-th sample subject is the $(m+ik)$-th one in the population that is encountered. Typically $k=\left\lfloor \dfrac{N}{n} \right\rfloor.$
> - **Cluster Sampling.** Partition the population and randomly sample the partition to obtain groupings whose sizes sum to approximately $n.$ The proportions of confounding blocks need not be uniform in every group.
> - **Convenience Sampling.** Non-random sampling, typically involves a subject self-selecting to participate in a study.

The main considerations to choosing a sampling methods are cost and the confounds it introduces or fails to avoid. Simple random sampling avoids many but it is expensive financially and in terms of other resources. Many simple random sampling methods rely on there being an enumeration of the population members, something that is not always available or simple to find.

> [!rmk] Simple Random Sampling Uses
> When affordable, simple random sample can give a lot of information about the whole population though not necessarily about certain small subgroups.

Stratified sampling somewhat reduces the costs of obtaining a likely-to-be-representative sample by increasing the chances less represented groups are included and, if we are controlling for such confounding, allows us to more accurately describe and predict subgroups of the population. This is due to the homogeneity within the partition groups. However, because we must take simple random samples from each partition, we typically need to at least enumerate each partition and that amounts to enumerating the population.

> [!rmk] Stratified Sampling Uses
> If we wish to ensure the sample is representative, given we know or can estimate the relevant subgroup proportions in the population, stratifying by the variable of interest can be ideal and less costly than simple random samples which, due to the subgroup's size, may require a very large sample size.

Systematic sampling, in contrast, does not rely on enumeration and can be used when we know all individuals must experience a particular event accessible to us, e.g. crossing a gate or door. It can be cheaper for that alone but the choice of $k,$ or really the choice of $n,$ might make the study time-consuming due to large gaps between subjects. If $k$ is too small, time might become an unaccounted confounding variable.

> [!rmk] Systematic Sampling Uses
> Systematic sampling is typically appropriate when a certain, accessible event must occur to each member of the target population. These methods typically do not require an enumeration of the population.

Sampling by clusters can typically accommodate budget and time constraints. The clusters tend to be equal in size though how similar examples are within each cluster may vary so as to reflect the heterogeneity of the population. Of course, this might be inappropriate or inefficient if we are trying to know more about certain subgroups of the population. If each clusters exhibits this heterogeneity, it is advisable to have a few, large clusters and when they are homogeneous a large number of small clusters is allowed.

> [!rmk] Multistage Sampling
> In practice it is common to use different sampling methods in series.

> [!def] Bias
> The difference in proportions of relevant subgroups within the sample compared to their proportions in the population. Some common sources of biases include
> - **Sampling Bias.** Bias as a result of the sampling method.
> - **Undercoverage.** When a particular subgroup is underrepresented in a sample relative to the proportition of the population it makes up.
> 
> The following are phrased in the language of surveys though the basic concept applies beyond them.
> - **Nonresponse Bias.** When there is a relevant difference in those which respond to a survey or measurement and those who do not.
> - **Response Bias.** When the measured response differs from the true response on the same subject. Often these are due to misrepresented answers in surveys or misunderstood questions.

The last three are all examples of non-sampling bias and may occur in a census whilst the first, obviously, cannot.
#### Dependent and Independent Sampling

> [!def] Dependent and Independent Sampling
> A sampling method is **independent** only if for any samples $\vec X_i=\{X_{i,j}\}_{j=1}^{n_i},$ where $i\leqslant N,$ we have that the $\vec X_i$ are independent. Otherwise the sampling method is **dependent** or a **matched-pairs** sampling.

When we have a matched-pairs design, inferential statistics about functions of the underlying distributions $X_i,$ say $Y=f(X_1,\ldots,X_N),$ proceeds by single-sample methods on $Y,$ e.g. using $\overline{Y}$ and $\widehat{S}_Y^{2}$ instead of some pooled mean or variance.

# Interpretations
Given some data, it is our job to give an account as to why they may appear generally (without reference to the particular details of the data set) and make inferences based on that account. However, the details of the data set determine what sorts of interpretations are reasonable and may widen or narrow that space. This is of particular interest when eyeing for a causal account.

> [!def] Confounds
> Details of the experiment which widen the space of reasonable interpretations of a result.

Formalism is introduced later to analyse confounding variables but for now it is useful to introduce additional vocabulary.

> [!def] Blocking
> If $Z$ is a confounding variable, **blocking** is to partition the data by their $Z$ values with each partition member called a **block.**

Confounds often narrow the SoI by making accounts that do not posit an effect or those in which the effect is only seen in conditions similar to the experiment plausible. Talk of effects is not always causal, and when it is we are to be careful. If treatments were not randomly assigned, we cannot consider causality as the reason for differences in the statistics of response variables. In particular, observational studies typically must not be interpreted with a causal account. Here is a summary (Random Sampling and Random Assignment are abbreviated):

**RS/RA**|**w/ RA (Controlled Experiment)**|**w/o RA (Observational Study)**
-----|---------------------------|------------------------
**w/ RS or other methods to obtain a representative sample.**| Since we have RS, we can generalize inferences to the population the RS was taken from. Because we have A we can assume the groups were equivalent on all aspects except for the treatment and can establish causal inference.|Can generalise inference to the population the RS was taken from but cannot establish causal inference. Without RA we cannot isolate treatment variables as the only difference among groups and there could be confounding variables.
**w/o RS, typically convenience sample or some other source of sampling bias.**|Cannot generalise inferences to the population of interest because the sample may not be "representative" of the population of interest. Can establish causal inference due to RA, so the inference from this type of study applies only to the sample.|Cannot generalise inferences to the population of interest because the sample may not be "representative" of the population of interest. Cannot establish causal inference due to lack of RA of the treatment.

Our SoI w.r.t. RS is as wide as can be made so long as the sample remains representative, i.e. unless there is likely enough sampling bias to 'meaningfully' affect the results. Working with a representative sample allows us to infer similar conclusions as if we had studied the entire population. Without RA,
1. We could posit the observed results are explained mainly by who was given the treatment rather than or in addition to what the treatment was, e.g. if given a representative sample with various ages of people we decide to give a drug solely to senior participants we could explain the observations partially with the age of the subjects or at least restrict our results to an elderly population and comparisons to a control group which did not take the drug are confounded as well.
2. If the methods used require an independence assumption, the treatment is being applied multiple times, and we did not randomise the order of the treatment, depending on what the treatment is, we could posit that the participants are 'learning' or 'adjusting' to the treatment and so future observations are dependent on previous ones. At times we want to study whether people adjust to a treatment or introduce other mechanisms to avoid adjusting, so this is not always present.

Beyond observational studies and experiments, there are more subclasses of studies.

> [!def] Kinds of Observational Studies
> - **Cross Sectional.** Observational studies whose data ranges over a short period of time.
> - **Case-Control.** Retrospective studies, and thus observational, where we 'match' trials or subjects where no treatment was applied to one with some level of treatment, ideally having equal number of matches per treatment level if there are finitely many.
> - **Cohort.** Observational studies collecting information about the same sample, here called the **cohort,** over long periods of time. There can be some random assignment in some treatment levels.

## Causal Inference
Often we are interested in finding causal relations given only associations.

> [!def] Effects and Interactions
> Let $\theta(\vec x)=E[C(\vec x)]$ and $r(\vec x)=E[Y \mid X=\vec x].$ We call $\theta$ the **causal [[Classical-Statistical-Models#Regression|regression function]]** and say $X_i$ has an **effect** on the response only if $\theta(\vec0,x_i,\vec 0)$ is non-constant when varying $x_i$ and define the **average causal effect** or **average treatment effect** of $X_i$ as $$\theta(\vec 0,X_i,\vec 0)-\theta(\vec 0),$$
> taking $X_i$ as being possibly random. The **average main effect** (or just **main effect**) of $X_i$ on $Y$ is the quantity $E[r(\vec 0,X_i,\vec 0)]-r(\vec 0).$ The variables $X_i$ and $X_j$ are said to **interact** only if either of the following quantities are not equal to the average main effects of $X_i$ and $X_j$ respectively:
> $$
> \begin{gather*}
> E[r(\vec 0, X_i,\vec0,x_j,\vec0)]-r(\vec 0,x_j,\vec 0),\\
> E[r(\vec 0,x_i,\vec0,X_j,\vec0)]-r(\vec 0,x_i,\vec0),
> \end{gather*}
> $$
> for some $x_i,x_j.$ We similarly define a **causal interaction** by replacing $r$ with $\theta.$

An effect is a relation between a variable and the response, with main effects not necessarily implying a causal relation, and an interaction is a relation between 2 variables and a response. Of course, we could generalise interactions so that multiple variables 'jointly interact' but that does not seems to be the standard usage. At least for these notes, I introduce terms for situations where the main effect of $X_i$ varies depending on the level of $X_j$ but not vice versa.

> [!def] One-Way Interactions
> There is a **one-way interaction** from $X_i$ to $X_j$ only if the following quantity is not equal to the main effect of $X_j,$ for some $x_i:$ $$r(\vec 0,x_i,\vec 0)-E[r(\vec 0,x_i,\vec 0, X_j,\vec 0)].$$

> [!rmk] Effect and Interaction Terms in Models
> When used in models we might have $$Y_{i,j,k}=\mu+\alpha_i+\beta_j+\gamma_{i,j}+\varepsilon_{i,j},$$
> where $\mu$ is fixed, $\alpha_i$ represents the effect of being in the $i$-th group of the first variable, $\beta_j$ the same for the second variable, $\gamma_{i,j}$ an interaction term, and $\varepsilon_{i.j}$ noise terms. Here we can estimate the main effects and interactions of variables. When $i$ and $j$ are random, typically we can talk about estimating effects.

More can be said in the special case when $X$ and $Y$ are single-valued, binary variables. Then the main effect is called the **association** and  we can account for causal effects differently:

> [!def] Causal Odds, Relative Risk, and Association
> The **causal odds ratio** is the quantity $$\dfrac{P(C(1)=1)/P(C(1)=0)}{P(C(0)=1)/P(C(0)=0)}.$$
> The **causal relative risk** is the ratio $$\dfrac{P(C(1)=1)}{P(C(0)=1)}.$$

We shall mainly use the average causal effect.
$\quad$Given the [[Joint-Random-Variables#Expectation|law of iterated expectation]] we might guess that main effects are always equal to treatment effects. Note that the situation there requires we have a variable $Z$ with the distribution of $X$ for us to conclude $E[E[Y\mid X=Z]]=E[Y].$ But $(\vec 0,X_i,\vec0)$ may not have the same distribution as $X.$ In general it is simpler to estimate main effects as a special case of regression. If there is random assignment, $\theta$ and $r$ coincide.

> [!thm]
> In general $\theta(\vec x)\ne r(\vec x)$ but if $X$ is independent from every $C(x),$ $\theta(\vec x)=r(\vec x).$ Hence $r(\vec 0)=\theta(\vec 0)$ and, with probability $1,$ $$\theta(\vec0,X_i,\vec0)=E[r(\vec0,X_i,\vec0)],$$
> so the average main effect is the average causal effect.

```ad-note
title:Derivation
collapse:closed

$$
\begin{align*}
\theta(\vec x)&=E[C(\vec x)]\\
&=E[C(\vec x)\mid X=\vec x] &&\mbox{by independence}\\
&=E[Y\mid X=\vec x]\\
&=r(\vec x)
\end{align*}
$$

Lastly note that $$\theta(\vec0,X_i,\vec0)=E[\theta(\vec0,X_i,\vec0)]=E[r(\vec0,X_i,\vec0)],$$
```

Independence here does not mean that $Y=C(X)$ is independent from $X.$ Rather, the response at any particular treatment level should not be influenced by what level a subject actually received. The response distributions should be set a priori. Stated differently, the response distributions should not affect the distribution of the treatment.
### Observational Studies and Confounding
Suppose we are conducting an observational study, one without randomisation of treatments, i.e. some $C(x)$ is dependent on $X.$ Often we can group the subjects by some third variable $Z$ s.t. within a group $C(x)$ is independent from $X\mid Z.$ If we collect all such variables into $Z,$ we have that $$\pi(x,y,z)=\pi(y\mid x,z)\pi(x\mid z)\pi(z)=\pi(y).$$

> [!def] Confounding Variables
> Random variables $Z$ satisfying $$\pi(x,y,z)=\pi(y).$$ If $C(x)$ is independent from $X\mid Z$ for all $x$ and we observe $Z,$ we say there is **no unmeasured confounding.**

When there is a single grouping by $Z,$ the results do not change, hence having an uncontrolled factor which is applied to the same extent to all subjects will not hamper our inferences.

> [!thm]
> - If $C(x)$ is independent from $X\mid Z$ for all $x,$ then $$\theta(\vec x)=E[C(\vec x)]=\int E[Y\mid X=\vec x,Z=z] \pi(z)dz.$$
> - If $\hat{r}(\vec x,z)$ is a consistent estimator for $E[Y\mid X=\vec x,Z=z],$ then the following is a consistent estimator of $\theta(x):$ $$\hat{\theta}(x)=\dfrac{1}{n}\sum_{i=1}^{n} \hat{r}(x,Z_i).$$

Specifically, if $r(x,z)=\beta_0+\beta_1 x + \beta_z,$ then $$\hat{\theta}(x)=\hat{\beta}_0+\hat{\beta}_1x+\hat{\beta}_2\overline{Z}_n,$$
where the $\hat{\beta}_i$ are [[Classical-Statistical-Models#Linear Regression#Multiple Regression|OLS]] estimators.

> [!def] Adjusted Treatment Effect
> When there is a confounding variable $Z,$ the **adjusted treatment effect** is the quantity $$\theta(\vec x)=\int E[Y\mid X=\vec x,Z=z] \pi(z)dz.$$
> Computing this quantity instead of the usual treatment effect is to **adjust (or control) for $Z.$** When $Z$ collects all the confounding variables, we are **adjusting for confounding.**



## Effect Sizes

> [!rmk] Report Effect Size
> Whether or not a difference between groups is significant, it is generally good to estimate the magnitude of the 'effect' of being in one group compared to another.

Focusing on statistical significance might overvalue differences that are not practically meaningful simply because they provide good evidence against the null hypothesis.
# Building Models
See [[Inferential-Statistics|here]] for the definition of a model. At times we are able to make fully specified models by assuming the variables involved satisfy certain equations and it is rare that we explicitly specify a model directly from this definition. Often a model makes assumptions about the data or phenomenon to simplify calculations and allow for approximations. Many models, for instance, suppose observations are independent or that they are generated according to a normal distribution, an assumption typically warranted when the data are roughly symmetric around the mode (supposing they are also roughly unimodal).
## Models Induced by Hypotheses

> [!rmk] The Usual Setup for NHST
> Given a hypothesis $H_0$ and some assumptions about the data (called **model assumptions**), an induced model is constructed as follows:
> - Specifying the variables $\{Y_{i,j}\}_{i=1}^{n_j}$ corresponding to the $j$-th group of observations (when applicable).
> - Stating an equation or inequality involving the $Y_{i,j},$ constants, and other families of variables which makes the observations satisfy the model assumptions.

## Assumptions and Their Uses
Models typically make assumptions to simplify the theoretical considerations underpinning certain methods. Here I list some common assumptions, when we can make them, and what to look for that helps discern a violation of the assumption. 

> [!rmk] Non-Violation vs. Satisfaction
> We do not, in writing reports, say that assumptions are met, only that we have reasons to think they were not violated.

In another [[Statistical-Methods|note]] you may find the assumptions made by particular models.
### Independence
> [!def] Independent Phenomena
> - **Assumption.** Some group of the data contains independent observations or some groups are independent of each other.
> 	- Assumed by default unless there are enough reasons against it.

A common case of dependent observations is when we measure the same subject on the same metric at least twice. Generally, one should look for
> *'whether anything in the data collection might lead to clustered or related observations that are un-related to the differences in the groups.'*
> - Greenwood, M.C. (2022). *ISwR,* pp. 58

If all measurements are on a single person, however, there is no immediate violation. The observations might be relevantly related in some other way.

### Normality

> [!def] Normal Data
> - **Assumption.** The data or a group of the data closely follow a normal distribution.
> 	- Typically allowed when the frequency distribution of the data is unimodal, symmetric about the mean, and the mean is close to the mode.

Sufficiently large skew or outliers count against the assumption.
### Equal Variance

> [!def] Equal Variance
> - **Assumption.** For groups $\{X_i\}_{i=1}^{n}$ and $\{Y_i\}_{i=1}^{m}$ of respectively IID r.v.s. with variances $\sigma_X^{2}$ and $\sigma_Y^{2}$ respectively, $\sigma_X^{2}=\sigma_Y^{2}.$ Equivalently, $\sigma_X=\sigma_Y.$
> 	- When comparing two populations with sample SDs $S_X<S_Y,$ if $m\approx n,$ we may assume they are approximately equal if $\dfrac{S_Y}{S_X}<2.$

Typically verifying this does not matter when the sample sizes are approximately equal, otherwise there are reasons to doubt any methods strongly relying on the equal variance assumption.

```r
# tib has columns num and colgrp
sd_ratios <- sd(num ~ colgrp, data = tib) %o% (1/sd(num ~ colgrp, data = tib)) # i,j entry is the i-th group sd divided by the j-th group sd. If they are all below 2, there is no clear violation of the equal variance assumption.
all(sd_ratios < 2)
```