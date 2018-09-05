#!/usr/bin/python
i = 5
l = [2, 3]
while i <= 50:
    q = 0
    for a in l:
        if i % a == 0:
            q = 1
    if q == 0:
        l.append(i)
        print(i)
    i += 1
