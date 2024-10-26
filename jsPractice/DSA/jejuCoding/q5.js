//양꼬치
//10인분 먹으면 음료수하나가 서비스 양꼬치는 1인분 12000 , 음료수 2000
// 정수 n 과 k가 매개변수로 주어졌을때 양꼬치 n인분과 음료수 k개를 먹었다면 총얼마를 지불해야하는가
// 입출력 예시 
// n = 10 , k = 3 -> 124000


function solution1(n , k) {
    let yangPrice = 12000 * n;
    let colaPrice = 2000 * k
    let colaService = 2000 * Math.floor(n/10)


    return yangPrice + colaPrice - colaService;
}

function solution2(n , k) {

    if (n >= 10) {
        k = k- Math.floor(n/10)
    }

    return 12000 * n + 2000 * k
}

console.log(solution1(9,3));
console.log(solution1(10,3));

console.log(solution2(9,3));
console.log(solution2(10,3));