function maxChars(str) {
    const charMap = {}
    for (let char  of str) {
        if (charMap[char]) {
            charMap[char]++
        }else{
            charMap[char] = 1
        }
    }

    return charMap
}

console.log(maxChars('abccccccccd'))//{ a: 1, b: 1, c: 8, d: 1 }