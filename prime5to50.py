def isPrime(n):
	for i in range (2, n):
		if n % i == 0:
			return False
	return True

for i in range (5, 51):
	if isPrime(i):
		print("{} is a prime number".format(i) )
