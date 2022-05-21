import React from 'react';
// Components
import DataTable from '../../components/dataTable/DataTable';
// Style
import './list.scss';

const List = () => {
  return (
    <div className='list'>
      <div className='container listContainer'>
        <DataTable />
      </div>
    </div>
  );
};

export default List;
