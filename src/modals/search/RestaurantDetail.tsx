import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { getCookie } from "../../cookie/Cookie";

import comment from "../../assets/image/search/comment.svg";
import view from "../../assets/image/search/view.svg";
import write from "../../assets/image/search/write_review.svg"
import ReviewCard from "../../components/review/ReviewCard";

interface ModalProps {
    onClose: () => void;
    restaurantId : string;
}
interface ResultType {
    id : string,
    name: string,
    rating: string,
    address: string,
    food_type: string,
    view: string,
    review: string
  }

  interface ReviewType {
    fileNames: [],
    reviewEntity: {
        reviewId: string,
        shopId: string,
        userId: string,
        rating: string,
        comment: string,
        createdDate: string,
        updatedDate: any
    }
  }


const Modal: React.FC<ModalProps> = ({ onClose, restaurantId }) => {
    const [result, setResult] = useState<ResultType>();
    const [reviews, setReviews] = useState<ReviewType[]>([]);
    let token = getCookie('token');
    useEffect(() => {  
        const param = {
            restaurant_id: {restaurantId}
        }  
        async function getInfo() {
          try {
            const response = await axios.get(
              `http://35.216.62.134:8080/api/restaurants/${restaurantId}`,
                {headers:{
                    'restaurant_id': restaurantId
                }}
            );
            setResult(response.data);

            //console.log(JSON.stringify(response))
          } catch (error) {
            console.log(error);
          }
        }

        async function getReview() {
            try {
              const response = await axios.get(
                `http://35.216.62.134:8080/api/restaurants/${restaurantId}/reviews`,
                  {headers:{
                      'restaurant_id': restaurantId
                  }}
              );
              setReviews(response.data);
  
              console.log(JSON.stringify(response.data));
              console.log('success');
            } catch (error) {
              console.log(error);
            }
          }

        getInfo();
       getReview();
      }, []);


      async function test(){
        try{
            const response = await axios.post(
                `http://35.216.62.134:8080/api/restaurants/${restaurantId}/reviews`,
                {
                    'userId': 2,
                    'rating': 'GOOD',
                    'comment': "좋습니다 좋습니다",
                    'image': ''
                },
                  {headers:{
                      'Authorization': 'Bearer eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJzdWIiOiJkYnN0amQwMjIyQGNhdGhvaWxjLmFjLmtyIiwicm9sZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfVVNFUiJ9XSwiaWF0IjoxNzAyOTY4NTA2LCJleHAiOjE3MDM1NzMzMDZ9.R-Y83TBA5QVOEdBT5zbApOaH_evCHbHGdz8ls5XAwoA',
                      "Content-Type": "multipart/form-data"
                  },
                },  
              );
              console.log(JSON.stringify(response.data));
        } catch(error){
            console.log(error);
        }
      }
    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <Container>
                <MainInfo>
                    <MainRight>
                        <TitleBox>
                            <Title fontSize={32}>{result?.name}</Title>
                            <Rating fontSize={32}>{result?.rating}</Rating>
                        </TitleBox>
                        <SmallIconBox>
                            <SmallIcon src={view} alt="x" />
                            <SmallText>{result?.view}</SmallText>
                            <SmallIcon src={comment} alt="x" />
                            <SmallText>{result?.review}</SmallText>
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
                        <SubInfoDetail>{result?.address}</SubInfoDetail>
                        <SubInfoDetail>{result?.food_type.split('>')[1].trim()}</SubInfoDetail>
                    </SubBox>
                </SubInfoBox>
                <Hr />
                <TitleBox>
                    <Title fontSize={24}>리뷰</Title>
                    <Rating fontSize={24}>({result?.review})</Rating>
                </TitleBox>
                <ReviewBox>
                    {
                        reviews.map((e)=>(
                            <ReviewCard/>
                        ))
                    }
                </ReviewBox>
                <CloseButton onClick={test}>닫기</CloseButton>
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
