#!/usr/bin/python


for num in range(5,50 + 1):
   # prime numbers are greater than 1
   if num > 1:
       for i in range(2,num):
           if (num % i) == 0:
               break
       else:
           print(num, "is a prime number")
