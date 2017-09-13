#!/usr/bin/python

for a in range(5,51):
    k=0
    for i in range(2,a//2):
        if(a%i==0):
            k=k+1
    if(k<=0):
        print("{0} is a prime number".format(a))
