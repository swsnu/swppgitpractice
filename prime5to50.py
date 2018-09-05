
def is_prime(n):
 for i in range(2,n-1):
  if n%i==0:
   return False
 return True


for var in range(5,50):
 if is_prime(var):
  print (var, 'is a prime number')

