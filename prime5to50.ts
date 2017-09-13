function prime5to50(): string {
	let message : string = ""

    var prime: number[] = [2, 3]

    for (var i=5; i<51; i++) {
        var flag : boolean = true;
        for (var p of prime) {
            if (i % p == 0) 
                flag = false;
        }
        if (flag) {
            prime.push(i);
            message += "" + i + " is a prime number<br>";
        }
    }

	return message
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
