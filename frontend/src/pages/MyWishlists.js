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
  Tooltip,
  Typography,
  Zoom,
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
          <Masonry sx={{ marginTop: 1 }} columns={{ md: 3, xs: 2 }} spacing={3}>
            {data.map((item, index) => (
              <Box key={index} sx={{ height: item.height + 100 }}>
                <Card>
                  <CardContent
                    sx={{ padding: 0, backgroundColor: 'common.white' }}
                  >
                    <CardMedia
                      onClick={() => onProductTitleClick(item)}
                      component="img"
                      height={item.height}
                      image={item.img}
                      alt="Image Title"
                      sx={{ cursor: 'pointer' }}
                    />
                    <Box
                      sx={{
                        marginTop: -9,
                        backgroundColor: '#ffffff9e',
                        position: 'relative',
                        zIndex: 999,
                        padding: 2,
                      }}
                      display={'flex'}
                      flexDirection={'row'}
                      justifyContent={'space-around'}
                    >
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
                        title="Add To Cart"
                      >
                        <IconButton
                          size="medium"
                          aria-label="search"
                          sx={{
                            p: 1,
                            backgroundColor: 'common.black',
                            width: '55px',
                            height: '40px',
                            borderRadius: '5px 5px 5px 5px',
                            color: 'common.white',
                            '&:hover': {
                              color: 'common.black',
                              backgroundColor: 'transparent',
                              borderWidth: 2,
                              borderStyle: 'solid',
                              borderColor: 'secondary.main',
                            },
                          }}
                        >
                          <AddShoppingCartIcon />
                        </IconButton>
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
                        title="Information"
                      >
                        <IconButton
                          size="medium"
                          aria-label="search"
                          sx={{
                            p: 1,
                            backgroundColor: 'common.black',
                            width: '55px',
                            height: '40px',
                            borderRadius: '5px 5px 5px 5px',
                            color: 'common.white',
                            '&:hover': {
                              color: 'common.black',
                              backgroundColor: 'transparent',
                              borderWidth: 2,
                              borderStyle: 'solid',
                              borderColor: 'secondary.main',
                            },
                          }}
                        >
                          <InfoIcon />
                        </IconButton>
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
                        title="Remove From Wishlists"
                      >
                        <IconButton
                          size="medium"
                          aria-label="search"
                          sx={{
                            p: 1,
                            backgroundColor: 'common.black',
                            width: '55px',
                            height: '40px',
                            borderRadius: '5px 5px 5px 5px',
                            color: 'common.white',
                            '&:hover': {
                              color: 'common.black',
                              backgroundColor: 'transparent',
                              borderWidth: 2,
                              borderStyle: 'solid',
                              borderColor: 'secondary.main',
                            },
                          }}
                        >
                          <DeleteSweepIcon />
                        </IconButton>
                      </Tooltip>
                    </Box>
                    <Box
                      display={'flex'}
                      flexDirection={'column'}
                      sx={{ paddingLeft: 3, paddingRight: 3 }}
                    >
                      <Typography
                        onClick={() => onProductTitleClick(item)}
                        color={'primary.dark'}
                        variant="h6"
                        component="div"
                        sx={{
                          cursor: 'pointer',
                          fontWeight: 'bold',
                          '&:hover': {
                            color: 'secondary.main',
                          },
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        component={'div'}
                        variant="body1"
                        color={'primary.main'}
                        sx={{ fontWeight: 'bold' }}
                      >
                        {item.Price}/-
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
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