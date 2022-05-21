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

export const sidebarData = [
  {
    id: 1,
    title: 'Dashboard',
    path: '/',
    icon: <DashboardRoundedIcon className='icon' />,
  },
  {
    id: 2,
    title: 'Users',
    path: '/users',
    icon: <PersonRoundedIcon className='icon' />,
  },
  {
    id: 3,
    title: 'Products',
    path: '/products',
    icon: <StoreRoundedIcon className='icon' />,
  },
  {
    id: 4,
    title: 'Orders',
    path: '/',
    icon: <ShoppingBagRoundedIcon className='icon' />,
  },
  {
    id: 5,
    title: 'Delivery',
    path: '/',
    icon: <DeliveryDiningRoundedIcon className='icon' />,
  },
  {
    id: 6,
    title: 'Stats',
    path: '/',
    icon: <BarChartRoundedIcon className='icon' />,
  },
  {
    id: 7,
    title: 'Notifications',
    path: '/',
    icon: <NotificationsNoneRoundedIcon className='icon' />,
  },
  {
    id: 8,
    title: 'System Health',
    path: '/',
    icon: <SettingsSystemDaydreamRoundedIcon className='icon' />,
  },
  {
    id: 9,
    title: 'Logs',
    path: '/',
    icon: <PsychologyRoundedIcon className='icon' />,
  },
  {
    id: 10,
    title: 'Settings',
    path: '/',
    icon: <SettingsApplicationsRoundedIcon className='icon' />,
  },
  {
    id: 11,
    title: 'Profile',
    path: '/',
    icon: <AccountCircleRoundedIcon className='icon' />,
  },
  {
    id: 12,
    title: 'Logout',
    path: '/',
    icon: <LogoutRoundedIcon className='icon' />,
  },
];
