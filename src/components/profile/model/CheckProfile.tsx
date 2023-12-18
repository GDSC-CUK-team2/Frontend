import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie, setCookie } from "../../../cookie/Cookie";

  
export default function CheckProfile(){
    
    const navigate = useNavigate();

    let token = getCookie('token');

    console.log(getCookie('token'));
    
    useEffect(() => {
        axios
            .get(`http://35.216.62.134:8080/api/users/me`, 
                 {
                headers : {
                    'Authorization' : `Baerer ${token}`
                },
                // params : {
                //     userId : userId
                // }
            }
            )
            .then((response) => {
                console.log(response);
                // setData(response.data.content);
            })
            .catch((error) => {
                console.log('에러:', error.response);
            });
    }, []);

    
   return {CheckProfile } ;
   

};