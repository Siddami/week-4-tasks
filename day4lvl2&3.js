/*Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F*/
let studentScore = parseInt(prompt("Enter your score"))
if (studentScore >= 80) {
    console.log("Your grade is A")
}
else if (studentScore >= 70 ){
    console.log("Your grade is B")
}
else if (studentScore >= 60) {
    console.log("Your grade is C")
}
else if (studentScore >= 50) {
    console.log("Your grade is D")
}
else {
    console.log("Your grade is F")
}

/*Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer*/

let seasonUserInput = prompt("What month is it");
let season = seasonUserInput.toLowerCase(); 

switch (season) {
    case "september":
    case "october":
    case  "november":
        console.log("The season is Autumn")
        break;
    case "december":
    case "january":
    case "february":
        console.log("The season is Winter")
        break;
    case "march":
    case "april":
    case "may":
        console.log("The season is Spring")
        break;
    case "june":
    case "july":
    case "august":
        console.log("The season is Summer")
        break;
    default:
    console.log("recheck your input, no season")
}

//Check if a day is weekend day or a working day. Your script will take day as an input.
let usersDayInput = prompt("What day is it?");
let dayInput = usersDayInput.toLowerCase();
switch (dayInput) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thurday":
    case "friday":
        console.log(`${dayInput} is a working-day`)
        break;
    case "saturday":
    case "sunday":
        console.log(`${dayInput} is a weekend`)
        break;
    default:
        console.log("something is wrong")        
}

//level 3 exercise

//Write a program which tells the number of days in a month.

let rawMonthInput = prompt("Input a month");
let monthInput = rawMonthInput.toLowerCase();

 switch (monthInput) {
     case "january":
     case "march":
     case "may":
     case "july":
     case "august":
     case "october":
     case "december":
         console.log(`${monthInput} has 31 days`)
         break;
     case "april":
     case "june":
     case "september":
     case "november":
         console.log(`${monthInput} has 30 days`)
         break;
     case "february":
         console.log(`${monthInput} has 28 days`)
         break;
    default:
        console.log("Something went wrong")
 }

 //Write a program which tells the number of days in a month, now consider leap year.

year = new Date().getFullYear

switch (monthInput) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        console.log(`${monthInput} has 31 days`)
        break;
    case "april":
    case "june":
    case "september":
    case "november":
        console.log(`${monthInput} has 30 days`)
        break;
    case "february":
        if (year % 4 !== 0) {
            console.log(`${monthInput} has 29 days`)
        }
        else {
            console.log(`${monthInput} has 28 days`)
        }
        break;
   default:
       console.log("Something went wrong")
}











