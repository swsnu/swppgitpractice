function prime5to50(): string {
	var start = 5;
	var end = 50;

	let message : string = ""

	for (var i = start; i <= end; i ++){
			var isPrime = true;
			for(var j = 2; j < i; j++){
					if(i%j == 0){
							isPrime = false;
					}
			}
			if(isPrime == true){
					message += String(i) + " is a prime number<br>"
			}
	}


	return message
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
