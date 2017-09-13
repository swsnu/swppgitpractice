
def is_prime(n):
    for i in range(2, n):
        if n % i == 0:
            return False
    return True

for num in range(5, 51):
    if is_prime(num):
        print('%d is a prime number'%num)
