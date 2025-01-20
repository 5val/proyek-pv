import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { Container, Paper, Button, Box, Typography, Grid2 } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { AuthContext } from '../context/Auth';

export default function BuySuccess() {
   const {transActive} = useContext(AuthContext)

   let totalHarga = 0
   for (let i = 0; i < transActive.length; i++) {
      totalHarga = totalHarga + ((transActive[i].produk.harga)* transActive[i].jumlah)
   }

   return(
      <>
         <Container sx={{minHeight: '680px'}}>
            <Container maxWidth="lg" style={{ marginTop: '100px' }}>
         <Grid2 container spacing={3}>
         <Grid2 size={12}>
            <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
               <CheckCircleIcon color="success" style={{ fontSize: 80 }} />
               <Typography variant="h5" style={{ marginTop: '10px' }}>
               Pembelian Berhasil!
               </Typography>
               <Typography variant="body1" color="textSecondary" style={{ marginTop: '10px' }}>
               Terima kasih telah berbelanja di Tokotokoan. Pesanan Anda sedang diproses.
               </Typography>
            </Paper>
         </Grid2>

         <Grid2 size={12}>
            <Paper style={{ padding: '20px' }}>
               <Typography variant="h6" gutterBottom>
               Detail Pesanan
               </Typography>
               <Box display="flex" flexDirection="column">
               <Box display="flex" sx={{justifyContent: 'space-between', marginTop: '20px'}}>
                  <Typography variant="body2">
                     <strong>Produk</strong>
                  </Typography>
                  <Typography variant="body2">
                     <strong>Jumlah</strong>
                  </Typography>
                  <Typography variant="body2">
                     <strong>Total Harga</strong>
                  </Typography>
               </Box>
               {transActive.map((t, index) => (
                  <Box key={index} display="flex" sx={{justifyContent: 'space-between', marginTop: '15px'}}>
                     <Typography variant="body2">
                        {t.produk.nama}
                     </Typography>
                     <Typography variant="body2">
                        {t.jumlah}
                     </Typography>
                     <Typography variant="body2">
                        Rp {((t.produk.harga)* t.jumlah).toLocaleString('ID-id')}
                     </Typography>
                  </Box>
               ))}
               <Box display="flex" sx={{marginTop: '20px', gap: 5, justifyContent: 'end'}}>
                  <Typography variant="body2">
                     <strong>Total</strong>
                  </Typography>
                  <Typography variant="body2">
                     <strong>Rp {totalHarga.toLocaleString('ID-id')}</strong>
                  </Typography>
               </Box>
               </Box>
            </Paper>
         </Grid2>

         <Box sx={{marginX: 'auto'}}>
            <NavLink to='/home'><Button variant='contained' sx={{ padding: 1.5, backgroundColor: '#00b140' }}>Kembali ke Home</Button></NavLink>
         </Box>
         </Grid2>
      </Container>
         </Container>
      </>
   )
}