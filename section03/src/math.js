// math 모듈
// es

export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

// math 모듈을 대표하는 기본값
export default function multiply(a, b) {
  return a * b;
}

// commonjs
// module.exports = {
//   add,
//   sub,
// };
