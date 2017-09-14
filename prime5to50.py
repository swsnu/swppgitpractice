#!/usr/bin/python

for i in range(5, 51):
	for j in range(2,i):
		if i%j == 0: break
		elif j*j > i:
			print('%d is a prime number' %i)
			break

		
		
