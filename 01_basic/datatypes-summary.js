// Primitive Datatypes - 7 types :(call by value hote h matlab inka copy share hota )

// String , number , null , boolean , undefined , symbol , bigint

const score = 100 // datatype = number
const scoreValue = 100.3 //  dt = number 

const isloggedin = false

const outsidetemp = null // dt = object
let useremail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 97437964194819634n // n lagane se puche yeh automatically big int ho gya 




// Reference type  datatypes or non primitive datatype

// Array , Objects , Functions 
// refernce type ke sare types ka typeof object aata h ... except function jiska function hi aata h 


const heroes = ["shaktiman" , "naagraj" , "hulk"]
let myObj = {
    name : "srijan" ,
    age : 22 , 
}
const myFunction = function(){
    console.log("hello world")
}

console.log(typeof myObj);
/* score-> number, 
scoreValue->number, 
isloggedIn-> Boolean
outsidetemp->object,
userEmail->undefined
id-> symbol, 
anotherId-> symbol,
myObj->object,
heros[]-> object,
func-> function */

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack Memory (Primitive sabke liye ) , heap Memory (refernce type datatypes) 

let myYoutubename = "first"
let anothername = myYoutubename // value copy hoke paas hua 
anothername = "second"
console.log(myYoutubename);
console.log(anothername);

let user = {
    email : "user@gmail.com", 
    upi : "user@ybl"
} // jitne bhi non primitive type h yeh apne aap hi heap storage me chal jate h 

// user to store stack me hoga lekin wo jo andar ke cheezon ko point krega wo heap me rhenege matlab heap me point krega 


let usertwo = user
/// aese hi usertwo banega to stack me but point heap storage ke same address ko  krega 

usertwo.email = "srijan@gmai.comm"

console.log(user.email); // srijan@gmai.comm
console.log(usertwo.email); // srijan@gmai.comm

// pass by refernce hua tha and dono milke same address ko point kr rhe the 




