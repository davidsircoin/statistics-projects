Tags: [[Information-Theory]], [[Entropy]], [[Stats]]

> *'The fundamental problem of communication is that of reproducing at one point either exactly or approximately a message selected at another point.'*

To simplify our study, we do not, initially, only focus on those transmissions which are 'meaningful' but on all possible messages. Doing so accommodates for changes in convention or language. An achievement in this context is likely an achievement in the narrower situation. If there are $N$ many possible messages and they are selected uniformly at random, a monotonic function of $N$ could be regarded as a measure of the information given by a selection from the set. Out of all monotonic functions or families thereof, logarithms, due to their nice limiting properties and their frequency of use in the natural sciences, are most practical.

> [!rmk] Logarithms Offer a Ratio Scale
> Typically we make multiplicative comparisons of measures using a common standard and interpret the ratio as accurately reflecting an underlying truth. That is, if in a scenario we see there are $n$ units of an agreed upon method and in another there are $an$ units, for $a>1,$ we wish to say whatever these units measure appears $a$ times as much in the second scenario than in the first.

> [!def] Bits and Nats
> If a set $A$ contains $N$ messages, we say a message selected from $A$ contains $\log_2 N$ **bits** of information, $\log_{10}N$ **decimal digits,** and $\log N$ **natural bits** or **nats.** The choice of base is mainly determined by convenience.

For example, if we are only allowed 32 symbols, each symbol represents $\log_232=5$ bits of information.
# Three Kinds of Systems
There are 5 parts to the basic set up of a communication system:

$$
\begin{CD}
\fbox{Source} @>\text{Message}>> \fbox{Transmitter} @>\mathrm{Signal}>>\ldots @>\text{Received Signal}>>\fbox{Receiver}@>\mathrm{Message}>>\fbox{Us}\\
@. @. @AAA @. @.\\
@. @. \fbox{Noise} @. @.
\end{CD}
$$
The **channel** is everything in between and including the transmitter and receiver. How to model the randomness will depend on the kind of signal that is sent and received. Shannon identifies 3 kinds:
1. **Discrete** systems model the signals sent and received as DRVs.
2. **Continuous** systems model the signals involved as CRVs.
3. **Mixed** models utilise both discrete and continuous random variables.
## Discrete Systems
### Noiseless Channels

> [!def] Discrete Channels
> These channels are characterised by a finite set $S$ of symbols or messages $s_i,$ each with a time **duration** $t_i>0,$ and a function $N(\tau)$ counting the number of **allowed** sequences of symbols with a total duration of $\tau.$ The **capacity** of the system, the greatest rate at which information could be sent, is the limit $$C=\lim_{\tau \to \infty}\dfrac{\log N(\tau)}{\tau}.$$

Messages could consist of multiple symbols. Let there be $n$ symbols $s_i$ and let $\{t_i\}_{i=1}^{n}$ be the associated durations. Suppose all sequences are allowed. The duration of a sequence is simply the sum of the durations of the symbols occurring in the sequence, counting each instance separately. For the capacity, in general the number of sequences of duration $\tau$ is given by $$N(\tau)=\sum_{i=1}^{n} N(\tau-t_i).$$
$N(\tau-t_i)$ counts the allowed sequences of length $\tau$ ending in $s_i.$

> [!thm] Solution to Difference Equation
> For large $\tau, N(\tau)$ is asymptotic to $x_0^\tau$ where $x_0$ is the largest real solution to $$\sum_{i=1}^{n} x^{-t_i}=1,$$ or to $x_1^{-\tau}$ where $x_1^{-1}$ is the largest real solution to $$\sum_{i=1}^{n} x^{t_i}=1.$$
Thus, $$C=\lim_{\tau \to \infty}\dfrac{\log x_0^\tau}{\tau}=\lim_{\tau \to \infty}\log x_0=\log x_0.$$
Because of this asymptotic behaviour, the number of allowed sequences likely increases with time. If sequences ending in, for example, $s_i$ are not allowed but we allow those ending in $s_i$ followed by $s_j$ for $j\ne i,$ we treat $s_is_j$ as symbols with duration $t_i+t_j$ respectively.

> [!def] Closure
> If $S$ is a set of symbols, then the **appended closure** of or the set **generated** by $S,$ denoted $\mathrm{cl}(S), \overline{S},$ or $\langle S \rangle,$ is the smallest set intersecting $S$ s.t. all allowed sequences from $S$ can be obtained recursively as follows:
> 1. $s$ for any $s\in \langle S \rangle$ is allowed.
> 2. If $\{s_i\}_{i=1}^{n}$ is an allowed sequence from $S,$ then $\{s_i\}_{i=1}^{n+1}$ is allowed for any $s_{n+1}\in \langle S \rangle.$

Starting from $S,$ to generate $\langle S \rangle$ the first condition tells us to discard all elements in $S$ which by themselves are not an allowed sequence and the second tells us to add enough concatenated symbols until the set of allowed sequences is closed under the operation of appending any symbol from our set to the end of the sequence. Now, when setting up the characteristic equation of $N(\tau),$ we use the durations of the symbols in $\langle S \rangle.$ More restrictions require further modifications but this should illustrate the general procedure to be used when counting sequences of a certain length.

