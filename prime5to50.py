import math

def isPrime(number):
	for i in range(2, int(math.sqrt(number) + 1)):
		if number % i == 0:
			return False
	return True

for number in range(5, 51):
	if isPrime(number):
		print(str(number) + " is a prime number")