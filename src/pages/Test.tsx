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

    
    const h = async () =>{
      
    }

    return(
        <>
            테스트 페이지
            <button onClick={h}>
              포스트
            </button>
            
        </>
    )
}