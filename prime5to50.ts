const prime5to50 = number => number+" is a prime number\n";
const primeList = [5,7,11,13,17,19,23,29,31,37,41,43,47];
document.body.innerHTML = primeList.reduce((accumulator, number) => accumulator + prime5to50(number) + "<br>", "")
