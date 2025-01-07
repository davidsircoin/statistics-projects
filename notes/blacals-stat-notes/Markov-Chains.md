Tags: [[Stats]], [[Probability-Theory]], [[Random-Processes]]

Markov Chains, unlike arrival processes, do depend on the past and allow us to predict the future of the process based on its past to some degree. This effect of the past on the future is summarised by a **state** which changes over time with a given probability. For now we only study processes where the state can only take a finite number of values.
$$
\begin{bmatrix}
\dfrac12 & \dfrac12 & 0 \\
0 & 0 & 1 \\
\dfrac12 & \dfrac12 & 0
\end{bmatrix}
$$
# Discrete-Time Finite States

> [!def]+ Definition
> A discrete-time **Markov chain** model is specified by the following:
> - A **state space** $S=\{1,\ldots,m\}$ which the process may take at any step, which we denote $X_n$ for the state at the $n$-th step.
> - A set of possible **transitions**; a set of pairs $(i, j)$ s.t. $p_{ij}>0$ where $$p_{ij}=P(X_{n+1}=j\mid X_n=i).$$
> - (*Markov Property*). The probability $p_{ij}$ holds regardless of how we reach state $i,$ that is: $$P(X_{n+1}=j\mid X_n=i,X_{n-1}=i_{n-1},\ldots,X_0=i_0)=p_{ij},$$for each $i, j\in S$ and each possible sequence $\{i_k\}_{k=0}^n$ of prior states.
> - An $m\times m$ probability matrix encoding the transition probabilities, whose row sums must be 1:
> $$
> \begin{bmatrix}
> p_{11} & p_{12} & \cdots & p_{1m}\\
> p_{21} & p_{22} & \cdots & p_{2m}\\
> \vdots & \vdots & \vdots & \vdots\\
> p_{m1} & p_{m2} & \cdots & p_{mm}
> \end{bmatrix}
> $$
Thus, the probability $p_{ij}$ only depends on what the current state $i$ is, not on any prior state. These probabilities must be normalised: $$\sum_{j=1}^mp_{ij}=1,\quad\forall i.$$
We may also allow $p_{ii}$ as a valid, strictly positive probability—a so-called 'self-transition.' We can also make it so that a transition probability is determined by past states in addition to the immediately prior one through pairs such as $$\text{state }(2, i)=\text{the process has been in state 2 for $i$ steps}.$$
Here the state space becomes a set of ordered pairs.
$\quad$Instead of a probability matrix, we could encode the transition probabilities through a *directed graph* whose nodes are states and where a connection from a state $i$ to state $j$ has next to it $p_{ij}.$
## Probability of a Path
To calculate the probability of a certain sequence $\{X_k=i_k\}_{k=0}^n$ we may multiply for 
$$
\begin{align*}
P\left(\bigcap_{k=0}^nX_k=i_k\right)&=P\left(X_n=i_n\mid\bigcap_{k=0}^{n-1}X_k=i_k\right)P\left(\bigcap_{k=0}^{n-1}X_k=i_k\right),\\
&=P(X_n=i_n\mid X_{n-1}=i_{n-1})P\left(\bigcap_{k=0}^{n-1}X_k=i_k\right),\\
&=p_{i_{n-1}i}P\left(\bigcap_{k=0}^{n-1}X_k=i_k\right).
\end{align*}
$$
We may repeat this to obtain $$P\left(\bigcap_{k=0}^{n}X_k=i_k\right)=P(X_0=i_0)\prod_{k=1}^np_{i_{k-1}i_k},$$
or, $$P(X_0=i_0,X_1=i_1,\ldots,X_n=i_n)=P(X_0=i_0)p_{i_0i_1}p_{i_1i_2}\cdots p_{i_{n-1}i_n}.$$
## $n$-Step Transition Probability
We define the $n$**-step transition probability** by $$r_{ij}(n)=P(X_n=j\mid X_0=i).$$
It is the probability that given a current state $i,$ after $n$ steps we will be in state $j.$ We calculate this using the **Chapman-Kolmogorov equation.**
> [!rmk]+ Chapman-Kolmogorov Equation
> We may alternatively define the $n$-step transition probability as $$r_{ij}(n)=\sum_{k=1}^mp_{kj}r_{ik}(n-1),\quad\forall i, j\in S\forall n>1,$$where we start with $$r_{ij}(1)=p_{ij}.$$
We can see this by
$$
\begin{align*}
r_{ij}(n)&=P(X_n=j\mid X_0=i)\\
&=\sum_{k=1}^mP(X_{n-1}=k\mid X_0=i)P(X_n=j\mid X_{n-1}=k, X_0=i)\\
&=\sum_{k=1}^mp_{kj}r_{ik}(n-1).
\end{align*}
$$
We may calculate the probability $P(X_n=j)$ that at time $n$ we will be in state $j$ for a random initial state: $$P(X_n=j)=\sum_{i=1}^mP(X_0=i)r_{ij}(n).$$
## Classifying States
We can classify states based on the long-term frequency with which they are visited:

