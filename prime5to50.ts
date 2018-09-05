function prime5to50(): string {
	let message : string = " "

	// TODO: fill up the message string with the proper content.
	for(i = 5; i < 51; i++) {
	    if (is_prime(i) == true) {
		console.log( i + " is a prime number")
	    }
	}

	return message
}

// You may use additional helper functions.
function is_prime(n: int): Boolean {
    for(i = 2; i < n; i++) {
	if (n % i == 0) {
	    return false
	}
    }
    return true
}

document.body.innerHTML = prime5to50()
