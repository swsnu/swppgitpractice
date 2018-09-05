def is_prime(x):
    if x == 1:
        return False
    for i in range(3, x):
        if x % i == 0:
            return False
    return True

for i in range(5, 51):
    if is_prime(i):
        print("{} is a prime number".format(i))
