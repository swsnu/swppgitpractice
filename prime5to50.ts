function isPrime(n): boolean{
	let count:number = 0
	for(var i = 1; i <= n; i++){
		if(n % i == 0){
			count++;
			if(count > 2) return false
		}
	}
	return true
}

function prime5to50(): string {
	let message : string = ""

	// TODO: fill up the message string with the proper content.
	let num = 5;
	while(num <= 50 ){
		let tmp = isPrime(num)
		if(tmp){
			message += (num + " is a prime number")
		} else {
			message += (num + " is not a prime number")
		}
		message += "<br/>"
		num++
	}
	return message
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
