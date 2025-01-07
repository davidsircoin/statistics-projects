
Tags: [[Stats]], [[Probability-Theory]]

> [!def]+ Stochastic Process Definition
> A **stochastic process** is a model of an experiment that evolves in time, generating a sequence of numbers.
Each value in the sequence $\{s_i\}_{i\in I}$ is modelled by a random variable. Thus, the sequence $\{X_i\}_{i\in I}$ is a stochastic model and each $i$ is a slice of time. The experiment here is shared between all of them and a probability law defined on the sample space unambiguously determines the joint CDF of any subset of random variables. In general, in a stochastic model we are interested in:

- The **dependencies** between values at different times.
- The **long-term average** of the entire sequence.
- The probability that a certain event occurs within a given time (**boundary events**).

There are 2 major kinds of stochastic processes (though there are many beyond these):

1. **Arrival-Type Processes.** These processes have a notion of success or occurrence (where it either happens or does not), and it is always the same success or occurrence. The time between occurrences characterises the particular process, and so does the dependence between these 'arrival times.' We assume that the random variables modelling interarrival times are independent. Two major processes of these kinds are Bernoulli and Poisson processes.
2. **Markov Processes.** These models also evolve in time but future values are probabilistically dependent on prior and current values. 

Throughout we use $T$ as the random variable for interarrival time.
# Bernoulli Processes

> [!def]+ Definition
> A **Bernoulli process** is a stochastic process modelled by a countable sequence of IID Bernoulli random variables $\{X_i\}_{i=1}^\infty$ where, for each $i,$
> $$
> \begin{align*}
> P(X_i=1)&=P(\text{success at the $i$-th trial})=p,\\
> P(X_i=0)&=P(\text{failure at the $i$-th trial})=1-p.
> \end{align*}
> $$

$T$ is geometrically distributed.
## Independence and Memorylessness
Due to independence, what occurred in the past has no bearing on future trials. This has some nice consequences:
1. If $U$ and $V$ are disjoint non-empty subsets of the sequence, then any functions of elements of $U$ are independent from functions of the elements of $V.$ E.g. $(1-X_1)X_3X_6$ is independent from $X_2^{10}+\ln(X_5).$
2. If $n$ steps have elapsed, the future of the process is independent of the past and as such is also a Bernoulli process with parameter $p.$
3. Suppose $n$ steps have occurred in the process and let $T$ now record the time until the first success. Then $T-n$ records the remaining time until the first success. Since the future of the process is described by the very same Bernoulli process, $T-n$ has the same distribution as $T:$
$$
\begin{align*}
P(T-n=t\mid T>n)&=(1-p)^{t-1}p=P(T=t),\\
E[T-n\mid T>n]&=E[T].
\end{align*}
$$
Since the time between arrivals is geometric, it is a Bernoulli process.

This second fact we call **memorylessness.** This can be stated as

> [!rmk]+ Fresh-Start
> Starting observations at the $n$-th step of the process is indistinguishable from starting at the beginnning.

This remains true not only for any fixed $n,$ but also for a *random* time $N$ given that it is determined only by past stages and conveys no information about future stages.

```ad-summary
title:Random Start Time
collapse:close

Let $N$ be the first time where $X_{i-1}=X_i=1,$ i.e. the first time where we observe 2 successes in a row, reporting the time of the second success. What is the probability $P(X_{N+1}=X_{N+2}=0)$ that we fail twice in a row immediately following these 2 success (e.g. a sequence like $(1, 1, 0, 0, \ldots)$)? If we condition on a possible value of $N,$ we obtain the answer:
$$
\begin{align*}
P(X_{N+1}=X_{N+2}=0)&=\sum_{n=1}^\infty P(N=n)P(X_{N+1}=X_{N+2}=0|N=n)\\
&=\sum_{n=1}^\infty P(N=n)P(X_{n+1}=X_{n+2}=0|N=n)
\end{align*}
$$

By definition, $N=n$ iff the sequence $\{X_i\}_{i=1}^n$ satisfies a certain condition. Since they are independent from $\{X_{N+i}\}_{i=1}^\infty,$ we have that $$P(X_{n+1}=X_{n+2}=0|N=n)=P(X_{n+1}=X_{n+2}=0)=(1-p)^2.$$Thus, $$P(X_{N+1}=X_{N+2}=0)=\sum_{n=1}^\infty P(N=n)(1-p)^2=(1-p)^2.$$
```

