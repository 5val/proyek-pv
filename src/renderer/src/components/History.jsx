import React, { useContext } from 'react';
import { Container, Box, Typography, Card, CardContent } from '@mui/material';
import { AuthContext } from '../context/Auth';

export default function History() {
   const {arrProducts, arrTransactions, userActive} = useContext(AuthContext)

   return (
      <>
         <Container sx={{minHeight: '700px'}}>
            <Box sx={{ padding: 3}}>
               <Typography variant="h4" gutterBottom>
               Riwayat Transaksi Anda
               </Typography>
               <Box>
               {arrTransactions.map((t, index) => {
                  if(t.idPembeli === userActive.id) {
                     return (<Box key={index} sx={{marginBottom: 2}}>
                        <Card variant="outlined">
                        <CardContent>
                           <Typography variant="h6" component="div">
                              Transaksi #{t.idTransaksi}
                           </Typography>
                           <Typography variant="body1" component="div">
                              Detail Produk
                           </Typography>
                           {t.produkDibeli.map((p, index) => (
                              <Typography variant="body2" component="div" sx={{paddingX: 3}}>
                                 {arrProducts.map(a => {
                                    if(a.idProduk === p.idProduk) {
                                       return <div>{a.nama} (x{p.jumlah})</div>
                                    }
                                 })}
                              </Typography>
                           ))}
                           <Typography variant="body1" sx={{ marginTop: 1 }}>
                              Total: Rp {(t.total).toLocaleString('ID-id')}
                           </Typography>
                           {/* <Typography variant="body2" color="text.secondary">
                              {transaction.items} item{transaction.items > 1 ? 's' : ''}
                           </Typography> */}
                        </CardContent>
                        </Card>
                     </Box>)
                  }
               })}
               </Box>
            </Box>
         </Container>
      </>
   )
}