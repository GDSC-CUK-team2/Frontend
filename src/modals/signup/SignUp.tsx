import React, { useState} from "react";
import Header from "../../components/common/Header";

import SubmitButton from "../../components/button/SubmitButton";

import { styled, css } from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router";
import useSignUp from "../../components/signup/hooks/useSignUp";
import CloseModalButton from "../../components/button/CloseModalButton";

interface SignUpModalProps {
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
    height: 750px;

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

const Must = styled.span`
    color : #E54444;
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

export default function SignUpModal({onClose} : SignUpModalProps) {
    const navigate = useNavigate();
    
    const {signUp} = useSignUp();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        nickname: "",
    });

    const { email, password, nickname } = formData;

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    
    const handleSignUp = () =>{
        signUp({ email, password,nickname }); 
        window.location.replace("/")

    }
    // 모달을 닫기 위한 상태
    const closeModal = (e: React.MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target === e.currentTarget) {
            onClose(); // 배경 클릭 시 모달 닫기
        }
    };

    return (

    <ModalBackground>
        <Container>
            <CloseModalButton onClick={onClose} />

                <TitleContainer>
                    <BP>회원가입</BP>
                    <SP>새로운 계정 정보를 입력해주세요</SP>
                    
                </TitleContainer>
            {/* 아이디 */}
            <Form>

            <InputContainer >

                    <Name>이메일 <Must>*</Must></Name> 

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
                <Name>비밀번호 <Must>*</Must></Name> 


                    <Input 
                        placeholder='비밀번호를 입력해주세요'
                        name="password"
                        type="password"
                        value={password}
                        onChange={onInputChange} />

            </InputContainer>
            </Form>
            <Form>

            <InputContainer >

                <Name>닉네임 <Must>*</Must></Name> 
        

                    <Input
                        placeholder='닉네임를 입력해주세요'
                        name="nickname"
                        value={nickname}
                        onChange={onInputChange} />

            </InputContainer>
            </Form>


            <ButtonContainer>

                <SubmitButton onClick={handleSignUp}>
                    
                </SubmitButton>

            </ButtonContainer>
        </Container>
    </ModalBackground>
    )
}


