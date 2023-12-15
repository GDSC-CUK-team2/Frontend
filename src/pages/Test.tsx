import axios from "axios";
import React ,{useEffect, useState} from "react";

import { getCookie } from "../cookie/Cookie";

interface DataType{
    "userId": string,
    "email": string,
    "nickname": string,
    "role": string[],
}

export default function Test(){
    
    let token = getCookie('token');

    console.log(getCookie('token'));

    const [data,setData] = useState<DataType[] | null>();

    useEffect(() => {
        axios
            .get(`http://35.216.19.44:8080/api/users/me`, 
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
                setData(response.data.content);
            })
            .catch((error) => {
                console.log('에러:', error.response);
            });
    }, []);
    
    console.log(data);

    return(
        <>
            테스트 페이지
        </>
    )
}