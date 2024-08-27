import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  Box,
  Grid,
  Typography,
  Tooltip,
  TableCell,
  TableContainer,
  Paper,
  Card
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import SubtitlesOffIcon from "@mui/icons-material/SubtitlesOff";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Srinath", 159, 6.0, 24, 4.0),
  createData("Sangamithra", 237, 9.0, 37, 4.3),
  createData("Anandaraj", 262, 16.0, 24, 6.0),
  createData("Dilip", 305, 3.7, 67, 4.3),
  createData("Vikram", 356, 16.0, 49, 3.9),
];

const ApprovedClaim = () => {
  const navigate = useNavigate();

  const handleAttachFileClick = (requestName) => {
    navigate("/menu/approved-review", { state: { requestName } });
  };

  return (
    <div>
      <div>
        <Box style={{ display: "flex", alignItems: "center", width: "100%" }}>
          <Paper
            elevation={0}
            style={{
              width: "100%",
              borderRadius: "2px 2px 0px 0px",
              userSelect: "none",
              height: "5vh",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Grid
              container
              width={"100%"}
              direction="row"
              justifyContent="space-between"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Grid
                item
                xs={4}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Typography
                  style={{ fontSize: "17px", color: "black", padding: "10px" }}
                >
                 Approved Claim Details
                </Typography>
              </Grid>
              <Grid
                item
                xs="auto"
                style={{ display: "flex", alignItems: "center" }}
              >
                <div>
                  <Tooltip title="Re-assign ">
                    <SupervisorAccountIcon
                      // onClick={handleOpen}
                      style={{
                        marginRight: "10px",
                        marginLeft: "10px",
                        cursor: "pointer",
                        color: "#004AFF",
                        fontSize: "25px",
                      }}
                    />
                  </Tooltip>
                </div>

                <div>
                  <Tooltip title="on-Hold ">
                    <ConfirmationNumberIcon
                      // onClick={handleHoldOpen}
                      style={{
                        marginRight: "10px",
                        marginLeft: "10px",
                        cursor: "pointer",
                        color: "#004AFF",
                        fontSize: "25px",
                      }}
                    />
                  </Tooltip>
                </div>

                <div>
                  <Tooltip title="Close">
                    <SubtitlesOffIcon
                      // onClick={handleCloseTicketOpen}
                      style={{
                        marginRight: "10px",
                        marginLeft: "10px",
                        color: "#004AFF",
                        cursor: "pointer",
                        fontSize: "25px",
                      }}
                    />
                  </Tooltip>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </div>
      <div className="table-container-wrapper" style={{ marginTop: "1%" }}>
        <Card elevation={1} style={{ height: "9%" }}>
          <TableContainer component={Paper}>
            <Table aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Claim</TableCell>
                  <TableCell align="center">Attach File</TableCell>
                  <TableCell align="center">Amount</TableCell>
                  <TableCell align="center">Last Acted On</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" align="center">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.fat}</TableCell>
                    <TableCell align="center">
                      <AttachFileIcon
                        onClick={() => handleAttachFileClick(row.name)}
                        style={{ cursor: "pointer" }}
                      />
                    </TableCell>
                    <TableCell align="center">{row.carbs}</TableCell>
                    <TableCell align="center">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </div>
    </div>
  );
};

export default ApprovedClaim;
