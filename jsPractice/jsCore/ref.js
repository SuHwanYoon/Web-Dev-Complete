const hobbies = ['sport', 'cooking', 1, true];

// 배열에 새로운 요소 추가
hobbies.push('programming');

console.log(hobbies); // ['sport', 'cooking', 1, true, 'programming']

// 배열 요소 변경
hobbies[0] = 'reading';

console.log(hobbies); // ['reading', 'cooking', 1, true, 'programming']

// 새로운 배열을 할당하려고 하면 오류 발생
// hobbies = ['new hobby']; // TypeError: Assignment to constant variable.
