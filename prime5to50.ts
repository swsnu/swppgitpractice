function prime5to50(): string {
	let message : string = "";

	// TODO: fill up the message string with the proper content.

  let n : number;

  for (n = 5; n <= 50; n++) {
    if (isPrime(n)) {
    message = message + String(n) + " is a prime number<br>";
    }
  }

	return message;
}

// You may use additional helper functions.
function isPrime(n : number) : Boolean {
  let a : number;
  for (a = 2; a <= n; a++) {
    if (n % a == 0) {
      break;
    }
  }
  if (n == a) return true;
  else return false;
}

document.body.innerHTML = prime5to50();
