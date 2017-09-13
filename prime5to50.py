for num in range (5, 51) :
	var = True
	for i in range (2, num) :
		if num % i == 0 :
			var = False
	if var :
		print num, "is a prime number"
 
