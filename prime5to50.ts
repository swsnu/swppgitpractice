var num=5;
var i;
var j;
var check;

for(i=num; i<=50; i++){
	check = 0;
	for(j=2; j<i; j++){
		if(i%j == 0){
			check = 1;
		}
	}
	if(check == 0){
		console.log(i + " is a prime number");
	}
}