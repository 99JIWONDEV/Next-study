import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { UPDATE_BOARD, 나의그래프큐엘셋팅 } from "./BoardWrite.queries";
import { useRouter } from "next/router";

export default function BoardWrite(props) {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [나의함수] = useMutation(나의그래프큐엘셋팅);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
    router.push(`${result.data.createBoard.number}`);
  };

  const onClickUpdate = async() =>{
    //여기서 수정하기 하자 
    const result = await updateBoard({
      variables:{
        number: Number(router.query.number),
        writer: writer,
        title: title,
        contents: contents
      }
    })
    router.push(`/section09/09-03-boards/${result.data.updateBoard.number}`)
  }

  const onChangeWriter = (e) => {
    setWriter(e.target.value);
  };
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeContents = (e) => {
    setContents(e.target.value);
  };
  return <BoardWriteUI onClickSubmit={onClickSubmit} onClickUpdate={onClickUpdate} onChangeWriter={onChangeWriter} onChangeTitle={onChangeTitle} onChangeContents={onChangeContents} isEdit={props.isEdit} />;
}
