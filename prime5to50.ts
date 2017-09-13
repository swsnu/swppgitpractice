function prime5to50(): string {
	let message : string = "";

    // TODO: fill up the message string with the proper content.
    var candidates:number[] = new Array(49);

    // Initialization
    for (var i = 0; i < candidates.length; i++) {
        candidates[i] = i + 2;
    }
    
    for (var k = 0; k < candidates.length; k++) {
        var prime:number = candidates[k];
        
        if (prime == 1) {
            continue;
        }
        
        for (var j = k + 1; j < candidates.length; j++) {
            var num: number = candidates[j]
            if (num % prime == 0) {
                candidates[j] = 1
            }
        }
    }

    // Masking 2 and 3.
    candidates[0] = 1
    candidates[1] = 1

    var n:any;
    for (n in candidates) {
        var prime:number = candidates[n]
        if (prime != 1) {
            message += prime + " is a prime number" + '<br/>';
        }
    }

	return message;
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
