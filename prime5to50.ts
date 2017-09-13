let prime: boolean = true;
var start:number = 5;
var num: number = 5;
var j: any;	

for (num = start; num >= 5 && num <= 50; num++) {
	for (j = 2; j >= 2 && j < num; j++) {
		if (num % j == 0){
			prime = false;
			break;
		}
	}
	if (prime == true){
		console.log(num + " is a prime number");
	}
	prime = true;
}
