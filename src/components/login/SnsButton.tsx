import React from "react"
import styled from "styled-components"

interface SnsButtonProps {
    background : string,
    text : string,

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

span{
    font-size : 12px;
    margin : auto;
    color : ${(props) => (props.background === '#FCE74F' ? `#000` : '#fff')};
}
`

export default function SnsButton({background , text} : SnsButtonProps){
    return(
        <Container background={background}>
            <span>{text} 계속하기</span>
        </Container>
    )
}