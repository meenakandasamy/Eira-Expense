import React from 'react';
import { Breadcrumbs, Typography, useTheme } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import { useNavigate } from 'react-router-dom';

const CustomBreadcrumbs = ({
  paths,
  separatorSize = 'small',
  fontSize = 'inherit',
}) => {
  const navigate = useNavigate();

  const theme = useTheme();
  const colorMode = theme.palette.mode;
  const isLightMode = colorMode === 'light';

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Breadcrumbs
      style={{ marginLeft: '8px' }}
      separator={<NavigateNextIcon sx={{ fontSize: separatorSize }} />}
      aria-label="breadcrumb"
    >
      {paths.map((item, index) => (
        <React.Fragment key={index}>
          {item.label === 'Home' ? (
            <Typography
              color="inherit"
              onClick={() => handleNavigation(item.path)}
              sx={{
                cursor: 'pointer',
                fontSize: fontSize,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <HomeIcon
                sx={{
                  fontSize: '20px',
                  verticalAlign: 'middle',
                  transition: 'font-size 0.2s ease',
                  '&:hover': {
                    color: 'blue',
                  },
                }}
              />
            </Typography>
          ) : item.label === 'Admin' ? (
            <Typography
              color="inherit"
              onClick={() => handleNavigation(item.path)}
              sx={{
                cursor: 'pointer',
                fontSize: fontSize,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <AdminPanelSettingsOutlinedIcon
                sx={{
                  fontSize: '20px',
                  verticalAlign: 'middle',
                  transition: 'font-size 0.2s ease',
                  '&:hover': {
                    color: 'blue',
                  },
                }}
              />
            </Typography>
          ) : (
            <Typography
              color="inherit"
              onClick={() => {
                if (index !== paths.length - 1) {
                  handleNavigation(item.path);
                }
              }}
              className={
                index === paths.length - 1 ? 'none' : 'underline-animation'
              }
              sx={{
                cursor: index !== paths.length - 1 ? 'pointer' : 'default',
                fontSize: fontSize,
                color:
                  index === paths.length - 1
                    ? isLightMode
                      ? 'blue'
                      : '#00c4ff'
                    : 'inherit',
              }}
            >
              {item.label}
            </Typography>
          )}
        </React.Fragment>
      ))}
    </Breadcrumbs>
  );
};

export default CustomBreadcrumbs;
