import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
/*------------------------- MUI components ------------- */
import {
  Box,
  Paper,
  Typography,
  Button,
  Grid,
  Tooltip,
  Stack,
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableContainer,
  TableRow,
  Card,
  Autocomplete,
  TextField,
  Divider,
  Pagination,
  useTheme,
  PaginationItem,
} from "@mui/material";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import SubtitlesOffIcon from "@mui/icons-material/SubtitlesOff";
const Expensedetail = () => {
  const [value, setvalue] = useState();
  const [page, setPage] = useState(0);
  const [pageValue, setPageValue] = useState(10);
  const theme = useTheme();
  const [rowsPerPage, setRowsPerPage] = useState(10);
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const handleChangePage = (event, newPage) => {
    setPage(newPage - 1);
  };
  const handleClickGo = () => {
    if (pageValue > 0 && pageValue <= Math.ceil(rows.length / rowsPerPage)) {
      setPage(pageValue - 1);
    }
  };
  const PageChange = (value) => {
    const newPageValue = parseInt(value, 10);
    if (!isNaN(newPageValue)) {
      setPageValue(newPageValue);
    }
  };
  const rows = [
    createData(1, "Expense Claim", 9864, 2 / 8 / 2024, 1500),
    createData(2, "Expense Claim", 9864, 2 / 8 / 2024, 1500),
    createData(3, "Expense Claim", 9864, 2 / 8 / 2024, 1500),
    createData(4, "Expense Claim", 9864, 2 / 8 / 2024, 1500),
    createData(5, "Expense Claim", 9864, 2 / 8 / 2024, 1500),
    createData(6, "Expense Claim", 9864, 2 / 8 / 2024, 1500),
    createData(7, "Expense Claim", 9864, 2 / 8 / 2024, 1500),
    createData(8, "Expense Claim", 9864, 2 / 8 / 2024, 1500),
    createData(9, "Expense Claim", 9864, 2 / 8 / 2024, 1500),
    createData(10, "Expense Claim", 9864, 2 / 8 / 2024, 1500),
  ];

  const handleChangeRowsPerPage = (event, newValue) => {
    setRowsPerPage(newValue);
    setPage(0);
  };
  const renderCustomPrevious = (props) => (
    <CustomIconSlot
      name="PREVIOUS"
      icon={<ArrowBackIcon style={{ fontSize: "16px" }} />}
      {...props}
    />
  );
  const CustomIconSlot = ({ name, icon, ...props }) => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: name === "NEXT" ? "row-reverse" : "row",
      }}
    >
      {React.cloneElement(icon, props)}
      <Typography
        style={{
          margin: "14px",
          color: colorMode === "light" ? "#484C46" : "#007AFF",
          fontSize: "12px",
        }}
      >
        {name}
      </Typography>
    </div>
  );
  const renderCustomNext = (props) => (
    <CustomIconSlot
      name="NEXT"
      icon={
        <ArrowForwardIcon
          // sx={{ color: colorMode === 'light' ? '#484C46' : '#007AFF' }}
          style={{ fontSize: "16px" }}
        />
      }
      {...props}
    />
  );
  const rowsPerPageOptions = [10, 15, 20];
  const colorMode = theme.palette.mode;
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
                  Claim Details
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
          <TableContainer>
            <Table aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">S.No</TableCell>
                  <TableCell align="center">Claim</TableCell>
                  <TableCell align="center">Claim Number</TableCell>
                  {/* <TableCell align="center">Created Date</TableCell> */}
                  <TableCell align="center">Total Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow key={index}>
                      <TableCell
                        align="center"
                        style={{
                          minWidth: "150px",
                          maxWidth: "300px",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {row.name}
                      </TableCell>
                      <TableCell align="center">{row.calories}</TableCell>

                      <TableCell align="center">{row.fat}</TableCell>

                      <TableCell align="center">{row.protein}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Grid container direction="row" justifyContent="space-between">
            <Grid item xs={2}></Grid>
            <Grid
              item
              xs={10}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Stack spacing={2} direction="row">
                <Pagination
                  count={Math.ceil(rows.length / rowsPerPage)}
                  shape="rounded"
                  color="primary"
                  page={page + 1}
                  onChange={handleChangePage}
                  renderItem={(item) => (
                    <PaginationItem
                      slots={{
                        previous: renderCustomPrevious,
                        next: renderCustomNext,
                      }}
                      {...item}
                    />
                  )}
                />
                <Divider
                  orientation="vertical"
                  flexItem
                  style={{
                    color: "#E6E7E9",
                    marginRight: "16px",
                  }}
                />
              </Stack>
              <Stack
                direction="row"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  marginLeft: "1%",
                }}
              >
                <Typography
                  style={{
                    fontSize: "12px",
                    lineHeight: "15.52px",
                    fontWeight: "400",
                  }}
                >
                  Go to page
                </Typography>
                <TextField
                  variant="standard"
                  style={{
                    width: "24px",
                    marginLeft: "5px",
                  }}
                  value={pageValue !== 0 ? pageValue : ""}
                  onChange={(e) => PageChange(e.target.value)}
                />
                <Button
                  style={{
                    padding: "0",
                    width: "12px",
                    fontSize: "14px",
                  }}
                  onClick={handleClickGo}
                  endIcon={<ArrowForwardIcon style={{ fontSize: "16px" }} />}
                >
                  GO
                </Button>
                <Autocomplete
                  options={rowsPerPageOptions}
                  getOptionLabel={(option) => option.toString()}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="standard"
                      sx={{
                        fontFamily: "Inter, sans-serif",
                        width: 40,
                      }}
                    />
                  )}
                  value={rowsPerPage}
                  onChange={handleChangeRowsPerPage}
                  disableClearable
                  style={{ width: 120 }}
                />
              </Stack>
            </Grid>
          </Grid>
        </Card>
      </div>
    </div>
  );
};
export default Expensedetail;
