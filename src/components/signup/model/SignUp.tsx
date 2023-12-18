import axios, { AxiosError } from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../../cookie/Cookie";

interface SignUpData {
    email: string;
    password: string;
    nickname: string;
}

export default function SignUp() {
    const navigate = useNavigate();

    const signUp = async (data: SignUpData) => {
        try {
            if (data.email.trim() === '' || data.password.trim() === '' || data.nickname.trim() === '') {
                alert('빈칸을 채워주세요 !');
                return;
            }

            const response = await axios.post(`http://35.216.62.134:8080/api/auth/signup`, data);
            console.log("Successful response:", response.data);
            console.log("Request data:", JSON.stringify(data));
            alert('회원 가입 성공');
            navigate('/');

        } catch (error) {

            if (axios.isAxiosError(error)) {
                
                const axiosError = error as AxiosError;
                console.error('Axios error code:', axiosError.response?.data);
                if(axiosError.response?.data === '409'){
                  alert('존재하는 이메일 입니다.');
                }
            }
        }
    };

    return { signUp };
};