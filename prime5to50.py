for i in range(5,51) :
    k = 0;
    for j in range(2,i+1) :
        k = j
        if i % j == 0 :
            break
    if i == k :
        print("%d is a prime number" % i)
