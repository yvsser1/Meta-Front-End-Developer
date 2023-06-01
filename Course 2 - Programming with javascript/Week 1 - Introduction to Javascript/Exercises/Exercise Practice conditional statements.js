//Complete the following steps to create: Are You Old Enough? 

var age = "10";

if (age >= 65 ){
    console.log("You get your income from your pension")
}
else if (age < 65 && age >= 18 ){
    console.log("Each month you get a salary")
}
else if (age < 18){
    console.log(("You get ana allowance"))
}
else{
    console.log("The value of the age is not numerical")
}

//Code the days of the week program as a switch statement
var day = "Sunday";

switch(day){
    case'Monday':
    console.log("Work");
    break;

    case 'Tuesday':
    console.log("Watch Movie");
    break;

    case 'Wednesday':
    console.log("Read a Novel");
    break;

    case 'Thursday':
    console.log("Go Out");
    break;
    
    case 'Friday':
    console.log("Chill");
    break;
    
    case 'Saturday':
    console.log("Play Video Games");
    break;
    
    case 'Sunday':
    console.log("Paint");
    break;

    default :
    console.log("There is no day")
    break;
}