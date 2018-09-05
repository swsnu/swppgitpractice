#!/usr/bin/python

for x in range(5,50):
    isPrime = 0
    for y in range(2,26):
        if(x % y == 0):
            isPrime += 1
    if(isPrime==1):
        print(x, " is a prime number")

