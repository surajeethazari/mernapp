import React from 'react';
import { Drawer } from 'rsuite';
import {
  Box,
  Button,
  ButtonGroup,
  CardMedia,
  Stack,
  Typography,
} from '@mui/material';
import { data } from '../assets/data/featuredCollection';
import { useNavigate, NavLink, Link } from 'react-router-dom';

export default function CartDrawer(props) {
  const navigate = useNavigate();

  return (
    <Drawer
      size="xs"
      style={{ zIndex: 1500 }}
      placement={'right'}
      open={props.openDrawer}
      onClose={props.closeDrawer}
    >
      <Drawer.Header>
        <Drawer.Title>
          <Typography
            component={'div'}
            variant="h6"
            color={'primary.dark'}
            sx={{
              fontWeight: 'normal',
              marginTop: '2px',
            }}
          >
            Cart Items (15)
          </Typography>
          <Typography
            component={'div'}
            variant="h6"
            color={'primary.dark'}
            sx={{
              fontWeight: 'normal',
              marginTop: 2,
            }}
          >
            Sub Total: 5678 /-
          </Typography>
        </Drawer.Title>
        <Drawer.Actions>
          <Box
            display="flex"
            flexDirection={'column'}
            width={'120px'}
            justifyContent={'space-between'}
          >
            <Link
              to="/cart"
              state={data}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Button
                fullWidth
                onClick={props.closeDrawer}
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
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Button
                fullWidth
                onClick={props.closeDrawer}
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
        </Drawer.Actions>
      </Drawer.Header>
      <Drawer.Body style={{ padding: 0 }}>
        <Stack
          direction={'column'}
          spacing={1}
          padding={1}
          sx={{
            marginTop: 2,
            marginBottom: 2,
          }}
        >
          {data.map((item, index) => (
            <Box key={index} display="flex" flexDirection={'column'} p={2}>
              <Box
                display="flex"
                flexDirection={'row'}
                justifyContent={'space-between'}
              >
                <CardMedia
                  onClick={() =>
                    navigate('/detail/' + item.title, {
                      state: {
                        item: item,
                      },
                    })
                  }
                  component="img"
                  image={item.img}
                  alt="Image Title"
                  sx={{ cursor: 'pointer', width: 150, height: 150 }}
                />
                <Box
                  display="flex"
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
      </Drawer.Body>
    </Drawer>
  );
}
