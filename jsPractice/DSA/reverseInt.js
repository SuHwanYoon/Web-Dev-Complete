 const inputNumber = -15
 
 function reverseInt(number) {
    //파라미터 인트값을 문자열로 변화시켜서 리버스시킴
    const reversedStringFromInt = number.toString().split('').reverse().join('')
    //인트로 변환후 리턴 * 1 or -1 or 0
    return parseInt(reversedStringFromInt) * Math.sign(number)
 }


 console.log(

     reverseInt(inputNumber)
 )