- **Accessible.** A state $j$ is *accessible* from a state $i$ iff the $r_{ij}(n)>0$ for some $n.$ Let $A(i)$ be the set of all states accessible from $i.$
- **Recurrent.** A state $i$ is *recurrent* iff $\forall j\in A(i).\ i\in A(j).$ If $i$ is recurrent, then we call $A(i)$ a *recurrent class,* or simply a class.
- **Transient.** A state is *transient* iff it is not recurrent, i.e. $\exists j\in A(i).\ i\notin A(j).$

Once a recurrent state is visited, it is visited again an infinite number of times. Any transient state will eventually never be visited again, if it was visited at all. In fact, any transient state is not accessible from any recurrent class, but at least one recurrent state is accessible from any transient state, possibly more.
> [!thm]+ All States in a Recurrent Class are Recurrent
> If $i$ is recurrent, then $$A(i)=A(j),\quad\forall j\in A(i).$$Thus, all states in a recurrent class $A(i)$ are accessible to each other but not to states in another recurrent class.
Any chain may be decomposed into at least one recurrent class and possibly transient states. 
## Periodic Classes

> [!def]+ Definition
> A recurrent class $R$ is periodic iff we may form a partition of at least 2 sets of states $\{S_k\}_{k=1}^d, d\geq 2$ s.t. all transitions go from one state to the other in the same sequence. That is, if $i\in S_k$ and $p_{ij}>0,$ then $$\text{if $1\leq k\leq d-1,\ j\in S_{k+1}$};\quad\text{if $k=d,\ j\in S_{1}$}.$$

A class is non-periodic, or *aperiodic,* iff no such partitioning may be formed. These are greatly important for studying steady-state behaviour in the next section.
## Steady-State Behaviour
Be this we mean the limiting behaviour $r_{ij}(n)$ exhibits as $n$ goes to infinity (or when it is very large if we care to approximate). If the chain has at least 2 recurrent classes, it is clear then that what $X_0$ is matters for studying limiting behaviour since some starting points will exclude a recurrent class from being visited or in general is not guaranteed to be visited, so the **steady state probabilities** will not be the same for each starting point. Thus, we for now only study those with a single recurrent class.
### Single Recurrent Class
We not only require a single recurrent class to get nice limiting behaviour, but that class must also be *non-periodic* for obvious reasons. Given those conditions, we may denote the limiting probabilities with $$\pi_j=\lim_{n\to\infty}P(X_n=j),$$
for $j\in R,$ and state the following:

> [!thm]+ Steady-State Convergence Theorem (SSCT)
> If a Markov Chain has a single, non-periodic recurrent class $R,$ then
> 1. For each $j,$ we have that $$\lim_{n\to\infty}r_{ij}(n)=\lim_{n\to\infty}P(X_n=j\mid X_0=i)=\pi_j,\quad\forall i.$$
> 2. The $\pi_j$ are the unique solutions to the systems of equations:
> $$
> \begin{align}
> \pi_j&=\sum_{k=1}^m\pi_kp_{kj},\quad\forall j\in S,\\
> 1&=\sum_{k=1}^m\pi_k.
> \end{align}
> $$
> 3. And,
> $$
> \begin{align}
> \pi_j&=0,\quad\forall j\notin R,\\
> \pi_j&>0,\quad\forall j\in R.
> \end{align}
> $$

The first set of equations in the second proposition are called the **balance equations.** Combined with normalisation, the $\pi_j$ form a probability distribution on the state space called the **stationary distribution** of the chain for if $P(X_0=j)=\pi_j,$ for each $j\in S,$ then $$P(X_1=j)=\sum_{k=1}^mP(X_0=k)p_{kj}=\sum_{k=1}^m\pi_kp_{kj}=\pi_j.$$And so on; for each $n$ and $j,$ we have that $P(X_n=j)=\pi_j$ under this scenario. Thus, if we choose the probabilities of the initial state according to the stationary distribution, that distribution will remain for any future time. The balance equations can obtained by the following limit alongside Perron-Frobenius: $$\lim_{n\to\infty}r_{ij}(n)=\lim_{n\to\infty}\sum_{k=1}^mr_{ik}(n-1)p_{kj}.$$
This guarantees solutions and the additional normalisation equation guarantees the uniqueness of the solutions. The process might start with expressing all $\pi_j$ in terms of a single steady-state probability, usually the first one. By normalisation, we could substitute the equivalent expressions using only $\pi_0,$ factor it out, and divide both sides by the remaining sum of of transition probabilities. This does not always work. Finding solutions to these equations is in general very difficult, so we consider particular kinds of cases which have nice solutions.

