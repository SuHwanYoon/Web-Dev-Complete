const inputStr = 'functionalMethod'

function reverse(str) {

    // const strToArray = str.split('')

    // strToArray.reverse()

    // return strToArray.join('')

    return str.split('').reverse().join('')
}

console.log(
    reverse(inputStr)
);
