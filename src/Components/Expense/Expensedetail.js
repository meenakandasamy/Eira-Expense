import React, { useState,useEffect } from "react";
import TableTemplate from "../../Table/TableTemplate";
import {claimdetail,claimadd,claimvalue} from "../../Util/Textfield"
import {
  Typography,
  Grid,
  Button,
  Box,
  TextField,
  Modal,
  Stack,
  Divider,
  // Field,
  Autocomplete,
  Tooltip,  
  CircularProgress,
  CardHeader,
  Card,
  Fade,
  Alert,
} from '@mui/material';
import {  Field, Form, Formik } from "formik";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import {Claimadded} from "../../Util/ValidationSchema"
// imporcommon.css'
const dayjs = require('dayjs');
const Expensedetail = () => {
  const initalState = {
   CreatedDate: "",
   claimno: "",
   claimitem: "",
   remark: "",
    // range: "",
    // parameterName: [],
    // range: "",
  };

  const [claimFields, setclaimFields] = useState(initalState);
  console.log(claimFields.claimitem);
  const [textvalue,settextvalue]=useState([])
  const [closeticket,setcloseticket]=useState(false)
  const [addclaim,setaddclaim]=useState(false)
  const [fieldValue, setFieldValue] = useState()
  const [textt, setTextFieldd] = useState([]);
  const [text, setTextField] = useState([]);
  const [toBackend, setToBackend] = useState(false);
  const [edit,setedit]=useState()

  const headerContent = (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div className="modelTypo">
        <Typography
          id="transition-modal-title"
          variant="h6"
          component="h4"
          className="modal-head"
          style={{ fontWeight: 'bold' }}
        >
          {edit ? 'Update Report' : 'Add New Report'}
        </Typography>
      </div>
      {claimFields.status === 'Inactive' ? (
        <Alert
          severity="error"
          style={{
            userSelect: 'none',
            height: '40px',
            marginLeft: 'auto',
            marginRight: 'auto',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
                 {`Report generation will be  inactivated.`}

        </Alert>
      ) : null}
    </div>
  );
  const data = [
    { name: "1", claimno: "1943",claim:"Expense Claim",Owner:"Accounts(001)",Total:"1100"},
    { name: " 2", claimno: "1943",claim:"Expense Claim",Owner:"Accounts(001)",Total:"1200" },
    { name: "3",claimno: "1943",claim:"Expense Claim" ,Owner:"Accounts(001)",Total:"1200"},
    { name: "4", claimno: "1943",claim:"Expense Claim",Owner:"Accounts(001)",Total:"1300" },
    { name: "5", claimno: "1943",claim:"Expense Claim",Owner:"Accounts(001)",Total:"1400" },
    { name: "6", claimno: "1943",claim:"Expense Claim" ,Owner:"Accounts(001)",Total:"1200"},
    { name: "7", claimno: "1943",claim:"Expense Claim",Owner:"Accounts(001)" ,Total:"1800"},
    { name: "8", claimno: "1943" ,claim:"Expense Claim",Owner:"Accounts(001)",Total:"1200"},
    { name: "9", claimno: "1943" ,claim:"Expense Claim",Owner:"Accounts(001)",Total:"1200"},
    { name: "10", claimno: "1943",claim:"Expense Claim",Owner:"Accounts(001)",Total:"1000" },
    { name: "11",claimno: "1943" ,claim:"Expense Claim",Owner:"Accounts(001)",Total:"1100"},
    { name: "12",claimno: "1943" ,claim:"Expense Claim",Owner:"Accounts(001)",Total:"1200"},
    { name: "13", claimno: "1943" ,claim:"Expense Claim",Owner:"Accounts(001)",Total:"1200"},
    { name: "14", claimno: "1943",claim:"Expense Claim" ,Owner:"Accounts(001)",Total:"1200"},
    { name: "15", claimno: "1943",claim:"Expense Claim" ,Owner:"Accounts(001)",Total:"1200"},
    { name: "16", claimno: "1943",claim:"Expense Claim" ,Owner:"Accounts(001)",Total:"1400"},
    { name: "17",claimno: "1943" ,claim:"Expense Claim",Owner:"Accounts(001)",Total:"1500"},
    { name: "18", claimno: "1943" ,claim:"Expense Claim",Owner:"Accounts(001)",Total:"1100"},
  ];
  function getOptions(propName) {
    let option;
    switch (propName) {
      case "claimitem":
         return (option = columnss?.map((option) => option.label));
      
    }
    return option;
  }
  const columnss = [
    { id: "name", label: "Accomodation Outside-Hub" },
    { id: "claim", label: "Accomodation-Within Hub" },
    { id: "claimno", label: "Conveyance-Outside Hub" },
    { id: "Owner", label: "Conveyance-Outside Hub" },
    { id: "Total", label: "Food-Outside Hub" },
    
    
  ];
  const columns = [
    { id: "name", label: "S.No" },
    { id: "claim", label: "Claim" },
    { id: "claimno", label: "Claim No" },
    { id: "Owner", label: "Current Owner" },
    { id: "Total", label: "Total Amount" },
    
    
  ];

  const paths = [
    { label: "Home", path: "/menu/sitelist" },

    { label: "Claim Details", path: "equipmentdetails" },
  ];
  const handleCrate = () => {
    setaddclaim(true)
  };
  const handlefilter=()=>{
    setcloseticket(true)
  }
  const handleClosefilter=()=>{
    setcloseticket(false)
  }
  useEffect(() => {
    let data = claimdetail();
    setTextFieldd(data);
  }, []);
  useEffect(() => {
    let data = claimvalue();
    settextvalue(data);
  }, []);
  
  useEffect(() => {
    let data = claimadd();
    setTextField(data);
  }, []);
  const stylee = {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "55%",
    bgcolor: 'background.paper',
    height: 70,
    borderRadius: '20px',
    padding: '1px',
  };
    const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 580,
    bgcolor: 'background.paper',
    height: 270,
    borderRadius: '20px',
    padding: '1px',
  };
  const handleChangevalue = (e) => {
    setFieldValue({ ...fieldValue, [e.target.name]: e.target.value });
  };
  const handleCloseBack = () => {
    setcloseticket(false);
    window.location.reload();
  };
  const handlecloseUpdate = async () => {
    // try {
    //   let data = {
    //     ticketIds: value,
    //     remarks: fieldValue?.remarks,
    //   };
 
    //   let responsedata = await putBulkTicketclose(data);
    //   if (responsedata.status == 200) {
    //     fetchData();
    //     setcloseticket(false);
    //     setSnack(errorMsg.success);
    //     handleCloseNext();
    //   }
    // } catch (error) {
    //   setSnack(errorMsg.failure);
     
    // }
  };
  const handleClose=()=>{
    setaddclaim(false)
  }
  const handleChange = (e) => {
    setclaimFields(e);
  };
  const handleTxtChange = (event) => {
    console.log(event.target.name, event.target.value);
    setclaimFields({
      ...claimFields,
      [event.target.name]: event.target.value,
    });
  };
  const handleSave = async () => {}
  const  handleUpdate = async () => {}
  const handleDropdownChange = (event, value, name) => {
    if (name === "rage" || name === "status") {
      setclaimFields({ ...claimFields, [name]: value.label });
      // setclaimValue({ ...reportValue, [name]: value.value });
    } else if (name === "reportName") {
      setclaimFields({ ...claimFields, [name]: value, range: null });
    } else {
      setclaimFields({ ...claimFields, [name]: value });
    }
  };
  return (
    <div>
      <div>
      <TableTemplate
        data={data}
        columns={columns}
        handlefilterPopupOpen={(val)=>handlefilter(val)}
        SearchLabel={'Search Company Here... '}
        handleAddPopupOpen={(val) =>handleCrate(val)}
        addButton={"Add Claim"}
        paths={paths}
        fallbackText={"No company has been created"}
        // handleAddPopupOpen={(val) => handleCrate(val)}
      />
      </div>
     
      <div>
            <Modal
              open={closeticket}
              onClose={handleClosefilter}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    // alignItems: 'center',
                    padding: '20px',
                    backgroundColor: 'rgb(246, 248, 252)',
                    borderRadius: '20px',
                  }}
                >
                  <div>
                    <Typography
                      id="transition-modal-title"
                      variant="h6"
                      component="h4"
                      className="modal-head"
                      style={{ marginTop: '2%' }}
                    >
                 Customize Claim Filter
                    </Typography>
                  </div>
                  <div>
                    <Stack spacing={2} direction="row">
                      <CloseIcon
                        onClick={() => handleClosefilter()}
                        style={{ cursor: 'pointer' }}
                      />
                    </Stack>
                  </div>
                </div>
                <Divider sx={{ borderColor: '#888' }} />
                <div style={{ padding: '40px 30px 30px ' }}>
                  <div>
                  
                  
                   
                  <Grid container spacing={2} columns={8}>
                              {textt?.length > 0
                                ? textt?.map((data, index) => (
                                    <Grid item xs={4}>
                                      <div key={index}>
                                        <>
                                         
                                        </>

                                        {data.type === 'textField' ? (
                                          <>
                                            <Typography
                                              variant="body1"
                                              className="modal-typo"
                                              gutterBottom
                                            >
                                              {data.label}
                                            </Typography>
                                            <TextField
                                              as={TextField}
                                              // disabled={toBackend}
                                              id={`outlined-basic-${index}`}
                                              size="small"
                                              variant="outlined"
                                              name={data.name}
                                              inputProps={{
                                                maxLength: data.length,
                                              }}
                                              placeholder={data.placeholder}
                                              onChange={(e) => {
                                                handleChange(e);
                                                handleTxtChange(e);
                                              }}
                                              sx={{ width: '12vw' }}
                                            />
                                            {/* <ErrorMessage
                                              name={data.name}
                                              component="div"
                                              className="error"
                                              style={{
                                                color: 'red',
                                                marginTop: '1%',
                                                textAlign: 'left',
                                                marginLeft: '0%',
                                              }}
                                            /> */}
                                          </>
                                        )  : data.type === 'date' ? (
                                          <LocalizationProvider
                                            dateAdapter={AdapterDayjs}
                                          >
                                            <Typography
                                              variant="body1"
                                              className="modal-typo"
                                              gutterBottom
                                            >
                                              {data.label}
                                            </Typography>
                                            <DatePicker
                                              size="small"
                                              sx={{
                                                width: '12vw',
                                              }}
                                              name={data.name}
                                              // onChange={(e) => {
                                              //   handledatepicchange(
                                              //     e,
                                              //     data.name
                                              //   );
                                              // }}
                                              slotProps={{
                                                textField: {
                                                  size: 'small',
                                                },
                                              }}
                                            />
                                          </LocalizationProvider>
                                        ) : data.type === 'datee' ? (
                                          <LocalizationProvider
                                            dateAdapter={AdapterDayjs}
                                          >
                                            <Typography
                                              variant="body1"
                                              className="modal-typo"
                                              gutterBottom
                                            >
                                              {data.label}
                                            </Typography>

                                            <DatePicker
                                              size="small"
                                              sx={{
                                                width: '12vw',
                                              }}
                                              // minDate={fromDate}

                                              // shouldDisableDate={(date) =>
                                              //   dayjs(date).isBefore(s
                                              //     dayjs(fromDate),
                                              //     'day'
                                              //   )
                                              // }
                                              name={data.name}
                                              // onChange={(e) => {
                                              //   handledatepic(e, data.name);
                                              // }}
                                              slotProps={{
                                                textField: {
                                                  size: 'small',
                                                },
                                              }}
                                            />
                                          </LocalizationProvider>
                                        ) : null}
                                      </div>
                                    </Grid>
                                  ))
                                : null}
                            </Grid>
               
                  </div>

                  <div>
                    <Stack
                      direction="row"
                      spacing={2}
                      style={{ justifyContent: 'center' }}
                    >
                  
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                          
                          }}
                        >
                          <div>
                            <Button
                              style={{
                                textTransform: 'capitalize',
                                marginTop: '4vh',
                              }}
                              variant="contained"
                              onClick={handleCloseBack}
                            >
                              Cancel
                            </Button>
                          </div>
                          <div>
                            <Stack spacing={4} direction="row">
                              <Button
                                style={{
                                  textTransform: 'capitalize',
                                  marginTop: '4vh',
                                  marginLeft: '7%',
                                }}
                                variant="contained"
                                onClick={handlecloseUpdate}
                              >
                               Apply 
                              </Button>
                            </Stack>
                          </div>
                        </div>
                     
                    </Stack>
                  </div>
                </div>


              </Box>
            </Modal>
          </div>

          <div>
          <Formik
              // key={
              //   edit
              //     ? "edit"
              //     : reportData === "Asset Management Report"
              //     ? "report"
              //     : reportData !== "Asset Management Report"
              //     ? "daily"
              //     : "add"
              // }
              enableReinitialize={true}
              initialValues={claimFields}
              validationSchema={Claimadded}
              onSubmit={async (values, { resetForm }) => {
                let submitValue = {
                  siteName: values.siteName,
                  reportName: values.reportName,
                  mailId: values.emailId,
                  status: values.status,
                  range: values.range,
                };
                if (edit) {
                  const result = await handleUpdate(submitValue);
                  console.log(result, "result");
                  if (result === 1) {
                    resetForm();
                  }
                } else {
                  const result = await handleSave(submitValue);
                  console.log(result, "result");
                  if (result === 1) {
                    resetForm();
                  }
                }
              }}
            >
              {({ values, handleChange, handleSubmit, handleReset }) => (
                <Form>
                  <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={addclaim}
                  
                  >
                    <Fade in={addclaim}>
                      <Box
                       style={stylee}
           
                      >
                        <Card
                          sx={{
                            borderRadius: "20px",
                     
                          }}
                        >
                          
                              <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '20px',
                    backgroundColor: 'rgb(246, 248, 252)',
                    borderRadius: '20px',
                  }}
                >
                  <div>
                    <Typography
                      id="transition-modal-title"
                      variant="h6"
                      component="h4"
                      className="modal-head"
                      style={{ marginTop: '2%' }}
                    >
             Add Expense Claim
                    </Typography>
                  </div>
                  <div>
                  <Stack spacing={2} direction="row">
                                {edit ? (
                                  <Button
                                    variant="contained"
                                    style={{
                                      borderRadius: "25px",
                                      textTransform: "capitalize",
                                    }}
                                    startIcon={
                                      toBackend ? (
                                        <CircularProgress
                                          size={20}
                                          color="inherit"
                                        />
                                      ) : (
                                        <SaveIcon />
                                      )
                                    }
                                    onClick={toBackend ? null : handleSubmit}
                                  >
                                    {toBackend ? "Updating..." : "Update"}
                                  </Button>
                                ) : (
                                  <Button
                                    variant="contained"
                                    style={{
                                      borderRadius: "25px",
                                      textTransform: "capitalize",
                                    }}
                                    startIcon={
                                      toBackend ? (
                                        <CircularProgress
                                          size={20}
                                          color="inherit"
                                        />
                                      ) : (
                                        <SaveIcon />
                                      )
                                    }
                                    onClick={toBackend ? null : handleSubmit}
                                  >
                                    {toBackend ? "Saving..." : "Save"}
                                  </Button>
                                )}
                                <Button
                                  variant="contained"
                                  disabled={toBackend}
                                  style={{
                                    borderRadius: "25px",
                                    textTransform: "capitalize",
                                  }}
                                  onClick={() => {
                                    handleClose();
                                    handleReset();
                                  }}
                                  startIcon={<CancelIcon />}
                                >
                                  Cancel
                                </Button>
                              </Stack>
                  </div>
                </div>
                          <Divider sx={{ borderColor: "#888" }} />
                          <div
                             style={{
                              height: claimFields.claimitem.length > 0 ? "30vh" : "auto",
                              overflow: claimFields.claimitem.length > 0 ? "auto" : "visible",
                              padding: "20px",
                            }}
                          >
                            <Grid container spacing={2} columns={16}>
                              {text?.length > 0
                                ? text?.map((data, index) => (
                                    <Grid item xs={4}>
                                      <div key={index}>
                                        {data.type === "textField" ? (
                                          <>
                                            <Typography
                                              variant="body1"
                                              className="modal-typo"
                                              gutterBottom
                                            >
                                              {data.label}
                                            </Typography>
                                            <Field
                                              as={TextField}
                                              // disabled={toBackend}
                                              id={`outlined-basic-${index}`}
                                              size="small"
                                              variant="outlined"
                                              name={data.name}
                                              inputProps={{
                                                maxLength: data.length,
                                              }}
                                              

                                              placeholder={data.placeholder}
                                              onChange={(e) => {
                                                handleChange(e);
                                                handleTxtChange(e);
                                              }}
                                              // defaultValue={ sessionStorage.getItem("email") }
                                              value={
                                                values.emailId === null ||
                                                values.emailId === ""
                                                  ? ""
                                                  : values[data.name]
                                              }
                                              sx={{ width: '12vw' }}
                                            />
                                            {/* <ErrorMessage
                                              name={data.name}
                                              component="div"
                                              className="error"
                                              style={{
                                                color: "red",
                                                marginTop: "1%",
                                                textAlign: "left",
                                                marginLeft: "0%",
                                              }}
                                            /> */}
                                          </>
                                        )  : data.type === "dropdown" ? (
                                          <>
                                            <Typography
                                              variant="body1"
                                              className="modal-typo"
                                              gutterBottom
                                            >
                                              {data.label}
                                            </Typography>
                                            <Tooltip
                                              // title={
                                              //   !edit && data.name === "status"
                                              //     ? "Active"
                                              //     : edit
                                              //     ? data.name === "status"
                                              //       ? typeof values[
                                              //           data.name
                                              //         ] === "string"
                                              //         ? values[data.name]
                                              //         : values.status === 1
                                              //         ? "Active"
                                              //         : "Inactive"
                                              //       : values[data.name]
                                              //     : values[data.name]
                                              // }
                                            >
                                              <Field
                                                render={({ field, form }) => (
                                                  <Tooltip
                                                    // title={
                                                    //   !edit &&
                                                    //   data.name === "status"
                                                    //     ? "Active"
                                                    //     : edit
                                                    //     ? data.name === "status"
                                                    //       ? typeof values[
                                                    //           data.name
                                                    //         ] === "string"
                                                    //         ? values[data.name]
                                                    //         : values.status ===
                                                    //           1
                                                    //         ? "Active"
                                                    //         : "Inactive"
                                                    //       : values[data.name]
                                                    //     : values[data.name]
                                                    // }
                                                  >
                                                    <Autocomplete
                                                      disableClearable
                                                    
                                                      options={getOptions(
                                                        data.name
                                                      )}
                                                      size="small"
                                                      id={`combo-box-demo-${index}`}
                                                      onChange={(
                                                        event,
                                                        value
                                                      ) =>
                                                        handleDropdownChange(
                                                          event,
                                                          value,
                                                          data.name
                                                        )
                                                      }
                                                    
                                                      sx={{ width: "12vw" }}
                                                      ListboxProps={{
                                                        style: {
                                                          maxHeight: "200px", // Set your desired height here
                                                        },
                                                      }}
                                                      renderInput={(params) => (
                                                        <TextField
                                                          {...params}
                                                          placeholder={
                                                            data.placeholder
                                                          }
                                                        />
                                                      )}
                                                    />
                                                  </Tooltip>
                                                )}
                                              />
                                            </Tooltip>
                                            {/* <ErrorMessage
                                              name={data.name}
                                              component="div"
                                              className="error"
                                              style={{
                                                color: "red",
                                                marginTop: "1%",
                                                textAlign: "left",
                                                marginLeft: "0%",
                                              }}
                                            /> */}
                                          </>
                                        ) : null}
                                      </div>
                                    </Grid>
                                  ))
                                : null}
      
                            </Grid>

                            <div>

