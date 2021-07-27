const readline = require('readline');

const PI = Math.PI;


calculate = (r) => {
    let area = PI * (r*r);
    console.log(`Yarıçapı ${r} olan dairenin alanı : ${area}`);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('What is R?', (r) => {
    calculate(r)
    rl.close();
  });



