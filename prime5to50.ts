function prime5to50(): string {
	let message : string = "";
	var isPrime:boolean = true;	
	var i:number = 0;
	var j:number = 0;

	for (i = 5; i <= 50; i++) {
		for(j = 2; j <= i; j++) {
			if (i%j == 0) {
				break;
			}
		}
		if (i == j) {
			message += i + ' is a prime number<br/>';
		}
	}
	return message;
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
