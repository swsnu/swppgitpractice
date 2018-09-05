function prime5to50(): string {
	let message : string = ""

	// TODO: fill up the message string with the proper content.


	for(var i=5;i<51;i++){
		for(var j=2;j<Math.sqrt(i)+1;j++){
			var prime=true
			if(i%j==0) {prime=false
			break
			}
		}
		if(prime) message+= i +" is a prime number"+'<br/>'
	}

	return message
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
