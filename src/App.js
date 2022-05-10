import React from 'react';
// Dependecies
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Pages
import Home from './pages/home/Home';
import About from './pages/about/About';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
