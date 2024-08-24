import { useContext, useEffect, useRef, useState } from 'react';
import {
  Paper,
  Box,
  Typography,
  Button,
  TextField,
  Stack,
  Grid,
} from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
import eira from '../../image/headerLogo.png';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import './Loginpage.css';
import FadeLoader from 'react-spinners/FadeLoader';


/*------------------------------- APi calls -------------------------*/
import { PostLogin } from '../../Api/LoginApi';
import { PassEncrypt, encryptData } from '../../Util/Cipher';
// import {
//     UserContext,
//     UserContextProvider,
//     useUserContext,
//   } from './Auth/UserContext';
const Loginpage = () => {
    // const { setUserContextValue } = useContext(UserContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [Email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [Password, setPassword] = useState('');
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [open, setOpen] = useState(false);
  const [variantText, setVarient] = useState('info');
  const [textValue, setTextValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setEmailError(!isValidEmail(newEmail));
  };

  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };
  useEffect(() => {
    if (
      apiResponse &&
      apiResponse.data.isNewUser !== true &&
      apiResponse.status === 200
    ) {
      // window.location.href = "/webdyn/menu";
      // encryptData
      console.log(apiResponse.data.companyLogopath, 'http://localhost:3000/');
      sessionStorage.setItem('token', `${apiResponse.data.userName}`);
      sessionStorage.setItem('id', `${apiResponse.data.userId}`);
      sessionStorage.setItem('companyId', `${apiResponse.data.companyId}`);
      sessionStorage.setItem('jwtToken', `${apiResponse.data.accesstoken}`);
      sessionStorage.setItem('roleId', `${apiResponse.data.roleId}`);
      sessionStorage.setItem('email', `${apiResponse.data.emailId}`);
      sessionStorage.setItem('roleName', `${apiResponse.data.roleName}`);
      sessionStorage.setItem(
        'companyLogoPath',
        `${apiResponse.data.companyLogopath}`
      );

      sessionStorage.setItem(
        'roles',
        JSON.stringify(apiResponse.data.userMapDetails)
      );

      // console.log(apiResponse, "api");
      navigate('menu');
      window.location.reload();
      // window.location.href = '/menu';
    } else if (
      apiResponse &&
      apiResponse.data.isNewUser === true &&
      apiResponse.status === 200
    ) {
      sessionStorage.setItem('id', `${apiResponse.data.userId}`);
      navigate('/resetpass');
    }
  }, [apiResponse, navigate]);

  const setUserContext = (userData) => {
    console.log(userData);
    // setUserContextValue({
    //   user: userData.userName,
    //   userId: userData.userId,
    //   accessToken: userData.accessToken,
    //   email: userData.emailID,
    //   userMapDetails: userData.userMapDetails,
    // });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const alertStyle = {
    backgroundColor: 'red', // Background color
    color: 'white', // Text color
    '& .MuiSvgIcon-root': {
      color: 'white', // Icon color
    },
  };
  const handleNavigate = async () => {
    navigate('menu');
  }
//   const handleNavigate = async (event) => {
//     const result = PassEncrypt(Password);

//     let data = {
//       email: Email.toLowerCase(),
//       password: result,
//     };

