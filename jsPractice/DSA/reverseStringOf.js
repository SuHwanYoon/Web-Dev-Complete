const inputStr = 'reverseCopy'

function reverse(str) {
    let reversed = ''
    //반복가능한 객체의 값을 순회하는 for of 문
    for (let char of str) {
        //문자열을 앞에서 부터 순회하지만 한글자 한글자가 앞으로 위치하기에 리버스가된다
        reversed = char+reversed
    
    
    }
    return reversed
}

console.log(
    reverse(inputStr)
);