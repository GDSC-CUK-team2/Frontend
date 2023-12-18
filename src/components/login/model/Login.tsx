import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../../cookie/Cookie";

interface LoginData {
    email: string;
    password: string;
  }

interface LoginResult {
    status: number;
  }
  
export default function Login(){
    
    const navigate = useNavigate();

    const login = async (data: LoginData) : Promise<LoginResult> => {
        try {
          if (data.email.trim() === '' || data.password.trim() === '' ) {
            alert('빈칸을 채워주세요 !');
            return {status : 9999};
          }
    
        const response = await axios.post(`http://35.216.62.134:8080/api/auth/login`, data);
        console.log((response.data ));
        console.log(response.status)
        setCookie("token", `${response.data.accessToken}`, {
            path: "/",
            sameSite: "strict",
        });
        return {status : response.status};
        } 
        catch (error) {
        console.log(data);
        console.log('Error:', error);
        return { status: 500 };

          
        }
      };

    
   return {login } ;
   

};