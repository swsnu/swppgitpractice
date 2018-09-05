function prime5to50(): string {
	let message : string = ""
	var i : number;
	for(i=5; i<=50; i++){
		if(isPrime(i)){
			message = message + i + " is a prime number\n"
		}
	}
	return message
}

function isPrime(num : number): boolean {
	let bool : boolean = true
	var i : number
	for(i=2;i<num;i++){
		if(num%i==0){
			bool = false
		}
	}	
	return bool
}

document.body.innerHTML = prime5to50()
