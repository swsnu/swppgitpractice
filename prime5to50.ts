function prime5to50(): string {
	let message : string = ""

	// TODO: fill up the message string with the proper content.
	var i = 5

    while (i <= 50) {
	    var n = 0
	    var j = 1
        while (j <= i) {
	        if (i % j == 0) {
                n = n+1
            }
        }
        if (n == 2) {
	        message.concat(i + " is a prime number <\\br>")
        }
    }

	return message
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
