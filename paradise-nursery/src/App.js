import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Header from './Components/Header';
import ProductListingPage from './Components/ProductListingPage';
import ShoppingCartPage from './Components/ShoppingCartPage';
import LandingPage from './Components/LandingPage';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/products" element={<ProductListingPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
