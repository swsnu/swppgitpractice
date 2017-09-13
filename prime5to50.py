import math


def is_prime(n):
    if n < 2:
        return False
    elif n <= 3:
        return True
    else:
        sqrt = math.floor(math.sqrt(n))
        return all(n % i != 0 for i in range(2, sqrt + 1))


for i in range(5, 50):
    if is_prime(i):
        print('{} is a prime number'.format(i))
