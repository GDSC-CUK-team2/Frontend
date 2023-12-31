import React, { useEffect, useState } from "react"
import styled from "styled-components"
import line from '../../../assets/image/login/line.svg';

interface SnsButtonProps {
    background : string,
    text : string,
    logo : string,
    onClick? : () => void,
}

const Container = styled.div<{background : string}>`
width : 240px;
height : 50px;
color : #fff;
background: ${(props) => (props.background ? `${props.background}` : '#000')};

border-radius : 100px;

display : flex;
text-align : center;

margin : 15px auto;

cursor : pointer;
span{
    font-size : 12px;
    padding : 17px 0px;
    color : ${(props) => (props.background === '#FCE74F' ? `#000` : '#fff')};
}
`
const Logo = styled.img`
    width : 26px;
    height : 19px;
    padding: 15px 0px 0px 20px;
`
const Line = styled.img`
padding: 15px 10px;
margin : 0px;
`

export default function SnsButton({background , text, logo, onClick} : SnsButtonProps){


    return(
        <Container background={background} onClick={onClick}>
                <Logo src={logo} alt='x' />
                <Line src={line} alt='x' /> 
                <span>{text} 계속하기</span>
        </Container>
    )
}