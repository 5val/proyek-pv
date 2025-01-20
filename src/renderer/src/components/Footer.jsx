import React from 'react';
import { Box, Typography, Container } from '@mui/material';

export default function Footer() {
   return(
      <Box position='relative' sx={{ backgroundColor: '#f5f5f5', padding: 2, bottom: '0', width: '100%'}}>
      <Container>
        <Typography variant="body2" color="textSecondary">
          &copy; 2024 Tokotokoan. All Rights Reserved.
        </Typography>
        <Box sx={{ marginTop: 1 }}>
          <a href='' style={{ marginRight: '30px' }}>Privacy Policy</a>
          <a href=''>Terms of Service</a>
        </Box>
      </Container>
    </Box>
   )
}