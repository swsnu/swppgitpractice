primeCandidates = [ n for n in range(2, 51) ] # 2 ~ 50
numCandidates = len(primeCandidates)

i = 0
while i < numCandidates:
    prime = primeCandidates[i]
    
    j = i + 1

    while j < numCandidates:
        if primeCandidates[j] % prime == 0:
            primeCandidates[j : j + 1] = []
            numCandidates -= 1
        else:
            j += 1
    # END: while loop 'j'

    i += 1
# END: while loop 'i'

primeCandidates[0:2] = []   # remove 2 and 3.

for prime in primeCandidates: print("%d is a prime number" % prime)
