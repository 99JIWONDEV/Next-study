import { RedInput } from "./BoardWrite.styles";
import { BlueInput } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <>
      작성자: <RedInput type="text" onChange={props.onChangeWriter} defaultValue= {props.data?.fetchBoard.writer}/>
      제목: <BlueInput type="text" onChange={props.onChangeTitle} defaultValue= {props.data?.fetchBoard.title} />
      내용: <BlueInput type="text" onChange={props.onChangeContents} defaultValue= {props.data?.fetchBoard.contents} />
      <button onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}>{props.isEdit ? "수정하기" : "등록하기"}</button>
    </>
  );
}
