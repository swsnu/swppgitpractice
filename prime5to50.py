#!/usr/bin/python

for num in range(5,46,1):
    if num%2 != 0:
        if num%3 != 0:
            if num%5 != 0:
                if num%7 != 0:
                    print(num, "is a prime number")
                elif num == 7:
                    print(num, "is a prime number")
            elif num == 5:
                print(num, "is a prime number")
