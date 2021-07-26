let userGuess = process.argv[2];
let answer = 5;
let score = 0;

if (userGuess == answer) {
    console.log("CORRECT GUESS MATE!!!");
    score += 5; 
}

else if (userGuess < answer) {
    console.log(" IQ TOO LOW MATE");
    score -= 1; 
}

else {
    console.log("TOO HIGH MATE"); 
    score -= 1; 
}

console.log("Final Score:", score)