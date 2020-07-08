// cmmmc

cmmdc = require('./greatestCommonDivisor.js');

function cmmmc(a, b) {
  let m = a * b;
  let n = cmmdc(a, b);
  return m / n;
}

console.log(cmmmc(7, 9));
