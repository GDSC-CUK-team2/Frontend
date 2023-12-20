import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getCookie } from "../cookie/Cookie";

import TopNavBar from "../components/common/TopNavBar";
import ResultCard from "../components/search/ResultCard";
import styled from "styled-components";
import cross_curtley from "../assets/image/search/cross_curtley.svg";

import Recommended from "../components/search/Recommended";

interface ResultType {
  id: string;
  name: string;
  rating: string;
  address: string;
  food_type: string;
  view: string;
  review: string;
  x: string;
  y: string;
}

interface Coordinate {
  name: string;
  x: string;
  y: string;
}

export default function Search() {
  const { keyword } = useParams();
  const [result, setResult] = useState<ResultType[]>([]);
  const [category, setCategory] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  useEffect(() => {
    console.log('run');
    async function getInfo() {
      try {
        const response = await axios.get(
          `http://35.216.62.134:8080/api/restaurants?keyword=${keyword}&page=45`
        );
        setResult([...response.data.results]);
        console.log(JSON.stringify(response.data));
        console.log('asdf');
      } catch (error) {
        console.log(error);
      }
    }

    getInfo();
  }, [keyword]);

  function handleFilter(props: string) {
    console.log('a')
    if (category !== props) {
      setCategory(props);
      setSelectedCategory(props);
    } else {
      setCategory("");
      setSelectedCategory("");
    }
    
  }

  const filteredResults = result.filter((e) => {
    if (category === "") {
      return true;
    } else {
      return e.food_type.split(">")[1].trim() === category;
    }
  });
  const coordinates: Coordinate[] = filteredResults.map((e) => ({
    name: e.name,
    x: e.x, // 이 값이 실제로는 어떻게 정의되어 있는지에 따라 수정이 필요할 수 있습니다.
    y: e.y, // 위와 동일하게 수정이 필요할 수 있습니다.
  }));
  // const coordinates: Coordinate[] = [
  //   { name: "Place1", x: "33.5563", y: "126.79581" },
  //   { name: "Place2", x: "33.5564", y: "126.79582" },
  //   // 추가 좌표 데이터...
  // ];
  function check(){
    console.log(coordinates);
  }

  return (
    <>
      <TopNavBar />
      <Container>
        <SearchResults>
          <ResultText>
            <img width={"32px"} height={"32px"} src={cross_curtley} />
            <Keyword>{keyword}</Keyword>
            (으)로 찾아본 결과에요
          </ResultText>
          <SubText>총 {filteredResults.length}개의 장소를 찾았어요</SubText>
          <CategoryContainer>
            {["한식", "중식", "일식", "양식"].map((categoryItem) => (
              <CategoryButton
                key={categoryItem}
                //onClick={() => handleFilter(categoryItem)}
                onClick={check}
                selected={selectedCategory === categoryItem}
              >
                {categoryItem}
              </CategoryButton>
            ))}
          </CategoryContainer>
          <ResultCards>
            {filteredResults.map((e) => (
              <ResultCard key={e.id} data={e} />
            ))}
          </ResultCards>
        </SearchResults>
        <SubInfos>
          {/* <MapBox data = {coordinates}/> */}
          <Recommended />
        </SubInfos>
      </Container>
    </>
  );
}

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const CategoryButton = styled.div<{ selected: boolean }>`
  font-size: 16px;
  background-color: ${(props) => (props.selected ? "#E54444" : "#F1F1F1")};
  color: ${(props) => (props.selected ? "#FFF" : "#000")};
  height: 35px;
  width: 53px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 89px;
`;

const SearchResults = styled.div`
  display: flex;
  width: 732px;
  flex-direction: column;
  margin-left: 400px;
  margin-top: 16px;
`;

const ResultText = styled.div`
  display: flex;
  align-items: center;
  font-size: 32px;
  font-weight: 600;
  color: #4c4c4c;
`;

const Keyword = styled.span`
  margin-left: 16px;
  color: #e54444;
  font-weight: 600;
`;

const SubText = styled.span`
  color: #4c4c4c;
  font-size: 20px;
  font-weight: 400;
  margin-left: 48px;
`;

const ResultCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 732px;
  margin-top: 40px;
`;

const SubInfos = styled.div`
  display: flex;
  flex-direction: column;
`;
