//generate first n prime list

checkIfPrime = require('./prime.js');

function getFirstPrimeNumbers(limit) {
  let primeList = [];
  if (limit === 1) {
    primeList = [2];
  } else if (limit === 2) {
    primeList = [2, 3];
  }
  let nextNr = 5;
  while (primeList.length < limit) {
    if (checkIfPrime(nextNr)) {
      primeList.push(nextNr);
    }
    nextNr += 2;
  }
  return primeList;
}

console.log(getFirstPrimeNumbers(6));
