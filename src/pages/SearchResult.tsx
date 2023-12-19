import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getCookie } from "../cookie/Cookie";

import TopNavBar from "../components/common/TopNavBar";
import ResultCard from "../components/search/ResultCard";
import styled from "styled-components";
import cross_curtley from "../assets/image/search/cross_curtley.svg";
import MapBox from "../components/search/MapBox";
import Recommended from "../components/search/Recommended";

interface ResultType {
  id: string;
  name: string;
  rating: string;
  address: string;
  food_type: string;
  view: string;
  review: string;
}

export default function Search() {
  const { keyword } = useParams();
  const [result, setResult] = useState<ResultType[]>([]);
  const [category, setCategory] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  useEffect(() => {
    async function getInfo() {
      try {
        const response = await axios.get(
          `http://35.216.62.134:8080/api/restaurants?keyword=${keyword}&page=45`
        );
        console.log(response)
        setResult([...response.data.results]);
      } catch (error) {
        console.log(error);
      }
    }

    getInfo();
  }, [keyword]);

  function handleFilter(props: string) {
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
                onClick={() => handleFilter(categoryItem)}
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
          <MapBox />
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
