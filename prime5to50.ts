function prime5to50(): string {
	let message : string = ""

    var i : number = 5;
    for(; i < 50; i++){
        var j : number = 2;
        var is_prime : boolean = true;
        for(; j < i; j++){
            if (i % j == 0) is_prime = false;
        }
        if(is_prime) {
            message += "<br>"
            message += i
            message += " is a prime number"
        }
    }
	// TODO: fill up the message string with the proper content.

	return message
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
