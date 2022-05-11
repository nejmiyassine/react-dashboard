import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// DarkModeContext
import { DarkModeContext } from '../../context/darkModeContext';
// Style
import './sidebar.scss';
// Icons
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import DeliveryDiningRoundedIcon from '@mui/icons-material/DeliveryDiningRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import SettingsSystemDaydreamRoundedIcon from '@mui/icons-material/SettingsSystemDaydreamRounded';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';
import SettingsApplicationsRoundedIcon from '@mui/icons-material/SettingsApplicationsRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  const LightMode = () => dispatch({ type: 'LIGHT' });
  const DarkMode = () => dispatch({ type: 'DARK' });

  return (
    <div className='sidebar'>
      {/* Logo */}
      <div className='top'>
        <Link to='/' className='logo'>
          Let's Code
        </Link>
      </div>

      {/* Horizontal Link */}
      <hr />

      {/* Dashboard Links */}
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <Link to='/'>
            <li>
              <DashboardRoundedIcon className='icon' />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className='title'>LISTS</p>
          <Link to='/users'>
            <li>
              <PersonRoundedIcon className='icon' />
              <span>Users</span>
            </li>
          </Link>
          <Link to='/products'>
            <li>
              <StoreRoundedIcon className='icon' />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <ShoppingBagRoundedIcon className='icon' />
            <span>Orders</span>
          </li>
          <li>
            <DeliveryDiningRoundedIcon className='icon' />
            <span>Delivery</span>
          </li>
          <p className='title'>USEFUL</p>
          <li>
            <BarChartRoundedIcon className='icon' />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneRoundedIcon className='icon' />
            <span>Notifications</span>
          </li>
          <p className='title'>SETTINGS</p>
          <li>
            <SettingsSystemDaydreamRoundedIcon className='icon' />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyRoundedIcon className='icon' />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsRoundedIcon className='icon' />
            <span>Settings</span>
          </li>
          <p className='title'>USERS</p>
          <li>
            <AccountCircleRoundedIcon className='icon' />
            <span>Profile</span>
          </li>
          <li>
            <LogoutRoundedIcon className='icon' />
            <span>Logout</span>
          </li>
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
