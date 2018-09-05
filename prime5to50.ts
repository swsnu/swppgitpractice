function prime5to50(): string {
	let message : string = ""

	// TODO: fill up the message string with the proper content.

    var num = 5;

    for( ; num < 50; num++) {
        var div = 2
        for( ; div < num; div++) {
         
        if(num % div == 0) {
                break
            }
       }
       if(div == num) {
            message += num + "is a prime number"
       }
    }
	return message
}


// You may use additional helper functions.

document.body.innerHTML = prime5to50()
