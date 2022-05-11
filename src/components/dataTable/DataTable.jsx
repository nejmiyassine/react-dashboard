import React from 'react';
// MUI Table
import { DataGrid } from '@mui/x-data-grid';
// Users Data
import { userRows, userColumns } from '../../datatablesource';
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
            <VisibilityRoundedIcon className='icon viewButton' />
            <DeleteRoundedIcon className='icon deleteButton' />
          </div>
        );
      },
    },
  ];

  return (
    <div className='datatable'>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
