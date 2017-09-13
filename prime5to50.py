import math


def main():
    ar = [1 for _ in range(49)] # 0 ~ 48, which means number 2 ~ 50

    # remove 2's multiplies
    idx = 2
    while idx < 49:
        ar[idx] = 0
        idx += 2

    # sieve the array
    for i in range(3, int(math.sqrt(50)) + 1, 2):
        idx = 2 * i - 2
        while (idx < 49):
            ar[idx] = 0
            idx += i

    # print the result
    for i in range(3, 49, 2):
        if ar[i] == 1:
            print("{} is a prime number".format(i + 2))


if __name__ == "__main__":
    main()
