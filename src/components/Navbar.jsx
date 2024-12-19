import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Badge, Box } from '@mui/material';
import { ShoppingCart, BatchPrediction } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#0288d1', boxShadow: 3 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          Grocery Store
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Typography
              variant="h6"
              sx={{
                color: 'white',
                '&:hover': { color: '#81c784', cursor: 'pointer' },
              }}
            >
              Products
            </Typography>
          </Link>
          <Link to="/cart" style={{ textDecoration: 'none' }}>
            <IconButton sx={{ color: 'white' }}>
              <Badge
                badgeContent={cartItems.length}
                color="error"
                sx={{ '& .MuiBadge-dot': { backgroundColor: '#ff5722' } }}
              >
                <ShoppingCart sx={{ fontSize: 30 }} />
              </Badge>
            </IconButton>
          </Link>
          <Link to="/batch" style={{ textDecoration: 'none' }}>
            <IconButton sx={{ color: 'white' }}>
              <BatchPrediction sx={{ fontSize: 30 }} />
            </IconButton>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
