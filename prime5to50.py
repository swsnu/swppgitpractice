def is_prime(n):
	for i in range(2, n):
		if n % i == 0:
			return False;
	return True;

for i in range(5, 50):
	if is_prime(i):
		print(str(i) + " is a prime number")
