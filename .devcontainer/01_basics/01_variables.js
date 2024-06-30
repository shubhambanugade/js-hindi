const accountId = 144553
let accountEmail = "shubham@gmail.com"
var accountPassword ="12345" 
accountCity = "Karad"
let accountState;

// accountId = 2  // not allowed

accountEmail = "sb@gmail.com"
accountPassword = "212121"
accountCity = "Masur"

console.log(accountId);

/*
prefer not to use var
because of essue in block scope and functional scope
*/

console.table([accountEmail,accountPassword,accountCity,accountState])