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
import Zoom from '@mui/material/Zoom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LogoutIcon from '@mui/icons-material/Logout';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Drawer } from 'rsuite';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  ButtonGroup,
  CardMedia,
  Checkbox,
  Divider,
  Fade,
  FormControlLabel,
  Grid,
  InputAdornment,
  LinearProgress,
  Modal,
  OutlinedInput,
  Popover,
  Select,
  SwipeableDrawer,
  TextField,
  Tooltip,
} from '@mui/material';
import { useNavigate, NavLink, Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import AuthModal from './AuthModal';
import CartDrawer from './CartDrawer';

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
  const navItems = [
    { name: 'Kurties', routePath: '/kurties' },
    { name: 'Palazzo Suits', routePath: '/palazzoes' },
    { name: 'Salwar Kamiz', routePath: '/salwars' },
  ];
  const [state, setState] = React.useState(false);
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [openLeftDrawer, setOpenLeftDrawer] = React.useState(false);
  const [open, setOpen] = React.useState(false);

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

  const handleNavItemClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloseAccountMenu = () => {
    setMountElementForAccount(null);
  };

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

  const [category, setCategory] = React.useState('All Categories');
  const onChangeCategories = (event) => {
    setCategory(event.target.value);
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
                closeButton={false}
                style={{ zIndex: 1500, width: '300px' }}
                placement={'left'}
                open={openLeftDrawer}
                onClose={toggleLeftDrawerHandler(false)}
              >
                <Drawer.Body style={{ padding: 0 }}>
                  <Box
                    width={'300px'}
                    display={'flex'}
                    flexDirection={'column'}
                    p={1}
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
                          expanded={expanded === item.name}
                          onChange={handleAccordionChange(item.name)}
                          key={index}
                        >
                          <AccordionSummary
                            expandIcon={
                              expanded === item.name ? (
                                <RemoveIcon />
                              ) : (
                                <AddIcon />
                              )
                            }
                          >
                            <Typography
                              sx={{
                                fontWeight: 'bold',
                                color: 'primary.dark',
                                fontSize: '16px',
                              }}
                            >
                              {item.name}
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
                                  expanded={
                                    innerAccordionExpanded === innetItem
                                  }
                                  onChange={handleInnerAccordionChange(
                                    innetItem,
                                  )}
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
                                          onClick={toggleLeftDrawerHandler(
                                            false,
                                          )}
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
                </Drawer.Body>
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
                  onClick={() => handleNavItemClick()}
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
                  <NavLink
                    exact={true}
                    to={navItem.routePath}
                    style={({ isActive, isPending, isTransitioning }) => {
                      return {
                        fontWeight: 'bold',
                        fontSize: '20px',
                        fontFamily: 'roboto',
                        marginLeft: '20px',
                        textDecoration: 'none',
                        color: isActive
                          ? theme.palette.secondary.dark
                          : theme.palette.primary.main,
                        viewTransitionName: isTransitioning ? 'slide' : '',
                      };
                    }}
                  >
                    {navItem.name}
                  </NavLink>
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
                  <Box height={100} p={15}>
                    <IconButton
                      onClick={toggleDrawer(false)}
                      sx={{ position: 'absolute', top: '5px', right: '10px' }}
                      size="large"
                      aria-label="search"
                      color="inherit"
                    >
                      <CloseRounded />
                    </IconButton>
                    <Box
                      alignItems="center"
                      justifyContent="center"
                      display={'flex'}
                      flexDirection={'row'}
                    >
                      <Select
                        width={400}
                        value={category}
                        onChange={onChangeCategories}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                      >
                        <MenuItem value="All Categories">
                          All Categories
                        </MenuItem>
                        <MenuItem value="Kurties">Kurties</MenuItem>
                        <MenuItem value="Palazzo Suits">Palazzo Suits</MenuItem>
                        <MenuItem value="Salwar Kamiz">Salwar Kamiz</MenuItem>
                      </Select>
                      <OutlinedInput
                        fullWidth
                        placeholder="Enter text to search"
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              onClick={toggleDrawer(false)}
                              size="large"
                              aria-label="search"
                              color="inherit"
                            >
                              <SearchIcon />
                            </IconButton>
                          </InputAdornment>
                        }
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                          'aria-label': 'weight',
                        }}
                      />
                    </Box>
                    <Box
                      alignItems="center"
                      justifyContent="center"
                      display={'flex'}
                      flexDirection={'row'}
                      sx={{ marginTop: '5px' }}
                    >
                      <Box
                        onClick={toggleDrawer(false)}
                        display={'flex'}
                        flexDirection={'row'}
                      >
                        <Typography
                          component={'div'}
                          variant="h6"
                          color={'primary.main'}
                          sx={{
                            marginTop: '2px',
                            fontWeight: 'normal',
                          }}
                        >
                          Quick Search:
                        </Typography>
                        <Typography
                          onClick={() => {
                            navigate('kurties');
                          }}
                          component={'div'}
                          variant="h6"
                          color={'primary.dark'}
                          sx={{
                            marginLeft: '5px',
                            textDecoration: 'underline',
                            cursor: 'pointer',
                            fontWeight: 'normal',
                            '&:hover': {
                              color: 'secondary.main',
                            },
                          }}
                        >
                          Kurties
                        </Typography>
                        <Typography
                          onClick={() => {
                            navigate('palazzoes');
                          }}
                          component={'div'}
                          variant="h6"
                          color={'primary.dark'}
                          sx={{
                            marginLeft: '5px',
                            textDecoration: 'underline',
                            cursor: 'pointer',
                            fontWeight: 'normal',
                            '&:hover': {
                              color: 'secondary.main',
                            },
                          }}
                        >
                          Palazzo Suits
                        </Typography>
                        <Typography
                          onClick={() => {
                            navigate('salwars');
                          }}
                          component={'div'}
                          variant="h6"
                          color={'primary.dark'}
                          sx={{
                            marginLeft: '5px',
                            textDecoration: 'underline',
                            cursor: 'pointer',
                            fontWeight: 'normal',
                            '&:hover': {
                              color: 'secondary.main',
                            },
                          }}
                        >
                          Salwar Kamiz
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
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
              <CartDrawer
                openDrawer={openDrawer}
                closeDrawer={toggleDrawerHandler(false)}
              />
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
                  onClick={() => setOpen(true)}
                  // onClick={(event) => {
                  //   setMountElementForAccount(event.currentTarget);
                  // }}
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
                sx={{ width: '250px' }}
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
                  sx={{
                    color: theme.palette.primary.dark,
                    fontSize: '18px',
                    width: '150px',
                  }}
                >
                  My account
                </MenuItem>
                <MenuItem
                  key={2}
                  onClick={(event) => {
                    navigate('/orders');
                    handleCloseAccountMenu(event);
                  }}
                  sx={{ color: theme.palette.primary.dark, fontSize: '18px' }}
                >
                  My Orders
                </MenuItem>
                <MenuItem
                  key={3}
                  onClick={(event) => {
                    navigate('/wishlists');
                    handleCloseAccountMenu(event);
                  }}
                  sx={{ color: theme.palette.primary.dark, fontSize: '18px' }}
                >
                  My Wishlists
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem
                  key={4}
                  onClick={(event) => {
                    navigate('/');
                    handleCloseAccountMenu(event);
                  }}
                  sx={{ color: theme.palette.primary.dark, fontSize: '18px' }}
                >
                  <LogoutIcon color="secondary" sx={{ marginRight: 1 }} />
                  Log Out
                </MenuItem>
              </Menu>

              <AuthModal openModal={open} onCloseModal={() => setOpen(false)} />
            </Box>
          </Toolbar>
        </Container>
        {/* <LinearProgress color="secondary" /> */}
      </AppBar>
    </ElevationScroll>
  );
}
export default DefaultAppBar;
