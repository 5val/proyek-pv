import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Container, Paper, Button, Box, Typography, TextField, Grid2, Card, Avatar, CardContent, Divider, Stack, CardMedia, Modal } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { AuthContext } from '../context/Auth';

// import DataContext from '../context/Auth';

const styleModal = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 400,
   bgcolor: 'background.paper',
   boxShadow: 24,
   p: 4,
 };


export default function BuyNow() {
   const [jumlah, setJumlah] = useState(1)
   // const [users, setUsers] = useState([])

   const {arrUsers, arrTransactions, userActive, productClicked, buyProducts} = useContext(AuthContext)
   // const user = context.userActive

   // const location = useLocation()
   // const produk = location.state

   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

  const navigate = useNavigate()

//   useEffect(() => {
//    window.api.loadUsers().then((data) => {
//       setUsers(data)
//    })
//   })

  function handleBeli() {
   const arrBeli = [{produk: productClicked, jumlah}]
   buyProducts(arrBeli, false)
   // const sisaSaldo = userActive.saldo - (productClicked.harga* jumlah)
   // userActive.saldo = sisaSaldo
   // const newUsers = arrUsers.map((u) => {
   //    if(u.index === userActive.index) {
   //       return {...u, saldo: sisaSaldo}
   //    } else {
   //       return u
   //    }
   // })
   // const newTransaction = {
   //    idTransaksi: context.transactions.length + 1,
   //    idPembeli: user.id,
   //    produkDibeli: [
   //       {
   //          idProduk: produk.id,
   //          jumlah: jumlah
   //       }
   //    ],
   //    total: (produk.harga* jumlah)
   // }
   // const newTransactions = [...arrTransactions, newTransaction]
   // window.api.saveUsers(newUsers)
   // window.api.saveTransactions(newTransactions)
   // navigate('/buysuccess', {state: arrBeli})
   handleClose()
   // return <Navigate to='/buysuccess' />
   navigate('/buysuccess')
  }

   return(
      <>
         <Container sx={{minHeight: '700px'}}>
         <Container maxWidth="lg" sx={{ paddingTop: 3 }}>
            <Grid2 container spacing={4}>
            <Grid2 size={4}>
               <Card variant="outlined">
                  <CardMedia
                  component="img"
                  alt="Produk"
                  height="400"
                  image={productClicked.gambar}
                  sx={{ objectFit: 'contain' }}
                  />
               </Card>
            </Grid2>

            <Grid2 size={8} maxWidth='650px'>
               <Card variant="outlined" sx={{ padding: 3 }}>
                  <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                     {productClicked.nama}
                  </Typography>
                  <Typography color="textSecondary" sx={{ marginBottom: 2 }}>
                     Kategori: {productClicked.kategori}
                  </Typography>
                  <Typography color="textSecondary" sx={{ marginBottom: 2 }}>
                     Deskripsi: <br /> {productClicked.deskripsi}
                  </Typography>

                  <Typography variant="h6" sx={{ marginBottom: 2 }}>
                     Rp {(productClicked.harga).toLocaleString('ID-id')}
                  </Typography>

                  <Typography variant="body1" sx={{ marginBottom: 2 }}>
                     Jumlah:
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                     <Button
                        variant="outlined"
                        onClick={() => setJumlah(jumlah - 1)}
                        disabled={jumlah <= 1}
                        sx={{ padding: '6px 12px' }}
                     >
                        <RemoveIcon />
                     </Button>
                     <Typography variant="body1">{jumlah}</Typography>
                     <Button
                        variant="outlined"
                        onClick={() => setJumlah(jumlah + 1)}
                        sx={{ padding: '6px 12px' }}
                     >
                        <AddIcon />
                     </Button>
                  </Box>

                  <Typography variant="body1" sx={{ marginBottom: 2, marginTop: 2 }}>
                     <strong>Total: Rp {((productClicked.harga)* jumlah).toLocaleString('ID-id')}</strong>
                  </Typography>

                  <Divider sx={{ marginY: 2 }} />

                  <Button variant="contained" fullWidth sx={{ padding: 1.5, backgroundColor: '#00b140' }} onClick={handleOpen}>
                     Checkout
                  </Button>
                  </CardContent>
               </Card>
            </Grid2>
            </Grid2>
         </Container>

         <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
         {
            userActive.saldo < (productClicked.harga)* jumlah ? (
               <Box sx={styleModal}>
               <Typography id="modal-modal-title" variant="h6" component="h2">
                  Saldo Anda tidak cukup
               </Typography>
               </Box>
            ) : (
               <Box sx={styleModal}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                     Anda yakin ingin melanjutkan pembelian?
                  </Typography>
                  <Button variant='contained' id='modal-modal-description' sx={{ mt: 2, backgroundColor: '#00b140' }} onClick={handleBeli}>
                     Konfirmasi
                  </Button>
               </Box>
            )
         }
        
      </Modal>
    </div>
         </Container>

         
      </>
   )
}