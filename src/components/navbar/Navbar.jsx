import React, { useContext } from 'react';
// DarkModeContext
import { DarkModeContext } from '../../context/darkModeContext';
// Icons
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
// Style
import './navbar.scss';

const Navbar = ({ toggleSidebar }) => {
  const { dispatch } = useContext(DarkModeContext);

  const ToggleMode = () => dispatch({ type: 'TOGGLE' });

  return (
    <div className='navbar container'>
      <div className='wrapper'>
        <div className='search'>
          <input type='text' placeholder='Search' />
          <SearchRoundedIcon />
        </div>
        <div className='items'>
          <div className='item'>
            <MenuRoundedIcon className='icon' onClick={toggleSidebar} />
          </div>
          <div className='item'>
            <DarkModeRoundedIcon className='icon' onClick={ToggleMode} />
          </div>
          <div className='item'>
            <NotificationsNoneRoundedIcon className='icon' />
            <div className='counter'>1</div>
          </div>
          <div className='item'>
            <ChatRoundedIcon className='icon' />
            <div className='counter'>2</div>
          </div>
          <div className='item'>
            <img
              src='https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
              alt=''
              className='avatar'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
