

function prime5to50(): string {
	let message : string = ""
	
	var i:number;
	var j:number = 0;
	var k:number;
	for(i = 5;i<51;i++){
		j=0;
		for(k = 2; k<i/2; k++){
			if(i % k == 0){
				j = j +1;
			}
		}
		if(j <= 0){
			message += i;
			message += "is a prime number" + '<div/>';

		}
	}

	return message
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()


