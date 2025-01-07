Tags: [[Stats]], [[CS]]

All of this is in RStudios.
# Language Basics
## Data Manipulation
Variable assignment uses the following syntax:
```R
variable <- value
```

To put data in a manageable format it is often convenient to first place it in a spreadsheet with common programmes like Excel, Google Sheets, or LibreOffice Calc. This allows for easy manipulation of data. Any missing data is represented by blank cells. It is recommended to keep a file in the .xls or .xlsx format in case further edits are needed after exporting a file in the .cvs format for R. Click on File, then Import Data, then From Text (readr), then Import, and then select the file .cvs.  Alternatively, to store it in a variable, type:

```R
var <- read_csv("$PATH/filename.cvs")
```

The text of the tibble may be viewed in a separate tab with the name of the tibble.

> [!def] Tibble
> R objects storing a 2D array where each row (also called a **subject**) may contain both categorical or quantitative variables whose names are also the names of the columns (also called **factors**).

If we have a tibble named `tib` with a column named `var`, we can access it as a vector with the syntax

```r
tib$var
```

When typed into the command line it will output all values under the `var` column separated by spaces. If the values take up more space in a line than what the console provides, it will continue outputting values in a new line. Next to each line it outputs is the row number, starting from $1,$ of the first value in the line. Alternatively, `tib[col,row]`, where `col` and `row` are non-zero natural numbers, accesses the contents of the column `col`, counting down from 1, row `row`, counting right from 1, as a $1\times1$ tibble. Excluding one of the arguments will access all contents in the corresponding row or column:

```r
# n,m : Nat
tib[n] # Tibble containing the n-th column of tib.
tib[,n] # Same as above.
tib[n,] # Tibble containing the n-th row of tib.
tib[n][m] # 1x1 tibble with the m-th row of n-th column of tib.
tib[n,][m] # 1x1 tibble with the m-th column of n-th row of tib.
```

Collecting positive integers with `c()` allows us to access multiple, non-successive rows or columns:

```r
# i : Nat |- v_i : Nat.
# tib is an m x n tibble.
tib[c(v_1,...,v_k)] # m x k tibble containing the v_1-st column of tib and similarly for all v_i.
tib[c(v_1,...,v_k),] # k x n tibble containing the corresponding rows of tib.
# All other combinations are the same as above.
```

We can also access tibbles through 'filtering,' as a functional programmer might say.

```r
filter(tib1, pred(col1, col2,...)) # pred is a predicate—logical-valued function—on the elements of tib1. This accesses the rows at which pred is true.
# Example
filter(tib1, col1 == 'level' && col2 %in% c('0', '1'))
```

This is useful when the tibbles involved were created by the same process 'simultaneously,' e.g. by a loop. Then the tibbles are associated by their indices.
$\quad$When dealing with tibbles `tib` with named columns, to obtain a value whilst excluding the name index using double brackets, e.g. `tib[[1]]`. It is recommended to convert any columns with `character` data to contain `factor` variables:

```r
library(mosaic)
library(tidyverse)
tib <- tib %>% mutate(name1 = factor(col1),
					  name2 = factor(col2),
					  name3 = factor(col3)
)
```

The `tib <-` saves whatever we do to the `tib` variable. In this case specifically it is advised that `name<i>` be the same as the $i$-th column of `tib`.

``````ad-rmk
title:Pipe Operator

Generally, `var %>% function` means 'apply the function `function` to `var`.' We do this to improve readability. The function in question takes `var` as an argument. Nested application is possible with the following syntax:

```r
var %>%
	func1() %>%
	func2()
```

Assuming that `func1()` returns a value suitable for `func2()`, this reads 'apply `func1` to `var` and pass the result through `func2`.' The syntax can also be used inside functions, e.g.
```r
sample(tib %>% filter(col %in% c("val1", "val2")), size = n)
```
This is equivalent to
```r
tib %>% filter(col %in% c("val1", "val2")) %>%  sample(size = n)
```

``````

This is particularly helpful when we want to focus on particular columns or rows of a tibble `tib`:

```r
var <- tib %>%
	# Ignores all values in col not in val_i
	filter(col %in% c(val1, val2,...)) %>%
	# Ignores all columns in the above output not in col_i
	select(col1, col2,...)

# Makes R ignore the deleted values instead of treating them as unobserved, possible values
var <- var %>% mutate(col1 = factor(col1),
					  col2 = factor(col2))
```

We could do this in a spreadsheet programme but this is not recommended. Doing all in R is likely to make our analysis more reproducible by having a 'log' of the operations in the form of code. Besides, for large data sets or complex operations, spreadsheet programmes are unwieldy.

## Data Types

Casting uses the `as.<type>(x)` syntax and checking whether and object is a term of a type is done with `is.<type>(x)`.

### Logical

> [!def] `logical` Type
> Contains the values `TRUE` (or `T`) and `FALSE` (or `F`) and the following operators with obvious definitions:
> - `! _`.
> - `_ & _` or `_ && _`.
> - `_ || _` or `_ | _`.
> - `xor(_,_)`.
> - `isTRUE(_)`.
> - `isFALSE(_)`.

The shorthand `T` and `F` variables may be rebound to other values but `TRUE` and `FALSE` are reserved.

> [!rmk] `logical` Tibbles
> Given a tibble of objects `tib` and a predicate `pred` on its elements, the syntax `pred(tib)` is in essense equivalent to `map(tib, pred)`, though it returns a logical tibble and so if `tib` is $n\times m$ it will not apply `pred` to the columns or rows but to the elements inside the rows and columns.

### Multi-Dimensional Data

``````ad-rmk
title:Matrix Arithmetic

Throughout, `mat1` and `mat2` are both $n\times k$ or $k\times n$ tibbles.

