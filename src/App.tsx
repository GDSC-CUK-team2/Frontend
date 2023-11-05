import React from 'react';

import Main from './pages/Main';
import { Route,Routes } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/login' element={<Login />} />


    </Routes>
  );
}

export default App;
