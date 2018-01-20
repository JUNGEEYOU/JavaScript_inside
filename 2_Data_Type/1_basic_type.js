// 1.기본타입 
// 1) 자바스크립트 타입 : 1) 기본 타입: 숫자, 문자열, 불린값, undefined, null  2) 참조타입: 객체(배열, 함수, 정규표현식)

// 2) 자바스크립트 기본 타입: 그 자체가 하나의 값을 나타냄 
//숫자 
var intNum =10;
var floatNum = 0.1;

//문자열 타입 > 수정 불가 
var singleQuteStr = 'single quote string';
var dobuleQuoteStr = "double quote string";
var singleChar ='a';
var str = "test";
console.log("srt[0]: ", str[0]);
str[0] = "R";
console.log("str: ", str); //test > 변하지 않음 

//불린 타입 
var boolVar = true;

//undefined > 할당되지 않은 변수 / 타입이자 값이다 
var emptyVar;

//null > 타입이 아님!!! 
var nullVar = null;  //Object 
console.log("is NULL? ",nullVar === null ); //null 타입 확인시 이렇게 

console.log(typeof intNum, typeof floatNum, typeof singleQuteStr, typeof dobuleQuoteStr,typeof singleChar, typeof boolVar, typeof emptyVar, typeof nullVar);
//number number string string string boolean undefined object 