```ad-summary
title:Umbrella Example
collapse:close

Suppose Alice has 2 umbrellas that she uses when commuting from home to work and back. If it rains and an umbrella is available in her location, she takes it; if it is not raining, she forgets. Suppose it rains with probability $0<p<1$ each time she commutes, independent of what happens at other times. We wish to know what the steady-state probabilities are that she gets wet during her commute.
$\quad$We may model this by considering the number of umbrellas at her current location, either 0, 1, or 2. These shall be the states of a Markov Chain represented by the following probability matrix: $$\begin{bmatrix}0 & 0 & 1\\ 0 & 1-p & p\\ 1-p & p & 0\end{bmatrix}.$$The whole chain is a single, aperiodic recurrent class, so SSCT applies. Thus, $$\pi_0=(1-p)\pi_2,\quad\pi_1=(1-p)\pi_1+p\pi_2,\quad\pi_2=\pi_0+p\pi_1.$$Then, $$\pi_0=\frac{1-p}{3-p},\quad\pi_1=\frac1{3-p},\quad\pi_2=\frac1{3-p}.$$Therefore, the steady-state probability that she commutes with no umbrellas is $\pi_0$ by construction, and the probability of her getting wet is $p\pi_0$ for the probabilities are independent.
```
### Intuitions Behind the SSCT
Intuitively we may understand this theorem as saying that we must always end up in the single recurrent class at some point, and once there, if we begin at 2 distinct initial states within the class those processes will at some point match up, after which they are the same probabilistically. Additionally, we may interpret each $\pi_j$ as the average frequency with which we end up in state $j$ after a large number of steps.

> [!rmk]+ Steady-State Probabilities as Average State Visits
> For a Markov Chain satisfying the SSCT, the probabilities $\pi_j$ satisfy $$\pi_j=\lim_{n\to\infty}\frac{v_{ij}(n)}n,$$
> where $v_{ij}(n)$ is the expected value of the number of visits to $j,$ within the first $n$ transitions, starting from state $i.$

Given this interpretation, we may think of $\pi_ip_{ij}$ as the long-term frequency of transitions from state $i$ to state $j$—as the process goes on and we record how many transitions occur from one state to another, for every pair of states, the fraction of transitions that go from $i$ to $j$ is $\pi_ip_{ij}.$

> [!rmk]+ Average Count of a Particular Transition
> Consider again a Markov Chain which satisfies the SSCT. Let $q_{ij}(n)$ be the expected number of transitions from $i$ to $j.$ Then, regardless of the initial state, we have that $$\lim_{n\to\infty}\frac{q_{ij}(n)}n=\pi_ip_{ij}.$$

## Birth-Death Processes
These are kinds of Markov Chains that can be arranged horizontally where one can transition upward, downward, or self-transition. These arise in queuing theory or when dealing with problems where something fulfils request at a finite rate and puts any additional requests in a queue. In general, we may express the probability of self-transition using the following:
$$
\begin{align}
b_i&=P(X_{n+1}=i+1\mid X_n=i),\\
d_i&=P(X_{n-1}=i-1\mid X_n=i).
\end{align}
$$
Using these, the probability of self-transition is the probability that 'not(we transition up or we transition down).' In numbers, $1-(b_i+d_i)=1-b_i-d_i.$ By convention the first state is labelled by 0, so the probability matrix of a Birth-Death (BD) process with $m+1$ states would look like this:
$$
\begin{bmatrix}
1-b_0 & b_0 & 0 & 0 & \cdots & 0 & 0\\
d_1 & 1-b_1-d_1 & b_1 & 0 & \cdots & 0 & 0\\
0 & d_2 & 1-b_2-d_2 & b_2 & \cdots & 0 & 0\\
\vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots\\
0 & 0 & 0 & 0 & \cdots & d_m & 1-d_m
\end{bmatrix}
$$
The balance equations greatly simplify for these processes. Intuitively, given adjacent states $i$ and $i+1,$ the long-term frequency of transitions from $i$ to $i+1$ must be the same as the long-term frequency of transitions from $i+1$ to $i$ for, after the initial transition, any subsequent transition from $i$ to $i+1$ requires that we transition from $i+1$ to $i.$ That is, $$\pi_ib_i=\pi_{i+1}d_{i+1},\quad\forall i<m.$$
```ad-note
title:More Formal Derivation
collapse:close

First note the balance equation for $\pi_0:$ $$\pi_0=\pi_0(1-b_0)+\pi_1d_1.$$By simple algebra we get $\pi_0b_0=\pi_1d_1.$ Repeating for $\pi_1$ we have that
$$
\begin{align}
\pi_1&=\pi_0b_0+\pi_1(1-b_1-d_1)+\pi_2d_2\\
&=\pi_1d_1+\pi_1-\pi_1b_1-\pi_1d_1+\pi_2d_2\\
\pi_1b_1&=\pi_2d_2.
\end{align}
$$
Repeating this for each state gives us the local balance equations for each state.
```
This we call the **local balance equations.** From that we derive
$$
\begin{align}
\pi_{i+1}&=\pi_i\frac{b_i}{d_{i+1}}\\
&=\pi_{i-1}\frac{b_{i-1}b_i}{d_id_{i+1}}\\
&=\pi_{i-2}\frac{b_{i-2}b_{i-1}b_i}{d_{i-1}d_id_{i+1}}\\
&\vdots
\end{align}
$$
And so on until we arrive at state 0. In general, $$\pi_i=\pi_0\prod_{k=1}^i\frac{b_{k-1}}{d_k}.$$
Using normalisation, we can easily solve for the steady-state probabilities of the chain.
```ad-summary
title:1D Discrete Random Walk Example
collapse:close

Consider a chain with $m$ states, with the least state being 1, where all upward transition probabilities are equal, $b,$ and all downward transition probabilities are equal, $1-b.$ This partially describes a random walk on an initial segment of the natural numbers excluding 0. Once at 1, if we try to go to 0, with probability $1-b,$ we will stay at 1; similarly, attempting to transition to $m+1$ ends up being a self-transition. The probability matrix would look something like this:
$$
\begin{bmatrix}
1-b & b & 0 & \cdots & 0 & 0\\
1-b & 0 & b & \cdots & 0 & 0\\
0 & 1-b & 0 & \cdots & 0 & 0\\
\vdots & \vdots & \vdots & \vdots & \vdots & \vdots\\
0 & 0 & 0 & \cdots & 1-b & b
\end{bmatrix}
$$
Then, the local balance equations shall be of the form $$\pi_ib=\pi_{i+1}(1-b),\quad\forall i<m.$$If we let $$\rho=\frac{b}{1-b},$$then $\pi_{i+1}=\rho\pi_i.$ Thus,
$$
\begin{align}
\pi_i&=\pi_1\prod_{k=2}^i\rho\\
&=\pi_1\prod_{k=1}^{i-1}\\
&=\pi_1\rho^{i-1}
\end{align}
$$
By normalisation,
$$
\begin{align}
1&=\sum_{i=1}^m\pi_i\\
&=\sum_{i=1}^m\pi_1\rho^{i-1}.
\end{align}
$$
Therefore, $$\pi_i=\frac{\rho^{i-1}}{1+\rho+\rho^2+\ldots+\rho^{m-1}},\quad\forall i.$$

If $\rho=1,$ we are equally likely to move left or right and $\pi_i=1/m,$ for each $i;$ if $\rho>1,$ rightward movement is more likely; if $\rho<1,$ leftward movement is more likely.
```

