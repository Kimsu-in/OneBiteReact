import Header from "../components/Header";
import Button from "../components/Button";
import Editer from "../components/Editer";

const New = () => {
  return (
    <div>
      <Header
        title={"새 일기 쓰기"}
        leftChild={<Button text={"< 뒤로 가기"} />}
      />
      <Editer />
    </div>
  );
};
export default New;
