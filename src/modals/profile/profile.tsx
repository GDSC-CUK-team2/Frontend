import React ,{useState} from "react";
import { styled } from "styled-components";
import user from "../../assets/image/header_user.svg"
import edit from "../../assets/image/edit_icon.svg";
interface ProfileProps {
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
  width: 1000px;
  height: 800px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);


  background-color: #FFFFFF;
  border-radius: 15px;

  color : #000;

  display : flex;
  flex-direction : column;
  justify-content : start;

`
const Image = styled.div`

img {
  width : 160px;
  height : 160px;
  border-radius : 100px;
  background : yellow;
}
`
const EmailContainer = styled.div`
margin-bottom : 20px;
span{
  margin-right : 34px;
}
`
const PasswordContainer = styled.div`
margin-bottom : 20px;
span{
  margin-right : 20px;
}
`
const SnsContainer = styled.div`

`

const Box = styled.div`
display : inline-block;
width : 80px;

text-align : right;

margin-right : 0px;

`

const Input = styled.input`
  width : 300px;
  height : 40px;
  background : #f1f1f1;

  border : 0px;
`
export default function Profile({onClose} : ProfileProps){
    return(
        <ModalBackground>
            <Container>
                <Image>
                  <img src={user} alt='x' />
                  <p>닉네임  </p>
                  {/* <img src={edit} alt='x' /> */}
                </Image>

                <EmailContainer>
                  <span>이메일</span>
                  <Input />
                </EmailContainer>

                <PasswordContainer>
                  <span>비밀번호</span>
                  <Input />

                </PasswordContainer>

                <SnsContainer>
                  <Box>
                    <span>SNS <br /> </span>
                    <span>로그인 계정 </span>
                  </Box>
                  
                  <Input />
                </SnsContainer>
                
            </Container>
        </ModalBackground>
    )
}