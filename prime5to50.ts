function is_prime(x) {
	for (var i=3; i<x; i++){
		if (x % i == 0) {
            return false
        }
	}
	return true
}
function prime5to50(): string {
	let message : string = "";
	for (var i=5; i<=50; i++){
		if (is_prime(i))
			message += i + " is a prime number<br/>";
	}


	return message
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50();
