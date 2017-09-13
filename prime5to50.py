def getPrime(number) :
	if number == 2:
		print number,
	for x in range(2,number):
		if number % x == 0:
			break
		elif x == number -1:
			print number, "is a prime number"

for i in range (5, 51) : 
	getPrime(i)


