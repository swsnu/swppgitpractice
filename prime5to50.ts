function prime5to50(): string {
	let message : string = ""
    for(var i=5; i<=50; i++){
        if(isPrime(i))
            message +=""+i+" is a prime number<br/>"
    }
	// TODO: fill up the message string with the proper content.

	return message
}
function isPrime(n): Boolean {
    for(var i=2; i<=n/2; i++){
        if(n%i == 0) return false;
    }
    return true;
}

// You may use additional helper functions.
document.body.innerHTML = prime5to50()
