function prime5to50(): string {
	let message : string = ""
	
	// TODO: fill up the message string with the proper content.
	var num:number = 5;
	var i:number = 2;
	for(num = 5; 50>=num; num++){
	if(isprime(num))	{//console.log(num);	
	message+=num+" is a prime number"+'<br/>';
			}

	}
	return message
}
function isprime(numq:number):boolean{
	var i:number = 2;
	for(i = 2; numq/2>=i;i++){
		if(numq%i==0)	{return false;	}
	}
	return true;
}
// You may use additional helper functions.

document.body.innerHTML = prime5to50()
