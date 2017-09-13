function is_prime(n:number):Boolean {
    for(var i=2; i<n; ++i){
        if (n % i == 0) return false;
    }
    return true;
}

function prime5to50(): string {
	let message : string = ""

	// TODO: fill up the message string with the proper content.
    for(var num=5; num<=50; ++num){
        if(is_prime(num)){
        message += "" + num + " is a prime number\n<br>";
        }
    }
	return message
}


// You may use additional helper functions.

document.body.innerHTML = prime5to50()
