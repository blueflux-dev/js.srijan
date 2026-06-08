const accountId = 1445
let accountemail = "srijankumar@gmail.com"
var accountpassword = "123454"
accountcity = "jaipur" 

let accountState;
// accountId = 2

console.log(accountId);

accountemail = "hc@gmail.com"
accountpassword = "6511"
accountcity = "bnegakuyu"
/*
prefer not to use var beacause of issue in block scope coz curly bracket ke bahat bhi use ho jata h var and eliminate nhi hota h and bar bar declare ho sakta h sp don't use it
*/
console.table([accountId,accountemail,accountpassword,accountcity,accountState])
//hum yeh saare kaam node ke andar ke rhe h ....so isiliye sabke aage node use kr rhe h 