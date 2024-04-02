import * as React from 'react';
import { colors } from '@mui/material';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Home from './pages/Home';
import DefaultAppBar from './components/Appbar';
import ErrorPage from './pages/ErrorPage';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import AccountDetails from './pages/AccountDetails';
import PaymentSuccess from './pages/PaymentSuccess';
import Privacy from './pages/Privacy';
import ShippingPolicy from './pages/ShippingPolicy';
import ReturnPolicy from './pages/ReturnPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import AboutUs from './pages/AboutUs';
import CreatePassword from './pages/CreatePassword';
import MyOrders from './pages/MyOrders';
import MyWishLists from './pages/MyWishlists';
import MyAddress from './pages/MyAddress';
import Kurties from './pages/Kurties';
import Salwars from './pages/Salwars';
import Palazzoes from './pages/Palazzoes';

const defaultTheme = createTheme({
  typography: {
    fontFamily: 'math',
  },
  palette: {
    appmain: {
      main: '#fff',
    },
    primary: {
      main: colors.grey[600],
      light: colors.grey[200],
    },
    secondary: {
      main: colors.amber[600],
      light: colors.amber[50],
    },
    tertiary: {
      main: '#ff9d0a',
    },
    mode: 'light',
  },
});

function App() {
  const [message, setMessage] = useState([]);
  useEffect(() => {
    fetch(process.env.REACT_APP_BE_URI + '/client')
      .then((res) => res.json())
      .then((data) => setMessage(data));
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <PrimeReactProvider>
        <Router>
          <DefaultAppBar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/createPassword" element={<CreatePassword />} />
            <Route path="/userdetails" element={<AccountDetails />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/shippingPolicy" element={<ShippingPolicy />} />
            <Route path="/returnPolicy" element={<ReturnPolicy />} />
            <Route
              path="/termsAndConditions"
              element={<TermsAndConditions />}
            />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/kurties" element={<Kurties />} />
            <Route path="/palazzoes" element={<Palazzoes />} />
            <Route path="/salwars" element={<Salwars />} />
            <Route path="/detail/:title" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/paymentSuccess" element={<PaymentSuccess />} />
            <Route path="/orders" element={<MyOrders />} />
            <Route path="/wishlists" element={<MyWishLists />} />
            <Route path="/address" element={<MyAddress />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </Router>
      </PrimeReactProvider>
    </ThemeProvider>
  );
}

export default App;
