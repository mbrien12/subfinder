
//Button testing
function buttonEvent() {
    console.log("hello world");
}

//If else exercises 1
function greaterNum(num1, num2) {
 if (num1 > num2) {
     return num1;
 } else {
     return num2;
 }
}

console.log(greaterNum(5, 10));



//If else exercises 2
function helloWorld(languageCode) {
    if (languageCode == "es") {
        return "Hola Mundo";
    } else if (languageCode == "de") {
        return "Hallo Welt";
    } else {
        return "Hello World";
    }
}

console.log(helloWorld("es"));


//If else exercises 3
function assignGrade(numberScore) {
    if (numberScore > 90) {
        return "A";
    } else if (numberScore > 80) {
        return "B";
    } else if (numberScore > 70) {
        return "C";
    } else if (numberScore > 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log("You got a " + assignGrade(95));

console.log("You got a " + assignGrade(60));


//If else exercises 4

function pluralize (noun, number) {
    
}
