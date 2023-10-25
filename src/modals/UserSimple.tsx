import React ,{useState} from "react";
import { styled } from "styled-components";

interface UserSimpleProps {
    onClose: () => void;
  }

export default function UserSimple({onClose} : UserSimpleProps){
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
  height: 800px;

  
  position: absolute;
  top: 7%;
  right: 11%;

  background-color: #FCFCFC;
  border-radius: 8px 0px 0px 8px;
`
