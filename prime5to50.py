
for n in range(5, 51):
    for m in range(1, n+1):
        if n % m == 0 and m != 1 and m != n:
            break
        elif m == n:
            print("{} is a prime number".format(n))

