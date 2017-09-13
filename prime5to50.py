def is_prime(n):
	for i in range(2,n):
		if(n%i == 0) : break
		if(i==n-1):return True
	return False

for i in range(5,51):
        if(is_prime(i)): print(i, "is a prime number")

