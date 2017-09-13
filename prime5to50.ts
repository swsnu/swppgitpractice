function prime5to50(): string {
	let message : string = "";

	var i: number;
	var j: number;	
	var mylist: number[];
	mylist = [2, 3];

	for (i = 5; i < 51; i++) {
		for (j = 0; j < mylist.length; j++) {
			if (i % mylist[j] == 0) {
				break;
			}
			else if(j == mylist.length - 1) {
				mylist.push(i);
				break;
			}
		}
	}

	for (i = 2; i < mylist.length; i++) {
		message += mylist[i];
		message += " is a prime number";
		message += "<br/>";
	}
	return message
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
