function prime5to50(): string {
	let message : string = ""

	var count = 0
	var n1:number = 5;
	var n2:number = 50;
	var two:number = 2;
	var i:number;
	var j:number;
	for(i = n1; i <= n2; i++){
		count = 0;
		for(j = two; j < i;j++){
			if(i % j == 0) {
				count = count + 1;
			}
		}	
		if(count == 0){
			message += i;
			message += "is a  prime number";
			message += '<div/>';
		}
	}
	return message
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
