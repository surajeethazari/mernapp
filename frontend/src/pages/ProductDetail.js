import {
  Box,
  Button,
  CardMedia,
  Container,
  Tab,
  TextField,
  Typography,
  Divider,
  OutlinedInput,
  InputAdornment,
} from '@mui/material';
import React from 'react';
import BreadCrumbs from '../components/BreadCrumbs';
import Constants from '../utils/Constants';
import { useNavigate, Link, useParams, useLocation } from 'react-router-dom';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { data } from '../assets/data/featuredCollection';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import WishlistModal from '../components/WishlistModal';
import CartDrawer from '../components/CartDrawer';

export default function ProductDetail(props) {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
  const navigate = useNavigate();
  const params = useParams();
  const obj = useLocation();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [value, setValue] = React.useState('1');
  const [item, setItem] = React.useState(obj.state.item);
  let crumbs = [
    { name: 'Home', trigger: '/', active: true },
    { name: 'Kurties', trigger: '/kurties', active: true },
    { name: params.title, trigger: '/detail/' + params.title, active: false },
  ];
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawerHandler = (open) => (event) => {
    setOpenDrawer(open);
  };

  const itemTemplate = (item) => {
    return (
      <InnerImageZoom
        style={{ width: '100%' }}
        src={item.img}
        alt={item.name}
        zoomSrc={item.img}
      />
    );
  };

  const thumbnailTemplate = (item) => {
    return (
      <img
        src={item.img}
        alt={item.name}
        style={{ width: 60, marginTop: 10 }}
      />
    );
  };

  const responsiveOptions = [
    {
      breakpoint: '991px',
      numVisible: 4,
    },
    {
      breakpoint: '767px',
      numVisible: 3,
    },
    {
      breakpoint: '575px',
      numVisible: 1,
    },
  ];

  return (
    <div>
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
          sx={{
            marginTop: 5,
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Box
            display="flex"
            flexDirection={'column'}
            sx={{ width: { xs: '100%' } }}
          >
            <>
              <Swiper
                style={{
                  width: '600px',
                  '--swiper-navigation-color': '#fff',
                  '--swiper-pagination-color': '#fff',
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                {data.map((item, index) => (
                  <SwiperSlide style={{ marginBottom: '5px' }} key={index}>
                    <InnerImageZoom
                      src={item.img}
                      alt={item.name}
                      zoomSrc={item.img}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                style={{
                  width: '600px',
                }}
                onSwiper={(swiper) => setThumbsSwiper(swiper)}
                spaceBetween={10}
                slidesPerView={5}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
              >
                {data.map((item, index) => (
                  <SwiperSlide style={{ marginBottom: '5px' }} key={index}>
                    <CardMedia
                      component="img"
                      image={item.img}
                      alt={item.name}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          </Box>
          <Box
            display="flex"
            flexDirection={'column'}
            sx={{ width: { xs: '100%' }, marginBottom: '50px' }}
          >
            <Typography
              color={'primary.main'}
              variant="h4"
              component="div"
              sx={{ fontWeight: 'bold' }}
            >
              {item.title}
            </Typography>

            <Typography
              color={'primary.main'}
              variant="h6"
              component="div"
              sx={{ fontWeight: 'normal', marginTop: 1 }}
            >
              {item.Price} /-
            </Typography>

            <Box
              width={'48%'}
              display="flex"
              flexDirection={'row'}
              sx={{ marginTop: 1 }}
            >
              <Typography
                color={'primary.main'}
                variant="h6"
                component="div"
                sx={{ fontWeight: 'bold' }}
              >
                {Constants.colorText}:
              </Typography>
              <Typography
                color={'primary.main'}
                variant="h6"
                component="div"
                sx={{ fontWeight: 'normal', marginLeft: 1 }}
              >
                Black
              </Typography>
            </Box>

            <Box
              width={'48%'}
              display="flex"
              flexDirection={'row'}
              sx={{ marginTop: 1 }}
            >
              <Typography
                color={'primary.main'}
                variant="h6"
                component="div"
                sx={{ fontWeight: 'bold' }}
              >
                {Constants.brandText}:
              </Typography>
              <Typography
                color={'primary.main'}
                variant="h6"
                component="div"
                sx={{ fontWeight: 'normal', marginLeft: 1 }}
              >
                A
              </Typography>
            </Box>

            <TextField
              sx={{ marginTop: 2, width: 150 }}
              label="Qty"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
            />

            <Box
              display={'flex'}
              flexDirection={'row'}
              alignItems={'center'}
              sx={{ marginTop: 2, marginBottom: 2 }}
            >
              <Button
                onClick={toggleDrawerHandler(true)}
                type="submit"
                variant="contained"
                sx={{
                  width: '200px',
                  '&:hover': {
                    backgroundColor: 'common.white',
                    color: 'common.black',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'secondary.main',
                  },
                  backgroundColor: 'common.black',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: 'common.black',
                }}
              >
                {Constants.addToCartText}
              </Button>
              <CartDrawer
                openDrawer={openDrawer}
                closeDrawer={toggleDrawerHandler(false)}
              />
              <Button
                onClick={() => setModalOpen(true)}
                type="submit"
                variant="contained"
                sx={{
                  width: '200px',
                  '&:hover': {
                    backgroundColor: 'common.white',
                    color: 'common.black',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'secondary.main',
                  },
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: 'common.black',
                  backgroundColor: 'common.black',
                  marginLeft: 2,
                }}
              >
                {Constants.addToWishListText}
              </Button>
              <WishlistModal
                openModal={modalOpen}
                onCloseModal={() => setModalOpen(false)}
                item={{
                  img: item.img,
                  title: item.title,
                }}
              />
            </Box>

            <Box
              width={'48%'}
              display="flex"
              flexDirection={'row'}
              sx={{ marginTop: 2 }}
            >
              <Button color="appmain" variant="contained">
                XXl
              </Button>
              <Button
                sx={{ marginLeft: 1 }}
                color="appmain"
                variant="contained"
              >
                Xl
              </Button>
              <Button
                sx={{ marginLeft: 1 }}
                color="appmain"
                variant="contained"
              >
                L
              </Button>
              <Button
                sx={{ marginLeft: 1 }}
                color="appmain"
                variant="contained"
              >
                M
              </Button>
              <Button
                sx={{ marginLeft: 1 }}
                color="appmain"
                variant="contained"
              >
                S
              </Button>
            </Box>

            <Box
              width={'48%'}
              display="flex"
              flexDirection={'row'}
              sx={{ marginTop: 2 }}
            >
              <Button color="appmain" variant="contained">
                Black
              </Button>
              <Button
                sx={{ marginLeft: 1 }}
                color="appmain"
                variant="contained"
              >
                Green
              </Button>
              <Button
                sx={{ marginLeft: 1 }}
                color="appmain"
                variant="contained"
              >
                Pink
              </Button>
            </Box>
            <Typography
              color={'primary.main'}
              variant="h5"
              component="div"
              sx={{ marginTop: 2, fontWeight: 'normal' }}
            >
              Check cash on delivery
            </Typography>
            <OutlinedInput
              sx={{ marginTop: 2 }}
              fullWidth
              placeholder="Enter pin code"
              endAdornment={
                <InputAdornment position="end">
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      marginLeft: 2,
                      '&:hover': {
                        backgroundColor: 'common.white',
                        color: 'common.black',
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        borderColor: 'secondary.main',
                      },
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      borderColor: 'common.black',
                      backgroundColor: 'common.black',
                    }}
                  >
                    {Constants.checkBtnText}
                  </Button>
                </InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
            />
            <Typography
              color={'primary.dark'}
              variant="h6body2"
              component="div"
              sx={{ marginTop: 2, fontWeight: 'normal' }}
            >
              Offers Available (Promo code to be applied at checkout)
            </Typography>
            <Box
              sx={{
                height: 80,
                padding: 2,
                marginTop: 4,
                borderWidth: 1,
                position: 'relative',
                borderStyle: 'dotted',
                borderColor: 'primary.main',
              }}
              display={'flex'}
              flexDirection={'column'}
            >
              <Box
                sx={{ marginTop: 2 }}
                display={'flex'}
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
              >
                <Typography
                  color={'primary.dark'}
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: 'normal' }}
                >
                  Use Promocode - EXTRA10
                </Typography>
                <Typography
                  color={'secondary.dark'}
                  variant="body2"
                  component="div"
                  sx={{ fontWeight: 'normal' }}
                >
                  Copy
                </Typography>
              </Box>
              <Typography
                color={'primary.dark'}
                variant="h6"
                component="div"
                sx={{ fontWeight: 'normal' }}
              >
                Get Additional 10% off on Prepaid order.
              </Typography>
              <Box
                width={100}
                sx={{
                  padding: 1,
                  position: 'absolute',
                  top: '-20px',
                  left: '20px',
                  backgroundColor: 'common.black',
                }}
              >
                <Typography
                  align="center"
                  color={'common.white'}
                  variant="body2"
                  component="div"
                  sx={{ fontWeight: 'normal' }}
                >
                  EXTRA10
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleTabChange}>
              <Tab
                label="Details"
                sx={{ fontWeight: value === '1' ? 'bold' : 'normal' }}
                value="1"
              />
              <Tab
                label="More Informations"
                sx={{ fontWeight: value === '2' ? 'bold' : 'normal' }}
                value="2"
              />
              <Tab
                label="Reviews (5)"
                sx={{ fontWeight: value === '3' ? 'bold' : 'normal' }}
                value="3"
              />
              <Tab
                label="Shipping & Return"
                sx={{ fontWeight: value === '4' ? 'bold' : 'normal' }}
                value="4"
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Typography
              color={'secondary.dark'}
              variant="h6"
              component="div"
              sx={{ fontWeight: 'bold' }}
            >
              * Style is a way to say who you are without having to speak try
              trendy naira cut blue full sleeves kurti in georgette with floral
              prints on it.
              <br />
              * This featured casual wear kurti avaiable ready-to-wear in M & L
              size and has extra 2 inches of margin to adjust up to 36"- 40" for
              your body comfort.
              <br />
              * Dressed to chill this casual wear kurti for daily wear use with
              ankle-length denim or jegging pants at the office, college, or for
              an outing anywhere.
              <br />* Carry fancy solid color bellies or sneakers and danglers
              with it to look more cool and stylish.
            </Typography>
          </TabPanel>
          <TabPanel value="2">
            <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
              <Typography
                color={'primary.dark'}
                variant="h6"
                component="div"
                sx={{ fontWeight: 'bold' }}
              >
                Model Number:
              </Typography>
              <Typography
                color={'secondary.dark'}
                variant="h6"
                component="div"
                sx={{ fontWeight: 'bold', marginLeft: 2 }}
              >
                LNB-2018-BLK
              </Typography>
            </Box>
            <Divider sx={{ marginBottom: 1, marginTop: 1 }} />
            <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
              <Typography
                color={'primary.dark'}
                variant="h6"
                component="div"
                sx={{ fontWeight: 'bold' }}
              >
                Item Weight (IN KG):
              </Typography>
              <Typography
                color={'secondary.dark'}
                variant="h6"
                component="div"
                sx={{ fontWeight: 'bold', marginLeft: 2 }}
              >
                0.5
              </Typography>
            </Box>
            <Divider sx={{ marginBottom: 1, marginTop: 1 }} />
            <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
              <Typography
                color={'primary.dark'}
                variant="h6"
                component="div"
                sx={{ fontWeight: 'bold' }}
              >
                Fabric:
              </Typography>
              <Typography
                color={'secondary.dark'}
                variant="h6"
                component="div"
                sx={{ fontWeight: 'bold', marginLeft: 2 }}
              >
                Crepe
              </Typography>
            </Box>
            <Divider sx={{ marginBottom: 1, marginTop: 1 }} />
            <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
              <Typography
                color={'primary.dark'}
                variant="h6"
                component="div"
                sx={{ fontWeight: 'bold' }}
              >
                Color:
              </Typography>
              <Typography
                color={'secondary.dark'}
                variant="h6"
                component="div"
                sx={{ fontWeight: 'bold', marginLeft: 2 }}
              >
                Black
              </Typography>
            </Box>
            <Divider sx={{ marginBottom: 1, marginTop: 1 }} />
            <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
              <Typography
                color={'primary.dark'}
                variant="h6"
                component="div"
                sx={{ fontWeight: 'bold' }}
              >
                Country of Origin:
              </Typography>
              <Typography
                color={'secondary.dark'}
                variant="h6"
                component="div"
                sx={{ fontWeight: 'bold', marginLeft: 2 }}
              >
                India
              </Typography>
            </Box>
            <Divider sx={{ marginBottom: 1, marginTop: 1 }} />
            <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
              <Typography
                color={'primary.dark'}
                variant="h6"
                component="div"
                sx={{ fontWeight: 'bold' }}
              >
                Contact No:
              </Typography>
              <Typography
                color={'secondary.dark'}
                variant="h6"
                component="div"
                sx={{ fontWeight: 'bold', marginLeft: 2 }}
              >
                +91 8900-162-177
              </Typography>
            </Box>
          </TabPanel>
          <TabPanel value="3">
            <Typography
              color={'primary.main'}
              variant="h4"
              component="div"
              sx={{ fontWeight: 'bold' }}
            >
              Reviews (5)
            </Typography>
          </TabPanel>
          <TabPanel value="4">
            <Typography
              color={'secondary.dark'}
              variant="h6"
              component="div"
              sx={{ fontWeight: 'bold' }}
            >
              * Customers have to ship the product to our address for
              return/exchange orders
              <br />
              * Duties and taxes, if applicable, are to be paid by the customer.
              <br />
              * Kindly request a return/exchange via mail at
              sonanlifashion@gmail.com within 7 days from the date of delivery.
              Return requests will not be accepted through any other medium.
              <br />
              * Kindly note return or exchange is only one time available.
              <br />
              * We have a generous 7-day no-questions-asked return policy or
              exchange policy.
              <br />
              * In Exchange, your replacement will be shipped after we receive
              and verify the returned product.
              <br />
              * The product that needs to be exchanged must be returned in the
              original condition with all parts/tags/accessories intact. Without
              the original condition of the product, the exchange will not be
              validated.
              <br />
              * In case of complaints regarding any damage or stain or other
              reasons must be reported within 24 hours of purchasing the
              product. We would require an image of the same for us to examine.
              <br />* For claiming the wrong product was delivered, an unboxing
              video must be provided showing the package received in intact
              condition and non-tampered condition.
            </Typography>
          </TabPanel>
        </TabContext>
      </Container>
    </div>
  );
}
