import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie, setCookie } from "../../../cookie/Cookie";
import getProfile from "./CheckProfile";

interface User {
    userId: number;
    email: string;
    nickname: string;
    role: string[];
  }

interface userData{
    nickname : string;
    profileUrl : string;
}

export default function CheckMyProfile(){
    
    const [myData,setMyData] = useState<User>();
    const [data,setData] = useState<userData>();
    const navigate = useNavigate();

    let token = getCookie('token');


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
                setMyData(response.data);
                // console.log(response.data)
                // const {userData } = getProfile(response.data.userId)
                // console.log(userData)
                // setData(userData);
            })
            .catch((error) => {
                console.log('에러:', error);
                console.log('에러:', error.response);
            });
    }, []);

    
   return {CheckMyProfile, myData ,data} ;
   

};