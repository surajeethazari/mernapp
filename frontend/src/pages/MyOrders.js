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
import { data } from '../assets/data/featuredCollection';

export default function MyOrders() {
  const navigate = useNavigate();
  let crumbs = [
    { name: 'Home', trigger: '/', active: true },
    { name: 'My Orders', trigger: '/orders', active: false },
  ];

  return (
    <Box>
      <Typography
        color={'primary.main'}
        variant="h5"
        component="div"
        sx={{ fontWeight: '400' }}
      >
        {Constants.myOrderText}
      </Typography>

      <Divider sx={{ marginTop: 1 }} />
      {/* <Typography
            color={'primary.main'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold', marginTop: 2 }}
          >
            {Constants.noOrderFoundText}
          </Typography> */}
      <Box
        sx={{
          maxHeight: '500px',
          overflow: 'auto',
        }}
      >
        {data.map((item, index) => (
          <Paper
            elevation={2}
            key={index}
            sx={{
              height: item.height,
              marginTop: 2,
              height: '50px',
              padding: 5,
            }}
          >
            <Box
              display="flex"
              flexDirection={'row'}
              justifyContent={'space-between'}
            >
              <Box display="flex" flexDirection={'row'}>
                <CardMedia
                  onClick={() =>
                    navigate('/detail/' + item.title, {
                      state: {
                        item: item,
                      },
                    })
                  }
                  component="img"
                  height={80}
                  image={item.img}
                  alt="Image Title"
                />
                <Box
                  display="flex"
                  width={'300px'}
                  justifyContent={'space-arround'}
                  flexDirection={'column'}
                  sx={{ marginLeft: 1 }}
                >
                  <Typography
                    onClick={() =>
                      navigate('/detail/' + item.title, {
                        state: {
                          item: item,
                        },
                      })
                    }
                    variant="body2"
                    component="div"
                    sx={{ fontWeight: 'bold' }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    component={'span'}
                    variant="body2"
                    color={'primary.main'}
                    sx={{ fontWeight: '400', marginTop: '5px' }}
                  >
                    Color: Blue, Size: XL
                  </Typography>
                  <Typography
                    component={'span'}
                    variant="body2"
                    color={'primary.main'}
                    sx={{ fontWeight: '400', marginTop: '5px' }}
                  >
                    2 × {item.Price} /-
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" flexDirection={'column'}>
                <Typography
                  color={'primary.main'}
                  variant="body2"
                  component="div"
                  sx={{ fontWeight: 'bold' }}
                >
                  Order Id: #12345
                </Typography>
                <Typography
                  component={'div'}
                  variant="body2"
                  color={'secondary.main'}
                  sx={{ fontWeight: 'bold', marginTop: '5px' }}
                >
                  TotalPrice: 5678 /-
                </Typography>
              </Box>
            </Box>
          </Paper>
        ))}
      </Box>
      <Stack alignItems={'center'} sx={{ marginTop: 2 }} spacing={2}>
        <Pagination
          count={10}
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
      </Stack>
    </Box>
  );
}
