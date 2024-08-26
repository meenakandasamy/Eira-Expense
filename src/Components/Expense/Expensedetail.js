import React, { useState,useEffect } from "react";
import TableTemplate from "../../Table/TableTemplate";
import {claimdetail} from "../../Util/Textfield"
import {
  Typography,
  Grid,
  Button,
  Box,
  TextField,
  Modal,
  Stack,
  Divider,
  Fade,
  Card,
  CardHeader


 
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CloseIcon from '@mui/icons-material/Close';

const dayjs = require('dayjs');
const Expensedetail = () => {
  const [closeticket,setcloseticket]=useState(false)
  const [addclaim,setaddclaim]=useState(false)
  const [fieldValue, setFieldValue] = useState()
  const [textt, setTextFieldd] = useState([]);
  const data = [
    { name: "Document 1", datee: "2024-08-01" },
    { name: "Document 2", datee: "2024-08-02" },
    { name: "Document 1", datee: "2024-08-01" },
    { name: "Document 1", datee: "2024-08-01" },
    { name: "Document 1", datee: "2024-08-01" },
    { name: "Document 1", datee: "2024-08-01" },
    { name: "Document 1", datee: "2024-08-01" },
    { name: "Document 1", datee: "2024-08-01" },
    { name: "Document 1", datee: "2024-08-01" },
    { name: "Document 1", datee: "2024-08-01" },
    { name: "Document 2", datee: "2024-08-02" },
    { name: "Document 2", datee: "2024-08-02" },
    { name: "Document 2", datee: "2024-08-02" },
    { name: "Document 2", datee: "2024-08-02" },
    { name: "Document 2", datee: "2024-08-02" },
    { name: "Document 2", datee: "2024-08-02" },
    { name: "Document 2", datee: "2024-08-02" },
    { name: "Document 2", datee: "2024-08-02" },
  ];

  const columns = [
    { id: "name", label: "Document Name" },
    { id: "datee", label: "Upload Date" },
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
  const stylee = {
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
    // Setnextvalue(false);
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
    
  }
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
      <div>
            <Modal
              open={closeticket}
              onClose={handleClosefilter}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={stylee}>
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
                                              // onChange={(e) => {
                                              //   handleChange(e);
                                              //   handleTxtChange(e);
                                              // }}
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
            <Modal
              open={addclaim}
              onClose={handleClosefilter}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={stylee}>
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
              Add Claim 
                    </Typography>
                  </div>
                  <div>
                    <Stack spacing={2} direction="row">
                      <CloseIcon
                        onClick={() => handleClose()}
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
                                              // onChange={(e) => {
                                              //   handleChange(e);
                                              //   handleTxtChange(e);
                                              // }}
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
      </div>
    </div>

  );
};

export default Expensedetail;
