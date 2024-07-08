// Date

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCretedDate = new Date(2024,0,25)
let myCretedDate1 = new Date(2024,0,25,5,3)
 let myCretedDate2 = new Date("2024-01-23")
 let myCretedDate3 = new Date("01-23-2024")
console.log(myCretedDate);
console.log(myCretedDate.toDateString());
console.log(myCretedDate.toLocaleString());
console.log(myCretedDate1);
console.log(myCretedDate1.toDateString());
console.log(myCretedDate1.toLocaleString());
console.log(myCretedDate2);
console.log(myCretedDate2.toDateString());
console.log(myCretedDate2.toLocaleString());
console.log(myCretedDate3);
console.log(myCretedDate3.toDateString());
console.log(myCretedDate3.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCretedDate.getTime());
console.log(Date.now());
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


newDate.toLocaleString('default', {
    weekday: "long"
   
} )