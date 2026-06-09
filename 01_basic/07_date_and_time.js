// Dates 

let myDate = new Date() // current date and time
console.log(myDate); // 2026-06-09T04:05:56.937Z
console.log(myDate.toString()); // Tue Jun 09 2026 04:07:56 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Tue Jun 09 2026
console.log(myDate.toLocaleString()); // 6/9/2026, 4:11:23 AM
console.log(typeof myDate); // object

let myDate2 = new Date(2020, 0, 1 , 5 , 30 , 0) // January 1, 2020 at 5:30:00 AM
console.log(myDate2.toDateString()); // Wed Jan 01 2020 
console.log(myDate2.toLocaleString()); // 1/1/2020, 5:30:00 AM

let myDate3 = new Date("01-14-2023") // January 14, 2023
console.log(myDate3.toDateString()); // Wed Jan 14 2023
console.log(myDate3.toLocaleString()); // 1/14/2023, 12:00:00 AM

let myTimestamp = Date.now() // current timestamp in milliseconds
console.log(myTimestamp); // 1717945676937

console.log(myDate3.getTime()); // 1673654400000
console.log(Math.floor(Date.now()/1000)); // it will come in seconds


let newDate = new Date()
console.log(newDate); //
console.log(newDate.getMonth()); // 5
console.log(newDate.getDay()); // 2 

newDate.toLocaleString('default' , {
    weekday: "long" 
})


