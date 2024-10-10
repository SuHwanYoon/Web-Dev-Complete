function maxChars(str) {
    const charMap = {}
    let max = 0
    let maxChar = ''

    //charMap 객체에 input문자열의 key,value를 설정하는과정{ a: 1, b: 1, c: 8, d: 1 }
    //배열(Array), 문자열(String), Map, Set 등 **반복 가능한 객체(iterable objects)**의 요소를 반복하기 위한 for of
    for (let char  of str) {// str = abccccccccd
        //charMap[char]는 undifined에서 시작
        //각 문자가 한번씩 ++를 시도함 -> undefinded + 1일 경우는 NaN(false)가 되서 || 1 이 실행됨
        //c처럼 여러번 반복되는 문자는 || 1 에서 시작해서 2,3,4....로 값이 증가함

        charMap[char] = ++charMap[char] || 1
        // charMap[char] = charMap[char] + 1 || 1

    }
    // 객체(Object)의 **열거 가능한 속성(enumerable properties)**을 반복하기위한 for in 구문
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
console.log('MaxChar is: '+maxChars('apple 1231111'))//{ a: 1, b: 1, c: 8, d: 1 }