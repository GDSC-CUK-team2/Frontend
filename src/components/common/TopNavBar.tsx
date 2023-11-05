import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom"; // useNavigate로 변경
import logo from "../../assets/image/topbar/white_logo_with_text.svg";
import curtley from "../../assets/image/topbar/curtley.svg";
import search_icon from "../../assets/image/topbar/search_icon.svg";
import mypage from "../../assets/image/topbar/mypage_button.svg";

const TopBar = styled.div`
  position: fixed;
  width: 100vw;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #E54444;
`;

const Container = styled.div`
  width: 1490px;
  height: 65px;
  background-color: #E54444;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 168px;
  height: 37px;
  margin-right: 247px;
  cursor: pointer; // 로고를 클릭 가능하도록 설정
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 680px;
  height: 46px;
  border-radius: 12px;
  background-color: white;
  flex-direction: row;
`;

const CutleryIcon = styled.img`
  width: 36.6px;
  height: 26.14px;
  margin-left: 23px;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding-left: 18.4px;
  font-size: 13px;
  ::placeholder {
    color: #CDCDCD;
  }
`;

const SearchButton = styled.div`
  width: 62px;
  height: 46px;
  cursor: pointer;
  padding-left: 27px;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
`;

const MyPageButton = styled.img`
  width: 145px;
  height: 35px;
  margin-left: 237px;
`;

export default function TopNavBar() {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    if (searchText) {
      navigate(`/search/${searchText}`);
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }

  const handleSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  }

  return (
    <TopBar>
      <Container>
        <Link to="/"> 
          <Logo src={logo} />
        </Link>
        <SearchContainer>
          <CutleryIcon src={curtley} />
          <SearchInput
            placeholder="지역이나 음식, 또는 식당을 입력해주세요"
            value={searchText}
            onChange={handleSearchTextChange}
            onKeyPress={handleKeyPress} 
          />
          <SearchButton onClick={handleSearch}> {/* SearchButton 클릭 시 호출 */}
            <img width={'15.69px'} height={'15.69px'} src={search_icon} />
          </SearchButton>
        </SearchContainer>
        <MyPageButton src={mypage} />
      </Container>
    </TopBar>
  );
}
