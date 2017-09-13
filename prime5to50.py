#!/usr/bin/python

minnum = 5
maxnum = 50
primes = []
for i in range(2, maxnum+1):
	if len(primes) == 0:
		primes.append(i)
	else:
		is_prime = True
		for p in primes:
			if i%p == 0:
				is_prime = False	
				break
		if is_prime:
			primes.append(i)

for p in primes:
	if minnum <= p and maxnum >= p:
		print("{} is a prime numger".format(p))
