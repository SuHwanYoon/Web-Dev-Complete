const person = {
    myname : 'yoon',
    age : 33,
    greet: () => {
                //화살표 함수 사용시 this는 person이 아닌 전역함수를 참조
        console.log('Hi my name is '+ this.myname); 
    }
};

const copiedPerson = {...person};
console.log(copiedPerson);


const hobbies = ['sport', 'cooking', 1, true];

const copiedArray1 = hobbies.slice();// 주소값이 다른 배열 복사 원본 배열에 영향을 미치지 않음

console.log(copiedArray1);

const copiedArray2 = hobbies.slice(1);// index 1부터 끝까지

console.log(copiedArray2);

const copiedArray3 = hobbies.slice(0,3);// index 0부터 2까지

console.log(copiedArray3);

const spreadArray = [...hobbies]; // 해당 배열의 모든 요소를 복사

console.log(spreadArray);


const restArray = (...args) => {
    return args;
}


console.log(restArray(1,2,3));
console.log(restArray(1,2,3,4));