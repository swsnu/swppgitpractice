function isPrime(n) {
    for (var i = 2; i < n; ++i) {
        if (n % i == 0)
            return false;
    }
    return true;
}
function prime5to50() {
    var message = "";
    for (var i = 5; i <= 50; ++i) {
        if (isPrime(i))
            message = message + i + " is a prime number" + "<br/>";
    }
    return message;
}
// You may use additional helper functions.
document.body.innerHTML = prime5to50();
