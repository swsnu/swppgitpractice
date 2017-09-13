function prime5to50(): string {
	let message : string = ""

	// TODO: fill up the message string with the proper content.
        for(var i = 5; i<=50; i++){
           if(isPrime(i))
              message += (i + " is a prime number<br/>");
        }
	return message
}

// You may use additional helper functions.
function isPrime(i) {
   for(var n = 2; n <= i-1; ++n) {
      if(i % n==0)
         return false;
      }
   return true;
}
document.body.innerHTML = prime5to50()
