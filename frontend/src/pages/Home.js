import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import DISCOUNT from '../assets/images/DISCOUNT.png';
import KurtiBanner from '../assets/images/KurtiBanner.jpg';
import PalazzoBanner from '../assets/images/PalazzoBanner.jpg';
import SalwarBanner from '../assets/images/SalwarBanner.png';

import { Carousel } from 'antd';
import Masonry from '@mui/lab/Masonry';
import Typography from '@mui/material/Typography';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Paper,
  Stack,
} from '@mui/material';
import Constants from '../utils/Constants';
import { useTheme } from '@mui/material/styles';
import data from '../assets/data/featuredCollection.json';
import { useNavigate, NavLink, Link } from 'react-router-dom';

export default function Home(props) {
  const navigate = useNavigate();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const onProductTitleClick = (item) => {
    navigate('/detail/' + item.title, {
      state: {
        item: item,
      },
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box sx={{ marginTop: 8 }}>
      <Carousel dotPosition="bottom" autoplay effect="fade" dots="true">
        <CardMedia
          component="img"
          height="400"
          image={KurtiBanner}
          alt="Image Title"
        />
        <CardMedia
          component="img"
          height="400"
          image={PalazzoBanner}
          alt="Image Title"
        />
        <CardMedia
          component="img"
          height="400"
          image={SalwarBanner}
          alt="Image Title"
        />
      </Carousel>
      <Container component="main" maxWidth="xl">
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
            width={450}
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
        {/* <Stack direction="row" spacing={2} sx={{ marginTop: 5 }} columns={3}>
          {data.map((item, index) => (
            <Paper elevation={8} key={index} sx={{ height: item.height }}>
              <Card>
                <CardContent
                  style={{ background: theme.palette.primary.light }}
                >
                  <CardMedia
                    component="img"
                    height={item.height - 90}
                    image={item.img}
                    alt="Image Title"
                  />
                  <Typography
                    onClick={() => onProductTitleClick(item)}
                    color={'primary.main'}
                    variant="h6"
                    component="div"
                    sx={{ fontWeight: 'bold' }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    component={'div'}
                    variant="body2"
                    color={'secondary.main'}
                    sx={{ fontWeight: 'bold' }}
                  >
                    Price: {item.Price}/-
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          ))}
        </Stack> */}
      </Container>
    </Box>
  );
}
