#!/usr/bin/python

def isprime (num):
	for i in range (2, num - 1):
		if num % i == 0:
			return False
	return True


for j in range (5, 50):
	if isprime (j):
		print j,"is a prime number"
