#!usr/bin/python
for num in range(5,51):
	checker = 0;
	for num2 in range(2, num):
		if (num % num2 == 0): 
			checker = 1
			break
	if (not checker): print(num)
