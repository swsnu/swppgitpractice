prime = [2, 3]
num = range(5, 50)

for i in num:
    flag = True
    for p in prime:
        if i % p == 0:
            flag = False
            break
    if flag:
        prime.append(i)
        print(str(i)+" is a prime number")
