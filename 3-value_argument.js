// Get the first argument directly (without using length)
let firstArg = process.argv[2];

// Check if it's undefined
if (firstArg === undefined) {
  console.log("No argument");
} else {
  console.log(firstArg);
}