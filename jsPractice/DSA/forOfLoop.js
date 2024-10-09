let arr = [1, 2, 3];
for (let value of arr) {
    console.log(value);
}
// 출력:
// 1
// 2
// 3


// for...of

let arr2 = [10, 20, 30];

for (let value of arr2) {
    console.log(value); // 값 출력
}
// 출력:
// 10
// 20
// 30

// 반복 대상:
// for...in: 객체의 열거 가능한 '속성(key)'을 반복합니다.
// for...of: 반복 가능한 객체의 '요소'를 반복합니다.

// 사용 예:
// for...in: '객체{}'의 속성을 반복할 때 유용합니다.
// for...of: Array, String, Map, Set 등의 요소를 반복할 때 유용합니다.

// 배열에서의 차이:
// for...in은 Array의 '인덱스'를 반복합니다.
// for...of는 Array의 '값'을 반복합니다.