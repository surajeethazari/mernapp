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
  Grid,
  Grow,
  IconButton,
  ImageList,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  Slider,
  TablePagination,
  TextField,
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
import KurtiBanner from '../assets/images/KurtiBanner.jpg';
import CircleIcon from '@mui/icons-material/Circle';
import PageTransition from '../utils/PageTransition';

const colorTypes = [
  'Beige',
  'Crimson',
  'Aquamarine',
  'Blueviolet',
  'Black',
  'Grey',
  'Blue',
  'Brown',
  'Cadetblue',
  'Yellow',
  'Red',
  'Green',
  'Magenta',
  'Cyan',
  'Orange',
  'Deeppink',
  'White',
];
const fabricText = [
  'Print (1)',
  'Georgette (5)',
  'Netm (12)',
  'Cotton (2)',
  'Silk (15)',
  'Satin (8)',
  'Velvet(3)',
];
const workDetailsTypes = [
  'Digital Print (2)',
  'Zori Work (10)',
  'Emboridary (3)',
  'Stone Work (12)',
];

const options = ['Default', 'Price', 'Name'];

function valuetext(value) {
  return `${value} /-`;
}

export default function Kurties() {
  const minDistance = 10;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [imageSectionShow, setImageSectionShow] = React.useState(0);
  const [value1, setValue1] = React.useState([349, 999]);
  let crumbs = [
    { name: 'Home', trigger: '/', active: true },
    { name: 'Kurties', trigger: '/kurties', active: false },
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

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
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
          image={KurtiBanner}
          alt="Image Title"
        />
        <Box sx={{ padding: 2, backgroundColor: 'primary.light' }}>
          <BreadCrumbs marginTop={2} crumbs={crumbs} />
        </Box>
        <Container component="main" maxWidth="xl">
          <Box
            width={'100%'}
            justifyContent={'space-between'}
            display="flex"
            flexDirection={'row'}
            sx={{}}
          >
            <Box
              flexDirection={'column'}
              mt={4}
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
                value={value1}
                onChange={handleChange1}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
              />
              <Box
                alignItems={'center'}
                justifyContent={'space-between'}
                display={'flex'}
                flexDirection={'row'}
                sx={{ marginTop: 2 }}
              >
                <TextField
                  color="secondary"
                  margin="normal"
                  required
                  sx={{ width: '100px' }}
                  label="₹"
                  type="text"
                  name="first"
                  value={349}
                />
                <TextField
                  color="secondary"
                  margin="normal"
                  required
                  sx={{ width: '100px' }}
                  label="₹"
                  type="text"
                  name="second"
                  value={999}
                />
              </Box>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  marginTop: '10px',
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
                Apply
              </Button>

              <Typography
                color={'primary.main'}
                variant="h6"
                component="div"
                sx={{ fontWeight: 'normal', marginTop: 5 }}
              >
                {Constants.colorText}
              </Typography>
              <Divider sx={{ marginTop: 2 }} />
              <ImageList cols={5}>
                {colorTypes.map((item, index) => (
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
                    title={item}
                  >
                    <CircleIcon
                      sx={{
                        transition: '0.5s ease-in-out',
                        '&:hover': {
                          transform: 'scale(0.8)',
                          borderWidth: '1px',
                          borderColor: 'black',
                          borderStyle: 'solid',
                        },
                        transform: 'scale(1)',
                        borderWidth: '1px',
                        borderColor: 'white',
                        borderStyle: 'solid',
                        cursor: 'pointer',
                        borderRadius: '100%',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                        color: item,
                        fontSize: '35px',
                        marginRight: '10px',
                      }}
                    />
                  </Tooltip>
                ))}
              </ImageList>

              <Typography
                color={'primary.main'}
                variant="h6"
                component="div"
                sx={{ fontWeight: 'normal', marginTop: 5 }}
              >
                {Constants.fabricText}
              </Typography>
              <Divider sx={{ marginTop: 2 }} />
              <FormGroup sx={{ marginTop: 2 }}>
                {fabricText.map((item, index) => (
                  <FormControlLabel
                    key={index}
                    control={
                      <Checkbox
                        color="secondary"
                        sx={{
                          '&:hover': {
                            color: theme.palette.secondary.main,
                          },
                          padding: '5px',
                        }}
                      />
                    }
                    label={item}
                    sx={{
                      color: theme.palette.primary.main,
                      '&:hover': {
                        color: theme.palette.secondary.main,
                      },
                    }}
                  />
                ))}
              </FormGroup>

              <Typography
                color={'primary.main'}
                variant="h6"
                component="div"
                sx={{ fontWeight: 'normal', marginTop: 5 }}
              >
                {Constants.workDetailsText}
              </Typography>
              <Divider sx={{ marginTop: 2 }} />
              <FormGroup sx={{ marginTop: 2 }}>
                {workDetailsTypes.map((item, index) => (
                  <FormControlLabel
                    key={index}
                    control={
                      <Checkbox
                        color="secondary"
                        sx={{
                          '&:hover': {
                            color: theme.palette.secondary.main,
                          },
                          padding: '5px',
                        }}
                      />
                    }
                    label={item}
                    sx={{
                      color: theme.palette.primary.main,
                      '&:hover': {
                        color: theme.palette.secondary.main,
                      },
                    }}
                  />
                ))}
              </FormGroup>
            </Box>
            <Box
              display="flex"
              alignItems={'center'}
              flexDirection={'column'}
              mt={4}
              sx={{ width: { xs: '100%', md: '75%' } }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent={'space-between'}
                flexDirection={'row'}
                width={'100%'}
              >
                <Box display="flex" alignItems="center" flexDirection={'row'}>
                  <Typography
                    color={'primary.main'}
                    variant="h6"
                    component="div"
                    sx={{ fontWeight: 'bold' }}
                  >
                    {Constants.sortByText}:
                  </Typography>
                  <List
                    sx={{ bgcolor: 'common.white', marginLeft: 1, width: 150 }}
                  >
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
                <TablePagination
                  component="div"
                  count={data.length}
                  page={page}
                  onPageChange={handleChangePage}
                  rowsPerPageOptions={[5, 10, 25]}
                  rowsPerPage={rowsPerPage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Box>
              <Masonry
                sx={{ marginTop: 1, overflow: 'hidden' }}
                columns={{ md: 3, xs: 2 }}
                spacing={3}
              >
                {data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((item, index) => (
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
            </Box>
          </Box>
        </Container>
      </Box>
    </PageTransition>
  );
}
