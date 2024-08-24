// import React from "react";
// import { Card, CardContent, Typography, Paper, Box,  } from "@mui/material";

// const ExpenseReview = () => {
//   return (
//     <div className="scroll-lock">
//     <div className="main-log no-scroll">

//             <Paper
//               elevation={5}
//               style={{
//                 margin: "70px 0 0 90px",
//                 padding: '10px 30px 10px 30px',
//                 boxSizing: 'border-box',
//                 height: "80vh",
//                 width: "90%"
//               }}
//             >

//             </Paper>

//     </div>
//   </div>
//   );
// };

// export default ExpenseReview;

import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Paper,
  Box,
  TextField,
  Autocomplete,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const siteOptions = ["Site A", "Site B", "Site C"]; // Replace with your site names
const costCentreOptions = ["Centre A", "Centre B", "Centre C"]; // Replace with your cost centres
const expenseTypes = ["Travel", "Food", "Supplies", "Other"]; // Example expense types

const ExpenseReview = () => {
  const [requestName, setRequestName] = useState("");
  const [siteName, setSiteName] = useState(null);
  const [costCentre, setCostCentre] = useState(null);
  const [expenseType, setExpenseType] = useState("");
  const [amount, setAmount] = useState("");
  const [invoice, setInvoice] = useState("Y");

  const handleSubmit = () => {
    // Handle form submission logic here
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
    <div className="scroll-lock">
      <div className="main-log no-scroll">
        <Paper
          elevation={5}
          style={{
            margin: "70px 0 0 240px",
            padding: "20px",
            boxSizing: "border-box",
            height: "80vh",
            width: "70%",
            overflowY: "auto",
          }}
        >
          <Typography variant="h5" gutterBottom>
            Expense Claim Form
          </Typography>
          <Box component="form" noValidate autoComplete="off">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "90px",
              }}
            >
              <div style={{ width: "30vw" }}>
                <TextField
                  label="Request Name"
                  variant="outlined"
                  margin="normal"
                  value={requestName}
                  onChange={(e) => setRequestName(e.target.value)}
                  style={{ width: "30vw" }}
                />
                <Autocomplete
                  options={siteOptions}
                  value={siteName}
                  onChange={(event, newValue) => setSiteName(newValue)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Site Name"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                    />
                  )}
                />
                <Autocomplete
                  options={costCentreOptions}
                  value={costCentre}
                  onChange={(event, newValue) => setCostCentre(newValue)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Cost Centre"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                    />
                  )}
                />
              </div>

              <div style={{ width: "30vw" }}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Expense Type</InputLabel>
                  <Select
                    value={expenseType}
                    onChange={(e) => setExpenseType(e.target.value)}
                    label="Expense Type"
                  >
                    {expenseTypes.map((type) => (
                      <MenuItem key={type} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  label="Amount"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                <FormControl fullWidth margin="normal">
                  <InputLabel>Invoice</InputLabel>
                  <Select
                    value={invoice}
                    onChange={(e) => setInvoice(e.target.value)}
                    label="Invoice"
                  >
                    <MenuItem value="Y">Yes</MenuItem>
                    <MenuItem value="N">No</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div
              style={{
                margin: "50px 0 0 0",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                style={{ marginTop: "20px" }}
              >
                Submit
              </Button>
            </div>
          </Box>
        </Paper>
      </div>
    </div>
    //   <div className="scroll-lock">
    //   <div className="main-log no-scroll">
    //     <Paper
    //       elevation={5}
    //       style={{
    //         margin: "70px 0 0 90px",
    //         padding: "20px",
    //         boxSizing: "border-box",
    //         height: "80vh",
    //         width: "90%",
    //         overflowY: "auto",
    //       }}
    //     >
    //       <Typography variant="h5" gutterBottom>
    //         Expense Claim Form
    //       </Typography>
    //       <Box component="form" noValidate autoComplete="off">
    //         <TextField
    //           label="Request Name"
    //           variant="outlined"
    //           fullWidth
    //           margin="normal"
    //           value={requestName}
    //           onChange={(e) => setRequestName(e.target.value)}
    //         />
    //         <Autocomplete
    //           options={siteOptions}
    //           value={siteName}
    //           onChange={(event, newValue) => setSiteName(newValue)}
    //           renderInput={(params) => (
    //             <TextField {...params} label="Site Name" variant="outlined" fullWidth margin="normal" />
    //           )}
    //         />
    //         <Autocomplete
    //           options={costCentreOptions}
    //           value={costCentre}
    //           onChange={(event, newValue) => setCostCentre(newValue)}
    //           renderInput={(params) => (
    //             <TextField {...params} label="Cost Centre" variant="outlined" fullWidth margin="normal" />
    //           )}
    //         />
    //         <FormControl fullWidth margin="normal">
    //           <InputLabel>Expense Type</InputLabel>
    //           <Select
    //             value={expenseType}
    //             onChange={(e) => setExpenseType(e.target.value)}
    //             label="Expense Type"
    //           >
    //             {expenseTypes.map((type) => (
    //               <MenuItem key={type} value={type}>
    //                 {type}
    //               </MenuItem>
    //             ))}
    //           </Select>
    //         </FormControl>
    //         <TextField
    //           label="Amount"
    //           variant="outlined"
    //           fullWidth
    //           margin="normal"
    //           type="number"
    //           value={amount}
    //           onChange={(e) => setAmount(e.target.value)}
    //         />
    //         <FormControl fullWidth margin="normal">
    //           <InputLabel>Invoice (Y/N)</InputLabel>
    //           <Select
    //             value={invoice}
    //             onChange={(e) => setInvoice(e.target.value)}
    //             label="Invoice"
    //           >
    //             <MenuItem value="Y">Yes</MenuItem>
    //             <MenuItem value="N">No</MenuItem>
    //           </Select>
    //         </FormControl>
    //         <Button
    //           variant="contained"
    //           color="primary"
    //           onClick={handleSubmit}
    //           style={{ marginTop: "20px" }}
    //         >
    //           Submit
    //         </Button>
    //       </Box>
    //     </Paper>
    //   </div>
    // </div>
  );
};

export default ExpenseReview;