## Alternative Description
Let $Y_k$ denote the time of the $k$-th success. The $k$-th interarrival time, then, is defined by $$T_1=Y_1,\quad\quad T_k=Y_k-Y_{k-1},\quad\forall k\leq 2.$$This represents the number of trials following the $(k-1)$-st success until the next success. We note, then, that $$Y_k=\sum_{n=1}^k[Y_n-Y_{n-1}]=\sum_{n=1}^kT_n.$$
The first of these, $T_1,$ follows a geometric distribution with parameter $p.$ Since the future of the process is also Bernoulli, $T_2$ is also geometric with the same parameter. The trials up to $T_1$ are independent from any future trials, so $T_2$ is independent from $T_1.$ Generalising we say that all $T_k$ are IID geometric random variables. With this we may describe a Bernoulli process as

> [!def]+ Alternative Characterisation
> A **Bernoulli process** is a stochastic process in which the sequence $\{T_k\}_{k=1}^\infty$ of IID geometric random variables with parameter $p$ models interarrival times. The $k$-th success is modelled by $$Y_k=\sum_{n=1}^kT_n.$$

From this we may derive the mean, variance, and PMF of $Y_k:$
$$
\begin{align*}
E[Y_k]&=\sum_{n=1}^kE[T_n]=\frac{k}p\\
V[Y_k]&=\sum_{n=1}^kV[T_n]=\frac{k(1-p)}{k^2}\\
p_{Y_k}(t)&={t-1\choose k-1}p^k(1-p)^{t-k},\quad\forall t\in\{x+k:x\in\mathbb{N}\}.
\end{align*}
$$
This PMF we call the **Pascal PMF of order** $k.$ We derive this by considering events of the form $\{Y_k=t\}$ where $t\geq k;$ consider now the events

- $A = \{t\text{ is a succes}\},$ and
- $B=\{k-1\text{ successes occured in the first }t-1\text{ trials}\}.$

Both must occur for $Y_k=t$ to occur—the first is obvious, and the second must occur else it would not come at the $k$-th place were we to order the successes. We have, then, by independence: $$p_{Y_k}(t)=P(Y_k=t)=P(A\cap B)=P(A)P(B)=p\cdot{t-1\choose k-1}p^{k-1}(1-p)^{t-k}.$$
## Splitting and Merging
Suppose we have a Bernoulli process $\{X_i\}_{i=1}^\infty$ with probability $p$ of success. Each time there is a success, we either accept or reject it, with probabilities $q$ and $1-q$ respectively. Assume that these accepting events are independent for different trials. If we write the failures (including the rejected successes) and the accepted successes as a sequence $\{Y_i\}_{i=1}^\infty,$ we have a Bernoulli process with probability of success $pq;$ we may also write the failures (including the accepted successes) and the rejected successes as a sequence $\{Z_i\}_{i=1}^\infty$ to obtain a Bernoulli process with probability of success $p(1-q).$ This we call **splitting.**

> [!def]+ Splitting
> Given a Bernoulli process $\{X_i\}_{i=1}^\infty,$ we may **split** it into two processes by accepting or rejecting a success $X_i$ with probability $q$ of acceptance:
> - $\{Y_i\}_{i=1}^\infty$ where we write only the accepted successes as a success and everything else as a failure. This process has a probability of success of $pq.$
> - $\{Z_i\}_{i=1}^\infty$ where we write only the rejected successes as a success. This has a success probability of $p(1-q).$

