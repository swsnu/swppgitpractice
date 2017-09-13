function prime5to50(): string {
	let message : string = ""

	for (var n = 5; n < 50; n++) {
		var isPrime = true;
		for (var i = 2; i < n; i++) {
			if (n % i == 0) {
				isPrime = false;
			}
		}
		if (isPrime) {
			message += n + " is a prime number<br>";
		}
	}	
	return message
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
