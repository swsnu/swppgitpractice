function prime5to50(): string {
	let message : string = ""
	
	var i:number;
	var j:number;
	for(i = 5; 50 >= i; i++){
		for(j = 2; i > j; j++){
			if(i%j == 0)
				break;
		}
		else if(j*j > i){
			messege += i+" is a prime number<div>"; 
			break;
		}
	}
	// TODO: fill up the message string with the proper content.

	return message
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
