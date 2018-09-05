for number in range(5,51):
    
    checker = True

    if number % 2 == 0:
        checker = False
    if number % 3 == 0:
        checker = False
    if number % 5 == 0:
        if number / 5 != 1:
            checker = False
    if number % 7 == 0:
        if number / 7 != 1:
            checker = False

    if checker:
        print(number, "is a prime number")
        
