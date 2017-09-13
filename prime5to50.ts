function prime5to50(): string {
    let message : string = ""

    // TODO: fill up the message string with the proper content.
    function isPrime(p): boolean {
        if (p % 2 === 0) return false;
        for (let i = 3; i*i <= p; i+=2) {
            if (p % i === 0) return false;
        }
        return true;
    }
    const l = [];
    for (let i = 5; i <= 50; i+=2) {
        if (isPrime(i)) l.push(`${i} is a prime number`);
    }
    message = l.join('<br>');

    return message
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
