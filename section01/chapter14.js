// 스코프
// '범위'라는 뜻
// 변수나 함수에 접근하거나 호출할 수 있는 범위를 말함

// 전역 스코프 / 지역 스코트
// 전역 스코프: 전체 영역에서 접근 가능
// 지역 스코프: 특정 영역에서 접근 가능

let a = 1; // 전역 스코프

function funcA() {
  let b = 2; // 지역 스코프
  console.log(a);
}

funcA();
// console.log(b); 에러

// {} 블록안에 생성된 것들은 지역 스코프

if (true) {
  let c = 1;
}

// console.log(c); 에러

for (let i = 0; i < 10; i++) {
  let d = 1;
}
// console.log(d); 에러

// 함수 안의 함수는 지역 스코프
