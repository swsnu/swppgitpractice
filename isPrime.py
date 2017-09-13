import numpy as np

"""
    (Module Docstring)
    Python Module:
"""


def main():
    for i in range(5, 51):
        result = isPrime(i)
        if result:
            print(i, ' is a prime number')
        else:
            print(i, ' is not a prime number')
    return


def isPrime(n):
    count = 0
    for i in range(1, n + 1):
        if n % i == 0:
            count += 1
            if(count > 2):
                return False
    return True


if __name__ == '__main__':
    main()
