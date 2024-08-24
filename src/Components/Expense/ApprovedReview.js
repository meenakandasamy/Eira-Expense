// import React, { useState } from "react";
// import {
//   Card,
//   CardContent,
//   Typography,
//   Paper,
//   Box,
//   TextField,
//   Autocomplete,
//   Button,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
// } from "@mui/material";
// const siteOptions = ["Site A", "Site B", "Site C"]; // Replace with your site names
// const costCentreOptions = ["Centre A", "Centre B", "Centre C"]; // Replace with your cost centres
// const expenseTypes = ["Travel", "Food", "Supplies", "Other"]; // Example expense types

// const ExpenseReview = () => {
//   const [requestName, setRequestName] = useState("");
//   const [siteName, setSiteName] = useState(null);
//   const [costCentre, setCostCentre] = useState(null);
//   const [expenseType, setExpenseType] = useState("");
//   const [amount, setAmount] = useState("");
//   const [invoice, setInvoice] = useState("Y");

//   const handleSubmit = () => {
//     // Handle form submission logic here
//     console.log({
//       requestName,
//       siteName,
//       costCentre,
//       expenseType,
//       amount,
//       invoice,
//     });
//   };

//   return (
//       <div>
//         <Paper
//           elevation={5}
//           style={{
//             margin: "0 0 0 300px",
//             // padding: "20px",
//             boxSizing: "border-box",
//             height: "auto",
//             width: "70%",
//           }}
//         >
//            <Box sx={{ mt: 2, p: 3}}>
//           <Typography variant="h5" gutterBottom>
//             Expense Claim 
//           </Typography>
//           <Box component="form" noValidate autoComplete="off">
//             <div style={{display: "flex", justifyContent: "space-between", marginTop: "90px" }}>
//             <div style={{width:"30vw"}}>
//               <TextField
//                 label="Request Name"
//                 variant="outlined"
//                 margin="normal"
//                 value={requestName}
//                 onChange={(e) => setRequestName(e.target.value)}
//                 style={{width:"30vw"}}
//               />
//               <Autocomplete
//                 options={siteOptions}
//                 value={siteName}
//                 onChange={(event, newValue) => setSiteName(newValue)}
//                 renderInput={(params) => (
//                   <TextField
//                     {...params}
//                     label="Site Name"
//                     variant="outlined"
//                     fullWidth
//                     margin="normal"
//                   />
//                 )}
//               />
//               <Autocomplete
//                 options={costCentreOptions}
//                 value={costCentre}
//                 onChange={(event, newValue) => setCostCentre(newValue)}
//                 renderInput={(params) => (
//                   <TextField
//                     {...params}
//                     label="Cost Centre"
//                     variant="outlined"
//                     fullWidth
//                     margin="normal"
//                   />
//                 )}
//               />
//             </div>

//             <div style={{width:"30vw"}}>
//               <FormControl fullWidth margin="normal">
//                 <InputLabel>Expense Type</InputLabel>
//                 <Select
//                   value={expenseType}
//                   onChange={(e) => setExpenseType(e.target.value)}
//                   label="Expense Type"
//                 >
//                   {expenseTypes.map((type) => (
//                     <MenuItem key={type} value={type}>
//                       {type}
//                     </MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>
//               <TextField
//                 label="Amount"
//                 variant="outlined"
//                 fullWidth
//                 margin="normal"
//                 type="number"
//                 value={amount}
//                 onChange={(e) => setAmount(e.target.value)}
//               />
//               <FormControl fullWidth margin="normal">
//                 <InputLabel>Invoice</InputLabel>
//                 <Select
//                   value={invoice}
//                   onChange={(e) => setInvoice(e.target.value)}
//                   label="Invoice"
//                 >
//                   <MenuItem value="Y">Yes</MenuItem>
//                   <MenuItem value="N">No</MenuItem>
//                 </Select>
//               </FormControl>
//             </div>
//             </div>
//             <div style={{margin: "50px 0 0 0", display: "flex",alignItems: "center"}}>
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={handleSubmit}
//               style={{ marginTop: "20px" }}
//             >
//               Submit
//             </Button>
//             </div>
//           </Box>
//           </Box>
//         </Paper>
//       </div>
   
//   );
// };

// export default ExpenseReview;


// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import {
//   Card,
//   CardContent,
//   Typography,
//   Paper,
//   Box,
//   TextField,
//   Autocomplete,
//   Button,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
// } from "@mui/material";

// const siteOptions = ["Site A", "Site B", "Site C"];
// const costCentreOptions = ["Centre A", "Centre B", "Centre C"];
// const expenseTypes = ["Travel", "Food", "Supplies", "Other"];

// const ExpenseReview = () => {
//   const location = useLocation();
//   const { requestName: initialRequestName } = location.state || {};

