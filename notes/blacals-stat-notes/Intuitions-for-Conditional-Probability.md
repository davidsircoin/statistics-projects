Tags: [[Stats]]

I'll present 3 similar motivations for the definition of conditional probability, which is denoted by $P(A\mid B)$ and read 'the probability of $A$ given $B$' for some events $A$ and $B.$ The first looks at a particular example where all outcomes are equally likely to generalise from there; the second is based on the definition of events and the preservation of certain properties of probabilities when transitioning to a conditional view; the third is based on interpreting probabilities as an assignment of a 'probability mass' to events.

```ad-info
title:Definitions

- **Sample Space.** The collection of all possible outcomes. An element of this collection is something that could occur.
- **Event.** A collection of outcomes from the sample space. Usually we characterise this collection by a certain property all outcomes inside it must have. If we observe any outcome from an event $A,$ we say $A$ occurred.
- **Probability Law.** A function $P$ that takes in events and gives back a number from $0$ to $1$ and obeys certain rules.
- **Simultaneous Events.** If we observe an outcome that is both in event $A$ and in event $B,$ we say they both occurred. Events which share no outcomes are called *disjoint.* We denote the collection of shared outcomes by '$A\text{ and }B.$'
- **Union of Events.** For events $A$ and $B,$ their union, denoted '$A\text{ or }B,$' occurs only when we observe an outcome that is either in $A,$ in $B,$ or both.
```

# Generalising from an Example
Suppose that we throw a fair die and record the top face. All faces are equally likely to appear. If we throw it, close our eyes, and ask our friend to gives us hints of the outcome, we can narrow it down and give meaningful probabilities to the results. If we are told, say, that the number is even, we know the event of either $1, 3,$ or $5$ appearing is impossible and that only $2, 4,$ and $6$ are possible outcomes. It seems reasonable, then, to say $$P(\text{6 was on top}\mid \text{the number is even})=\frac{1}{3},$$
for the 3 remaining outcomes should be equally likely. Similarly, the probability of observing either $2$ or $4$ is $2/3$ since the event captures $2$ of the $3$ outcomes. This suggests the following rule for when outcomes are equally likely: $$P(A\mid B)=\frac{\text{number of elements in `$A\text{ and }B$'}}{\text{number of elements in $B$}}.$$
Generalising this further we have $$P(A\mid B)=\frac{P(A\text{ and }B)}{P(B)}.$$
# Preserving Probabilities Through Restriction
As mentioned above, an event in the context of probability theory just is a collection of possible outcomes and if we observe any of those outcomes we say the event occurred. E.g. the collection $\{\text{it is raining, it is sunny outside}\}$ is an event; if it is raining but it's not sunny outside, we still say the event occurred. 

A probability law $P,$ a formalisation for a notion of probability, must have the following properties:

1. It takes in events (collections of outcomes) and gives you back a number between $0$ and $1,$
2. Gives you $1$ if the event in question contains all possible outcomes (i.e. the probability of something happening is 1), and
3. For collections of disjoint events, the probability that at least one of those events occur just is the sum of the probabilities of each event.

Those last two properties imply that if a collection of events, say $\{A, B, C\},$ exhausts all possibilities (i.e. all outcomes are covered by at least one of those, and because they're disjoint each outcome is covered by exactly one event), then $$P(A\text{ or }B\text{ or }C) = P(A)+P(B)+P(C)=1.$$
This must happen for any sequence of such events of any length. You could have an infinite sequence of disjoint events that jointly contain all outcomes and they must satisfy this property.

Consider some events $A$ and $B$ where $B$ is possible, i.e. $P(B)>0.$ To calculate the probability of $A$ given $B,$ a natural first step is to restrict our view to only those outcomes that are in $B.$ Any outcomes that are not in $B$ are impossible. Then it seems like $P(A\mid B)$ just is $P(A\text{ and }B).$ But, conditional probabilities must obey the above conditions to be called probabilities in the first place. Importantly, for any collection of disjoint events, e.g. $\{C, D\},$ that jointly contain all outcomes of $B,$ the probability of at least one event occurring must be the sum of the probabilities, $P(C\text{ or }D)=P(C)+P(D),$ and that must be equal to $1,$ i.e. $P(C\text{ or }D)=1.$ And this must happen for any collection of such events, even ones that include outcomes that aren't in $B$ if there are such things. A consequence is that the probability of $B$ given $B$ is $1,$ suggesting a natural transformation that goes from $P(A\text{ and }B)$ to a conditional probability that makes sense: divide by $P(B).$ It was for this reason that we assume $P(B)>0.$ Thus, we have a definition: $$P(A\mid B)=\frac{P(A\text{ and }B)}{P(B)}.$$
# Probability Mass Interpretation
We can think of the probability of an event $A$ occurring $P(A)$ as a certain mass which $A$ carries. Further, it must be a portion of the mass of the whole space of possible outcomes. Then for any event $A,$ the probability mass $P(A\text{ and }B)$ must be a portion of the probability mass $P(B).$ Again, a natural way to distribute the probability mass evenly and then put a weighting depending on how much probability mass $A$ and $B$ share. That is, $$P(A\mid B)=\frac{P(A\text{ and }B)}{P(B)}.$$
# Bayes Theorem
It's trivial to confirm that all of the desired properties of probabilities hold for conditional probabilities, and not very enlightening, regardless of what $A$ and $B$ are so long as $P(B)>0.$ Bayes's theorem follows immediately from the definition. If $A$ and $B$ have non-zero probabilities, then $$P(B)P(A\mid B)=P(A\text{ and }B)=P(A)P(B\mid A),$$
so $$P(A\mid B)=\frac{P(A)P(B\mid A)}{P(B)}.$$
Its use in Bayesian statistics stems from intermixing random variables and from another theorem, called the Total Probability Theorem, to help calculate $P(B)$ using the random-variable-version of $P(A)P(B\mid A).$