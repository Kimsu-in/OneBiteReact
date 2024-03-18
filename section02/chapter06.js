// 순회
// 배열, 객체에 저장된 여러개의 값에 순서대로 하나씩 접근하는 것을 말함

// 반복문을 이용한 배열, 객체 순회

// 1. 배열 순회
let arr = [1, 2, 3];

// 1.1 배열 인덱스
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 1.2 for of 반복문
for (let item of arr) {
  console.log(item);
}

// 2. 객체 순회
let person = {
  name: "김수인",
  age: 27,
  hobby: "테니스",
};

// 2.1 Object.keys 사용
// 객체에서 key 값들만 뽑아서 새로운 배열로 반환

let keys = Object.keys(person);

for (let i = 0; i < keys.length; i++) {
  console.log(keys[i]);
}

for (let key of keys) {
  console.log(key, person[key]);
}

// 2.2 Object.values
// 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);

for (let value of values) {
  console.log(value);
}

// 2.3 for in
for (let key in person) {
  console.log(key, person[key]);
}

// for of 와 for in 헷갈리면 안됨
// for of 는 배열에만 쓸 수 있음
// for in 은 객체에만 쓸 수 있음