```ad-summary
title:Slight Variation of the Above as Applied to Queueing
collapse:close

Suppose some packets arrive at a communication network with a buffer of size $m$—if there are $m$ packets in the buffer, any additional ones are discarded. We partition time into evenly spaced periods of equal length s.t. at each period exactly one the following occur:

1. One packet arrives with probability $b>0.$
2. One packet completes its transmission with probability $d>0$ if there is a packet, and probability 0 otherwise.
3. No new packet arrives and nothing is transmitted with probability $1-b-d.$

The probability matrix would look like this:
$$
\begin{bmatrix}
1-b & b & 0 & \cdots & 0 & 0\\
d & 1-b-d & b & \cdots & 0 & 0\\
0 & d & 1-b-d & \cdots & 0 & 0\\
\vdots & \vdots & \vdots & \vdots & \vdots & \vdots\\
0 & 0 & 0 & \cdots & d & 1-d
\end{bmatrix}
$$
This is a BD process and its local balance equations are $$\pi_ib=\pi_{i+1}d,\quad\forall i<m.$$Let $\rho=b/d,$ so $\pi_{i+1}=\rho\pi_i$ and $$\pi_i=\rho^i\pi_0,\quad\forall i.$$By normalisation we get that
$$
\begin{align}
1&=\pi_0\sum_{i=0}^m\rho^i\\
\pi_0&=\begin{cases}\dfrac{1-\rho}{1-\rho^{m+1}} & \rho\ne1\\\dfrac1{m+1} & \rho = 1\end{cases}
\end{align}
$$

We may finally consider what happens as the buffer size increases, going up to infinity. There, we have 2 interesting cases: $\rho<1$ and $\rho>1.$

- Suppose $b<d,$ i.e. arrivals of new packets is less likely than departures. Since larger states are less likely to be visited, the steady-probabilities $\pi_i$ decrease as $i$ increases. Since $\rho<1,$ we have that $$\lim_{m\to\infty}1-\rho^{m+1}=1,\quad\quad\lim_{m\to\infty}\pi_i=\rho^i(1-\rho),\quad\forall i.$$Note that the sum over all $\rho^i(1-\rho)$ converges to 1 since it would be a geometric series. By similar arguments as in the derivation of the MGF of a geometric distribution, we see that this is a shifted geometric distribution. In particular, if $X\sim\mathcal{Geo}(1-\rho),$ then our state random variable is given by $\lim_{n\to\infty}X_n=X-1.$ Therefore, its expected value is $$\lim_{n\to\infty}E[X_n]=\frac{\rho}{1-\rho}.$$
- Suppose $b>d,$ so $\rho>1.$ Since the number of packets tends to increase, the $\pi_i$ increase as $i$ increases; but, they must add to 1, so all them go to 0 as $m$ goes to infinity: $$\lim_{m\to\infty}\pi_i=0,\quad\forall i.$$That is, all states become transient were we to have a countably infinite amount of them. For this reason, the SSCT does not work in general for Markov chains with infinite states.
```
## Absorption
> [!def]+ Definition
> We call a recurrent state $k$ **absorbing** iff $$p_{kk}=1,\quad\quad p_{kj}=0,\quad\forall j\ne k.$$
If there is more than one recurrent class, we may wish to know the probabilities to end up in any of them given we start in a certain state. We treat each recurrent class as a single *absorbing* state—if a transient state $i$ transitioned to multiple states in a recurrent class, the probability of transitioning to the representative absorbing state is the sum of all transition probabilities from $i$ to the class. In the following, let $s$ be a particular recurrent state and let $a_i$ be the probability that we eventually transition to $s$ given that we started from $i:$ $$a_i=P(\exists n.\ X_n=s\mid X_0=i).$$
> [!thm]+ Absorption Equations
> Consider a chain where each state is either transient or absorbing. Then, the probabilities $a_i$ are the unique solutions to the equations
> $$
> \begin{align}
> a_s&=1,\tag{1}\\
> a_i&=0, & \forall\text{ absorbing }i\ne s\tag2\\
> a_i&=\sum_{j=1}^mp_{ij}a_j, & \forall\text{ transient }i.\tag3
> \end{align}
> $$
The first pair of equations follow immediately from the definition of $a_i.$ The last equation is derived below.

