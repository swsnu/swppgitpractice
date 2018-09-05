function prime5to50(): string {
	let message : string = ""

	// TODO: fill up the message string with the proper content.
	for (var x = 5; x < 50; x++){
		var count = 0;
		for (var y = 2; y < 26; y++) {
			if(x % y == 0){
				count++;
			}
		}
		if(count == 1){
			message += x + " ";
		}
	}
	return message
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
