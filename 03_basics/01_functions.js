// console.log("S");
// console.log("h");
// console.log("u");
// console.log("b");
// console.log("h");
// console.log("a");
// console.log("m");


function Saymayname() {
console.log("S");
console.log("h");
console.log("u");
console.log("b");
console.log("h");
console.log("a");
console.log("m");
}

// Saymayname()

// function AddTwoNumbers(number1 , number2){
// console.log(number1 + number2);
// }

function AddTwoNumbers(number1 , number2){
// let result = number1 + number2
// return result

return number1 + number2
}

AddTwoNumbers(7 , 5)

const result = AddTwoNumbers(7 , 5)

// console.log("Result :" , result);


function loginUserMessage(username = "sam"){
    // if (username === undefined) {
    if ( !username) {
        console.log("please enter a user name");
        return
    }
return `${username} just logged in`
}

console.log(loginUserMessage("Shubham"));
//  console.log(loginUserMessage(""));    //empty string
//  console.log(loginUserMessage());       //value not given