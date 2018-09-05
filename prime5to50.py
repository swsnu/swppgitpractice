#!usr/bin/python
def isprime(n):
    for j in range(2,n):
        if n%j==0:
            return False
    return True
for i in range(5,51):
    if isprime(i):
        print(i,"is a prime number")

