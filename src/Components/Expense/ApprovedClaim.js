import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Table, TableHead, TableRow,TableBody, TableCell, TableContainer, Paper, } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ExpenseReview from "./Expenseapply";

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
  ) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Srinath', 159, 6.0, 24, 4.0),
    createData('Sangamithra', 237, 9.0, 37, 4.3),
    createData('Anandaraj', 262, 16.0, 24, 6.0),
    createData('Dilip', 305, 3.7, 67, 4.3),
    createData('Vikram', 356, 16.0, 49, 3.9),
  ];

const ApprovedClaim = () => {

const [value, setValue] = useState();
const navigate = useNavigate(); 
const handleAttachFileClick = () => {
    navigate('/approved-review'); 
  };

    return(
        <div className="table-container-wrapper">
        <TableContainer component={Paper}>
          <Table aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Claim</TableCell>
                <TableCell align="center">Attach File</TableCell>
                <TableCell align="center">Amount</TableCell>
                <TableCell align="center">Last Acted On </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row, index) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.name}
              </TableCell>
              <TableCell align="center">
                  <AttachFileIcon
                    onClick={handleAttachFileClick}
                    style={{ cursor: 'pointer' }} 
                  />
                </TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
              <TableCell align="center">{row.protein}</TableCell>
            </TableRow>
          ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    )
}

export default ApprovedClaim;