const inputStr = 'kayak'

function palindrom(str) {
    const reversedStr = str.split('').reverse().join('')

    // if (str === reversedStr) {
    //     return true
    // }

    // return false

    return str === reversedStr
}


console.log(inputStr)
console.log(palindrom(inputStr))