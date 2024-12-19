import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, updateItem } from '../features/cart/cartSlice';
import { Box, Button, Typography, IconButton, Paper } from '@mui/material';
import { Remove, Add } from '@mui/icons-material';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

  const handleIncrease = () => {
    dispatch(updateItem({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      dispatch(updateItem({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  return (
    <Paper
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid #ddd',
        padding: 2,
        marginBottom: 2,
        backgroundColor: '#fafafa',
        boxShadow: 1,
        borderRadius: 2,
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ₹{(item.price * item.quantity).toFixed(2)}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton
          onClick={handleDecrease}
          sx={{
            backgroundColor: '#ff7043',
            '&:hover': { backgroundColor: '#ff5722' },
            marginRight: 1,
          }}
        >
          <Remove />
        </IconButton>
        <Typography variant="body2" sx={{ fontWeight: 'bold', marginRight: 1 }}>
          {item.quantity}
        </Typography>
        <IconButton
          onClick={handleIncrease}
          sx={{
            backgroundColor: '#388e3c',
            '&:hover': { backgroundColor: '#2c6e2f' },
            marginLeft: 1,
          }}
        >
          <Add />
        </IconButton>
      </Box>

      <Button
        variant="outlined"
        color="error"
        onClick={handleRemove}
        sx={{
          borderRadius: '8px',
          '&:hover': { backgroundColor: '#ff5252', color: 'white' },
        }}
      >
        Remove
      </Button>
    </Paper>
  );
};

export default CartItem;
