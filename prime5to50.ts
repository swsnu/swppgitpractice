function prime5to50(): string {
	let message : string = ""

	// TODO: fill up the message string with the proper content.
	for ( let i = 2 ; i < 51 ; i++ ){
		let prime = true;
		message += "CC"
		for ( let j = 2 ; j < i ; j++ ){
			if ( i % j == 0 ){
				prime = false;
				break;
			}
		}
		if ( prime ){
			message += "i is a prime number<br>"
		}
	}
	return message
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
