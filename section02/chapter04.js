// 1. Spread 연산자
// Spread: 흩뿌리다, 펼치다 라는 뜻
// 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];

// let arr2 = [4, 5, 6];
// let arr2 = [4,arr[0], arr[1], arr[2], 5, 6];

let arr2 = [4, ...arr1, 5, 6];

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  ...obj1,
  c: 1,
  d: 2,
};

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}
funcA(...arr1);

// 2. Rest 매개변수
// Rest는 나머지, 나머지 매개변수
function funcB(...rest) {
  // one, two, ...rest 라고 할당할 수 있음
  console.log(rest);
}
funcB(...arr1);
