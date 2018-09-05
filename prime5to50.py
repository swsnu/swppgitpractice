for i in range(5,50):
    flag = True
    for j in range(2,i):
        if i%j == 0:
            flag = False
            break
    if flag:
        print (str(i) + " is a prime number\n")
