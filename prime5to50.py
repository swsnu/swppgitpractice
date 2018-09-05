def isPrime(n):
	i = 2
	while i < n:
		if n % i == 0:
			break
		else:
			i = i + 1
	if i == n:
		return True
	else:
		return False


var = range(5,51)


for i in var:
	if isPrime(i):
		print("{} is a prime number".format(i))
