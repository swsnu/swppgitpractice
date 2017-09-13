import math

for i in range(5, 51):
	sqrtI = int(math.sqrt(i))
	isPrime = True

	for j in range(2, sqrtI + 1):
		if(i % j == 0):
			isPrime = False
			break

	if(isPrime):
		print(i, ' is a prime number')
