function prime5to50(): string {
	let message : string = ``
  for ( var j = 5; j <51;  j++ ) {
    if(isPrime(j)) {
      message = message + j + ` is a prime number <br/>`;
    }
  }
	return message
}

// You may use additional helper functions.
function isPrime(num: number) {
  var checker: boolean = true;
  for (var i:number = 2;  i < num; i++) {
    if (num % i === 0 ) {
      checker = false;
    }
  }
  return checker
}


document.body.innerHTML = prime5to50()
