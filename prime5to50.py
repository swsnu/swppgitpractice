
#!/usr/bin/python


def is_prime(n):
	for i in range(2,n):
	 if n % i == 0:
	  return False
	else:
	 return True

for index in range(5,51):
	if is_prime(index):
	 print(index,"is a prime number")
	


