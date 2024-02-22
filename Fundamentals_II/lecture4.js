
//Exercise A
//Create a function
function converter(eur) {
    return eur * 7.45
}
//Using the function
console.log("100 euros to dkk is " + converter(100))
console.log("We expect the result to be ~745 dkk")


//Exercise A refactored
//Create a function
function convertToDkk(eur) {
    let exchangeRateToDkk = 7.45
    return eur * exchangeRateToDkk
}
//Using the function
console.log("100 euros to dkk is " + convertToDkk(100))
console.log("We expect the result to be ~745 dkk")

//Exercise B refactored
function isPrimeNumber(n) {
    if (n == 1) {
        return false
    }
    if (n == 2) {
        return true
    }
    if (n == 3) {
        return true
    }

    //This is not a great way of writing this function :(
    return false
}
console.log("2 is prime " + isPrimeNumber(2))
console.log("3 is prime " + isPrimeNumber(3))
console.log("4 is not prime " + isPrimeNumber(4))

//We will see Exercise B next lecture

//Exercise C-D
function isEvenNumber(number) {
    // return Number.isInteger(number / 2)
    return number % 2 == 0
}
console.log("2 is even, right? " + isEvenNumber(2))
console.log("4 is even, right? " + isEvenNumber(4))
console.log("3 is not even, right? " + isEvenNumber(3))

function isOddNumber(number) {
    return number % 2 != 0
}

console.log("2 is not odd, right? " + isOddNumber(2))
console.log("4 is not odd, right? " + isOddNumber(4))
console.log("3 is odd, right? " + isOddNumber(3))
console.log("315872385612385 is odd, right? " + isOddNumber(315872385612385))

//Exercise C-D refactored
function isEven(number) {
    // return Number.isInteger(number / 2)
    return isDivisible(number, 2)
}
console.log("2 is even, right? " + isEven(2))
console.log("4 is even, right? " + isEven(4))
console.log("3 is not even, right? " + isEven(3))

function isOdd(number) {
    return !isDivisible(number, 2)
}

function isDivisible(number, divisor) {
    return number % divisor == 0
}

console.log("25 is divisible by 5", isDivisible(25, 5))
console.log("100 is divisible by 10", isDivisible(100, 10))
console.log("6 is divisible by 3", isDivisible(6, 3))

console.log("2 is not odd, right? " + isOdd(2))
console.log("4 is not odd, right? " + isOdd(4))
console.log("3 is odd, right? " + isOdd(3))
console.log("315872385612385 is odd, right? " + isOdd(315872385612385))

//Exercise E
function abbreviate(firstName, middleName, lastName) {
    if (firstName == "" || lastName == "") {
        return "MISSING INFORMATION"
    }
    // if (middleName.length > 0) {
    if (middleName != "") {
        return firstName[0] + " " + middleName[0] + ". " + lastName[0]
    } else {
        //The Code when we did not receive a middle name
        return firstName[0] + lastName[0]
    }

}
console.log("Abbreviate Germán Ariel Leiva: " + abbreviate("Germán", "Ariel", "Leiva"))
console.log("Abbreviate Max Power: " + abbreviate("Max", "", "Power"))
console.log("Abbreviate Madonna: " + abbreviate("Madonna", "", ""))

// Exercise F
function abbreviateStringToInitials(str) {
    // get array from string, split parameter decided where to split the string
    const words = str.split(" ")
    
}

console.log("Abbreviate Gabriel Høst Andersen: " + abbreviateStringToInitials("Gabriel Høst Andersen"))

//Exercise F refactored
function abbreviateString(str) {
    return str.split(" ").map(word => word[0]).join(" ")
}

console.log("Abbreviate Gabriel Høst Andersen: " + abbreviateString("Gabriel Høst Andersen"))