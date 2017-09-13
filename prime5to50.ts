function prime5to50(): string {
	let message : string = "";
	var i:number;
	for (i = 5; 51 > i; i++){
		for(var j = 2; i > j ;j++){
			if(i%j==0) break;
		}
		if(i==j){
 			var str:string = i+" is a prime number<br>";
			
			message = message.concat(str);
		}
	}
	
	// TODO: fill up the message string with the proper content.

	return message
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
