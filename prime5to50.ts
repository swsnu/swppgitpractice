function prime5to50(): string {
	let message : string = "";

	// TODO: fill up the message string with the proper content.
	var i : number = 5;
	var j : number = 0;
	var flag : boolean = true;
	while (i <  51){
		flag = true;
		j = 2;
		while (j < i){
		if ( i%j == 0 ) flag = false;
		j++
		}
		if (flag) message += i + " is a prime number<br/>";
		i++;
	}
	
	return message;
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
