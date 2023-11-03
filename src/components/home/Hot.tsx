import React from "react";
import { styled } from "styled-components";

import hot from "../../assets/image/hot.svg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import heart from '../../assets/image/heart.svg';

const Container = styled.div`
width : 1400px;


//1280px 이하면
@media (max-width : 1400px){
    width: 700px;

}
`

const Inst = styled.div`

span{
    display : flex;
    align-items : center;
    color : #fff;

    font-size : 24px;
    font-family : Pretendard Variable;

    padding : 10px;
}
img {
    margin-left : 10px;
}

`
const ItemContainer = styled.div`

`

const Div = styled.div`
    display : inline-block;

    @media (max-width : 1400px){
    display : flex;
    justify-content : center;

}

`

const Item = styled.div`

display : inline-block;
width : 250px;
height : 270px;

margin : 0px 15px;
//1400px 이하면

@media (max-width : 1400px){
    width : 200px;
    margin : 0px 10px;

}

`

const ItemImg = styled.div`
/* 사진이 없어서 일단은 배경색으로 구현 */
background : #E5E5E5;
width : auto;
height : 180px;

border-radius : 8px;
position: relative;
`
const Heart = styled.img`
position : absolute;
bottom : 10px;
right : 10px;
`

const ItemInfo = styled.div`
display : flex;
justify-content : space-between;
padding : 5px 10px;
`
const Left = styled.div`
color : #E54444;
`
const Right = styled.div`
color : #9C9C9C;
`
const ItemAddress = styled.div`
padding : 5px 10px;

color : #9C9C9C;

`

export default function Hot(){

    return(
        <>
            <Container>
                <Inst>
                    <span>
                        요즘 인기있는 맛집이에요 <img src={hot} alt='x' />

                    </span>
                </Inst>
                <ItemContainer>
                <Div>
                <Item>
                    <ItemImg>
                        <Heart src={heart} alt='x' />
                    </ItemImg>

                    <ItemInfo>
                        <Left>식당이름</Left>
                        <Right>(0) 9.9  <FontAwesomeIcon icon={faStar} /> </Right>
                    </ItemInfo>

                    <ItemAddress>
                        주소
                    </ItemAddress>

                </Item>
                <Item>
                    <ItemImg>
                    <Heart src={heart} alt='x' />

                    </ItemImg>

                    <ItemInfo>
                        <Left>식당이름</Left>
                        <Right>(0) 9.9  <FontAwesomeIcon icon={faStar} /> </Right>
                    </ItemInfo>

                    <ItemAddress>
                        주소
                    </ItemAddress>

                </Item>
                
                <Item>
                    <ItemImg>
                    <Heart src={heart} alt='x' />

                    </ItemImg>

                    <ItemInfo>
                        <Left>식당이름</Left>
                        <Right>(0) 9.9  <FontAwesomeIcon icon={faStar} /> </Right>
                    </ItemInfo>

                    <ItemAddress>
                        주소
                    </ItemAddress>

                </Item>
                </Div>

                <Div>

                <Item>
                    <ItemImg>
                    <Heart src={heart} alt='x' />

                    </ItemImg>

                    <ItemInfo>
                        <Left>식당이름</Left>
                        <Right>(0) 9.9  <FontAwesomeIcon icon={faStar} /> </Right>
                    </ItemInfo>

                    <ItemAddress>
                        주소
                    </ItemAddress>

                </Item>
                <Item>
                    <ItemImg>
                    <Heart src={heart} alt='x' />

                    </ItemImg>

                    <ItemInfo>
                        <Left>식당이름</Left>
                        <Right>(0) 9.9  <FontAwesomeIcon icon={faStar} /> </Right>
                    </ItemInfo>

                    <ItemAddress>
                        주소
                    </ItemAddress>

                </Item> 
                </Div>
                </ItemContainer>

            </Container>
        </>

    )
}