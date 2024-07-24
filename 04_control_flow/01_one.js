//  if

if (true) {
    
}

if (false) {           //line num 7-10 does not run because this is false condition


}

// const isUserLoggedIn = true
// if (isUserLoggedIn) {

// }
// const temperature = 41
// if (temperature === 41) {
//     console.log("temperature less than 50");
// }else{
//     console.log("temperature greater than 50");
// }
// console.log("execute");
// < , > , <= , >= , == , != , === , !==

// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`user power : ${power}`);
// }
// console.log(`user power : ${power}`);      // this line detect error because this is outside of scope

// const balance = 1000

// if (balance > 500)  console.log("test");

// if (balance < 500) {
//     console.log("less than 500");
// }else if (balance < 750) {
//     console.log("less than 750");
// }else if (balance < 900) {
//     console.log("less than 750");
// }else {
//     console.log("less than 1200");
// }

const UserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (UserLoggedIn && debitCard && 2==3) {
    console.log("allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail ) {
    console.log("user logged in");
}