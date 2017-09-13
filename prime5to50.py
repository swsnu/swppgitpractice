for i in range(5,51):
    if (i % 2 != 0):
        if (i % 3 != 0):
            if (i % 5 != 0 or i == 5):
                if (i % 7 != 0 or i == 7):
                    print (i,"is prime number")