```ad-note
title:Derivation
collapse:close

Let $A$ be the event that $s$ is eventually reached and let $i$ be a transient state. Then,
$$
\begin{align}
a_i&=P(A\mid X_0=i)\\
&=\frac{1}{P(X_0=i)}P(A\cap X_0=i)\\
&=\frac1{P(X_0=i)}\sum_{j=1}^mP(A\cap X_0=i\cap X_1=j)\\
&=\sum_{j=1}^m\frac{P(A\cap X_0=i, X_1=j)P(X_1=j, X_0=i)}{P(X_0=i, X_1=j)P(X_0=i)}\\
&=\sum_{j=1}^mP(A\mid X_0=i,X_1=j)P(X_1=j\mid X_0=i)\\
&=\sum_{j=1}^mP(A\mid X_1=j)p_{ij}\\
&=\sum_{j=1}^ma_jp_{ij}.
\end{align}
$$

The penultimate equality follows from the Markov property since $A$ is a transition event and we 'forget' the earliest states of the process up to the last.
```

```ad-summary
title:Semi-BD Example
collapse:close

Suppose a glambler plays a game in which they win or lose $\$1$ per round with probabilities $p$ and $1-p$ respectively. They stop playing if they lose all of their money or they reach some amount of money $m.$ Assuming that each round is independent, we may model this situation as a Markov Chain similar to a BD process where only state $0$ and state $m$ self-transition with probability $1$ and all other states transition upward or downward with the obvious probabilities.
$$
\begin{bmatrix}
1 & 0 & 0 & 0 & 0 & \cdots & 0\\
1-p & 0 & p & 0 & 0 & \cdots & 0\\
0 & 1-p & 0 & p & 0 & \cdots & 0\\
0 & 0 & 1-p & 0 & p & \cdots & 0\\
\vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots\\
0 & 0 & 0 & 0 & 0 & \cdots & 1\\
\end{bmatrix}
$$

We wish to know the absorption probability of getting to $m$ from any starting state. Similar analysis to a BD process reveals the following: $$a_i=(1-p)a_{i-1}+pa_{i+1}.$$

Using this then 
$$
\begin{align}
a_i-pa_i&=(1-p)a_{i-1}+pa_{i+1}-pa_i\\
(1-p)a_i-(1-p)a_{i-1}&=p(a_{i+1}-a_1)\\
a_{i+1}-a_i&=\frac{1-p}p(a_i-a_{i-1}).
\end{align}
$$

Let $\delta_i=a_{i+1}-a_i,$ for each $i<m,$ and $\rho=(1-p)/p.$ The above, then, is equivalent to $$\delta_i=\rho\delta_{i-1}.$$

It is simple to show, by induction, that $\delta_i=\rho^i\delta_0,$ for each $0<i<m.$ Consider the following sum:
$$
\begin{align}
\sum_{i=0}^{m-1}\delta_i&=\sum_{i=0}^{m-1}a_{i+1}-\sum_{i=0}^{m-1}a_i\\
&=-a_0+\sum_{i=1}^ma_i-\sum_{i=1}^{m-1}a_i\\
&=a_m-a_0+\sum_{i=1}^{m-1}a_i-a_i\\
&=a_m-a_0\\
&=a_m\\
&=1.
\end{align}
$$

And, $$\sum_{i=0}^{m-1}\delta_i=\delta_0+\sum_{i=1}^{m-1}\rho^i\delta_0=\delta_0\sum_{i=0}^{m-1}\rho_i.$$

Thus, $$\delta_0=\frac1{\sum_{i=0}^{m-1}\rho^i}=\frac1{1+\rho+\rho^2+\ldots+\rho^{m-1}}.$$

Now note, by a similar argument as above, that 
$$
\begin{align}
a_i&=\sum_{j=0}^{i-1}\delta_j\\
&=\delta_0+\sum_{j=1}^{i-1}\rho^j\delta_0\\
&=\delta_0\sum_{j=0}^{i-1}\rho^j\\
&=\dfrac{\sum_{j=0}^{i-1}\rho^j}{\sum_{j=0}^{m-1}\rho^j}.
\end{align}
$$

Therefore, for each transient $i,$ $$a_i=\begin{cases}\dfrac{1-\rho^i}{1-\rho^m} & \rho\ne 1,\\\frac{i}m & \rho=1.\end{cases}$$

The first case follows from $a_i$ being a quotient of geometric sums whose common ratio is not $1.$ If $p<1/2,$ that is $\rho>1,$ then as we raise our desired amount of money $m,$ the probability of reaching it goes to $0:$ $$\lim_{m\to\infty}a_i=0,\quad\forall i\text{ transient}.$$
```

