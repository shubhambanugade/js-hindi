// var c = 300
let a = 400

if (true) {
    let a = 20
    const b = 10
    var c = 40
    // console.log("Inner: " , a);

}


// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "Shubham"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if (true) {
    const username = "Shubham" 
    if (username === "Shubham") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ******************Interesting**********************//

console.log(addone(5));
function addone(num) {
    return num + 1
}


const addtwo = function (num){
    return num + 2
}
console.log(addtwo(5))