We also **merge** two *independent* Bernoulli processes with probabilities $p$ and $q$ respectively. Here, we record a success at time $i$ iff there is a success at $i$ in one of the processes. This gets us a Bernoulli process $\{Y_i\}_{i=1}^\infty$ with probability of success $$1-(1-p)(1-q)=p+q-pq.$$
> [!def]+ Merging
> If $\{X_i\}_{i=1}^\infty$ and $\{Z_i\}_{i=1}^\infty$ are independent Bernoulli processes with probabilities $p$ and $q,$ then we may **merge** them into a single Bernoulli process $\{Y_i\}_{i=1}^\infty$ which records a success at time $i$ if there was a success in either of the prior processes. This new process has a probability of success of $$1-(1-p)(1-q)=p+q+pq.$$

## Approximating Binomials with Poisson

> [!thm]+ 
> Let $Z\sim\mathcal{Poi}(\lambda)$ where $\lambda\in\mathbb{N}$ and let $S\sim\mathcal{Bin}(n, \dfrac{\lambda}n).$ If we fix $\lambda,$ then $$\lim_{n\to\infty}\pi_S(k)=\lim_{n\to\infty}\frac{n!}{k!(n-k)!}\cdot \frac{\lambda^k}{n^k}(1-\frac{\lambda}n)^{n-k}=\pi_Z(k)=e^{-\lambda}\frac{\lambda^k}{k!}.$$

If $n$ is large and $p$ is small, then $\mathcal{Poi}(np)$ appoximates $\mathcal{Bin}(n, p).$ This is specially useful when switching to a continuous time model.
# Poisson Processes
The Poisson process is the analogue of the Bernoulli process for continuous time. We define $$P(k, \tau)=P(\text{there are exactly $k$ successes in a time interval of length $\tau$}).$$
We further assume that this is the same for all intervals of length $\tau.$ Instead of a success probability $p,$ we have a **success rate, arrival rate, occurrence rate, or intensity** $\lambda.$ We denote the number of arrivals in a time interval of length $\tau$ by $N_\tau.$ When seeking $P(N_\tau=n)$ for $n\in\mathbb{N},$ since the probabilities are the same for any interval of length $\tau,$ we may focus on an initial segment of time of length $\tau.$
> [!def]+ Definition
> An arrival-type process is a **Poisson process** with intensity $\lambda$ iff the following hold:
> 
> 1. **Time-Homogeneity.** The probability $P(k, \tau)$ is the same for all time intervals of length $\tau.$
> 2. **Independence.** The number of arrivals in a particular interval is independent from the number of any other.
> 3. **Small Interval Probabilities.** The probabilities $P(k, \tau)$ satisfy
> $$
> \begin{align*}
> P(0, \tau)&=1-\lambda\tau+o(\tau),\\
> P(1, \tau)&=\lambda\tau+o_1(\tau),\\
> P(k, \tau)&=o_k(\tau) & 2\leq k\in\mathbb{N}.
> \end{align*}
> $$
> Where $o(\tau)$ and $o_k(\tau)$ are functions which satisfy $$\lim_{\tau\to 0}\frac{o(\tau)}\tau=0,\quad\lim_{\tau\to 0}\frac{o_k(\tau)}\tau=0.$$
The first and second properties have their clear analogies to the Bernoulli process. For the third property, the functions $o(\tau)$ and $o_k(\tau)$ are negligible for a sufficiently small time interval $\tau;$ these mirror the $O(x^2)$ in Taylor expansions. Thus, for small time intervals, $$P(0,\tau)\approx 1-\lambda\tau,\quad P(1, \tau)\approx\lambda\tau,\quad P(k\geq 2, \tau)\approx 0.$$
Further, if we divide $\tau$ into $\tau/\delta$ intervals of equal length $\delta,$ for a sufficiently small delta, $P(k, \tau)$ can be approximated with a Binomial PMF $S\sim\mathcal{Bin}(\dfrac{\tau}{\delta}, \lambda\delta).$ As we let $\delta$ go to zero, and the number of intervals go to infinity, the mean of this binomial stays as $\lambda\tau.$ Applying the approximation of the Binomial from the last section, where $n=\tau/\delta$ and $\lambda\tau$ in place of its lambda, we see that our Binomial PMF is of the appropriate form so, letting $\xi=1/\delta,$  $$\lim_{\tau/\delta\to\infty}\pi_S(k)=\lim_{\xi\to\infty}{\tau\xi \choose k}(\lambda\tau)^k(1-\lambda\tau)^{\tau\xi-k}=e^{-\lambda\tau}\frac{(\lambda\tau)^k}{k!}=\pi_{N_\tau}(k).$$
Given the Taylor expansion of $\exp(-\lambda\tau),$ we have that
$$
\begin{align*}
P(0,\tau)&=e^{-\lambda\tau}=1-\lambda\tau+o(\tau),\\
P(1,\tau)&=\lambda\tau\exp(-\lambda\tau)=\lambda\tau-\lambda^2\tau^2+O(\tau^3)=\lambda\tau+o_1(\tau).
\end{align*}
$$
Since we are dealing with a Poisson PMF,  $$E[N_\tau]=V[N_\tau]=\lambda\tau.$$
From this we derive the CDF of $T$ the time until the first arrival, and its corresponding PDF: $$F_T(t)=P(T\leq t)=1-P(T>t)=1-P(0, t)=1-e^{-\lambda t},\quad t\geq0.$$
Thus, $$\pi_T(t)=\lambda e^{-\lambda t},\quad t\geq0.$$
We see that the time until the first arrival is exponentially distributed and, since by independence this is also the interarrival time, interarrival time is also exponentially distributed.
$\quad$This table summarises the differences between a Poisson and Bernoulli process:

