let num = 18;
let gameNum = prompt("If you want to won the Game then Guess a number from 0 to 20 :");
while (gameNum != num) {
    gameNum = prompt("You entered wrong number. Guess again :') ");
}
console.log(`Congratulations You enter ${num} and it is the correct number you won the Game :)`);