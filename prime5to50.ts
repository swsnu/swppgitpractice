function prime5to50(): string {
	let message : string = ""

	// TODO: fill up the message string with the proper content.

	var num:number = 5;
	var i:number;
	var j:number;
	var isprime:Boolean = true;

	for(i=num; 50>=i; i++) {
		isprime = true;
		for(j=2; i>j; j++) {
			if(i%j==0) {
				isprime = false;
				break;
			}
		}

		if(isprime==true) {
			message = message + i + " is a prime number<br>";
		}
	}

	return message
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