```ad-example
title:Telegraphy
collapse:closed

The following are symbols composing the allowed sequences and we send them by open and closing the communication line for a specified duration:
1. A dot closing the line for 1 time unit and then opening it for another unit.
2. A dash closing for 3 units and then opening for 1 unit.
3. A letter space opening the line for 3 units.
4. A word space opening the line for 6 units.

No spaces follow each other and may not be the first nor last symbols in a sequence. The generated set contains a dot, a dash, a letter space followed by a dot, a letter space followed by a dash, a word space followed by a dot, and a word space followed by a dash, with durations, respectively, of $2,4,5,7,8,$ and $10.$ Then, we are to solve $$N(\tau)=N(\tau-2)+N(\tau-4)+N(\tau-5)+N(\tau-7)+N(\tau-8)+N(\tau-10).$$
Hence $C=-\log \mu_0\approx0.539$ where $\mu_0$ is the largest real root of $$\mu^2+\mu^4+\mu^5+\mu^7+\mu^8+\mu^{10}=1.$$
```

If one wishes to avoid these modifications, there is an alternative approach. Suppose there is a DFA whose input language is $S.$ We say a symbol $s$ **leads** to state $i$ from state $j$ only if reading $s$ at state $j$ could transition us to $i.$ Let $S_{i,j}$ be the set of all symbols leading to $j$ from $i$ and let $\tau(s)$ be the duration of $s.$

> [!thm] General Solution
> If a discrete, noiseless communication system with $n$ symbols could be described by a DFA and $M$ is the $n\times n$ matrix with entries of the form $\displaystyle\sum_{s\in S_{i,j}}x^{-\tau(s)}$ for all $i,j\leqslant n,$ then $C=\log x_0$ where $x_0$ is the largest real solution to $$|M-I_{n\times n}|=0.$$

### Modelling the Source
Typical designs of an information source incorporate statistical facts about what sorts of messages are transmitted into the encoding of these messages for transmission. In Telegraphy, say, the length of the code of a letter is proportional to its frequency of appearance. Hence E, the most common letter in English, is a dot. This motivates the following definition:

> [!def] Discrete Sources
> A **discrete source** of information generates at most countable sequences of symbols, each member of a sequence chosen according to probabilities that may depend on prior choices but not on future ones.

The influence of probabilities on our choice of symbols produced shall serve to develop interpretations for entropy. This definition describes a discrete stochastic process with finitely many states. The number of prior symbols influencing the transition probabilities determines what kind of process this is.

> [!def] $n$-grams
> An **$n$-gram** is a discrete stochastic process $\{X_i\}_{i=0}^{\infty}$ with finitely many states s.t. if $\vec i=(i_{m+1},\ldots, i_{m+n-1})$ and $\vec X=(X_{m+1},\ldots, X_{m+n-1})$ are $n-1$ tuples of states and variables respectively, then $$P(X_{m+n}=j\mid \vec X=\vec i,X_{0:m}=s_{0:m})=P(X_{m+n}=j\mid \vec X=\vec i),$$
> for any states $\vec s.$ An $n$-gram is **time-homogeneous** only if $$P(X_{m+n}=j\mid\vec X=\vec i)=P(X_{n-1}=j\mid X_{n-2}=i_{n-2},\ldots X_0=i_0).$$
> If this holds, we denote these transition probabilities as $p_{\vec i, j}.$ For any $\vec i,$ it should hold that $$\sum_{j\in S}p_{\vec i,j}=1.$$

All $n$-grams are time-homogeneous unless otherwise stated. All $n$-grams with $m$ states are equivalent to a Markov Chain with at most $m^{n-1}$ states. Modelling a human source, one producing messages in a (possibly coded) natural language, as an $n$-gram gives multiple orders of approximations.

> [!rmk] Orders of Approximations
> - A zero-order approximation holds the messages from the language as IID uniform variables.
> - The first-order approximation assigns as probabilities the frequencies with which a symbol appears in English, though the variables are still independent.
> - For $n>1,$ the $n$-th-order approximation is an $n$-gram where we assign to $p_{\vec i, j}$ the frequency with which $j$ follows the sequence $\vec i$ in natural language.

Beyond a third order approximation, these become cumbersome and instead Shannon recommends we treat words as whole unit—as states—and repeat the approximation process with these new symbols. Increases in complexity like this could continue but require a great deal more onerous.
### Ergodic and Mixed Sources

> [!def] Ergodic Markov Chain
> An **Ergodic** Markov Chain has a single, aperiodic recurrent class in which all mean recurrent times are finite.

Discrete sources represented by an ergodic process are those in which sequences of strings, as their length increases, almost surely have an average proportion, say, $\pi_i$ of their symbols be $s_i,$ regardless of the sequences. Those deviating from this behaviour are in a null set, one of probability 0. Aperiodicity may be alternatively characterised as follows: the gcd of the lengths of all cycles in the graph of the chain is 1. Periodic sources are not of much importance in communication. Some sources, however, may not be described by a single recurrent, aperiodic class but many.

> [!def] Mixed Sources
> A discrete source is **mixed** only if it is described by the graph of a markov chain with multiple, disjoint ergodic classes.

As with mixed random variables, the long-term behaviour of a mixed source with symbols in $S$ and ergodic sub-processes $\{S_i\}_{i=1}^{n}$ by multiplying the steady-state probabilities $\{\pi_{i,j}\}_{j\in S_i},$ where $\pi_{i,j}$ is the average proportion of symbols in sequences from $S_i$ that are the $j$-th symbol in $S_i,$ by the probability $a_i$ of being absorbed into $S_i.$ Thus the steady-state probabilities of $S$ are of the form $a_i\pi_{i,j}.$ We might interpret this as forming a sequence first by choosing a class $S_i$ with probability $a_i$ and choosing the $j$-th symbol from $S_i$ with probability $\pi_{i,j}.$

> [!rmk] All Sources are Assumed to be Ergodic Unless Otherwise Stated

