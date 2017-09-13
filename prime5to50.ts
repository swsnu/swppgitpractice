function prime5to50(): string {
	let message : string = ""

	// TODO: fill up the message string with the proper content.
	var num:number;
	var i:number;
        var isPrime: boolean;
	for(num=5;num<=50;num++) {
	  if (num > 1) {
            isPrime = true;
	    for(i=2;i<num;i++) {
	      if ( (num % i) == 0) {
                isPrime = false;
	        break;
	      }
	    }
            if (isPrime) {
              message = message + num + " is a prime number <br>";
	    }
          }
	}
	return message
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
