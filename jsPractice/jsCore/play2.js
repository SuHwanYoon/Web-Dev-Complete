const person = {
    myname : 'yoon',
    age : 33,
    greet: () => {
                //화살표 함수 사용시 this는 person이 아닌 전역함수를 참조
        console.log('Hi my name is '+ this.myname); 
    }
};

const person2 = {
    myname : 'yoon',
    age : 33,
    //person2 객체를 참조하려면 function 키워드사용
    greet: function() {
        console.log('Hi my name is '+ this.myname); 
    }
};


const person3 = {
    myname : 'Kim',
    age : 33,
    //person3 객체를 참조하려면 : 없이 메서드 형태로 작성
    greet() {
        console.log('Hi my name is '+ this.myname); 
    }
};
console.log(person);
//undifined
person.greet();
// print success2
person2.greet();
// print success2
person3.greet();