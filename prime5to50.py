primes = [2, 3]

def is_prime(dividend, divisors):
    for divisor in divisors:
        if dividend % divisor == 0:
            return False
    return True


for i in range(5, 51):
    if is_prime(i, primes):
        primes.append(i)
        print('{} is a prime number'.format(i))




