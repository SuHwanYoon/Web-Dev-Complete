//몫구하기 
// 정수 num1, num2가 매개변수로 주어질때 num1을 num2로 나눈 몫을 return 하도록 함수를 완성해라

// 예시
// 10 / 5 -> 2
//실제로는 js는 3.5로 나누어지지만 여기서는 정수로 나눠야 할것을 상정한다
// 7 /2 -> 3    




function solution1(num1, num2) {
    const dividedNum = Math.floor(num1/num2) 
    return dividedNum
}

console.log(solution1(7,2));

function solution2(num1, num2) {
    //~는 이진수를 반대로 하는것 ~~는 이진수를 그대로 하는것
    //따라서 ~~를 하면 정수는 유지되면서 소수점은 사라진다
    const dividedNum = ~~(num1/num2) 
    return dividedNum
}

console.log(solution2(7,2));

