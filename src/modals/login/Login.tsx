import React, { useState} from "react";


import { styled, css } from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router";
import { setCookie } from "../../cookie/Cookie";

import SubmitButton from "../../components/button/SubmitButton";
import getLogin from "../../components/login/model/Login";
import CloseModalButton from "../../components/button/CloseModalButton";

interface LoginProps {
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
    width: 700px;
    height: 500px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);


    background-color: #FFFFFF;
    border-radius: 15px;
`
const TitleContainer = styled.div`
margin : 0px 0px 50px 0px;
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
const InputContainer = styled.div`
width : 505px;

margin: 20px auto;
text-align : center;

display : flex;
justify-content: space-between; /* 간격 */
color : #000;
`

const Name = styled.span`
    padding : 15px;
`

const Form = styled.form`

`

const Input = styled.input`
width : 317px;
height : 42px;

border : 0px;
background : #f1f1f1;


&::placeholder{
    font-family: tway, sans-serif, Arial;
	}

//인풋 창 포커스
&:focus {
    //클릭 했을때 기본(?) 선 안나오게.
    outline: none !important;

    border: 2px solid blue;
    }
`

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 20px;
`


export default function Login({onClose} : LoginProps) {

    const {login} = getLogin();
    
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { email, password } = formData;

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    
    const handleLogin = async () => {
        const loginResult = await login({ email, password });
        console.log(loginResult)
        if (loginResult.status === 200) {
          // 로그인 성공 시 모달 닫기
          window.location.replace("/")

          
        }
        // 로그인 상태에 따른 처리를 더 추가할 수 있습니다.
      };



    return (

    <ModalBackground>
        <Container>
            <CloseModalButton onClick={onClose} />
            <TitleContainer>
                <BP>로그인</BP>
                <SP>MATNA 계정을 정보를 입력해주세요</SP>
                
            </TitleContainer>
            {/* 아이디 */}
            <Form>

            <InputContainer >

                    <Name>이메일 </Name> 

                    <Input 
                        placeholder='이메일를 입력해주세요'
                        name="email"
                        value={email}
                        
                        onChange={onInputChange} />

            </InputContainer>
            </Form>

            {/* 비밀번호 */}
            <Form>

            <InputContainer >
                <Name>비밀번호 </Name> 
                    <Input 
                        placeholder='비밀번호를 입력해주세요'
                        name="password"
                        value={password}
                        type='password'
                        onChange={onInputChange} />

            </InputContainer>
            </Form>
            <ButtonContainer>

                <SubmitButton onClick={handleLogin}>
                </SubmitButton>

            </ButtonContainer>
        </Container>
    </ModalBackground>
    )
}


