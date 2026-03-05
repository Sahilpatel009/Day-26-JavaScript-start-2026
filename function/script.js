let a = prompt("Enter your number to show your grade");
let grade;
let result;
if (a >= 90 && a < 100) {
  grade = "A";
  result = "Excellent";
}
else if (a >= 70 && a <= 89) {
  grade = "B";
  result = "Good";
}
else if (a >= 60 && a <= 69) {
  grade = "C";
  result = "Average";
}
else if (a >= 50 && a <= 59) {
  grade = "D";
  result = "Below Average";
}
else if (a >= 0 && a <= 49) {
  grade = "F";
  result = "Fail";
}
console.log(`According to your score, your grade is: ${grade} and your result is: ${result}`);