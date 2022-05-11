import React from 'react';
// Components
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart';
import TableList from '../../components/table/Table';
// Style
import './single.scss';

const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className='singleContainer'>
        <Navbar />

        <div className='top'>
          <div className='left'>
            <div className='editButton'>Edit</div>
            <h2 className='title'>Information</h2>
            <div className='item'>
              <img
                src='https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                alt='face'
                className='itemImg'
              />
              <div className='details'>
                <div className='itemTitle'>Username</div>
                <div className='detailItem'>
                  <span className='itemKey'>Email:</span>
                  <span className='itemValue'>username@gmail.com</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Phone</span>
                  <span className='itemValue'>+1 112 34 52</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Adress:</span>
                  <span className='itemValue'>
                    Elton St. 234 Graden Yd. NewYork
                  </span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Country:</span>
                  <span className='itemValue'>USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className='right'>
            <Chart aspect={4 / 1} title='User Spending (6 Last Months)' />
          </div>
        </div>
        <div className='bottom'>
          <h2 className='title'>Last Transactions</h2>
          <TableList />
        </div>
      </div>
    </div>
  );
};

export default Single;
