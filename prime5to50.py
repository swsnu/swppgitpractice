#!/usr/bin/python
def isprime(num):
    cnt = 0
    for i in range(2,num/2):
        if num%i == 0:
            return False
    return True

for i in range(5,51):
    if isprime(i)==True:
        print("{:} is a prime number".format(i))
    

