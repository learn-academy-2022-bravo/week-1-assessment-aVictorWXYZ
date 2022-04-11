// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function tat takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// // Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// //banana should be the result of Set one
// // I need to use the fruit variables in a function to compare the two established fruit variables
// // I'll have to use the .function 
// // I'll compare with an if statement using the > conditional
// //the result will give the bigger of the two
// if(fruit1.length>fruit2.length){
//     console.log(fruit1)
// }else {
//     console.log(fruit2)
// }
// //looks like it works as banana is the response I get 
// // banana was the result
// //Ill try it again but with 1 and 2 switched
// if(fruit1.length>fruit2.length){
//     console.log(fruit2)
// }else {
//     console.log(fruit1)
// }
// //apple
// //looks like it works
// // Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"
// //I'll use my first function again to see if it works below
// // if(fruit1.length>fruit2.length){
// //     console.log(fruit1)
// // }else {
// //     console.log(fruit2)
// // }
// // I recieved an error as I forgot to change the numbers to the new variable numbers 2 and 3
// //going to try again with updated variables
// if(fruit3.length>fruit4.length){
//     console.log(fruit3)
// }else {
//     console.log(fruit4)
// }
// //error again since I didnt close out the first one
// //cherry is the result and it looks good... moving on.


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// const temp1     = 42
// const temp2     = 350
// const temp3     = 212
// const bPoint    = 212


//expected output has been given
//I will use an if statement that has only one if
//it will have an else statement for if its not above boiling
// const boilingPoint = (inputTemp) => {
//     if(inputTemp>212){
//         return `${inputTemp} is above boiling point`
//     }else{
//         return `${inputTemp} is below boiling point`
//     }
// }

// console.log(boilingPoint(temp1))
// //it worked for 42
// //going to add the other 2
// console.log(boilingPoint(temp2))
// console.log(boilingPoint(temp3))

// 42 is below boiling point
// 350 is above boiling point
// 212 is below boiling point


// I see now that I didnt include a value for is at boiling point so ill retype it below
// const boilingPoint = (inputTemp) => {
//     if(inputTemp = bPoint){
//         return `${inputTemp} is at boiling point`
//     }else if(inputTemp<bPoint){
//         return `${inputTemp} is below boiling point`
//     }else if(inputTemp>bPoint){
//         return `${inputTemp} is above boiling point`
//     }
// }
//this made them all 212 is at boiling point
//the good thing is variable bPoint seems to be working
//trying again with an absolute equal ===
// const boilingPoint = (inputTemp) => {
//     if(inputTemp === bPoint){
//         return `${inputTemp} is at boiling point`
//     }else if(inputTemp<bPoint){
//         return `${inputTemp} is below boiling point`
//     }else if(inputTemp>bPoint){
//         return `${inputTemp} is above boiling point`
//     }
// }
// console.log(boilingPoint(temp1))
// console.log(boilingPoint(temp2))
// console.log(boilingPoint(temp3))
// 42 is below boiling point
// 350 is above boiling point
// 212 is at boiling point
// looks good moving on




// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// const myNumbers1 = [3, 7, 0, 36, -9]
// const myNumbers2 = [8, -7, 42, 9, 13]
//expected output is already established
//combine with .join then follow up with a .length
// const joiningTwoArrays = (mNumber1,mNumber2) => {
//     return (mNumber1.join(myNumbers2))
// }
// console.log(joiningTwoArrays())
//error
// const joiningTwoArrays = () => {
//     return (mNumber1.join(myNumbers2))
// }
// console.log(joiningTwoArrays())
//deleted mNumber1,mNumber2
//still broken
// const joiningTwoArrays = () => {
//     return (mNumbers1.join(myNumbers2))
// }
// console.log(joiningTwoArrays())
// saw the missing s in mNumber1 but only now saw the missing y 
// const joiningTwoArrays = () => {
//     return (myNumbers1.join(myNumbers2))
// }
// console.log(joiningTwoArrays())
//38,-7,42,9,1378,-7,42,9,1308,-7,42,9,13368,-7,42,9,13-9 
//yeah no idea what that is about, guessing it has to do with the join I used
// const myNumbers1 = [3, 7, 0, 36, -9]
// const myNumbers2 = [8, -7, 42, 9, 13]
//move down the const
// const joiningTwoArrays = () => {
//     return (myNumbers1.join("myNumbers2"))
// }
// console.log(joiningTwoArrays())
//still a mess 3myNumbers27myNumbers20myNumbers236myNumbers2-9
// const joiningTwoArrays = () => {
//     return (myNumbers1.join(myNumbers2))
// }
// console.log(joiningTwoArrays())
//38,-7,42,9,1378,-7,42,9,1308,-7,42,9,13368,-7,42,9,13-9
// console.log(myNumbers1)
// console.log(myNumbers2)
// const joiningTwoArrays = () => {
//     return (myNumbers1.join(myNumbers2))
// }
// console.log(joiningTwoArrays())
// //[ 3, 7, 0, 36, -9 ]
// [ 8, -7, 42, 9, 13 ]
// 38,-7,42,9,1378,-7,42,9,1308,-7,42,9,13368,-7,42,9,13-9
// console.log(myNumbers1)
// console.log(myNumbers2)
// const joiningTwoArrays = () => {
//     return (myNumbers1.concat(myNumbers2))
// }
// console.log(joiningTwoArrays())
// const lengthTwoArrays = () => {
//     return (joiningTwoArrays.length())
// }
//no errors and I think its working need o pull a console.log
//realized I was using a join not concat after looking at my javascript notes
// console.log(myNumbers1)
// console.log(myNumbers2)
// const joiningTwoArrays = () => {
//     return (myNumbers1.concat(myNumbers2))
// }
// console.log(joiningTwoArrays())
// const lengthTwoArrays = () => {
//     return (joiningTwoArrays.length())
// }
// console.log(lengthTwoArrays())
//this console.log causes an error
// console.log(myNumbers1)
// console.log(myNumbers2)
// var joiningTwoArrays = myNumbers1.concat(myNumbers2)
// console.log(joiningTwoArrays)
// console.log(joiningTwoArrays.push("test"))
//done a lot of changes but not sure how to move on
// the result at teh moment is they are grouped but look funky unsure how to fix
// [ 3, 7, 0, 36, -9 ]
// [ 8, -7, 42, 9, 13 ]
// [
//   3,  7,  0, 36, -9,
//   8, -7, 42,  9, 13
// ]
//
// const myNumbers1 = [3, 7, 0, 36, -9]
// const myNumbers2 = [8, -7, 42, 9, 13]
// console.log(myNumbers1)
// console.log(myNumbers2)
// var joiningTwoArrays = myNumbers1.concat(myNumbers2)
// console.log(joiningTwoArrays)
// console.log(joiningTwoArrays.length)
//array still looks funky but .length has the result of 10 moving on

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ovarB"


