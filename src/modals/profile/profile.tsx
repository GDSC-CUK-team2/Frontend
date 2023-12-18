import React ,{useState} from "react";
import { styled } from "styled-components";
import user from "../../assets/image/header_user.svg"
import getProfile from "../../components/profile/model/CheckProfile";
import edit from "../../assets/image/edit_icon.svg";
import SubmitButton from "../../components/button/SubmitButton";
import CloseModalButton from "../../components/button/CloseModalButton";
import Alert from "../../components/alert/Alert";

interface ProfileProps {
    onClose: () => void;
  }
interface EditProps {
    width: string;
    height: string;
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
  height: 80vh;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);


  background-color: #FFFFFF;
  border-radius: 15px;

  color : #000;

`

const Nav = styled.div`

color: #9c9c9c;
display: flex;
`
const Left = styled.div`
position : absolute;
left : 20px;
top : 20px;
`
const Right = styled.div`

`
const Image = styled.div`
margin-top: 40px;

.profile{
  width : 160px;
  height : 160px;
  border-radius : 100px;
  background : yellow;
}
p{
  font-size : 24px;
}
`

const Edit = styled.img<EditProps>`
 width: ${(props) => props.width};
  height: ${(props) => props.height};
`
const EmailContainer = styled.div`
width : 405px;

margin : 2vh auto;

`
const PasswordContainer = styled.div`
width : 405px;

margin : 2vh auto;
`
const SnsContainer = styled.div`
display: flex;
justify-content: center;


`
const EditBox = styled.div`
display : flex;
justify-content : flex-end;
p{
  font-size : 15px;
}
`
const Box = styled.div`
display : inline-block;
width : 80px;

text-align : right;



`

const Input = styled.input`
  width : 300px;
  height : 40px;
  background : #f1f1f1;

  border : 0px;

  margin-left: 20px;
`

const ButtonContainer = styled.div`
position : absolute;

top : 70vh;
right : 0px;
`

const Back = styled.button`
width : 75px;
height : 40px;


font-size : 18px;

margin : 10px;

color: #9c9c9c;
border : 0px;
border-radius : 4px;
background-color: #f1f1f1;

&:hover {
    cursor : pointer;
}
`

export default function Profile({onClose} : ProfileProps){

    const profile : any = getProfile();
    console.log(profile)
    return(
        <ModalBackground>
            <Alert />
            <Container>
              <Nav>
                <Left>마이 페이지 {`>`} 프로필 관리

                </Left>
                <Right>   
                <CloseModalButton onClick={onClose} />
   
                </Right>
              </Nav>
                <Image>
                  <img className="profile" src={user} alt='x' />
                  <p>닉네임 <Edit width='20px' height='20px' src={edit} alt='x' /> </p>

                </Image>


                <EmailContainer>
                  <EditBox>
                    <p>로그인 정보 수정 <Edit width='16px' height='16px' src={edit} alt='x' /> </p>
 
                  </EditBox>
                   <Box>
                    <span>이메일</span>
                  </Box>                 
                  <Input />
                </EmailContainer>

                <PasswordContainer>
                  <Box>
                      <span>비밀번호</span>
                  </Box>     
                  <Input />

                </PasswordContainer>

                {/* <SnsContainer>
                  <Box>
                    <span>SNS <br /> </span>
                    <span>로그인 계정 </span>
                  </Box>
                  
                  <Input />
                </SnsContainer> */}
                <ButtonContainer>
                  <Back onClick={onClose}>
                    취소
                  </Back>
                  <SubmitButton onClick={onClose} background="#E54444">
                    확인
                  </SubmitButton>
                </ButtonContainer>
            </Container>
        </ModalBackground>
    )
}