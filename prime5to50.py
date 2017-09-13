#!/usr/bin/python
# I know a bit about Python, so I'm using some advanced features.

def primes(start, end):
    for i in range(start, end+1):
        for j in range(2, i//2):
            if i % j == 0:
                break
        else:
            yield i


for prime in primes(5, 50):
    print('{} is a prime number'.format(prime))

