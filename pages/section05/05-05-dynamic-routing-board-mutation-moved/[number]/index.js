import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
const FETCH_BOARD = gql`
  query fetchBoard($number: Int){
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

export default function DynamicRoutingMovedPage() {
  const router = useRouter();
  console.log(router.query.number)
  const { data } = useQuery(FETCH_BOARD, {
    variables: {number: Number(router.query.number)}
  });

  // console.log(data);
  return (
    <>
      <div>{router.query.number}번 페이지 이동이 완료되었습니다.</div>
      {/* 옵셔널 체이닝 */}
      {/* <div>작성자: {data && data.fetchBoard.writer}</div> */}
      <div>작성자: {data?.fetchBoard?.writer}</div>
      <div>제목: {data?.fetchBoard?.title}</div>
      <div>내용: {data?.fetchBoard?.contents}</div>
    </>
  );
}
