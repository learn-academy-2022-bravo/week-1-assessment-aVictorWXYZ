// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))
// a) Your answer: It will give the number 5
// b) Verify and explain: Correct, the .push will send the information in  () to the end of the array and spit out the new total of inputs in the array.


// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer:It will not give anything since It dosnt have a () at the end of length. undefined is a possible answer
// b) Verify and explain: Incorrect, the .length does not require () at the end of it to run. I'm sure it was mentioned in class why but I currently can not recall. 10 is the output


// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer:The const greeting isnt an array so some error message will be given.
// b) Verify and explain:Incorrect, It takes the string as an array and gave out what was holding the 4th position. I'm unsure what it didnt count from 0 and give space instead it gave o as I would have thought if it gave out something other than a error.


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer:Ruby
// b) Verify and explain: Correct, It gives out what is in the 1 place of the index. Index starts from 0 so it skiped the first data point and went on to the second which in this case is #1.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
console.log(weekendDays[1].toUpperCase())

// a) Your answer:I remember reading from slack it would not work. weekendDays would require a [] with the desired index of what you want to change into upercase
// b) Verify and explain:Correct, it gave an error message, going to try it again with [1] added... It works now
//without having read slack idk what I would have said.


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer:"number"
// b) Verify and explain:Incorrect, I thought it would have included the "". I used the typeOf before so I could guess that much.
