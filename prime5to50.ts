function prime5to50(): string {
	let message : string = ""

	// TODO: fill up the message string with the proper content.
	for(var i=5;i<=50;i++) {
		var is_prime = true;
		for(var j=2;j<i;j++) {
			if(i%j == 0) {
				is_prime = false;
				break;
			}
		}
		if(is_prime) {
			message += i + " is a prime number<br>"; 
		}
	}
	return message
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
