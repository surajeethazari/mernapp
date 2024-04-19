import React from 'react';
import { useNavigate, NavLink, Link } from 'react-router-dom';
import BreadCrumbs from '../components/BreadCrumbs';
import Constants from '../utils/Constants';
import {
  Box,
  Button,
  CardMedia,
  Container,
  Divider,
  IconButton,
  Pagination,
  PaginationItem,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Email from '@mui/icons-material/Email';
import { data } from '../assets/data/featuredCollection';
import MyAcccountSidePanel from '../components/MyAcccountSidePanel';
import PageTransition from '../utils/PageTransition';

export default function MyAddress() {
  const navigate = useNavigate();
  let crumbs = [
    { name: 'Home', trigger: '/', active: true },
    { name: 'My Address', trigger: '/address', active: false },
  ];

  return (
    <Box>
      <Box
        display="flex"
        flexDirection={'column'}
        sx={{
          width: '100%',
          padding: 2,
          boxShadow: 3,
        }}
      >
        <Typography
          color={'primary.dark'}
          variant="h5"
          component="div"
          sx={{ fontWeight: '400' }}
        >
          {'Default Address'}
        </Typography>
        <Divider sx={{ marginTop: 1 }} />
        <Box
          width="100%"
          display="flex"
          flexDirection={'row'}
          justifyContent={'space-between'}
          sx={{ marginTop: 2 }}
        >
          <Box
            width="45%"
            display="flex"
            flexDirection={'column'}
            sx={{
              marginTop: 1,
              boxShadow: 2,
              padding: 2,
              borderWidth: 1,
              borderColor: 'secondary.main',
              borderStyle: 'solid',
            }}
          >
            <Typography
              color={'primary.dark'}
              variant="h5"
              component="div"
              sx={{ fontWeight: '400', marginLeft: 1, marginTop: '2px' }}
            >
              Default Billing Address
            </Typography>
            <Typography
              color={'primary.main'}
              variant="body2"
              component="div"
              sx={{ fontWeight: '400', marginLeft: 1, marginTop: '2px' }}
            >
              106, Chaklalpur,
              <br />
              Radhamohanpur,
              <br />
              West Midnapore, West Bengal - 721160
              <br />
              Phone: +91 8900162177
            </Typography>
          </Box>
          <Box
            width="45%"
            display="flex"
            flexDirection={'column'}
            sx={{
              marginTop: 1,
              boxShadow: 2,
              padding: 2,
              borderWidth: 1,
              borderColor: 'secondary.main',
              borderStyle: 'solid',
            }}
          >
            <Typography
              color={'primary.dark'}
              variant="h5"
              component="div"
              sx={{ fontWeight: '400', marginLeft: 1, marginTop: '2px' }}
            >
              Default Shipping Address
            </Typography>
            <Typography
              color={'primary.main'}
              variant="body2"
              component="div"
              sx={{ fontWeight: '400', marginLeft: 1, marginTop: '2px' }}
            >
              106, Chaklalpur,
              <br />
              Radhamohanpur,
              <br />
              West Midnapore, West Bengal - 721160
              <br />
              Phone: +91 8900162177
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection={'column'}
        sx={{
          width: '100%',
          padding: 2,
          marginTop: 3,
          boxShadow: 3,
        }}
      >
        <Typography
          color={'primary.dark'}
          variant="h5"
          component="div"
          sx={{ fontWeight: '400' }}
        >
          {Constants.additionalAddressText}
        </Typography>
        <Divider sx={{ marginTop: 1 }} />
        <Typography
          color={'primary.main'}
          component="div"
          sx={{
            fontWeight: '400',
            marginLeft: 1,
            marginTop: '5px',
            fontSize: '20px',
          }}
        >
          You have no other address entries in your address book.
        </Typography>
      </Box>
      <Button
        type="submit"
        variant="contained"
        sx={{
          padding: 2,
          marginTop: 3,
          marginBottom: '100px',
          width: '250px',
          '&:hover': {
            backgroundColor: 'primary.dark',
            color: 'common.white',
          },
          backgroundColor: 'secondary.main',
          color: 'appmain.dark',
        }}
      >
        Add New Address
      </Button>
    </Box>
  );
}
