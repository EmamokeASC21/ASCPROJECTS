let userGuess = process.argv[2];
let boba = 5;

if (userGuess == boba) {
    console.log("@");
}

if (userGuess < boba) {
    console.log("!");
}

if (userGuess > boba) {
    console.log("%");
}