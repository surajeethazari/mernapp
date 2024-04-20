import {
  Box,
  Button,
  Container,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import BreadCrumbs from '../components/BreadCrumbs';
import PageTransition from '../utils/PageTransition';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Contact() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  let crumbs = [
    { name: 'Home', trigger: '/', active: true },
    { name: 'Contact Us', trigger: '/contact', active: false },
  ];
  return (
    <PageTransition>
      <Container maxWidth="xl">
        <Box
          alignItems={'center'}
          flexDirection={'column'}
          display={'flex'}
          mb={2}
          sx={{ marginTop: 12 }}
        >
          <BreadCrumbs crumbs={crumbs} />
        </Box>
        <Box
          width={'100%'}
          justifyContent={'space-between'}
          display="flex"
          sx={{
            marginTop: 5,
            flexDirection: { xs: 'column', md: 'row' },
            marginBottom: 5,
          }}
        >
          <Box
            display="flex"
            flexDirection={'column'}
            sx={{
              width: { xs: '100%', md: '48%' },
              marginBottom: '60px',
              marginTop: { xs: '50px', md: 0 },
            }}
          >
            <Typography
              color={'primary.main'}
              variant="h4"
              component="div"
              sx={{ fontWeight: 'bold' }}
            >
              Contact Form
            </Typography>
            <TextField
              color="secondary"
              margin="normal"
              required
              fullWidth
              name="name"
              label="Name"
              id="name"
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
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={4}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                '&:hover': {
                  backgroundColor: 'secondary.main',
                },
                marginTop: 5,
              }}
            >
              Submit
            </Button>
          </Box>
          <Box
            display="flex"
            flexDirection={'column'}
            sx={{ width: { xs: '100%', md: '48%' } }}
          >
            <Typography
              color={'primary.main'}
              variant="h4"
              component="div"
              sx={{ fontWeight: 'bold' }}
            >
              Contact information
            </Typography>
            <Typography
              color={'primary.main'}
              variant="h6"
              component="div"
              sx={{ fontWeight: 'normal', marginTop: 2 }}
            >
              We love to hear from you on our customer service, merchandise,
              website or any topics you want to share with us. Your comments and
              suggestions will be appreciated. Please complete the form below.
              <br />
              <br />
              106, chaklalpur, radhamohanpur, west midnapore, west bengal, pin -
              721160
              <br />
              Phone: +91-8900162177
              <br />
              Mail ID: sonanlifashioninfo@gmail.com
              <br />
              Monday to Saturday 11:00 AM - 6:00 PM
            </Typography>
          </Box>
        </Box>
      </Container>
    </PageTransition>
  );
}
