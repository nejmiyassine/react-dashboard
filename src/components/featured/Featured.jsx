// React Progress Bar
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// Styles
import './featured.scss';
import 'react-circular-progressbar/dist/styles.css';
import React from 'react';
// Icons
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

const Featured = () => {
  const percentage = 65;

  return (
    <div className='featured'>
      <div className='top'>
        <h2 className='title'>Total Revenue</h2>
        <MoreVertRoundedIcon fontSize='small' />
      </div>
      <div className='bottom'>
        <div className='featuredChart'>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            strokeWidth={4}
            styles={buildStyles({
              textSize: '16px',
              pathTransitionDuration: 0.5,
              strokeLinecap: 'round',
              trailColor: '#d6d6d6',
              textColor: '#ff8e7f',
              pathColor: `rgba(255, 30, 0, ${percentage / 100})`,
            })}
          />
        </div>
        <p className='title'>Total Sales Made Today</p>
        <p className='amount'>$420</p>
        <p className='desc'>
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className='summary'>
          <div className='item'>
            <div className='itemTitle'>Target</div>
            <div className='itemResult negative'>
              <KeyboardArrowDownRoundedIcon fontSize='small' />
              <div className='resultAmount'>$12.4</div>
            </div>
          </div>
          <div className='item'>
            <div className='itemTitle'>Last Week</div>
            <div className='itemResult positive'>
              <KeyboardArrowUpRoundedIcon fontSize='small' />
              <div className='resultAmount'>$12.4</div>
            </div>
          </div>
          <div className='item'>
            <div className='itemTitle'>Last Month</div>
            <div className='itemResult positive'>
              <KeyboardArrowUpRoundedIcon fontSize='small' />
              <div className='resultAmount'>$12.4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
