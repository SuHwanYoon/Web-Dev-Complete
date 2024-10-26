//숫자비교하기 
// 정수 num1, num2가 매개변수로 주어질때 두수가 값으면 1 다르면 -1을 반환하도록 해라


function solution1(num1, num2) {
    const equalNum = num1 === num2 ? 1 : -1; 
    return equalNum
}

console.log(solution1(7,2));

function solution2(num1, num2) {
    let answer = 0
    if (num1 === num2) {
        answer =  1;
    } else {
        answer = -1
    }
    return answer
}

console.log(solution2(2,2));

