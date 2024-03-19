// async/await
// promise를 좀더 직관적이고 편하게 사용할 수 있도록 도와줌

// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 promise를 반환하도록 변환해주는 키워드

async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "김수인",
        hobby: "테니스",
      });
    }, 1500);
  });
}

console.log(getData()); // promise로 반환

// await
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData() {
  const data = await getData(); // then 메서드를 쓰지 않아도 됨
  console.log(data);
}

printData();
