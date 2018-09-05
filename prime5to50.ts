function prime5to50(): string {
	let message : string = ""

	// TODO: fill up the message string with the proper content.

	var i:number;
	var j:number;

	for(i=5;i<=50;i++) {
		for(j=2;j<i;j++) {
			if(i%j==0)
				break;
		console.log(i + " is a prime number");
		}
	}
	
	return message
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
