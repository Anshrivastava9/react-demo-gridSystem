import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { makeStyles } from '@mui/styles';

const columns = [
  {
    field: 'Profile',
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    width: 140,
  },
  {
    field: 'SE',
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    width: 140,
  },
  {
    field: 'SE',
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    width: 140,
  },
  {
    field: 'SE',
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    width: 140,
  },
  {
    field: 'Select Employee',
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    width: 140,
  },
];

const rows = [];

const useStyles = makeStyles({
  root: {
    '& .super-app-theme--header': {
      backgroundColor: 'rgba(255, 7, 0, 0.55)',
    },
  },
});

export default function StylingHeaderGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}
