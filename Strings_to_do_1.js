// Remove Blanks

//Create a function that, given a string, returns all of that string’s contents, but without blanks. 

function removeBlanks(str) {
    let newString = ''

    for(let i = 0; i < str.length; i++) {
        if(str[i] != ' ') {
            newString += str[i]
        }
    }

    return newString
}

console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "))
console.log(removeBlanks("I can not BELIEVE it's not BUTTER"))

//Get Digits

//Create a JavaScript function that given a string, returns the integer made from the string’s digits.
//You are allowed to use isNaN() and Number().

function getDigits(str){
    let newNumString = ''

    for(let char in str) {
        if(!isNaN(str[char])) {
            newNumString += str[char]
        }
    }
    return Number(newNumString)

}

console.log(getDigits("abc8c0d1ngd0j0!8"))
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"))

//Acronyms 

// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized).
//You are allowed to use .split() and .toUpperCase().

function acronym(str) {
    let wordsArr = str.split(' ')
    let acronymString = ''

    for(let word in wordsArr) {
        if(wordsArr[word].length > 0) {
            acronymString += wordsArr[word][0].toUpperCase()
        }
    }

    return acronymString
}

console.log(acronym(" there's no free lunch - gotta pay yer way. "))
console.log(acronym("Live from New York, it's Saturday Night!"))

//Count Non-Spaces

//Create a function that, given a string, returns the number of non-space characters found in the string. 

function countNonSpaces(str) {
    let counter = 0

    for(let char in str) {
        if(str[char] !=' ') {
            counter++
        }
    }
    return counter
}

console.log(countNonSpaces("Honey pie, you are driving me crazy"))
console.log(countNonSpaces("Hello world !"))

//Remove Shorter Strings

//Create a function that, given an array of strings and a numerical value,
//returns an array that only contains strings longer than or equal to the given value.

function removeShorterStrings(arr, len) {
    let newStrings = []
    let nextIndex = 0

    for(let value in arr) {
        if(arr[value].length >= len) {
            newStrings[nextIndex++] = arr[value]
        }
    }
    return newStrings
}

console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4))
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3))