// array 

const myArr = [0, 1, 2, 3, 4, 5 , true , "hello"]
// is array me kuch bhi ho sakta h 
// different types to make an array
const myHeroes = ["superman", "hulk", "ironman"]

const myArr2 = new Array(1,2,3,4)

console.log(myArr[6]); //true

// array methods

myArr.push(6)
console.log(myArr); // [0,1,2,3,4,5,true,'hello',6]
myArr.pop(); // last value of array pop ho jata h 

myArr.unshift(9) // array ke index me add ho jata h 
console.log(myArr); // [ 9, 0, 1, 2, 3, 4, 5, true, 'hello' ]

myArr.shift() // array ka index zero ka element nikal jata h just oppposite of unshift
console.log(myArr); //[ 0, 1, 2, 3, 4, 5, true, 'hello' ]

console.log(myArr.includes(9)); // check krna 9 array me h ya nhi 
// false ... coz asing exist krta h ya nhi 
// aese if indexOf bhi use ho sakta h 

const newArr = myArr.join() // array ko string me convert ho gya 

console.log(myArr);//[ 0, 1, 2, 3, 4, 5, true, 'hello' ]
console.log(newArr);//0,1,2,3,4,5,true,hello

// slice , splice

console.log("A " , myArr);//A  [ 0, 1, 2, 3, 4, 5, true, 'hello' ]

const myn1 = myArr.slice(1,3) // wahi elemnt do range me ho excludig last range 


console.log(myn1); // [ 1, 2 ]
console.log("B ",myArr); // B  [ 0, 1, 2, 3, 4, 5, true, 'hello' ]

const myn2 = myArr.splice(1,3) // including last range sab aa jata h and myArr ko bhi modify krke wo element nikal dega jo liya h 


console.log("C ", myArr);// C  [ 0, 4, 5, true, 'hello' ]
console.log(myn2);// [ 1, 2, 3 ]

//+++++++++++++++ ARRAY PART 2 +++++++++++++++++++++

const marvel_heroes = ["thor","ironman", "spiderman"]
const dc_heroes = ["superman","flash" , "batman"]

marvel_heroes.push(dc_heroes) // existing array me push krta h 

console.log(marvel_heroes);//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvel_heroes[3][1]); // flash

const allherp = marvel_heroes.concat(dc_heroes)
// ab ek new array return hoga and purane array ko affect nhii krega 

const allnewheroes = [...marvel_heroes,...dc_heroes]//now in dono array ke elements akele ho gye it is called spread krna jaie merge sort me sab akele ho jate h same yeh bhi 
console.log(allnewheroes);/*[
  'thor',
  'ironman',
  'spiderman',
  [ 'superman', 'flash', 'batman' ],
  'superman',
  'flash',
  'batman'
]*/
//sabko akela kr diya 

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)// yaha array ke andar kitna depth h wo dalna h infinity daalne se khud figure out kr lega 

console.log(real_another_array); // saare akele ho jayenge jitne array ke andar array jaise bhi ho 

console.log(Array.isArray("srijan")); // false
console.log(Array.isArray([1,2,3])); // true  
// array ke andar array h ya nhi check krne ke liye use hota h
console.log(Array.from("srijan")); // ['s', 'r', 'i', 'j', 'a', 'n']  
console.log(Array.from({name:"srijan"})); // [undefined]  // array from object
// yaha array from object me object ke andar length property nhi h isliye undefined aaya  agar length property hoti to uske hisab se array ban jata

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)); // [ 100, 200, 300 ] // array of method se array ban jata h