### Expected Time to Absorption

> [!def]+ Definition
> $$\mu_i=E[\min\{n\geqslant0 : X_n\text{ is recurrent}\}\mid X_0=i].$$

The above formalises the expected number of transitions until absorption given that we started from $i.$ Through some tedious argumentation we may arrive at
$$
\begin{align}
\mu_i&=0,&\forall i\text{ recurrent},\\
\mu_i&=1+\sum_{j=1}^mp_{ij}\mu_j,&\forall i\text{ transient.}
\end{align}
$$
The $\mu_i$ are the unique solutions to such a system of equations. We may use these ideas to calculate the expected time to enter a specific recurrent state from a certain stating point. First we consider a chain with a single recurrent class represented by an absorbing state $s.$ Then, we let $t_i$ denote the expected first time to transition to $s$ given we started in $i:$ $$t_i=E[\min\{n\geqslant0:X_n=s\}\mid X_0=i].$$
By the above statements on $\mu_i,$ we may identify $t_i$ with $\mu_i$ since we only have a single absorbing state and calculate accordingly:
$$
\begin{align}
t_s&=0,\\
t_i&=1+\sum_{j=1}^mp_{ij}t_j,&\forall i\ne s.
\end{align}
$$
If we regard $s$ as a particular state in a recurrent class, we can talk about the expected value $t_s^*$ of returning to $s$ given that we started in $s$—the **mean recurrence time:** $$t_s^*=E[\min\{n\geqslant1:X_n=s\}\mid X_0=s].$$
We may argue that this value is $1$ plus the expected time to reach $s$ from the state we transition into next, say $j$ with probability $p_{sj}.$ By total expectation, that is just the sum over all states we could transition to of the expected time to reach $s$ from there times the probability of reach that state from $s.$ In symbols, $$t_s^*=1+\sum_{j=1}^mp_{ij}t_j.$$
# Continuous-Time Finite-States
Like before we consider processes with a finite set of states $S=\{1,\ldots, m\}$ but now we introduce the following random variables to express the times spent between transitions:

- $X_n:$ the state after the $n$-th transition.
- $Y_n:$ the time of the $n$-th transition.
- $T_n:$ the time between the $(n-1)$-st and the $n$-th transitions.

