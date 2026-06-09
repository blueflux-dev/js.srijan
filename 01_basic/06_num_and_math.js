const score = 400 
// automatically define ki yeh number h 
console.log(score); // 400

const balance =  new Number(100) // explicitily number hoga 
console.log(balance); // [Number : 100]

console.log(balance.toString()); // 100 string ban gya 
console.log(balance.toFixed(2)); // matlab decimal ke baad tumhe kitna point chaiye 

const otherNumber = 23.898890
console.log(otherNumber.toPrecision(3)); // matlab hume 3 hi value chaiye to 23.9 aayega
// agar 123.456789 me 4 precision chaiye to 123.5 aayega

const hunreds = 100000
console.log(hunreds.toLocaleString("en-IN")); // 1,00,000
// toLocaleString me hum apni local ke hisab se number ko format kr skte h jaise india me 1,00,000 aur uske alawa 100,000 aayega
// matlab indian number system ke hisab se hi comma lagega



//+++++++++++++++++++++++MATH+++++++++++++++++++++++++++++++

console.log(Math); // yeh math ek object h jisme math se related sare functions hote h
console.log(Math.abs(-25)); // 25
console.log(Math.ceil(4.3)); // 5 matlab usse upar ka number jaise agar 4 se thoda sa bhi upar hoga to 5 aayega aur agar 4.0 hoga to 4 hi aayega
console.log(Math.floor(4.7)); // 4 only usse niche ka number aayega chahe 4.9 h ya 4.1 hoga to bhi 4 aayega
console.log(Math.round(4.3)); // 4 agar 4.5 ya usse upar hota to 5 aata

console.log(Math.max(1,2,3,4,5)); // 5 maximum value dega
console.log(Math.min(1,2,3,4,5)); // 1 minimum value dega
console.log(Math.random()); // 0 se 1 ke beech me random number dega
//agar hume 0 se 100 ke beech me random number chahiye to hum ise 100 se multiply kr denge
console.log(Math.random()*100); // 0 se 100 ke beech me random number dega
// agar hume 1 se 100 ke beech me random number chahiye to hum ise 100 se multiply kr denge aur usme 1 add kr denge
console.log(Math.random()*100 + 1); // 1 se 100 ke beech me random number dega



const min = 10
const max = 20

// agar hume min se max ke beech me random number chahiye to hum ise (max - min) se multiply kr denge aur usme min add kr denge
console.log(Math.floor(Math.random()*(max - min) + min)); // 10 se 20 ke beech me random number dega integer form me
