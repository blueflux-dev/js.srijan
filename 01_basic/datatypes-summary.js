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



