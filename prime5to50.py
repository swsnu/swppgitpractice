for num in range(5,51):
    for i in range(2,num):
        if(num%i) == 0:
            break
    else:
         print num, "is a prime number"
