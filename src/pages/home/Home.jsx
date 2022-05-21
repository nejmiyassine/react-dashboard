import React from 'react';
// Components
import Chart from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured';
import TableList from '../../components/table/Table';
import Widget from '../../components/widget/Widget';
// Style
import './home.scss';

const Home = () => {
  return (
    <section className='home'>
      <div className='container'>
        <div className='widgets'>
          <Widget type='user' />
          <Widget type='order' />
          <Widget type='earning' />
          <Widget type='balance' />
        </div>
        <div className='charts'>
          <Featured />
          <Chart aspect={2 / 1} title='Last 6 months (Revenue)' />
        </div>
        <div className='listContainer'>
          <h2 className='listTitle'>Latest Transactions</h2>
          <TableList />
        </div>
      </div>
    </section>
  );
};

export default Home;
