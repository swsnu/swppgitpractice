def isPrime(n):
	for i in range(2,n):
		if n%i == 0:
			return False
	return True


	 

for n in range(5, 51):
	if isPrime(n) == True:
		print(n, " is a prime number")
