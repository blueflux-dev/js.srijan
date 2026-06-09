// string single quote se bhi define hota h and double se bhi 

const name = "srijan"
const repoCount = 50
// if we want to concanate 
console.log(name + repoCount + " value ") ; //srian50 value

// more readable code is :
console.log('hello my name is ${name} and my repoCount is ${repo Count}');

const gameName = new String('srijan')
// heap me storage me har ek character ke type me store h srijan from index = 0 
console.log(gameName[0]);// s
console.log(gameName.__proto__); // {}

console.log(gameName.length); // 6
console.log(gameName.toUpperCase()); // SRIJAN 
// isse game name uppercase me convert nhi ho jayega bas show hoga 
console.log(gameName.charAt(2)); // i
// character at this
console.log(gameName.indexOf('i')); // 2

const newString = gameName.substring(0,4)
console.log(newString); // srij


const anotherString = gameName.slice(0,4) // jitna mangete h utna kat kr de deta h 
// and yeh negative se bhi start ho sakta h 
console.log(anotherString); // srij

const  newStringone = "    srijan ncnc   "
// mujhe filhaal yeh space nhi chaiye 
console.log(newStringone.trim()); // srijan ncnc
// yeh saare aage ke space and piche ke space ko trim krlega

const url = "https://srijan.com/srijan%20kumar"

console.log(url.replace('%20','-')); //%20 ko reolace krega - se 

console.log(url.includes('ishan')); // boolean form me answer dega bhale yeh string h ya nhi 

console.log(gameName.split('-')); // split krlena matlab padh lena 