By convention we let $X_0$ denote the initial state and let $Y_0=0.$ We are familiar with $X_n$ since for discrete-time Markov Chains the number of transitions just is the amount of time steps we've taken, so there $X_n$ is the state at the $n$-th step.
$\quad$We are also accompanied by new assumptions required to fully specify a continuous-time Markov Chain:
> [!def]+ Definition
> A **continuous-time** Markov Chain is fully specified by the following:
> 
> - A family $\{X_n\}_{n=0}^\infty$ of random variables recording the state after the $n$-th transition.
> - A family $\{T_n\}_{n=1}^\infty$ of random variables recording the difference in time between the $(n-1)$-st and $n$-th trasitions.
> 
> For the following *assumption,* let $\{t_k\}_{k=1}^n$ be a sequence of real numbers, let $\{i_k\}_{k=0}^n$ be a sequence of states where $i_n=i$ and $n$ is the number of transitions that have occured so far, and let $A$ be a full description of the process so far (i.e. up to and including the $n$-th transition): $$A=\{X_0=i_0, \bigcap_{k=1}^nT_k=t_k\text{ and }X_k=i_k\}.$$
> 
> - If we are at state $i,$ the time until the next transition is exponentially distributed with parameter $\nu_i,$ independent of the past of the process and the next state. That is, $$P(T_{n+1}\geqslant t\mid A)=\exp(-\nu_it),\quad\forall t\geqslant0.$$
> - If we are at state $i,$ we transition to the next state $j$ with probability $p_{ij},$ independently of the past of the process and the next transition. That is, $$P(X_{n+1}=j\mid A)=p_{ij}.$$
> - Combining these, we stay in our current state $i$ for an exponentially distributed time with paramter $\nu_i$ and, once we leave the state, we transition to some state $j$ with probability $p_{ij}:$ $$P(X_{n+1}=j, T_{n+1}\geqslant t\mid A)=p_{ij}\exp(-\nu_it),\quad\forall t\geqslant0.$$
The sequence of states $\{X_n\}_{n=0}^\infty$ describes a discrete-time Markov Chain with transition probabilities $p_{ij}.$ This we call the **embedded** Markov Chain. We may justify the last equation by the following argument:
$$
\begin{align}
P(X_{n+1}=j, T_{n+1}\geqslant t\mid A)&=P(X_{n+1}=j, T_{n+1}\geqslant t\mid X_n=i)\\
&=P(X_{n+1}=j\mid X_n=i)P(T_{n+1}\geqslant t\mid X_n=i)\\
&=p_{ij}e^{-\nu_it},\quad\forall t\geqslant0.
\end{align}
$$
As can be seen, this assumes that $X_{n+1}$ and $T_{n+1}$ are [[Discrete-Random-Variables#Two Random Variables|conditionally independent]] on $A.$ We may interpret $\nu_i$ as the average number of transitions out of state $i$ per unit time spent in $i:$ $$E[T_{n+1}\mid X_n=i]=\int_0^\infty\tau\nu_i\exp(-\nu_i\tau)d\tau=\frac1{\nu_i}.$$
Due to this we call $\nu_i$ the **transition rate out of state** $i.$ Only a portion of transitions out of $i$ will lead to $j$— $p_{ij}$ of the total in fact. Then, we may interpret $q_{ij}=\nu_i p_{ij}$ as the average number of transitions from $i$ to $j,$ and we accordingly call it the **transition rate from $i$ to $j.$** By total expectation, we can calculate transition rates $\nu_i$ as follows: $$\nu_i=\sum_{j=1}^mq_{ij}=\sum_{j=1}^m\nu_i p_{ij};$$
and we may calculate transition *probabilities* as $$p_{ij}=\frac{q_{ij}}{\nu_i}.$$
> [!rmk]+ A Note on Self-Transition
> Although it is possible to self-transition, we shall treat them as impossible for, due to memorylessness, the amount of time we remain there is also exponential with the same parameter just scaled to account for normalisation. Henceforth, then, $$p_{ii}=q_{ii}=0.$$

In representing these chains, we use not 1 but 2 probability matrices. One for the transition probabilities
$$P=\begin{bmatrix}
0 & p_{01} & p_{02} & \cdots & p_{0m}\\
p_{10} & 0 & p_{12} & \cdots & p_{1m}\\
\vdots & \vdots & \vdots & \vdots & \vdots\\
p_{m0} & p_{m1} & p_{m2} & \cdots & 0
\end{bmatrix};$$
and another for the transition rates out of a state
$$
Q=\begin{bmatrix}
0 & \nu_0p_{01} & \nu_0p_{02} & \cdots & \nu_0p_{0m}\\
\nu_1p_{10} & 0 & \nu_1p_{12} & \cdots & \nu_1p_{1m}\\
\vdots & \vdots & \vdots & \vdots & \vdots\\
\nu_mp_{m0} & \nu_mp_{m1} & \nu_mp_{m2} & \cdots & 0
\end{bmatrix}.
$$
## Discrete-Time Approximations
Let $X(t)$ be the state at time $t,$ or, if $t$ is a transition state, let it be the state right after $t$ in the Continuous-Time chain. For a fixed, small real number $\delta,$ let $\{Z_n\}_{n=0}^\infty$ be a family of random variables obtained by $$Z_n=X(n\delta).$$
This family describes a Markov Chain by $X(t)$ satisfying the Markov property. We denote the transition probabilities of $Z_n$ by $\overline p_{ij}.$ Given $Z_n=i,$ the probability that there is a transition between times $n\delta$ and $(n+1)\delta$ is approximately $\nu_i\delta,$ and if that were to happen we have a further probability $p_{ij}$ to consider that the next state is $j.$ Then $$\overline p_{ij}=P(Z_{n+1}=j\mid Z_n=i)=\nu_ip_{ij}\delta + o(\delta)=q_{ij}\delta + o(\delta),\quad\forall j\ne i;$$
here we use $o(\delta)$ to denote terms which become negligible as $\delta$ becomes ever smaller. If instead $j=i,$ the probability of no transitions occurring in the interval $(n\delta, (n+1)\delta)$ is $$\overline p_{ii}=P(Z_{n+1}=i\mid Z_n=i)=1-\sum_{j\ne i}\overline p_{ij}.$$
With these tools on hand, we may give an alternative characterisation of continuous-time Markov Chains:
> [!def]+ Alternate Description
> Given the current state $i,$ and for any $j\ne i,$ the state $\delta$ units later, independent of the past and future of the process, is $j$ with probability $$q_{ij}\delta+o(\delta).$$

```ad-summary
title:Queueing Example
collapse:closed

Suppose packets arrive at a node of a communication network according to a Poisson process with intensity $\lambda.$ That is, if we record interarrival times, we obtain a family $\{T_k\}_{k=1}^\infty$ of IID exponential random variables with parameter $\lambda.$ Only up to $m$ packets may be in the system at a time. The time to transmit a packet is an exponential random variable with parameter $\mu.$ These events occur independent of the past and future of the process. Let $X(t)$ be the number of packets at time $t.$ This number will serve as our states $$S=\{0,\ldots m\}.$$

Consider first what happens if there are no packets at time $t,$ i.e. $X(t)=0.$ We can only transition upward at a rate of $\lambda,$ so $$P(X(t+\delta)=1\mid X(t)=0)=\lambda\delta+o(\delta),$$

and $$q_{oj}=\begin{cases}\lambda & j=1,\\ 0 & \text{otherwise}.\end{cases}$$

If the system were full—$X(t)=m$—we may only transition downward at a rate of $\mu:$ $$P(X(t+\delta)=m-1\mid X(t)=m)=\mu\delta+o(\delta),$$

and $$q_{mj}=\begin{cases}\mu & j=m-1,\\ 0 & \text{otherwise}.\end{cases}$$

For any intermediary state $0<i<m,$ we may neglect the probability of both an arrival and departure occuring at some time for the terms in $(\lambda\delta+o(\delta))(\mu\delta+o(\delta))$ are negligible. This leaves us with
$$
\begin{align}
P(X(t+\delta)=i+1\mid X(t)=i)&=\lambda\delta+o(\delta)\\
P(X(t+\delta)=i-1\mid X(t)=i)&=\mu\delta+o(\delta),
\end{align}
$$

and $$q_{ij}=\begin{cases}\lambda & j=i+1,\\\mu & j=i-1,\\ 0 & \text{otherwise},\end{cases}\quad\forall 0<i<m.$$

If drawn, this describes something similar to a BD-process with no self-transitions once we ignore the negligible terms.
```

## Steady States
We tackle this by approximation with an object we already understand: the discrete-time Markov Chain $\{Z_n\}_{n=0}^\infty.$ Suppose the chain has a single recurrent class. This class is aperiodic for self-transition, although unlikely, has a non-zero probability of occurring whilst $\delta$ is small: $$\overline p_{ii}=1-\delta\sum_{j\ne i}q_{ij}+o(\delta).$$
To obtain the balance equations consider the following:
$$
\begin{align}
\pi_j&=\sum_{k=1}^m\pi_k\overline p_{kj}\\
&=\pi_j\overline p_{jj}+\sum_{k\ne j}\pi_k\overline p_{kj}\\
&=\pi_j-\delta\pi_j\sum_{k\ne j}(q_{jk}+o(\delta)/\delta)+\sum_{k\ne j}\pi_k(\delta q_{kj}+o(\delta))\\
\delta\pi_j\sum_{k\ne j}(q_{jk}+o(\delta)/\delta)&=\sum_{k\ne j}\pi_k(\delta q_{kj}+o(\delta))\\
\pi_j\sum_{k\ne j}(q_{jk}+o(\delta)/\delta)&=\sum_{k\ne j}\pi_k(q_{kj}+o(\delta)/\delta).
\end{align}
$$
As $\delta$ decreases to $0,$ the $o(\delta)$ terms go to $0$ even faster, giving us the **balance equations** for the continuous chain. Thus, $$\pi_j\sum_{k\ne j}q_{jk}=\sum_{k\ne j}\pi_kq_{kj}.$$
> [!thm]+ Steady-State Convergence
> Consider a continuous-time Markov Chain with a single recurrent class. Then, for states $j$ in that class, the **steady-state probabilities** $\pi_j$ have the following properties:
> 
> 1. For each $j$, $$\lim_{t\to\infty}P(X(t)=j\mid X(0)=i)=\pi_j,\quad\forall i.$$
> 2. The $\pi_j$ are the unique solutions to the equations
> $$
> \begin{align}
> \pi_j\sum_{k\ne j}q_{jk}&=\sum_{k\ne j}\pi_kq_{kj}.\\
> 1&=\sum_{k=1}^m\pi_k.
> \end{align}
> $$
> 3. We have that
> $$
> \begin{align}
> \pi_j&=0, & \forall j\text{ transient},\\
> \pi_j&>0, & \forall j\text{ recurrent}.
> \end{align}
> $$

Analogous to the discrete case, we can interpret the $\pi_j$ as the expected long-term frequency of the time that the process spends in time $j.$ Then, $\pi_kq_{kj}$ is the expected frequency of transitions from $k$ to $j.$ From this the balance equations express that the frequency of transitions out of $j$ (LHS of the equation) is equal to the frequency of transitions into $j$ (RHS of the equation).

## Birth-Death Processes
As with discrete-time Markov Chains, the states in a **BD process** can be arranged horizontally with each state only being able to transition immediately right, immediately left, or self-transition. In symbols, $$q_{ij}=0,\quad \forall |i-j|>1.$$
We may derive the **local balance equations** from the fact that, on average, the frequency of transitions from $i$ to $j$ must be the same as the frequency from $j$ to $i:$ $$\pi_jq_{ji}=\pi_iq_{ij},\quad\forall i,j.$$
