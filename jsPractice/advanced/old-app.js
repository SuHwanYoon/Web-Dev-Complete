//console.dir(document);

//id로 요소를 가져오기
let anchorElement = document.getElementById('external-link');
anchorElement.href = 'https://google.com';

//요소 선택하기
anchorElement = document.querySelector('p a');
anchorElement.href = 'https://naver.com';

//새로운 요소 만들기
let newAnchorElement = document.createElement('a');
newAnchorElement.href='https://google.com';
//textContent로 텍스트를 삽입
newAnchorElement.textContent = 'This leads to google'

//p요소 선택하기
let firstParagraph = document.querySelector('p');

//선택한 요소에 새로운 요소를 추가하기
firstParagraph.append(newAnchorElement);

//h1요소 선택
let firstH1Element = document.querySelector('h1');
//지정한 요소 삭제
firstH1Element.remove()

//<p>의 부모요소(parentElement)- body에 <p>요소 추가 -> 기존 <P>를 이동시킴
firstParagraph.parentElement.append(firstParagraph);

//innerHTML
console.log(firstParagraph.innerHTML);

firstParagraph.innerHTML = 'Hi This is <Strong>Important<Strong>';