# Entropy
Given a discrete partition $\{A_i\}_{i\in I}$ of the sample space, we wish to measure how much information is produced (or the rate of production) of a 'selection' of an event $A_i$ with probability $P(A_i)$ by measuring how much 'choice' or 'uncertainty' was involved. Only the probabilities of the events matter, not the events themselves, so the measure will be a function of the probabilities. Let $X$ be a random variable taking on the value $i$ with probability $P(A_i).$ Whatever this measure $H(X)$ is, it must satisfy the following:
1. It should be continuous in the $P(A_i).$
2. If $I$ is finite, with cardinality $n,$ and the $A_i$ are all equally likely, then $H$ should increase as $n$ increases; the finer a partition is made, the more possibilities there are. Intuitively, there is more uncertainty when there are more options.
3. Suppose $X$ is a mixed random variable with a distribution $\displaystyle\sum_{k=1}^{n}p_kF_{Y_k}(x)$ where each $Y_k$ is discrete. Then, $$H(X)=\sum_{k=1}^{n} p_kH(Y_k).$$

It can be shown that these restrictions determine the form of $H:$
> [!thm]
> The only function $H$ satisfying the above requirements is $$H(X)=-K\sum_{x}\pi(x)\log\pi(x),$$
> where $K$ is a positive constant.

The constant $K$ amounts to a choice in units so henceforth it is excluded. The concept already existed in statistical mechanics under the name 'entropy.'

> [!def] Entropy
> The entropy of a discrete random variable $X$ is $$H(X)=-\sum_x\pi(x)\log\pi(x).$$

The measure could be read as the average amount of information produced per selection, as $E[-\log\pi_X(X)].$ Later we expand on this point when discussing the fundamental theorem of noiseless channels. If $X$ has a finite range, $H(X)=0$ iff $\pi(x)=0$ except for one value, otherwise $H(X)>0.$ As we desired, the function is maximised when $X$ is a uniform random variable. Consider $\pi(x)$ insofar as it is a number. For any $x,$ the partial derivative of $H(X)$ w.r.t. $\pi(x)$ is $$\dfrac{\partial}{ \partial \pi(x) }\left(H(X)\right)=\log \pi(x)+1.$$
If this is $0,$ then $\pi(x)=e^{-1}.$ However, this does not yield a normalised distribution and needs to be scaled by $e/n.$ That is, $$\pi(x)=\dfrac{1}{n}.$$
Substituting these values into $H(X)$ gets us $$H(X)=-\sum_x\pi(x)\log\pi(x)=\sum_x\dfrac{1}{n}\log n=\log n .$$
The second equality follows since there are $n$ possible values of $x.$
$\quad$If $X$ and $Y$ are discrete random variables and $Z=(X, Y),$ then $$H(Z)=-\sum_x\sum_y\pi(x,y)\log\pi(x,y) .$$
This motivates the following definition:
> [!def] Joint Entropy
> If $X$ and $Y$ are discrete random variables, their **joint entropy** is defined as $$H(X, Y)=-\sum_x\sum_y\pi(x,y)\log\pi(x,y).$$

> [!thm]
> It is easy to show the following:
> $$H(X, Y)\leqslant H(X)+H(Y),$$
> with equality only when $X$ and $Y$ are independent.

If uniform variables maximise $H,$ certainly any function $Y=g(X)$ of $X$ whose probabilities are closer to a uniform distribution than those of $X$ ought to have a higher entropy.

