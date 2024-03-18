// 1. 배열의 구조 분해 할당

let arr = [1, 2, 3];

let [one, two, three] = arr;

// let [one, two] = arr; 1, 2까지만 할당
// let [one, two, three, four] = arr; 1 2 3 undefined 뜸
// let [one, two, three, four=4] = arr; 1 2 3 4라고 뜸

// 2. 객체의 구조 분해 할당

let person = {
  name: "김수인",
  age: 27,
  hobby: "테니스",
};

let { name, age, hobby } = person;

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby }) => {
  console.log(name, age, hobby);
};
func(person);
