let paragraphElement = document.querySelector('p');


//클릭 될때마다 실행될 함수
function changeParagraphText(event) {
    paragraphElement.textContent = 'Clicked';
    console.log('Paragraph Clicked');
    console.log(event);
}

//'click'가 있었을때 changeParagraphText함수를 실행하기위해
// changeParagraphText()가 아닌 changeParagraphText 를 삽입
paragraphElement.addEventListener('click',changeParagraphText);

//input요소를 선택
let inputElement = document.querySelector('input');

function retriveUserInput(event) {
    //let entetedText = inputElement.value;
    let entetedText = event.target.value;
    //let entetedText = event.data; -> different
    console.log(entetedText);
}

//유저가 텍스트 박스에 값을 입력할때마다 실행될 이벤트
inputElement.addEventListener('input', retriveUserInput);