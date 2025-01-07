Tags: [[Stats]]
# Definitions and General Concepts
In mathematics, there is nothing like randomness. Functions are deterministic and the value of a term is fixed. The usual formalism has us consider possible outcomes as elements of a set and events as certain sets of outcomes thought of as at least one of its elements occuring. Then the 'probability' of an event is some function on the set of all events. Typically we describe events through propositions and we can identify a formula with the set of all outcomes that are sufficient conditions for this formula, e.g. the event 'I am wet' would contain the outcome 'I fell in a lake' if that is a possible outcome. Propositions describing single outcomes are identified with singletons. Although we cannot easily describe randomness, we can describe the probability of an event through this function and this will be enough to develop a great deal of probability theory. We should be able to perform set algebra on events so that logical formulas can be transformed into set-theoretic operations; negation into the relative complement, finite disjunctions into finite unions, and the matte of quantifiers presents formal complications. The probability function itself should obey certain constraints. Its values should be in the unit interval, the probability of the whole space of outcomes (i.e. of anything happening) should be 1, and the probability of the union of disjoint events should be the sum of the probabilities. Measure theory gives us tools to deal with functions such as these, though on the matter of quantifiers we are restricted to quantifying over countably many things.

> [!def] Kolmogorov Probability Model
> A **probability space** is a triple $\left\langle \Omega,\mathcal{F},P \right\rangle$ where $\Omega$ is the **sample space** and its elements are called **outcomes,** $\mathcal{F}\subseteq\wp(\Omega)$ the **event space** with its elements called **events,** and $P:\mathcal{F}\to[0,1]$ the **probability law** or **distribution.** These satisfy the following rules:
> 1. $\Omega,\varnothing\in \mathcal{F}$ and $\mathcal{F}$ is closed under relative complements and countable unions.
> 2. $P(\Omega)=1, P(\varnothing)=0,$ and if $\{A_n\}_{n=1}^{\infty}$ is a sequence of pairwise disjoint events, then $$P\left( \bigcup_{n=1}^{\infty} A_n \right) =\sum_{n=1}^{\infty} P(A_i).$$

In the language of measure theory, $\mathcal{F}$ is a $\sigma$-algebra and $P$ is a measure on the measurable space $\left\langle  \Omega,\mathcal{F}\right\rangle,$ making $\left\langle \Omega,\mathcal{F,}P \right\rangle$ into a measure space.

> [!def] Measure Spaces
> For any set $X,$ a **$\sigma$-algebra** on $X$ is a subset of $\wp(X)$ containing $\varnothing$ and $X$ that is also closed under complements and countable unions. $\left\langle X,\mathcal{F} \right\rangle$ is a **measurable space** iff $\mathcal{F}$ is a $\sigma$-algebra on $X.$ The elements of $\mathcal{F}$ are called **$\mathcal{F}$-measurable sets.** If $\left\langle Y,\Sigma \right\rangle$ is also a measure space, a function $f:X\to Y$ is **$\left\langle \mathcal{F,}\Sigma \right\rangle$-measurable** only if the pre-image of measurable sets is measurable, i.e. $\breve f(A)\in \mathcal{F}$ whenever $A\in \Sigma.$ A **measure** on $\left\langle X,\mathcal{F} \right\rangle$ is a function $\mu:\mathcal{F}\to[0,\infty]$ satisfying the following:
> 1. $\mu(\varnothing)=0.$
> 2. If $\{A_n\}_{n=1}^{\infty}$ is a sequence of pairwise disjoint elements of $\mathcal{F},$ then $$\mu\left( \bigcup_{n=1}^{\infty} A_n \right)=\sum_{n=1}^{\infty} \mu(A_n).$$
> 
> We say $\left\langle X,\mathcal{F},\mu \right\rangle$ is a **measure space** only if the above conditions are met and $\mathcal{F}$-measurable sets are now also called **$\mu$-measurable** and similarly for measurable functions. If $\varphi(x,\vec a)$ is formula, we say $\varphi$ holds **almost everywhere on $X,$** $\mu$-a.e., or a.e. $(\mu)$ only if $\mu(\lnot\varphi(X,\vec a))=0.$ If $Y$ is any set and $f:X\to Y$ is any function, the **push-forward measure** of $f$ is the measure $\nu=\mu\circ \breve f$ with the set of measurable sets of $Y$ being $\operatorname{dom}\nu.$

When we have a topological space, it is convenient to have the open sets be measurable.

> [!def] Borel Sets
> If $X$ is a set and $M\subseteq\wp(X),$ $\sigma(M)$ is the least $\sigma$-algebra on $X$ containing $M.$ If $\left\langle X,\tau \right\rangle$ is a topological space, $\mathcal{B}(X)=\sigma(\tau)$ and its elements are called **Borel sets.**

