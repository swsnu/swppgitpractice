function prime5to50(): string {
	let message : string = ""

	// TODO: fill up the message string with the proper content.
  var i:number;

  for (i = 5; i <= 50; i++) {
    if (isPrime(i)) {
    message += i + " is a prime number.<br>";
    }    
  }
	return message
}

// You may use additional helper functions.
function isPrime(n: number): boolean {
  var i:number;
  for (i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

document.body.innerHTML = prime5to50()
