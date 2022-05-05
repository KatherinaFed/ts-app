import React from 'react';
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridCellParams,
} from '@mui/x-data-grid';
import { Box } from '@mui/system';
import { Paper } from '@mui/material';

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Name',
    width: 80,
    sortable: false,
    filterable: false,
    hideable: false,
  },
  {
    field: '1',
    headerName: '07:00',
    width: 100,
    sortable: false,
    filterable: false,
    hideable: false,
  },
  {
    field: '2',
    headerName: '08:00',
    width: 100,
    sortable: false,
    filterable: false,
    hideable: false,
  },
  {
    field: '3',
    headerName: '09:00',
    width: 100,
    sortable: false,
    filterable: false,
    hideable: false,
  },
  {
    field: '4',
    headerName: '10:00',
    width: 100,
    sortable: false,
    filterable: false,
    hideable: false,
  },
  {
    field: '5',
    headerName: '11:00',
    width: 100,
    sortable: false,
    filterable: false,
    hideable: false,
  },
  {
    field: '6',
    headerName: '12:00',
    width: 100,
    sortable: false,
    filterable: false,
    hideable: false,
  },
  {
    field: '7',
    headerName: '13:00',
    width: 100,
    sortable: false,
    filterable: false,
    hideable: false,
  },
  {
    field: '8',
    headerName: '14:00',
    width: 100,
    sortable: false,
    filterable: false,
    hideable: false,
  },
  {
    field: '9',
    headerName: '15:00',
    width: 100,
    sortable: false,
    filterable: false,
    hideable: false,
  },
  {
    field: '10',
    headerName: '16:00',
    width: 100,
    sortable: false,
    filterable: false,
    hideable: false,
  },
  {
    field: '11',
    headerName: '17:00',
    width: 100,
    sortable: false,
    filterable: false,
    hideable: false,
  },
  {
    field: '12',
    headerName: '18:00',
    width: 100,
    sortable: false,
    filterable: false,
    hideable: false,
  },
  {
    field: '13',
    headerName: '19:00',
    width: 100,
    sortable: false,
    filterable: false,
    hideable: false,
  },
  {
    field: '14',
    headerName: '20:00',
    width: 100,
    sortable: false,
    filterable: false,
    hideable: false,
  },
];

const rows = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Kate' },
  { id: 3, name: 'Bella' },
  { id: 4, name: 'Kevin' },
  { id: 5, name: 'Ivan' },
  { id: 6, name: 'Susan' },
  { id: 7, name: 'Leo' },
  { id: 8, name: 'Eric' },
  { id: 9, name: 'Hanna' },
  { id: 10, name: 'Lolita' },
];

const Day = () => {
  return (
    <div style={{ width: '100%', height: 500 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        disableExtendRowFullWidth
        disableSelectionOnClick
        hideFooter
        showCellRightBorder
        showColumnRightBorder
      />
    </div>
  );
};

export default Day;
