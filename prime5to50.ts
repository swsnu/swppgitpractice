function prime5to50(): string {
    let message : string = ""
    
    var num:number;
    for(num=5;num<51;num++) 
    {
        if(num%2 != 0)
        {
            if(num%3 != 0)
            {
                if(num%5 != 0)
                {
                    if(num%7 != 0)
                    {
                    message+= num +" is a prime number<br/>";
                    }
                    else if(num == 7)
                    {
                    message += num + " is a prime number<br/>";
                    }
                }
                else if(num == 5)
                {
                message += num + " is a prime number<br/>";
                }
            }
        }
    }
    return message
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
