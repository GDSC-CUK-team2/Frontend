import React ,{useState} from "react";
import { styled } from "styled-components";
import SnsButton from "../../components/login/ui/SnsButton";

import matna from '../../assets/image/login/matna.svg';
import facebook from '../../assets/image/login/facebook.svg';
import kakao from '../../assets/image/login/kakao.svg';
import apple from '../../assets/image/login/apple.svg';
import SignUp from "../signup/SignUp";
import Login from './Login'
import CloseModalButton from "../../components/button/CloseModalButton";
import SignUpModal from "../../components/signup/controller/SignUpModal";

interface UserSimpleProps {
    onClose: () => void;
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
margin : 00px 0px;
`
const BP = styled.p`
font-weight : 800;
font-size : 32px;

color : #000;

`
const SP =styled.p`
font-size : 16px;

color : #000;

`

const ButtonContainer = styled.div`

`
const SignUpContainer = styled.div`

margin : 0px auto 30px;

button{
  background : transparent;
  border: none; /* 모든 border 제거 */
  border-bottom: 0.1px solid #646464; /* 아래쪽 border 추가 */}

  width : 97px;
  height : 14px;

  font-size : 12px;
`


export default function LoginChoiceModal({onClose} : UserSimpleProps){

      // 회원가입 창을 여는 상태
      const [viewSignUp,setViewSignUp] = useState<boolean>(false);
  
      const open = () => {

          setViewSignUp(true);
      }
  
      const close = () =>{
          setViewSignUp(false);
      }

      // 맛나 로그인 창을 여는 상태
      const [viewLogin,setViewLogin] = useState<boolean>(false);
  
      const openLogin = () => {
          setViewLogin(true);
          console.log(viewLogin)
      }
  
      const closeLogin = () =>{
          setViewLogin(false);
      }


    return(
        <ModalBackground >
          
            <Container>
              <CloseModalButton onClick={onClose} />
              {viewSignUp && <SignUpModal onClose={close}/>}
              {viewLogin && <Login onClose={closeLogin} />}
                <TitleContainer>
                    <BP>로그인하기</BP>
                    <SP>로그인 하면 탐색기록을</SP>
                    <SP>저장할 수 있어요</SP>
                </TitleContainer>

                <ButtonContainer>
                  <SnsButton onClick={openLogin} background={'#e54545'} text={'Matna 계정으로'} logo={matna}/>
                    <SignUpContainer>
                      <button onClick={open} >회원가입 하기 </button>

                    </SignUpContainer>
                    <SnsButton background={'#4253B8'} text={'페이스북으로'} logo={facebook} />
                    <SnsButton background={'#FCE74F'} text={'카카오톡으로'} logo={kakao} />
                    <SnsButton background={'#000000'} text={'Apple 로'} logo={apple} />

                </ButtonContainer>


                
            </Container>
        </ModalBackground>
    )
}