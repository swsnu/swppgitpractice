function prime5to50(): string {
	var num:number;
	var i:number;
	var t:number;
	for(num = 5; num < 51; num++){
		t = 1;
		for(i = 2; i < num; i++){
			if(num % i == 0){
				t = 0;
			}
		}
		if(t){
			console.log(num + " is a prime number");
		}
	}
	return "";

	
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
