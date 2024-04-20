import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {
  Checkbox,
  Container,
  FormControlLabel,
  IconButton,
} from '@mui/material';

export default function CreatePassword(props) {
  let crumbs = [
    { name: 'Home', trigger: '/', active: true },
    { name: 'Change Password', trigger: '/createPas', active: false },
  ];
  const [open, setOpen] = React.useState(false);
  const [hideCreatePasswrdControl, setHideCreatePasswrdControl] =
    React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
    });
  };

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          bgcolor: 'common.white',
          boxShadow: 2,
          p: 5,
          marginTop: '120px',
          marginBottom: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography
          display={hideCreatePasswrdControl ? 'none' : 'block'}
          variant="h4"
          color={'primary'}
        >
          Create a New Password
        </Typography>
        <Box
          display={hideCreatePasswrdControl ? 'none' : 'block'}
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
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <TextField
            color="secondary"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Confirm Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="show" color="primary" />}
            label="Show Password"
          />
          <Button
            onClick={() => setHideCreatePasswrdControl(true)}
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              '&:hover': {
                backgroundColor: 'primary.main',
              },
              mt: 2,
              mb: 2,
              backgroundColor: 'secondary.main',
            }}
          >
            Set a New Password
          </Button>
        </Box>
        <Typography
          display={!hideCreatePasswrdControl ? 'none' : 'block'}
          variant="h4"
          color={'primary'}
          sx={{ mt: 2 }}
        >
          Password got changed...
        </Typography>
        <Box
          display={!hideCreatePasswrdControl ? 'none' : 'block'}
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 2 }}
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
        </Box>
      </Box>
    </Container>
  );
}
