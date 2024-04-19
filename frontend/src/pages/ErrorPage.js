import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {
  Card,
  CardContent,
  CardMedia,
  Grow,
  IconButton,
  Tooltip,
  Typography,
  Zoom,
} from '@mui/material';
import thinking_lady from '../assets/images/thinking_lady.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import { useTheme } from '@mui/material/styles';
import { data } from '../assets/data/featuredCollection';

export default function ErrorPage() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [imageSectionShowFeatured, setImageSectionShowFeatured] =
    React.useState(0);

  const onProductTitleClick = (item) => {
    navigate('/detail/' + item.title, {
      state: {
        item: item,
      },
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container component="main" maxWidth="xl">
      <Typography
        sx={{ marginTop: 15 }}
        align="center"
        variant="h3"
        component="div"
        gutterBottom
      >
        Oops!, Lost your way?
      </Typography>
      <Box
        width={'100%'}
        mb={20}
        mt={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection={'column'}
      >
        <Box width={350} height={350}>
          <CardMedia
            component="img"
            image={thinking_lady}
            alt={'Lost your way?'}
          />
        </Box>
      </Box>
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
          width={550}
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
            Browse from our collection!!!
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
          marginTop: '30px',
          marginBottom: '40px',
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
    </Container>
  );
}
