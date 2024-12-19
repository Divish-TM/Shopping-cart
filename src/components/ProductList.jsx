import React, { useEffect, useState } from 'react';
import { Box, Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('/products.json')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching the products:', error));
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addItem({ ...product, quantity: 1 }));
  };

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: 2,
        p: 2,
      }}
    >
      {products.map((product) => (
        <Card
          key={product.id}
          sx={{
            borderRadius: '12px',
            boxShadow: 3,
            '&:hover': { transform: 'scale(1.05)', transition: 'transform 0.3s ease' },
            backgroundColor: '#f3f4f6',
            transition: 'transform 0.3s ease',
          }}
        >
          <CardContent sx={{ padding: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
              {product.name}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ marginTop: 1 }}>
              ₹{product.price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              size="small"
              fullWidth
              onClick={() => handleAddToCart(product)}
              sx={{
                backgroundColor: '#388e3c',
                color: 'white',
                '&:hover': { backgroundColor: '#2c6e2f' },
                borderRadius: 2,
              }}
            >
              Add to Cart
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default ProductList;
