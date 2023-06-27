const prompt = require("prompt-sync")();

for (var i = 1; i <= 100; i++) {
  if (i % 10 == 0) {
    console.log("Múltiplo de 10:", i)
  } else {
    console.log(i);
  }
}