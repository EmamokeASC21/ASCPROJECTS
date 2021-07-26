let sportsArray = ['Basketball', 'Football', 'Baseball', 'Bowling', 'Swimming'];
console.log(sportsArray);

let firstElement = sportsArray[0];
let secondElement = sportsArray[1];
let thirdElement = sportsArray[2];
let fourthElement = sportsArray[3];
let fifthElement = sportsArray[4];

console.log(firstElement);
console.log(secondElement);
console.log(thirdElement);
console.log(fourthElement);
console.log(fifthElement);

let mixArray = ['America', 7.4, true, [0, 1, 2]];

mixArray[2] = 'Replacement String';

console.log(mixArray);

console.log('Length of mixArray', mixArray.length);

let myArray = [50, 'abc', false, -3.5];
console.log('Before:', myArray);
 
myArray.push('new item');
console.log('After: ', myArray);

let myArray = [50, 'abc', false, -3.5];
console.log('Before:', myArray);
 
myArray.pop();
console.log('After: ', myArray);
