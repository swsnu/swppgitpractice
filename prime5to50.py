#!/usr/bin/env python
primes = [x for x in range(5, 50 + 1) if all(x % factor != 0 for factor in range(2, x))]
print(" ".join(map(str, primes)))
