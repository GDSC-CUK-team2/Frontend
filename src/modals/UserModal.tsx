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

  
  position: absolute;
  top: 7%;
  right: 11%;

  background-color: #FCFCFC;
  border-radius: 8px 0px 0px 8px;

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

const BBox = styled.div`
width : 137px;
height : 22px;

padding : 17.5px 10px;

font-size : 16px;


`

const SBox = styled.div`
width : 54px;
height : 22px;

padding : 14px 0px;

font-size : 16px;
`
const SBoxContent = styled.div`
  display: flex;
  align-items: center;
`

const LoginButton = styled.button`
  position: absolute;
  top: 90%;
  right: 5%;

  width : 371px;
  height : 60px;

  border : 0px;
  border-radius : 40px;

  color : #fff;
  background : #e55444;

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
                    <SBoxContent>
                      찜 <img src={heart_circle} alt='x' />
                    </SBoxContent>
                  </SBox>
                </Top>
                
                {/* 로그인 모달창 */}
                {viewLogin && <LoginModal onClose={close} />}
                <LoginButton onClick={open}>로그인 하기</LoginButton>

            </Container>
        </ModalBackground>
    )
}

