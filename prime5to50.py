def print5to50():
    for num in range(5, 50):
        div = 2
        while div < num:
            if num % div == 0:
                break
            div=div+1
        if div == num:
            print(str(num) + ' is a prime number')


print5to50()
