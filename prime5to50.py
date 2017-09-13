message = ""

num = 5
flag = 0

while (num <= 50):
    div = 2
    while (div < num):
        if (num % div == 0):
            flag = 1
            break
        div = div + 1
    if (flag == 0):
        print (str(num) + " is a prime number")
    flag = 0
    num = num + 1

