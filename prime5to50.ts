function prime5to50(): string {
        
	let message: string = "";
	let i: number, j: number, cnt: number;
	for(i = 5; i <= 50; i++){
		cnt = 0;
		for(j = 2; j < i; j++){
	    		if(i % j == 0)
	      		  continue;
			else
	      		  cnt++;			
	 	}
		if(cnt == i-2)
		  message += i + "is a prime number\n"	
	}	    
	// TODO: fill up the message string with the proper content.

	return message
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()


