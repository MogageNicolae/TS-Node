var args = process.argv;
var sum = 0;
for (var index = 2; index < args.length; index++) {
    sum += +args[index];
}
console.log(sum);
