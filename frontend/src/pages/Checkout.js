import {
  Badge,
  Box,
  CardMedia,
  Container,
  Divider,
  Paper,
  Typography,
  Breadcrumbs,
  FormControlLabel,
  Button,
  TextField,
  Grid,
  FormGroup,
  Checkbox,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Stack,
} from '@mui/material';
import React from 'react';
import BreadCrumbs from '../components/BreadCrumbs';
import { useNavigate, useLocation } from 'react-router-dom';
import Constants from '../utils/Constants';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import { useTheme } from '@mui/material/styles';

export default function Checkout() {
  // y220qkHeKQLWqzPnmhvrxMf6
  const handlePayment = (e) => {
    var options = {
      upi_link: true,
      key: 'rzp_test_njQqdb9FDvm2Oq', // Enter the Key ID generated from the Dashboard
      amount: 50000, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: 'INR',
      name: 'Sonali Fashion', //your business name
      description: 'Test Transaction',
      image: '../assets/images/logo_transparent.png',
      // order_id: '1234567890', //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: 'https://eneqd3r9zrjok.x.pipedream.net/',
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        name: 'Surajeet Hazari', //your customer's name
        email: 'surajeet407@gmail.com',
        contact: '8900162177', //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#3399cc',
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
    e.preventDefault();
  };

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(true);
  const steps = ['Shipping', 'Review & Payments'];
  const navigate = useNavigate();
  const obj = useLocation();
  const [item, setItem] = React.useState(obj.state);
  const [country, setCountry] = React.useState('');
  const [province, setProvince] = React.useState('');
  let crumbs = [
    { name: 'Home', trigger: '/', active: true },
    { name: 'Payment Success', trigger: '/paymentSuccess', active: false },
  ];
  const handleChangeProvince = (event) => {
    setProvince(event.target.value);
  };

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  const handleNext = (value) => {
    setActiveStep(value);
  };

  const handleBack = (value) => {
    setActiveStep(value);
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
      <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
        <Box
          width={'50%'}
          display={'flex'}
          flexDirection={'row'}
          alignItems={'center'}
        >
          <Box
            width="46%"
            sx={{
              height: { xs: 4, md: 8 },
              backgroundColor: activeStep
                ? theme.palette.tertiary.main
                : theme.palette.primary.main,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
            }}
          ></Box>
          <Box
            onClick={() => handleBack(true)}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'space-arround'}
            alignItems={'center'}
            sx={{
              width: { md: '6%', xs: '10%' },
              height: { md: '50px', xs: '30px' },
              borderWidth: { md: 8, xs: 3 },
              borderColor: activeStep
                ? theme.palette.tertiary.main
                : theme.palette.primary.main,
              backgroundColor: theme.palette.common.white,
              borderStyle: 'solid',
              borderRadius: '0% 0% 45% 45%',
            }}
          >
            <LocalShippingIcon
              sx={{
                color: activeStep
                  ? theme.palette.tertiary.main
                  : theme.palette.primary.main,
                fontSize: { md: '28px', xs: '12px' },
                marginTop: 1,
              }}
            />
            <Typography
              variant="h6"
              color={'primary'}
              align="center"
              sx={{
                marginTop: { md: 3, xs: 1.5 },
                fontSize: { xs: '15px', md: '25px' },
              }}
            >
              Shipping
            </Typography>
          </Box>
          <Box
            width="46%"
            sx={{
              height: { xs: 4, md: 8 },
              backgroundColor: activeStep
                ? theme.palette.tertiary.main
                : theme.palette.primary.main,
            }}
          ></Box>
        </Box>
        <Box
          width={'50%'}
          display={'flex'}
          flexDirection={'row'}
          alignItems={'center'}
        >
          <Box
            width="46%"
            sx={{
              height: { xs: 4, md: 8 },
              backgroundColor: !activeStep
                ? theme.palette.tertiary.main
                : theme.palette.primary.main,
            }}
          ></Box>
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'space-arround'}
            alignItems={'center'}
            sx={{
              width: { md: '6%', xs: '10%' },
              height: { md: '50px', xs: '30px' },
              borderWidth: { md: 8, xs: 3 },
              borderColor: !activeStep
                ? theme.palette.tertiary.main
                : theme.palette.primary.main,
              backgroundColor: theme.palette.common.white,
              borderStyle: 'solid',
              borderRadius: '0% 0% 45% 45%',
            }}
          >
            <CreditScoreIcon
              sx={{
                color: !activeStep
                  ? theme.palette.tertiary.main
                  : theme.palette.primary.main,
                fontSize: { md: '28px', xs: '12px' },
                marginTop: 1,
              }}
            />
            <Typography
              color={'primary'}
              align="center"
              sx={{
                marginTop: { md: 3, xs: 1.5 },
                fontSize: { xs: '15px', md: '25px' },
              }}
            >
              Payment
            </Typography>
          </Box>
          <Box
            width="46%"
            sx={{
              height: { xs: 4, md: 8 },
              backgroundColor: !activeStep
                ? theme.palette.tertiary.main
                : theme.palette.primary.main,
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
            }}
          ></Box>
        </Box>
      </Box>
      <Box
        width={'100%'}
        justifyContent={'space-between'}
        display="flex"
        sx={{
          marginTop: 10,
          marginBottom: '60px',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <Box
          display="flex"
          flexDirection={'column'}
          sx={{ width: { xs: '100%', md: '68%' } }}
        >
          {/* <Typography variant="h5" color={'primary'} sx={{ fontWeight: 'bold' }}>
            Customer Account
          </Typography>
          <Box sx={{ padding: 2, boxShadow: 3, marginTop: 2 }}>
            <Typography variant="h6" color={'primary'} sx={{}}>
              Email Address
            </Typography>
            <TextField
              color="secondary"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </Box>
          <Typography variant="h5" color={'primary'} sx={{ marginTop: 4, fontWeight: 'bold' }}>
            Shipping Address
          </Typography>

          <Box
            component="form"
            noValidate
            sx={{ mt: 3, padding: 2, boxShadow: 2 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  label="Full Name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required fullWidth label="Phone" name="phone" />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth label="Address" name="address" />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth label="City" name="city" />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Country</InputLabel>
                  <Select
                    value={country}
                    fullWidth
                    label="Country"
                    onChange={handleChangeCountry}
                  >
                    <MenuItem value={'India'}>India</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Province</InputLabel>
                  <Select
                    value={province}
                    fullWidth
                    label="Province"
                    onChange={handleChangeProvince}
                  >
                    <MenuItem value={'West Bengal'}>West Bengal</MenuItem>
                    <MenuItem value={'Delhi'}>Delhi</MenuItem>
                    <MenuItem value={'Karnataka'}>Karnataka</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Postal Code"
                  name="pincode"
                />
              </Grid>
            </Grid>
          </Box> */}
          <Typography
            variant="h5"
            color={'primary'}
            sx={{ fontWeight: 'bold' }}
          >
            Apply Discount Code
          </Typography>
          <Box sx={{ padding: 2, boxShadow: 3, marginTop: 2 }}>
            <Box
              display={'flex'}
              flexDirection={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}
            >
              <Box width={'78%'}>
                <TextField
                  color="secondary"
                  margin="normal"
                  fullWidth
                  id="coupon"
                  label="Enter Coupon Code"
                  name="coupon"
                  autoComplete="coupon"
                />
              </Box>
              <Box width={'20%'}>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  sx={{
                    padding: 1,
                    mt: 1,
                    fontSize: '20px',
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
                    display: { xs: 'none', md: 'block' },
                  }}
                >
                  {Constants.applyBtnText}
                </Button>
              </Box>
            </Box>
          </Box>
          <Typography
            variant="h5"
            color={'primary'}
            sx={{ mt: 3, fontWeight: 'bold' }}
          >
            Payment Method
          </Typography>
          <Box sx={{ padding: 2, boxShadow: 3, marginTop: 2 }}>
            <Box
              width={'100%'}
              display={'flex'}
              flexDirection={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}
              sx={{ mt: 1 }}
            >
              <FormControlLabel control={<Checkbox />} label="Razor Pay" />

              <Button
                onClick={(e) => handlePayment(e)}
                type="submit"
                variant="contained"
                sx={{
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
                  display: { xs: 'none', md: 'block' },
                }}
              >
                {Constants.payWithRazorText}
              </Button>
            </Box>
            <Divider sx={{ marginTop: 2 }} />
            <FormControlLabel
              sx={{ mb: 1, mt: 2 }}
              control={<Checkbox />}
              label="Cash On Delivery"
            />
          </Box>
          <Box
            sx={{ marginBottom: 3, marginTop: 2, display: 'flex' }}
            alignItems={'center'}
            justifyContent={'end'}
          >
            <Button
              onClick={() => handleNext(false)}
              type="submit"
              variant="contained"
              sx={{
                width: '300px',
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
              {Constants.placeOrderText}
            </Button>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection={'column'}
          sx={{
            boxShadow: 2,
            padding: 2,
            width: { xs: '100%', md: '28%' },
            marginBottom: '100px',
            marginTop: { xs: 1, md: 7 },
          }}
        >
          <Typography
            variant="h5"
            color={'primary'}
            sx={{ fontWeight: 'bold', marginBottom: 1 }}
          >
            Order Summary
          </Typography>
          <Stack
            direction={'column'}
            spacing={1}
            padding={1}
            sx={{ maxHeight: '250px', overflow: 'auto' }}
          >
            {/* {data.map((item, index) => (
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
            ))} */}
          </Stack>
          <Divider sx={{ marginTop: 2 }} />
          <Box
            display="flex"
            justifyContent={'space-between'}
            flexDirection={'row'}
            sx={{ marginTop: 2 }}
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
              1 Item
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
            flexDirection={'row'}
            sx={{ marginTop: '10px' }}
          >
            <Typography
              component={'div'}
              variant="h6"
              color={'primary.main'}
              sx={{ fontWeight: '400', marginTop: '5px' }}
            >
              Shipping
            </Typography>
            <Typography
              component={'div'}
              variant="h6"
              color={'primary.main'}
              sx={{ fontWeight: '400', marginTop: '5px' }}
            >
              Standard Delivery
            </Typography>
            <Typography
              component={'div'}
              variant="h6"
              color={'primary.main'}
              sx={{ fontWeight: '400', marginTop: '5px' }}
            >
              0 /-
            </Typography>
          </Box>
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
              Total Price
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
              Discount
            </Typography>
            <Typography
              component={'div'}
              variant="h6"
              color={'primary.main'}
              sx={{ fontWeight: 'bold', marginTop: '5px' }}
            >
              500 /-
            </Typography>
          </Box>
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
              5178 /-
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
          <Typography
            variant="h5"
            color={'primary'}
            sx={{ marginTop: 3, fontWeight: 'bold' }}
          >
            Shipping Method
          </Typography>
          <Divider sx={{ marginTop: 2 }} />
          <Typography variant="h6" color={'primary'} sx={{ marginTop: 2 }}>
            Shipping Cost - Standard
          </Typography>
          <Button
            onClick={() =>
              navigate('/paymentSuccess', {
                state: {
                  item: item,
                },
              })
            }
            type="submit"
            fullWidth
            variant="contained"
            sx={{
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
              mt: 3,
              mb: 2,
              display: { xs: 'block', md: 'none' },
            }}
          >
            {Constants.continueePaymentText}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
