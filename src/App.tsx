import React from 'react';

import Main from './pages/Main';
import {Route,Routes } from 'react-router-dom';
import Search from './pages/SearchResult';

// api테스하는 페이지
import Test from './pages/Test';
import KakaoMap from './pages/Kakao';
function App() {
  return (

    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/search/:keyword' element={<Search />} />

      <Route path='/test' element={<Test />} />
      <Route path='/kakao' element={<KakaoMap />} />
    </Routes>
  );
}

export default App;
