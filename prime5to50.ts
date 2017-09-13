function prime5to50(): string {
	let message : string = ""

	// TODO: fill up the message string with the proper content.

	var i:number = 5;
	var j : number;
	var k : number;
	for(j = i ; 50>=j ; j++){
	 for(k = 2 ; j > k; k++){
	  if(j % k == 0){
	   break;
	  }
	  else if(j-1 == k){
	   message = message + j + " is a prime number" + "<br/>";
	  }
	 }
	}
	
	return message
	
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
