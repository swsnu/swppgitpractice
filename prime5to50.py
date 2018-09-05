from math import sqrt

def is_prime(num):
    x = int(sqrt(num)) + 1

    for i in range(2, x):
        if (num % i) == 0:
            return False

    return True

for i in range(5, 51):
    if is_prime(i):
        print("{:} is a prime number".format(i))
