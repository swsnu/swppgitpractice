function prime5to50(): string {
	let message : string = ""

	// TODO: fill up the message string with the proper content.
	
	for (i = 5; i < 50; i++)
	{
		var prime: boolean = true
		var i: number
		var j: number
		for (j == 2; j<i; j++)
		{
			if (i%j == 0)
			{
				prime = false
			}
		}
		if (prime == true)
		{
			message += String(i) + " is a prime number<br>"
		}
	}

	return message
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