{claimFields.claimitem.length > 0&& (
  
 <div><Card elevation={2} style={{marginTop:"5%",height:"30vh",padding:"20px"}}>
   {/* <Typography style={{
    fontsize: "1.2rem",
    fontweight:"600",
    margintop: "1.5%",
    marginleft: "5%",
   }}>	Expense Claim</Typography> */}
        <Grid container spacing={2} columns={12}>
                              {textvalue?.length > 0
                                ?textvalue?.map((data, index) => (
                                    <Grid item xs={4}>
                                      <div key={index}>
                                        <>
                                         
                                        </>

                                        {data.type === 'textField' ? (
                                          <>
                                            <Typography
                                              variant="body1"
                                              className="modal-typo"
                                              gutterBottom
                                            >
                                              {data.label}
                                            </Typography>
                                            <Field
                                              as={TextField}
                                              disabled={toBackend}
                                              id={`outlined-basic-${index}`}
                                              size="small"
                                              variant="outlined"
                                              name={data.name}
                                              inputProps={{
                                                maxLength: data.length,
                                              }}
                                              placeholder={data.placeholder}
                                              onChange={(e) => {
                                                handleChange(e);
                                                handleTxtChange(e);
                                              }}
                                              sx={{ width: '12vw' }}
                                            />
                                            {/* <ErrorMessage
                                              name={data.name}
                                              component="div"
                                              className="error"
                                              style={{
                                                color: 'red',
                                                marginTop: '1%',
                                                textAlign: 'left',
                                                marginLeft: '0%',
                                              }}
                                            /> */}
                                          </>
                                        ) : data.type === 'dropdown' ? (
                                          <>
                                            <Typography
                                              variant="body1"
                                              className="modal-typo"
                                              gutterBottom
                                            >
                                              {data.label}
                                            </Typography>
                                            <Tooltip>
                                              <Field
                                                render={({ field, form }) => (
                                                  <Tooltip>
                                                    <Autocomplete
                                                      options={getOptions(
                                                        data.name
                                                      )}
                                                      size="small"
                                                      id={`combo-box-demo-${index}`}
                                                      onChange={(
                                                        event,
                                                        value
                                                      ) =>
                                                        handleDropdownChange(
                                                          event,
                                                          value,
                                                          data.name
                                                        )
                                                      }
                                                      sx={{ width: '12vw' }}
                                                      ListboxProps={{
                                                        style: {
                                                          maxHeight: '200px', // Set your desired height here
                                                        },
                                                      }}
                                                      renderInput={(params) => (
                                                        <TextField
                                                          {...params}
                                                          placeholder={
                                                            data.placeholder
                                                          }
                                                        />
                                                      )}
                                                    />
                                                  </Tooltip>
                                                )}
                                              />
                                            </Tooltip>
                                            {/* <ErrorMessage
                                              name={data.name}
                                              component="div"
                                              className="error"
                                              style={{
                                                color: 'red',
                                                marginTop: '1%',
                                                textAlign: 'left',
                                                marginLeft: '0%',
                                              }}
                                            /> */}
                                          </>
                                        ) : null}
                                      </div>
                                    </Grid>
                                  ))
                                : null}
                          
        </Grid></Card></div> 
)}
</div>
                          </div>
       
                        </Card>
   
                      </Box>
                    </Fade>
                  </Modal>
                </Form>
              )}
            </Formik>
          </div>
  
    </div>

  );
};

export default Expensedetail;
