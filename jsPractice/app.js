
//javaScript List
let hobbies = ['Sports','Coding','Reading'];
// alert(hobbies[0])
// alert(hobbies[1])
// alert(hobbies[2])

//JavaScript Object
let job  = {
    title:'개발자',
    place:'남양주',
    salary:3000
};

// alert(job.title);

let yoonage;
let exage = 20;

function calMyAge() {
    return exage + 13;
}

yoonage = calMyAge();
console.log("Yoon's age:"+ yoonage);


let person = {
    name: 'yoon',
    greet(){
        console.log('hello');
    }
};

person.greet();

console.log('Yoon'+' '+'SuHwan')

let userName = 'steve';
console.log(userName.length);
console.log(userName.toUpperCase());
console.log(hobbies.length);

