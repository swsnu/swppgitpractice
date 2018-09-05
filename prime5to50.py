def is_prime(n):
	for i in range(2, n):
		if(n%i==0):
			return False
	return True
for j in range (5, 50):
	if is_prime(j):
		print(j, "is a prime number")

