import React, { useState} from "react";


import { styled, css } from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router";
import { setCookie } from "../../cookie/Cookie";

import SubmitButton from "../../components/button/SubmitButton";

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
    const navigate = useNavigate();
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

    const Login = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent the default form submission behavior.


        // 공백 여부 검사
        if (email.trim() === '' || password.trim() === '' ) {
            alert({ html: '빈칸을 모두 채워주세요.' }); // 공백인 경우 알람 창을 띄}움.
            return;
        }

        const data = {
            email: email,
            password: password,
        };
        const config = {};
        axios
            .post(`http://34.64.153.218:8080/api/auth/login`, data, config)
            .then((response) => {
                console.log(JSON.stringify(data))
                console.log(JSON.stringify(response.data ));

                setCookie("token", `JWT ${response.data.accessToken}`, {
                    path: "/",
                    sameSite: "strict",
                });
                
                // window.location.replace("/")
                
            })
            .catch((error) => {
                console.log(error)
                
            });

    };
    const handleLogin = () =>{
        alert('asd');
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
                    확인
                </SubmitButton>

            </ButtonContainer>
        </Container>
    </ModalBackground>
    )
}


