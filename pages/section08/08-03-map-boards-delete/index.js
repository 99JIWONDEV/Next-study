import { useQuery, gql, useMutation } from "@apollo/client";
import { Fragment } from "react";
const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int){
    deleteBoard(number: $number){
      message
    }
  }
`

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARD)
  const onClickDelete = (event) => {
    deleteBoard(
      {
        variables: {
          number: Number(event.target.id)
        },
        refetchQueries: [{query: FETCH_BOARDS}]
      }
    )
  }

  console.log(data?.fetchBoards);
  return (
    <>
      {data?.fetchBoards.map((el, index) => (
        // 특별한 이유가 없으면 Fragment를 사용하자 <div />는 1개 더 그려야되서 조금 느려짐
        // 1. 프래그먼트란? <></> , <Fragment></Fragment>
        // 2. 프래그먼트에 key입력하는 방법? <Fragment key={1}></Fragment>
        <div key={el.number}> {/*index는 게시글을 삭제할 때, 다음 게시글이 올라오면서 기존 index와 동일한 값을 갖게 됨. 동일하지 않음*/}
          <span><input type="checkbox" /></span>
          <span style={{margin: "10px"}}>{el.number}</span>
          <span style={{margin: "10px"}}>{el.title}</span>
          <span style={{margin: "10px"}}>{el.writer}</span>
          <span><button id={el.number} onClick={onClickDelete}>삭제</button> {console.log(el.number)}</span>
        </div>
      ))}
    </>
  );
}
