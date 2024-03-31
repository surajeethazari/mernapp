import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import DISCOUNT from '../assets/images/DISCOUNT.png';
import { Carousel } from 'antd';
import Masonry from '@mui/lab/Masonry';
import Typography from '@mui/material/Typography';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  Slider,
} from '@mui/material';
import Constants from '../utils/Constants';
import { useTheme } from '@mui/material/styles';
import data from '../assets/data/featuredCollection.json';
import { useNavigate, NavLink, Link } from 'react-router-dom';
import BreadCrumbs from '../components/BreadCrumbs';
import ArrowDownward from '@mui/icons-material/ArrowDownward';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const colorTypes = [
  'White',
  'Black',
  'Grey',
  'Blue',
  'Brown',
  'Yellow',
  'Red',
  'Green',
  'Magenta',
  'Orange',
];
const sizeTypes = ['XXL', 'XL', 'M', 'S'];
const brandTypes = ['A', 'B'];

const options = ['Default', 'Price', 'Name'];

function valuetext(value) {
  return `${value} /-`;
}

export default function Products() {
  const [value, setValue] = React.useState([0, 100]);
  let crumbs = [
    { name: 'Home', trigger: '/', active: true },
    { name: 'Collection', trigger: '/products', active: false },
  ];

  const navigate = useNavigate();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const onProductTitleClick = (item) => {
    navigate('/detail/' + item.title, {
      state: {
        item: item,
      },
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container component="main" maxWidth="xl">
      <BreadCrumbs crumbs={crumbs} />
      <Box
        height={100}
        display="flex"
        alignItems="strat"
        justifyContent="center"
        flexDirection={'column'}
        sx={{ marginTop: 2, backgroundColor: 'secondary.light' }}
      >
        <Typography
          color={'appmain.main'}
          variant="h4"
          component="div"
          sx={{ fontWeight: 'bold', marginLeft: 5 }}
        >
          {Constants.productHeaderText}
        </Typography>
      </Box>
      <Box
        height={50}
        display="flex"
        flexDirection={'row'}
        m={2}
        sx={{ justifyContent: { md: 'space-between', xs: 'end' } }}
      >
        <Typography
          color={'primary.main'}
          variant="h6"
          component="div"
          sx={{ fontWeight: 'bold', display: { md: 'block', xs: 'none' } }}
        >
          {Constants.shopByText}
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          flexDirection={'row'}
          m={2}
          sx={{}}
        >
          <Typography
            color={'primary.main'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold' }}
          >
            {Constants.sortByText}:
          </Typography>
          <List sx={{ bgcolor: 'appmain.main', marginLeft: 1, width: 150 }}>
            <ListItemButton
              sx={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}
              onClick={handleClickListItem}
            >
              <ListItemText secondary={options[selectedIndex]} />
            </ListItemButton>
          </List>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'lock-button',
              role: 'listbox',
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
          <IconButton
            sx={{
              color: 'appmain.main',
              bgcolor: 'primary.main',
              marginLeft: 1,
              '&:hover': { color: 'secondary.main' },
            }}
            size="medium"
            aria-label="Sort"
          >
            <ArrowDownward />
          </IconButton>
        </Box>
      </Box>
      <Box
        width={'100%'}
        justifyContent={'space-between'}
        display="flex"
        flexDirection={'row'}
        m={1}
        sx={{}}
      >
        <Box
          flexDirection={'column'}
          sx={{
            display: { xs: 'none', md: 'flex' },
            width: { xs: '0%', md: '22%' },
          }}
        >
          <Typography
            color={'primary.main'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'normal' }}
          >
            {Constants.priceText}
          </Typography>
          <Slider
            sx={{ marginTop: 2 }}
            getAriaLabel={() => 'Price range'}
            value={value}
            onChange={handleSliderChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />

          <Typography
            color={'primary.main'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'normal', marginTop: 5 }}
          >
            {Constants.colorText}
          </Typography>
          <Divider sx={{ marginTop: 2 }} />
          <FormGroup sx={{ marginTop: 2 }}>
            {colorTypes.map((item, index) => (
              <FormControlLabel
                key={index}
                control={<Checkbox />}
                label={item}
              />
            ))}
          </FormGroup>

          <Typography
            color={'primary.main'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'normal', marginTop: 5 }}
          >
            {Constants.sizeText}
          </Typography>
          <Divider sx={{ marginTop: 2 }} />
          <FormGroup sx={{ marginTop: 2 }}>
            {sizeTypes.map((item, index) => (
              <FormControlLabel
                key={index}
                control={<Checkbox />}
                label={item}
              />
            ))}
          </FormGroup>

          <Typography
            color={'primary.main'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'normal', marginTop: 5 }}
          >
            {Constants.brandText}
          </Typography>
          <Divider sx={{ marginTop: 2 }} />
          <FormGroup sx={{ marginTop: 2 }}>
            {brandTypes.map((item, index) => (
              <FormControlLabel
                key={index}
                control={<Checkbox />}
                label={item}
              />
            ))}
          </FormGroup>
        </Box>
        <Box
          width={'75%'}
          display="flex"
          alignItems={'center'}
          flexDirection={'column'}
          m={1}
          sx={{ width: { xs: '100%', md: '75%' } }}
        >
          <Masonry sx={{ marginTop: 1 }} columns={{ md: 3, xs: 2 }} spacing={2}>
            {data.map((item, index) => (
              <Paper elevation={5} key={index} sx={{ height: item.height }}>
                <Card>
                  <CardContent
                    style={{ background: theme.palette.primary.light }}
                  >
                    <CardMedia
                      onClick={() => onProductTitleClick(item)}
                      component="img"
                      height={item.height - 90}
                      image={item.img}
                      alt="Image Title"
                      sx={{
                        transform: 'scale(0.8)',
                        transition: '0.5s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1)',
                        },
                      }}
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
          </Masonry>
          <Stack sx={{ marginTop: 2 }} spacing={2}>
            <Pagination
              count={10}
              renderItem={(item) => (
                <PaginationItem
                  slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                  {...item}
                />
              )}
            />
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
