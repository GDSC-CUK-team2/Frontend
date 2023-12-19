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
        console.log(document.cookie);

        const params = {
            keyword: '강남',
            page: 0
          };
      
        async function getInfo() {
          try {
            const result = await axios.get(
              'http://35.216.62.134:8080/api/restaurants?keyword=한식&page=0',              {params}
            );
      
            console.log(JSON.stringify(result.data));
          } catch (error) {
            console.log(error);
          }
        }
      
        getInfo();
      }, []);
    
    console.log(data);

    return(
        <>
            테스트 페이지
        </>
    )
}