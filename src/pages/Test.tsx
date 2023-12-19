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

    const response = axios.post(
      `http://35.216.62.134:8080/api/restaurants/2038057904/reviews`,
      {
          'userId': '2',
          'rating': 'GOOD',
          'comment': "좋습니다 좋습니다",
          'image': ''
      },
        {headers:{
            'Authorization': token
        },
      },  
    );

    const h = async () =>{
      await axios.post(
        `http://35.216.62.134:8080/api/restaurants/2038057904/reviews`,
        {
            'userId': 2,
            'rating': 'GOOD',
            'comment': "좋습니다 좋습니다",
            'image': ''
        },
          {headers:{
              'Authorization': token
          },
        },  
      );
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