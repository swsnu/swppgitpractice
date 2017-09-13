for num in range(5, 50):
	for i in range(2, num-1):
		if num%i == 0:
			break

	else:
		print num, "is a prime number"
	
