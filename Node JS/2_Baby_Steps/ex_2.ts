let args = process.argv;

let sum: number = 0;

for (let index: number = 2; index < args.length; index++) {
    sum += +args[index];
}

console.log(sum);