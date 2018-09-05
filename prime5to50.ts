function prime5to50(): string {
	let message : string = ""

	// TODO: fill up the message string with the proper content

	return message
}

// You may use additional helper functions.

//document.body.innerHTML = prime5to50()

function is_prime(n): boolean {
    var i:number;
    for(i = n-1; i>=2; i--) {
       if (n % i == 0) {
            return false
        }
    }
    return true
}

var i:number;
var j:number;
for(i = 50; i>=5; i--) {
    j = 55-i;
    if(is_prime(j)) {
        console.log(j + ' is a prime number');
    }
}

