function prime5to50(): string {
	let message : string = ""
	
	for(let i:number = 5; i <= 50; i++){
		let prime : boolean = true;
		for(let j:number = 2; j<i; j++){
			if (i % j == 0){
				prime = false;
				break;
			}
		}
		if(prime){
			console.log('hi');
			message = message + `${i} is a prime number<br>`;
		}
	}

	// TODO: fill up the message string with the proper content.
	console.log(message);
	return '<p>'+message+'</p>';
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50();
