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

Saymayname()

function AddTwoNumbers(number1 , number2){
console.log(number1 + number2);
 }

function AddTwoNumbers(number1 , number2){
// let result = number1 + number2
// return result

return number1 + number2
}

AddTwoNumbers(7 , 5)

const result = AddTwoNumbers(7 , 5)

console.log("Result :" , result);


function loginUserMessage(username = "sam"){
    // if (username === undefined) {
    if ( !username) {
        console.log("please enter a user name");
        return
    }
return `${username} just logged in`
}

console.log(loginUserMessage("Shubham"));
 console.log(loginUserMessage(""));    //empty string
 console.log(loginUserMessage());       //value not given

function CalculateCartPrice(...num1){
    return num1
}
console.log(CalculateCartPrice(200 ,300 ,400));


function CalculateCartPrice1(val1 ,val2 ,...num1){   /// in output val1&val2 are aquired first two values
    return num1
}
console.log(CalculateCartPrice1(200 ,300 ,400 ,1000));

const user = {
    username : "Shubham" ,
    price : 199,
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
handleObject({
    username: "Sam",
    price: 499,
})

const myNewArray = [200 ,300 ,400 ,600]

function returnSecondValue (getArray){
    return getArray[2]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200 ,300 ,3764 ,1000]));