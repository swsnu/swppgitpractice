num = 5
while(True) :
    divisor = 2
    prime = 0
    while(divisor < num- 1) :
        if (num % divisor == 0):
            prime = 1
            break
        divisor += 1
    if (prime == 0) :
        print("%d is a prime number" % num)
    if (num == 50):
        break;
    num += 1


