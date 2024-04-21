import React from 'react';
import BreadCrumbs from '../components/BreadCrumbs';
import { Box, Container, List, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import PageTransition from '../utils/PageTransition';

export default function ReturnPolicy() {
  let crumbs = [
    { name: 'Home', trigger: '/', active: true },
    { name: 'Return Ploicy', trigger: '/returnPolicy', active: false },
  ];
  let refundConditionLists = [
    'We are committed to maintaining a long-lasting relationship with our customers by providing them with 100% satisfaction. If you are unsatisfied with your purchase for any reason, we will gladly accept the return of the product. We offer a generous 7-day, no-questions-asked return policy.',
    'To request a return, kindly send an email to support@ethnicplus.in within 7 days from the date of delivery. Please note that return requests will only be accepted via email and not through any other medium.',
    'The customer will be responsible for shipping the product back to our warehouse in Surat. Ethnic Plus will reimburse 120/- rupees in reward points for the return shipment.',
    'Refunds will be processed in the form of reward points, which can be used for future purchases. These reward points will have a validity of 1 year from the date of credit.',
    'Please note that reward points will be issued for the product price paid by the customer; shipping charges are non-refundable.',
    'Allow 2-3 business days after the product is received back at our warehouse in Surat for the processing of reward points.',
    "If you have any questions about our return/refund policies, please don't hesitate to contact us at sonanlifashioninfo@gmail.com for further assistance.",
    'Please be aware that purchases made or orders placed using store credit/reward points (either in part or in full) are not eligible for return or exchange. Additionally, purchases made or orders placed using store credit/reward points (either in part or in full) are not eligible for any discounts.',
    'For claims regarding receiving the wrong product, a different product, a damaged product, or a defective product, the customer must provide an unboxing video of the received package. The video should cover all sides of the outer packaging and inner items in a single frame, without any cuts or joints. Shipping labels and other details must be clearly visible in the video.',
    'Thank you for choosing Ethnic Plus. We value your satisfaction and strive to provide you with the best shopping experience possible.',
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
              color={'common.white'}
              variant="h6"
              component="div"
              sx={{
                fontWeight: 'normal',
                marginTop: 2,
                padding: 4,
                borderWidth: 1,
                borderColor: 'primary.light',
                backgroundColor: 'error.light',
              }}
            >
              Quality products that are priced at an honest value and backed by
              the best customer service possible. Our customers will remain our
              focus in the future. We will take care of each customer, one at a
              time, each time we hear from him or her. After all, everything is
              about… Emotions and Expressions...
              <br />
              <br />
              We are always looking forward to giving you the best of products
              at the best of prices and with the best of hopes that we continue
              our relations till time abides with your love for things Indian!
              However if due to some unforeseen situation you require the return
              of the product then the following terms apply for a mutually
              consented return.
            </Typography>
            <Typography
              color={'primary.dark'}
              variant="h6"
              component="div"
              sx={{ fontWeight: 'bold', marginTop: 2 }}
            >
              Return/Refund Policy:
            </Typography>
            <List>
              {refundConditionLists.map((item, index) => (
                <Box
                  key={index}
                  display="flex"
                  flexDirection={'row'}
                  alignItems={'start'}
                >
                  <CircleIcon
                    sx={{
                      color: 'primary.main',
                      fontSize: '10px',
                      marginTop: '20px',
                    }}
                  />
                  <Typography
                    color={'primary.main'}
                    variant="h6"
                    component="div"
                    sx={{ fontWeight: 'normal', marginTop: 1, marginLeft: 1 }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </List>
          </Box>
        </Container>
      </Container>
    </PageTransition>
  );
}
