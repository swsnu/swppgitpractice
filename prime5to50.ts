function prime5to50(): string {
	let message : string = ""

	// TODO: fill up the message string with the proper content.

    for(let number : number = 5; number < 51; number++) {
        let checker : number = 1;

        for(let i : number = 2; i < number; i++) {
            if(number % i == 0) {
                checker = 0;
            }
        }

        if(checker == 1) {
        message += number + " is a prime number</br>";
        }
    }

	return message
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
