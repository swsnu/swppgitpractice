#!/usr/bin/python

for x in range(5,51):
    isPrime = True
    for y in range(2, x):
        if x % y == 0:
            isPrime = False
    if isPrime:
        print(str(x) + " is prime number")
