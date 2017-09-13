function prime5to50(): string {
	let message : string = ""

	// TODO: fill up the message string with the proper content.
	var num:number;
	var q:number;

	for (num = 5; num <= 50; num++) {
		for (q = 2; q < num; q++) {
			if (num % q == 0) {
				break;
			}
		}

		if (q == num) {
			message += (num + " is a prime number<br/>");
		}
	}

	return message;
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50();
