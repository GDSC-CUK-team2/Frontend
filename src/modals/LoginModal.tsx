import React ,{useState} from "react";
import { styled } from "styled-components";
import SnsButton from "../components/login/SnsButton";

interface UserSimpleProps {
    onClose: () => void;
  }

export default function LoginModal({onClose} : UserSimpleProps){

    // 모달을 닫기 위한 상태
    const closeModal = (e: React.MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target === e.currentTarget) {
          onClose(); // 배경 클릭 시 모달 닫기
        }
    };

    return(
        <ModalBackground onClick={closeModal}>
            <Container>
                <TitleContainer>
                    <BP>로그인하기</BP>
                    <SP>로그인 하면 탐색기록을</SP>
                    <SP>저장할 수 있어요</SP>
                </TitleContainer>

                <ButtonContainer>
                    <SnsButton background={'#4253B8'} text={'페이스북'} />
                    <SnsButton background={'#FCE74F'} text={'카카오톡'} />
                    <SnsButton background={'#000000'} text={'Apple'} />
                </ButtonContainer>
            </Container>
        </ModalBackground>
    )
}
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;
const Container = styled.div`
  width: 400px;
  height: 500px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);


  background-color: #FFFFFF;
  border-radius: 15px;
`
const TitleContainer = styled.div`
margin-top : 100px;
`
const BP = styled.p`
font-size : 32px;

color : #000;
`
const SP =styled.p`
font-size : 16px;

color : #000;

`

const ButtonContainer = styled.div`

`