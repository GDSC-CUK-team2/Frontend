import React ,{useState} from "react";
import heart_circle from "../assets/image/heart_circle.svg";
import LoginChoiceModal from "./login/LoginChoiceModal";
import { styled , keyframes} from "styled-components";
import SRestItem from "../components/list/SRestItem";
import Profile from "./profile/Profile";

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
  width: 25vw;
  height: 93vh;

  border-radius : 40px 0px 0px 40px;
  
  position: absolute;
  top: 6vh;
  right: 0%;

  background-color: #FCFCFC;

  animation: ${slideIn} 0.5s ease-in-out; 

`

const Top = styled.div`
  position: absolute;
  top: 3%;
  right: -1%;

  width : 25vw;
  height : 6vh;

  border-radius : 40px 0px 0px 40px;

  background : #E2E2E2;
  color : #4C4C4C;

  display : flex;
  align-items : center;

`

const BBox = styled.button`
width : 10vw;
height : 6vh;

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
width : 5vw;
height : 6vh;

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
const Restaurant = styled.div`
  position: absolute;
  top: 12vh;

  width : 100%;
  height : 65vh;

  background : #FCFCFC;

  border-bottom : 1px solid #e2e2e2;
`

const ProfileContainer = styled.div`
  position: absolute;
  top: 80vh;
  right : 1%;
`
const ProfileButton = styled.div`
color : #4C4C4C;
`

const LoginContainer = styled.div`
  position: absolute;
  top: 83vh;
  left : 4%;

`

const LoginButton = styled.button`

  width : 371px;
  height : 60px;

  border : 2.4px #e54444 solid;
  border-radius : 40px;

  color : #e55444;

  background : #fff;

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
    
        // 프로필 창을 여는 상태
        const [viewProfile,setViewProfile] = useState<boolean>(false);
    
        const openProfile = () => {
            setViewProfile(true);
    
        }
    
        const closeProfile = () =>{
            setViewProfile(false);
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
                
                <Restaurant>
                  <SRestItem />
                </Restaurant>

                <ProfileContainer>
                  <ProfileButton onClick={openProfile}>
                    내 프로필 관리 {`>`}
                  </ProfileButton>
                </ProfileContainer>
                {/* 로그인 모달창 */}
                <LoginContainer>
                <LoginButton onClick={open}>로그인 하기</LoginButton>
                </LoginContainer>
                {viewLogin && <LoginChoiceModal onClose={close} />}
                {viewProfile && <Profile onClose={closeProfile} /> }

            </Container>
        </ModalBackground>

    )
}

