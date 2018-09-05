function prime5to50(): string{
	let message : string = ""
	var num;
	for(num=5;num<51;num++){
		if(check(num)){
			message += num
			message += " is a prime number"+"<br/>"
	}
}
	return message
}

function check(num):Boolean {
	for(var i=2;i<num;i++)
		if(num%i===0) return false;
	return num!==1;
}

document.body.innerHTML = prime5to50()
