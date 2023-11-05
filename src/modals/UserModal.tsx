import React ,{useState} from "react";
import heart_circle from "../assets/image/heart_circle.svg";
import LoginModal from "./LoginModal";
import { styled , keyframes} from "styled-components";
interface UserSimpleProps {
    onClose: () => void;
  }

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;  

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

  border-radius : 40px 0px 0px 40px;
  
  position: absolute;
  top: 7%;
  right: 11%;

  background-color: #FCFCFC;

  animation: ${slideIn} 0.5s ease-in-out; // 슬라이딩 애니메이션 적용

`

const Top = styled.div`
  position: absolute;
  top: 1%;
  right: 0%;

  width : 386px;
  height : 57px;

  border-radius : 40px 0px 0px 40px;

  background : #E2E2E2;
  color : #4C4C4C;

  display : flex;
  align-itmes : center;

`

const BBox = styled.button`
width : 140px;
height : 40px;

font-size : 16px;

padding : 10px 10px;

margin : auto 0;

border-radius : 40px;

border : 0px;
background : transparent;

cursor : pointer;

&:focus {
    background : #e54545;
  }
`

const SBox = styled.button`
width : 70px;
height : 40px;

padding : 10px 0px;

font-size : 16px;

margin : auto 0;

border : 0px;
background : transparent;
border-radius : 40px;

display : flex;
justify-content : center;

cursor : pointer;

&:focus {
    background : #e54545;
  }


`

const LoginButton = styled.button`
  

  width : 371px;
  height : 60px;

  border : 0px;
  border-radius : 40px;

  color : #fff;
  background : #e55444;

  margin: 720px auto; /* LoginButton을 하단으로 내립니다. */


`

export default function UserModal({onClose} : UserSimpleProps){

    // 모달을 닫기 위한 상태
    const closeModal = (e: React.MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target === e.currentTarget) {
          onClose(); // 배경 클릭 시 모달 닫기
        }
    };

    // 로그인 창을 여는 상태
    const [viewLogin,setViewLogin] = useState<boolean>(false);

    const open = () => {
        setViewLogin(true);
    }

    const close = () =>{
        setViewLogin(false);
    }
    
    return(
        <ModalBackground onClick={closeModal}>
            <Container>
                <Top>
                  <BBox>
                    최근에 본 맛집
                  </BBox>
                  <BBox>
                    나의 별점/리뷰
                  </BBox>
                  <SBox>
                      <span>찜</span>
                      <img src={heart_circle} alt='x' />
                  </SBox>
                </Top>
                
                {/* 로그인 모달창 */}
                {viewLogin && <LoginModal onClose={close} />}
                <LoginButton onClick={open}>로그인 하기</LoginButton>

            </Container>
        </ModalBackground>
    )
}

