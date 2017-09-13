for n in range(5,50):
	isprime = True
	for m in range(2,n):
		if(n%m==0):
			isprime = False
			break
	
	if(isprime):
		print(n, " is a prime number")