//     // console.log(data);
//     // const decryptedText = CryptoJS.AES.decrypt(
//     //   result,
//     //   CryptoJS.enc.Utf8.parse(process.env.REACT_APP_ENCRYPT_KEY),
//     //   {
//     //     iv: CryptoJS.enc.Utf8.parse(process.env.REACT_APP_ENCRYPT_IV),
//     //     mode: CryptoJS.mode.CFB,
//     //     padding: CryptoJS.pad.NoPadding,
//     //   }
//     // );
//     // const decryptedBytes = decryptedText.toString(CryptoJS.enc.Utf8);
//     // console.log(decryptedBytes);
//     // let data = {
//     //   email: Email,
//     //   password: Password,
//     // };
//     try {
//       setLoading(true);
//       let responsedata = await PostLogin(data); // Assuming PostLogin is defined and works
//       setApiResponse(responsedata); // Store the API response
//       console.log(responsedata, 'responsedata');
//       if (responsedata && responsedata.status === 200) {
//         setUserContext({
//           userName: responsedata.data.userName,
//           userId: responsedata.data.userId,
//           companyLogopath: responsedata.data.companyLogopath,
//           accessToken: responsedata.data.accesstoken,
//           emailID: responsedata.data.emailId,
//           userMapDetails: responsedata.data.userMapDetails,
//         });
//       }
//     } catch (error) {
//       if (error.response && error.response.status === 406) {
//         setOpen(true);
//         setVarient('warning');
//         setTextValue('Invalid Password');
//       } else if (error.response && error.response.status === 404) {
//         setOpen(true);
//         setVarient('error');
//         setTextValue('Sorry! Your mailId is not with us. Kindly Register!');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

  const handleEnterKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleNavigate();
    }
  };

  const handleNextfield = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      passwordRef.current.focus();
    }
  };

  const passwordRef = useRef(null);

  const handleChange = (e) => {
    setEmail(e.target.value);
    handleEmailChange();
  };
  return (
    <div className="scroll-lock">
      <div className="main-log no-scroll">
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <FadeLoader color="#000440" loading={true} />
          </div>
        ) : (
          <>
            <div className="background-image-container"></div>
            <div className="overlay"></div>
            <Box
              sx={{
                margin: '0 auto 0 auto',
                height: 'max-content',
                boxSizing: 'border-box',
                width: 'max-content',
              }}
            >
              <Paper
                elevation={5}
                style={{
                  padding: '10px 30px 10px 30px',
                  boxSizing: 'border-box',
                }}
              >
                <div className="main">
                  <div className="eira-logo">
                    <img alt="eiralogo" src={eira} style={{ width: '120px' }} />
                  </div>
                  <Typography
                    style={{
                      fontSize: '26px',
                      textAlign: 'center',
                      fontWeight: '550',
                      color: '#5b5e5c',
                      margin: '20px 0 0 0',
                      padding: '0',
                      letterSpacing: '0.5px',
                    }}
                  >
                    Welcome to
                  </Typography>
                  <Typography
                    style={{
                      textAlign: 'center',
                      margin: '0px 0 0 0',
                      fontSize: '26px',
                      fontWeight: '550',
                      color: '#5b5e5c',
                      padding: '0',
                      letterSpacing: '0.5px',
                    }}
                  >
                    Centralised Web Portal!{' '}
                  </Typography>
                  <Typography
                    style={{
                      margin: '30px 0 0 0',
                      color: '#6c756f',
                      textAlign: 'left',
                      padding: '0',
                      letterSpacing: '0.5px',
                    }}
                  >
                    Please sign-in to your account
                  </Typography>
                  <div className="mail-pass">
                    <TextField
                      id="outlined-basic"
                      placeholder="Email"
                      onChange={(e) => handleEmailChange(e)}
                      error={emailError}
                      onKeyDown={handleNextfield}
                      helperText={
                        emailError ? (
                          <span style={{ color: '#ff0f0f' }}>
                            Please enter a valid email address
                          </span>
                        ) : (
                          ''
                        )
                      }
                      variant="outlined"
                      style={{
                        borderRadius: '9PX',
                        hight: '10px',
                        width: '100%',
                        marginTop: '5px',
                      }}
                    />
                    {/* <FormControl sx={{ m: 3, width: '38ch', borderRadius: "90px", }} variant="outlined"> */}
                    <OutlinedInput
                      sx={{ width: '100%', margin: '20px 0 0 0' }}
                      onKeyDown={handleEnterKeyPress}
                      inputRef={passwordRef}
                      id="outlined-adornment-password"
                      type={showPassword ? 'text' : 'password'}
                      onChange={(m) => setPassword(m.target.value)}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-placeholder="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      placeholder="Password"
                    />
                    {/* </FormControl> */}
                  </div>
                  <Stack direction="row" justifyContent="space-around">
                    {/* <Link href="forgot" variant="body2" className="link-signup">
                      Forgot Password?
                    </Link> */}
                    <Link
                      style={{ marginLeft: '25%' }}
                      href="signup"
                      variant="body2"
                      className="link-signup"
                    >
                      Don't have an account? Sign up
                    </Link>
                  </Stack>
                  <Button
                    variant="contained"
                    sx={{
                      fontSize: '26px',
                      width: '100%',
                      backgroundColor: '#000440',
                      margin: '20px 0 20px 0',
                      height: '45px',
                      letterSpacing: '0.5px',
                      textTransform: 'capitalize',
                      borderRadius: '20px 20px 20px 20px',
                      ':hover': {
                        backgroundColor: '#FFFFFF', // Change background color on hover
                        color: '#000440', // Change text color on hover
                      },
                    }}
                    onClick={handleNavigate}
                  >
                    Login
                  </Button>
                  {/* )} */}
                  {/* </Stack>
                                </div> */}
                </div>
                <div>
                  <Snackbar
                    open={open}
                    autoHideDuration={3000}
                    onClose={handleClose}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  >
                    <Alert
                      onClose={handleClose}
                      severity={variantText}
                      sx={{ width: '100%', ...alertStyle }}
                    >
                      {textValue}
                    </Alert>
                  </Snackbar>
                </div>
              </Paper>
            </Box>
          </>
        )}
      </div>
    </div>
  );
};
export default Loginpage;
