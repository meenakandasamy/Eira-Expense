import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Pagination,
  Box,
  InputBase,
  TableSortLabel,
  Grid,
  Stack,
  TextField,
  Button,
  Autocomplete,
  Divider,
  Tooltip,
  InputAdornment,
  
} from '@mui/material';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CustomBreadcrumbs from "../Util/Components/CustomBread"
import IconButton from '@mui/material/IconButton';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined'
const TableTemplate = (
  { data, columns,fallbackText,
    handleAddPopupOpen,
    PageName, 
     paths,
     addButton,SearchLabel,handlefilterPopupOpen}) => {

  
  const [page, setPage] = useState(0);
  const rowsPerPage = 10; 
  const [searchInput, setSearchInput] = useState('');
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('alerts');
  const [pageValue, setPageValue] = useState('');
  const [rowsPerPageOption, setRowsPerPageOption] = useState(rowsPerPage);

  const handleChangePage = (event, value) => {
    setPage(value - 1);
  };
  const toolStyle = {
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 10],
        },
      },
    ],
  };
  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const sortedData = [...data].sort((a, b) => {
    if (a[orderBy] < b[orderBy]) {
      return order === 'asc' ? -1 : 1;
    }
    if (a[orderBy] > b[orderBy]) {
      return order === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const handleChangeRowsPerPage = (event, newValue) => {
    setRowsPerPageOption(newValue);
    setPage(0); // Reset to first page
  };

  const handleAdd = () => {
    handleAddPopupOpen(true);
  };
  const handlefilter = () => {
    handlefilterPopupOpen(true);
  };
  const canAdd = PageName !== 'Equipment  History';
  return (
<div>
  <div>              <Box
                style={{ display: 'flex', alignItems: 'center', width: '100%',marginTop:"-1%" }}
              >
                <Paper
                  elevation={0}
                  style={{
                    width: '101%',
                    borderRadius: '2px 2px 0px 0px',
                    userSelect: 'none',
                    height: '5vh',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Grid
                    container
                    spacing={3}
                    justifyContent="space-between"
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    <Grid
                      item
                      xs={PageName === 'Site List' ? 3 : 4}
                      style={{ display: 'flex', alignItems: 'center' }}
                    >
                   
                  {/* <Typography
                    style={{
                      fontSize: '20px',
                      fontWeight: '500',
                      lineHeight: '16px',
                      // marginLeft: !disabledBack ? '1vw' : null,
                      userSelect: 'none',
                    }}
                  >
                    {PageName}
                  </Typography>  */}
                    <CustomBreadcrumbs
                        paths={paths || []}
                        separatorSize="18px"
                        fontSize="14px"
                      />
                  </Grid>

                  <div>
                              {addButton  ? (
                                <Tooltip
                                  title={`Add ${addButton}`}
                                  userSelect="none"
                                  followCursor
                                  PopperProps={toolStyle}
                                >
                                  <IconButton
                                    variant="contained"
                                 
                                    onClick={() => {
                                      handleAdd();
                                    }}
                                    style={{
                                      textTransform: 'capitalize',
                                      color: 'white',
                                      padding: '0',
                                      // backgroundColor: "#1C243C",
                                      borderRadius: '20px 20px 20px 20px',
                                    }}
                                    sx={{
                                      '&:hover': {
                                        backgroundColor: 'transparent',
                                      },
                                    }}
                                  >
                                    <AddCircleOutlineSharpIcon
                                      style={{
                                        // color:
                                        //   userRole?.create == 1
                                        //     ? '#004AFF'
                                        //     : 'rgba(0, 0, 0, 0.26)',
                                        // fontSize: '20px',
                                        // backgroundColor:
                                        //   userRole?.create == 1
                                        //     ? 'none'
                                        //     : 'transparent',
                                      }}
                                    />
                                  </IconButton>
                                </Tooltip>
                              ) : null}
                            </div>
                  </Grid>

                </Paper>
              </Box>
              </div>

              <div>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                      mr: 0,
                      mb: 1,
                      mt: 2,
                      borderRadius: 0,
                      width: '101%',
                      height: '4.8vh',
                    },
                  }}
                >
                  <Paper
                    elevation={0}
                    style={{
                      width: '101%',
                      borderRadius: '2px 2px 0px 0px',
                      // backgroundColor: "#F2F2F2",
                      userSelect: 'none',
                    }}
                    component="div"
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '0.25%',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-around',
                        }}
                      >
                      
                      <div style={{ marginRight: '5vw' }}>
                            <InputBase
                              size="small"
                              className="cus-search"
                              placeholder={SearchLabel}
                              variant="outlined"
                              startAdornment={
                                <InputAdornment
                                  position="start"
                                  style={{ width: '40px' }}
                                >
                                  <IconButton>
                                    <SearchOutlinedIcon
                                      style={{ color: '#9EA4AE' }}
                                    />
                                  </IconButton>
                                </InputAdornment>
                              }
                              style={{
                                width: '240px',
                                height: '30px',
                                backgroundColor:
                                 '#F7F8F9' ,
                                borderRadius: '8px',
                                fontSize: 'small',
                                marginLeft: '1vw',
                                marginRight: '5vw',
                                marginTop: '-0.75%',
                                borderColor: 'transparent',
                              }}
                              value={searchInput}
                              onChange={(e) => setSearchInput(e.target.value)}
                            />
                          </div>
                     
                      
                      </div>

                      <div style={{ marginRight: '0.5%' }}>
                        <Stack direction="row" spacing={2}>
                        
                       
                        
                          <div>
                              <Tooltip
                                title=" Filter Data"
                                userSelect="none"
                                followCursor
                                PopperProps={toolStyle}
                              >
                                <IconButton
                                  variant="text"
                                  onClick={() => {
                                    handlefilter();
                                  }}
                                
                                  style={{
                                    textTransform: 'capitalize',
                                    color: 'white',
                                    padding: '0',
                                    borderRadius: '20px 20px 20px 20px',
                                  }}
                                  sx={{
                                    '&:hover': {
                                      backgroundColor: 'transparent',
                                    },
                                  }}
                                >
                                  <FilterAltOutlinedIcon
                                    style={{
                                      color: '#004AFF',
                                      fontSize: '20px',
                                    }}
                                  />
                                </IconButton>
                              </Tooltip>
                            </div>
                            <div>
                              {addButton && canAdd ? (
                                <Tooltip
                                  title={`Add ${addButton}`}
                                  userSelect="none"
                                  followCursor
                                  PopperProps={toolStyle}
                                >
                                  <IconButton
                                    variant="contained"
                                 
                                    onClick={() => {
                                      handleAdd();
                                    }}
                                    style={{
                                      textTransform: 'capitalize',
                                      color: 'white',
                                      padding: '0',
                                      // backgroundColor: "#1C243C",
                                      borderRadius: '20px 20px 20px 20px',
                                    }}
                                    sx={{
                                      '&:hover': {
                                        backgroundColor: 'transparent',
                                      },
                                    }}
                                  >
                                    <AddCircleOutlineSharpIcon
                                      style={{
                                        color:
                                      
                                             '#004AFF',
                                         
                                        fontSize: '20px',
                                        // backgroundColor:
                                        //   userRole?.create == 1
                                        //     ? 'none'
                                        //     : 'transparent',
                                      }}
                                    />
                                  </IconButton>
                                </Tooltip>
                              ) : null}
                            </div>
                   
                        
                 
                       
                       
                        
               
                        
                  

                       
                        </Stack>
                      </div>
                    </div>
                  </Paper>
                </Box>
              </div>
  <div style={{marginTop:"0.5%"}}>
  <Box

  >
    <Box
   
    >
      <Paper
        sx={{ mb: 1, width: '100%' }}
        style={{ userSelect: 'none' }}
        elevation={0}
      >
        {data.length > 0 ? (
          <div>
            <TableContainer
              sx={{
                height: '65vh', 
                overflowx: 'auto', 
                scrollBehavior: 'smooth',
                scrollbarGutter: 'stable',
                scrollbarWidth: 'thin',
                '&::-webkit-scrollbar': {
                  width: '0.4em',
                },
                '&::-webkit-scrollbar-track': {
                  background: '#f1f1f1',
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: '#888',
                  borderRadius: '20px',
                },
                '&::-webkit-scrollbar-thumb:hover': {
                  background: '#555',
                },
              }}
            >
              <Table aria-label="dense table">
                <TableHead
                  style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 100,
                  }}
                >
                  <TableRow>
                    {columns?.map((headCell) => (
                      <TableCell
                        key={headCell.id}
                        align="center"
                        style={{
                          lineHeight: '14.52px',
                          fontSize: '12px',
                          borderBottom: 'transparent',
                          paddingRight: '0',
                          flex: 1,
                          color: "gray"
                        }}
                       
                        sortDirection={orderBy === headCell.id ? order : false}
                      >
                        <TableSortLabel
                          active={orderBy === headCell.id}
                          direction={orderBy === headCell.id ? order : 'asc'}
                          onClick={() => handleRequestSort(headCell.id)}
                        >
                          {headCell.label}
                          {orderBy === headCell.id ? (
                            <Box component="span">
                              {order === 'desc' ? '' : ''}
                            </Box>
                          ) : null}
                        </TableSortLabel>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {sortedData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => (
                      <TableRow key={index}>
                        {columns.map((column) => (
                          <TableCell align="center" key={column.id}>
                            {row[column.id]} {/* Change column.field to column.id */}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
           
          </div>
        ) : (
          <Typography align="center" variant="h6" style={{ marginTop: '20px', color: "rgb(113, 118, 111)" }}>
            {fallbackText}
          </Typography>
        )}
      </Paper>
      <Paper component="div" elevation={0} style={{
              display: 'flex',
              // width: '100%',
              // padding: '8px 16px',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: '4px',
              userSelect: 'none',
              marginTop:"1%",
              height: '4.8vh',
            }}>
              <Grid container direction="row" justifyContent="space-between">
                <Grid item xs={2}></Grid>
                <Grid item xs={10} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                }}>
                  <Stack spacing={2} direction="row">
                    <Pagination
                      count={Math.ceil(data.length / rowsPerPageOption)}
                      page={page + 1}
                      onChange={handleChangePage}
                      shape="rounded"
                      color="primary"
                    />
                    <Divider orientation="vertical" flexItem style={{ height: '30px', marginRight: '16px' }} />
                  </Stack>
                  <Stack direction="row" style={{ alignItems: 'center', marginLeft: '1%' }}>
                    <Typography style={{ fontSize: '12px', lineHeight: '14.52px' }}>Go to page</Typography>
                    <TextField
                      variant="standard"
                      style={{ width: '24px', marginLeft: '5px' }}
                      value={pageValue !== '' ? pageValue : ''}
                      onChange={(e) => {
                        const newValue = e.target.value;
                        if (newValue !== '0') {
                          setPageValue(newValue);
                        }
                      }}
                    />
                    <Button
                      onClick={() => {
                        const newPage = Number(pageValue) - 1;
                        if (newPage >= 0 && newPage < Math.ceil(data.length / rowsPerPageOption)) {
                          setPage(newPage);
                          setPageValue('');
                        }
                      }}
                      endIcon={<ArrowForwardIcon style={{ fontSize: '16px' }} />}
                    >
                      GO
                    </Button>
                    <Autocomplete
                      disablePortal
                      size="small"
                      options={[10, 15, 20].map(value => ({ label: value, value }))}
                      style={{ marginLeft: '10px', marginRight: '30px' }}
                      onChange={(event, newValue) => {
                        if (newValue) {
                          handleChangeRowsPerPage(event, newValue.value);
                        }
                      }}
                      renderInput={(params) => (
                        <TextField {...params} variant="standard" />
                      )}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Paper>
    </Box>
  </Box>
  </div>
</div>

  );
};

export default TableTemplate;
