import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import { Box, Paper, Button, MenuList, Popper, Toolbar, IconButton, Typography, MenuItem, Menu } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import eiraa from '../../image/logo.jpg';
import Expenseapply from "../Expense/Expenseapply";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

export default function PrimarySearchAppBar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showExpenseApply, setShowExpenseApply] = React.useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleLogout = () => {
    navigate('/');
  };
  
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleClaimApply = () => {
    setShowExpenseApply(true);
  };
  const handleClaimDatail = () => {
    setShowExpenseApply(false);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#365d9b', height: '70px' }}>
        <Toolbar>
          <img alt="eiralogo" src={eiraa} style={{ width: '160px' }} />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" color="inherit"onClick={handleClaimDatail}>
              <Typography style={{ width: "100%" }}>Claim Details</Typography>
            </IconButton>
            <IconButton size="large" color="inherit" onClick={handleClaimApply}>
              <Typography>Claim Apply</Typography>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" aria-label="show more" aria-controls="primary-search-account-menu-mobile" aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit">
              <MoreIcon />
            </IconButton>
          </Box>

          <Popper open={isMenuOpen} anchorEl={anchorEl} style={{ zIndex: 110 }}>
            <Paper sx={{ marginRight: '10px', marginTop: '6%' }} elevation={5}>
              <MenuList autoFocusItem={isMenuOpen} id="menu-list-grow">
                <MenuItem
                  sx={{
                    ml: 1,
                    '&.MuiButtonBase-root:hover': {
                      bgcolor: 'transparent',
                    },
                    overflow: 'hidden',
                  }}
                >
                  <Button
                    variant="text"
                    onClick={handleLogout}
                    style={{ textTransform: 'capitalize', color: 'red' }}
                    startIcon={<LogoutIcon />}
                  >
                    Log out
                  </Button>
                </MenuItem>
              </MenuList>
            </Paper>
          </Popper>
        </Toolbar>
      </AppBar>

    
      {showExpenseApply && (
        <Box sx={{ mt: 2, p: 3 }}>
          <Expenseapply />
        </Box>
      )}
    </Box>
  );
}
