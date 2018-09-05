function prime5to50(): string {
	let message: string = ""

	outer:
	for (var n = 5; n < 50; n++) {
		if (n % 2 != 0) {
			for (var i = 3; i < Math.sqrt(n); i += 2) {
				if (n % i == 0) {
					continue outer;
				}
			}
			message += n + " is a prime number<br>"
		}
	}

	return message
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
