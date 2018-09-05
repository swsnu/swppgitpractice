for i in range(5, 51):
	check = 0
	for j in range(2, i):
		if(i%j == 0): check = 1; break
	if(check == 0):
		print("%d is a prime number" % i)

