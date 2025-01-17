import React from 'react';
import { useNavigate, NavLink, Link } from 'react-router-dom';
import BreadCrumbs from '../components/BreadCrumbs';
import Constants from '../utils/Constants';
import {
  Box,
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
import MyAcccountSidePanel from '../components/MyAcccountSidePanel';
import PageTransition from '../utils/PageTransition';

export default function AccountDetails() {
  const navigate = useNavigate();
  let crumbs = [
    { name: 'Home', trigger: '/', active: true },
    { name: 'My Account', trigger: '/userdetails', active: false },
  ];

  return (
    <Box>
      <Typography
        color={'primary.main'}
        variant="h5"
        component="div"
        sx={{ fontWeight: '400' }}
      >
        {Constants.accountDetailsText}
      </Typography>
      <Divider sx={{ marginTop: 1 }} />
      <Box display="flex" flexDirection={'row'} sx={{ marginTop: 2 }}>
        <IconButton
          size="medium"
          aria-label="search"
          color="inherit"
          sx={{ '&:hover': { color: 'secondary.main' } }}
        >
          <AccountCircle />
        </IconButton>
        <Typography
          color={'primary.main'}
          variant="h6"
          component="div"
          sx={{ fontWeight: '400', marginLeft: 1, marginTop: '2px' }}
        >
          Name
        </Typography>
      </Box>

      <Box display="flex" flexDirection={'row'} sx={{ marginTop: 1 }}>
        <IconButton
          size="medium"
          aria-label="search"
          color="inherit"
          sx={{ '&:hover': { color: 'secondary.main' } }}
        >
          <Email />
        </IconButton>
        <Typography
          color={'primary.main'}
          variant="h6"
          component="div"
          sx={{ fontWeight: '400', marginLeft: 1, marginTop: '2px' }}
        >
          sonanlifashioninfo@gmail.com
        </Typography>
      </Box>
    </Box>
  );
}
