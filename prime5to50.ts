function prime5to50(): string {
	let message : string = ""

	var i:number;
	for(i=5;i<=50;i++) {
		var j = 0;
		var is_prime = 1;
		for(j=2;j*j<=i;j++) {
			if(i % j == 0) is_prime = 0;
		}
		if(is_prime) {
			message = message + i.toString() + " is a prime number<br>";
		}
	}

	return message
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()

