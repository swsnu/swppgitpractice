function prime5to50(): string {
	let message : string = ""
    var primes = [2, 3]

    for (var i=5;i<51;i++) {
		if (isPrime(i, primes)) {
			message += i + " is a prime number <br/>"
			primes.push(i)
		}
	}

	return message
}

function isPrime(num, primes) {
	for (var i=0;i<primes.length;i++) {
		if (num % primes[i]==0)
			return false
	}
	return true
}
// You may use additional helper functions.

document.body.innerHTML = prime5to50()
