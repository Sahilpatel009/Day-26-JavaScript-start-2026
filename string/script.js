let fullName = prompt("Enter your full name without spaces and we will suggest a username");

let userName = "@" + fullName + fullName.length;

console.log(`You entered ${fullName}. This username is already taken, so we suggest: ${userName}`);