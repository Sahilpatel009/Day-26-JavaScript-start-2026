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

