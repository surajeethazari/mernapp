import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import logo_transparent from '../assets/images/logo_transparent.png';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import CloseRounded from '@mui/icons-material/CloseRounded';
import { data } from '../assets/data/featuredCollection';
import Zoom from '@mui/material/Zoom';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LogoutIcon from '@mui/icons-material/Logout';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  ButtonGroup,
  CardMedia,
  Checkbox,
  Divider,
  Drawer,
  Fade,
  FormControlLabel,
  Grid,
  LinearProgress,
  Modal,
  Popover,
  Stack,
  SwipeableDrawer,
  TextField,
  Tooltip,
} from '@mui/material';
import { useNavigate, NavLink, Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function DefaultAppBar() {
  const navItems = ['Kurties', 'Palazzo Suits', 'Salwar Kamiz'];
  const [state, setState] = React.useState(false);
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [openLeftDrawer, setOpenLeftDrawer] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [openSignUp, setOpenSignUp] = React.useState(false);
  const [openForgotPassword, setOpenForgotPassword] = React.useState(false);
  const [mountElementForAccount, setMountElementForAccount] =
    React.useState(null);
  const [expanded, setExpanded] = React.useState(false);
  const [innerAccordionExpanded, setInnerAccordionExpanded] =
    React.useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleInnerAccordionChange = (panel) => (event, isExpanded) => {
    setInnerAccordionExpanded(isExpanded ? panel : false);
  };

  const openAccountMenu = Boolean(mountElementForAccount);

  const theme = useTheme();
  const navigate = useNavigate();

  const handleNavItemClick = (navItemName) => {
    const navRouterPath = ['/kurties', '/palazzoes', '/salwars'];
    const index = navItems.findIndex(function (params) {
      console.log(params);
      return params === navItemName;
    });
    console.log(index);
    navigate(navRouterPath[index]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloseAccountMenu = () => {
    setMountElementForAccount(null);
  };

  const searchSection = () => (
    <Box height={100} p={15} alignItems="center" justifyContent="center">
      <IconButton
        onClick={toggleDrawer(false)}
        sx={{ position: 'absolute', top: '5px', right: '10px' }}
        size="large"
        aria-label="search"
        color="inherit"
      >
        <CloseRounded />
      </IconButton>
      <TextField
        variant="standard"
        color="secondary"
        margin="normal"
        fullWidth
        name="Search"
        label="Search"
      />
    </Box>
  );

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState(open);
  };

  const toggleLeftDrawerHandler = (open) => (event) => {
    setOpenLeftDrawer(open);
  };
  const toggleDrawerHandler = (open) => (event) => {
    setOpenDrawer(open);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ElevationScroll>
      <AppBar position="fixed" color="appmain">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 2, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleLeftDrawerHandler(true)}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={openLeftDrawer}
                onClose={toggleLeftDrawerHandler(false)}
              >
                <Box
                  width={'300px'}
                  display={'flex'}
                  flexDirection={'column'}
                  p={2}
                >
                  <IconButton
                    onClick={toggleLeftDrawerHandler(false)}
                    size="small"
                    aria-label="search"
                    color="primary.dark"
                    sx={{
                      position: 'absolute',
                      right: 8,
                      top: 8,
                      zIndex: 999,
                      backgroundColor: 'common.white',
                      boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    <CloseRounded />
                  </IconButton>
                  <Box sx={{ marginTop: 5 }}>
                    {navItems.map((item, index) => (
                      <Accordion
                        sx={{
                          marginBottom: 1,
                          boxShadow: 'none',
                          padding: 0,
                          '& .MuiAccordionSummary-content': {
                            margin: 0,
                          },
                        }}
                        spacing={1}
                        expanded={expanded === item}
                        onChange={handleAccordionChange(item)}
                        key={index}
                      >
                        <AccordionSummary
                          expandIcon={
                            expanded === item ? <RemoveIcon /> : <AddIcon />
                          }
                        >
                          <Typography
                            variant="h6"
                            sx={{ fontWeight: 'bold', color: 'primary.dark' }}
                          >
                            {item}
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Box>
                            {[
                              'Shop By Color',
                              'Shop By Fabric',
                              'Shop By Work',
                            ].map((innetItem, index1) => (
                              <Accordion
                                sx={{
                                  marginBottom: 1,
                                  boxShadow: 'none',
                                }}
                                spacing={1}
                                expanded={innerAccordionExpanded === innetItem}
                                onChange={handleInnerAccordionChange(innetItem)}
                                key={index1}
                              >
                                <AccordionSummary
                                  expandIcon={
                                    innerAccordionExpanded === innetItem ? (
                                      <RemoveIcon />
                                    ) : (
                                      <AddIcon />
                                    )
                                  }
                                >
                                  <Typography sx={{ color: 'primary.main' }}>
                                    {innetItem}
                                  </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                  <Box>
                                    {[
                                      'Print',
                                      'Georgette',
                                      'Net',
                                      'Cotton',
                                      'Silk',
                                      'Satin',
                                      'Velvet',
                                    ].map((subInnerItem, index2) => (
                                      <Typography
                                        key={index2}
                                        sx={{ color: 'primary.main' }}
                                      >
                                        {subInnerItem}
                                      </Typography>
                                    ))}
                                  </Box>
                                </AccordionDetails>
                              </Accordion>
                            ))}
                          </Box>
                        </AccordionDetails>
                      </Accordion>
                    ))}
                  </Box>
                  <Button
                    fullWidth
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
                    Sign In
                  </Button>
                </Box>
              </Drawer>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'flex', md: 'flex' },
              }}
            >
              <Avatar
                alt="SF"
                sx={{ color: 'common.black' }}
                src={logo_transparent}
              />
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                style={{
                  marginLeft: '10px',
                  marginTop: '2px',
                  textDecoration: 'none',
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    fontFamily: 'fangsong',
                    lineHeight: 1,
                    letterSpacing: '2px',
                    color: 'secondary.main',
                    fontSize: { md: '30px', xs: '20px' },
                  }}
                >
                  Sonali Fashion
                </Typography>
              </Link>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
              }}
            >
              {navItems.map((navItem, index) => (
                <Tooltip
                  arrow
                  componentsProps={{
                    tooltip: {
                      sx: {
                        bgcolor: 'common.white',
                        maxWidth: 600,
                        padding: '20px',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                        '& .MuiTooltip-arrow': {
                          color: 'common.white',
                        },
                      },
                    },
                  }}
                  key={index}
                  onClick={() => handleNavItemClick(navItem)}
                  TransitionComponent={Zoom}
                  title={
                    <React.Fragment>
                      <Box
                        width={600}
                        display={'flex'}
                        flexDirection={'row'}
                        justifyContent={'space-between'}
                      >
                        <Box display={'flex'} flexDirection={'column'}>
                          <Typography
                            color={'primary.dark'}
                            variant="h6"
                            component="div"
                            sx={{ fontWeight: 'bold', marginTop: 2 }}
                          >
                            Shop By Color
                          </Typography>
                          <Divider sx={{ marginBottom: 2, marginTop: 1 }} />
                          {[
                            'Black',
                            'Blue',
                            'Cream',
                            'Red',
                            'Brown',
                            'Yellow',
                          ].map((item, index) => (
                            <Typography
                              key={index}
                              color={'primary.main'}
                              component="div"
                              sx={{
                                fontSize: '15px',
                                fontWeight: 'normal',
                                marginTop: '2px',
                                cursor: 'pointer',
                              }}
                            >
                              {item}
                            </Typography>
                          ))}
                        </Box>
                        <Box display={'flex'} flexDirection={'column'}>
                          <Typography
                            color={'primary.dark'}
                            variant="h6"
                            component="div"
                            sx={{ fontWeight: 'bold', marginTop: 2 }}
                          >
                            Shop By Fabric
                          </Typography>
                          <Divider sx={{ marginBottom: 2, marginTop: 1 }} />
                          {[
                            'Print',
                            'Georgette',
                            'Net',
                            'Cotton',
                            'Silk',
                            'Satin',
                            'Velvet',
                          ].map((item, index) => (
                            <Typography
                              key={index}
                              color={'primary.main'}
                              component="div"
                              sx={{
                                fontSize: '15px',
                                fontWeight: 'normal',
                                marginTop: '2px',
                                cursor: 'pointer',
                              }}
                            >
                              {item}
                            </Typography>
                          ))}
                        </Box>
                        <Box display={'flex'} flexDirection={'column'}>
                          <Typography
                            color={'primary.dark'}
                            variant="h6"
                            component="div"
                            sx={{ fontWeight: 'bold', marginTop: 2 }}
                          >
                            Shop By Work
                          </Typography>
                          <Divider sx={{ marginBottom: 2, marginTop: 1 }} />
                          {[
                            'Digital Print',
                            'Zori Work',
                            'Embroidary',
                            'Stone Work',
                            'Brown',
                            'Yellow',
                          ].map((item, index) => (
                            <Typography
                              key={index}
                              color={'primary.main'}
                              component="div"
                              sx={{
                                fontSize: '15px',
                                fontWeight: 'normal',
                                marginTop: '2px',
                                cursor: 'pointer',
                              }}
                            >
                              {item}
                            </Typography>
                          ))}
                        </Box>
                      </Box>
                    </React.Fragment>
                  }
                >
                  <Button sx={{ fontWeight: 'bold', fontSize: '20px' }}>
                    {navItem}
                  </Button>
                </Tooltip>
              ))}
            </Box>
            <Box
              justifyContent="end"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}
            >
              <React.Fragment key={'top'}>
                <Tooltip
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
                  title="Search"
                >
                  <IconButton
                    onClick={toggleDrawer(true)}
                    size="large"
                    aria-label="search"
                    color="inherit"
                    sx={{ '&:hover': { color: 'secondary.main' } }}
                  >
                    <SearchIcon />
                  </IconButton>
                </Tooltip>
                <SwipeableDrawer
                  anchor={'top'}
                  open={state}
                  onClose={toggleDrawer(false)}
                  onOpen={toggleDrawer(true)}
                >
                  {searchSection()}
                </SwipeableDrawer>
              </React.Fragment>
              <Tooltip
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
                title="Wish Lists"
              >
                <IconButton
                  onClick={() => navigate('/wishlists')}
                  sx={{ display: { md: 'inline-flex', xs: 'none' } }}
                  size="large"
                  color="inherit"
                >
                  <Badge badgeContent={2} color="secondary">
                    <StarOutlineIcon />
                  </Badge>
                </IconButton>
              </Tooltip>
              <Tooltip
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
                title="Cart"
              >
                <IconButton
                  onClick={toggleDrawerHandler(true)}
                  size="large"
                  color="inherit"
                >
                  <Badge badgeContent={1} color="secondary">
                    <ShoppingCartCheckoutIcon />
                  </Badge>
                </IconButton>
              </Tooltip>

              <Drawer
                anchor="right"
                open={openDrawer}
                onClose={toggleDrawerHandler(false)}
              >
                <Box
                  height={'100%'}
                  sx={{
                    overflowY: 'auto',
                  }}
                >
                  <Box
                    height={50}
                    width={'95%'}
                    display="flex"
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    flexDirection={'row'}
                    sx={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      zIndex: 999,
                      backgroundColor: 'common.white',
                    }}
                  >
                    <Typography
                      component={'div'}
                      variant="h6"
                      color={'primary.dark'}
                      sx={{
                        fontWeight: '400',
                        fontWeight: 'bold',
                        marginTop: '5px',
                        marginLeft: '25px',
                      }}
                    >
                      Cart
                    </Typography>
                    <IconButton
                      onClick={toggleDrawerHandler(false)}
                      size="large"
                      aria-label="search"
                      color="primary.dark"
                    >
                      <CloseRounded />
                    </IconButton>
                  </Box>
                  <Stack
                    direction={'column'}
                    spacing={1}
                    padding={1}
                    sx={{
                      position: 'relative',
                      top: 30,
                    }}
                  >
                    {data.map((item, index) => (
                      <Box
                        key={index}
                        display="flex"
                        flexDirection={'column'}
                        p={2}
                      >
                        <Box display="flex" flexDirection={'row'}>
                          <CardMedia
                            onClick={() =>
                              navigate('/detail/' + item.title, {
                                state: {
                                  item: item,
                                },
                              })
                            }
                            component="img"
                            height={150}
                            image={item.img}
                            alt="Image Title"
                            sx={{ cursor: 'pointer' }}
                          />
                          <Box
                            display="flex"
                            width={'300px'}
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
                  <Box
                    display="flex"
                    width={'95%'}
                    flexDirection={'column'}
                    sx={{
                      position: 'absolute',
                      left: 0,
                      bottom: 0,
                      zIndex: 999,
                      backgroundColor: 'common.white',
                    }}
                  >
                    <Box
                      display="flex"
                      justifyContent={'space-between'}
                      flexDirection={'row'}
                      sx={{ padding: 2 }}
                    >
                      <Typography
                        component={'div'}
                        variant="h6"
                        color={'primary.main'}
                        sx={{ fontWeight: '400', marginTop: '5px' }}
                      >
                        Sub Total
                      </Typography>
                      <Typography
                        component={'div'}
                        variant="h6"
                        color={'primary.main'}
                        sx={{ fontWeight: '400', marginTop: '5px' }}
                      >
                        5678 /-
                      </Typography>
                    </Box>
                    <Box
                      display="flex"
                      justifyContent={'space-between'}
                      flexDirection={'column'}
                      sx={{ padding: 2 }}
                    >
                      <Link
                        to="/cart"
                        state={data}
                        onClick={() =>
                          window.scrollTo({ top: 0, behavior: 'smooth' })
                        }
                      >
                        <Button
                          fullWidth
                          onClick={toggleDrawerHandler(false)}
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
                        onClick={() =>
                          window.scrollTo({ top: 0, behavior: 'smooth' })
                        }
                      >
                        <Button
                          fullWidth
                          onClick={toggleDrawerHandler(false)}
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
                  </Box>
                </Box>
              </Drawer>
              <Tooltip
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
                title="Profile"
              >
                <IconButton
                  disableFocusRipple
                  // onClick={() => setOpen(true)}
                  onClick={(event) => {
                    setMountElementForAccount(event.currentTarget);
                  }}
                  size="large"
                  aria-label="search"
                  color="inherit"
                  sx={{
                    '&:hover': { color: 'secondary.main' },
                    display: { md: 'inline-flex', xs: 'none' },
                  }}
                >
                  <PermIdentityIcon />
                  <KeyboardArrowDownIcon />
                </IconButton>
              </Tooltip>
              <Menu
                elevation={0}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                anchorEl={mountElementForAccount}
                open={openAccountMenu}
                onClose={handleCloseAccountMenu}
              >
                <MenuItem
                  key={1}
                  onClick={(event) => {
                    navigate('/userdetails');
                    handleCloseAccountMenu(event);
                  }}
                  disableRipple
                  sx={{ color: theme.palette.primary.dark }}
                >
                  <ManageAccountsIcon
                    color="secondary"
                    sx={{ marginRight: 1 }}
                  />
                  My account
                </MenuItem>
                <MenuItem
                  key={2}
                  onClick={(event) => {
                    navigate('/orders');
                    handleCloseAccountMenu(event);
                  }}
                  disableRipple
                  sx={{ color: theme.palette.primary.dark }}
                >
                  <BorderColorIcon color="secondary" sx={{ marginRight: 1 }} />
                  My Orders
                </MenuItem>
                <MenuItem
                  key={3}
                  onClick={(event) => {
                    navigate('/wishlists');
                    handleCloseAccountMenu(event);
                  }}
                  disableRipple
                  sx={{ color: theme.palette.primary.dark }}
                >
                  <StarBorderPurple500Icon
                    color="secondary"
                    sx={{ marginRight: 1 }}
                  />
                  My Wishlists
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem
                  key={4}
                  onClick={(event) => {
                    navigate('/');
                    handleCloseAccountMenu(event);
                  }}
                  disableRipple
                  sx={{ color: theme.palette.primary.dark }}
                >
                  <LogoutIcon color="secondary" sx={{ marginRight: 1 }} />
                  Log Out
                </MenuItem>
              </Menu>
              <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="Sign Up"
                aria-describedby="Sign Up"
                closeAfterTransition
                slotProps={{
                  backdrop: {
                    TransitionComponent: Fade,
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    height: 400,
                    width: 500,
                    bgcolor: 'common.white',
                    boxShadow: 24,
                    p: 5,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <IconButton
                    onClick={() => setOpen(false)}
                    sx={{ position: 'absolute', right: 5, top: 5 }}
                    size="large"
                    aria-label="search"
                    color="primary.dark"
                  >
                    <CloseRounded />
                  </IconButton>
                  <Typography variant="h5" color={'primary'}>
                    Sign in
                  </Typography>
                  <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{ mt: 1 }}
                  >
                    <TextField
                      color="secondary"
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                    <TextField
                      color="secondary"
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                    <FormControlLabel
                      control={<Checkbox value="remember" color="secondary" />}
                      label="Remember me"
                    />
                    <Button
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
                      Sign In
                    </Button>
                    <Grid container>
                      <Grid item xs>
                        <React.Fragment>
                          <Typography
                            onClick={() => {
                              setOpenForgotPassword(true);
                            }}
                            component="span"
                            variant="body2"
                            color={'secondary'}
                            mx={1}
                          >
                            Forgot password?
                          </Typography>
                          <Modal
                            open={openForgotPassword}
                            onClose={() => setOpenForgotPassword(false)}
                            aria-labelledby="child-modal-title"
                            aria-describedby="child-modal-description"
                          >
                            <Box
                              sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                height: 400,
                                width: 500,
                                bgcolor: 'common.white',
                                boxShadow: 24,
                                p: 5,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                              }}
                            >
                              <IconButton
                                onClick={() => {
                                  setOpenForgotPassword(false);
                                  setOpen(false);
                                }}
                                sx={{ position: 'absolute', right: 5, top: 5 }}
                                size="large"
                                aria-label="search"
                                color="primary.dark"
                              >
                                <CloseRounded />
                              </IconButton>
                              <Typography variant="h5" color={'primary'}>
                                Password Reset
                              </Typography>
                              <Box
                                component="form"
                                onSubmit={handleSubmit}
                                noValidate
                                sx={{ mt: 1 }}
                              >
                                <TextField
                                  color="secondary"
                                  margin="normal"
                                  required
                                  fullWidth
                                  id="email"
                                  label="Email Address"
                                  name="email"
                                  autoComplete="email"
                                />
                                <Button
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
                                  Send Link
                                </Button>
                              </Box>
                            </Box>
                          </Modal>
                        </React.Fragment>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" color={'primary'}>
                          {"Don't have an account?"}
                          <React.Fragment>
                            <Typography
                              onClick={() => {
                                setOpenSignUp(true);
                              }}
                              component="span"
                              variant="body2"
                              color={'secondary'}
                              mx={1}
                            >
                              Signup
                            </Typography>
                            <Modal
                              open={openSignUp}
                              onClose={() => setOpenSignUp(false)}
                              aria-labelledby="child-modal-title"
                              aria-describedby="child-modal-description"
                            >
                              <Box
                                sx={{
                                  position: 'absolute',
                                  top: '50%',
                                  left: '50%',
                                  transform: 'translate(-50%, -50%)',
                                  height: 400,
                                  width: 500,
                                  bgcolor: 'common.white',
                                  boxShadow: 24,
                                  p: 5,
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  flexDirection: 'column',
                                }}
                              >
                                <IconButton
                                  onClick={() => {
                                    setOpenSignUp(false);
                                    setOpen(false);
                                  }}
                                  sx={{
                                    position: 'absolute',
                                    right: 5,
                                    top: 5,
                                  }}
                                  size="large"
                                  aria-label="search"
                                  color="primary.dark"
                                >
                                  <CloseRounded />
                                </IconButton>
                                <Typography variant="h5" color={'primary'}>
                                  Sign up
                                </Typography>
                                <Box
                                  component="form"
                                  onSubmit={handleSubmit}
                                  noValidate
                                  sx={{ mt: 1 }}
                                >
                                  <TextField
                                    color="secondary"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    name="name"
                                    autoComplete="name"
                                  />
                                  <TextField
                                    color="secondary"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                  />
                                  <TextField
                                    color="secondary"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                  />
                                  <Button
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
                                    Sign Up
                                  </Button>
                                </Box>
                                <Typography variant="body2" color={'primary'}>
                                  Already have an account?
                                  <Typography
                                    onClick={() => {
                                      setOpenSignUp(false);
                                      setOpen(true);
                                    }}
                                    component="span"
                                    variant="body2"
                                    color={'secondary'}
                                    mx={1}
                                  >
                                    Login
                                  </Typography>
                                </Typography>
                              </Box>
                            </Modal>
                          </React.Fragment>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Modal>
            </Box>
          </Toolbar>
        </Container>
        {/* <LinearProgress color="secondary" /> */}
      </AppBar>
    </ElevationScroll>
  );
}
export default DefaultAppBar;
