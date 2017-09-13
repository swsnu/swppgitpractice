primeNumber = [2, 3]

for i in range(5, 50):
    isPrime = True
    for j in primeNumber:
        if 0 != i%j:
            continue
        else:
            isPrime = False
            break
    if isPrime:
        print i, "is a prime number"
        primeNumber.append(i)
	
