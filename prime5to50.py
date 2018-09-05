def isPrime(a):
    bool = True
    for i in range(2, a):
        if a%i == 0:
            bool = False
    return bool

for x in range(5,51):
    if isPrime(x):
        print("%d is prime number"% x)
