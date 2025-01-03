import React, { useContext, useState } from 'react';
import { Link, Navigate, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Container, Paper, Button, Box, Typography, TextField, Grid2, Card, Avatar, CardContent, Divider, Stack, CardMedia, CardActions, Modal } from '@mui/material';
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

export default function Profile() {
   const {arrProducts, userActive, deleteProduct, moveEditPage, logout} = useContext(AuthContext)
   // const [products, setProducts] = useState(context.products)
   // const user = context.userActive

   const [open, setOpen] = useState(-1);
      const handleOpen = (idx) => setOpen(idx);
      const handleClose = () => setOpen(-1);

   const navigate = useNavigate()

   function handleLogout() {
      logout()
      navigate('/login')
   }

   function handleEdit(produk) {
      moveEditPage(produk)
      // return <Navigate to='/updateproduct' />
      navigate('/updateproduct')
   }

   function handleDelete(idx) {
      deleteProduct(idx)
      // const newProducts = products.filter((p) => p.idProduk !== idx)
      // setProducts(newProducts)
      // window.api.saveProducts(newProducts)
      handleClose()
   }
   
   return (
      <>
         <Container sx={{minHeight: '700px'}}>
         {/* <h1>{user.nama}</h1> */}
         <Container maxWidth="lg" sx={{ paddingTop: 3 }}>
         <Grid2 container spacing={3}>
         <Grid2 size={4}>
            <Card variant="outlined" sx={{ padding: 2 }}>
               <Box textAlign="center">
               <Avatar
                  alt="User Avatar"
                  sx={{ width: 120, height: 120, marginBottom: 2, mx: 'auto'}}
               />
               <Typography variant="h6">{userActive.nama}</Typography>
               <Typography color="textSecondary">{userActive.username}</Typography>
               <Typography variant="h6" sx={{marginTop: '30px'}}>Saldo : Rp {(userActive.saldo).toLocaleString('ID-id')}</Typography>
               <Button variant="contained" sx={{ marginTop: 2, backgroundColor: '#00b140' }} onClick={handleLogout}>
                Logout
              </Button>
               </Box>
            </Card>
         </Grid2>

         <Grid2 size={8}>
            <Card variant="outlined">
               <CardContent>
               <Typography variant="h6" sx={{ marginBottom: 2 }}>
                  Informasi Akun
               </Typography>
               <Divider sx={{ marginBottom: 2 }} />
               <Stack spacing={3}>
                  <Paper>
                  <Typography variant="body1">Nama User</Typography>
                  <Typography color="textSecondary">{userActive.nama}</Typography>
                  </Paper>
                  <Paper>
                  <Typography variant="body1">Username</Typography>
                  <Typography color="textSecondary">{userActive.username}</Typography>
                  </Paper>
                  <Paper>
                  <Typography variant="body1">Email</Typography>
                  <Typography color="textSecondary">{userActive.email}</Typography>
                  </Paper>
                     <NavLink to='/history'><Button variant="contained" sx={{ backgroundColor: '#00b140' }}>
                  Lihat Riwayat Transaksi
               </Button></NavLink>
               </Stack>
               
               </CardContent>
            </Card>
         </Grid2>
         </Grid2>

         <Box>
            {userActive.daftarPenjual ? (
               <Box sx={{marginTop: '50px'}}>
                  <Box sx={{display: 'flex', gap: '25px'}}>
                     <Typography variant='h5'>List Produk Anda</Typography>
                     <NavLink to='/updateproduct'><Button variant='contained' sx={{backgroundColor: '#00b140'}}>Tambah Produk Baru</Button></NavLink>
                  </Box>
                  <Grid2 container spacing={3} sx={{marginTop: '30px'}}>
                  {arrProducts.map((p, index) => {
                     if(p.idPenjual === userActive.id) {
                        return (
                           <Grid2 key={index} size={3}>
                           <Card sx={{ maxWidth: 375 }}>
                              <CardMedia
                              component="img"
                              alt="green iguana"
                              height="140"
                              image={p.gambar}
                              />
                              <CardContent sx={{height: '120px'}}>
                              <Typography gutterBottom variant="h5" component="div">
                                 {p.nama}
                              </Typography>
                              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                 Rp {(p.harga).toLocaleString('ID-id')}
                              </Typography>
                              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                 {p.deskripsi}
                              </Typography>
                              </CardContent>
                              <CardActions>
                                 <Button variant='contained' sx={{backgroundColor: '#00b140'}} onClick={() => handleEdit(p)}>Edit</Button>
                                 <Button variant='contained' sx={{backgroundColor: 'red'}} onClick={() => handleOpen(index)}>Delete</Button>
                                 </CardActions>
                           </Card>
                        </Grid2>
                        )
                     }
                  })}
                  </Grid2>
               </Box>
            ) : (
               <Button variant="contained" sx={{ marginTop: 2, backgroundColor: '#00b140' }}>
                Daftar Penjual
              </Button>
            )}
         </Box>
      </Container>
      {open > -1 && 
         <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
            open={true}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
               <Box sx={styleModal}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                     Anda yakin ingin menghapus produk {arrProducts[open].nama}?
                  </Typography>
                  <Button variant='contained' id='modal-modal-description' sx={{ mt: 2, backgroundColor: 'red' }} onClick={() => handleDelete(arrProducts[open].idProduk)}>
                     Delete
                  </Button>
               </Box>
            </Modal>
         </div>
         }
         </Container>
      </>
   )
}