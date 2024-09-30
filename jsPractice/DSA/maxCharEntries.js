function maxChars(str) {
    const charMap = {}
    let max = 0
    let maxChar = ''

    //charMap 객체에 key,value를 설정하는과정
    for (let char  of str) {
        if (charMap[char]) {
            charMap[char]++
        }else{
            charMap[char] = 1
        }
    }
    //설정한 key , value를 비교해서 변수에 넣는 과정
    for (const [key,value] of Object.entries(charMap)) {
        console.log(key,value)
        if(value > max){
            max = value
            maxChar = key
        }
    }


    return maxChar
}

console.log(maxChars('abccccccccd'))//{ a: 1, b: 1, c: 8, d: 1 }