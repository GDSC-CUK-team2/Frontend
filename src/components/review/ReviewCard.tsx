import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { getCookie, setCookie } from "../../cookie/Cookie";

interface ReviewProps{
    data: any;
}

interface User {
    nickname : string,
    profileUrl : string,
  }


const ReviewCard: React.FC<ReviewProps> = ({ data }) =>{
    const[userData,setUserData] = useState<User>();

    useEffect(() => {
        let token = getCookie('token');
        let userId = data.reviewEntity.userId;
        axios
            .get(`http://35.216.62.134:8080/api/user/${userId}/profile`, 
                 {
                headers : {
                    'Authorization' : `Bearer ${token}`
                },
            }
            )
            .then((response) => {
                console.log(response.data.userId);
                setUserData(response.data);
            })
            .catch((error) => {
                console.log('에러:', error);
                console.log('에러:', error.response);
            });
    }, []);
    let reviewData = data.reviewEntity;
    
    return (
        <>
        <Container>
            <ProfileBox>
                <ProfileImage>
                <img src={userData?.profileUrl} alt="프로필 이미지" />
                </ProfileImage>
                <ProfileText>{userData?.nickname}</ProfileText>
                <ProfileText>{reviewData.createdDate.substr(0,10)}</ProfileText>
            </ProfileBox>
            <ReviewBox>
                <ReviewText>{reviewData.comment}</ReviewText>
                <ImageBox>
            
                </ImageBox>
            </ReviewBox>
        </Container>
        <Hr/>
        </>
    )
}
export default ReviewCard

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 24px;
`
const ProfileBox = styled.div`
    width: 92px;
    height: 109px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 32px;
`
const ProfileImage = styled.div`
  width: 72px;
  height: 72px;
  background-color: #E5E5E5;
  border-radius: 50%;
  overflow: hidden;  // 이미지가 넘치는 경우를 대비해 추가

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;  // 이미지 비율 유지 및 가득 채우기
  }
`;
const ProfileText = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: #9C9C9C;
`
const ReviewBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 628px;
`
const ReviewText = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: #9C9C9C;
    width: 628px;
    height: auto;
    word-break: break-word;
`
const ImageBox = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 16px;
`
const ReviewImage = styled.div`
    width: 133px;
    height: 133px;
    background-color: #9C9C9C;
    margin-right: 8px;
`
const Hr = styled.hr`
    color: #F1F1F1;
    margin-left: 0;
    //margin-top: 30px;
    margin-bottom: 30px;
    width: 862px;
    opacity: 80%;
`