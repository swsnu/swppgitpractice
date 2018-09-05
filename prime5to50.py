#!/usr/bin/python

for num in range(5, 51):
    checker = True
    for x in range(2, num):
        if(num % x) == 0:
            checker = False
    if(checker):
        print(str(num) + " is a prime number")


