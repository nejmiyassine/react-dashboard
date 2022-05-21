import React, { useContext, useState } from 'react';
// Dependecies
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Pages
import Home from './pages/home/Home';
import List from './pages/list/List';
import New from './pages/new/New';
import Single from './pages/single/Single';
import NotFound from './pages/notFound/NotFound';
// Components
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
// Dark Mode Context
import { DarkModeContext } from './context/darkModeContext';
// Data
import { userInputs, productInputs } from './data/formSource';
// Styles
import './style/dark.scss';
import './style/global.scss';

const App = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => setSidebar(!sidebar);

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Sidebar sidebar={sidebar} toggleSidebar={toggleSidebar} />
        <Navbar toggleSidebar={toggleSidebar} />

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
