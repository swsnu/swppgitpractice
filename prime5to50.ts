function isPrime(num: number): boolean {
	var i:number;

	for(i = 2; i * i <= num; i++){
		if(num % i == 0)
			return false;
	}

	return true;
}

function prime5to50(): string {
	let message : string = ""

	// TODO: fill up the message string with the proper content.
	var num: number;
	for(num = 5; num <= 50; num++){
		if( isPrime(num) )
			message += ( num + " is a prime number<br/>");
	}

	return message
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
