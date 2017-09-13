from math import sqrt, ceil

def is_prime_range(start, end):
    return [n for n in range(start, end) if all(n % m for m in range(2, ceil((sqrt(n)))))]

for prime in is_prime_range(5,51):
    print(str(prime) + " is a prime number")