import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

interface ReviewModalProps {
  onClose: () => void;
  onSubmit: (data: FormData) => void;
}

const ReviewModal: React.FC<ReviewModalProps> = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState<FormData>(new FormData());
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      formData.append("image", selectedFile);
      // 이미지 선택 시 표시할 코드 추가
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    formData.set("comment", e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>닫기</CloseButton>
        {/* 이미지 선택용 div */}
        <ImageSelectDiv>
          {/* 이미지가 선택되었을 때 표시할 이미지 */}
          {selectedImage && <SelectedImage src={selectedImage} alt="Selected" />}
          {/* 파일 선택을 위한 input */}
          <FileInput type="file" onChange={handleFileChange} />
        </ImageSelectDiv>
        <Textarea onChange={handleTextChange} placeholder="리뷰를 작성하세요" />
        <SubmitButton onClick={handleSubmit}>리뷰 작성</SubmitButton>
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: end;
  z-index: 1000;
`;

const ModalContent = styled.div`
  width: 400px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  z-index: 1001;
`;

const CloseButton = styled.button`
  margin-bottom: 10px;
`;

const ImageSelectDiv = styled.div`
  position: relative;
  margin-bottom: 10px;
  width: 130px;
  height: 130px;
  background-color: lightgray;
`;

const SelectedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const FileInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

const Textarea = styled.textarea`
  margin-bottom: 10px;
  height: 100px;
`;

const SubmitButton = styled.button`
  background-color: #E54444;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
`;

export default ReviewModal;
