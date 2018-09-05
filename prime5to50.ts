function isPrime(num: number) {
	for(let i = 2; i <= num; i++) {
		if(num % i == 0) {
			if(i == num) return true;
			else return false;
		}
	}
	return true;
}

function prime5to50(): string {
	let message : string = ""

	// TODO: fill up the message string with the proper content.
	for(let i = 5; i <= 50; i++) {
		if(isPrime(i)) {
			message = message + `${i} is a prime number\n`;
		}
	}

	return message
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
