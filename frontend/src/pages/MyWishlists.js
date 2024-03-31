import React from 'react';
import { useNavigate, NavLink, Link } from 'react-router-dom';
import BreadCrumbs from '../components/BreadCrumbs';
import Constants from '../utils/Constants';
import {
  Box,
  Card,
  CardContent,
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
import { useTheme } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import data from '../assets/data/featuredCollection.json';
import MyAcccountSidePanel from '../components/MyAcccountSidePanel';
import Masonry from '@mui/lab/Masonry';

export default function MyWishLists() {
  const theme = useTheme();
  const navigate = useNavigate();
  let crumbs = [
    { name: 'Home', trigger: '/', active: true },
    { name: 'My WishList', trigger: '/wishlists', active: false },
  ];

  const onProductTitleClick = (item) => {
    navigate('/detail/' + item.title, {
      state: {
        item: item,
      },
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container maxWidth="xl">
      <BreadCrumbs crumbs={crumbs} />
      <Box
        width={'100%'}
        justifyContent={'space-between'}
        display="flex"
        sx={{ marginTop: 5, flexDirection: { xs: 'column', md: 'row' } }}
      >
        <MyAcccountSidePanel
          activeButton={Constants.myWishlistText}
          triggerPoint="/wishlists"
        />
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
          <Typography
            color={'primary.main'}
            variant="h5"
            component="div"
            sx={{ fontWeight: '400' }}
          >
            {Constants.myWishlistText}
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
          <Masonry sx={{ marginTop: 1 }} columns={{ md: 3, xs: 2 }} spacing={2}>
            {data.map((item, index) => (
              <Paper elevation={5} key={index} sx={{ height: item.height }}>
                <Card>
                  <CardContent
                    style={{ background: theme.palette.primary.light }}
                  >
                    <CardMedia
                      onClick={() => onProductTitleClick(item)}
                      component="img"
                      height={item.height - 140}
                      image={item.img}
                      alt="Image Title"
                      sx={{
                        transform: 'scale(0.8)',
                        transition: '0.5s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1)',
                        },
                      }}
                    />

                    <Typography
                      onClick={() => onProductTitleClick(item)}
                      color={'primary.main'}
                      variant="h6"
                      component="div"
                      sx={{ fontWeight: 'bold' }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      component={'div'}
                      variant="body2"
                      color={'secondary.main'}
                      sx={{ fontWeight: 'bold' }}
                    >
                      Price: {item.Price}/-
                    </Typography>
                    <Box
                      sx={{ marginTop: 1 }}
                      display={'flex'}
                      flexDirection={'row'}
                      alignItems={'center'}
                      justifyContent={'space-between'}
                    >
                      <IconButton
                        size="medium"
                        aria-label="search"
                        sx={{
                          p: 1,
                          backgroundColor: 'primary.main',
                          width: 40,
                          height: 40,
                          borderRadius: 0,
                          color: '#fff',
                        }}
                      >
                        <AddShoppingCartIcon />
                      </IconButton>
                      <IconButton
                        size="medium"
                        aria-label="search"
                        sx={{
                          p: 1,
                          backgroundColor: 'primary.main',
                          width: 40,
                          height: 40,
                          borderRadius: 0,
                          color: '#fff',
                        }}
                      >
                        <InfoIcon />
                      </IconButton>
                      <IconButton
                        size="medium"
                        aria-label="search"
                        sx={{
                          p: 1,
                          backgroundColor: 'primary.main',
                          width: 40,
                          height: 40,
                          borderRadius: 0,
                          color: '#fff',
                        }}
                      >
                        <DeleteSweepIcon />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </Paper>
            ))}
          </Masonry>
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
      </Box>
    </Container>
  );
}
