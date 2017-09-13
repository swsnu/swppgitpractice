p = True
for var in range(5, 51):
    for i in range(2, var):
        if var % i == 0:
            p = False
            break
    if p:
        print(var, "is a prime number")
    p = True


