for i in range(5,51):
	cnt = 0
	for j in range(2,i):
		if i%j == 0:
			cnt=cnt+1
	if cnt==0:
		print(i,'is a prime number')
