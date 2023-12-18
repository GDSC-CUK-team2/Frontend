import React from 'react';

import Main from './pages/Main';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Search from './pages/SearchResult';

// api테스하는 페이지
import Test from './pages/Test';
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>

    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/search' element={<Search />} />

      <Route path='/test' element={<Test />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
