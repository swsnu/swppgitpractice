for i in range(5,51):
    prime = True
    for j in range(2, i):
        if i % j == 0 :
            prime = False
            break
    if prime:
        print( '{} is a prime number'.format(i) )
