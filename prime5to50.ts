function is_prime(num) : Boolean{
    var i;
    for(i=2; i<num; i++){
        if(num%i == 0) return false;
    }
    return true;
}

var i;
for(i=5; i<=50; i++){
    if (is_prime(i)){
        console.log(i + ' is a prime number');

    }
}

