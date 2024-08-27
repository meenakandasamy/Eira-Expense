import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Paper,
  Box,
  Typography,
  TextField,
  Divider,
  Autocomplete,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import PrimarySearchAppBar from "../Menu/Sidemenu";
import "./Style.css";

const siteOptions = ["Site A", "Site B", "Site C"];
const costCentreOptions = ["Centre A", "Centre B", "Centre C"];
const expenseTypes = ["Travel", "Food", "Supplies", "Other"];

const typoStyle = {
  textTransform: "capitalize",
  opacity: "0.8",
  fontSize: "14px",
  fontFamily: "Inter, sans-serif",
};
function createData(date, step, owner, status) {
  return { date, step, owner, status };
}
const rows = [
  createData("18/08/2024", "Review Claim", "Underway", "Srinath"),
  createData("26/08/2024", "Apply Claim", "Applied", "Sangamithra"),
  createData("20/08/2024", "Review Claim", "Underway", "Anandaraj"),
];

const ExpenseReview = () => {
  const location = useLocation();
  const { requestName: initialRequestName } = location.state || {};

  const [requestName, setRequestName] = useState(initialRequestName || "");
  const [siteName, setSiteName] = useState(null);
  const [costCentre, setCostCentre] = useState(null);
  const [expenseType, setExpenseType] = useState("");
  const [amount, setAmount] = useState("");
  const [invoice, setInvoice] = useState("Y");

  const handleSubmit = () => {
    console.log({
      requestName,
      siteName,
      costCentre,
      expenseType,
      amount,
      invoice,
    });
  };

  return (
    // <div>
    //   <Paper
    //     elevation={5}
    //     style={{
    //       margin: "0 0 0 300px",
    //       boxSizing: "border-box",
    //       height: "auto",
    //       width: "70%",
    //     }}
    //   >
    //     <Box sx={{ mt: 2, p: 3 }}>
    //       <Typography variant="h5" gutterBottom>
    //         Expense Claim
    //       </Typography>
    //       <Box component="form" noValidate autoComplete="off">
    //         <div style={{ display: "flex", justifyContent: "space-between", marginTop: "90px" }}>
    //           <div style={{ width: "30vw" }}>
    //             <TextField
    //               label="Request Name"
    //               variant="outlined"
    //               margin="normal"
    //               value={requestName}
    //               onChange={(e) => setRequestName(e.target.value)}
    //               style={{ width: "30vw" }}
    //             />
    //             <Autocomplete
    //               options={siteOptions}
    //               value={siteName}
    //               onChange={(event, newValue) => setSiteName(newValue)}
    //               renderInput={(params) => (
    //                 <TextField {...params} label="Site Name" variant="outlined" fullWidth margin="normal" />
    //               )}
    //             />
    //             <Autocomplete
    //               options={costCentreOptions}
    //               value={costCentre}
    //               onChange={(event, newValue) => setCostCentre(newValue)}
    //               renderInput={(params) => (
    //                 <TextField {...params} label="Cost Centre" variant="outlined" fullWidth margin="normal" />
    //               )}
    //             />
    //           </div>

    //           <div style={{ width: "30vw" }}>
    //             <FormControl fullWidth margin="normal">
    //               <InputLabel>Expense Type</InputLabel>
    //               <Select
    //                 value={expenseType}
    //                 onChange={(e) => setExpenseType(e.target.value)}
    //                 label="Expense Type"
    //               >
    //                 {expenseTypes.map((type) => (
    //                   <MenuItem key={type} value={type}>
    //                     {type}
    //                   </MenuItem>
    //                 ))}
    //               </Select>
    //             </FormControl>
    //             <TextField
    //               label="Amount"
    //               variant="outlined"
    //               fullWidth
    //               margin="normal"
    //               type="number"
    //               value={amount}
    //               onChange={(e) => setAmount(e.target.value)}
    //             />
    //             <FormControl fullWidth margin="normal">
    //               <InputLabel>Invoice</InputLabel>
    //               <Select
    //                 value={invoice}
    //                 onChange={(e) => setInvoice(e.target.value)}
    //                 label="Invoice"
    //               >
    //                 <MenuItem value="Y">Yes</MenuItem>
    //                 <MenuItem value="N">No</MenuItem>
    //               </Select>
    //             </FormControl>
    //           </div>
    //         </div>
    //         <div style={{ margin: "50px 0 0 0", display: "flex", alignItems: "center" }}>
    //           <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginTop: "20px" }}>
    //             Submit
    //           </Button>
    //         </div>
    //       </Box>
    //     </Box>
    //   </Paper>
    // </div>
    <div className="" style={{ overflowY: "scroll" }}>
      <div className="monitoring-graph">
        <div style={{ width: "100%" }}>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: "100%",
                height: "49vh",
                borderRadius: "10px",
              },
            }}
          >
            <Paper elevation={3}>
              <div>
                <Typography
                //   id="transition-modal-title"
                //   variant="h6"
                //   component="h4"
                //   className="modal-head"
                  style={{ fontWeight: "bold", margin: "10px 0 0 20px",  fontFamily: "Inter, sans-serif" }}
                >
                  <TextField
                    label="Request Name"
                    variant="standard"
                    margin="normal"
                    value={requestName}
                    onChange={(e) => setRequestName(e.target.value)}
                    style={{ width: "8vw", fontFamily: "Inter, sans-serif", }}
                  />
                </Typography>
              </div>
              <Divider sx={{ borderColor: "#888" }} />

              <div>
                {/* <Box
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexWrap: "wrap",
                    "& > :not(style)": {
                      m: 1,
                      width: "100%",
                      height: "30vh",
                      margin: "0 0 0 0" 
                    },
                  }}
                >
                  <Paper elevation={3}> */}
                <Grid
                  container
                  spacing={2}
                  columns={16}
                  style={{ margin: "0 0 0 3px" }}
                >
                  <Grid item xs={4} sm={4} style={{ marginTop: "8.5px" }}>
                    <div style={{ flex: 1, minWidth: 150 }}>
                      <Typography style={typoStyle}>Claim No</Typography>
                      <TextField
                        disablePortal
                        id="combo-box-demo"
                        size="small"
                        name="errorMessage"
                        placeholder="Grid Abnormal"
                        sx={{ width: "11vw" }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            placeholder="Select  Site ..."
                          />
                        )}
                        classes={{ option: "autocomplete" }}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={4.5} sm={4.5} style={{ marginTop: "8.5px" }}>
                    <div style={{ flex: 1, minWidth: 150, marginLeft: "20px" }}>
                      <Typography style={typoStyle}>Created Date</Typography>
                      <TextField
                        disablePortal
                        id="combo-box-demo"
                        size="small"
                        name="errorMessage"
                        placeholder="Grid Abnormal"
                        sx={{ width: "11vw" }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            placeholder="Select  Site ..."
                          />
                        )}
                        classes={{ option: "autocomplete" }}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={4.5} sm={4.5} style={{ marginTop: "8.5px" }}>
                    <div style={{ flex: 1, minWidth: 150, marginLeft: "20px" }}>
                      <Typography style={typoStyle}>Amount Claimed</Typography>
                      <TextField
                        disablePortal
                        id="combo-box-demo"
                        size="small"
                        name="errorMessage"
                        placeholder="Grid Abnormal"
                        sx={{ width: "11vw" }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            placeholder="Select  Site ..."
                          />
                        )}
                        classes={{ option: "autocomplete" }}
                      />
                    </div>
                  </Grid>
                </Grid>
                <Grid item xs={4.5} sm={4.5} style={{ marginTop: "8.5px" }}>
                  <div style={{ flex: 1, minWidth: 150, marginLeft: "20px" }}>
                    <Typography style={typoStyle}>Reviewrs</Typography>
                    <TextField
                      //   fullWidth
                      disablePortal
                      id="combo-box-demo"
                      size="small"
                      name="errorMessage"
                      placeholder="Grid Abnormal"
                      sx={{ width: "43vw" }}
                      renderInput={(params) => (
                        <TextField {...params} placeholder="Select  Site ..." />
                      )}
                      classes={{ option: "autocomplete" }}
                    />
                  </div>
                </Grid>
                {/* </Paper>
                </Box> */}
              </div>
            </Paper>
          </Box>
        </div>
        <div>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: "38vw",
                height: "49vh",
                borderRadius: "10px",
              },
              // overflowY: "scroll",
            }}
          >
            <Paper elevation={3}>
              {/* <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Step</TableCell>
                  <TableCell>Owner</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Array.from({ length: 3 }).map((_, rowIndex) => (
                  <TableRow key={rowIndex}>
                    <TableCell>Row {rowIndex + 1} Col 1</TableCell>
                    <TableCell>Row {rowIndex + 1} Col 2</TableCell>
                    <TableCell>Row {rowIndex + 1} Col 3</TableCell>
                    <TableCell>Row {rowIndex + 1} Col 4</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer> */}

              <TableContainer>
                <Table aria-label="a dense table" style={{}}>
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Date</TableCell>
                      <TableCell align="center">Step</TableCell>
                      <TableCell align="center">Owner</TableCell>
                      <TableCell align="center">Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row, index) => (
                      <TableRow
                        key={row.date}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row" align="center">
                          {row.date}
                        </TableCell>
                        <TableCell align="center">{row.step}</TableCell>
                        <TableCell align="center">{row.status}</TableCell>
                        <TableCell align="center">{row.owner}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Box>
        </div>
      </div>

      <div>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: "100%",
              height: "60vh",
              borderRadius: "10px",
            },
            // overflowY: "scroll",
          }}
        >
          <Paper elevation={3}>

          <TableContainer>
                <Table aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Date</TableCell>
                      <TableCell align="center">Step</TableCell>
                      <TableCell align="center">Owner</TableCell>
                      <TableCell align="center">Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row, index) => (
                      <TableRow
                        key={row.date}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row" align="center">
                          {row.date}
                        </TableCell>
                        <TableCell align="center">{row.step}</TableCell>
                        <TableCell align="center">{row.status}</TableCell>
                        <TableCell align="center">{row.owner}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

          </Paper>
        </Box>
      </div>
    </div>
  );
};

export default ExpenseReview;
