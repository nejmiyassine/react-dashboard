import React from 'react';
// Dependecies
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Pages
import Home from './pages/home/Home';
import List from './pages/list/List';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='users' element={<List />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
