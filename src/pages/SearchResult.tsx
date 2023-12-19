import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getCookie } from "../cookie/Cookie";

import TopNavBar from "../components/common/TopNavBar";
import ResultCard from "../components/search/ResultCard";
import styled from "styled-components";
import cross_curtley from "../assets/image/search/cross_curtley.svg"
import MapBox from "../components/search/MapBox";
import Recommended from "../components/search/Recommended";

interface ResultType {
  id : string,
  name: string,
  rating: string,
  address: string,
  food_type: string,
  view: string,
  review: string
}

// export default function Search() {
//     const { keyword } = useParams();
//     const [result, setResult] = useState<ResultType[]>([]);
//     useEffect(() => {    
//         async function getInfo() {
//           try {
//             const response = await axios.get(
//               `http://35.216.62.134:8080/api/restaurants?keyword=${keyword}&page=45`,
              
//             );
      
//             setResult([...response.data.results]);
//           } catch (error) {
//             console.log(error);
//           }
//         }
      
//         getInfo();
//       }, [keyword]);

//     return (
//         <>
//             <TopNavBar />
//             <Container>
//                 <SearchResults>
//                     <ResultText>
//                         <img width={'32px'} height={'32px'} src={cross_curtley} />
//                         <Keyword>{keyword}</Keyword>
//                         (으)로 찾아본 결과에요
//                     </ResultText>
//                     <SubText>총 999개의 장소를 찾았어요</SubText>

//                     <ResultCards>
//                         {
//                           result.map((e) => (
//                             <ResultCard data = {e}/>
//                           ))
//                         }
//                     </ResultCards>
//                 </SearchResults>
//                 <SubInfos>
//                     <MapBox/>
//                     <Recommended/>
//                 </SubInfos>
//             </Container>

//         </>
//     )
// }

export default function Search() {
  const { keyword } = useParams();
  const [result, setResult] = useState<ResultType[]>([]);
  

  return (
      <>
          <TopNavBar />
          <Container>
              <SearchResults>
                  <ResultText>
                      <img width={'32px'} height={'32px'} src={cross_curtley} />
                      <Keyword>{keyword}</Keyword>
                      (으)로 찾아본 결과에요
                  </ResultText>
                  <SubText>총 999개의 장소를 찾았어요</SubText>

                  <ResultCards>
                      <ResultCard/>
                      <ResultCard/>
                      <ResultCard/>
                      <ResultCard/>
                  </ResultCards>
              </SearchResults>
              {/* <SubInfos>
                  <MapBox/>
                  <Recommended/>
              </SubInfos> */}
          </Container>

      </>
  )
}

const Container = styled.div`
  display  :flex ;
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
    color: #4C4C4C;
`;

const Keyword = styled.span`
    margin-left: 16px;
    color: #E54444;
    font-weight: 600;
    //font-size: ;
`;

const SubText = styled.span`
    color: #4C4C4C;
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
  flex-direction  :column ;
`;