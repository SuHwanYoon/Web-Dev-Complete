//id로 input엘리먼트에 접근
const inputTextElement = document.getElementById('input-text');
//id로 span 엘리먼트에 접근
const remainingCharsElement = document.getElementById('remaining-chars');

//input엘리먼트에 설정한 maxlength속성에 접근 - 60
const maxAllowedChars = inputTextElement.maxLength;

//이벤트가 실행될때마다 실행될 함수
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
}

//input에 텍스트가 입력될때마다 실행될 이벤트
inputTextElement.addEventListener('input',updateRemainingCharaters);