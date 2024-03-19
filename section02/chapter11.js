// 비동기적
// 자바스크립트는 싱글쓰레드
// 비동기 작업들은 자바스크립트가 엔진이 아닌 Web APIs에서 실행됨

console.log(1);

setTimeout(() => {
  console.log(2);
}, 3000);

console.log(3);
