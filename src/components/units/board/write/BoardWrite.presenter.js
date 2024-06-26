import { RedInput } from "./BoardWrite.styles";
import { BlueInput } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <>
      작성자: <RedInput type="text" onChange={props.bbb} />
      제목: <BlueInput type="text" onChange={props.ccc} />
      내용: <BlueInput type="text" onChange={props.ddd} />
      <button onClick={props.aaa}>GRAPHQL-API 요청하기</button>
    </>
  );
}
