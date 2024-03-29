// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

// React Hooks
// 클래스 컴포넌트의 기능을 함수 컴포넌트에서도 이용할 수 있도록
// 함수 컴포넌트 내부에서만 호출 가능
// 조건문, 반복문 내부에서는 호출 불가
// 이름 앞에 use가 붙음
// 나만의 hook 만들 수 있음

// useRef
// Reference 객체를 생성
// 생성한 reference 객체는 컴포넌트 내부의 변수로써 일반적인 값 저장
// 어떤 경우에도 리렌더링을 유발하지 않음

// useState
// State를 생성
// 컴포넌트 내부의 변수로 활용 가능
// 값이 변경되면 컴포넌트 리렌더링

import { useState, useRef } from "react";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });
  const countRef = useRef(0);
  const inputRef = useRef();

  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);
    setInput({
      ...input, // 그대로 가져옴, 관련 없는 값은 그대로 유지
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 DOM 요소 포커스
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder="이름"
        />
      </div>
      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>
      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
