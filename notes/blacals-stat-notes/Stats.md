# MoC

- [[Design-and-Analysis-of-Experiments]]
	- [[Experimental-Designs]]
- [[Issues-in-Statistics]]
- [[Probability-Theory]]
	- [[Continuous-Random-Variables]]
	- [[Discrete-Random-Variables]]
	- [[Joint-Random-Variables]]
	- [[Probability-Distributions]]
		- [[Normal-Distribution-Extras]]
	- [[Probability-Theorems]]
	- [[Random-Processes]]
		- [[Markov-Chains]]
	- [[Convergence-Phenomena-and-Inequalities]]
- [[Statistical-Methods]]
	- [[Inferential-Statistics]]
		- [[Bayesian-Inference]]
			- [[Bayesian-Hypothesis-Testing]]
			- [[Bayesian-Estimation]]
			- [[Bayesian-Priors]]
		- [[Classical-Inference]]
			- [[Classical-Hypothesis-Testing]]
			- [[Classical-Estimation]]
	- [[Presentation-of-Data]]
	- [[Classical-Statistical-Models]]
	- [[Test-Statistics]]
# Kinds of Data
- **Nominal.** meme
- **Ordinal.** meme
	- **Interval.** meme
	- **Ratio.** meme
# Statistics and Probability
Statistics and probability are not co-extensive. There are areas of statistics that are not in the field of probability theory. The latter is a sub-field of mathematics where we study fully specified probabilistic models that obey the [[Probability-Theory#Definitions and General Concepts|axioms of probability]]. Questions here are unambiguous and have (at-times hard to find) answers. The statistician, in contrast, is not provided a model or method apriori but must create them and justify why certain situations demand particular methods. In general, there is no principled way to choose a 'best' method without making many assumptions. Still, our choice will hinge on what 'best' means, so we may narrow our search by specifying desirable qualities of a 'good' method such as it making truth-tracking inferences with limited information or arrive at the same answers as probability theory with unlimited information. Within such a narrow range, further factors may impact our choice of methods:

> *'performance guarantees, past experience, common sense, as well as the consensus of the statistics community on the applicability of a particular method on a particular problem type.'*
> \- Bertsekas and Tsitsiklis (2008). *Introduction to Probability.* 2nd ed.

## Bayesianism vs Frequentism
Within statistics there are 2 main approaches to narrowing the range of 'good' methods for problems:  the **Bayesian** view and the **Frequentist** (also called **Classical**) view. They mainly differ in how they treat unknown variables or models. The Bayesian treats unknown factors as random variables with known distributions. They in turn create models more in-line with probability theory: A random variable $\Theta$ characterises the unknown factors and a **prior** distribution $\pi(\theta)$ is postulated ($\pi$ [[Continuous-Random-Variables|notation]]). Given some observations $\mathbf{X}=\mathbf{x},$ and that we know $\pi(\mathbf{x}\mid \theta),$ we can in principle derive the **posterior** distribution $\pi(\theta\mid \mathbf{x}).$ This they claim captures all information $\mathbf{x}$ can provide about $\theta.$ Although the value of $\theta$ might in truth be fixed, the Bayesian claims we are justified in modelling it as a random variable since it reflects the current state of our knowledge, e.g. if past estimates put certain bounds on $\theta,$ the prior distribution might concentrate within those bounds. Bayesian methods tend to be more computationally expensive though that is changing in recent years.
$\quad$The Frequentist treats unknown factors as fixed or deterministic but just so happen to be unknown. The goal is then to estimate the true value $\theta,$ say, with methods that have some performance guarantees. We are not dealing with a single probabilistic model but with many candidate models for each possible value of $\theta.$ These methods are computationally cheaper. They often object the Bayesian prior distribution is far too subjective, which the Bayesian counters by saying all of Statistics is based on hidden choices and it is better to bring them to the surface.
$\quad$These views will agree in many situations, and just as often the classical methods are equivalent to Bayesian methods with a particular choice of prior.