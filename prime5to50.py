def is_prime(n):
    for y in range(2, n):
        if n % y == 0:
            return 0
        else:
            continue
    return 1

for x in range(5, 51):
    if is_prime(x) == 1:
         print x, ' is a prime number'



