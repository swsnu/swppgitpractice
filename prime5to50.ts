
function isPrime(n: number): boolean {
    for (let i: number = 2; i < n; ++i) {
        if (n % 2 == 0)
            return false;
    }
    return true;
}

function prime5to50(): string {
    let message : string = "";
    for (let i: number = 5; i <= 50; ++i) {
        if (isPrime(i))
            message = message + i + " is a prime number\n";
    }

    // TODO: fill up the message string with the proper content.

    return message;
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()