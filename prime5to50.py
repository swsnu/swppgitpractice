
def is_prime(n):
    for i in range (2, n):
        if n % i == 0:
            return False
    return True

def main():
    for i in range (5, 51):
        if is_prime(i):
            print(i, "is a prime number")

if __name__ == "__main__":
    main()
