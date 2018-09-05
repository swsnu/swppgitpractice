import math
for i in range(5,51):
    prime=True
    for j in range (2,int(math.sqrt(i)+1)):
        if i%j ==0:
            prime=False
            break
    if prime:
        s=str(i)
        print (s+" is a prime number")

