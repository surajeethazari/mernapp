import React from 'react';
import BreadCrumbs from '../components/BreadCrumbs';
import { Box, Container, Typography } from '@mui/material';
import PageTransition from '../utils/PageTransition';

export default function ShippingPolicy() {
  let crumbs = [
    { name: 'Home', trigger: '/', active: true },
    { name: 'Shipping Ploicy', trigger: '/shippingPolicy', active: false },
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
        <Container component="main" maxWidth="xl">
          <Box display="flex" flexDirection={'column'} mt={5} mb={5} sx={{}}>
            <Typography
              color={'primary.dark'}
              variant="h6"
              component="div"
              sx={{ fontWeight: 'bold', marginTop: 2 }}
            >
              1. SHIPPING & DELIVERY POLICY
            </Typography>
            <Typography
              color={'primary.main'}
              variant="h6"
              component="div"
              sx={{ fontWeight: 'normal', marginTop: 2 }}
            >
              At Look, we provide Standard delivery to any address within
              Global. However, do note that we do not deliver to PO Boxes,
              military and restricted areas, all naval ports and JurongIsland.
              <br />
              <br />
              On the front, we deliver to most countries that our logistics
              partners have affiliates in and whilst we strive to keep our rates
              affordable, our focus is on getting the items to you quickly,
              promptly and safely. For a list of countries that we deliver to
              and our charges, you may select your item and proceed to the
              checkout page as charges are based on weight & volume. Upon
              entering your delivery details, we will auto calculate the
              delivery charges based on your given address without the need for
              payment or registration.
            </Typography>
            <Typography
              color={'primary.dark'}
              variant="h6"
              component="div"
              sx={{ fontWeight: 'bold', marginTop: 2 }}
            >
              2. ORDER STATUS & TRACKING
            </Typography>
            <Typography
              color={'primary.main'}
              variant="h6"
              component="div"
              sx={{ fontWeight: 'normal', marginTop: 2 }}
            >
              All orders placed from Monday to Friday (excluding public
              holidays) will be processed and shipped within 2 working days upon
              confirmation of payment, from our warehouse. This could vary with
              circumstances such as online security checks, shipping
              restrictions, payment authorization, packing and dispatching of
              order. An email confirmation will be sent for all orders once
              received.
            </Typography>
            <Typography
              color={'primary.dark'}
              variant="h6"
              component="div"
              sx={{
                fontWeight: 'bold',
                fontSize: '15px',
                marginTop: 2,
                textDecoration: 'underline',
              }}
            >
              Local Deliveries
            </Typography>
            <Typography
              color={'primary.main'}
              variant="h6"
              component="div"
              sx={{ fontWeight: 'normal', marginTop: 2 }}
            >
              There are 2 delivery options available for customer, Standard and
              Express courier.
              <br />
              <br />
              Standard Courier – is FREE for all local orders and it takes
              approximately 5 working days to reach you from the time of order.
              <br />
              <br />
              To serve you better, you may even choose the timing of your
              deliveries from 9 am to 10 pm, weekdays or Saturdays, regardless
              of Standard or Express couriers.
              <br />
              <br />
              Once the order has been dispatched, an email confirmation will be
              sent to you with the tracking number. You may check and track the
              delivery status of your orders with our local logistics partner,
              with your 6-digit Order Number. There will be an additional charge
              for re-delivery should nobody be present to receive the package.
              Please provide your contact number under the address selected upon
              checkout in order for the courier company to contact you in case
              of any unforeseen circumstances.
            </Typography>
            <Typography
              color={'primary.dark'}
              variant="h6"
              component="div"
              sx={{ fontWeight: 'bold', marginTop: 2 }}
            >
              3. MODE OF PAYMENTS
            </Typography>
            <Typography
              color={'primary.main'}
              variant="h6"
              component="div"
              sx={{ fontWeight: 'normal', marginTop: 2 }}
            >
              We accept payments via VISA/MASTER credit and debit cards. We do
              not accept payments via ATM or inter-bank transfers.
            </Typography>
          </Box>
        </Container>
      </Container>
    </PageTransition>
  );
}
