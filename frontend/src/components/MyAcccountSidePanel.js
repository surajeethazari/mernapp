import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Constants from '../utils/Constants';

export default function MyAcccountSidePanel(props) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    props.trigger();
  };

  return (
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
        Constants.myAccountText,
        Constants.myOrderText,
        Constants.myWishlistText,
        Constants.myAddressText,
      ].map((item, index) => (
        <Box key={index}>
          <Typography
            onClick={() => handleNavigate}
            color={
              item === props.activeButton ? 'secondary.dark' : 'primary.main'
            }
            variant="h6"
            component="div"
            sx={{
              fontWeight: '400',
              marginTop: 2,
              cursor: item === props.activeButton ? 'default' : 'pointer',
            }}
          >
            {item}
          </Typography>
          {index !== 3 ? <Divider sx={{ marginTop: 2 }} /> : <Typography />}
        </Box>
      ))}
    </Box>
  );
}
