for i in range(5,51):
	isPrime = True
	for j in range(2,i):
		if(i%j == 0):
			isPrime = False
			break
	if isPrime:
		print('{} is a prime number'.format(i))
			
