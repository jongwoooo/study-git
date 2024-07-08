var a;
let b = 10;
const name = "weniv";

a = 30;
b = 20;
name = "hello";
// const로 선언헌 변수는 재할당이 불가능
// 값을 재할당 할 수 없기 때문에 선언과 동시에 할당

console.log(a);
console.log(b);
console.log(c);
// 변수 사용 전 꼭 선언하기

// 카멜케이스
// firstName, totalCount, userAge
// 스네이크 케이스
// first_name, total_count, user_age
// 파스칼 케이스
// FirstName, TotalCount, UserAge
// 헝가리안 케이스
// strUserName, $submitButton

// 기존 규칙, 팀의 선호도, 사용하는 프로그래밍 언어의 관례를 고려 일관성 유지

valueA = 10;
console.log(valueA);
//오류 발생x
//변수 선언하기

var valueA = 20;
var valueA = 30;

let valueB = 40;
let valueB = 50; // 재선언 불가능

var valueVar = 15;
valueVar = 25;

let valueLet = 20;
valueLet = 30;

const valueLet = 5;
valueLet = 10; // 재할당 오류 발생

//var < 변수 재선언 가능 예기치 못한 문제 생길 수 o
//let 와 const의 경우 const가 우세함
//1. 의도하지 않은 값의 변경 방지
//2.가독성 향상
