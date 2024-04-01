import {
  Box,
  Container,
  Divider,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import React from 'react';
import BreadCrumbs from '../components/BreadCrumbs';
import CircleIcon from '@mui/icons-material/Circle';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import indiamap from '../assets/images/indiamap.jpg';

export default function AboutUs() {
  const theme = useTheme();
  let crumbs = [
    { name: 'Home', trigger: '/', active: true },
    { name: 'About Us', trigger: '/about', active: false },
  ];

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
      <Container component="main" maxWidth="xl">
        <Box display="flex" flexDirection={'column'} mt={5} mb={5} sx={{}}>
          <Box
            display="flex"
            justifyContent={'space-between'}
            flexDirection={'row'}
            sx={{}}
          >
            <Box width={'48%'} display="flex" flexDirection={'column'}>
              <Typography
                color={'primary.dark'}
                variant="h6"
                component="div"
                sx={{ fontWeight: 'bold', marginTop: 2 }}
              >
                TRUST SONALI FASHION
              </Typography>
              <Typography
                color={'primary.main'}
                variant="h6"
                component="div"
                sx={{ fontWeight: 'normal', marginTop: 2 }}
              >
                Combining cutting-edge design with an affordable price tag,
                we've been pushing boundaries for the past two years to bring
                you all the looks test looks for less.
              </Typography>
            </Box>
            <Box width={'48%'} display="flex" flexDirection={'column'}>
              <Typography
                color={'primary.dark'}
                variant="h6"
                component="div"
                sx={{ fontWeight: 'bold', marginTop: 2 }}
              >
                OUR MISSION
              </Typography>
              <Typography
                color={'primary.main'}
                variant="h6"
                component="div"
                sx={{ fontWeight: 'normal', marginTop: 2 }}
              >
                Through Ethnic Plus's business model, we aim to contribute to
                the sustainable development of society and that of the
                environment with which we interact.
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent={'space-between'}
            flexDirection={'row'}
            sx={{}}
          >
            <Box width={'48%'} display="flex" flexDirection={'column'}>
              <Typography
                color={'primary.dark'}
                variant="h6"
                component="div"
                sx={{ fontWeight: 'bold', marginTop: 2 }}
              >
                OUR INSPIRATION
              </Typography>
              <Typography
                color={'primary.main'}
                variant="h6"
                component="div"
                sx={{ fontWeight: 'normal', marginTop: 2 }}
              >
                We believe at Ethnic Plus that fashion should be fun, that
                luxury should be affordable, and that looking gorgeous needn't
                be difficult.
              </Typography>
            </Box>
            <Box width={'48%'} display="flex" flexDirection={'column'}>
              <Typography
                color={'primary.dark'}
                variant="h6"
                component="div"
                sx={{ fontWeight: 'bold', marginTop: 2 }}
              >
                OUR PASSION
              </Typography>
              <Typography
                color={'primary.main'}
                variant="h6"
                component="div"
                sx={{ fontWeight: 'normal', marginTop: 2 }}
              >
                Ethnic Plus's design team works towards bringing the latest
                trends to its customers. From sourcing raw materials to the
                construction of the garment constant R&D goes into creating a
                better product for the consumer.
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent={'space-between'}
            flexDirection={'row'}
            mt={5}
            sx={{ position: 'relative' }}
          >
            <Box width={'48%'} display="flex" flexDirection={'column'}>
              <img
                srcSet={indiamap}
                src={indiamap}
                height={'500px'}
                alt={'map'}
                loading="lazy"
              />
              <Box
                width={'48%'}
                height={'80px'}
                sx={{
                  position: 'absolute',
                  left: 0,
                  bottom: 0,
                  backgroundColor: 'secondary.light',
                }}
              >
                <Typography
                  color={'appmain.main'}
                  align="center"
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: 'bold', marginTop: 2 }}
                >
                  Thousand of families with us!
                </Typography>
              </Box>
            </Box>
            <Box
              width={'48%'}
              height={'500px'}
              justifyContent={'center'}
              display="flex"
              flexDirection={'column'}
            >
              <Typography
                color={'primary.dark'}
                align="center"
                variant="h6"
                component="div"
                sx={{ fontWeight: 'bold', marginTop: 5 }}
              >
                LET'S GET STARTED
              </Typography>
              <Box
                display="flex"
                alignItems="center"
                flexDirection={'column'}
                sx={{}}
              >
                <Divider sx={{ marginTop: 1, width: '150px' }} />
              </Box>
              <Typography
                color={'primary.main'}
                align="center"
                variant="h6"
                component="div"
                sx={{ fontWeight: 'normal', marginTop: 2 }}
              >
                A warm welcome to this amazing journey, Just{' '}
                <Link
                  to="/signin"
                  style={{ color: theme.palette.secondary.main }}
                >
                  Sign In
                </Link>{' '}
                for the best shopping experience.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Container>
  );
}
