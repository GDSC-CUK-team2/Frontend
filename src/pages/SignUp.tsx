import React, { useState} from "react";
import Header from "../components/common/Header";


import { styled, css } from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router";

export default function SignUp() {
    const navigate = useNavigate();
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

    const SignUp = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent the default form submission behavior.


        // 공백 여부 검사
        if (email.trim() === '' || password.trim() === '' || nickname.trim() === '') {
            alert({ html: '빈칸을 모두 채워주세요.' }); // 공백인 경우 알람 창을 띄}움.
            return;
        }

        const data = {
            email: email,
            password: password,
            nickname: nickname,
        };
        const config = {};
        axios
            .post(`http://localhost:8000/api/auth/signup`, data, config)
            .then((response) => {
                console.log(`Response : ${response}`);
                console.log(`Response : ${data}`);
                alert('회원 가입 성공');
                navigate('/');
            })
            .catch((error) => {
                console.log(error)
                
                
            });

    };

    return (


        <Container>
            <Header />

            {/* 아이디 */}
            <InputContainer >

                <Form>

                    <Div>
                        <P>이메일</P>
                    </Div>

                    <Input 
                        placeholder='이메일를 입력해주세요'
                        name="email"
                        value={email}
                        onChange={onInputChange} />

                </Form>
            </InputContainer>

            {/* 비밀번호 */}
            <InputContainer >
                <Form>
                    <Div>
                        <P>비밀번호</P>
                    </Div>

                    <Input 
                        placeholder='비밀번호를 입력해주세요'
                        name="password"
                        value={password}
                        onChange={onInputChange} />

                </Form>
            </InputContainer>

            <InputContainer >

                <Form>

                    <Div>
                        <P>닉네임</P>
                    </Div>

                    <Input
                        placeholder='닉네임를 입력해주세요'
                        name="nickname"
                        value={nickname}
                        onChange={onInputChange} />

                </Form>
            </InputContainer>

            <ButtonContainer>

                <SubmitButton onClick={SignUp}>
                    제출하기
                </SubmitButton>

            </ButtonContainer>
        </Container>

    )
}


const Container = styled.div`
width : 550px;
height : 550px;

font-family: arial;
font-size: 24px;

margin: 0 auto;
padding : 10px;

border : 2px solid #e2e2e2;

position : relative;
top:5vh;

display : flex;
flex-direction : column;
justify-content: space-around;
`

const InputContainer = styled.div`

margin: 0 auto;
text-align : center;

`

const Div = styled.div`
margin:0px;
border : 0px;

`

const P = styled.p`
font-size : 12px;
text-align : left;

/* 상 오 하 왼 */
margin : 0px 0px 0px 0px;

color : #212221;

font-family: tway, sans-serif, Arial;
font-weight : bold;

`

const Form = styled.form`

`

const Input = styled.input`
width : 300px;
height : 30px;

margin : 10px;

border : 2px solid #e2e2e2;
padding : 0px;

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
margin: 0 auto;
text-align : center;
`

const SubmitButton = styled.button`
//기본 크기가 input > button
width : 200px;
height : 35px;

font-size : 12px;

margin : 10px;
padding : 5px;

background-color: #ffffff;
border : 2px solid #033bfa;
border-radius : 5px;
color : #033bfa;

font-family: tway, sans-serif, Arial;

&:hover {

    background-color: #033bfa;
    border : 2px solid #ffffff;
    color : #ffffff;

    cursor : pointer;
    }
`