function prime5to50(): string {
	let message : string = ""

	// TODO: fill up the message string with the proper content.
	var i:number = 2;
	var j:number = 2;
	for(i = 5; i <= 50; i += 2) {
		for(j = 3; j <= i-1; j++) {
			if(i % 2 == 0) break;
			if(j == i-1) message += i + " is a prime number\n";
		}
	}
	return message
}

// You may use additional helper functions.

console.log(prime5to50())
