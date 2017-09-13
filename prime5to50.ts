function prime5to50(): string {
	let message : string = ""

	// TODO: fill up the message string with the proper content.
	var x:number;
	for (x = 5; x <= 50; x++) {
		if (IsPrime(x)) {
			message += x;
			message += " is a prime number<br>";
		}
	}

	return message;
}

// You may use additional helper functions.

function IsPrime(n): Boolean {
	if (n == 2) {
		return true;
	} else if (n % 2 == 0) {
		return false;
	}
	var i:number;
	for (i = 3; i < n; i += 2) {
		if (n % i == 0) {
			return false;
		}
	}
	return true;
}

document.body.innerHTML = prime5to50()
