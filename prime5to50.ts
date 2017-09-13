function prime5to50(): string {
	let message : string = ""

	// TODO: fill up the message string with the proper content.
	for (let i = 5 ; i <= 50 ; i++ ){
        if (i % 2 != 0){
            if (i % 3 != 0){
                if (i % 5 != 0 || i == 5 ){
                    if (i % 7 != 0 || i == 7 ){
                        message += `${i} is prime number</br>`;
                    }
                }
            }
        }
	}
	return message
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