$\;$| Poisson | Bernoulli
 -|-|-
 Times of Arrival|Continuous|Discrete
 PMF of the Number of Arrivals in any Given Interval of Time | Poisson | Binomial
 Interarrival Time CDF | Exponential | Geometric
 Arrival Rate | $\dfrac{\lambda}{\text{unit time}}$|$\dfrac{p}{\text{trial}}$

## Independence and Memorylessness

> [!rmk]+ More Similarities to Bernoulli Processes
> Let $t>0$ be a given time and let $\overline T$ be the time of the first success after $t.$ The random variable $\overline T-t$ has an exponential distribution with parameter $\lambda$ and is independent from the history until $t.$ Thus, the history of a Poisson process after any given time may also be modelled as a Poisson process.

Like before, this works also for a random time $N.$
## Alternative Description
Let $Y_k$ denote the time of the $k$-th success. The $k$-th interarrival time, $T_k,$ the defined by $$T_1=Y_1,\quad\quad T_k=Y_k-Y_{k-1},\quad k\geq 2.$$
This represents the time between the $k$-th and $(k-1)$-st successes. Note, then, that as before $$Y_k=\sum_{i=1}^kT_i.$$
Given independence and memorylessness, after a success, we are given a fresh-start—given we have witnessed the $k$-th success, the time until the next obeys the same exponential PDF. The past is also independent from the future, so $\{T_k\}_{k=1}^\infty$ is a family of IID exponential random variables.
> [!def]+ Alternative Description
> Let $\{T_k\}_{k=1}^\infty$ be a family of IID exponential random variables representing interarrival times. The following sequence defines the time of the $k$-th success: $$Y_k=\sum_{i=1}^kT_i,\quad\quad\{Y_k\}_{k=1}^\infty,\quad k\geq 1.$$
> 
> This is a Poisson process.
We may easily derive the usual metrics about the $Y_k:$
$$
\begin{align*}
E[Y_k]&=E\left[\sum_{i=1}^kT_i\right]=\sum_{i=1}^kE[T_i]=\frac{k}\lambda,\\
V[T_k]&=V\left[\sum_{i=1}^kT_i\right]=\sum_{i=1}^kV[T_i]=\frac{k}{\lambda^2},\\
f_{Y_k}(y)&=\frac{\lambda^ky^{k-1}e^{-\lambda y}}{(k-1)!}, &y\geq0.
\end{align*}
$$
This PDF is known as the **Erlang PDF of order** $k.$
```ad-note
title:Derivation
collapse:close

The expectation and variance are trivial given the known facts of exponential distributions. For the PDF, for any $y\geq 0,$ note that $$\{Y_k\leq y\}=\{\text{The number of successes in $[0, y]$ is at least }k\}.$$Thus, $$F_{Y_k}(y)=1-P(Y_k>y)=1-\sum_{i=0}^{k-1}P(i, y)=1-\sum_{i=1}^{k-1}\frac{(y\lambda)^ie^{-y\lambda}}{i!}.$$Differntiating w.r.t. $y$ gets us the Erlang PDF of order $k.$
```

