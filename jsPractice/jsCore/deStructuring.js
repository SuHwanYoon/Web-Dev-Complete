const person = {
    myname : 'yoon',
    age : 33,
    greet: () => {
                //화살표 함수 사용시 this는 person이 아닌 전역함수를 참조
        console.log('Hi my name is '+ this.myname); 
    }
};

const printName = (personData) => {
    console.log(personData.myname);
}

const deStructuringFun = ({ age }) =>
    {
        console.log(age);
    }
// 객체 구조 분해
const {myname, age , greet} = person;


printName(person);
deStructuringFun(person);
console.log(myname,age,greet);


// 배열 구조 분해
const hobbies = ['Sport','Cooking'];
//배열 요소를 하나하나의 요소로 각각 분해 (위치참조)
const [hobby1,hobby2] = hobbies;

console.log(hobby1,hobby2);