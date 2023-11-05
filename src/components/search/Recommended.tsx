import styled from "styled-components";
import red_line from "../../assets/image/search/red_line.svg";
import SmallResultCard from "./SmallResultCard";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 394px;
    height: 851px;
    border: 2px solid #E5E5E5;
    border-radius: 20px;
    margin-top: 24px;
`;

const Title = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 29px;
    margin-left: 31px;
    margin-bottom: 13px;
`;
const TitleText = styled.div`
    font-size: 24px;
    color: #4C4C4C;
    font-weight: 600;
    margin-left: 16px;
`
export default function Recommended() {
    return(
        <Container>
            <Title>
                <img height={'32px'} src={red_line} />
                <TitleText>함께 보면 좋은 장소</TitleText>
            </Title>
            <SmallResultCard/>
            <SmallResultCard/>
            <SmallResultCard/>
            <SmallResultCard/>
            <SmallResultCard/>
            <SmallResultCard/>
            
        </Container>
    )
}