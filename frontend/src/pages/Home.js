import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import DISCOUNT from '../assets/images/DISCOUNT.png';
import KurtiBanner from '../assets/images/KurtiBanner.jpg';
import PalazzoBanner from '../assets/images/PalazzoBanner.jpg';
import SalwarBanner from '../assets/images/SalwarBanner.png';
import Slider from 'react-slick';
import { Carousel } from 'antd';
import Masonry from '@mui/lab/Masonry';
import Typography from '@mui/material/Typography';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  IconButton,
  Paper,
  Stack,
  Tooltip,
  Zoom,
} from '@mui/material';
import Constants from '../utils/Constants';
import { useTheme } from '@mui/material/styles';
import data from '../assets/data/featuredCollection.json';
import { useNavigate, NavLink, Link } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import StarIcon from '@mui/icons-material/Star';
import Grow from '@mui/material/Grow';

export default function Home(props) {
  const navigate = useNavigate();
  const theme = useTheme();
  const [imageSectionShow, setImageSectionShow] = React.useState(0);
  const onProductTitleClick = (item) => {
    navigate('/detail/' + item.title, {
      state: {
        item: item,
      },
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box sx={{ marginTop: 8, marginBottom: 5 }}>
      <Carousel dotPosition="bottom" autoplay effect="fade" dots="false">
        <CardMedia
          sx={{ cursor: 'pointer' }}
          onClick={() => navigate('/kurties')}
          component="img"
          height="400"
          width={'110%'}
          image={KurtiBanner}
          alt="Image Title"
        />
        <CardMedia
          sx={{ cursor: 'pointer' }}
          onClick={() => navigate('/palazzoes')}
          component="img"
          height="400"
          width={'110%'}
          image={PalazzoBanner}
          alt="Image Title"
        />
        <CardMedia
          sx={{ cursor: 'pointer' }}
          onClick={() => navigate('/salwars')}
          component="img"
          height="400"
          width={'110%'}
          image={SalwarBanner}
          alt="Image Title"
        />
      </Carousel>
      <Container component="main" maxWidth="xl">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection={'column'}
          m={2}
          sx={{}}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flexDirection={'row'}
            width={450}
          >
            <Box
              sx={{
                height: 3,
                width: 100,
                backgroundColor: 'common.black',
                marginTop: 5,
              }}
            />
            <Typography
              mt={5}
              variant="h5"
              color={'common'}
              sx={{ fontWeight: 'bold' }}
            >
              {Constants.featuredProductText}
            </Typography>
            <Box
              sx={{
                height: 3,
                width: 100,
                backgroundColor: 'common.black',
                marginTop: 5,
              }}
            />
          </Box>
          <Masonry sx={{ marginTop: 5 }} columns={{ md: 4, xs: 2 }} spacing={2}>
            {data.map((item, index) => (
              <Box key={index} sx={{ height: item.height + 100, width: 300 }}>
                <Card>
                  <CardContent
                    sx={{
                      padding: 0,
                      backgroundColor: 'common.white',
                    }}
                  >
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
                            backgroundColor: '#ffffff9e',
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            position: 'relative',
                            transition: '0.5s ease-in-out',
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
                                width: { md: '55px', sx: '35px' },
                                height: { md: '40px', sx: '20px' },
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
                                width: { md: '55px', sx: '35px' },
                                height: { md: '40px', sx: '20px' },
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
                            title="Add To Wishlists"
                          >
                            <IconButton
                              size="medium"
                              aria-label="search"
                              sx={{
                                p: 1,
                                backgroundColor: 'common.black',
                                width: { md: '55px', sx: '35px' },
                                height: { md: '40px', sx: '20px' },
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
                              <StarIcon />
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
        </Box>
      </Container>
    </Box>
  );
}
