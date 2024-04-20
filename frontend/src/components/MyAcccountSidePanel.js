import { Box, Container, Divider, Typography } from '@mui/material';
import React from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Constants from '../utils/Constants';
import PageTransition from '../utils/PageTransition';
import BreadCrumbs from './BreadCrumbs';
import AccountDetails from '../pages/AccountDetails';
import { AnimatePresence } from 'framer-motion';

import MyOrders from '../pages/MyOrders';
import MyWishLists from '../pages/MyWishlists';
import MyAddress from '../pages/MyAddress';

export default function MyAcccountSidePanel() {
  let location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  let [currentPage, setCurrentPage] = React.useState(
    location.state.path ? location.state.path : Constants.myAccountText,
  );
  let crumbs = [
    { name: 'Home', trigger: '/', active: true },
    { name: 'My Account', trigger: '/details', active: false },
  ];

  let handleLinkClick = (item) => {
    setCurrentPage(item.name);
  };

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
          sx={{ marginTop: 5, flexDirection: { xs: 'column', md: 'row' } }}
        >
          <Box
            display="flex"
            flexDirection={'column'}
            height={250}
            sx={{
              display: { xs: 'none', md: 'flex' },
              width: { xs: '0%', md: '20%' },
              marginBottom: '100px',
              padding: 3,
              boxShadow: 3,
            }}
          >
            {[
              {
                name: Constants.myAccountText,
                route: 'details',
              },
              {
                name: Constants.myOrderText,
                route: 'orders',
              },
              {
                name: Constants.myWishlistText,
                route: 'wishlists',
              },
              {
                name: Constants.myAddressText,
                route: 'address',
              },
            ].map((item, index) => (
              <Box key={index}>
                <Typography
                  onClick={() => handleLinkClick(item)}
                  color={
                    item.name === currentPage
                      ? 'secondary.dark'
                      : 'primary.main'
                  }
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: item.name === currentPage ? 'bold' : '400',
                    marginTop: 2,
                    cursor: item.name === currentPage ? 'default' : 'pointer',
                  }}
                >
                  {item.name}
                </Typography>
                {index !== 3 ? (
                  <Divider sx={{ marginTop: 2 }} />
                ) : (
                  <Typography />
                )}
              </Box>
            ))}
          </Box>
          <Box
            display="flex"
            flexDirection={'column'}
            sx={{
              width: { xs: '100%', md: '73%' },
              marginBottom: '100px',
              padding: 2,
              boxShadow: 3,
            }}
          >
            {currentPage === Constants.myAccountText ? (
              <AccountDetails />
            ) : null}
            {currentPage === Constants.myOrderText ? <MyOrders /> : null}
            {currentPage === Constants.myWishlistText ? <MyWishLists /> : null}
            {currentPage === Constants.myAddressText ? <MyAddress /> : null}
          </Box>
        </Box>
      </Container>
    </PageTransition>
  );
}
