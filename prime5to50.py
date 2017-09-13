#!/usr/bin/python

count = 0
for i in range(5, 51):
	count = 0
	for j in range(2, i):
		if(i % j == 0):
			count = count + 1
	if(count == 0):
		print("{0} is a  prime number".format(i))
