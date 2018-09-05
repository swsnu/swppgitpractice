def isPrime(n):
    if(n==1): return False
    for i in range(2,n//2+1):
        if(n%i == 0):
            return False
    return True
for i in range(5,51):
    if(isPrime(i)):
        print(""+str(i)+" is a prime number")
