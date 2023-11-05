import styled from "styled-components";

const Container = styled.div`
  display  : flex;
  flex-direction: row;
  width: 285px;
  height: 89px;
  align-items: end;
  margin-left: 21px;
  margin-top: 11px;
`;

const ImageBox = styled.div`
    width: 136px;
    height: 89px;
    background-color: #e5e5e5;
    border-radius: 8px;
`
const Information = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 12px;
`
const Title = styled.div`
    color: #9c9c9c;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 2px;
`

const Detail = styled.div`
    color: #9c9c9c;
    font-size: 16px;
    font-weight: 500;
    //margin-top: 28px;
`
export default function SmallResultCard(){
    return(
        <Container>
            <ImageBox/>
            <Information>
                <Title>상호명</Title>
                <Detail>지역 - 카테고리</Detail>
            </Information>
        </Container>
    )
}