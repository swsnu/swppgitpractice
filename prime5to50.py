answer = [2, 3]

for number in range(46):
	for prime in answer:
		if ((number + 5) % prime == 0):
			break
		elif (prime == answer[len(answer) - 1]):
			answer.append(number + 5)
			break

answer.remove(2)
answer.remove(3)

for number in answer:
	print(number, 'is a prime number')
