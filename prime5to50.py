#!/usr/bin/python

def IsPrime(n):
  if (n == 2): return True
  elif (n % 2 == 0): return False
  for i in range(3, n, 2):
    if (n % i == 0): return False
  return True

for x in range(5, 50):
  if (IsPrime(x)): print(x, 'is a prime number')
