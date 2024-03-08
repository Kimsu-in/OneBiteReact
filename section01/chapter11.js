// 함수 선언

function greeting() {
  console.log("안녕하세요");
}

greeting();

console.log("------------");

function getArea(width, height) {
  // width, height <- 매개변수
  let area = width * height;

  return area; // 반환값(=결괏값)
  // 반환값을 만나면 종료됨
}

let area1 = getArea(10, 20); // 10, 20 <- 인수
let area2 = getArea(120, 200);

console.log(area1, area2);

// 호이스팅 -> 끌어올리다 라는 뜻
// 선언문을 호출문보다 아래에 두어도 내부적으로 호이스팅되어서 에러없이 실행해줌
