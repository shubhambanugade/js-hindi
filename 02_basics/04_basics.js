// Singlton

// const tinderUser = new Object()   //singlton
const tinderUser = {}            //non singlton

tinderUser.id = "Abc12333334"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email : "Sammy@google.com",
    fullname : {
        userfullname : {
            firstname : "Shubham" ,
            lastname : "banugade"
        }
    }
} 

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);
console.log(regularUser.fullname.userfullname.lastname);


const obj1 = { 1:"a" , 2:"b" } 
const obj2 = { 3:"c" , 4:"d" } 
const obj4 = { 5:"e" , 6:"f" } 

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1 , obj2 , obj4)

const obj3 = {...obj1 , ...obj2 , ...obj4}
console.log(obj3);

const users = [
    {
        id : 1 , 
        email : "Sammy@google.com"
    }, 
    {
        id : 1 , 
        email : "Sammy@google.com"
    }, 
    {
        id : 1 , 
        email : "Sammy@google.com"
    }, 
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename : "js in hindi",
    price : "999",
    courseinstructor : "Shubham"
}

// course.courseinstructor

const {courseinstructor :instructor} = course

console.log(courseinstructor);
 console.log(instructor);

//  {
//     "name" : "Shubham"
//     "coursename" : "js in hindi"
//     "price" = "free"
//  }

[

    {},
    {},
    {},
    
]