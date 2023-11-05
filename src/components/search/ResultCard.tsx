import styled from "styled-components";
import star from "../../assets/image/search/star.svg";
import comment from "../../assets/image/search/comment.svg";
import view from "../../assets/image/search/view.svg";

const Container = styled.div`
    width: 316px;
    height: 320px;
    display: flex;
    flex-direction: row;
    margin-bottom: 40px;
    margin-right: 92px;
`;

const ImageBox = styled.div`
    width: 205px;
    height: 320px;
    background-color: #E5E5E5;
    border-radius: 8px;
`;

const Details = styled.div`
    display: flex;
    flex: 1;
    padding-left: 21px;
    flex-direction: column;
    justify-content: space-between;
`;

const MainInfoBox = styled.div`
    width: 90px;
    height: 89px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
`;
const SubInfoBox = styled.div`
    width: 90px;
    height: 89px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: end;
    margin-bottom: 5px;
`;


const Rate = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 63px;
    height: 29px;
    font-size: 24px;
    color: #E54444;
    margin-bottom: 8px;
`;

const Title = styled.div`
    //width: 64px;
    height: 29px;
    font-size: 24px;
    font-weight: 500;
    color: #4C4C4C;
`;

const Detail = styled.div`
    display: flex;
    align-items: end;
    justify-content: start;
    font-size: 16px;
    color: #9C9C9C;
    font-weight: 500;
`;

const Icon = styled.img`
    width: 17.6px;
    margin-right: 5.5px;
`;

export default function ResultCard() {
    return (
        <Container>
            <ImageBox />
            <Details>
                <MainInfoBox>
                    <Rate>
                        <img width={'20px'} height={'20px'} src={star} />
                        9.9
                    </Rate>
                    <Title>
                        상호명
                    </Title>
                    <Detail>
                        카테고리
                    </Detail>
                </MainInfoBox>
                <SubInfoBox>
                    <Detail>지역</Detail>
                    <Detail>
                        <Icon src={comment}/>
                        123
                    </Detail>
                    <Detail>
                        <Icon src={view}/>
                        444
                    </Detail>
                </SubInfoBox>
            </Details>
        </Container>
    )
}