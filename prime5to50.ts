function prime5to50(): string {
	let message : string = ""

	// TODO: fill up the message string with the proper content.

	var num:number=5;
	var i:number;
	for(i=num;i<50;i++){
		for(var j:number=2;j<i;j++){
			if(i%j==0){
				break;	
			}
			if(j==i-1){
			message+=i;
			message+=" ";
			}
		}
	}
	return message
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
