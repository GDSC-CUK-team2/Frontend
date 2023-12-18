import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie, setCookie } from "../../../cookie/Cookie";

interface User {
    userId: number;
    email: string;
    nickname: string;
    role: string[];
  }

export default function CheckMyProfile(){
    
    const[userData,setUserData] = useState<User>();
    
    const navigate = useNavigate();

    let token = getCookie('token');

    console.log(getCookie('token'));
    
    useEffect(() => {
        axios
            .get(`http://35.216.62.134:8080/api/user/me`, 
                 {
                headers : {
                    'Authorization' : `Bearer ${token}`
                },
            }
            )
            .then((response) => {
                console.log(response.data.userId);
                setUserData(response.data);
            })
            .catch((error) => {
                console.log('에러:', error);
                console.log('에러:', error.response);
            });
    }, []);

    
   return {CheckMyProfile, userData } ;
   

};