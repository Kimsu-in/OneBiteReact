// Date 객체와 날짜

// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자
console.log(date1);

let date2 = new Date("1997-01-07/10:10:10"); // - . /
console.log(date2);

// 2. 타입스탬프
// 특정 시간이 "1997.01.01 00시 00분 00초"(UTC)로부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();
console.log(ts1);

let date3 = new Date(ts1);
console.log(date1, date3);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // 1월:0, 2월:1, 3월:2 로 나옴 (+1)
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(year, month, date, hour, minute, seconds);

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(5); // 6월
date1.setDate(31);
date1.setHours(2);
date1.setMinutes(30);
date1.setSeconds(23);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString());
console.log(date1.toLocaleString());
