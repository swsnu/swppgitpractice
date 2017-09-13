#!/usr/bin/python

from math import sqrt

for i in range(5, 51):
	prime = True
	for j in range(2, int(sqrt(i))+1):
		if i % j == 0:
			prime = False
			break
	if prime:
		print('%d is a prime number' % i)
