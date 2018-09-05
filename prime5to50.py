is_prime = [0] * 51

for i in range(2, 51):
	is_prime[i] = 1

for i in range(2, 51):
	if is_prime[i]:
		j = i * i
		while j <= 50:
			is_prime[j] = 0
			j += i

for i in range(5, 51):
	if is_prime[i]:
		print str(i) + " is a prime number"



