function prime5to50(): string {
	let message : string = ""

	// TODO: fill up the message string with the proper content.

    let primes = [];
    for (let i = 5; i <= 50; i++) {
        let isPrime = true;
        for (let k = 2; k < i; k++) {
            if (i % k == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
        }
    }
    message = primes.join(" ");
	return message
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
