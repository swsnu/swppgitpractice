
for i in range(5,50):
    is_prime = true;
    for j in range (2,i):
        if i % j == 0:
            is_prime = false;
    if is_prime == true:
        print(i + "is a prime number")
        