```r
mat1*num # Scalar multiplication.
1/mat1 # Take the reciprocal of every
mat1+num # Add num to each entry of vec1.
mat1+mat2 # Vector sums.
mat1 * mat2 # Multiplication by entries.
mat1^n # Raise every entry to the n-th power.
mat1 %*% mat2 # If k=1, returns their dot product.
mat1 %o% mat2 # If k=1, returns the outer product mat1 mat2^T.
outer(mat1, mat2, .f) # If k=1 and .f is a 2-ary function, returns an nxn matrix with entries A[i,j] = .f(mat1[i], mat2[j]).
```
``````

## Loops
A `for` loop generally takes the following shape:

```r
for (x in tib) {
	# code
}
```

If `tib` is an $n\times m$ tibble, it will loop through the columns of `tib`, not the cells. To store values generated by a loop into a tibble, either of the following shall work:

```r
newvec <- matrix(NA, nrow = m)
for (x in tib) {
	# code
	newvec[x] <- val(x)
}
#######################################
newvec <- c()
for (x in tib) {
	# code
	newvec <- append(newvec, val(x))
}
newvec <- data.frame(col = factor(newvec)) # Supposing it is not numeric data
```

The first requires we know how many quantities we are generating and that such length does not change later; the second becomes inefficient in terms of memory use when generating large amounts of data, needing to make copies of `newvec` each loop.
# Data Cleanup
Methods to do something related to data cleanup. Throughout, `tib` is the relevant data structure (e.g. data frame, list, etc.), `Cat` is a column of `tib` (assuming `tib` has columns) containing categorical data (e.g. character, logical, or integer data), `Val` is a column containing any sort of data, and `Num` contains numeric data. For convenience, if multiple columns of the same kind are at play, only the first letter of the name followed by an index will be shown, e.g. `C1`, `V3`, `Nk`.
## Reordering a Data Frame by Column Values

> [!def] The Setup
> If the data in `Val` can be ordered, we **wish** to reorder the rows of `tib` so that said values appear in decreasing or increasing order.

Both can be accomplished with the `order` function:

```r
tib <- tib[order(tib$Val, decreasing = T),] # For decreasing reorder.
tib <- tib[order(tib$Val),] # For increasing reorder.
```

## Preserving Order of Rows After Transformation

> [!def] The Setup
> We change `tib` in such a way that its rows are reordered and **wish** for the original order to be preserved.

