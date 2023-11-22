import React from 'react';

import Main from './pages/Main';
import { Route,Routes } from 'react-router-dom';
import Search from './pages/SearchResult';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/search' element={<Search />} />


    </Routes>
  );
}

export default App;
