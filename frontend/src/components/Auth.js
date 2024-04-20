import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Auth(props) {
  const [showSignIn, setShowSignIn] = React.useState(true);
  const [showSignUp, setShowSignUp] = React.useState(false);
  const [showForgetPassword, setShowForgetPassword] = React.useState(false);

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box width={'500px'} sx={{ padding: 5 }}>
      {/* Sign In */}
      {showSignIn ? (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Typography variant="h5" color={'primary'}>
            Sign in
          </Typography>
          <TextField
            color="secondary"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
          <TextField
            color="secondary"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="secondary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              '&:hover': {
                backgroundColor: 'common.white',
                color: 'common.black',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'secondary.main',
              },
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'common.black',
              backgroundColor: 'common.black',
              mt: 3,
              mb: 2,
            }}
          >
            Sign In
          </Button>
          <Box
            display={'flex'}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Typography
              onClick={() => {
                setShowSignIn(false);
                setShowSignUp(false);
                setShowForgetPassword(true);
              }}
              component="div"
              variant="body2"
              color={'secondary'}
              mx={1}
              sx={{ cursor: 'pointer' }}
            >
              Forgot password?
            </Typography>
            <Typography component="div" variant="body2" color={'primary'}>
              {"Don't have an account?"}
              <Typography
                sx={{ cursor: 'pointer' }}
                onClick={() => {
                  setShowSignIn(false);
                  setShowForgetPassword(false);
                  setShowSignUp(true);
                }}
                component="span"
                variant="body2"
                color={'secondary'}
                mx={1}
              >
                Signup
              </Typography>
            </Typography>
          </Box>
        </Box>
      ) : null}
      {/* Sign Up */}
      {showSignUp ? (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Typography variant="h5" color={'primary'}>
            Sign up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              color="secondary"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
            />
            <TextField
              color="secondary"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              color="secondary"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                '&:hover': {
                  backgroundColor: 'common.white',
                  color: 'common.black',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: 'secondary.main',
                },
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'common.black',
                backgroundColor: 'common.black',
                mt: 3,
                mb: 2,
              }}
            >
              Sign Up
            </Button>
          </Box>
          <Typography variant="body2" color={'primary'}>
            Already have an account?
            <Typography
              onClick={() => {
                setShowSignUp(false);
                setShowForgetPassword(false);
                setShowSignIn(true);
              }}
              component="span"
              variant="body2"
              color={'secondary'}
              mx={1}
            >
              Login
            </Typography>
          </Typography>
        </Box>
      ) : null}
      {/* Forget Password */}
      {showForgetPassword ? (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Typography variant="h5" color={'primary'}>
            Password Reset
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              color="secondary"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                '&:hover': {
                  backgroundColor: 'common.white',
                  color: 'common.black',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: 'secondary.main',
                },
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'common.black',
                backgroundColor: 'common.black',
                mt: 3,
                mb: 2,
              }}
            >
              Send Link
            </Button>
          </Box>
          <Typography variant="body2" color={'primary'}>
            Already have an account?
            <Typography
              onClick={() => {
                setShowSignUp(false);
                setShowForgetPassword(false);
                setShowSignIn(true);
              }}
              component="span"
              variant="body2"
              color={'secondary'}
              mx={1}
            >
              Login
            </Typography>
          </Typography>
        </Box>
      ) : null}
    </Box>
  );
}
