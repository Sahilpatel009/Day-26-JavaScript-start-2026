<<<<<<< HEAD
let num = 18;
let gameNum = prompt("If you want to won the Game then Guess a number from 0 to 20 :");
while (gameNum != num) {
    gameNum = prompt("You entered wrong number. Guess again :') ");
}
console.log(`Congratulations You enter ${num} and it is the correct number you won the Game :)`);
=======
// print all even and  odd number from 0 to 100 
// and also count total no of even and odd numbers are present from 0 to 100
let even = 0;
let odd = 0;
for (i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(`${i} is Even number`);
        even++;
    }
    else {
        console.log(`${i} is a Odd number`);
        odd++;
        
    }
}
console.log(`Total Even number are = ${even}`);
console.log(`Total Odd number are = ${odd}`);

>>>>>>> d4a1c1b1abf2d87c717e62221f6b4611f6899b59
