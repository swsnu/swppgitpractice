var i:number = 5
for(i = 5; i < 50; i++){
    var flag:number = 0;
    for(var j:number = 2; j < i; j++){
        if(i % j == 0){
            flag = 1;
        }
    }
    if(flag == 0)
        console.log(i + " is a prime number")
}
