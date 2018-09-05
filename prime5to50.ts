var i:number;
var j:number;
var zz:boolean;

for(i=5;i<=50;i++){
	zz=true;
	for(j=2; j<i; j++){
		if(i%j == 0){
			zz=false;
			break;
		}
		}
		if(zz==true){
		console.log(i+" is a prime number");
	}
}
