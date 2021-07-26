//Future House- (Underwater Mansion), (Dumpster), (Farmhouse), Studio Apartment
//Future Number of Destinations Traveled - (0), (1), (20), 2000
//Future Pet - (Dog), Cat, (Dinasour), (Chimp)
//Future Job - (Astronaut), (Chriopractor), (Wrestler), Dog walker

function mash() {
return "You will live in a " + getHome() + ", travel to " + getTravelCount() + " countries, and have a pet " + getPets() + "!";
}
let ending = mash();
console.log(ending);

function randNumGenerator(num) {
    return Math.floor(Math.random() * num);
}


function getHome() {
    let num = randNumGenerator(4);
 
    if (num == 0)
    {
        return "Mansion";
    }
    else if (num == 1)
    {
        return "Castle";
    }
    else if (num == 2) {
        return "Shack";
    }
    return "House";

}

let total = getHome();
console.log(total);

function getTravelCount() {
    return randNumGenerator (101);
}
let answer = getTravelCount();
console.log(answer);

function getPets() {
    let randomPets = ["Dog", "Cat", "Fish", "Shark"];

    return randomPets[randNumGenerator(4)];
}
let result = getPets();
console.log(result);

let fun = mash();