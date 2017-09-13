function prime5to50(): string {
	let message : string = ""

	// TODO: fill up the message string with the proper content.
	var num:number = 0;
	var i: number = 0;
	for (num = 5; num <= 50; num++){
		for (i = 2; i <= num-1; ++i){
			if(num%i == 0){
				break;
			}
		}
		if (i == num){
			message += (num + " is a prime number<br/>");
		}
	}

	return message
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
