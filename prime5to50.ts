function prime5to50(): string {
	let message : string = "";

    let num : number = 5;
    let flag: number = 0;

    while (num <= 50) {
        let div : number = 2;
        while (div < num) {
            if (num % div == 0) {
                flag = 1;
                break;
            }
            div = div + 1;
        }
        if (flag == 0) {
            message = message.concat(num.toString());
            message = message.concat(" is a prime number<br>");
        }
        flag = 0;
        num = num + 1;
    }

	return message
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
