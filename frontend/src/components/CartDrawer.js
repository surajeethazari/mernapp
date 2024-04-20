import React from 'react';
import {
  Drawer,
  Box,
  Button,
  ButtonGroup,
  CardMedia,
  Stack,
  Typography,
} from '@mui/material';
import { data } from '../assets/data/featuredCollection';
import { useNavigate, NavLink, Link } from 'react-router-dom';
import CloseRounded from '@mui/icons-material/CloseRounded';

export default function CartDrawer(props) {
  const navigate = useNavigate();

  return (
    <Drawer
      sx={{ width: '500px' }}
      size="md"
      anchor={'right'}
      open={props.openDrawer}
      onClose={props.closeDrawer}
    >
      {/* Header */}
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        sx={{ padding: '4px', marginTop: '10px' }}
      >
        <Typography
          component={'div'}
          variant="h5"
          color={'primary.dark'}
          sx={{
            fontWeight: 'bold',
            marginLeft: '20px',
          }}
        >
          Cart Items (15)
        </Typography>

        <CloseRounded
          onClick={props.closeDrawer}
          color="primary"
          sx={{ fontWeight: 'bold' }}
        />
      </Box>
      {/* Body */}
      <Box
        sx={{
          overFlowY: 'scroll',
          overflowX: 'hidden',
          marginTop: '15px',
          flex: '100%',
        }}
      >
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
                  sx={{ cursor: 'pointer', width: 200, height: 200 }}
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
      </Box>
      {/* Footer */}
      <Box sx={{ padding: '20px', flex: '0%' }}>
        <Box
          display={'flex'}
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Typography
            component={'div'}
            variant="h6"
            color={'primary.dark'}
            sx={{
              fontWeight: 'bold',
              marginTop: 2,
            }}
          >
            Sub Total:
          </Typography>
          <Typography
            component={'div'}
            variant="h6"
            color={'primary.dark'}
            sx={{
              fontWeight: 'bold',
            }}
          >
            ₹ 5678 /-
          </Typography>
        </Box>
        <Button
          fullWidth
          onClick={props.closeDrawer}
          type="submit"
          variant="contained"
          sx={{
            padding: '5px',
            marginTop: 2,
            fontSize: '20px',
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
        <Button
          fullWidth
          onClick={props.closeDrawer}
          type="submit"
          variant="contained"
          sx={{
            padding: '5px',
            fontSize: '20px',
            '&:hover': {
              backgroundColor: 'primary.main',
            },
            marginTop: 2,
            marginBottom: 2,
            backgroundColor: 'secondary.main',
          }}
        >
          CHECKOUT
        </Button>
      </Box>
    </Drawer>
  );
}