## Splitting and Merging
As before, we may split a Poisson process into 2 by either accepting a success with probability $p$ or rejecting it with probability $1-p,$ regardless of whether we accept or reject any other successes. This gives a Poisson process with rate $\lambda p$ and another with rate $\lambda(1-p).$
$\quad$We may also merge 2 independent Poisson processes with rates $\lambda_1$ and $\lambda_2$ by the same method as before: record a success if it happens in either process. The new process will be a Poisson process with rate $\lambda_1+\lambda_2.$ Each success has probabilities $$\dfrac{\lambda_1}{\lambda_1+\lambda_2}\text{ and }\dfrac{\lambda_2}{\lambda_1+\lambda_2},$$
of originating from the first and second process respectively. In general, we may merge $n$ Poisson processes with a family of corresponding rates $\{\lambda_i\}_{i=1}^n$ into a single Poisson process with rate $$\Lambda=\sum_{i=1}^n\lambda_i.$$
> [!thm]+ Poisson Approximation of the Sum of Arrival Processes
> If $Y$ is the sum—a merged process—of $n$ many arrival processes $\{X_i\}_{i=1}^n,$ of any kind, with success rates $\lambda_i,$ then we may approximate $Y$ with a Poisson process with rate $$\Lambda=\sum_{i=1}^n\lambda_i.$$

## Random Incidence Paradox
Suppose we have a Poisson process $\{T_i\}_{i=1}^\infty$ with rate $\lambda$ which starts at time $0.$ Let $t^*>0$ be a fixed time s.t. $P(T_1<t^*)$ is very likely. Let $L$ be the length of interarrival intervals (i.e. intervals with end points at the $k$-th and $(k+1)$-st success). Although we might expect this length to be exponentially distributed, it follows an Erlang PDF of order 2 (one of order 1 describes an exponential PDF).
$\quad$Indeed, let $U$ be the last success prior to $t^*$ and $V$ the first success after. Clearly $t^*\in[U, V]$ and $L=V-U.$ We may equivalently say $L=(t^*-U)+(V-t^*).$ The summands are independent and by memorylessness both can be modelled by the same Poisson process with rate $\lambda:$ $$P(t^*-U>x)=P(\text{no successes during }[t^*-x, t^*])=P(0, x)=e^{-\lambda x},\quad\forall x\geq 0;$$
we similarly establish this for $t^*-V.$ Thus, $L$ is a sum of independent exponential random variables with common parameter $\lambda,$ so it is described by an Erlang PDF of order 2 with mean and variance: $$E[L]=\frac{2}\lambda,\quad\quad V[L]=\frac{2}{\lambda^2}.$$
> [!rmk]+ Randomly Arriving in the Middle of a Poisson Process
> Therefore, if we start observing a Poisson process at any time after the start, we are more likely to be in a large interarrival interval rather than a smaller one (note that $2/\lambda>1/\lambda$), so if we know the time of the last success we should expect to be waiting a while until the next.

```ad-summary
title:Example in Non-Poisson Arrival Processes
collapse:open

Buses at a station arrive on the hour and then another 5 minutes after, so interarrival time alternates between 5 and 55 minutes. The average interarrival time is 30 minutes. If someone shows up within some hour uniformly at random, they fall into the 5 minute interval with probability 1/12 and in the 55 minute interval with probability 11/12. The expected interarrival interval length is, then, $$E[L]=5\frac{1}{12}+55\frac{11}{12}=50.83,$$larger than the average 30.
```
The strange disparity between the average interval length and the expected length can be explained by them referring to different **probabilistic mechanisms.** Even if both would seem intuitively to be the same, they can contradict. In this particular example, the random length of the $k$-th interarrival interval, for some fixed $k,$ is a different experiment than considering the random length of an interval which contains a fixed time $t.$ 