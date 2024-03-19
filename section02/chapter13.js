// Promise 객체
// 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체
// Promise는 비동기 작업을 감싸는 객체

// promise의 3가지 상태
// 대기(Pending)-> 성공(Fulfilled) / 실패(Rejected)

const promise = new Promise((resolve, reject) => {
  // 비동기 작업을 실행하는 함수
  // executor

  setTimeout(() => {
    console.log("안녕");
    reject("왜 실패했는지..");
  }, 2000);
});

setTimeout(() => {
  console.log(promise);
}, 3000);

// 이용
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const num = 10;

    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("num이 숫자가 아닙니다");
    }
  }, 2000);
});

// then 메서드
// -> 그 후에
// 비동기 작업이 성공할때 호출

promise2.then((value) => {
  console.log(value);
});

// 비동기 작업이 실패할때 호출
promise2.catch((error) => {
  console.log(error);
});

// 합칠 수도 있음(promise 체이닝)
promise2
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

function add10(num) {
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다");
      }
    }, 2000);
  });
  return promise3;
}

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
