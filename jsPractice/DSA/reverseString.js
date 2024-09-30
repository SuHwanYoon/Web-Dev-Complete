const inputStr = 'abcdefg'

function reverse(str) {
    let reversed = ''
    for (let i = 0; i < str.length; i++) {
        //문자열을 앞에서 부터 순회하지만 한글자 한글자가 앞으로 위치하기에 리버스가된다
        reversed = str[i]+reversed
    
    
    }
    return reversed
}

console.log(
    reverse(inputStr)
);