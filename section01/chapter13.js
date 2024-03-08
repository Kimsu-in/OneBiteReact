// 1. 콜백함수
function main(value) {
  console.log(1);
  console.log(2);
  value(); // 원하는 타이밍에 호출 가능
  console.log("end");
}

function sub() {
  console.log("I am sub");
}

main(sub);

// 위 아래가 같은 코드(아래는 화살표)

function main2(value) {
  value();
}

main2(() => {
  console.log("I am sub");
});

console.log("-------------");

// 2. 콜백함수의 활용
// 중복 코드를 줄일 수 있다.
function repeat(count, callback) {
  for (let id = 1; id <= count; id++) {
    callback(id);
  }
}

repeat(5, (id) => {
  console.log(id);
});

repeat(5, (id) => {
  console.log(id * 2);
});

repeat(5, (id) => {
  console.log(id * 3);
});
