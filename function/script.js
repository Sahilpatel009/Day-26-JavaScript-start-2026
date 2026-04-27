// function myfunction() {

//   console.log("function 1 tested");
//   console.log("function 2 tested");

//   // print number from 1 to 10
//   for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }

// }
// myfunction();

// vowel count from text charatcer

// function countVowel(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }
// countVowel("sahil");

// vowel count from text charatcer

const countVowel = (str) => {
  let count = 0;

  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
};
