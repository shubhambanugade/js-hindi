// primitive

// 7 types : String , Number , Boolean , Null , Undefined , symbol , BigInt.


const score = 100
const scorevalue = 100.3

const isLoggedIn =  false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
 console.log(id === anotherId );


//const bigNumber = 12345564743546443524n



//Reference (Non Primitive)

// Array , Object , Function


const heros = [ "Shaktiman" , "Nagraj", "Doga" ]
let myObj = {
     name : "Shubham",
    age : 21,
}

const myfunction = function(){
     console.log("Hello World");
}

 console.log(typeof outsideTemp);



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  Stack(Primitive) , Heap(Non Primitive)

let myYoutubename = "Gameryt"

let anothername = myYoutubename
anothername = "YTSBGAMING"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com"
    
}

let userTwo = userOne

userTwo.email = "Shubham@google.com"

console.log(userOne.email);
console.log(userTwo.email);