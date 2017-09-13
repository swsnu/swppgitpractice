# -*- coding: utf-8 -*-
# Author : Seungwoo Lee

message = ''

for i in range(5, 50):
    check = True
    for j in range(2, i//2):
        if i%j == 0:
            check = False
    if check:
        print(str(i) + " is a prime number")

