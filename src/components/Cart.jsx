import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
  const { items, totalAmount } = useSelector((state) => state.cart);

  return (
    <Box sx={{ p: 2 }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          mb: 2,
          textAlign: 'center',
          color: 'primary.main',
        }}
      >
        Your Cart
      </Typography>
      <Divider sx={{ mb: 3 }} />
      {items.length === 0 ? (
        <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center' }}>
          Your cart is empty.
        </Typography>
      ) : (
        <Box>
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <Divider sx={{ mt: 3, mb: 2 }} />
          <Typography
            variant="h6"
            sx={{ textAlign: 'right', fontWeight: 'bold', color: 'primary.main' }}
          >
            Total Amount: ₹{totalAmount.toFixed(2)}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Cart;
