import "./App.css";
import Register from "./components/Register";
import HookExam from "./components/HookExam";

// 리렌더링 되는 이유
// state가 변할 때, props가 변할 때, 부모 컴포넌트가 리렌더링될 때

// APP component
function App() {
  return (
    <>
      <HookExam />
    </>
  );
}

export default App;
