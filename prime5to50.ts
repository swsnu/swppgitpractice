function prime5to50(): string {
	let message : string = ""

  var max:number = 50;
  var ind:number;

  for(ind = 5; ind<=50; ind++){
    var isPrime:Boolean = true;

    var dividend:number;
    for (dividend = 2; dividend < ind; dividend++){
      if (ind % dividend == 0){
        isPrime = false; 
      }
    }
    if (isPrime == true){
    message = message + ind + " is a prime number" + '<br/>';
    }
  }
	return message
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
