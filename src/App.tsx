import React from 'react';

import Main from './pages/Main';
import { Route,Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/login' element={<Login />} />

      <Route path='/signup' element={<SignUp />} />

    </Routes>
  );
}

export default App;
