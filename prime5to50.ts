function isPrime(n: number): boolean {
  if (n < 2) return false;
  else if (n <= 3) return true;
  else {
    let sqrt: number = Math.floor(Math.sqrt(n));
    let answer = true;

    for (let i = 2; i <= sqrt; i++) {
      if (n % i == 0) answer = false;
    }

    return answer;
  }
}

function prime5to50(): string {
  let message: string = '';

  // TODO: fill up the message string with the proper content.
  for (let i = 5; i <= 50; i++) {
    if (isPrime(i)) {
      message += `${i} is a prime number<br>`;
    }
  }

  return message;
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50();
