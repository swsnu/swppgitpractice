import math

def isPrime(x):
    if x < 2:
        return False
    sqrtx = int(math.sqrt(x))
    for i in range(2, sqrtx + 1):
        if x%i == 0:
            return False
    return True

def printPrime(x):
    ifPrime = isPrime(x)
    if ifPrime == True:
        print('{} is a prime number'.format(x))


start = 5
end = 50
for x in range(start, end + 1):
    printPrime(x)
