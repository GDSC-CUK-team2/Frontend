import styled from "styled-components";

export default function ReviewCard() {
    return (
        <>
        <Container>
            <ProfileBox>
                <ProfileImage />
                <ProfileText>닉네임</ProfileText>
                <ProfileText>시간</ProfileText>
            </ProfileBox>
            <ReviewBox>
                <ReviewText>sdafasfsdafasdfsdafasfsdafasdfsdafasfsdafasdfsdafasfsdafasdfsdafasfsdafasdfsdafasfsdafasdfsdafasfsdafasdfsdafasfsdafasdfsdafasfsdafasdfsdafasfsdafasdfsdafasfsdafasdfsdafasfsdafasdfsdafasfsdafasdfsdafasfsdafasdfsdafasfsdafasdfsdafasfsdafasdfsdafasfsdafasdfsdafasfsdafasdfsdafasfsdafasdf</ReviewText>
                <ImageBox>
                    <ReviewImage></ReviewImage>
                    <ReviewImage></ReviewImage>
                    <ReviewImage></ReviewImage>
                    <ReviewImage></ReviewImage>
                </ImageBox>
            </ReviewBox>
        </Container>
        <Hr/>
        </>
    )
}

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
`
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