let n = Number(prompt("Son kiriting..."));
let toqson;

for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    toqson = 1;
    if (i % j === 0) {
        toqson = 0;
      break;
    }
  }
  if (toqson === 1) {
    console.log(i);
  }
}