function prime5to50(): string {
	let message : string = ""

    var ar: number[] = new Array(48);
	var i = 0
	for (i = 0; i < 48; i += 1) {
		ar[i] = 1;
	}

    // remove 2's multiplies
    var idx = 2
    while (idx < 49) {
        ar[idx] = 0
        idx += 2
	}

    // sieve the array
    for (i = 3; i < Math.ceil(Math.sqrt(50)); i += 2) {
        idx = 2 * i - 2
        while (idx < 49) {
            ar[idx] = 0
            idx += i
		}
	}

	// print the result
    for (i = 3; i < 49; i += 2) {
        if (ar[i] == 1) {
            message += (i + 2) + " is a prime number<br>";
		}
	}

	return message
}

document.body.innerHTML = prime5to50()
