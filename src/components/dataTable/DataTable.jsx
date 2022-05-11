import React from 'react';
import { Link } from 'react-router-dom';
// MUI Table
import { DataGrid } from '@mui/x-data-grid';
// Users Data
import { userRows, userColumns } from '../../data/datatablesource';
// Icons
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
// Style
import './dataTable.scss';

const DataTable = () => {
  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 120,
      renderCell: () => {
        return (
          <div className='cellAction'>
            <Link to='/users/test'>
              <VisibilityRoundedIcon className='icon viewButton' />
            </Link>
            <DeleteRoundedIcon className='icon deleteButton' />
          </div>
        );
      },
    },
  ];

  return (
    <div className='datatable'>
      <div className='datatableTitle'>
        Add New User
        <Link to='/users/new' className='link'>
          Add new
        </Link>
      </div>
      <DataGrid
        className='datagrid'
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
