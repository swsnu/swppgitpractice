function prime5to50() : string {
	let message : string = ""
	
	var i : number
	var j : number

	for(i = 5; i <= 50; i++) {
		var isPrime : boolean = true

		for(j = 2; j <= Math.sqrt(i); j++) {
			if(i % j == 0) {
				isPrime = false
				break
			}
		}

		if(isPrime) {
			message += i + " is a prime number <div>"
		}
	}

	return message
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
