#!/usr/bin/python

for n in range(5,50):
   for i in range(2,n): 
      if(n % i) == 0:
         break
   else:
      print(n, "is a prime number") 
