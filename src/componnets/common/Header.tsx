import React from 'react';
import styled from 'styled-components';

import logo from '../../assets/image/header_logo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';

const HeaderContainer = styled.div`
  width: 77vw;
  height: 65px;
  color: #fff;
  
  text-align: center; // 글자 세로 정렬

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1; 

  margin : 0 auto; // 가운데 정렬
  display: flex;
  justify-content: space-between; /* 간격 */
  
  `;

const LeftContainer = styled.div`
  display: flex;
  align-items: center; /* 이미지 및 아이콘을 수직 중앙에 정렬 */
  padding : 10px;
`
const Logo = styled.img`
  height: 24px; /* 이미지 높이 조정 */
`
const Title = styled.span`
  margin-left: 15px; /* 이미지와 텍스트 간격 조정 */
`
const RightContainer = styled.div`
  display: flex;
  align-items: center; /* 아이콘을 수직 중앙에 정렬 */
`
const MyPage = styled.span`
  margin-right: 15px; /* 아이콘과 텍스트 간격 조정 */
`
const UserIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px; /* 아이콘 크기 조정 */
`

export default function Header() {
  return (
    <HeaderContainer>
      <LeftContainer>
        <Logo src={logo} alt='x' />
        <Title>MATNA</Title>
      </LeftContainer>
      <RightContainer>
        <MyPage>마이페이지</MyPage>
        <UserIcon>
          <FontAwesomeIcon icon={faUser} />
        </UserIcon>
      </RightContainer>
    </HeaderContainer>
  );
}
