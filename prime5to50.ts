function prime5to50(): string {
	let message : string = ""

	// TODO: fill up the message string with the proper content.
	
	console.log ("asdfsadf");
	console.log (message);

	var x: number;
	var i: number;
	var j: number;
	var temp: boolean;

	for (i = 45; i >= 0; i--) {
		x = 50 - i;
		temp = true;
		for (j = x - 1; j >= 2; j--) {
			if (x % j == 0) {
				temp = false;
				break;
			}
		}
		if (temp) {
			message += x;
			message += " is a prime number";
			message += "<br>";
		}
	}
	
	
	return message
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
