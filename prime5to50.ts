function prime5to50(): string {
	let message : string = ""

  for(let num:number= 5; num <= 50; num = num + 1){
    let isPrime:boolean= true;
    for(let i:number= 2; i < num ; i = i + 1){
      if(num % i == 0){
        isPrime = false;
        break;
      }
    }
    if(isPrime){
      message += num + " is a prime \n";
    }
  }

	return message
}

document.body.innerHTML = prime5to50()
