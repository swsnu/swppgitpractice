function prime5to50(): string {
	let message : string = ""

	// TODO: fill up the message string with the proper content.

	var i:number;
	var j:number;
	var prime: boolean;

	for (i = 5 ; i <= 50 ; i++) {
		prime = true;
		for (j = 2 ; j < i ; j++) {
			if (i%j == 0) prime = false;
		}
		if (prime) message += i + " is a prime number</br>"
	}

	return message
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
