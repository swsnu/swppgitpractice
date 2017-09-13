function prime5to50(): string {
	var i : number;
	let message2 : string = " is a prime number"
	let message : string = "";
	for (i = 5 ; i < 51 ; i++) {
		if (prime(i)) message += i.toString() + message2 + "</br>";
	}
	// TODO: fill up the message string with the proper content.

	return message
}

// You may use additional helper functions.

function prime(num : number): number {
	var checker = 1;
	var i:number = num - 1;
	while(i >= 2) {
		if (num % i == 0) {
			checker = 0;
			break;
		}
		i--;
	}
	if (checker) return num;
}

document.body.innerHTML = prime5to50()
