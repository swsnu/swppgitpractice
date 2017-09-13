def isPrime(num):
	for q in range(2, num):
		if (num % q) == 0:
			return False
	return True

for num in range(5, 51):
	if (isPrime(num)):
		print(num, "is a prime number")
