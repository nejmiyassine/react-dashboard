import React, { useContext } from 'react';
// Dependecies
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Pages
import Home from './pages/home/Home';
import List from './pages/list/List';
import New from './pages/new/New';
import Single from './pages/single/Single';
import NotFound from './pages/notFound/NotFound';
// Dark Mode Context
import { DarkModeContext } from './context/darkModeContext';
// Data
import { userInputs, productInputs } from './data/formSource';
// Styles
import './style/dark.scss';

const App = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='users'>
              <Route index element={<List />} />
              <Route path=':userId' element={<Single />} />
              <Route
                path='new'
                element={<New inputs={userInputs} title='Add new User' />}
              />
            </Route>
            <Route path='products'>
              <Route index element={<List />} />
              <Route path=':productId' element={<Single />} />
              <Route
                path='new'
                element={<New inputs={productInputs} title='Add new Product' />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
