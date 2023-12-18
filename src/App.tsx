import React from 'react';

import Main from './pages/Main';
import {Route,Routes } from 'react-router-dom';
import Search from './pages/SearchResult';

// api테스하는 페이지
import Test from './pages/Test';
function App() {
  return (

    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/search' element={<Search />} />

      <Route path='/test' element={<Test />} />
    </Routes>
  );
}

export default App;
