// for (초기식; 조건식; 증감식){
//     console.log("반복");
// }

for (let id = 0; id < 10; id++) {
  console.log(id);
}

console.log("----------------");

for (let id = 0; id < 10; id++) {
  console.log(id);

  if (id >= 5) {
    break;
  }
}

console.log("----------------");

for (let id = 0; id < 10; id++) {
  if (id % 2 === 0) {
    continue;
  }
  console.log(id);
}
