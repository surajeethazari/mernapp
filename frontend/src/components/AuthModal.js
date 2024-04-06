import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  Fade,
  FormControlLabel,
  Grid,
  IconButton,
  Modal,
  TextField,
  Typography,
} from '@mui/material';
import CloseRounded from '@mui/icons-material/CloseRounded';
import { useNavigate } from 'react-router-dom';

export default function AuthModal(props) {
  const [open, setOpen] = React.useState(false);
  const [openForgotPassword, setOpenForgotPassword] = React.useState(false);
  const navigate = useNavigate();
  const [openSignUp, setOpenSignUp] = React.useState(false);
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
    <Modal
      open={props.openModal}
      onClose={() => props.onCloseModal}
      aria-labelledby="Sign Up"
      aria-describedby="Sign Up"
      closeAfterTransition
      slotProps={{
        backdrop: {
          TransitionComponent: Fade,
        },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          height: 400,
          width: 500,
          bgcolor: 'common.white',
          boxShadow: 24,
          p: 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <IconButton
          onClick={props.onCloseModal}
          sx={{ position: 'absolute', right: 5, top: 5 }}
          size="large"
          aria-label="search"
          color="primary.dark"
        >
          <CloseRounded />
        </IconButton>
        <Typography variant="h5" color={'primary'}>
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
          <Grid container>
            <Grid item xs>
              <React.Fragment>
                <Typography
                  onClick={() => {
                    setOpenForgotPassword(true);
                  }}
                  component="span"
                  variant="body2"
                  color={'secondary'}
                  mx={1}
                >
                  Forgot password?
                </Typography>
                <Modal
                  open={openForgotPassword}
                  onClose={() => setOpenForgotPassword(false)}
                  aria-labelledby="child-modal-title"
                  aria-describedby="child-modal-description"
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      height: 400,
                      width: 500,
                      bgcolor: 'common.white',
                      boxShadow: 24,
                      p: 5,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                    }}
                  >
                    <IconButton
                      onClick={() => {
                        setOpenForgotPassword(false);
                        props.onCloseModal();
                      }}
                      sx={{ position: 'absolute', right: 5, top: 5 }}
                      size="large"
                      aria-label="search"
                      color="primary.dark"
                    >
                      <CloseRounded />
                    </IconButton>
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
                  </Box>
                </Modal>
              </React.Fragment>
            </Grid>
            <Grid item>
              <Typography variant="body2" color={'primary'}>
                {"Don't have an account?"}
                <React.Fragment>
                  <Typography
                    onClick={() => {
                      setOpenSignUp(true);
                    }}
                    component="span"
                    variant="body2"
                    color={'secondary'}
                    mx={1}
                  >
                    Signup
                  </Typography>
                  <Modal
                    open={openSignUp}
                    onClose={() => setOpenSignUp(false)}
                    aria-labelledby="child-modal-title"
                    aria-describedby="child-modal-description"
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        height: 400,
                        width: 500,
                        bgcolor: 'common.white',
                        boxShadow: 24,
                        p: 5,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                      }}
                    >
                      <IconButton
                        onClick={() => {
                          setOpenSignUp(false);
                          props.onCloseModal();
                        }}
                        sx={{
                          position: 'absolute',
                          right: 5,
                          top: 5,
                        }}
                        size="large"
                        aria-label="search"
                        color="primary.dark"
                      >
                        <CloseRounded />
                      </IconButton>
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
                            setOpenSignUp(false);
                            props.onCloseModal();
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
                  </Modal>
                </React.Fragment>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Modal>
  );
}
