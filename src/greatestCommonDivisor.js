// find greatest common divisor

function cmmdc(a,b) {
  let c = 0;
  if (a < b) {
    c = a;
    a = b;
    b = c;
  }
  if (a % b === 0) {
    return b;
  }
  return divisor(a, b);
}

function divisor(a, b) {
  for (let i = b / 2; i > 1; i--) {
    if ((a % i === 0) && (b % i === 0)) {
      return i;
    }
  }
  return 1;
}

module.exports=cmmdc;
//console.log(gcd(5, 5));
