for i in range(5, 51):
    n = 0

    for j in range(1, i+1):
        if i % j == 0:
            n += 1
    if n == 2:
        print(str(i) + ' is a prime number')