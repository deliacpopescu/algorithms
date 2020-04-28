// Check if number is prime

const nr = 4;

function checkIfPrime(n) {
  let isPrime = true;
  if (n === 0 || n === 1)
    isPrime = false;
  if (n !== 2 && n % 2 === 0)
    isPrime = false;
  for (let i = 3; i < n / 2; i += 2) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
  const str = isPrime ? '' : 'not ';
  console.log(`${n} is ${str}prime`);
}

checkIfPrime(nr);
