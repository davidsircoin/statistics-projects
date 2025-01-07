Tags: [[Information-Theory]], [[Entropy]], [[Shannon]], [[Stats]]

> *If the language is translated into binary digits (0 or 1) in the most efficient way, the entropy is the average number of binary digits required per letter of the original language.*

> [!rem] Conflicting Interpretation
> If I read his description of an ideal encoding correctly, he was encoding entire sequences, not symbol by symbol.

# Shannon Games
Approximating the entropy of natural languages requires that we give an $n$-th order approximation for sufficiently high $n.$ We would need to read a large amount of text for any commonly spoken language. Shannon introduces a more efficient approach:

> [!def] Shannon Game
> Given a fluent speaker of a language with a finite alphabet $\Sigma$ of $m$ symbols, present them a 'well-formed' string $s$ from the language with the goal to guess as many symbols of the string sequentially in reading order.

We could take strings from a standard text. Upon guessing wrongly, a participant could either be informed of the correct symbol and continue on or, more informatively, they may guess from the remaining symbols and we record the number of guesses until and including a correct guess for that position on the string. Laid out suggestively it might look like this:

$$
\begin{matrix}
s_1 & s_2 & s_3 & s_4 & \ldots \\
3 & 2 & 1 & 1 & \ldots
\end{matrix}
$$
This means that in 3 guesses the first symbol was guessed correctly, in 2 guesses the second was as well given that they knew the first, and so on. Consider an ideal player given all statistical knowledge of the language. For their first guess of the $n$-th symbol they choose the symbol $s$ maximising $\pi(s\mid \vec s)$ where $\vec s=(s_1,\ldots, s_{n-1})$ encodes the known symbols. If that was incorrect, they choose the next highest symbol and so on. Essentially this is an encoding of the string into a sequence of numbers from $1$ to however many symbols there are.

> [!def] Variable Declaration
> Let $f_n(\vec s)$ be the $m$-th most likely symbol given $\vec s$ and $q_n^N$ be the probability that $f_n(\vec s)$ is indeed the $N$-th symbol. That is, $$q_n^N=\sum_{\vec s} \pi(f_n(\vec s), \vec s),$$ where we sum over all $N-1$ tuples $\vec s.$

The $q_n^N$ well-approximate the frequency of $n$'s in the encoding given by the ideal player over a large number of games. We can view the player as applying the MAP estimator from Bayesian statistics repeatedly. There we know that the probability of error, conditioned on the observations, does not increase as we make more observations, hence it should be no surprise that 1. $q^{N+1}_n\geqslant q^{N}_n$ for in the left-hand side the choice $f_n(\vec s)$ is made with more knowledge, and 2. for any $n,$ the probability of being correct in the first $n$ guesses also does not decrease: $$Q_n^{N+1}=\sum_{k=1}^{n} q_k^{N+1}\geqslant \sum_{k=1}^{n} q_k^N=Q_n^N.$$
Thus,

> [!rmk] An Ideal Among Ideals
> The partial sums $q_{n}^N$ are bounded (at most 1), increasing functions of $N$ and hence approach a value $q_n^{\infty}$ as $N\to\infty,$ and similarly $Q_n^{N}\to Q_n^\infty.$ These may be thought of as the ideal predictor with infinite knowledge of the past.

Making an analogy with transducers allows us to generalise the argument to those transducers satisfying 2 properties:

> [!def] Instantly Reversible Transducers
> An **instantly reversible transducer (IRT)** is one connected to an ergodic source with the following properties and a finite output alphabet:
> 
> 1. The output symbol is a function of the current input and the prior $N-1$ symbols, represented by $f(\alpha, \vec s)$ where $\alpha$ is the current state of the source and $\vec s$ contains the prior $N-1$ symbols.
> 2. The original input can be recovered with certainty by applying certain operations on the reduced text given by the transducer. The operations, too, are only aware of the previous $N-1$ symbols of the reduced message.

These are enough to show that $Q_n^{N+1}\geqslant Q_n^{N}.$ Property (2) implies that IRTs are [[A-Mathematical-Theory-of-Communication#Transducers|non-singular]]. Among them the ideal predictor stands out by concentrating its output to a small group of output symbols more so than any other IRT.
## Bounds-on-Entropy-from-Games
Let $F_N$ be defined as in Shannon's original [[A-Mathematical-Theory-of-Communication#Entropy of Sources|paper]], roughly as the entropy of the $N$-th order approximation of the original language: $$F_N=-\sum_{\vec s,i}\pi(i,\vec s)\log\pi(i\mid\vec s).$$
We may estimate $F_N$ by use of the $q_n^N$ as follows: $$\sum_{i=1}^{m} i(q_i^N-q_{i+1}^N)\log i\leqslant F_N\leqslant -\sum_{i=1}^{m} q_i^N\log q_i^N=H(\vec q^N).$$
If $X$ is defined to have a distribution according to the $q_i^N$ and $Y$ according to $\pi(\vec s),$ then $F_N$ is really $H(X\mid Y)$ and $H(\vec q^N)=H(X)$ since the entropy of a non-singular transducer is the same as the entropy of its source. The upper-bound holds generally beyond an ideal predictor so long as the resulting transducer is non-singular. As we know, $H(X\mid Y)\leqslant H(X).$ The lower bound is harder to establish but can be done. Now we show these bounds are decreasing functions of $N.$ For the upper-bound this is simple. We know $q_i^{N+1}\geqslant q_i^N,$ so $\log q_i^{N+1}\geqslant\log q_i^N,$ hence
$$
\begin{align*}
\sum_{i=1}^{m} q_i^{N+1}\log q_{i}^{N+1}&\geqslant \sum_{i=1}^{m} q_i^N\log q_i^N\\
-\sum_{i=1}^{m} q_i^{N+1}\log q_{i}^{N+1}&\leqslant -\sum_{i=1}^{m} q_i^N\log q_i^N
\end{align*}
$$
For the lower-bound let $f(x)=x\log x$ and 'equalise' $q_i$ and $q_{i+1},$ for now omitting the superscript, by subtracting $\varepsilon$ from $q_i$ and adding it to $q_{i+1}.$ Let $U$ be the usual lower bound sum and $U'$ the same sum but replacing $q_i$ with $q_i-\varepsilon$ and same with $q_{i+1}.$ These differ only on 3 terms, all those which involve $q_i$ or $q_{i+1}:$
$$
\begin{align*}
U-U'&=(-(i-1) \log(i-1) + 2i\log i - (i+1)\log (i+1))\varepsilon\\
&=(-f(i-1)+2f(i)-f(i+1))\varepsilon
\end{align*}
$$
Showing that this difference is negative, after some algebra, amounts to showing $$x\log\left(\frac{x^{2}}{x^{2}-1}\right)<\log\left(\frac{x+1}{x-1}\right).$$
Looking at graphs shows this is true when $x>1.$ Thus $U<U'$ when equalising upward.

pp. 15