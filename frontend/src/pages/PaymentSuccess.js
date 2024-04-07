import {
  Badge,
  Box,
  Button,
  CardMedia,
  Container,
  Divider,
  IconButton,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import BreadCrumbs from '../components/BreadCrumbs';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Masonry from '@mui/lab/Masonry';
import CheckCircleOutlined from '@mui/icons-material/CheckCircleOutlined';
import { data } from '../assets/data/featuredCollection';
import ArrowForwardTwoTone from '@mui/icons-material/ArrowForwardTwoTone';
import Constants from '../utils/Constants';
import PageTransition from '../utils/PageTransition';

export default function PaymentSuccess() {
  const navigate = useNavigate();
  const obj = useLocation();
  const [item, setItem] = React.useState(data);
  console.log(item[0][0]);
  let crumbs = [
    { name: 'Home', trigger: '/', active: true },
    { name: 'Payment Success', trigger: '/paymentSuccess', active: false },
  ];

  return (
    <PageTransition>
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
            sx={{ width: { xs: '100%', md: '70%' } }}
          >
            <Box display="flex" alignItems={'center'} flexDirection={'row'}>
              <IconButton
                disableRipple={true}
                size="large"
                aria-label="search"
                color={'success'}
                sx={{ fontSize: '25px' }}
              >
                <CheckCircleOutlined sx={{ fontSize: '100px' }} />
              </IconButton>
              <Box
                display="flex"
                flexDirection={'column'}
                sx={{ marginLeft: 2 }}
              >
                <Typography
                  component={'div'}
                  variant="h6"
                  color={'primary.main'}
                  sx={{ fontWeight: 'bold' }}
                >
                  Order ID: #12345
                </Typography>
                <Typography
                  component={'div'}
                  variant="h6"
                  color={'primary.main'}
                  sx={{ fontWeight: 'bold' }}
                >
                  Thank you for shopping with us!
                </Typography>
              </Box>
            </Box>
            <Masonry sx={{ marginTop: 2 }} columns={2} spacing={2}>
              <Paper sx={{ boxShadow: 2, padding: 3, height: 180 }}>
                <Typography
                  color={'primary.main'}
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: 'bold' }}
                >
                  Contact Information
                </Typography>
                <Divider sx={{ my: 3 }} />
                <Typography
                  component={'div'}
                  variant="body2"
                  color={'secondary.main'}
                  sx={{ fontWeight: 'bold' }}
                >
                  Name: Suro jeet
                </Typography>
                <Typography
                  component={'div'}
                  variant="body2"
                  color={'secondary.main'}
                  sx={{ fontWeight: 'bold' }}
                >
                  Email: sonanlifashioninfo@gmail.com
                </Typography>
              </Paper>
              <Paper sx={{ boxShadow: 2, padding: 3, height: 180 }}>
                <Typography
                  color={'primary.main'}
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: 'bold' }}
                >
                  Payment Method
                </Typography>
                <Divider sx={{ my: 3 }} />
                <Typography
                  component={'div'}
                  variant="body2"
                  color={'secondary.main'}
                  sx={{ fontWeight: 'bold' }}
                >
                  Credit Card
                </Typography>
              </Paper>
              <Paper sx={{ boxShadow: 2, padding: 3, height: 250 }}>
                <Typography
                  color={'primary.main'}
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: 'bold' }}
                >
                  Shipping Address
                </Typography>
                <Divider sx={{ my: 3 }} />
                <Typography
                  component={'div'}
                  variant="body2"
                  color={'secondary.main'}
                  sx={{ fontWeight: 'bold' }}
                >
                  Surajeet hazari
                </Typography>
                <Typography
                  component={'div'}
                  variant="body2"
                  color={'secondary.main'}
                  sx={{ fontWeight: 'bold' }}
                >
                  106, Chaklalpur
                </Typography>
                <Typography
                  component={'div'}
                  variant="body2"
                  color={'secondary.main'}
                  sx={{ fontWeight: 'bold' }}
                >
                  Radhamohanpur
                </Typography>
                <Typography
                  component={'div'}
                  variant="body2"
                  color={'secondary.main'}
                  sx={{ fontWeight: 'bold' }}
                >
                  West bengal
                </Typography>
                <Typography
                  component={'div'}
                  variant="body2"
                  color={'secondary.main'}
                  sx={{ fontWeight: 'bold' }}
                >
                  Pin: 721160
                </Typography>
              </Paper>
              <Paper sx={{ boxShadow: 2, padding: 3, height: 250 }}>
                <Typography
                  color={'primary.main'}
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: 'bold' }}
                >
                  Billing Address
                </Typography>
                <Divider sx={{ my: 3 }} />
                <Typography
                  component={'div'}
                  variant="body2"
                  color={'secondary.main'}
                  sx={{ fontWeight: 'bold' }}
                >
                  Surajeet hazari
                </Typography>
                <Typography
                  component={'div'}
                  variant="body2"
                  color={'secondary.main'}
                  sx={{ fontWeight: 'bold' }}
                >
                  106, Chaklalpur
                </Typography>
                <Typography
                  component={'div'}
                  variant="body2"
                  color={'secondary.main'}
                  sx={{ fontWeight: 'bold' }}
                >
                  Radhamohanpur
                </Typography>
                <Typography
                  component={'div'}
                  variant="body2"
                  color={'secondary.main'}
                  sx={{ fontWeight: 'bold' }}
                >
                  West bengal
                </Typography>
                <Typography
                  component={'div'}
                  variant="body2"
                  color={'secondary.main'}
                  sx={{ fontWeight: 'bold' }}
                >
                  Pin: 721160
                </Typography>
              </Paper>
            </Masonry>
          </Box>
          <Box
            display="flex"
            flexDirection={'column'}
            sx={{
              width: { xs: '100%', md: '30%' },

              marginTop: { xs: 2, md: 5 },
            }}
          >
            <Link
              to="/products"
              state={data}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Button
                fullWidth
                endIcon={<ArrowForwardTwoTone />}
                type="submit"
                variant="contained"
                sx={{
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                    color: 'common.white',
                  },
                  backgroundColor: 'secondary.dark',
                  color: 'common.white',
                }}
              >
                {Constants.continueShoppingText}
              </Button>
            </Link>
            <Box
              display="flex"
              flexDirection={'column'}
              sx={{
                boxShadow: 2,
                padding: 2,
                marginTop: { xs: 2, md: 9 },
              }}
            >
              <Typography
                variant="h5"
                color={'primary'}
                sx={{ fontWeight: 'bold', marginBottom: 1, marginTop: 3 }}
              >
                Order Summary
              </Typography>
              {/* <Stack
            direction={'column'}
            spacing={1}
            padding={1}
            sx={{ maxHeight: '250px', overflow: 'auto' }}
          >
            {data.map((item, index) => (
              <Box key={index} display="flex" flexDirection={'column'}>
                <Box key={index} display="flex" flexDirection={'row'}>
                  <CardMedia
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
                    sx={{ marginLeft: 3 }}
                  >
                    <Typography
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
                      {item.Price} /- (Quantity: 1)
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Stack> */}
              <Divider sx={{ marginTop: 2 }} />
              <Box
                display="flex"
                justifyContent={'space-between'}
                flexDirection={'row'}
              >
                <Typography
                  component={'div'}
                  variant="h6"
                  color={'primary.main'}
                  sx={{ fontWeight: 'bold', marginTop: '5px' }}
                >
                  Total
                </Typography>
                <Typography
                  component={'div'}
                  variant="h6"
                  color={'primary.main'}
                  sx={{ fontWeight: 'bold', marginTop: '5px' }}
                >
                  5678 /-
                </Typography>
              </Box>
              <Typography
                component={'div'}
                variant="body2"
                color={'primary.main'}
                sx={{ fontWeight: '400', marginTop: '5px' }}
              >
                (Inclusive of tax $0.00)
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </PageTransition>
  );
}
