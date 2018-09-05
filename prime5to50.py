print("\n".join(map(lambda n:"{0} is a prime number".format(n),filter(lambda n:not list(filter(lambda m:n%m==0,range(2,int(n**0.5)+2))),range(5,51)))))
