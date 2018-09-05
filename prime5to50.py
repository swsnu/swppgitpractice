#!/usr/bin/pyhton

def is_prime(num):
    for i in range(2, num):
        if(num % i == 0):
            if(i == num):
                return True
            else:
                return False
    return True
            

for i in range(5, 50):
    if(is_prime(i)):
        print(i, " is a prime number")
