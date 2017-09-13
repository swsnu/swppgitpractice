for n in range (5, 51):
  for i in range (2, n + 1):
    if n % i == 0:
      break
  if n == i:
    print (str(n) + " is a prime number")
