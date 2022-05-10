import React from 'react';
// Style
import './widget.scss';
// Icons
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';

const Widget = ({ type }) => {
  let data;

  // Temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case 'user':
      data = {
        title: 'USERS',
        isMoney: false,
        link: 'See all user',
        icon: (
          <PersonOutlineRoundedIcon
            className='icon'
            style={{ backgroundColor: 'rgba(255, 100, 0, 0.5)' }}
          />
        ),
      };
      break;
    case 'order':
      data = {
        title: 'ORDERS',
        isMoney: false,
        link: 'View all orders',
        icon: (
          <ShoppingCartRoundedIcon
            className='icon'
            style={{ backgroundColor: 'rgba(0, 255, 115, 0.5)' }}
          />
        ),
      };
      break;
    case 'earning':
      data = {
        title: 'EARNINGS',
        isMoney: true,
        link: 'View net earnings',
        icon: (
          <AttachMoneyRoundedIcon
            className='icon'
            style={{ backgroundColor: 'rgba(255, 30, 0, 0.5)' }}
          />
        ),
      };
      break;
    case 'balance':
      data = {
        title: 'BALANCE',
        isMoney: true,
        link: 'See details',
        icon: (
          <AccountBalanceWalletRoundedIcon
            className='icon'
            style={{ backgroundColor: 'rgba(234, 0, 255, 0.5)' }}
          />
        ),
      };
      break;

    default:
      break;
  }
  return (
    <div className='widget'>
      <div className='left'>
        <span className='title'>{data.title}</span>
        <span className='counter'>
          {data.isMoney && '$'} {amount}
        </span>
        <span className='link'>{data.link}</span>
      </div>
      <div className='right'>
        <div className='percentage positive'>
          <KeyboardArrowUpRoundedIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