With the Borel sets on $\mathbb{R},$ a function $f:\left\langle X,\mathcal{F} \right\rangle\to\mathbb{R}$ is measurable iff $\breve f((-\infty,x])$ is measurable for each $x\in \mathbb{R}.$ Theorems about probability spaces can be found [[Probability-Theorems#General Theorems|here]].
## Conditional Probabilities
When we 'condition' on an event $B,$ we are considering outcomes whilst assuming $B$ implicitly, so the event '$A$ given $B$' is really the event $A\cap B.$ Although this indeed makes a measure, it is not a probability distribution since $P(\Omega\cap B)=P(B)$ may not be $1.$ This has a simple fix.

> [!def] Conditional Probability of Events
> If $A,B$ are events and $P(B)>0,$ the **probability of $A$ given $B$** is the quantity $$P(A\mid B)=\dfrac{P(A\cap B)}{P(B)}.$$
> We say $B$ **suggests** $A$ only when $P(A\mid B)>P(A).$

The probability of $A$ given $B$, then, is the probability that any outcome of $A$ occurs when restricted to only outcomes of $B$, which can be though of as the proportion of $B$ taken up by $A$.

> [!thm] Theorem (***Conditional Probability is a Probability Law***)
> If $P(B)>0,$ $P(A\mid B)$ is a probability law.

```ad-note
title:Derivation
collapse:close

If $P(B)>0$, 

1. $P(A\mid B)=\dfrac{P(A\cap B)}{P(B)}\leqslant 0$ and $$P(\Omega \mid  B)=\dfrac{P(\Omega\cap B)}{P(B)}=\dfrac{P(B)}{P(B)}=1$$
2. If $\{A_n\}_{n=1}^{\infty}$ is a sequence of pairwise disjoint events,
$$
\begin{align*}
P\left( \bigcup_{n=1}^{\infty} A_n\mid B \right)&=\dfrac{1}{P(B)}P\left( \bigcup_{n=1}^{\infty} A_n\cap B \right)\\
&=\dfrac{1}{P(B)}\sum_{n=1}^{\infty} P(A_n\cap B)\\
&=\sum_{n=1}^{\infty} P(A_n\mid B)
\end{align*}
$$
```

This definition gives us a way to compute $P(A\cap B)$ as $P(A\mid B)P(B).$ Upon some reflection, we may generalise this to any finite intersection of events with the appropriate assumptions.

> [!thm]
> Let $\{A_i\}_{i=1}^{n}$ be a sequence of events s.t. $P\left( \bigcap_{i=1}^{k}A_i \right)>0,$ for each $k\leqslant n.$ Then, $$P\left( \bigcap_{i=1}^{n} A_i \right)=P(A_1)\prod_{k=2}^{n}P\left( A_k\mid \bigcap_{i=1}^{k-1} A_i \right)=P(A_1)\prod_{k=2}^{n}\dfrac{P(\bigcap_{i=1}^{k} A_i)}{P(\bigcap_{i=1}^{k-1} A_i)}.$$

The fact that $P$ is $\sigma$-additive gives us a way to compute the probability of an even by conditioning on members of a partition of the sample space.

> [!thm]+ Total Probability Theorem (TPT)
> If $\{A_i\}_{i\in I}$ is an at most countable partition of $\Omega,$ then for any event $B$ 
> $$
> \begin{align*}
> P(B)&=\sum_{i\in I} P(A_i\cap B)\\
> &=\sum_{i\in I} P(A_i)P(B\mid A_i).
> \end{align*}
> $$
> The second equality assumes each $A_i$ has positive probability.

These facts, and the definition, immediately give us a method for computing $P(B\mid A)$ if we know $P(A),$ $P(B),$ and $P(A\mid B).$

> [!thm] Theorem (***Bayes's Theorem***)
> If $\{A_i\}_{i\in I}$ is an at most countable partition of the sample space whose members have positive probability and $P(B)>0,$ $$P(A\mid B)=\dfrac{P(A)P(B\mid A)}{P(B)}=\dfrac{P(A)P(B\mid A)}{\sum_{i\in I}P(B\cap A_i)}.$$

### Independence
Intuitively, $A$ and $B$ are independent only when $P(A\mid B)=P(A)$, i.e. $B$ occurring has no bearing on the probability of $A.$ This is equivalent to saying $P(A\cap B)=P(A)P(B)$ but this new equation is also meaningful when $P(B)=0,$ so it shall be the definition.

> [!def] Independence
> Events $A,B$ are **independent** iff $P(A\cap B)=P(A)P(B).$

Generalising to any collection of events leads to some trouble for there are two inequivalent notions of independent. We might mean that any pair of events is independent or that the probability of an intersection of any finite subset is the product of the corresponding probabilities.

> [!def] Mutual and Pairwise Independence
> Let $\{A_i\}_{i\in I}$ be a family of events.
> 1. We say the events are **pairwise independent** only if any pair of events are independent.
> 2. The events are **mutually independent,** or simply **independent,** only if for any finite subset $J\subseteq I,$ we have that $$P\left( \bigcap_{j\in J}A_j \right)=\prod_{j\in J}P(A_j).$$

We can further extend this definition to conditional independence.

> [!def] Conditional Independence
> A family of events $\{A_i\}_{i\in I}$ is **conditionally independent given $C$** only if it is independent w.r.t. the conditional distribution given $C.$ **Conditional pairwise independence** is similarly defined.

Assuming $P(B\mid C)$ is non-zero, $A$ and $B$ are conditionally independent on $C$ only if $$P(A\mid B\cap C)=P(A\mid C).$$
That is, if $C$ occurred, $B$ occurring has no bearing on $A.$
# Random Variables
See [[Random-Variables|here]] for random variables.