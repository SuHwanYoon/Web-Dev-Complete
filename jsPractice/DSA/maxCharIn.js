function maxChars(str) {
    const charMap = {}
    let max = 0
    let maxChar = ''

    //charMap 객체에 key,value를 설정하는과정
    for (let char  of str) {
        //charMap[a] a라는 key의 value 숫자
        //처음에는 charMap[a]의 value가없기때문에 undefinded가 된다
        //undefinded는 false로 간주된다
        console.log(charMap[char])
        if (charMap[char] !== undefined) {
            //charMap의 value를 ++
            charMap[char] = charMap[char] + 1
            // charMap[char] = charMap[char] + 1
        }else{
            charMap[char] = 1
        }
    }
    // 객체값 순회를 위한 for in 구문
    for (let key in charMap) {
        // key값 문자로 구한 value 숫자값 > max
        // a: 1 b: 1 c: 8
        if(charMap[key] > max){
            max = charMap[key]// 1 , 1, 8
            maxChar = key // a , b , c
            console.log(maxChar)
        }
    }


    return maxChar
}

console.log('MaxChar is: '+maxChars('abccccccccd'))//{ a: 1, b: 1, c: 8, d: 1 }