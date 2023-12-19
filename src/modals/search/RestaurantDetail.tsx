import React, { useEffect } from "react";
import styled from "styled-components";

import comment from "../../assets/image/search/comment.svg";
import view from "../../assets/image/search/view.svg";
import write from "../../assets/image/search/write_review.svg"
import axios from "axios";
import ReviewCard from "../../components/review/ReviewCard";

interface ModalProps {
    onClose: () => void;
    //restaurantId : string;
}

// const Modal: React.FC<ModalProps> = ({ onClose, restaurantId }) => {

//     useEffect(() => {    
//         async function getInfo() {
//           try {
//             const response = await axios.get(
//               `http://35.216.62.134:8080/api/restaurants/{${restaurantId}}`,

//             );

//             console.log(JSON.stringify(response))
//           } catch (error) {
//             console.log(error);
//           }
//         }

//         getInfo();
//       }, []);

//     return (
//         <ModalOverlay onClick={onClose}>
//             <ModalContent onClick={(e) => e.stopPropagation()}>
//                 <MainInfo>
//                     <RightSide>
//                     <TitleBox>
//                         <Title>{restaurantId}</Title>
//                         <Rating>9.9</Rating>
//                     </TitleBox>
//                     <SmallIconBox>
//                         <SmallIcon src={view} alt="x"/>
//                         <SmallText>123</SmallText> 
//                         <SmallIcon src={comment} alt="x"/> 
//                         <SmallText>12345</SmallText>
//                     </SmallIconBox>
//                     </RightSide>
//                     <BigIcon src={write} alt="x"/>
//                 </MainInfo>
//                 <Hr/>
//                 <CloseButton onClick={onClose}>닫기</CloseButton>
//             </ModalContent>
//         </ModalOverlay>
//     );
// };

const Modal: React.FC<ModalProps> = ({ onClose }) => {

    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <Container>
                <MainInfo>
                    <MainRight>
                        <TitleBox>
                            <Title fontSize={32}>제목</Title>
                            <Rating fontSize={32}>9.9</Rating>
                        </TitleBox>
                        <SmallIconBox>
                            <SmallIcon src={view} alt="x" />
                            <SmallText>123</SmallText>
                            <SmallIcon src={comment} alt="x" />
                            <SmallText>12345</SmallText>
                        </SmallIconBox>
                    </MainRight>
                    <BigIcon src={write} alt="x" />
                </MainInfo>
                <Hr />
                <SubInfoBox>
                    <SubBox>
                        <SubInfoTitle>주소</SubInfoTitle>
                        <SubInfoTitle>음식종류</SubInfoTitle>
                    </SubBox>
                    <SubBox>
                        <SubInfoDetail>asdf</SubInfoDetail>
                        <SubInfoDetail>asdf</SubInfoDetail>
                    </SubBox>
                </SubInfoBox>
                <Hr />
                <TitleBox>
                    <Title fontSize={24}>리뷰</Title>
                    <Rating fontSize={24}>(9)</Rating>
                </TitleBox>
                <ReviewBox>
                    <ReviewCard/>
                    <ReviewCard/>
                </ReviewBox>
                <CloseButton onClick={onClose}>닫기</CloseButton>
                </Container>
            </ModalContent>
        </ModalOverlay>
    );
};

const ReviewBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 60px;
`
const Container = styled.div`
    margin-top: 50px;
`
const SubInfoBox = styled.div`
    width: 887px;
    height: 73px;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    margin-bottom: 40px;
`
const SubBox = styled.div`
    margin-right: 56px;
`
const SubInfoTitle = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: #9C9C9C;
    margin-top: 15px;
`
const SubInfoDetail = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: #9C9C9C;
    margin-top: 15px;
`
const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: end;
`;

const ModalContent = styled.div`
    width: 1920px;
    height: calc(100vh - 100px);
    background: white;
    padding: 20px;
    border-radius: 140px 140px 0 0;
    overflow-y: auto;
    padding-left: 290px;

    display: flex;
    flex-direction: column;
    align-items: start;
`;

const MainInfo = styled.div`
    width: 887px;
    height: 73px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
`
const MainRight = styled.div`
    
`
const TitleBox = styled.div`
    display: flex;
    flex-direction: row;
    
    
`
const Title = styled.div<{ fontSize: number }>`
    font-size: ${(props) => `${props.fontSize}px`};
    height: auto;
    margin-right: 15px;
`;
const Rating = styled.div<{ fontSize: number }>`
    font-size: ${(props) => `${props.fontSize}px`};
    height: auto;
    color : #E54444;
`
const SmallIconBox = styled.div`
    display: flex;
    flex-direction: row;
    height: auto;
    margin-top: 16px;

    
`
const SmallText = styled.div`
    font-size: 16px;
    color: #9C9C9C;
    margin-left: 5px;
    margin-right: 15px;
`

const SmallIcon = styled.img`
    width: 16px;
    height: 16px;
`

const BigIcon = styled.img`
    width: 57px;
    margin-top: 50px;
`

const Hr = styled.hr`
    color: #F1F1F1;
    margin-left: 0;
    //margin-top: 30px;
    margin-bottom: 30px;
    width: 887px;
`


const CloseButton = styled.button`
    margin-top: 10px;
`;

export default Modal;
