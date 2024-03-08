// 함수 표현식
function funcA() {
  console.log("funcA");
}

let varA = funcA;
varA();

let varB = function funcB() {
  // funcB 라는 이름이 없어도 동작 -> 익명 함수
  // 선언식이 아님 -> "함수 표현식"
  // 호이스팅 대상이 아님
  console.log("funcB");
};

varB();

// 2. 화살표 함수
let varC = () => {
  return 1;
};

let varD = () => 1;

console.log(varC(), varD());

let varE = (value) => value + 1;

console.log(varE(10));

let varF = (value) => {
  console.log(value);
  return value + 1;
};
console.log(varF(20));
