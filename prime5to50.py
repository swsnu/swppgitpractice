def isPrime(n):
    for i in range(2,int(n**0.5)+1):
        if n%i==0:
            return False

    return True

if __name__ == "__main__":
    for i in range(5,51):
        if isPrime(i) == True:
            print(i,"is a prime number")

