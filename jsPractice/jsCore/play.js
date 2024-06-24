const myname = "yoon";
var age = 30;
const hasHobbis = true;

age = 33;

//함수 매개변수는 local 변수이기 때문에 함수안에서만 사용이 가능
// function 변수 할당으로 함수이름생략
// const userInfo = function (userName, userAge, userHasHobbis) {
//   return (
//     "Name is " +
//     userName +
//     ", age is " +
//     userAge +
//     " and the user has hoobises: " +
//     userHasHobbis
//   );
// }

//화살표 함수로 function 키워드 생략
const userInfo =  (userName, userAge, userHasHobbis) => {
    return (
      "Name is " +
      userName +
      ", age is " +
      userAge +
      " and the user has hoobises: " +
      userHasHobbis
    );
  }
  
// const add = (a, b) => {return a + b };
// 함수 문장이 한줄이면 return 키워드 와 {} 생략가능
const add = (a, b) => a + b;
// agument가 1개일때는 ()까지도 생략이 가능
const addOne = a => a+1;
// agument가 없는 함수는 () 를 사용해야한다
const addRandom = () => 2+3;

console.log(add(1,2));

console.log(addOne(1));

console.log(addRandom());

console.log(userInfo(myname, age, hasHobbis));
