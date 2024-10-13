//배열의 요소를 정해진 크기만큼 분할하기

function chunk(array, size) {
  //반환할 빈 배열을 생성
  const result = [];
  // 0부터시작하는 인덱스 초기값
  let index = 0;
  //인덱스가 주어진 배열의 길이보다 작은동안에
  //루프를 끝내기 위해 index는 증가해야한다
  while (index < array.length) {
    //빈배열에 슬라이스한 배열을 넣기
    //slice는 마지막 요소는 포함X이기때문에 
    //먼저 push한 배열 다음 요소부터 분할하게 된다
    //분할의 기준은 주어진 size숫자만큼
    result.push(array.slice(index, index + size));
    //주어진 배열의 인덱스에 사이즈를 더한다
    index = index + size 
  }

  //조작된배열을 반환
  return result;
}

//          index  0 1 2 3
console.log(chunk([1, 2, 3, 4], 2));
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(chunk([1, 2, 3, 4, 5], 4));
console.log(chunk([1, 2, 3, 4, 5], 5));
console.log(chunk([1, 2, 3, 4, 5], 6));
