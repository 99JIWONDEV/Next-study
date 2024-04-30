import { RedInput } from "./BoardWrite.styles";
import { BlueInput } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <>
      작성자: <RedInput type="text" onChange={props.onChangeWriter} />
      제목: <BlueInput type="text" onChange={props.onChangeTitle} />
      내용: <BlueInput type="text" onChange={props.onChangeContents} />
      <button onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}>{props.isEdit ? "수정하기" : "등록하기"}</button>
    </>
  );
}
