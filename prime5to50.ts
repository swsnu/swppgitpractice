function prime5to50(): string {
	let message : string = ""

	// TODO: fill up the message string with the proper content.
	let primeList: number[];

	for (var i:number = 5; i<=50; i++) {
		var check:number = 2;
		while (check < i) {
			if (i % check == 0) {
				break;
			} else {
				check ++;
			}
		}
		if (check == i) {
			message += i + " is a prime number" + "<br/>";
		}
	}
	return message
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
