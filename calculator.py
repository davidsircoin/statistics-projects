mylist = [4.0, 1.1, 0.2, 1.2, 2.5, 2.0, 0.7, 1.0]

squares = lambda x: x**2

mylist_sq = []

for i in mylist:
    mylist_sq.append(squares(i))

print(mylist)
print(mylist_sq)

print(16/sum(mylist_sq))
