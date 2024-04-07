import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
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
  Grow,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  Slider,
  Tooltip,
  Zoom,
} from '@mui/material';
import Constants from '../utils/Constants';
import { useTheme } from '@mui/material/styles';
import { data } from '../assets/data/featuredCollection';
import { useNavigate, NavLink, Link } from 'react-router-dom';
import BreadCrumbs from '../components/BreadCrumbs';
import ArrowDownward from '@mui/icons-material/ArrowDownward';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import StarIcon from '@mui/icons-material/Star';
import PalazzoBanner from '../assets/images/PalazzoBanner.jpg';
import PageTransition from '../utils/PageTransition';

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

export default function Palazzoes() {
  const [imageSectionShow, setImageSectionShow] = React.useState(0);
  const [value, setValue] = React.useState([0, 100]);
  let crumbs = [
    { name: 'Home', trigger: '/', active: true },
    { name: 'Palazzo Suits', trigger: '/palazzoes', active: false },
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
    <PageTransition>
      <Box>
        <CardMedia
          sx={{ marginTop: 8 }}
          component="img"
          height="400"
          image={PalazzoBanner}
          alt="Image Title"
        />
        <Box sx={{ padding: 2, backgroundColor: 'primary.light' }}>
          <BreadCrumbs marginTop={2} crumbs={crumbs} />
        </Box>
        <Container component="main" maxWidth="xl">
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
              <List sx={{ bgcolor: 'common.white', marginLeft: 1, width: 150 }}>
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
                  color: 'common.white',
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
                width: { xs: '0%', md: '20%' },
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
              display="flex"
              alignItems={'center'}
              flexDirection={'column'}
              m={1}
              sx={{ width: { xs: '100%', md: '78%' } }}
            >
              <Masonry
                sx={{ marginTop: 1, overflow: 'hidden' }}
                columns={{ md: 4, xs: 2 }}
                spacing={3}
              >
                {data.map((item, index) => (
                  <Box key={index} sx={{ height: item.height + 100 }}>
                    <Card>
                      <CardContent
                        sx={{
                          padding: 0,
                          backgroundColor: 'common.white',
                        }}
                      >
                        <Box
                          onMouseEnter={() => setImageSectionShow(index + 1)}
                          onMouseLeave={() => setImageSectionShow(0)}
                          sx={{ overflow: 'hidden' }}
                        >
                          <CardMedia
                            onClick={() => onProductTitleClick(item)}
                            component="img"
                            height={item.height}
                            image={item.img}
                            alt="Image Title"
                            sx={{
                              cursor: 'pointer',
                              transform: 'scale(1)',
                              transformOrigin: '50% 50%',
                              transition: '0.5s ease-in-out',
                              '&:hover': {
                                transform: 'scale(1.2)',
                              },
                            }}
                          />

                          <Grow in={imageSectionShow === index + 1}>
                            <Box
                              sx={{
                                marginTop: -9,
                                position: 'relative',
                                zIndex: 999,
                                padding: 2,
                              }}
                              display={'flex'}
                              flexDirection={'row'}
                              justifyContent={'space-around'}
                            >
                              <Tooltip
                                placement="top"
                                componentsProps={{
                                  tooltip: {
                                    sx: {
                                      bgcolor: 'common.black',
                                    },
                                  },
                                  arrow: {
                                    sx: {
                                      color: 'common.black',
                                    },
                                  },
                                }}
                                TransitionComponent={Zoom}
                                arrow
                                title="Add To Cart"
                              >
                                <IconButton
                                  size="medium"
                                  aria-label="search"
                                  sx={{
                                    padding: '5px',
                                    backgroundColor: 'common.white',
                                    borderRadius: '5px 5px 5px 5px',
                                    '&:hover': {
                                      backgroundColor: 'common.white',
                                    },
                                  }}
                                >
                                  <AddShoppingCartIcon
                                    sx={{ color: theme.palette.common.black }}
                                  />
                                </IconButton>
                              </Tooltip>
                              <Tooltip
                                placement="top"
                                componentsProps={{
                                  tooltip: {
                                    sx: {
                                      bgcolor: 'common.black',
                                    },
                                  },
                                  arrow: {
                                    sx: {
                                      color: 'common.black',
                                    },
                                  },
                                }}
                                TransitionComponent={Zoom}
                                arrow
                                title="Add To Wishlists"
                              >
                                <IconButton
                                  size="medium"
                                  aria-label="search"
                                  sx={{
                                    padding: '5px',
                                    backgroundColor: 'common.white',
                                    borderRadius: '5px 5px 5px 5px',
                                    '&:hover': {
                                      backgroundColor: 'common.white',
                                    },
                                  }}
                                >
                                  <StarIcon
                                    sx={{ color: theme.palette.common.black }}
                                  />
                                </IconButton>
                              </Tooltip>
                            </Box>
                          </Grow>
                        </Box>
                        <Box
                          display={'flex'}
                          flexDirection={'column'}
                          sx={{ paddingLeft: 3, paddingRight: 3 }}
                        >
                          <Typography
                            onClick={() => onProductTitleClick(item)}
                            color={'primary.dark'}
                            variant="h6"
                            component="div"
                            sx={{
                              cursor: 'pointer',
                              fontWeight: 'bold',
                              '&:hover': {
                                color: 'secondary.main',
                              },
                            }}
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            component={'div'}
                            variant="body1"
                            color={'primary.main'}
                            sx={{ fontWeight: 'bold' }}
                          >
                            {item.Price}/-
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Box>
                ))}
              </Masonry>
              <Stack sx={{ marginTop: 2 }} spacing={2}>
                <Pagination
                  count={10}
                  renderItem={(item) => (
                    <PaginationItem
                      slots={{
                        previous: ArrowBackIcon,
                        next: ArrowForwardIcon,
                      }}
                      {...item}
                    />
                  )}
                />
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>
    </PageTransition>
  );
}
