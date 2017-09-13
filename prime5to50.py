for i in range(5, 51):
    is_prime = True
    for j in range(2, i):
        if i%j == 0:
            is_prime = False
            break
    if is_prime:
        print("{} is a prime number".format(i))
