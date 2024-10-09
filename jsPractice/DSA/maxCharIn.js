function maxChars(str) {
    const charMap = {}
    let max = 0
    let maxChar = ''

    //charMap 객체에 key,value를 설정하는과정
    for (let char  of str) {
        if (charMap[char]) {
            //charMap의 value를 ++
            charMap[char]++
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