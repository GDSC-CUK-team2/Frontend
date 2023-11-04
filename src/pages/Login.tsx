import React, { useState} from "react";
import Header from "../components/common/Header";


import { styled, css } from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Login(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        
    });

    const { email, password } = formData;

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const login = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent the default form submission behavior.


        // 공백 여부 검사
        if (email.trim() === '' || password.trim() === '' ) {
            alert('빈칸을 모두 채워주세요.'); // 공백인 경우 알람 창을 띄}움.
            return;
        }

        const data = {
            email: email,
            password: password,
          
        };
        const config = {};
        axios
            .post(`http://34.64.153.218:8080/api/auth/login`, data, config)
            .then((response) => {
                console.log(JSON.stringify(response.data.accessToken ));
            })
            .catch((error) => {
                console.log(error)
                console.log(data)
                
            });

    };
    return(

        <>
        <input 
            placeholder='이메일를 입력해주세요'
            name="email"
            value={email}
            onChange={onInputChange} />
        <input 
            placeholder='이메일를 입력해주세요'
            name="password"
            value={password}
            onChange={onInputChange} />

                <button onClick={login}>
                    제출하기
                </button>
        </>
    )
}