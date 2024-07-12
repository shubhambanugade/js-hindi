// singleton
// object.create

// object literals

const mySum = Symbol("key1")

const Jsuser = {
    name:  "Shubham" , 
    "full name": "Shubbham Banugade",
    [mySum]: "mykey1",
    age: 21,
    location: "Banugadewadi",
    email: "shubham@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "Saturday" ]
}

console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser.isLoggedIn);
console.log(Jsuser.lastLoginDays);
console.log(Jsuser.location);
console.log(Jsuser["full name"]);
console.log(Jsuser[mySum]);
console.log(typeof Jsuser[mySum]);

Jsuser.email = "banugade@google.com"
Object.freeze(Jsuser);
Jsuser.email = "banugade@chatgpt.com"
console.log(Jsuser);


Jsuser.greeting = function (){
    console.log("Hello JS user ");
} 
Jsuser.greetingTwo = function (){
    console.log(`Hello JS user,  ${this.name}`);
} 

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());