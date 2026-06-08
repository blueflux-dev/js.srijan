let score = "33abc"
//kahi baaar jab frontend se request lete h jaise 33 to pata nhi hota iska datatype kya h

console.log(typeof score); //output : string
//or
console.log(typeof(score)); //output : string

let valueinnumber = Number(score)
console.log(typeof(valueinnumber)); // output number

console.log(valueinnumber); //output NaN

//"33" => 33
//"33abc" => NaN
// true => 1 as well for false 0;

let islog = 1

let booleanlogin = Boolean(islog)
console.log(booleanlogin); // true

// so 1 ko true me and 0 ko false me krega
// "" iska false deega
// "srijaj" iska true dega 

let somenumerb = 33

let stringnumber = String(somenumerb)

console.log(stringnumber); // 33
console.log(typeof stringnumber); // string

//bhale hi dikhne me 33 number jaisa h but wo string me convert ho chuka h 


