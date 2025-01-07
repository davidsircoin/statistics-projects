import math as m
def binprob(n,p,k):
  sum = 0
  
  for i in range(k,n + 1):
    sum += m.factorial(n) / ( m.factorial(i) * m.factorial(n-i) ) * p**i *  (1 - p)**(n-i)
  return sum
print(binprob(14, 1/3, 9))

