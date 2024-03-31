import { useMutation, gql } from "@apollo/client";

const CREATE_PRODUCT = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
    #변수의 타입 적는 곳
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      # 실제 전달할 변수 적는 곳
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const onClickSubmit = async () => {
    const result = await createProduct({
      variables: {
        seller: "지원",
        createProductInput: {
          name: "나이키 신발",
          detail: "나이키 에어맥스",
          price: 100000,
        },
      },
    });
    console.log(result);
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}
