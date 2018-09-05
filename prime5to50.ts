function prime5to50(): string {
	let message : string = ""
	for(var i = 5; i <= 50; i++){
	if(is_prime(i)){
	let message_to_add : string = i + " is a prime number"+'<br>';
		message += message_to_add;
		console.log(i);
	}
		
	}

	// TODO: fill up the message string with the proper content.
	console.log(message);
	return message
}

function is_prime(n): Boolean{
	for(var i = 2; i < n; i++){
		if(n % i == 0)
			return false;

			}
	return true;
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
