#!/usr/bin/python

def is_prime(n):
	if n>1:
		for i in range(2,n):
			if(n%i)==0:
				return False
		else:
			return True


for i in range(5,50):
	if(is_prime(i)):
		print ("%s is a prime number" %i)




