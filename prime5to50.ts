function prime5to50(): string {
	let message : string = ""

	// TODO: fill up the message string with the proper content.
	var num:number;
	for (num = 5 ; 50 >= num ; num++) {
		var i:number;
		var prime = 1;
		for (i = 2 ; num-1 > i ; i++) {
			if (num % i == 0) {
				prime = 0;
			}
		}
		if (prime == 1) {
		message += num + " is a prime number <br>";
		}
	}	

	return message
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
