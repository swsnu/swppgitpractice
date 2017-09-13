function prime5to50(): string {
	let message : string = "";

	// TODO: fill up the message string with the proper content.
	var num:number = 5;
	var i:number;
	for(i=num;i<=50;i++){
		var cnt:number = 0;
		var per:number = 2;
		var j:number;
		for(j=per;j<i;j++){
			if(i%j==0){
				cnt++;
			}
		
		}
		if(cnt==0){
			message += i+" is a prime number<br>";
		}
		
	}

	return message;
}

// You may use additional helper functions.
document.body.innerHTML = prime5to50();