//   const [requestName, setRequestName] = useState(initialRequestName || "");
//   const [siteName, setSiteName] = useState(null);
//   const [costCentre, setCostCentre] = useState(null);
//   const [expenseType, setExpenseType] = useState("");
//   const [amount, setAmount] = useState("");
//   const [invoice, setInvoice] = useState("Y");

//   const handleSubmit = () => {
//     console.log({
//       requestName,
//       siteName,
//       costCentre,
//       expenseType,
//       amount,
//       invoice,
//     });
//   };

//   return (
//     <div>
//       <Paper
//         elevation={5}
//         style={{
//           margin: "0 0 0 300px",
//           boxSizing: "border-box",
//           height: "auto",
//           width: "70%",
//         }}
//       >
//         <Box sx={{ mt: 2, p: 3 }}>
//           <Typography variant="h5" gutterBottom>
//             Expense Claim
//           </Typography>
//           <Box component="form" noValidate autoComplete="off">
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 marginTop: "90px",
//               }}
//             >
//               <div style={{ width: "30vw" }}>
//                 <TextField
//                   label="Request Name"
//                   variant="outlined"
//                   margin="normal"
//                   value={requestName}
//                   onChange={(e) => setRequestName(e.target.value)}
//                   style={{ width: "30vw" }}
//                 />
//                 <Autocomplete
//                   options={siteOptions}
//                   value={siteName}
//                   onChange={(event, newValue) => setSiteName(newValue)}
//                   renderInput={(params) => (
//                     <TextField
//                       {...params}
//                       label="Site Name"
//                       variant="outlined"
//                       fullWidth
//                       margin="normal"
//                     />
//                   )}
//                 />
//                 <Autocomplete
//                   options={costCentreOptions}
//                   value={costCentre}
//                   onChange={(event, newValue) => setCostCentre(newValue)}
//                   renderInput={(params) => (
//                     <TextField
//                       {...params}
//                       label="Cost Centre"
//                       variant="outlined"
//                       fullWidth
//                       margin="normal"
//                     />
//                   )}
//                 />
//               </div>

//               <div style={{ width: "30vw" }}>
//                 <FormControl fullWidth margin="normal">
//                   <InputLabel>Expense Type</InputLabel>
//                   <Select
//                     value={expenseType}
//                     onChange={(e) => setExpenseType(e.target.value)}
//                     label="Expense Type"
//                   >
//                     {expenseTypes.map((type) => (
//                       <MenuItem key={type} value={type}>
//                         {type}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                 </FormControl>
//                 <TextField
//                   label="Amount"
//                   variant="outlined"
//                   fullWidth
//                   margin="normal"
//                   type="number"
//                   value={amount}
//                   onChange={(e) => setAmount(e.target.value)}
//                 />
//                 <FormControl fullWidth margin="normal">
//                   <InputLabel>Invoice</InputLabel>
//                   <Select
//                     value={invoice}
//                     onChange={(e) => setInvoice(e.target.value)}
//                     label="Invoice"
//                   >
//                     <MenuItem value="Y">Yes</MenuItem>
//                     <MenuItem value="N">No</MenuItem>
//                   </Select>
//                 </FormControl>
//               </div>
//             </div>
//             <div
//               style={{
//                 margin: "50px 0 0 0",
//                 display: "flex",
//                 alignItems: "center",
//               }}
//             >
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={handleSubmit}
//                 style={{ marginTop: "20px" }}
//               >
//                 Submit
//               </Button>
//             </div>
//           </Box>
//         </Box>
//       </Paper>
//     </div>
//   );
// };

// export default ExpenseReview;


import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Paper, Box, Typography, TextField, Autocomplete, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const siteOptions = ["Site A", "Site B", "Site C"];
const costCentreOptions = ["Centre A", "Centre B", "Centre C"];
const expenseTypes = ["Travel", "Food", "Supplies", "Other"];

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
    <div>
      <Paper
        elevation={5}
        style={{
          margin: "0 0 0 300px",
          boxSizing: "border-box",
          height: "auto",
          width: "70%",
        }}
      >
        <Box sx={{ mt: 2, p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Expense Claim
          </Typography>
          <Box component="form" noValidate autoComplete="off">
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "90px" }}>
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
                    <TextField {...params} label="Site Name" variant="outlined" fullWidth margin="normal" />
                  )}
                />
                <Autocomplete
                  options={costCentreOptions}
                  value={costCentre}
                  onChange={(event, newValue) => setCostCentre(newValue)}
                  renderInput={(params) => (
                    <TextField {...params} label="Cost Centre" variant="outlined" fullWidth margin="normal" />
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
            <div style={{ margin: "50px 0 0 0", display: "flex", alignItems: "center" }}>
              <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginTop: "20px" }}>
                Submit
              </Button>
            </div>
          </Box>
        </Box>
      </Paper>
    </div>
  );
};

export default ExpenseReview;
