//Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let DrivingAge= parseInt(prompt("Enter your age"))
let less = 18 - DrivingAge
if (DrivingAge >= 18) {
    console.log("You are old enough to drive")
}
else {
    console.log(`You are left with ${less} years to drive`)
}

//Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let myAge= parseInt(prompt("Enter your age"))
let yourAge= parseInt(prompt("Enter your age"))
if (myAge > yourAge) {
    console.log(`I am ${myAge - yourAge} years older than you`)
}
else if (yourAge > myAge) {
    console.log(`You are ${yourAge - myAge} years older than me`)
}
else {
    console.log("We are of the same age")
}

//if a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways using if else ternary operator.
  let a = 4
  let b = 3
//using if else
 if (a > 3) {
     console.log(`${a} is greater than ${b}`)
 }
 else {
    console.log(`${a} is less than ${b}`)
 }

//Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let Number1 = parseInt(prompt("Enter number"))
let kindOfNumber = Number1 % 2
if (kindOfNumber == 0) {
    console.log(`${Number1} is an even number`)
}
else {
    console.log(`${Number1} is an odd number`)
}



