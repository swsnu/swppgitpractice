function prime5to50() {
    var message = "";
    // TODO: fill up the message string with the proper content.
    var x;
    var y;
    var z;
    var w;
    var isPrime;
    for (x = 50; x >= 5; x--) {
        w = 55 - x;
        isPrime = true;
        for (y = w - 2; y >= 1; y--) {
            z = w - y;
            if (w % z == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            message += w;
            message += " is a prime<br>";
        }
    }
    return message;
}
// You may use additional helper functions.
document.body.innerHTML = prime5to50();
