//각도기
//각 angle가 매개변수로 주어질때
// 0-90 예각일때는 1 , 90 직각일때 2 , 둔각 91~179 3 , 평각 180 4 반환하도록 만들기
//angle은 정수
//제한사항 0 < angle <= 180

function solution1(angle) {
    let answer = 0;
    if (angle < 90) {
        answer = 1;
    }else if (angle === 90) {
        answer = 2;
        
    }else if (angle < 180) {
        //위에서 예각 직각 처리되었으므로 180보다 작기만 하면됨
        answer = 3;
    }else{
        answer = 4;

    }
    return answer;
}

console.log(solution1(9));
console.log(solution1(90));
console.log(solution1(91));
console.log(solution1(180));

