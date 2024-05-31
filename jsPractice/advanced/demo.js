//id로 input엘리먼트에 접근
const inputTextElement = document.getElementById("input-text");
//id로 span 엘리먼트에 접근
const remainingCharsElement = document.getElementById("remaining-chars");

//input엘리먼트에 설정한 maxlength속성에 접근 - 60
const maxAllowedChars = inputTextElement.maxLength;

//input에 텍스트가 입력될때 마다 실행될 함수
function updateRemainingCharaters(event) {
  //입력된 텍스트의 값
  const enteredText = event.target.value;
  //입력된 텍스트의 값 길이
  const enteredTextLength = enteredText.length;

  //maxlength속성값 - 입력된 텍스트의 값 길이
  const remainnigCharacters = maxAllowedChars - enteredTextLength;

  //span엘리먼트 값에 계산값을 넣어준다
  //const값이지만 span엘리먼트의 속성에 변화를 주는 것이기 때문에
  //오류가아니다
  remainingCharsElement.textContent = remainnigCharacters;

  //입력가능 글자가 10자 이하일때 경고표시 하는 함수
  //입력가능 글자가 0 이라면
  if (remainnigCharacters === 0) {
    //span엘리먼트에  css에 정의되어있는 클래스 추가
    remainingCharsElement.classList.add("error");
    //input엘리먼트에 css에 정의되어있는 클래스 추가
    inputTextElement.classList.add("error");
} else if (remainnigCharacters <= 10) {
      //입력가능 글자가 10이하라면
    //span엘리먼트에  css에 정의되어있는 클래스 추가
    remainingCharsElement.classList.add("warning");
    //input엘리먼트에 css에 정의되어있는 클래스 추가
    inputTextElement.classList.add("warning");
    //span엘리먼트에  css에 정의되어있는 클래스 제거
    remainingCharsElement.classList.remove("error");
    //input엘리먼트에 css에 정의되어있는 클래스 제거
    inputTextElement.classList.remove("error");
  } else {
    //span엘리먼트에  css에 정의되어있는 클래스 제거
    remainingCharsElement.classList.remove("warning");
    //input엘리먼트에 css에 정의되어있는 클래스 제거
    inputTextElement.classList.remove("warning");
  }
}

//input에 텍스트가 입력될때마다 실행될 이벤트
inputTextElement.addEventListener("input", updateRemainingCharaters);
