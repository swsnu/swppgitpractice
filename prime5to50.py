#!/usr/bin/python

for i in range(5, 50):
    prime = True
    for j in range(2, i - 1):
        if(i % j == 0):
            prime = False

    if(prime):
        print (i, 'is a prime number')


