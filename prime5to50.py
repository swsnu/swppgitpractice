#!/bin/python

for i in range(5, 50):
    prime = True
    for j in range(2, i-1):
        if i % j is 0:
            prime = False
            break
    if prime:
        print(str(i) + " is prime number")

