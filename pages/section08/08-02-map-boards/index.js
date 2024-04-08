import { useQuery, gql } from "@apollo/client";
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

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARDS);

  console.log(data?.fetchBoards);
  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div>
          <span><input type="checkbox" /></span>
          <span style={{margin: "10px"}}>{el.number}</span>
          <span>{el.title}</span>
          <span style={{margin: "10px"}}>{el.writer}</span>
        </div>
      ))}
      {/* <div>1번 페이지 이동이 완료되었습니다.</div> */}
      {/* 옵셔널 체이닝 */}
      {/* <div>작성자: {data && data.fetchBoard.writer}</div> */}
      {/* <div>작성자: {data?.fetchBoard.writer}</div>
      <div>제목: {data?.fetchBoard.title}</div>
      <div>내용: {data ? data.fetchBoard.contents : "로딩중입니다"}</div> */}
    </>
  );
}
