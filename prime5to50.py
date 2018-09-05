def generate_prime_between(a, b):
    if b < 2:
        raise StopIteration
    if a < 2:
        yield 2
        a = 3
    if a % 2 == 0:
        a += 1

    for n in range(a, b + 1, 2):
        if n % 2 == 0:
            continue
        for i in range(3, int(n**0.5) + 1, 2):
            if n % i == 0:
                break
        else:
            yield n


for i in generate_prime_between(5, 50):
    print("%d is a prime number" % i)
