import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import KurtiBanner from '../assets/images/KurtiBanner.jpg';
import PalazzoBanner from '../assets/images/PalazzoBanner.jpg';
import SalwarBanner from '../assets/images/SalwarBanner.png';
import { Carousel } from 'antd';
import Masonry from '@mui/lab/Masonry';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
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
import { data } from '../assets/data/featuredCollection';
import { useNavigate, NavLink, Link } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import StarIcon from '@mui/icons-material/Star';
import Grow from '@mui/material/Grow';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  FreeMode,
  Autoplay,
  EffectCube,
  EffectFade,
  Pagination,
  Navigation,
} from 'swiper/modules';

export default function Home(props) {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: (
      <ArrowForwardIosIcon
        sx={{
          color: 'primary.main',
          fontSize: 25,
          '&:hover': { color: 'secondary.main' },
        }}
      />
    ),
    prevArrow: (
      <ArrowBackIosIcon
        sx={{
          color: 'primary.main',
          fontSize: 25,
          '&:hover': { color: 'secondary.main' },
        }}
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const newArrivalSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 5,
    nextArrow: (
      <ArrowForwardIosIcon
        sx={{
          color: 'primary.main',
          fontSize: 25,
          '&:hover': { color: 'secondary.main' },
        }}
      />
    ),
    prevArrow: (
      <ArrowBackIosIcon
        sx={{
          color: 'primary.main',
          fontSize: 25,
          '&:hover': { color: 'secondary.main' },
        }}
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const navigate = useNavigate();
  const theme = useTheme();
  const [imageSectionShowFeatured, setImageSectionShowFeatured] =
    React.useState(0);
  const [imageSectionShowNew, setImageSectionShowNew] = React.useState(0);
  const [expanded, setExpanded] = React.useState(false);
  const onProductTitleClick = (item) => {
    navigate('/detail/' + item.title, {
      state: {
        item: item,
      },
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ marginTop: 8, marginBottom: 5 }}>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CardMedia
            sx={{ cursor: 'pointer' }}
            onClick={() => navigate('/kurties')}
            component="img"
            height="400"
            width={'110%'}
            image={KurtiBanner}
            alt="Image Title"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardMedia
            sx={{ cursor: 'pointer' }}
            onClick={() => navigate('/palazzoes')}
            component="img"
            height="400"
            width={'110%'}
            image={PalazzoBanner}
            alt="Image Title"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardMedia
            sx={{ cursor: 'pointer' }}
            onClick={() => navigate('/salwars')}
            component="img"
            height="400"
            width={'110%'}
            image={SalwarBanner}
            alt="Image Title"
          />
        </SwiperSlide>
      </Swiper>
      <Container component="main" maxWidth="xl">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection={'column'}
          mt={2}
          mb={3}
          sx={{}}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flexDirection={'row'}
            width={420}
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
        </Box>
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={5}
          spaceBetween={30}
          freeMode={true}
          navigation={true}
          modules={[Autoplay, EffectFade, FreeMode, Navigation]}
        >
          {data.map((item, index) => (
            <SwiperSlide style={{ marginBottom: '5px' }} key={index}>
              <Card elevation={3}>
                <CardContent
                  sx={{
                    padding: 0,
                    backgroundColor: 'common.white',
                  }}
                >
                  <Box
                    onMouseEnter={() => setImageSectionShowFeatured(index + 1)}
                    onMouseLeave={() => setImageSectionShowFeatured(0)}
                    sx={{ overflow: 'hidden' }}
                  >
                    <CardMedia
                      onClick={() => onProductTitleClick(item)}
                      component="img"
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
                    <Grow in={imageSectionShowFeatured === index + 1}>
                      <Box
                        sx={{
                          marginTop: -9,
                          position: 'relative',
                          transition: '0.5s ease-in-out',
                          zIndex: 999,
                          padding: 2,
                        }}
                        display={'flex'}
                        flexDirection={'row'}
                        justifyContent={'center'}
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
                          title="Add To Wishlists"
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
                            <StarIcon
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
            </SwiperSlide>
          ))}
        </Swiper>
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
            width={350}
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
              {Constants.newArrivalText}
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
        </Box>
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          slidesPerView={5}
          spaceBetween={30}
          freeMode={true}
          navigation={true}
          modules={[Autoplay, EffectFade, FreeMode, Navigation]}
        >
          {data.reverse().map((item, index) => (
            <SwiperSlide style={{ marginBottom: '5px' }} key={index}>
              <Card elevation={3}>
                <CardContent
                  sx={{
                    padding: 0,
                    backgroundColor: 'common.white',
                  }}
                >
                  <Box
                    onMouseEnter={() =>
                      setImageSectionShowFeatured(index + 100)
                    }
                    onMouseLeave={() => setImageSectionShowFeatured(0)}
                    sx={{ overflow: 'hidden' }}
                  >
                    <CardMedia
                      onClick={() => onProductTitleClick(item)}
                      component="img"
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
                    <Grow in={imageSectionShowFeatured === index + 100}>
                      <Box
                        sx={{
                          marginTop: -9,
                          position: 'relative',
                          transition: '0.5s ease-in-out',
                          zIndex: 999,
                          padding: 2,
                        }}
                        display={'flex'}
                        flexDirection={'row'}
                        justifyContent={'center'}
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
                          title="Add To Wishlists"
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
                            <StarIcon
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
            </SwiperSlide>
          ))}
        </Swiper>
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
            width={268}
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
              {Constants.faqText}
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
          <Box>
            {[
              {
                text: 'What is Sonali Fashion, and what do you offer?',
                innerText:
                  'Sonali Fashion is a premier online destination for ethnic wear. We offer a wide range of traditional and contemporary Indian attire, including sarees, salwar kameez, lehengas, and more.',
              },
              {
                text: 'How can I place an order on Sonali Fashion?',
                innerText:
                  'Ordering with Sonali Fashion is easy! Simply browse our collection, select your favourite items, and add them to your cart. Follow the checkout process to place your order.',
              },
              {
                text: 'What payment methods are accepted on Sonali Fashion?',
                innerText:
                  'We accept payments via VISA/MASTER credit and debit cards, Phone pay, Google pay. We do not accept payments via ATM or interbank transfers.',
              },
              {
                text: 'How can I track my order status?',
                innerText:
                  'Once your order has been shipped, you will receive email confirmation of your shipping details and a tracking number. You can additionally use the tracking details provided to you to track your order through our logistics partner.',
              },
              {
                text: 'What is your return and exchange policy?',
                innerText:
                  'We are committed to maintaining a long-lasting relationship with our customers by providing them with 100% satisfaction. If you are unsatisfied with your purchase for any reason, we will take back the product. We have a generous 7-day no-questions-asked return policy.',
              },
              {
                text: 'How can I get in touch with your customer support team?',
                innerText:
                  'We love to hear from you on our customer service, merchandise, website or any topics you want to share with us please get connected with you via telephone at +91-8900162177 from Monday to Saturday 11:00 AM - 6:00 PM and you can write us at sonanlifashioninfo@gmail.com',
              },
            ].map((item, index) => (
              <Accordion
                sx={{
                  marginBottom: 1,
                  boxShadow: 'none',
                  padding: 0,
                  '& .MuiAccordionSummary-content': {
                    margin: 0,
                  },
                }}
                spacing={1}
                expanded={expanded === index}
                onChange={handleAccordionChange(index)}
                key={index}
              >
                <AccordionSummary
                  expandIcon={expanded === index ? <RemoveIcon /> : <AddIcon />}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 'bold', color: 'secondary.dark' }}
                  >
                    {item.text}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 'bold', color: 'primary.main' }}
                  >
                    {item.innerText}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
