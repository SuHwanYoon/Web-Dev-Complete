//나이 출력 
// 나이 age가 주어질때 2022년을 기준으로 출생년도를 리턴하는함수
//예시 40살 1983 , 23살 2003


function solution1(age) {
    const birthYear = 2022 - age + 1 
    return birthYear
}

console.log(solution1(40));

function solution2(age) {
    const birthYear = 2023 - age
    return birthYear
}

console.log(solution2(20));

