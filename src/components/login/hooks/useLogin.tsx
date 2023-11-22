import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../../cookie/Cookie";

interface LoginData {
    email: string;
    password: string;
  }
export default function useLogin(){
    
    const navigate = useNavigate();

    const login = async (data: LoginData) => {
        try {
          if (data.email.trim() === '' || data.password.trim() === '' ) {
            alert('빈칸을 채워주세요 !'); 
            return;
          }
    
        const response = await axios.post(`http://34.64.153.218:8080/api/auth/login`, data);
        navigate('/');
        console.log(JSON.stringify(data))
        console.log(JSON.stringify(response.data ));

        setCookie("token", `JWT ${response.data.accessToken}`, {
            path: "/",
            sameSite: "strict",
        });

        } 
        catch (error) {
        console.log(data);
        console.log('Error:', error);
          
        }
      };

    
   return {login} ;
   

};