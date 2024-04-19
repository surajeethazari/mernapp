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
  Grow,
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
import { data } from '../assets/data/featuredCollection';
import MyAcccountSidePanel from '../components/MyAcccountSidePanel';
import Masonry from '@mui/lab/Masonry';

export default function MyWishLists() {
  const [imageSectionShow, setImageSectionShow] = React.useState(0);
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
    <Box>
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
      <Masonry sx={{ marginTop: 1 }} columns={{ md: 4, xs: 2 }} spacing={3}>
        {data.map((item, index) => (
          <Box key={index} sx={{ height: item.height + 100 }}>
            <Card>
              <CardContent sx={{ padding: 0, backgroundColor: 'common.white' }}>
                <Box
                  onMouseEnter={() => setImageSectionShow(index + 1)}
                  onMouseLeave={() => setImageSectionShow(0)}
                  sx={{ overflow: 'hidden' }}
                >
                  <CardMedia
                    onClick={() => onProductTitleClick(item)}
                    component="img"
                    height={item.height}
                    image={item.img}
                    alt="Image Title"
                    sx={{
                      cursor: 'pointer',
                      transform: 'scale(1)',
                      transformOrigin: '50% 50%',
                      transition: '0.5s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.2)',
                      },
                    }}
                  />
                  <Grow in={imageSectionShow === index + 1}>
                    <Box
                      sx={{
                        marginTop: -9,
                        position: 'relative',
                        zIndex: 999,
                        padding: 2,
                      }}
                      display={'flex'}
                      flexDirection={'row'}
                      justifyContent={'space-around'}
                    >
                      <Tooltip
                        placement="top"
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
                          onClick={() =>
                            navigate('/detail/' + item.title, {
                              state: {
                                item: item,
                              },
                            })
                          }
                          size="medium"
                          aria-label="search"
                          sx={{
                            padding: '5px',
                            backgroundColor: 'common.white',
                            borderRadius: '5px 5px 5px 5px',
                            '&:hover': {
                              backgroundColor: 'common.white',
                            },
                          }}
                        >
                          <AddShoppingCartIcon
                            sx={{ color: theme.palette.common.black }}
                          />
                        </IconButton>
                      </Tooltip>
                      <Tooltip
                        placement="top"
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
                            padding: '5px',
                            backgroundColor: 'common.white',
                            borderRadius: '5px 5px 5px 5px',
                            '&:hover': {
                              backgroundColor: 'common.white',
                            },
                          }}
                        >
                          <DeleteSweepIcon
                            sx={{ color: theme.palette.common.black }}
                          />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </Grow>
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
  );
}
