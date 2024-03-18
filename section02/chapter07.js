// 6가지의 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
// 길이도 반환
let arr1 = [1, 2, 3];
arr1.push(4, 5);

const newLenght = arr1.push(4, 5, 6, 7);

console.log(arr1);
console.log(newLenght);

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고 반환
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();

console.log(poppedItem);
console.log(arr2);

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거하고 반환
let arr3 = [1, 2, 3];

const shiftedItem = arr3.shift();
console.log(shiftedItem, arr3);

// 4.unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
// 길이도 반환
let arr4 = [1, 2, 3];
const newLenght2 = arr4.unshift(0);
console.log(newLenght2, arr4);

// 5. slice
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5); // 자르기 시작, 끝+1

let slice2 = arr5.slice(2);
let slice3 = arr5.slice(-3);

console.log(sliced);
console.log(arr5); // 잘라도 원본은 그래도

// 6. concat
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환

let arr6 = [1, 2];
let arr7 = [4, 5];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr);
