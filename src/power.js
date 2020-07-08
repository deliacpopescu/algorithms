//calculul puterilor unui numar

function power(a, n) {
  let p = 1;
  for (let i = 1; i <= n; i++) {
    p = p * a;
  }
  return p;
}

console.log(power(5, 1));
