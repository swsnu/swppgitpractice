arr = [ True for x in range(51) ]

for i in range(2, 51):
    for j in range(i*2, 51, i):
        arr[j] = False

for i in range(5, 51):
    if arr[i]:
        print("%d is a prime number" % i)
