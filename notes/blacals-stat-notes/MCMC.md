Tags: [[Stats]]

- Notation: $\mathbb{v}$ vector and $\mathbb{v\circ u}$ is elementwise multiplication.
- Bayesian probability is nice but choosing a prior is very hard in practice and you may not get a nice prior.
- Numerical methods:
	1. **Numerical Integration.** Express $E[X]$ as an integral and integrate numerically. Might suck if you have no analytic form.
	2. **Discretisation.**
		- Take a continuous distribution, divide a wide range of the real line into equal-length intervals, and collect the PDF values in the intervals in a vector $\mathbb{v}$ after normalising the values so everything adds to 1. 
		- If we sample the prior and likelihood and take their elementwise product, their normalised version should be close to the posterior, i.e. if $\pi(\vec x\mid \theta)\approx\mathbb{v}$ and $\pi(\theta)\approx\mathbb{u},$ then $\pi(\theta\mid\vec x)\approx\operatorname{Norm}(\mathbb{v}\circ\mathbb{u}).$ 
		- To avoid numerical errors, use logarithms. They lower high PDF values and raise lower values whose multiplication is a source of errors.

- Problems:
	- **High Dimensionality.**
		- Very hard to think about, very hard to integrate.
		- Most integration methods depend 'exponentially' on the dimension.
		- Normalisation is hard due to harder integration.
		- Not Well-Defined Spaces. 
	- **Computation.** Algorithms can have bad complexity.
		- Making a 'Markov assumption' on the Markov process of Bayesian inference can help with the steps of the process being our beliefs.

- **MCMC.**
	- **Strong Law for MCs.** If $X\sim\text{lim dist}$ and a bounded function $r,$ then $E[r(X)]=\lim_{N \to \infty}\dfrac{1}{N}\sum_{n=1}^{N}r(X_n)$ a.s. Note this does not assume the $X_i$ are IID.
	- If we have a Markov chain we can sample and a limiting distribution, then we can get the expectation.
	- Now we go backwards: Given a limiting distribution, we wish to find a MC with that limiting distribution. We at least need an ergodic chain.
	- Finite chains would be nice but for infinite chains we need to check one more condition.
	- Let $P$ be the transition matrix of a matrix. Ergodicity is equivalent to $(P^n)_{i,j}>0$ for any $i,j$ and some $n>0.$
		- **Do we check this numerically? Can we do the multiplication numerically?** Yes so long as it's not too bad.
	- **Metropolis-Hastings.** Given a limiting distribution, this is an algorithm for getting a Markov chain.
		- Let $f$ be proportional to the limiting distribution, $q$ a proposed distribution where $p_{i,j}=q(j\mid i),$ and a starting point $\theta.$ The latter two are **arbitrary.** Thus we can choose $q$ as an easy-to-sample distribution.
```r
Loop
	θ_new <- sample $ q(θ_new | θ).
	a <- min 1 f(θ_new)q(θ | θ_new)/f(θ)q(θ_new | θ) # Why is this a multiplication of probability ratios?
	u ~ unif[0,1]
	if (u < a) {θ = θ_new}
	next step <- θ
	continue
endLoop
1/N * sum(r(chain))
```
- 
	- 
		- The Hastings comes from choosing a symmetric $q$ where $q(A\mid B)=q(B\mid A).$
		- Thankfully, we don't need to solve for the integration constant.
		- **Burn-in.** Convergence can take some time if you run the algorithm immediately.
	- **Gibbs Sampling.** Simple $\pi(x_j\mid \vec x)\propto_{x_j}\pi(\vec x),$ we sample $\pi(x_j\mid\vec x)$ in M-H for the components of $\theta_{\mathrm{new}}.$

- **Example 1.** Good sequences are those consisting of 0s and 1s with no consecutive 1s. What is the average number of 1s in a good sequence? Let $X\sim\mathcal{U}(\text{state space})$ be the limiting distribution with the state space being the number of 1s. This looks like a rightward chain with self-transitions at each step. Call sequences neighbours if they differ in 1 spot. Make it so the sum of outgoing weights are all the same, having each outgoing connection have a weight.
- **Example 2.** Length $m$ sequences of integers that begin and end with 0 and the absolute difference between consecutive members is at most 1. What is the average maximal element over all sequences? Let $r=\max(S)$ for a sequence $S$ and $f$ be a uniform distribution on $r(S).$
- **Example 3.** Suppose we have a bijective cypher $f$ and a source of messages that we want to decypher. Assuming a 2-gram model, let $P$ be the transition matrix, and assume a prior $P_j\sim \mathrm{Dir}(1,\ldots,1),$ i.e. $\pi(p_j)$ is uniform. We are trying to find an $f$ maximising $\pi(f(M))$ through estimating the rows of $P$ since $f$ is bijective, so the transitions $\pi(p_j\mid p_i)$ follow a multinomial. Given cyphers $f$ and $g,$ they are related if $f=g\cdot(s_js_i)$ in the permutation group, i.e. they are off by a swap. The transition graph connects neighbours in this way.