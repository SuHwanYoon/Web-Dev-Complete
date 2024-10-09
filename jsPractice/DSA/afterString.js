let str = "abcdefghijklmnopqrstuvwxyz";
let startIndex = str.indexOf("gh") + 2; // "xy"의 끝 index반환
let result = str.slice(startIndex);// "xy"의 끝index+2부터 끝까지 문자열 추출
console.log(result); // "ijklmnopqrstuvwxyz"
