let cargoHold = [1138, 'space suits', 'parrot', 'instruction manual', 'meal packs', 'space tether', '20 meters'];

//Use splice to make the following changes to the cargoHold array. Be sure to print the array after each step to confirm your updates.

//a) Insert the string 'keys' at index 3 without replacing any other entries.

let unlock = cargoHold.splice(3,0,'keys');
console.log(cargoHold);

//b) Remove ‘instruction manual’ from the array. (Hint: indexOf is helpful to avoid manually counting an index).

let placeHeld = cargoHold.indexOf('instruction manual');
console.log(placeHeld);

let removeMan = cargoHold.splice(4,1);
console.log(removeMan);

console.log(cargoHold);

//c) Replace the elements at indexes 2 - 4 with the items ‘cat’, ‘fob’, and ‘string cheese’.

let newCargoHold = cargoHold.splice(2,3,'cat', 'fob', 'string cheese');
console.log(cargoHold);
