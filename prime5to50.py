primes = []

for num in range(5, 51):
    isPrime = True
    for dividend in range (2, num):
        if num % dividend == 0:
            isPrime = False
    if isPrime:
        primes.append(num)

for prime in primes:
    print(str(prime) + " is a prime number")
