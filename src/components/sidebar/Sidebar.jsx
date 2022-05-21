import React, { useContext } from 'react';
// React Router Dom
import { Link } from 'react-router-dom';
// Side bar Data
import { sidebarData } from '../../data/SidebarData';
// DarkModeContext
import { DarkModeContext } from '../../context/darkModeContext';
// Icon
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
// Style
import './sidebar.scss';

const Sidebar = ({ sidebar, toggleSidebar }) => {
  const { dispatch } = useContext(DarkModeContext);

  const LightMode = () => dispatch({ type: 'LIGHT' });
  const DarkMode = () => dispatch({ type: 'DARK' });

  return (
    <div className={sidebar ? 'sidebar active' : 'sidebar'}>
      {/* Logo */}
      <div className='top'>
        <CloseRoundedIcon className='icon close' onClick={toggleSidebar} />
        <Link to='/' className='logo'>
          Let's Code
        </Link>
      </div>

      {/* Dashboard Links */}
      <div className='center'>
        <ul>
          {sidebarData.map(({ id, title, path, icon }) => (
            <Link key={id} to={path}>
              <li>
                {icon}
                <span>{title}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {/* Colors */}
      <div className='bottom'>
        <div className='colorOption' onClick={LightMode}></div>
        <div className='colorOption' onClick={DarkMode}></div>
      </div>
    </div>
  );
};

export default Sidebar;
