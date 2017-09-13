def main():
	for i in range(5, 51):
		sentinel = True
		for j in range(2, i):
			if i % j == 0:
				sentinel = False
				break
		if sentinel:
			print(str(i) + " is a prime number")
	return

main()
