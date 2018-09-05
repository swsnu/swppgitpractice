function prime5to50(): string {
	let message : string = ""


		var i:number;
		var j:number;
		for(i = 5; i <= 50; i++)
		{
			for(j = 2; i%j != 0; j++)
			{
			}

			if(j == i){
			message = message + i + " is a prime number<br>";
			}
		}
	// TODO: fill up the message string with the proper content.

	return message
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
