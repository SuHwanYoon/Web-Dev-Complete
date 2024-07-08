const promiseData = () => {
    const promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('Promise Call Done!')
        }, 1500)
    })
    return promise;
}


// 2초 이후 함수 실행 비동기 코드
setTimeout(() => {
    //2초후 setTimeout함수 호출
    console.log('setTimeout function call!');
    //첫번째 promise 리턴값
    promiseData()
    .then(promiseCall => {
        console.log(promiseCall);
        //2번째 프로미스 리턴
        return promiseData();
    })
    .then(promiseCall => {
        //중첩된 콜백이 아닌 2번째 promiseData();의 then으로 출력
        console.log(promiseCall)
    })
}, 2000)

//동기코드 즉시실행 먼저 출력
console.log('Hello World');