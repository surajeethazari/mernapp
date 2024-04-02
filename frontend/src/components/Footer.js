import { Typography, Container, Box, Divider, InputBase } from '@mui/material';
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { styled, alpha } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import visa from '../assets/images/visa.png';
import master from '../assets/images/master.png';
import rupay from '../assets/images/rupay.png';
import phonepay from '../assets/images/phonepay.png';
import gpay from '../assets/images/gpay.png';
import amazonpay from '../assets/images/amazonpay.png';
import { useTheme } from '@mui/material/styles';
import React, { Component } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.common.white,
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
  },
}));

export default function Footer() {
  const theme = useTheme();
  const location = useLocation();

  return (
    <div>
      <Box
        display="flex"
        flexDirection={'column'}
        sx={{
          width: '100%',
          backgroundColor: '#222',
        }}
      >
        <Box
          display="flex"
          flexDirection={'row'}
          justifyContent={'space-between'}
          p={4}
          sx={{ flexDirection: { xs: 'column', md: 'row' } }}
        >
          <Box display="flex" width={300} flexDirection={'column'}>
            <Typography variant="h4" color="common.white">
              Contact Us
            </Typography>
            <Box display="flex" flexDirection={'row'} sx={{ marginTop: 1 }}>
              <WhereToVoteIcon sx={{ color: 'common.white' }} />
              <Box
                display="flex"
                flexDirection={'column'}
                sx={{ marginLeft: 2 }}
              >
                <Typography variant="h6" color="common.white">
                  106, Chaklalpur,
                </Typography>
                <Typography variant="h6" color="common.white">
                  Radhamohanpur,
                </Typography>
                <Typography variant="h6" color="common.white">
                  West Bengal - 721160
                </Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              alignItems={'center'}
              flexDirection={'row'}
              sx={{ marginTop: '5px' }}
            >
              <EmailIcon sx={{ color: 'common.white' }} />
              <Typography
                sx={{ marginLeft: 2 }}
                variant="h6"
                color="common.white"
              >
                sonanlifashioninfo@gmail.com
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems={'center'}
              flexDirection={'row'}
              sx={{ marginTop: '5px' }}
            >
              <PhoneIcon sx={{ color: 'common.white' }} />
              <Typography
                sx={{ marginLeft: 2 }}
                variant="h6"
                color="common.white"
              >
                +91 8900162177
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection={'column'}
            sx={{ marginTop: { xs: '20px', md: 0 } }}
          >
            <Typography variant="h4" color="common.white">
              Information
            </Typography>
            {[
              { name: 'About Us', trigger: '/about' },
              { name: 'Contact Us', trigger: '/contact' },
              { name: 'Terms & Conditions', trigger: '/termsAndConditions' },
              { name: 'Returns & Exchanges', trigger: '/returnPolicy' },
              { name: 'Shipping and Delivery', trigger: '/shippingPolicy' },
              { name: 'Privacy & policy', trigger: '/privacy' },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.trigger}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                style={{
                  cursor: 'pointer',
                  marginTop: '5px',
                  fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                  textDecoration: 'none',
                  fontSize: '18px',
                  letterSpacing: '.rem',
                  color: theme.palette.common.white,
                  textDecoration: 'none',
                }}
              >
                {item.name}
              </Link>
            ))}
          </Box>
          <Box
            display="flex"
            flexDirection={'column'}
            sx={{ marginTop: { xs: '20px', md: 0 } }}
          >
            <Typography variant="h4" color="common.white">
              Newsletter Sign Up
            </Typography>
            <Typography sx={{ marginTop: 1 }} variant="h6" color="common.white">
              Subscribe to our newsletter and get latest offers and news.
            </Typography>
            <Search sx={{ marginTop: 2 }}>
              <SearchIconWrapper>
                <EmailIcon sx={{ color: 'common.white' }} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Enter Mail ID"
                inputProps={{ 'aria-label': 'mail' }}
              />
            </Search>

            <Typography sx={{ marginTop: 1 }} variant="h6" color="common.white">
              Follow Us:
            </Typography>
            <Box display="flex" flexDirection={'row'} sx={{ marginTop: 1 }}>
              <Link
                to=""
                style={{
                  cursor: 'pointer',
                }}
              >
                <FacebookIcon sx={{ color: 'common.white' }} />
              </Link>
              <Link
                to=""
                style={{
                  cursor: 'pointer',
                }}
              >
                <YouTubeIcon sx={{ color: 'common.white', marginLeft: 1 }} />
              </Link>
              <Link
                to=""
                style={{
                  cursor: 'pointer',
                }}
              >
                <InstagramIcon sx={{ color: 'common.white', marginLeft: 1 }} />
              </Link>
            </Box>
          </Box>
        </Box>
        <Divider sx={{ backgroundColor: theme.palette.common.white }}></Divider>
        <Box
          alignItems={'center'}
          display="flex"
          justifyContent={'space-between'}
          px={4}
          py={2}
          sx={{ flexDirection: { xs: 'column', md: 'row' } }}
        >
          <Typography variant="h6" color="common.white" align="center">
            {'Copyright © '}
            Sonali Fashion
            {new Date().getFullYear()}
            {'.'}
          </Typography>
          <Box display="flex" flexDirection={'row'} sx={{ marginTop: '20px' }}>
            <img width={'60px'} height={'30px'} src={visa} alt="Visa Card" />
            <img
              style={{
                marginLeft: '5px',
              }}
              width={'60px'}
              height={'30px'}
              src={master}
              alt="Master Card"
            />
            <img
              style={{
                marginLeft: '5px',
              }}
              width={'60px'}
              height={'30px'}
              src={rupay}
              alt="Rupay Card"
            />
            <img
              style={{
                marginLeft: '5px',
              }}
              width={'60px'}
              height={'30px'}
              src={phonepay}
              alt="Phone Pay"
            />
            <img
              style={{
                marginLeft: '5px',
              }}
              width={'60px'}
              height={'30px'}
              src={gpay}
              alt="Google Pay"
            />
            <img
              style={{
                marginLeft: '5px',
              }}
              width={'60px'}
              height={'30px'}
              src={amazonpay}
              alt="Amazon Pay"
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
}
