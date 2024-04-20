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
  TablePagination,
  Tooltip,
  Zoom,
  Alert,
  AlertTitle,
} from '@mui/material';
import Constants from '../utils/Constants';
import { useTheme } from '@mui/material/styles';
import { data } from '../assets/data/featuredCollection';
import { useNavigate, NavLink, Link, useParams } from 'react-router-dom';
import BreadCrumbs from '../components/BreadCrumbs';
import ArrowDownward from '@mui/icons-material/ArrowDownward';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import StarIcon from '@mui/icons-material/Star';
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

export default function Search() {
  const params = useParams();
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
  const [value, setValue] = React.useState([0, 100]);
  let crumbs = [
    { name: 'Home', trigger: '/', active: true },
    { name: 'Search: ' + params.text, trigger: '/', active: false },
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
      <Container component="main" maxWidth="xl">
        <Box
          alignItems={'center'}
          flexDirection={'column'}
          display={'flex'}
          mb={2}
          sx={{ marginTop: 12 }}
        >
          <BreadCrumbs crumbs={crumbs} />
        </Box>
        {data.filter((item) => item.title === params.text).length > 0 ? (
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
                  .filter((item) => item.title === params.text)
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
        ) : (
          <Box alignItems={'center'} display={'flex'} flexDirection={'column'}>
            <Alert
              severity="warning"
              sx={{
                marginTop: 5,
                width: { xs: '200px', md: '800px' },
              }}
            >
              <AlertTitle sx={{ fontSize: '20px' }}>
                Your search retured no results
              </AlertTitle>
              Please follow the below instruction!
            </Alert>
            <Typography
              color={'primary.main'}
              variant="h5"
              component="div"
              sx={{ fontWeight: 'bold', marginTop: 5 }}
            >
              Search Tips
            </Typography>
            <Box display={'flex'} alignItems={'start'} sx={{ marginBottom: 5 }}>
              <Typography
                color={'primary.main'}
                variant="h6"
                component="div"
                sx={{ fontWeight: 'normal', marginTop: 2 }}
              >
                ➤ Double-check your spelling.
                <br />
                ➤ Try using separate words.
                <br />
                ➤ Try searching for an item that is less specific.
                <br />➤ You can always narrow your search results later
              </Typography>
            </Box>
          </Box>
        )}
      </Container>
    </PageTransition>
  );
}
