// 5가지 요소 순회 및 탐색메서드
// 1. forEach
// 배열의 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  console.log(idx, item * 2);
});

let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

console.log(doubledArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];

console.log(arr2.includes(3));

// 3. indexof
// 특정 요소의 인덱스(위치)를 찾아내서 반환하는 메서드
// 얕은 비교({name: " 김수인"}이면 못찾음)
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);

console.log(index); // 있으면 1, 없으면 -1 출력

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는
// 특정 요소의 인덱스(위치)를 반환하는 메서드
// 깊은 비교({name: " 김수인"}도 찾을 수 있음)
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => {
  if (item == 2) return true;
});
console.log(findedIndex);

let arr5 = [1, 2, 3];
const findedIndex1 = arr4.findIndex((item) => item == 2);
console.log(findedIndex1);

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let arr6 = [{ name: "김수인" }, { name: "김수정" }];

const finded = arr6.find((item) => item.name === "김수인");
console.log(finded);
