// 모든 페이지의 공통 설정들을 해주는 파일
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export default function App({ Component }) {

  // GraphQl 세팅
  const client = new ApolloClient({
    uri: "http://practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache() // 컴퓨터의 메모리에 백엔드에서 받아온 데이터 임시로 저장
  })

  return (
    <ApolloProvider client={client}>
      <Component />
    </ApolloProvider>
  )
}


