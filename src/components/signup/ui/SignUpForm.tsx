import React from "react";
import styled from "styled-components";
import SubmitButton from "../../button/SubmitButton";

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

interface SignUpFormProps {
  formData: {
    email: string;
    password: string;
    nickname: string;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSignUp: () => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({
  formData,
  onInputChange,
  handleSignUp,
}) => (
  <>
    <TitleContainer>
      <BP>회원가입</BP>
      <SP>새로운 계정 정보를 입력해주세요</SP>
    </TitleContainer>

    <Form>
      <InputContainer>
        <Name>
          이메일 <Must>*</Must>
        </Name>

        <Input
          placeholder="이메일를 입력해주세요"
          name="email"
          value={formData.email}
          onChange={onInputChange}
        />
      </InputContainer>
    </Form>

    <Form>
      <InputContainer>
        <Name>
          비밀번호 <Must>*</Must>
        </Name>

        <Input
          placeholder="비밀번호를 입력해주세요"
          name="password"
          type="password"
          value={formData.password}
          onChange={onInputChange}
        />
      </InputContainer>
    </Form>

    <Form>
      <InputContainer>
        <Name>
          닉네임 <Must>*</Must>
        </Name>

        <Input
          placeholder="닉네임를 입력해주세요"
          name="nickname"
          value={formData.nickname}
          onChange={onInputChange}
        />
      </InputContainer>
    </Form>

    <ButtonContainer>
      <SubmitButton onClick={handleSignUp} background="#f1f1f1"></SubmitButton>
    </ButtonContainer>
  </>
);

export default SignUpForm;
