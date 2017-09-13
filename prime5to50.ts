function isprime(num: number): boolean {
	for(let i: number = 2; i < num ; ++i){
		if(num%i == 0) return false;
	}
	return true;
}
function prime5to50(): string {
	let message : string = ""
	for(let i: number=5 ; i <= 50 ; ++i){
		if(isprime(i)) message = message + i + " is a prime number" + "<br/>"
	}

	// TODO: fill up the message string with the proper content.

	return message
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
