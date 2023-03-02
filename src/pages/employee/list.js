import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#969696",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein, action) {
  return { name, calories, fat, carbs, protein, action};
}

const rows = [
  createData('Item 1', 159, 6.0, 24, 4.0, 2),
  createData('Item 2', 237, 9.0, 37, 4.3, 3),
  createData('Item 3', 262, 16.0, 24, 6.0, 1),
  createData('Item 4', 305, 3.7, 67, 4.3, 7),
  createData('Item 5', 356, 16.0, 49, 3.9, 0),
  createData('Item 6', 159, 6.0, 24, 4.0, 2),
  createData('Item 7', 237, 9.0, 37, 4.3, 3),
  createData('Item 8', 262, 16.0, 24, 6.0, 1),
  createData('Item 9', 305, 3.7, 67, 4.3, 7),
  createData('Item 10', 356, 16.0, 49, 3.9, 0),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 800 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Funcionário</StyledTableCell>
            <StyledTableCell align="right">Cargo</StyledTableCell>
            <StyledTableCell align="right">Setor</StyledTableCell>
            <StyledTableCell align="right">Admissão</StyledTableCell>
            <StyledTableCell align="right">Aniversário</StyledTableCell>
            <StyledTableCell align="right">Ação</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
              <AccountCircleIcon/>
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.action}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}