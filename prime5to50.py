for i in range(5, 45):
    cnt = 0
    for j in range(1, i):
        if(i % j == 0):
            continue
        else:
            cnt += 1
    if(cnt == (i - 2)):
        print(i, "is a prime number\n")


             
        
