Tags: [[Stats]], [[Statistical-Methods]], [[Inferential-Statistics]]

Unknown (population) parameters $\theta$ are non-random but the observations $X=(X_1,\ldots, X_n)$ are random—here probabilities are interpreted as long run frequencies—and their distributions $\pi(x; \theta)$ are based on these parameters and are part of the statistical model assumed.

> [!rmk] Interpreting Probabilities
> In the classical approach, to say $P(A)=p$ means that the proportion of the time $A$ is observed as opposed to not converges to $p$ as we make more independent observations.

In Bayesian inference problems we are given a single distribution, the prior distribution, and a [[Inferential-Statistics|fully specified]] model for the likelihood $\pi(x\mid\theta).$ Classical inference, in contrast, works simultaneously with *multiple candidate models* or leaving some variables involved without an explicit distribution. A 'good' hypothesis testing or estimation procedure is one that is desirable under all candidate models. Thus, in some cases, this is considering the worst case—the worst value $\theta$ could take—and choosing those procedures that are desirable even here. Due to how probabilities are interpreted, methods typically have desirable long-run properties, relying on [[Convergence-Phenomena-and-Inequalities|convergence]] theorems.
$\quad$Inferencial statistics is divided broadly into [[Classical-Estimation|estimation]] and [[Classical-Hypothesis-Testing|hypothesis testing]] problems.