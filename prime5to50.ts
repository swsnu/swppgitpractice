function prime5to50(): string {
	let message : string = ""
	var i:number;
	for (i = 5; i <= 50; i++) {
		if (prime(i)) {
			message = i + " is a prime number"
			console.log(message);
		}
	}
	// TODO: fill up the message string with the proper content.

	return message;
}

function prime(n:number) : Boolean {
	var i: number;
	for (i = 1; i <= n; i++) {
		if (n % i === 0 && i !== 1 && i !== n) {
			return false;
		}
	}
	return true;
}
// You may use additional helper functions.

prime5to50()
//idocument.body.innerHTML = prime5to50()