// const currentCohort = "Bravo 2022"

// const currentCReversed = currentCohort.split()
// console.log(currentCReversed.reverse())
//[ 'Bravo 2022' ] is the current response from this 
// forgot to write before this
//reverse works on arrays so I used split to make it an array but I didnt use the split("") ill try that next see what it does
// const currentCohort = "Bravo 2022"
// const currentCReversed = currentCohort.split("")
// console.log(currentCReversed.reverse())
//trying with ' instead of ""
// const currentCohort = "Bravo 2022"
// var currentCReversed = currentCohort.split('')
// console.log(currentCReversed.reverse())
// console.log(currentCReversed.join())
// 2,2,0,2, ,o,v,a,r,B
// const currentCohort = "Bravo 2022"
// var currentCReversed = currentCohort.split('')
// currentCReversed.reverse()
// console.log(currentCReversed.join(''))
// result:
//   2202 ovarB

// //
// recieved 2202 ovarB but you wanted Expected output: "1202 ovarB"

const currentCohort = "Bravo 2022"
const currentCReversed = currentCohort.split('')
currentCReversed.pop()
currentCReversed.reverse()
currentCReversed.unshift(1)
console.log(currentCReversed.join(''))
// //1202 ovarB is the answer with this, moving on
//Result:
// 1202 ovarB


// // --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"
// // const myArray = [13, 34, 5, 10, 27, 42]
// // const myArrayFirstnum = (myArray.slice(0,1))
// // const numEval1 = () => {
// // }
// // console.log(myArrayFirstnum)
// //I wrote the above before calling it a day.
// // const myArray = [13, 34, 5, 10, 27, 42]
// //I'm guessing this was the given and everything below is what I wrote.
// //I think I was trying to answer a question that wasnt even being asked so I'll start over.
// // const myArrayFirstnum = (myArray.slice(0,1))
// // const numEval1 = () => {
// // }
// // console.log(myArrayFirstnum)
// let myArray = [13, 34, 5, 10, 27, 42]
// //What I need it something that counts up but only as high as the last array, so even if the array gets bigger or smaller is gives the correct number of responses
// //I see now that what I was doing above was an attempt at getting the number of inputs in the array I think I can use now that I've thought about the question
// // const myArrayFirstnum = (myArray.slice(0,1))
// // const numEval1 = () => {
// // }
// // console.log(myArrayFirstnum)
// //this gives me the first number
// //I will see about making it push out the last number instead
// const myArrayFirstnum = (myArray.pop())
// const numEval1 = () => {

// }
// // console.log(myArrayFirstnum)
// let totalNumArray = (myArray.push(myArrayFirstnum))
// // console.log(myArray)
// // console.log(totalNumArray)
// //with the above I have save the total number of in an array in totalNumArray
// //I need to make an array with each of the numbers 0-5
// // for(let i = 0; i <= totalNumArray; i++){
// //     console.log("Counting 1 6 times?")
// // }
// // //I counted 7 times so I'll change the <= to < and see what that does
// // for(let i = 0; i < totalNumArray; i++){
// //             console.log("Counting 1 6 times?")
// //     }
// //counted 6 times
// // need to have it return the individual array
// // for(let i = 0; i < totalNumArray; i++){
// //             console.log(myArray[i])
// //     }
// //It spits out the array now need to change the result to only spit out odd or even
// tnum)

// const myArray = [13, 34, 5, 10, 27, 42]
// const myArrayFirstnum = (myArray.pop(0))
// let totalNumArray = (myArray.push(myArrayFirstnum))

// for(let i = 0; i < totalNumArray; i++){
//     if(myArray[i] % 2 !== 0){
//         console.log("odd")
//     }else if (myArray[i] % 2 === 0){
//         console.log("even")
//     }else {
//         console.log("ERROR or just 0")
//     }
// }
// //desired result of odd and even given moving on.
//result :
// odd
// even
// odd
// even
// odd
// even



// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Set one:
// const number1 = 58
// const number2 = 100
// // need to compare the numbers
// // need to subtract the numbers
// // only needs to work with any TWO numbers
// if (number1>number2){
//     console.log(number1-number2)
// }else {
//     console.log(number2-number1)
// }
//not much to write about for this problem
// node result: 42
// Set two:
// const number3 = 27
// const number4 = 24
//copy the above but change the 1,2 for 3,4
// if (number3>number4){
//     console.log(number3-number4)
// }else {
//     console.log(number3-number4)
// }
// desired results given 
// node result: 3