> [!thm] *Equalising Increases $H$*
> For any value $x$ in the range of $X,$ let $\{a_{x,x'}\}_{x'\in \operatorname{ran}X}$ be a sequence of non-negative constants s.t. $\displaystyle\sum_{x}a_{x,x'}=\sum_{x'}a_{x,x'}=1.$ Define a variable $Y$ to take on the value $x$ with probability $$\pi_Y(x)=\sum_{x'}a_{x,x'}\pi_X(x').$$
> Then, $H(Y)\geqslant H(X)$ with equality only if $\{\pi_Y(y) : y\in \operatorname{ran}Y\}=\{\pi_X(x) : x\in \operatorname{ran}X\}.$

For joint DRVs $X,Y,$ the amount of 'choice' in picking a value of $X$ might change if we know that $Y=y.$ There is a natural extension of entropy to model these situations.

> [!def] Conditional Entropy
> The **conditional entropy** of $X$ given $Y$ is the quantity
> $$H(X\mid Y)=-\sum_{x}\sum_y\pi(x,y)\log\pi(x\mid y).$$

This should read as the average entropy of $X$ given we know $Y=y,$ weighted according to $\pi(y)$ so that more likely events are prioritised. By substitution of $\pi(y)$ in $\pi(x\mid y),$ the TPT yields the following:

> [!thm]
> $$H(X,Y)=H(X)+H(Y\mid X)=H(Y)+H(X\mid Y).$$

Combining it with a previous theorem we have that 

> [!thm]
> $$H(X\mid Y)\leqslant H(X),$$
> with equality iff $X$ and $Y$ are independent.

Additional knowledge lowers our uncertainty unless that knowledge is of something independent of, and hence uninformative to, the phenomenon at hand.
## Entropy of Sources
Suppose we have a discrete source described by an ergodic Markov chain with finitely many states. For any state $i,$ there is a valid distribution $p_{i,j}$ for the next symbol being $j.$ Let $Y_i$ be described by those conditional probabilities, let $\pi(i)=p_i,$ and let $$H_i=H(Y_i)=-\sum_{j\in S}p_{i,j}\log p_{i,j}.$$
First there is a measure common to all such sources:

> [!rmk] Entropy of a Source per Symbol
> The following may be interpreted as the entropy of a source—the average amount of information—per symbol:
> $$H=\sum_{i\in S}p_iH_i=-\sum_{i,j\in S}p_ip_{i,j}\log p_{i,j}=E[H_{X_0}].$$
> 
> The states are typically the symbols of the system, or, for $n$-grams, sequences of symbols, so $H_i$ is the entropy at symbol (or the sequence) $i.$ Clearly $E[H_{X_0}]$ is the expected entropy of the states.

If the process goes on at a particular rate of $\nu$ symbols per second, there is also a rate of information per second: $$H'=\nu H.$$

> [!thm]
> If $\{\pi_i\}_{i\in S}$ is the set of steady-state probabilities, then $$H'=\sum_{i\in S}\pi_iH_i.$$

> [!thm] *Estimate of $H$*
> Given $\varepsilon,\delta>0,$ there is a natural $N_0$ s.t. for any $N\geqslant N_0,$ the sequences of length $N$ are of 2 kinds:
> 1. Those whose total probability is below $\varepsilon.$
> 2. Sequences $s$ whose probability $p_s$ satisfy $$\left| -\dfrac{\log p_s}{N}-H \right|<\delta .$$
> That is to say, $-\log p_s/N$ converges in probability to $H.$

For the next result, arrange the sequences of length $N$ in decreasing order of probability $p_1\geqslant p_2\geqslant \ldots\geqslant p_n,$ supposing there $n$ many sequences. Let $$\chi_N(q)=\min\left\{ m\in\mathbb{N} : \displaystyle\sum_{i=1}^{m}p_i\geqslant q \right\}.$$

> [!thm]
> If $q\in(0,1),$ then $$\lim_{N \to \infty}\dfrac{\log\chi_N(q)}{N}=H.$$

When considering only the most probable sequences of length $N$ whose total probability (the probability that any of them are seen) is at least $q,$ $\log\chi_N(q)$ can be seen as the amount of information—the number of bits—needed to specify a particular sequence from this set of the $\chi_N(q)$ most probable sequences. Each of these sequences has $N$ symbols so $\dfrac{\log\chi_N(q)}{N}$ is the rate of bits used, per symbol, to specify the sequence. If we choose $q$ to be a threshold for 'reasonably probable' sequences so that the sequences coming after $\chi_N(q)$ are deemed too improbable, no matter what $q$ is, so long as it is not $0$ nor $1,$ the rate of bits per symbol, when the sequences are very long, is a good estimate for $H.$

> [!rmk] Put differently, $H$ is approximately the rate of bits per symbol for sequences of any probability between 0 and 1.

For long sequences, then, we may treat them as if only the high probability group existed: $$\chi_X(q)=2^{\log_2\chi_N(q)}=2^{\frac{\log_2\chi_N(q)}{N}N}\approx 2^{HN}.$$
Furthermore, due to the last result, again for large $N,$ we may assume the sequences are roughly equally likely with probability $2^{-HN}.$ $-\dfrac{\log p_s}{N}\approx H$ for any sequence $s$ so the probability $p_s$ can be recovered as $$p_s\approx 2^{-HN}.$$
The following theorems show $H$ and $H'$ can be determined through limits from the probabilities of the sequences without reference to states or transition probabilities.

> [!thm] *Probability Estimate of $H$*
> Let $p_s$ be the probability of a sequence $s$ of length $N$ and let $$G_N=-\dfrac{1}{N}\sum_sp_s\log p_s.$$
> Then, $G_N$ is a decreasing function of $N$ and $$\lim_{N \to \infty}G_N=H.$$

> [!thm] *A Better Approximation*
> Let $$F_N=-\sum_{s,i}\pi(s,i)\log\pi(i\mid s),$$
> where $s$ ranges over sequences of length $N-1$ and $i$ is the index of the $i$-th symbol. Then, $F_N$ is a decreasing function of $N$ and
> $$
> \begin{align*}
> F_N&=NG_N-(N-1)G_N\\
> G_N&=\dfrac{1}{N}\sum_{k=1}^{N} F_k\\
> F_N&\leqslant G_N.
> \end{align*}
> $$
> Thus, $\displaystyle\lim_{N \to \infty}F_N=H.$

$F_N$ is not only a better approximation of $H$ than $G_N,$ it is also the entropy of the $N$-th order approximation of a source described [[A-Mathematical-Theory-of-Communication#Discrete Systems#Modelling the Source|above]]. If the source is an $N$-gram, then $F_N=H.$

> [!def] Relative Entropy and Redundancy
> Suppose we have a source described by $m$ states. Let $H$ be its entropy and let $H_{\mathrm{max}}$ be the largest entropy over all distributions of the same symbols. The **relative entropy** of the source is $\dfrac{H}{H_{\mathrm{max}}}$ and the **redundancy** is $1-\dfrac{H}{H_{\mathrm{max}}}.$

# Transducers
> [!def] Discrete Transfucer
> Either a transmitter or receiver of a discrete system. Its inputs are sequences of symbols from a particular set and its outputs are sequences of symbols from a possibly distinct set.

In essence these formalise encodings. The output a transducer may depend upon prior symbols and so might require us to model some memory. We shall assume its memory is finite, that there are finitely many states, and that its output and following state depend on the current symbol and state. This describes certain kinds of abstract machines. For simplicity we separate the transition function of such a machine into two:

> [!def] Formality
> Let $\{X_n\}_{n=0}^{\infty}$ be the sequence of input symbols, $\{Y_n\}_{n=0}^{\infty}$ be the sequence of output symbols, and let $\{S_n\}_{n=0}^{\infty}$ be a sequence of states from a finite set. In a transducer there are functions $f$ and $g$ s.t. $$Y_n=f(X_n, S_n),\quad\quad S_{n+1}=g(X_n, S_n).$$

If the output symbols of one transducer are the input symbols of another, they may be linked to produce a larger transducer.

> [!def] Inverses
> Let $(f_1,g_1)$ be a pair of functions describing one transducer with states $S_n$ and $(f_2, g_2)$ a pair describing another with states $\sigma_n.$ Suppose the first may be linked with the second to produce a larger transducer. If $f_2(f_1(X_n, S_n), \sigma_{n})=X_n,$ we say the first transducer is **non-singular** and that the second is the **inverse** of the first.

It is often said a homomorphic image in algebra is not of greater complexity than the domain. Soon we will see this applies to these processes when transducers are thought of as 'structure preserving maps' or morphisms.

> [!thm]
> Suppose we have a finite-state Markov chain $\{X_n\}_{n=0}^{\infty}$ with a transducer pair $(f,g),$ a finite set of states for the transducer, and an initial state $S_0.$ Then, $\{f(X_n, S_n)\}_{n=0}^{\infty}$ is also a Markov chain representing a discrete source whose entropy per unit of time is at most the entropy of the source. If the transducer is non-singular, the entropies are equal.

If $\alpha_0$ is the initial state of a source producing $\{X_n\}_{n=1}^{\infty}$ and $S_0$ the initial state of a transducer taking the $X_i$ as input and producing $\{Y_n\}_{n=1}^{\infty},$ we may represent the combined system as a state space of pairs $(\alpha_k, S_k)$ where we write
$$
\begin{CD}
(\alpha_1,S_1) @>y_i, \pi(y_i)>x_j,\pi(x_j)>(\alpha_2, S_2)
\end{CD}
$$
if and only if $\pi(x_j)>0$ and $g(S_1, x_j)=S_2.$ Given such a set up, the entropy of the system, as before, is the sum whose terms are $-\pi(\alpha_i,S_i)\pi(\alpha_i,S_i\mid \alpha_j,S_j)\log\pi(\alpha_i,S_i\mid\alpha_j,S_j).$ For non-singular transducers these pairs may be replaced with output symbols. If that is so, connect the output to its inverse. Let $H_1', H_2',$ and $H_3'$ be the entropy of the source, the first transducer, and the composition of the first and its inverse respectively, all per unit time. Then, $H_1'\geqslant H_2'\geqslant H_3'=H_1'$ and hence $H_1'=H_2'.$ In this sense passing a message through a transducer does not increase the uncertainty on average.

> [!thm]
> Suppose there is a source with constraints on what sequences may be produced with capacity $C=\log W,$ let $p_{i,j}^{(s)}$ be the probability of transitioning from state $i$ to $j$ by producing symbol $s,$ and let $\ell_{i,j}^{(s)}$ be the duration of $s$ when transitioning from state $i$ to $j.$ If we assign $$p_{i,j}^{(s)}=\dfrac{B_j}{B_i}W^{-\ell_{i,j}^{(s)}}$$
> where the $B_i$ satisfy $$B_i=\sum_{s\in S(i),j\in A(i)}B_jW^{-\ell_{i,j}^{(s)}},$$
> $S(i)$ is the set of symbols leading from $i,$ and $A(i)$ is the set of states $j$ s.t. $p_{i,j}>0,$ then $H$ is maximised and $H=C$

By setting the production probabilities appropriately, we can maximise the entropy.
# Fundamental Theorem of Noiseless Channels
Now we justify our interpretation that $H$ is the rate of information produced, either per symbol or per unit of time, by showing it determines the channel capacity necessary for most efficient coding.

> [!thm] *Fundamental Theorem of Noiseless Channels*
> Let $H$ be the entropy of a source and $C$ the capacity. No encoding of messages from the source may transmit (non-singularly) information at an average rate greater than $C/H$ and there is an encoding whose average rate of transmission is arbitrarily close to $C/H.$

The first part follows from noting the entropy per unit time of the input of a non-singular transducer is the same measure for its source $H'$ and this amount is at most the capacity $C.$ Then, $$H'\leqslant C\implies \dfrac{H'}{H}\leqslant \dfrac{C}{H}.$$
The first ratio gives the rate of symbols per unit time. The second part in essence says that for arbitrarily small $\varepsilon>0,$ there is an encoding with entropy $\dfrac{C}{H}-\varepsilon.$ Arrange the messages of length $N$ in decreasing order of probability and suppose $\{p_i\}_{i=1}^{n}$ are their probabilities, assuming there $n$ such sequences. Let $P_s=\displaystyle\sum_{i=1}^{s-1}p_i,$ i.e. the sum of probabilities up to but not including $p_s.$ Encode the messages in binary as follows: expand $P_s$ in binary up to $m_s$ places where $m_s$ is the natural number satisfying $$-\log_2p_s\leqslant m_s\leqslant 1-\log_2p_s.$$
On the interval $(0,1),$ $-\log_2x$ [quickly](https://www.desmos.com/calculator/efcv40bf3a) approaches infinity as $x\to0.$ High probability messages are given shorter codes and low probability sequences are given longer codes. From this it follows that $$2^{-m_s}\leqslant p_s< 2^{1-m_s}.$$
The difference between $P_s$ and $P_{s+1}$ is at least $2^{-m_s},$ so each message receives a unique expansion length. This is an injective mapping and thus it is possible to recover a message from its code.

> [!rmk] Binary Ascription
> If we are working with the Latin alphabet, the length $N$ of a message $s=\mathrm{AB}$ is 2, yet its length, once transcribed into a binary string, say, `01000001 01000010`, could be $16.$ The encoding of this message might be `010` and so $m_s=3.$

The average rate of bits per symbols in a sequence of length $N$ is the following amount: $$\hat H=E\left[ \dfrac{1}{N}m_{S} \right] =\sum_{s=1}^n\dfrac{m_s}{N}p_s.$$
The message $s$ is of length $N$ and it is encoded with $m_s$ many bits, thus the rate of bits per symbol is $m_s/N.$ Let $G_N=-\dfrac{1}{N}\displaystyle\sum_{s=1}^np_s\log_2 p_s.$ From the definition of $m_s$ we have that $$-\dfrac{1}{N}\sum_{s=1}^np_s\log_2p_s\leqslant \dfrac{1}{N}\sum_{s=1}^nm_sp_s<\dfrac{1}{N}\sum_{s=1}^np_s(1-\log_2p_s),$$
and hence $$G_N\leqslant \hat H<G_N+\dfrac{1}{N}.$$
As $N$ increases, $G_N$ approaches $H$ (from the [[A-Mathematical-Theory-of-Communication#Entropy of Sources|probability estimate]] of $H$), the entropy of the source per symbol, and so $\hat H\to H.$ Due to this we are justified in interpreting the entropy of a source as the average rate of information per symbol.
## Interpretation
The entropy of a transducer using other encoding methods cannot always be interpreted as the mean rate of information per symbol. New limiting arguments are needed for each method. It is possible, however, to compare the efficiency of encodings in a noiseless system by how close they are to the ideal $C/H.$
$\quad$The maximum entropy of a source represented by an $n$-gram, although at first seems difficult to find, is the induced distribution by a uniform distribution over sequences of length $n.$ Suppose we have $m$ symbols, that there are $N$ such sequences, and there are $M$ many sequences of length $n-1$. The probability of a sequence $\vec s$ is given by $$P(X_n=s_n,X_{n-1}=s_{n-1},\ldots, X_1=s_1).$$
This is not a conditional probability and indeed, assuming the $n$-gram is homogeneous, implies the probability of any subsequence, in particular sequences of length 1, follow a uniform distribution when $\pi(\vec s)=1/N.$ Then,
$$
\begin{align*}
H&=-\sum_{\vec s\in S^{n-1}}\sum_{s_n\in S}\pi(\vec s)\pi(s_n\mid \vec s)\log\pi(s_n\mid \vec s)\\
&=-\sum_{\vec s\in S^{n-1}}\sum_{s_n\in S}\pi(\vec s, s_n)(\log\pi(\vec s, s_n)-\log\pi(\vec s))\\
&=-\sum_{\vec s\in S^{n-1}}\sum_{s_n\in S}\dfrac{1}{N}(-\log N+\log M)\\
&=\sum_{\vec s\in S^{n-1}}\sum_{s_n\in S}\dfrac{1}{N}(\log N-\log M)\\
&=\sum_{\vec s\in S^{n-1}}m\dfrac{1}{mM}(\log N-\log M) && \mbox{clearly }N=mM\\
&=M\dfrac{1}{M}\log\left( \dfrac{N}{M} \right)\\
&=\log\left( \dfrac{N}{M} \right)\\
&=\log\left( \dfrac{mM}{M} \right) \\
&=\log m
\end{align*}
$$
The encoding described previously for this ideal case, in bits, assigns bits of equal length, specifically of length $\left\lceil \log_2 m \right\rceil.$
# Discrete Channel with Noise
The kind of noise to be studied is one which modifies a signal in a non-deterministic or unknown manner. If we knew exactly how the noise altered the signal, simply apply the inverse transformation.

> [!def] Noise
> Let $N$ and $S$ be random variables with $N$ representing **noise** and $S$ representing the signal sent. The received signal is the variable $R = f(S,N)$ for some function $f.$

The probabilities are now over a 'product space' of states and alphabets.

> [!def] Noisy Channel
> A stochastic process with finitely many states where if  $\alpha$ and $\beta$ are states, $i$ is a transmitted symbol, and $j$ is a received symbol, then the probability that from state $\alpha$ when symbol $i$ is sent we shall receive symbol $j$ and transition to state $\beta$ is denoted $p_{\alpha,i}(\beta,j).$

If successive symbols are independently modified (i.e. the noise is independent of the symbols), there is a single state $\alpha$ and $p_{\alpha,i}(\alpha, j)=p_{i,j}.$ The states represent the dependence of the noise on the history of the process. Restricting ourselves to finitely many states means that the noise can only depend on finitely many steps back. Consider now attaching a source to the input of the channel.

> [!rmk] Notation
> Let $\{X_n\}_{n=1}^{\infty}$ be the process of the source or input—for our purposes these are essentially the same for non-singular transducers—and let $\{Y_n\}_{n=1}^{\infty}$ be the process of the received signal. For convenience we denote their entropies with $H(X)$ and $H(Y)$ respectively.

If the channel is noiseless, $H(X)=H(Y).$ For the rate of information (per symbol) produced by the noisy system we might consider $H(X),H(Y),H(X,Y),H(X\mid Y),$ $H(Y\mid X),$ or some function of them. The first two are obviously not proper. The rate of a noisy system ought to capture the extent to which the system is 'responsible' for correctly transmitting bits. Then, adding noise to the input signal ought to lower the rate of information since some of that information was not the result of the system but of noise. Reporting the entropy of the received signal, $H(Y),$ gives the system 'credit' for incorrectly sent bits. That is lost information. It is tempting to say $H(Y\mid X)$ is the right measure, yet even conditional entropies fall short. Suppose a source, represented by an $n$-gram, produces sequences from $\{0,1\}$ with all sequences of length $n$ having equal probability; $H(X)=1.$ Now assume a symbol is incorrectly transmitted with probability $1/100,$ i.e. $$\pi(0\mid 1)=\pi(1\mid0)=1/100.$$
$H(X\mid Y)=H(Y\mid X)\approx0.081.$ This is implausible because most of the information is likely unchanged yet the rate is ~8% of a noiseless channel. $H(X\mid Y)$ could be read as the average entropy of a source whose production must start with the transducer in state $y,$ weighted by $\pi(y).$ We are not interested in how much information a source could generate when constrained in this way; rather, we are interested in how much information is received, how much is fully transmitted, though $H(X\mid Y)$ could be seen as measuring how uncertain we are of what the original message is or the amount of choice involved when starting in a certain state. Similarly, $H(Y\mid X)$ is the average entropy (rate of information) of a transducer whose input source starts at state $x,$ weighted by $\pi(x).$ Imagine instead of noise we had a malicious actor who muddled the signal in a way determined by the distribution of the noise. Now there is an alternative interpretation: $H(Y\mid X)$ is the average amount of choice had by the actor to force us into a state $y$ given that the source started in state $x,$ in addition to the choice had by the source with the same constraint. The choice of the agent should not be counted but subtracted. They are eliminating information yet $H(Y\mid X)$ would count that positively. In line with wanting to be close to $H(X)$ when there is little noise, a good definition is to subtract the information lost from $H(X).$ Maybe the information lost is measured by the average error in transmission $\varepsilon.$ This does not consider, however, our not knowing where an error occurred, only that a proportion of the message was likely affected. An error in high-probability messages will lose more information than an error in a low-probability message. Instead we should think of lost information as added ambiguity, and ambiguities are measured with entropy. Specifically, we mentioned prior that $H(X\mid Y)$ could be interpreted as the amount of ambiguity typically experienced when all we know is the message received and the state of the transducer. Then,

> [!def] Transmission Rate and Equivocation
> The rate of information transmitted in a noisy system is given by $R=H(X)-H(X\mid Y).$ We call $H(X\mid Y)$ the **equivocation.**

Imagine an observer noting the sent and recorded signal. It sends this information to a correcting device which recovers the original signal.

![[Diagram-of-Correction-System.png]]

We shall call the channel through which the correction data travels the **correction channel.**

> [!thm]
> If the correction channel has a capacity $C_c=H(X\mid Y)$ and is noiseless, we may encode the correction data as to send it over and correct all but an arbitrarily small fraction $\varepsilon$ of the errors. This is not so if the capacity is below $H(X\mid Y).$

If $H(X\mid Y)$ really is the amount of lost information, the correction channel attempts to add that information back in. Obviously, then, if the capacity were below this amount, there would not be enough correcting data to retrieve lost information. This is a sketch of the argument.
$\quad$For the first part, let $M$ be a long message (of length $N$) sent and $M'$ the version received. There are roughly $2^{H(X)N}$ many messages of length $N$ which are reasonably probable, and of these $2^{H(X\mid Y)N},$ on average, give rise to $M'.$ Thus we are to send $H(X\mid Y)N$ many bits each second—remember that the information of a selection from a set $A,$ in bits, is given by $\log_2|A|.$ We shall do so to cover all but an $\varepsilon$ fraction of the errors on a noiseless channel with capacity $H(X\mid Y),$ as dictated by the [[A-Mathematical-Theory-of-Communication#Fundamental Theorem of Noiseless Channels|Fundamental Theorem]] for noiseless channels.
$\quad$For the second, first note that for DRVs $X,Y,Z:$
$$
\begin{align*}
H(X\mid Y)&\leqslant H(X,Z\mid Y)\\
&=H(Z\mid Y)+H(X\mid Y,Z)\\
H(X\mid Y)-H(Z)\leqslant H(X&\mid Y)-H(Z\mid Y)\leqslant H(X\mid Y,Z)
\end{align*}
$$

If $X$ is the initial state of the Markov chain for the source, $Y$ is the same for the received signal, and $Z$ is the same for the correction signal, then the LHS is the equivocation minus the rate of transmission of the correction channel. If $C_c< H(X\mid Y),$ the difference will be positive and hence $H(X\mid Y,Z)>0.$ The quantity $H(X\mid Y,Z)$ is the uncertainty of what was sent, given we know the received and correction signals. The frequency of errors cannot be arbitrarily small when this is positive.
$\quad$Noting $R$ is the rate of information sent and received, the capacity of a noisy channel $C$ ought to be the largest value of $R$ over all possible, discrete $X.$ That is, $$C=\sup R=\sup(H(X)-H(X\mid Y)).$$
$C$ is not, as it might initially seem, dependent on the transducer system. $X$ does not represent a component of the source alone but of the source connected to a specific transmitter, hence a change in $X$ is a change in both the source and transducer. Remember, too, that $Y_n,$ the state at the $n$-th step, is a function $Y_n=f(X_n,W)$ of the signal sent and a noise variable $W.$ The way in which $X_n$ is altered by the noise is dependent only on finitely many previous productions of symbols and is probabilistically identical for all $n.$ We supposed that all transducers, unless stated otherwise, are non-singular and hence a receiver is determined uniquely by the transmitter. The function $f$ might, however, be different for different choices of transmitters. Although Shannon speaks of $C$ as maximising over all sources, he invokes $X$ as a variable of the signal sent, something only a source with a transmitter can do. In the noiseless case, $H(X\mid Y)=0$ for $\log\pi(x\mid y)=\log 1=0,$ hence this definition is sensible.
# Fundamental Theorem of Discrete Noisy Channels

> [!thm]
> Suppose we have a discrete, noisy channel with capacity $C$ and its source has an entropy per symbol $H,$ sending out symbols are a rate of $\nu$ per second. If $H\leqslant C,$ there is an encoding system s.t. the output of the source is transmitted with an arbitrarily small frequency $\varepsilon$ of errors and equivocation $\delta=H(X\mid Y).$ If instead $C<H,$ then there is an encoding with equivocation below $H-C+\varepsilon$ for arbitrarily small $\varepsilon.$ There is no encoding with an equivocation below $H-C.$

We will not explicit give such an encoding but instead show that it is among a group of possible encodings whose average frequency of errors can be made arbitrarily small, and when it is below $\varepsilon$ then the error frequency of some of them is below $\varepsilon$ for if the one minimising the error rate had one $\varepsilon'>\varepsilon$ then the average of the group is above $\varepsilon',$ which is impossible.

> [!rem] Let $c=\ln 2.$

Let $S_0$ be a source with a rate of information $R=H-H(X\mid Y)$ arbitrarily close to $C.$ Consider the sequences from $S_0$ of long length $N.$ Then,
1. The sequences sent fall either into a high-total-probability group of size close to $\exp(NHc)$ or into a group whose total probability is arbitrarily small.
2. The received sequences fall into a similar category of $\exp(NH(Y)c)$ members.
3. On average, each likely outcome was probably produced from a group with roughly $\exp(NH(X\mid Y)c)$ members. Observe that a particular sequence $\{y_i\}_{i=1}^{N}$ could be viewed as having been produced by the process induced by the probabilities $\pi(x_n\mid y_n)$ of the original channel. The possible origins for the sequence roughly number in $\exp(NH(X\mid y_0)c).$ $H(X\mid Y)$ is the average entropy of those processes for every possible sequence $Y.$ Thus on average there are $\exp(NH(X\mid Y)c)$ possible origins for an output of length $N.$ The other potential causes of the received signals are in a low probability group.

All approximations above, and their involved errors as indicated by 'arbitrarily small' or 'about,' become identical to the corresponding approximandum (with their errors going to 0) as $N\to\infty,$ partially proving the first part for when $H\approx C,$ or $H=C$ if that is achievable.

Suppose now that we have another source $S_1$ with rate $R'<R$ whose messages depend on the source in a manner specified below. Like before, if the process runs for long enough to produce sequences of length $N$ there are $\exp(NR'c)$ high-probability messages. Consider an injection from the high-probability messages of $S_1$ to those of $S_0$ and average the frequency of errors where the frequency of a map $f$ is the rate at which we correctly guess the originating message of an output sequence $\mathbf{y}$ as being $f(\mathbf{x}'),$ the message produced by $S_1$ at the same time $S_0$ produced a message which was received as $\mathbf{y}.$ In effect this is the expected rate of errors when choosing an association uniformly at random. The process randomly distributes $\exp(NR'c)$ high-probability points into a collection of $\exp(NHc)$ high-probability points. On average, if we choose a point of the latter set to see if it is in the range of the mapping, the probability of a correct draw is $\exp(N(R'-H)c).$

```ad-fail
title:Hard to Understand

Thus the probability that none of the likely origins of $\mathbf{y},$ except for the originating message, are in $\operatorname{ran}f,$ again on average, is $$E=\exp(\exp(NH(X\mid Y)c)\ln(1-\exp(N(R-H)c)))=(1-2^{N(R-H)})^{2^{NH(X\mid Y)}}.$$
Here we suppose each choice is independent, hence the multiplication. For large $N,$ $NH(X\mid Y)\approx NH(X\mid Y)-1.$ The later expressions more correctly expresses 'choosing all but one of the most likely messages' but the difference is negligible. We defined $R'$ to be below $R=H-H(X\mid Y),$ so there is a positive $\eta$ s.t. $R'-H=-H(X\mid Y)-\eta.$ We have, then, $$E=(1-2^{-N(H(X\mid Y)+\eta)})^{2^{NH(X\mid  Y)}}.$$
As $N\to\infty,$ $E\to1-2^{-N\eta},$ i.e. $E\to1.$ The probability of error is well-approximated by $1-E.$
```

If $C<H,$ simply transmit $C$ bits per symbol from the source and ignore any additional information generated. This gives an equivocation $H-C$ of information lost. Of course, we may never transmit exactly $C$ bits per symbol but we can transmit at a rate $C-\varepsilon$ arbitrarily close to $C,$ losing $H-(C-\varepsilon)=H-C+\varepsilon$ bits of information.
$\quad$The third and last part of the theorem follows from the definition of $C.$ Suppose we could transmit information to obtain an equivocation $H(X\mid Y)<H-C.$ Then, $C<H-H(X\mid Y)=R,$ contradicting our definition of $C$ as maximising $R$ over all sources and encodings.
## Discussion
The proof of the above theorem gives no 'recipe' for constructing something close to an ideal encoding like $S_1.$ An approximation would be able to recover the original signal when it is altered reasonably by the noise. This is not always true and in general the alternations made will not bring a received signal closer to the original than any other signal. One could bias these toward the original signal at the cost of redundancy—repeated information. If we use the redundancy to infer the likely origin of a signal from context, e.g. by choosing the originating symbol of the majority of the redundant information. There is an alternative, more illuminating form of the theorem. Choose a subset from the set of sent signals of length $N$ whose members have equal probability called $A.$ When receiving a signal affected by noise, suppose the receiver selects the most probable cause from $A$ of the received signal, the argument maximising the posterior. Define $\chi(N, p)$ as the largest size of $A$ s.t. the probability of an incorrect decision is at most $p.$

> [!thm]
> If $0<p<1,$ then $$C=\lim_{N \to \infty}\dfrac{\log\chi(N,p)}{N}.$$

When $N$ is large enough, regardless of what the threshold $p$ of tolerance for error, we can determine close to $CN$ bits of original message in the time it takes to send a signal of length $N.$

Appendices begin in page 26, though after theorem 12 we can go
pp. 23