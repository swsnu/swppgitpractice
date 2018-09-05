for num in range(5, 50):
    for a in range(2, num):
        if num % a == 0:
            break
    else: # loop not exited via break
        print(num, 'is a prime number')
