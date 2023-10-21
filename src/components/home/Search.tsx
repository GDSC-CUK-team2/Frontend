import React from 'react';
import styled from 'styled-components';

import search from '../../assets/image/search.svg';
import cutlery from '../../assets/image/cutlery.svg';

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 600px;
  height: 50px;
  border: 2px solid #E54444;
  border-radius: 12px;
  background-color: white;
`;
const CutleryIcon = styled.div`
  width: 30px;
  height : 15px;
  font-size: 24px;
  padding: 10px;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */

  border-right : 1px solid #E0E0E0;
`;
const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 10px;
  font-size: 16px;
  border-radius: 12px;
  ::placeholder{
      color : #CDCDCD;
  }
`;

const SearchIcon = styled.div`
  width: 30px;
  height : 30px;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
  background: #E54444;
  border-radius: 50px 10px 10px 50px;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
`;

export default function Search() {
  return (
    <SearchContainer>
      <CutleryIcon>  
      <img src={cutlery} alt='x' />
      </CutleryIcon>
      <SearchInput placeholder="검색어를 입력하세요." />
      <SearchIcon>
        <img src={search} alt='x' />
      </SearchIcon>
    </SearchContainer>
  );
}
