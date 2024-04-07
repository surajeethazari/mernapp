import * as React from 'react';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowForwardTwoTone from '@mui/icons-material/ArrowForwardTwoTone';
import Container from '@mui/material/Container';
import Constants from '../utils/Constants';
import { useNavigate, NavLink, Link } from 'react-router-dom';
import BreadCrumbs from '../components/BreadCrumbs';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useLocation } from 'react-router-dom';
import { ButtonGroup, CardMedia, TextField } from '@mui/material';
import PageTransition from '../utils/PageTransition';

export default function Cart() {
  const navigate = useNavigate();
  const obj = useLocation();
  const [item, setItem] = React.useState(obj.state);

  let crumbs = [
    { name: 'Home', trigger: '/', active: true },
    { name: 'Cart', trigger: '/cart', active: false },
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
        {item && item.length > 0 ? (
          <Box
            sx={{
              marginTop: '50px',
              marginBottom: '50px',
              flexDirection: 'column',
            }}
          >
            <TableContainer
              component={Paper}
              sx={{
                maxHeight: '500px',
                overflow: 'auto',
                boxShadow: 4,
                padding: 2,
              }}
            >
              <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography
                        color={'primary.main'}
                        variant="h6"
                        component="div"
                        sx={{ fontWeight: 'bold', marginLeft: 1 }}
                      >
                        Product
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography
                        color={'primary.main'}
                        variant="h6"
                        component="div"
                        sx={{ fontWeight: 'bold', marginLeft: 1 }}
                      >
                        Price
                      </Typography>
                    </TableCell>
                    <TableCell
                      sx={{ display: { xs: 'none', md: 'table-cell' } }}
                      align="right"
                    >
                      <Typography
                        color={'primary.main'}
                        variant="h6"
                        component="div"
                        sx={{ fontWeight: 'bold', marginLeft: 1 }}
                      >
                        Qty.
                      </Typography>
                    </TableCell>
                    <TableCell
                      sx={{ display: { xs: 'none', md: 'table-cell' } }}
                      align="right"
                    >
                      <Typography
                        color={'primary.main'}
                        variant="h6"
                        component="div"
                        sx={{ fontWeight: 'bold', marginLeft: 1 }}
                      >
                        Total
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {item.map((innerItem, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Box display="flex" flexDirection={'row'}>
                          <CardMedia
                            component="img"
                            height="100px"
                            width="100px"
                            image={innerItem.img}
                            alt="Image Title"
                          />
                          <Box
                            display="flex"
                            flexDirection={'column'}
                            sx={{ marginLeft: 2 }}
                          >
                            <Typography
                              color={'primary.main'}
                              variant="h6"
                              component="div"
                              sx={{ fontWeight: 'normal', marginLeft: 1 }}
                            >
                              {innerItem.title}
                            </Typography>
                            <Typography
                              color={'primary.main'}
                              variant="body2"
                              component="div"
                              sx={{ fontWeight: 'normal', marginLeft: 1 }}
                            >
                              Size: L
                            </Typography>
                            <Typography
                              color={'primary.main'}
                              variant="body2"
                              component="div"
                              sx={{ fontWeight: 'normal', marginLeft: 1 }}
                            >
                              Color: Blue
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell align="right">
                        <Typography
                          color={'primary.main'}
                          variant="h5"
                          component="div"
                          sx={{ fontWeight: 'normal', marginLeft: 1 }}
                        >
                          {innerItem.Price} /-
                        </Typography>
                        <ButtonGroup
                          sx={{
                            marginTop: 1,
                            display: { xs: 'block', md: 'none' },
                          }}
                          size="small"
                          aria-label="small outlined button group"
                        >
                          <Button>+</Button>
                          <Button>{2}</Button>
                          <Button>-</Button>
                        </ButtonGroup>
                      </TableCell>
                      <TableCell
                        sx={{ display: { xs: 'none', md: 'table-cell' } }}
                        align="right"
                      >
                        <ButtonGroup
                          size="small"
                          aria-label="small outlined button group"
                        >
                          <Button>+</Button>
                          <Button>{2}</Button>
                          <Button>-</Button>
                        </ButtonGroup>
                      </TableCell>
                      <TableCell
                        sx={{ display: { xs: 'none', md: 'table-cell' } }}
                        align="right"
                      >
                        <Typography
                          color={'primary.main'}
                          variant="h6"
                          component="div"
                          sx={{
                            fontWeight: 'normal',
                            marginLeft: 1,
                            textDecoration: 'underline',
                          }}
                        >
                          {innerItem.Price} /-
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            {/* <Typography color={'primary.main'}  variant="h6" component="div" sx={{fontWeight: 'bold', marginTop: "20px"}}>
                 Promotion Code?
              </Typography>
              <Box alignItems={'center'} display={'flex'} flexDirection="row">
                <TextField
                  sx={{marginTop: 2, width: 300}}
                  label="Enter Coupon Code"
                  variant="filled"
                />
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ '&:hover': {
                      backgroundColor: 'primary.main',
                    }, marginTop: 2, padding: 2, marginLeft: 2,  backgroundColor: 'secondary.main' }}
                  >
                    APPLY
                  </Button>
              </Box> */}
            <Box
              display={'flex'}
              alignItems={'end'}
              justifyContent={'end'}
              sx={{ marginTop: '20px', marginBottom: '60px' }}
            >
              <Box width={'500px'} flexDirection="column" display="flex">
                <Typography
                  color={'primary.main'}
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: '400' }}
                >
                  ORDER SUMMARY
                </Typography>
                <Box
                  display="flex"
                  justifyContent={'space-between'}
                  flexDirection={'row'}
                  sx={{ marginTop: 1 }}
                >
                  <Typography
                    color={'primary.main'}
                    variant="h6"
                    component="div"
                    sx={{ fontWeight: 'noraml' }}
                  >
                    Sub Total:
                  </Typography>
                  <Typography
                    color={'primary.main'}
                    variant="h6"
                    component="div"
                    sx={{ fontWeight: 'normal', marginLeft: 1 }}
                  >
                    500 /-
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent={'space-between'}
                  flexDirection={'row'}
                  sx={{ marginTop: 1 }}
                >
                  <Typography
                    color={'primary.main'}
                    variant="h6"
                    component="div"
                    sx={{ fontWeight: '700' }}
                  >
                    Total:
                  </Typography>
                  <Typography
                    color={'primary.main'}
                    variant="h6"
                    component="div"
                    sx={{ fontWeight: 'normal', marginLeft: 1 }}
                  >
                    500 /-
                  </Typography>
                </Box>
                <Typography
                  color={'primary.main'}
                  variant="body2"
                  component="div"
                  sx={{ fontWeight: '400' }}
                >
                  (Inclusive of tax 0.00 /-)
                </Typography>
                <Button
                  onClick={() => {
                    navigate('/checkout', {
                      state: {
                        item: item,
                      },
                    });
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  type="submit"
                  variant="contained"
                  sx={{
                    marginTop: 2,
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
                  CHECKOUT
                </Button>
              </Box>
            </Box>
          </Box>
        ) : (
          <Container component="main" maxWidth="xs">
            <Box
              height={400}
              width={500}
              my={10}
              mb={10}
              mx={-10}
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection={'column'}
              p={5}
            >
              <Typography variant="h4" color={'primary'}>
                {Constants.shoppingCartText}
              </Typography>
              <Typography mt={5} variant="body2" color={'primary'}>
                {Constants.shoppingCartEmptyText}
              </Typography>
              <Button
                onClick={() => navigate('/products')}
                endIcon={<ArrowForwardTwoTone />}
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  '&:hover': {
                    backgroundColor: 'primary.main',
                  },
                  mt: 3,
                  mb: 2,
                  backgroundColor: 'secondary.main',
                }}
              >
                {Constants.continueShoppingText}
              </Button>
            </Box>
          </Container>
        )}
      </Container>
    </PageTransition>
  );
}
