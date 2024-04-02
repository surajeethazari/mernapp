import {
  Box,
  Button,
  CardMedia,
  Container,
  ButtonGroup,
  Drawer,
  IconButton,
  Stack,
  Tab,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import BreadCrumbs from '../components/BreadCrumbs';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Carousel } from 'antd';
import Constants from '../utils/Constants';
import Slide from '@mui/material/Slide';
import CloseRounded from '@mui/icons-material/CloseRounded';
import { useNavigate, Link, useParams, useLocation } from 'react-router-dom';
import ArrowForwardTwoTone from '@mui/icons-material/ArrowForwardTwoTone';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { data } from '../assets/data/featuredCollection';
import { Galleria } from 'primereact/galleria';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';

export default function ProductDetail(props) {
  const navigate = useNavigate();
  const params = useParams();
  const obj = useLocation();
  const [value, setValue] = React.useState('1');
  const [item, setItem] = React.useState(obj.state.item);
  let crumbs = [
    { name: 'Home', trigger: '/', active: true },
    { name: 'Collection', trigger: '/products', active: true },
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
            marginBottom: 5,
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Box
            display="flex"
            flexDirection={'column'}
            sx={{ width: { xs: '100%', md: '35%' } }}
          >
            <Galleria
              value={data}
              responsiveOptions={responsiveOptions}
              numVisible={5}
              item={itemTemplate}
              thumbnail={thumbnailTemplate}
            />
          </Box>
          <Box
            display="flex"
            flexDirection={'column'}
            sx={{ width: { xs: '100%', md: '62%', marginBottom: '100px' } }}
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

            <Button
              onClick={toggleDrawerHandler(true)}
              type="submit"
              variant="contained"
              sx={{
                width: '200px',
                '&:hover': {
                  backgroundColor: 'primary.main',
                },
                marginTop: 2,
                backgroundColor: 'secondary.main',
              }}
            >
              {Constants.addToCartText}
            </Button>

            <Drawer
              anchor="right"
              open={openDrawer}
              onClose={toggleDrawerHandler(false)}
            >
              <Box height={'100%'} sx={{ overflowY: 'auto' }}>
                <Box
                  height={80}
                  width={'100%'}
                  display="flex"
                  alignItems={'center'}
                  justifyContent={'space-between'}
                  flexDirection={'row'}
                  sx={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    zIndex: 999,
                    backgroundColor: 'common.white',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <Typography
                    component={'div'}
                    variant="h5"
                    color={'primary.dark'}
                    sx={{
                      fontWeight: '400',
                      fontWeight: 'bold',
                      marginTop: '5px',
                      marginLeft: '10px',
                    }}
                  >
                    Shopping Cart
                  </Typography>
                  <IconButton
                    onClick={toggleDrawerHandler(false)}
                    size="large"
                    aria-label="search"
                    color="primary.dark"
                  >
                    <CloseRounded />
                  </IconButton>
                </Box>
                <Stack
                  direction={'column'}
                  spacing={1}
                  padding={1}
                  sx={{ marginBottom: '200px', marginTop: '80px' }}
                >
                  {data.map((item, index) => (
                    <Box
                      key={index}
                      display="flex"
                      flexDirection={'column'}
                      p={2}
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
                          height={150}
                          image={item.img}
                          alt="Image Title"
                          sx={{ cursor: 'pointer' }}
                        />
                        <Box
                          display="flex"
                          width={'300px'}
                          justifyContent={'space-arround'}
                          flexDirection={'column'}
                          sx={{ marginLeft: 3 }}
                        >
                          <Typography
                            onClick={() =>
                              navigate('/detail/' + item.title, {
                                state: {
                                  item: item,
                                },
                              })
                            }
                            variant="h6"
                            color={'primary.main'}
                            component="div"
                            sx={{
                              fontWeight: 'bold',
                              cursor: 'pointer',
                              '&:hover': {
                                color: 'secondary.main',
                              },
                            }}
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            component={'span'}
                            variant="body2"
                            color={'primary.dark'}
                            sx={{ fontWeight: '400', marginTop: '5px' }}
                          >
                            Color: Blue, Size: XL
                          </Typography>
                          <Typography
                            component={'span'}
                            variant="body2"
                            color={'primary.dark'}
                            sx={{ fontWeight: '400', marginTop: '5px' }}
                          >
                            {item.Price} /-
                          </Typography>
                          <Box
                            display="flex"
                            flexDirection={'row'}
                            alignItems={'center'}
                          >
                            <ButtonGroup
                              size="small"
                              aria-label="small outlined button group"
                            >
                              <Button>+</Button>
                              <Button>{2}</Button>
                              <Button>-</Button>
                            </ButtonGroup>
                            <Typography
                              variant="body2"
                              color={'primary.main'}
                              component="div"
                              sx={{
                                marginLeft: '5px',
                                fontWeight: 'normal',
                                cursor: 'pointer',
                                '&:hover': {
                                  color: 'secondary.main',
                                },
                              }}
                            >
                              update
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Stack>
                <Box
                  display="flex"
                  width={'100%'}
                  flexDirection={'column'}
                  sx={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    zIndex: 999,
                    backgroundColor: 'common.white',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <Box
                    display="flex"
                    justifyContent={'space-between'}
                    flexDirection={'row'}
                    sx={{ padding: 2 }}
                  >
                    <Typography
                      component={'div'}
                      variant="h6"
                      color={'primary.main'}
                      sx={{ fontWeight: '400', marginTop: '5px' }}
                    >
                      Sub Total
                    </Typography>
                    <Typography
                      component={'div'}
                      variant="h6"
                      color={'primary.main'}
                      sx={{ fontWeight: '400', marginTop: '5px' }}
                    >
                      5678 /-
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent={'space-between'}
                    flexDirection={'column'}
                    sx={{ marginTop: 1, padding: 2 }}
                  >
                    <Link
                      to="/cart"
                      state={data}
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }
                    >
                      <Button
                        fullWidth
                        onClick={toggleDrawerHandler(false)}
                        type="submit"
                        variant="contained"
                        sx={{
                          '&:hover': {
                            backgroundColor: 'primary.dark',
                            color: 'common.white',
                          },
                          backgroundColor: 'primary.light',
                          color: 'primary.dark',
                        }}
                      >
                        View Cart
                      </Button>
                    </Link>
                    <Link
                      to="/checkout"
                      state={data}
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }
                    >
                      <Button
                        fullWidth
                        onClick={toggleDrawerHandler(false)}
                        type="submit"
                        variant="contained"
                        sx={{
                          '&:hover': {
                            backgroundColor: 'primary.main',
                          },
                          marginTop: 2,
                          backgroundColor: 'secondary.main',
                        }}
                      >
                        CHECKOUT
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Drawer>

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
              variant="h6"
              component="div"
              sx={{ marginTop: 2, fontWeight: 'normal' }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum feugiat mi eget elit elementum, id pulvinar tellus
              eleifend. Integer porttitor elit id euismod elementum. Nulla vel
              molestie massa, eget iaculis elit. Quisque a tortor vel lectus
              ultricies pretium quis non purus. Pellentesque molestie leo eget
              rutrum tristique.
            </Typography>
          </Box>
        </Box>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleTabChange}>
              <Tab label="Details" sx={{ fontWeight: 'bold' }} value="1" />
              <Tab label="More Informations" value="2" />
              <Tab label="Reviews" value="3" />
              <Tab label="Shipping & Return" value="4" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Typography
              color={'primary.main'}
              variant="body2"
              component="div"
              sx={{ fontWeight: 'bold' }}
            >
              * Style is a way to say who you are without having to speak try
              trendy naira cut blue full sleeves kurti in georgette with floral
              prints on it.
            </Typography>
            <Typography
              color={'primary.main'}
              variant="body2"
              component="div"
              sx={{ fontWeight: 'bold' }}
            >
              * This featured casual wear kurti avaiable ready-to-wear in M & L
              size and has extra 2 inches of margin to adjust up to 36"- 40" for
              your body comfort.
            </Typography>
            <Typography
              color={'primary.main'}
              variant="body2"
              component="div"
              sx={{ fontWeight: 'bold' }}
            >
              * Dressed to chill this casual wear kurti for daily wear use with
              ankle-length denim or jegging pants at the office, college, or for
              an outing anywhere.
            </Typography>
            <Typography
              color={'primary.main'}
              variant="body2"
              component="div"
              sx={{ fontWeight: 'bold' }}
            >
              * Carry fancy solid color bellies or sneakers and danglers with it
              to look more cool and stylish.
            </Typography>
          </TabPanel>
          <TabPanel value="2">
            <Typography
              color={'primary.main'}
              variant="h4"
              component="div"
              sx={{ fontWeight: 'bold' }}
            >
              More Informations
            </Typography>
          </TabPanel>
          <TabPanel value="3">
            <Typography
              color={'primary.main'}
              variant="h4"
              component="div"
              sx={{ fontWeight: 'bold' }}
            >
              Reviews
            </Typography>
          </TabPanel>
          <TabPanel value="4">
            <Typography
              color={'primary.main'}
              variant="h4"
              component="div"
              sx={{ fontWeight: 'bold' }}
            >
              Shipping & Return
            </Typography>
          </TabPanel>
        </TabContext>
      </Container>
    </div>
  );
}
