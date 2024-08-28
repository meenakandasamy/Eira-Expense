import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  Box,
  Paper,
  Button,
  Popper,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  MenuList,
  AppBar,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import LogoutIcon from "@mui/icons-material/Logout";
import eiraa from "../../image/logo.jpg";

const StyledIconButton = styled(IconButton)(({ theme, active }) => ({
  color: active ? theme.palette.primary.main : "rgb(181, 181, 181)",
}));

export default function PrimarySearchAppBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleLogout = () => {
    navigate("/");
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: "white", height: "70px" }}>
        <Toolbar>
          <img alt="eiralogo" src={eiraa} style={{ width: "160px" }} />
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            {[
              { label: "Claim Apply", path: "/menu/claim-apply" },
              { label: "Approved Claim", path: "/menu/approved-claim" },
              { label: "Claim Details", path: "/menu/claim-detail" },
            ].map((item) => (
              <StyledIconButton
                key={item.label}
                component={Link}
                to={item.path}
                size="large"
                active={location.pathname === item.path}
              >
                <Typography sx={{ fontSize: '14px' }}>{item.label}</Typography>
              </StyledIconButton>
            ))}

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              sx={{ color: "rgb(181, 181, 181)" }}
            >
              <AccountCircle />
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls="primary-search-account-menu-mobile"
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>

          <Popper open={isMenuOpen} anchorEl={anchorEl} style={{ zIndex: 110 }}>
            <Paper sx={{ marginRight: "10px", marginTop: "6%" }} elevation={5}>
              <MenuList autoFocusItem={isMenuOpen} id="menu-list-grow">
                <MenuItem
                  sx={{
                    ml: 1,
                    "&.MuiButtonBase-root:hover": {
                      bgcolor: "transparent",
                    },
                    overflow: "hidden",
                  }}
                >
                  <Button
                    variant="text"
                    onClick={handleLogout}
                    style={{ textTransform: "capitalize" }}
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
    </Box>
  );
}
