/*let username = 'lind'
let age = 30
let hasHobbies = false
let points = [10, 20, 30]
let user = {
    name: 'nuno',
    lastname: 'iriarte'
}
const PI = 3.1416

console.log(username)
console.log(age)
console.log(hasHobbies)
console.log(points)
console.log(user)
console.log(PI)
*/

const age = 8;

/*
if(age >= 18) {
    console.log("You are an adult")
} else if(age >= 13){
    console.log("You are a tennager")
} else {
    console.log("You are a kid")
}
*/

// const names = ['joe', 'marco', 'tilin']

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i])
// }

// function showUserInfo(userName, userAge) {
//     return `The username is ${userName}, the user is ${userAge} years old`
// }

const showUserInfo = (userName, userAge) =>
  `The username is ${userName}, the user is ${userAge} years old`;

console.log(showUserInfo("Hush", 999));
console.log(showUserInfo("Alfonso", 40));
