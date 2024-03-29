import { useState } from "react";

function useInput() {
  const [input, getInput] = useState("");

  const onChange = (e) => {
    getInput(e.target.value);
  };
  return [input, onChange];
}

export default useInput;