Add a temporary column containing the natural numbers up to the number of rows in `tib`, apply the transformations, and [[#Reordering a Data Frame by Column Values|reorder]] the transformed data according to the values in the temporary column. Once done, the column may be removed with `tib$temp <- NULL`. For large data sets where reordering may take a long time, it is best to reorder after all expected transformations are applied.

## Adding Columns by Reference Table

> [!def] The Setup
> Suppose we have a table `tab` with a column `Catab` containing the same sort of data as `Cat` in `tib`. We **wish** to add columns to `tib` by essentially matching the value of a row under `Cat` to the same value under `Catab` in `tab` and the values for the new columns on this row are exactly those found in the corresponding columns of `tab`.

Suppose we only wish to add columns with values in `tab$C1`, $\ldots,$ `tab$Cn`. This can be done by merging:

```r
newTib <- merge(tib, tab[, c("C1",...,"Cn")], by.x = "Cat", by.y = "Catab", all.x = T) # all.x = T means all rows from tib are retained in the merged frame regardless of whether a row's Cat value was found under Catab, placing Nan values under the new columns. By default, all.x = F and it would cast out the non-matching rows.
```

If `Cat` contains data which can be ordered, merging will reorder the rows of `tib` so that the values in `Cat` are in increasing order. If this is undesirable, we may [[#Preserving Order of Rows After Transformation|preserve]] the original order through known methods. If all columns of `tab` other than `Catab` are to be joined, replace `tab[, c("C1",...,"Cn")]` by just `tab`.
# Functions

> [!rmk] Lambda Abstractions
> An anonymous function of $n$ arguments is constructed with the syntax `\(x1,...,xn) ...`.

Any single-valued function when given a tibble of the appropriate type will likely output, put informally, the image of the tibble under the function.
## Formulas
If a formula `x ~ y`, where `y` contains factors or character value is passed as an argument, many functions with the mosaic package will also vary their output for particular groups in column `x` whose members all have the same `y` values, e.g. `mean(num ~ colgrp, data = tib)`. If we have `fun(num ~ col1 + col2, data = tib)`, it is equivalent, for most functions, to

```r
tib2 <- tib %>% mutate(col12 = interaction(col1,col2))
fun(num ~ col12, data = tib2)
# For example,
favstats(num ~ col1 + col2, data = tib)
# is equivalent to
favstats(num ~ col12, data = tib2)
```

The notation should be thought of as modelling `num` as a linear combination of `col1` and `col2`.

## Named Functions

Here are listed base R functions and functions from packages which are not noteworthy enough to make an entry in the [[R-Language#Packages|packages]] section.

- **`data.frame(col1 = vec1, col2 = vec2,...)`.** Assumes each $\mathrm{vec}_i$ is equal length and returns a tibble with factor variables $\mathrm{col}_i$ as column labels and the $\mathrm{vec}_i$ as their values. Row $n,$ then, consists of the $n$-th component of each $\mathrm{vec}_i.$
	- **`data.frame(tib)`.** When used in the command line, prints all rows and columns of `tib`.
- **`c(v1, v2,...)`.** Outputs a vector of the values of the $v_i.$ If any of them is a string, all numerical values are interpreted as strings. The syntax `c(n:m)` outputs a vector of all integers between $n$ and $m$ in the order of $n$ and $m,$ inclusive.
- **`tibble(tib)`.** Converts `tib` to a tibble.
- **`matrix((vector) data = NA, nrow = 1, ncol = 1)`.** Gives a tibble with the indicated number of rows `nrow` and columns `ncol`. If `data` is given alongside both `nrow` and `ncol`, the first `ncol` values of `data` will be placed, in order, under the first column, the next `ncol` values under the second, and so on. If there are not enough values in `data`, they repeat until all cells are filled, though the length of `data` must be a multiple or factor of both `ncol` and `nrow`. If only one of `ncol` or `nrow` is given, the other will be made the appropriate length s.t. every value of `data` gets a cell. Again, the length of `data` must be a multiple or factor of whichever quantity was given. If neither was given, `ncol=1` and `nrow` is set to the length of `data`. When we want only to initialise a matrix of a certain size, leave `data = NA`.
- **`rbind(tib1, tib2,..., tibn)`.** The $\mathrm{tib}_i$ are tibbles with the same columns, though the row numbers could differ. It returns a tibble with the same columns as any of them, an additional column called `orig.id` that may be removed with `select`, and the rows being in the union of the rows of the $\mathrm{tib}_i.$
- **`head(tib)`.** Displays the first 6 rows of `tib`.
- **`tail(tib)`.** Displays the last 6 rows `tib`.
- **`unique(vctr)`.** Returns `vctr` with all duplicate values removed.
- **`length(tib)`.** If `tib` is a data frame, returns the number of columns in `tib`. If it is a vector or the column of a data frame returns the number of values in those structures.
- **`tally(~ colgrp, data = tib)`.** Returns a named vector with the values of `tib$colgrp` as its columns, counting how many rows had that value.
	- **`tally(col1 ~ col2, data = tib)`.** Returns a named matrix with values of `tib$col2` as its column names and the values of `tib$col1` as its row names. The value at the $i,j$ entry is the number of rows in `tib` where the `col1` value is `col1[i]` and the `col2` value is `col2[j]`, simultaneously, i.e. a [[Presentation-of-Data#Multiple Predictors|contingency]] table.
- **`sum(vctr)`.** If `vctr` is numeric, returns the sum of its components.
- **`cumsum(vctr)`.** If `vctr` is numeric, returns a vector of the same length containing the cumulative sums of the components of `vctr`.
- **`mean(vctr)`.** Outputs the arithmetic mean of the vector.
- **`sd(vctr)`.** Outputs the standard deviation of `vctr`.
- **`summary(tib)`.** For a column with character variables, it will give a count of each variable and for columns with quantiative variables it will give `favstats` of the column along with the mean. The output is organised by columns. If any missing values are present, it will count them under the `NAs` column. Often model objects will give unique behaviour when passed through this function.
- **`interaction(vctr1,...,vctrn)`.** If the $\mathrm{vctr}_i$ are all vectors of the same length, returns a factor with the levels being the corresponding levels in each vector joined by `.`, essentially concatenating their literals with a dot in the middle.
- **`p.adjust(p = numtib, (character) method, n = length(numtib))`.** Given a numeric vector `numtib` containing $p$-values, it will apply the `method` correction and outputs a vector of the same length containing adjusted $p$-values. The available methods are
	- **`"holm"`.**
	- **`"hochberg"`.**
	- **`"hommel"`.**
	- **`"bonferroni"`.** Multiply $p_i$ by $n$ or default to $1$ if $np_i$ is too large.
	- **`"BH"`.**
	- **`"BY"`.**
	- **`"fdr"`.**
	- **`"none"`.** No adjustment.
- **`sample(data = tib, size = n)`.** Using a seed, it returns a $n\times m$ tibble, when `tib` has $m$ columns, with the same columns as `tib` and its values are a sample from `tib`. It is recommended to set the seed value constant, using `set.seed(num)`, for future reproducibility.
- **`reorder(fctr, vctr, FUN = mean)` (*stats*).** With a factor vector `fctr` and another vector `vctr` of the same length, it returns a reordered version of `fctr` by the outputs of the `FUN` function (by default the sample mean) on the group of `vctr` values sharing an index with a `fctr` level. It can be used in a piped `mutate` when `fctr` and `vctr` are columns of the tibble passed.
- **`simulate(object, nsim = 1, seed = NULL)`.** `object` is a fitted model object such as `lm` or `glm`, `nsim` is the number of simulated samples, and `seed` is a random seed. Most often we use a `glm` object to simulate draws from a normal or binomial distribution. Passing an `lm` object will generate a list of the same length as the data points containing values sampled from a distribution who mean and variance are those of the `lm` object. Additionally, the draws are made assuming some IID zero-mean normal noise.
- **`confint(object, level = 0.95)`.** Given a fitted model `object`, it returns the bounds for a CI of the mean of the data.
- **`anova(object)`.** `object` is a fitted model such as an `lm` object. Returns an [[Classical-Hypothesis-Testing#ANOVA#Linear Models and the $F$-Test|ANOVA table]]. If only one grouping variable is involved, the table will be for the one-way ANOVA.

### Models
#### Linear-Models

``````ad-rmk
title:General Case

Most commonly we create a linear model by the following call:
```r
lm((numeric) resp ~ model, data = tib)
```
``````

Given a numeric column `resp` of `tib` with $n$ values $\{Y_i\}_{i=1}^{n}$, it will perform either linear regression or linear least mean squares supposing they follow the model `model`. Which is chosen depends on whether `model` contains terms with categorical or numeric data. In general the object will be a list including the following—the components may be accessed by passing the `lm` object through a function of the same name:

- **`coefficients`.** A named vector of the coefficients.
- **`residuals`.** A named vector containing the residuals.
- **`fitted.values`.** A named vector of the estimated values.
- **`df.residuals`.** The residual DoF.

If `model` is a vector $f(X)$ also of $n$ values, with $X$ being a matrix not containing the $Y_i,$ then it performs linear regression to obtain 2 coefficients and typically $n-2$ DoF.

> [!rmk] Formula Addition
> Using formula notation, `resp ~ t1 + t2`, where $t_1$ and $t_2$ are numeric vectors the same length as `resp`, shall mean that we model the values in `resp` as a linear combination of $t_1,t_2.$

If instead `model` is a categorical column `col` of `tib` with $m$ levels, first it will average the values corresponding to a level $\overline{Y}_i$ and then it performs [[Classical-Statistical-Models#Linear Regression|Linear Regression]] with the $\overline{Y}_i$ as response variables and replacing the levels with indicator variables, except the first which becomes 1, which are 1 when used to estimate the corresponding $\overline{Y}_i$ and 0 otherwise. If $\theta$ and $I$ are vectors of the appropriate size, $I$ containing the indicator variables, then $$\overline{Y}_i\approx \theta\cdot I+\theta_0.$$
In this case, only $I_i$ is non-zero. More simply, we postulate $\overline{Y}_i\approx \theta_i+\overline{Y}_0.$ Obviously the sum of squared residuals is minimised by $\hat{\Theta}_i=\overline{Y}_i-\overline{Y}_0.$ This $\hat{\Theta}_i$ will be the $i$-th coefficient for $0<i$ and the 0-th is $\overline{Y}_0,$ chosen as the least level under a dictionary order. Finally we assign $\overline{Y}_i$ as the estimate of any value in the $i$-th group. But then there is no need to go through the $\hat{\Theta}_i.$ It is easier to simply assign the SM estimators to every member of a group. In the new notation, the highlighted components of an `lm` object, when `resp ~ col` is placed, become

- **Coefficients.** $\{\overline{Y}_0\}\cup\{\overline{Y}_i-\overline{Y}_0\}_{i=1}^{m-1}.$
- **Standard Error.** $\sqrt{ V[\hat{\Theta}_0] }=\sigma/\sqrt{ n_0 }$ and $\sqrt{ V[\hat{\Theta}_i] }=\sigma\left( \dfrac{1}{n_i} +\dfrac{1}{n_0}\right).$
- **Residuals.** If $Y_i$ is in the $j$-th group, its residual is $Y_i-\overline{Y}_j.$
- **Fitted Values.** $\hat{Y}_i=\overline{Y}_j$ if $Y_i$ is in the $j$-th group.

> [!rmk] Summary
> Using `summary` on an `lm` object will return
> 
> 1. A 5-number summary of the residuals.
> 2. A coefficients section containing:
> 	1. The coefficients under the 'estimate' column, with `(Intercept)` being $\theta_0,$ the mean of the first group (in alphabetical order) in the corresponding column of `data` regardless if the variable passed was a shuffled version, and the rest having descriptive names.
> 	2. The RSE times $\sqrt{n_i^{-1} + n_0^{-1}},$ unless $i=0$ in which case it is $SD/\sqrt{n_0}.$
> 	3. Under `t value` we have the estimate over the SE.
> 	4. `Pr(>|t|)` gives a $p$-value, under a critical value rejection criterion, estimated with a $t$-distribution using the indicated DoF.
> 3. The [[Classical-Statistical-Models#Multiple Regression|Residual Standard Error]] does what one would think.
> 4. R-Squared.
> 5. F-Stats.

A special case is made when we wish to say a common mean is assumed for all variables, essentially modelling with a single group:

```r
lm(y ~ 1, data)
```

There is also the option of removing a common intercept, giving as estimates the means of the corresponding group, essentially performing parallel regressions. Everything but $R^{2}$ and $F$-statistic values are the same as with the individual fitted values. The $F$-statistic is now computed with its first DoF being the number of groups but the second is the same as with the individual models.

```r
lm(num ~ groups - 1, data)
```

### Plots
Any plots may be saved or copied by clicking on Export, right above the plot, and following as instructed.

> [!rem] Shared-Options
> - **`(character) ylab`.** Text to place beside the $y$-axis. By default it is empty.
> - **`(character) main`.** The title of the plot, typically empty.
> - **`(formula) formula`.** An expression `y ~ model` specifying first that a variable numeric `y` is the response variable and `model` is the explanatory variable, and second that `y`
> > *'is modelled by a linear predictor specified symbolically by `model`. Such a model consists of a series of terms separated by `+` operators. The terms themselves consist of variable and factor names separated by `:` operators. Such a term is interpreted as the interaction of all the variables and factors appearing in the term.'*
> 
> Arithmetic operations may be used in these expressions however to separate their use as arithmetic operators instead of symbols in model formulas we encase them in `I()`. Hence, for example, `log(y) ~ I(a + log(x))` is allowed. They may be called with a categorical variable `cat` as `y ~ cat` to apply an operation to each grouping of the data by the categorical values.

- **`par(...)` (*graphics*).** Sets or queries the graphical parameters specified in `...` with `tag = value` syntax. If no arguments are given or `no.readonly = T` is the only argument, it returns all graphical parameters in a named list.
	- **`mfcol = c(nr, nc)`.** Figures from this point in the code will be drawn in an $n_r\times n_c$ array by columns, i.e. the first $n_r$ plots will be in the first column from top to bottom in sequential order.
	- **`mfrow = c(nr, nc)`.** The same as `mfcol` but now the plots appear by rows with the first $n_c$ plots being in the first row from left to right in order of appearance.
	- **`mai = c(b, l, t, r)`.** Specifies some margins with the given numeric vector in inches. `b` is the bottom margin and the rest are similarly named.
- **`plot(x, y, ...)` (*base*).** `x` and `y` are numerical vectors of the same length. By default it draws a scatter plot if the `(x,y)` points.
	- **`plot(x, y, (character) type = "p")`.** `type` specifies the kind of plot to produce. With `"p"` it products a scatter plot of the points.
		- **`type = "l"`.** A line plot connecting points with no `x` values in between by a line.
		- **`type = "b"`.** Both a line and scatter plot with some space separating the lines and dots.
		- **`type = "c"`.** The `"b"` plot but with just the lines, maintaining the spaces where the dots were.
		- **`type = "o"`.** Like `"b"` but with no spacing between dots and lines; rather they cross each other.
		- **`type = "h"`.** At each `x` value there is a vertical line going to the corresponding `y` value as if it were a histogram.
		- **`type = "s"`.** Connects points in a stair case manner by travelling from $(x_n,y_n)$ to the next point $(x_m,y_m)$ with a higher `x` value first horizontally and then vertically.
		- **`type = "S"`.** Like `"s"` but the path connecting points goes first vertically and then horizontally.
- **`hist(vctr)`.** By default, if `vctr` is the only argument, it outputs an image of a histogram of the units of `vctr`, grouped into bins, with the height of a bar being a count of the values in `vctr` that fall into that bar.
	- **`(logical) labels`.** If `labels = T`, on top of each bar is its frequency to improve readability. By default `labels= = F`.
- **`boxplot(data = tib)`.** Plots a [[Presentation-of-Data#Plots|box and whiskers]] plot of `tib` with the whiskers extending to $1.5(Q_3-Q_1)$ above and below the box, marking any values outside the whiskers in circles.
	- If `tib` has a column `Nums` with only numerical data and a column `Cat` with only character data, `boxplot(Nums ~ Cat, data = tib)` generates a boxplot for each distinct string in `Cat` from the data points in `Nums` that share a row with that string.

### Distributions
- **`qdata(formula, p = seq(0, 1, 0.25), data = tib)` *(mosaic)*.** Returns the [[Random-Variables|PPF]] as determined by `tib` on the values in `seq`. If no formula is provided, `tib` must be a vector. If it has a single, named column, be sure to put `tib$col`. The same applies below.
	- **`cdata(formula, p = 0.95, tib)`.** Returns a data frame giving upper and lower limits and the central proportion requested.
	- **`pdata(formula, q, tib)`.** Returns a vector of probabilities by computing proportions.
		- **`lower.tail = T`.** Returns the proportion of the data below `q`. If it were `F`, it returns the proportion above `q`.
	- **`rdata(formula, n, tib)`.** Returns a vector of sampled values.
	- **`ddata(formula, q, tib)`.** Returns a vector of probabilities (empirical densities).
- **`t.test((formula) num~cat, data = tib)`.** 
	- **`(logical) var.equal = F`.** 
- **`dt(x, df, log = F)`.** The $t$-distribution at $x$ with $df$ DoF. If `log = T`, it outputs $\log\psi_{df}(x).$
	- **`pt(x, df, lower.tail = T, log.p = F)`.** $\Psi_{df}(x)$ if `lower.tail = T`, otherwise $1-\Psi_{df}(x).$ Again, if the last parameter is `TRUE`, then returns $\log\Psi_{df}(x)$ or $\log(1-\Psi_{df}(x)).$ For a $p$-value in a two-tailed setting, use `2*pt(abs(x), df, lower.tail = F)`
	- **`qt(p, df)`.** For $p\in(0,1),$ returns $\Psi_{df}^{-1}(p),$ the PPF of the $t$-distribution.
- **`df(x, df1, df2, ncp = 0,  log = F)`.** The $F$-distribution at $x$ with $df_1$ and $df_2$ DoF and non-centrality parameter $\mathrm{ncp}.$ If `log == T`, the log probabilities $\log\pi(x)$ are returned.
	- **`pf(x, df1, df2, lower.tail = T)`.** If `lower.tail = T`, returns the CDF of the $F$ distribution with $df_1$ and $df_2$ DoF, otherwise $1$ minus this  value.
	- **`qf(p, df1, df2, lower.tail = T)`.** If `lower.tail = T`, returns the PPF of the $F$ CDF at $p,$ otherwise it return the PPF at $1-p.$

# Packages
Packages are installed by going to the lower-right panel in RStudio, going to the Packages tab, clicking on Install, and then typing the name of the desired package. To load an installed package, write `library(<Pkg_Name>)` or `require(<Pkg_Name>)`. The former, to put it some way, raises an unhandled exception if the package is not installed, halting the programme. The latter will give an error under the same circumstances but will continue executing the programme. Loading packages by clicking on a box under the Packages tab only loads them for use in console usage. One must include `library(<pkg>)` at the top of a .r file to use them in that file. If distinct packages `pkg1` and `pkg2` contain the same name `func` for different functions, we can specify which we want to use with `pkg1::func()` or `pkg2::fun()`. Below are some standard packages and a brief explanation of their utility, with more in-depth descriptions in the appropriate subsections.

> [!rem] Standard Packages
> - **`readr`.** Loading CSV files into R.
> - **`mosaic`.** Simplifies implimentation of basic information such as $t$-tests, $z$-scores, and `favstats`.
> - **`ggplot2`.** Various plots and greater control over graphical aspects of plots with comparatively easier code. Many of the plots require the `mosaic` package to be loaded.
> - **`purr`.** Includes many tools from functional programming such as `map`.
> - **`tidyverse`.** A collection of packages that help make with cleaning up data sets and generally making prettier code. Includes `readr` and `ggplot2`.
> - **`yarrr`.** Pirate plots.
> - **`multcomp`.** Utilities to ease parametric multiple hypothesis testing.
> - **`summarytools`.** Functions to neatly summarise data for rmarkdown and other formats.
> - **`scales`.** Methods for scaling and re-labelling axes as used in `ggplot2`, though it can be used beyond that.
> - **`tikzDevice`.** Allows for plots, including ggplot2 plots, to be rendered in a tex file with text typeset as $\LaTeX$ text.

- **`effects`.** 
	- 

## Mosaic
- **`diffmean(formula = numcol ~ catcol, data = tib)`.** If `catcol` contains only 2 values $c_1,c_2,$ returns the difference in the means of those values in `numcol` sharing a row with $c_1$ and the mean of those sharing $c_2,$ with the alphabetically higher categorical value being subtracted from the lesser. If the sign of the difference should matter, it is good to verify with `mean(numcol ~ catcol, data = tib)` which is alphabetically higher.
- **`favstats(vctr)` (*mosaic*).** Provides the 5 number summary alongside the sample mean, sample SD, sample size, and a count of missing data points.
- **`sample(x = tib, size = k, replace = F,...)`.** Sample sequentially without replacement from the columns of `tib` $k$ times per column resulting in a tibble of $k$ rows and the same number of columns as `tib`. The following arguments are shared with the `resample` and `shuffle` functions.
	- **`sample(tib, prob = NULL)`.** `prob` is a tibble the same dimensions as `tib` containing probability weights for the elements of `tib` sharing that index.
	- **`sample(tib, groups = NULL)`.** `groups` is a column of `tib` or a collection of columns of `tib`. We sample from these columns throughout. If groups are used, the size parameter is ignored.
	- **`sample(tib, (logical) orig.ids = NULL)`.** If `orig.ids = T`, the function returns a tibble as normal but now with an additional column containing the original values of the first column. This is of use with `shuffle`.
- **`resample(x = tib, size = k, replace = T)`.** Sample sequentially from the columns of `tib` $k$ times uniformly per column with replacement.
- **`shuffle(x = tib, replace = F, size = k,...)`.** Returns a permutation of $k$ elements from each column, taken without replacement by default and with $k$ being the number of rows in `tib`. This may be used inside `mutate`.

## Summarytools
Common default parameters to a function can be globally set with `st_options`.  If the option is shared by multiple functions, `st_options(<OPTION> = <VAL>)` will set it for all functions. If an option is only available for a function `<FUN>`, its value is globally set by `st_options(<FUN>.<OPTION> = <VAL>)`.

- **`freq(tib, col)`.** By default returns a string of a frequency table for `col` displaying the frequency under `Freq`, the relative frequency of non-missing values under `% Valid`, the relative frequency when including missing values under `% Total`, the cumulative frequency of non-missing values under `% Valid Cum.`, and the total cumulative frequency under `% Total Cum.`. Total sums are included in the last row.
	- **`(logical) report.nas = T`.** Whether missing values are included.
	- **`(logical) cumul = T`.** Whether cumulative frequency should be included.
	- **`(logical) totals = T`.** Whether totals are included.
	- **`(character) style = "simple"`.** The rendering style. Possible values are `"simple"`, `"grid"`, `"rmarkdown"`, and `"jira"`.
	- **`(logical) display.style = T`.** Whether the string should indicate the type of variable `col` is. This does not impact the `"simple"` style but is meaningful for `"rmarkdown"`.
	- **`(character) justify = "default"`.** The justification of text within table cells.
	- **`(vector) rows`.** If this is a numeric vector containing natural numbers $(n_1,...,n_k)$ all below the number of levels of `col`, displays the $n_1$-th$,\ldots,n_k$-th levels of `col`, according to the `order` (see below), in separate rows and the rest are combined into a single `(Other)` row. Alternatively `rows` could be a vector containing some levels of `col`.
	- **`(character) order`.** Description of how the rows are ordered. There are three possible basic values: `"name"`, `"level"`, and `"freq"`. If `col` is a factor column, `"name"` is the default, otherwise `"level"` is the default. One obtains a reversed order by appending a `'-'` character to `"order"`, e.g. `"-freq"`.

## Multcomp

Objects of class `glht` are essentially lists with the following values as components:
1. `model`, a fitted model object.
2. `linfct`, a matrix of linear functions or, typically, an `mcp` object (see below).
3. `rhs`, a vector $\theta'$ used when testing a hypothesis comparing $\theta$ to $\theta'.$ If the `linfct` matrix is $A,$ the full hypothesis is $A\theta=\theta'.$
4. `coef`, the value of the linear  functions in `linfct`.
5. `vcov`, the covariance matrix of the values of the linear functions.
6. `df`, the DoF for a $t$-distribution.
7. `alternative`, string representation of $H_0.$ $H_1$ is always taken as the negation of $H_0.$
8. `type`, the name of a specific procedure used.

- **`glht(model, linfct, alternative, rhs)`.** Returns a `glht` object with the obvious values taken from the parameters. `alternative` is either `"t"` (`"two.sided"`), `"l"` (`"less"`), or `"g"` (`"greater"`) to specify $H_0.$ `rhs` is a numeric vector as mentioned above. The number of columns in `linfct` is assumed to be the same as the number of parameters estimated by `model`.
	- **`glht(lm1, linfct = mcp(colgrp = "Tukey"))`.** If `colgrp` is a factor column of the data passed through `lm1`, it gives estimates for all differences between pairs of groups in `colgrp`. The `linfct` matrix takes on the form of the design matrix in a reference-coded, one-way [[Classical-Hypothesis-Testing#ANOVA#Linear Models and the $F$-Test|ANOVA]] test. In the language of that note, `linfct` is the $X$ in $$Y=X\beta+\varepsilon.$$
- **`confint(glht_object)`.** Returns a tibble with the hypotheses, the estimates, and the bounds for (symmetric) confidence intervals around each estimate.
- **`plot(glht_object)`.** Plots the estimates in `glht_object` against its hypotheses with confidence intervals.

## Tidyverse
- **`drop_na(tib)` *(tidyr)*.** Returns `tib` with all rows containing missing values removed.
- **`mutate(tib)`.** Returns `tib` with modified columns. Any changes made must be saved to a new object, or the same `tib`, with the variable assignment syntax:
```r
var <- tib %>% mutate(NewCol1 = vec1,
					  NewCol2 = vec2
					  )
```

- **`count(tib, col)` (*dplyr*).** Returns a tibble with 2 named columns. The first, named `col`, contains the levels of `col` in `tib`. The second, named `n`, counts the number of rows in `tib` whose `col` level was equal to the corresponding value in the first column.
	- **`count(tib, col, sort = T)`.** The same as before but the rows are now sorted from highest count to lowest count.
- **`factor(tib, col)`.** Returns a vector with the type of `col` transformed into a 'factor column.' If any columns other than `col` contained no observations, they are removed. Typically used in `mutate`.
- **`filter(tib, col %in% vec)` (*dplyr*).** Returns a tibble containing those rows at which the value of the column `col` were among the values in `vec`. R in a sense 'remembers' the values of `col` in `tib` that are not in `vec` and will treat them as having no observations for the filtered tibble. Use the `factor` function to remove these values from consideration with `ftib <- ftib %>% mutate(Newcol = factor(col))`, where `ftib <- tib %>% filter(tib, col %in% vec)`.
- **`select(tib, col1, col2,...)` (*dplyr*).** Returns a tibble containing the same rows as `tib` but only the columns among the $\mathrm{col}_i.$
- **`between(x, left, right)` (*dyplr*).** Shorthand for $x\in(\operatorname{left}, \operatorname{right}).$ This can help when making filters.
- **`arrange(tib, colord)` (*dyplr*).** Here `colord` is a column of `tib` containing values that can be ordered. The function returns `tib` with its rows reordered so that `colord` now appears in ascending order. `desc(colord)` can be used so that `colord` appears in descending order.

### Purrr
- **`map(.x, .f)`.** Returns a list of the results of applying the function `.f` to the structure `.x`. `map` nor its variants is recommended for large collections of data with length larger than $10^4$ or so.
	- **`map_vec(.x, .f)`.** Instead of a list it returns a vector. Typically more useful when trying perform vector arithmetic.
### GGPlot
The default graphical functions offered by R suffice for many simple tasks and, as usual, are awkward to work with. The `ggplot2` package gives us alternate versions of the basic graphical functions (and more complex plots) with a general syntax for configuring and layering graphical features with a 'graphical grammar:'

```R
ggplot(data = <TIB>, mapping = aes(<TIB Cols>)) + <GEOM_FUNCTION>()
```

The arguments of `aes` are typically `x = col1` and `y = col2`. The variables `col1` and `col2` are the names of columns in `TIB`, not to be accessed as `TIB$col1`. Typically `<GEOM_FUNCTION>()` takes the form `geom_<PLOT>()`. We may add multiple geom functions to layer plots in a single image with a `+`. Each geom function has its own default parameters that we can change. For ease of reading one should separate them at the `+` into their own line:

```R
ggplot(data = <TIB>, mapping = aes(<TIB Cols>)) +
	<GEOM_FUNCTION1>() +
	<GEOM_FUNCTION2>() +
	<GEOM_FUNCTION3>() +
```

The order in which the plots are added determines which plot is 'on top.' Here, `<GEOM_FUNCTION3>` is atop `<GEOM_FUNCTION2>` which is atop `<GEOM_FUNCTION1>`.

``````ad-rmk
title:Passing Non-Data-Frames as Arguments

When we collect some test results in a vector or matrix `mat` that is not a data frame, instead of passing it through `data.frame` we could instead pass it through `tibble`, provided by `tidyr`, and avoid naming any columns:

```r
tibble(mat) %>% ggplot(mapping = aes(mat)) +
```
``````

#### Common Arguments
- The `fill` command determines the colour of an area whilst the `colour` (or `color`) command determines the outline.
> [!rem] Fills and Colours
> - **`"red"`**
> - **`"black"`**
> - **`"white"`**
> - **`"grey"`**
> - **`"pink"`**
> - **`"green"`**
> - **`"blue"`**
> - **`"tomato"`**
> - **`"skyblue"`**

- **`alpha`.** Transparency values from 0 to 1.
- **`position = "identity"`.** A string naming the adjustment in the position of the marks. `"jitter"` adds uniform random noise to the position.

#### Geom Functions
By default many of these take `aes(<ARGS>)` as an argument and inherit it from the `ggplot()` they are attached to. Arguments in `aes`, called aesthetics, are typically shown in a legend by default. Any arguments may be changed to only affect a single plot and dot-dot notation, `..count..`, should be replaced by, say, `after_stat(count)`. Furthermore, the arguments inside `aes` need not only be of the form `x = ..<STAT>..`. They can be arbitrary, legal expressions of multiple `..<STAT>..` values, for example.

- **`labs()`.** Determiner of the titles, subtitles, and other labels of a plot.
	- **`(character) title`.** Displayed on the top left.
	- **`(character) subtitle`.** Displayed below the title.
	- **`(character) caption`.** Displayed on the bottom right.
	- **`(character) x`.** The label on the $x$-axis.
	- **`(character) y`.** The label on the $y$-axis.
- **`geom_histogram(bins = 30, aes(x,y))`.** Generates a histogram of the data provided with bins of equal width—30 by default. It assumes the `x` in `aes(x = VAR)` is continuous, i.e. at least numeric.
	- **`aes(y = ..count..)`.** The default option, making the heights on bins the count number.
		- **`..density..`.** Re-scales the histogram so that bin heights sum to 1.
		- **`..ncount..`.** Re-scales the plot to make the tallest bar have height 1.
		- **`..ndensity..`.** The heights are densities, scaled s.t. the tallest bar is 1.
		- **`..width..`.** Plots the width of a bar.
	- **`(numeric) center`.** Centres the plot s.t. its median is an `center`.
- **`stat_bin(geom = "bar", bins = 30)`.** Essentially what `geom_histogram()` and `geom_bar()` do.
	- **`stat_bin(aes(y=..count.., label=NA), geom = "text", vjust = 0)`.** 
		- The `y` argument, alongside `bins`, determine the heights of `labels`, which may be one of the `after_stat()` values. `vjust` offsets the labels by the indicated amount, negative arguments going upward and positive ones downward. If the `y` argument disagree with those passed to `geom_histogram()`, assuming they were, these take precedence and the histogram will not display. Make sure they are the same argument.
- **`geom_density(aes(x,y))`.** A density curve of the data.
	- **`aes(y = ..density..)`.**
		- **`..scaled..`.** Re-scales the plot s.t. the highest value is 1.
- **`geom_bar(aes(x))`.** Similar output to `geom_histogram` but by default counting the frequency of categorical labels. It can only receive `aes(x)` or `aes(y)` but not both.
	- **`aes(y = ..count..)`.** The default parameter.
		- **`..prop..`.** Rescales each bar to be the 'groupwise proportion,' so every bar has height $1.$ By adjusting the number of groups, we can make this useful. To obtain the relative frequency bar chart, for example, we pass as an argument `aes(y = ..prop.., group = 1)`.
	- **`position = "identity"`.** Determines the placement of the bars. Mainly used when plotting multiple bars side-by-side or stacked plots.
		- **`"dodge"`.** Side-by-side bar plots as determined by `aes(fill = colgrp)`.
		- **`"stack"`.** Layered bar plots as determined by `aes(fill = colgrp)`.
		- **`"fill"`.** Normalises the bar heights so that each has height $1.$ If each observation is ungrouped, we may produce stacked bar charts showing empirical conditional distributions of 2 categorical variables across their levels: `tib %>% ggplot(aes(x = cond, fill = cat)) + geom_bar(position = "fill")`.
	- **`width = NULL`.** Bar width. By default it is $90\%$ of the 'resolution' of the data.
- **`geom_col(aes(x,y))`.** Similar to `geom_bar()` but can now have the heights of the bars mean something other than an `after_stat`.
	- **`position = "identity"`.** Similar to `geom_bar`.
		- **`"fill"`.** If `tib` has a numeric column `freq` counting the number of observations with the particular traits associated with that row, we can easily construct stacked bar charts of empirical conditional distributions as with `geom_bar` with only 1 modification: `tib %>% ggplot(aes(x = cond, fill = cat)) + geom_col(aes(y = freq), position = "fill")`.
- **`geom_boxplot(aes(x))`.** A horizontal box plot with the same defaults as the base R function. It can be flipped by supplying `aes(y)` instead of `aes(x)`.
- **`geom_rug(sides = "bl")`.** A rug plot placed on the top, bottom, left, or right of a plot according to the `sides` argument with `"tblr"` or any substring.
- **`geom_line(aes(x,y))`.** A line plot where consecutive $(x,y)$ pairs with lines.
- **`geom_point(aes(x,y))`.** Scatter plot.
	- **`(numeric) stroke`.** Determines what point font to draw the dots with. Due to this, we can make plots where the dots have an outline by first drawing the plot with a larger-than-intended stroke and the outline colour and then drawing a plot with the intended stroke and the inside colour.
- **`geom_vline(xintercept = (numeric) vctr, lwd = width)`.** A vertical line at the positions in `vctr` and width `width`. If a single number is placed instead of `vctr`, it shall be placed there.
- **`geom_hline(yintercept = num)`.** Same as above.
- **`geom_abline(slope, intercept)`.** The line $x\cdot\mathrm{slope}+\mathrm{intercept},$ in $y$-intercept form.
- **`geom_qq(distribution = stats::qnorm, aes(sample))`.** A [[Presentation-of-Data#QQ Plots|QQ plot]] of the data against a specified distribution, by default a standard normal distribution. To add the line where the points should lie were the distributions equal, simply add `stat_qq_line(distribution = stats::qnorm)`. These require `aes(sample = col)` instead of the usual `aes(x = col)`.

## TikzDevices
For typesetting text, `\\` must be used instead of `\` and percentage signs `%` must be escaped in this way. Any symbols not in bare $\LaTeX$ must be imported with the `tikzLatexPackages` or in the `tikz` function.

> [!warning] Format Functions
> Functions such as `percent_format()` introduce text into the plot that is not appropriately escaped, namely `%`. Usually these allow you to change the formatting.

- **`tikz((character) file = filename, (numeric) width = 7, (numeric) height = 7, (logical) sanitize = F)`.** Returns nothing and merely records future plot commands as TikZ commands and put into the file `filename`. If `sanitize=T`, special characters in text found in `tikzSanitizeCharacters` will be replaced by text provided by `tikzReplacementCharacters`, e.g. by default `$100%$` will be treated as `\\$100\\%\\$`.
	- **`(character) packages = getOptions('tikzLatexPackages')`.** Loads any necessary packages or macros. To add more, use the syntax `packages = c(getOptions(...), "\\usepackage{pkg}", "\\usetikzlibrary{lib}", "\\newcommand{cmd}", "\\def\\cmd{cmd}")`.
- **`dev.off()`.** Stops the recording of plot commands as TikZ commands.

## Yarrr
- **`pirateplot(data = tib)`.** A [[Presentation-of-Data#Pirate Plots|pirate plot]] though instead of a vertical bar it defaults to a box not representing a confidence interval.
	- **`(character) inf.method = "ci"`.** Makes the box around the mean represent a confidence interval unless a different display option is chosen.
	- **`(character) inf.disp = "line"`.** Replaces the box around the mean with a line. These two are the most common options.

# R Markdown
Integrating R code in the same document as the prose of a report or analysis allows for reproduction of the analysis by virtue of being easy to find. R Markdown files are created by clicking File $\to$ New File $\to$ R Markdown, and then choosing the preferred output format. The new file is untitled until we save. To compile the file we do not press Run but instead Knit. The following syntax inserts R code in the specified place:

``````r
# Header

Some text

```{r}
Code here
```

Other text.
``````

Rmd files support MathJax though snippets in R lack regex support, greatly limiting its use for LaTeX editing. Any libraries in need of importing, variables in need of assigning, or settings one wishes to be common throughout code blocks are stated in the first code chunk:

``````r
```{r setup, include = FALSE}
knitr::opts_chunk$set(echo = FALSE)
knitr::opts_chunk$set(fig.width = 4, fig.height = 3) # In inches
library(mosaic)
library(tidyverse)
var1 <- read_csv("$PATH/filename.csv")
var2 <- val
```
``````

Start: 154
End: 

All of Statistics review.