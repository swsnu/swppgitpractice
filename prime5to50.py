#!/usr/bin/python

# Define a list to save all the prime numbers from 0 to 50.
primeList = []

for i in range(5, 51):
    #j = i
    check = 2
    while (check < i):
        if (i % check == 0):
            break
        else:
            check += 1
    if (check == i):
        primeList.append(i)

for i in primeList:
	sentence = str(i) + " is a prime number"
	print(sentence)
