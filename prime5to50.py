#!/usr/bin/python

def is_prime(p):
    for i in range(2, p):
        if p % i == 0:
            return False
    return True

print('\n'.join(['%d is a prime number' % p for p in range(5, 51) if is_prime(p)]))
