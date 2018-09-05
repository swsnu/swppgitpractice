function prime5to50(): string {
        let message : string = "";

        var i:number;
        var j:number;
        var k:number;
	for(i = 5;i<51;i++) {
                k = 0;
                for(j = 2;j<i+1;j++) {
                        k = j;
                        if(i % j == 0) {
                                break;
                        }
                }
                if(i == k)
                        message = message + i + " is a prime number";  
        }

        // TODO: fill up the message string with the proper content.

        return message
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
