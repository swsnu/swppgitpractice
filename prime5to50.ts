//I used some recent Javascript/Typescript features so to compile you need 
to use the flag --target es6 and a recent browser

function prime5to50(): string {
	//let message : string = ""

	// TODO: fill up the message string with the proper content.
	let primeArray = [...Array(50 - 4).keys()].map(n => n + 5).filter(
		(n) => {
			for (let i = 2; i <= Math.ceil(Math.sqrt(n)); ++i) {
				if (n % i == 0)
					return false
			}
			return true
		})

	return "<p>" + primeArray.join(" is a prime number<br/>") + " is a prime number</p>"
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
