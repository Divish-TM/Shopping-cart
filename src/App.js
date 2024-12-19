import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductListPage from "./pages/ProductListPage";
import CartPage from "./pages/CartPage";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { Container } from "@mui/material";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Container maxWidth="md" sx={{ mt: 4 }}>
          <Routes>
            <Route path="/" element={<ProductListPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Container>
      </Router>
    </Provider>
  );
};

export default App;
