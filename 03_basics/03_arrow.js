const user = {
    username : "Shubham" ,
    price : 999 ,

    welcomeMassage : function () {
        console.log(` ${this.username} , Welcome to the website`);
        console.log(this);
    }

}

// user.welcomeMassage()
// user.username = "Sam"
// user.welcomeMassage()

// console.log(this);

// function chai () {
//     let username = "shubham"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "shubham"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "shubham"
    console.log(this.username);
}


// chai()

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }
// const addTwo = (num1 , num2) =>   num1 + num2   // implicit return me '{}' use nahi hota hai. 

// const addTwo = (num1 , num2) =>   (num1 + num2)   

const addTwo = (num1 , num2) =>   ({username : "shuhbam"})   


console.log(addTwo(5 , 4))

// const myArray = [2 , 3 , 4 , 6 , 7 ]

// myArray.forEach( () =>  {})