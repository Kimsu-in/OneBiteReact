// es
import multiply from "./math.js"; // mulitply를 mul등 다른 이름으로 변경 가능
import { add, sub } from "./math.js";

import randomColor from "randomcolor";

// import multiply, { add, sub } from "./math.js"; // mulitply를 mul등 다른 이름으로 변경 가능

// commonjs
// const moduleData = require("./math");
// console.log(moduleData);

// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));

// 구조 분해 할당
// const { add, sub } = require("./math");

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(multiply(1, 2));

const color = randomColor();
console.log(color);
