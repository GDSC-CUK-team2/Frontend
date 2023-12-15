import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../../cookie/Cookie";

interface SignUpData {
    email : string;
    password : string;
    nickname : string;
  }
export default function SignUp(){
    
    const navigate = useNavigate();

    const signUp = async (data: SignUpData) => {
        try {
          if (data.email.trim() === '' || data.password.trim() === '' || data.nickname.trim() === '') {
            alert('빈칸을 채워주세요 !'); 
            return;
          }
    
        const response = await axios.post(`http://35.216.19.44:8080/api/auth/signup`, data);
        console.log(JSON.stringify(data))
        console.log(`Response : ${data}`);
        alert('회원 가입 성공');
        navigate('/');

        } 
        catch (error) {
            console.log(error)
            console.log(data)
            
          
        }
      };
   return {signUp} ;
   

};