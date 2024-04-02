import {
  Typography,
  Container,
  Box,
  Divider,
  InputBase,
  Zoom,
  Tooltip,
} from '@mui/material';
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';
import EmailIcon from '@mui/icons-material/Email';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PhoneIcon from '@mui/icons-material/Phone';
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
        <Container component="main" maxWidth="xl">
          <Box
            display="flex"
            flexDirection={'row'}
            justifyContent={'space-between'}
            p={4}
            sx={{ flexDirection: { xs: 'column', md: 'row' } }}
          >
            <Box display="flex" width={'33%'} flexDirection={'column'}>
              <Typography variant="h5" color="common.white">
                Contact Us
              </Typography>
              <Box display="flex" flexDirection={'row'} sx={{ marginTop: 2 }}>
                <WhereToVoteIcon sx={{ color: 'common.white' }} />
                <Box
                  display="flex"
                  flexDirection={'column'}
                  sx={{ marginLeft: 2 }}
                >
                  <Typography sx={{ fontSize: '18px' }} color="common.white">
                    106, Chaklalpur,
                  </Typography>
                  <Typography sx={{ fontSize: '18px' }} color="common.white">
                    Radhamohanpur,
                  </Typography>
                  <Typography sx={{ fontSize: '18px' }} color="common.white">
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
                  sx={{
                    fontSize: '18px',
                    marginLeft: 2,
                    cursor: 'pointer',
                    '&:hover': {
                      color: theme.palette.secondary.main,
                    },
                  }}
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
                  sx={{
                    fontSize: '18px',
                    marginLeft: 2,
                    cursor: 'pointer',
                    '&:hover': {
                      color: theme.palette.secondary.main,
                    },
                  }}
                  color="common.white"
                >
                  +91 8900162177
                </Typography>
              </Box>
            </Box>
            <Box
              width={'33%'}
              display="flex"
              flexDirection={'column'}
              sx={{ marginTop: { xs: '20px', md: 0 } }}
            >
              <Typography variant="h5" color="common.white">
                Information
              </Typography>
              <Box sx={{ marginTop: 2 }}>
                {[
                  { name: 'About Us', trigger: '/about' },
                  { name: 'Contact Us', trigger: '/contact' },
                  {
                    name: 'Terms & Conditions',
                    trigger: '/termsAndConditions',
                  },
                  { name: 'Returns & Exchanges', trigger: '/returnPolicy' },
                  { name: 'Shipping and Delivery', trigger: '/shippingPolicy' },
                  { name: 'Privacy & policy', trigger: '/privacy' },
                ].map((item, index) => (
                  <Link
                    key={index}
                    to={item.trigger}
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }
                    style={{
                      marginTop: '5px',
                      textDecoration: 'none',
                    }}
                  >
                    <Typography
                      sx={{
                        cursor: 'pointer',
                        fontSize: '18px',
                        color: theme.palette.common.white,
                        '&:hover': {
                          color: theme.palette.secondary.main,
                        },
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Link>
                ))}
              </Box>
            </Box>
            <Box
              width={'33%'}
              display="flex"
              flexDirection={'column'}
              sx={{ marginTop: { xs: '20px', md: 0 } }}
            >
              <Typography variant="h5" color="common.white">
                Newsletter Sign Up
              </Typography>
              <Typography
                sx={{ marginTop: 2, fontSize: '18px' }}
                color="common.white"
              >
                Subscribe to our newsletter and get latest offers and news.
              </Typography>
              <Box
                style={{
                  marginTop: 2,
                  position: 'relative',
                  borderRadius: theme.shape.borderRadius,
                  backgroundColor: theme.palette.common.white,
                  '&:hover': {
                    backgroundColor: theme.palette.common.white,
                  },
                  marginLeft: 0,
                  width: '100%',
                  [theme.breakpoints.up('sm')]: {
                    marginLeft: theme.spacing(1),
                    width: 'auto',
                  },
                }}
              >
                <Box
                  style={{
                    padding: theme.spacing(0, 2),
                    height: '100%',
                    position: 'absolute',
                    pointerEvents: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <EmailIcon sx={{ color: 'common.black' }} />
                </Box>
                <InputBase
                  placeholder="Enter Mail ID"
                  inputProps={{ 'aria-label': 'mail' }}
                  sx={{
                    color: theme.palette.common.black,
                    width: '100%',
                    '& .MuiInputBase-input': {
                      padding: theme.spacing(1, 1, 1, 0),
                      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
                      transition: theme.transitions.create('width'),
                    },
                  }}
                />
                <Box
                  style={{
                    padding: theme.spacing(0, 2),
                    height: '100%',
                    borderRadius: '3px',
                    position: 'absolute',
                    right: '0px',
                    top: 0,
                    pointerEvents: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: theme.palette.common.black,
                    '&:hover': {
                      backgroundColor: theme.palette.common.white,
                    },
                  }}
                >
                  <ArrowForwardIcon
                    sx={{
                      color: 'common.white',
                      '&:hover': {
                        color: 'common.black',
                      },
                      cursor: 'pointer',
                    }}
                  />
                </Box>
              </Box>

              <Typography
                sx={{ marginTop: 1, fontSize: '18px' }}
                color="common.white"
              >
                Follow Us:
              </Typography>
              <Box display="flex" flexDirection={'row'} sx={{ marginTop: 1 }}>
                <Tooltip
                  componentsProps={{
                    tooltip: {
                      sx: {
                        bgcolor: 'common.black',
                      },
                    },
                    arrow: {
                      sx: {
                        color: 'common.black',
                      },
                    },
                  }}
                  TransitionComponent={Zoom}
                  arrow
                  title="Follow on Facebook"
                >
                  <Link
                    to=""
                    style={{
                      cursor: 'pointer',
                    }}
                  >
                    <FacebookIcon
                      sx={{
                        color: 'common.white',
                        '&:hover': {
                          color: 'secondary.main',
                        },
                      }}
                    />
                  </Link>
                </Tooltip>
                <Tooltip
                  componentsProps={{
                    tooltip: {
                      sx: {
                        bgcolor: 'common.black',
                      },
                    },
                    arrow: {
                      sx: {
                        color: 'common.black',
                      },
                    },
                  }}
                  TransitionComponent={Zoom}
                  arrow
                  title="Follow on Youtube"
                >
                  <Link
                    to=""
                    style={{
                      cursor: 'pointer',
                    }}
                  >
                    <YouTubeIcon
                      sx={{
                        color: 'common.white',
                        marginLeft: 1,
                        '&:hover': {
                          color: 'secondary.main',
                        },
                      }}
                    />
                  </Link>
                </Tooltip>
                <Tooltip
                  componentsProps={{
                    tooltip: {
                      sx: {
                        bgcolor: 'common.black',
                      },
                    },
                    arrow: {
                      sx: {
                        color: 'common.black',
                      },
                    },
                  }}
                  TransitionComponent={Zoom}
                  arrow
                  title="Follow on Instagram"
                >
                  <Link
                    to=""
                    style={{
                      cursor: 'pointer',
                    }}
                  >
                    <InstagramIcon
                      sx={{
                        color: 'common.white',
                        marginLeft: 1,
                        '&:hover': {
                          color: 'secondary.main',
                        },
                      }}
                    />
                  </Link>
                </Tooltip>
              </Box>
            </Box>
          </Box>
        </Container>

        <Divider sx={{ backgroundColor: theme.palette.common.white }}></Divider>
        <Container component="main" maxWidth="xl">
          <Box
            alignItems={'center'}
            display="flex"
            justifyContent={'space-between'}
            px={4}
            py={2}
            sx={{ flexDirection: { xs: 'column', md: 'row' } }}
          >
            <Typography
              sx={{ fontSize: '18px' }}
              color="common.white"
              align="center"
            >
              {'Copyright © '}
              Sonali Fashion <span />
              {new Date().getFullYear()}
              {'.'}
            </Typography>
            <Box
              display="flex"
              flexDirection={'row'}
              sx={{ marginTop: '20px' }}
            >
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
        </Container>
      </Box>
    </div>
  );
}
