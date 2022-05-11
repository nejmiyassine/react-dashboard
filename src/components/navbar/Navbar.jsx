import React, { useContext } from 'react';
// DarkModeContext
import { DarkModeContext } from '../../context/darkModeContext';
// Icons
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import FullscreenExitRoundedIcon from '@mui/icons-material/FullscreenExitRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import ListRoundedIcon from '@mui/icons-material/ListRounded';
// Style
import './navbar.scss';

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const ToggleMode = () => dispatch({ type: 'TOGGLE' });

  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type='text' placeholder='Search' />
          <SearchRoundedIcon />
        </div>
        <div className='items'>
          <div className='item'>
            <LanguageRoundedIcon className='icon' />
            English
          </div>
          <div className='item'>
            <DarkModeRoundedIcon className='icon' onClick={ToggleMode} />
          </div>
          <div className='item'>
            <FullscreenExitRoundedIcon className='icon' />
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
            <ListRoundedIcon className='icon' />
          </div>
          <div className='item'>
            <img
              src='https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
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
