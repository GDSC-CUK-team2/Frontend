import React from "react";
import { styled } from "styled-components";

import hot from "../../assets/image/hot.svg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
width : 70vw;

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
display : flex;
`
const Item = styled.div`

width : 220px;
height : 250px;

margin : 0px 24px;
`

const ItemImg = styled.div`
/* 사진이 없어서 일단은 배경색으로 구현 */
background : #E5E5E5;
width : auto;
height : 180px;

border-radius : 8px;
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
                <Item>
                    <ItemImg>

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

                    </ItemImg>

                    <ItemInfo>
                        <Left>식당이름</Left>
                        <Right>(0) 9.9  <FontAwesomeIcon icon={faStar} /> </Right>
                    </ItemInfo>

                    <ItemAddress>
                        주소
                    </ItemAddress>

                </Item> 
                </ItemContainer>

            </Container>
        </>

    )
}