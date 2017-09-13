function prime5to50(): string {
    let message : string = '';

    for (let i = 5; i < 51; i++) {
        let isPrime: boolean = true;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            message += (i + ' is a prime number<br>');
        }
    }

    return message;
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
