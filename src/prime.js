// Check if number is prime

function checkIfPrime(nr) {
  let isPrime = true;
  if (nr === 0 || nr === 1)
    isPrime = false;
  if (nr !== 2 && nr % 2 === 0)
    isPrime = false;
  for (let i = 3; i < nr / 2; i += 2) {
    if (nr % i === 0) {
      isPrime = false;
      break;
    }
  }
  const str = isPrime ? '' : 'not ';
  console.log(`${nr} is ${str}prime`);

  return isPrime
}

module.exports = checkIfPrime;

// checkIfPrime(4);
