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
  return (
    <div className='sidebar'>
      {/* Logo */}
      <div className='top'>
        <span className='logo'>Let's Code</span>
      </div>

      {/* Horizontal Link */}
      <hr />

      {/* Dashboard Links */}
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <li>
            <DashboardRoundedIcon className='icon' />
            <span>Dashboard</span>
          </li>
          <p className='title'>LISTS</p>
          <li>
            <PersonRoundedIcon className='icon' />
            <span>Users</span>
          </li>
          <li>
            <StoreRoundedIcon className='icon' />
            <span>Products</span>
          </li>
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
        <div className='colorOption'></div>
        <div className='colorOption'></div>
        <div className='colorOption'></div>
      </div>
    </div>
  );
};

export default Sidebar;
