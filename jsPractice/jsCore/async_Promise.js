const fetchData = (callback) => {
    //1.5초후 실행되는 비동기코드
    setTimeout(() => {
        callback('Done Callback!')
    }, 1500)
}


// 2초 이후 함수 실행 비동기 코드
setTimeout(() => {
    console.log('Time is Done');
    fetchData(text => {
        console.log(text);
    })
}, 2000)

//동기코드 즉시실행 먼저 출력
console.log('Hello World');