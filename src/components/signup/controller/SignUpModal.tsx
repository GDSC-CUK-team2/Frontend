import React, { useState } from "react";
import SignUpForm from "../ui/SignUpForm";
import CloseModalButton from "../../button/CloseModalButton";
import { useNavigate } from "react-router-dom";
import getSignUp from "../model/SignUp";
import styled from "styled-components";

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
    height: 80vh;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);


    background-color: #FFFFFF;
    border-radius: 15px;
`
const SignUpModal: React.FC<SignUpModalProps> = ({ onClose }) => {
  const navigate = useNavigate();

  const { signUp } = getSignUp();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    nickname: "",
  });

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignUp = () => {
    signUp({
      email: formData.email,
      password: formData.password,
      nickname: formData.nickname,
    });
  };

  // 모달을 닫기 위한 상태
  const closeModal = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target === e.currentTarget) {
      onClose(); // 배경 클릭 시 모달 닫기
    }
  };

  return (
    <ModalBackground onClick={closeModal}>
      <Container>
        <CloseModalButton onClick={onClose} />
        <SignUpForm
          formData={formData}
          onInputChange={onInputChange}
          handleSignUp={handleSignUp}
        />
      </Container>
    </ModalBackground>
  );
};

export default SignUpModal;
