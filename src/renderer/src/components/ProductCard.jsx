import React, { useState, useContext } from 'react';
import { Link, Navigate, NavLink, Outlet, useNavigate } from "react-router-dom";
import { Container, Paper, Button, Grid2, Card, CardMedia, CardContent, Typography, CardActions, Modal, Box } from '@mui/material';
import { AuthContext } from '../context/Auth';

const styleModal = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 400,
   bgcolor: 'background.paper',
   border: '2px solid #000',
   boxShadow: 24,
   p: 4,
 };

export default function ProductCard({produkProp}) {
   const {userActive, moveBuyNowPage, addKeranjangUser} = useContext(AuthContext)
   const navigate = useNavigate()

   const [open1, setOpen1] = useState(false);
   const handleOpen1 = () => setOpen1(true);
   const handleClose1 = () => setOpen1(false);

   const [open2, setOpen2] = useState(false);
   const handleOpen2 = () => setOpen2(true);
   const handleClose2 = () => setOpen2(false);

   function beliSekarang(produk) {
      if(userActive) {
         moveBuyNowPage(produk)
         navigate('/buynow')
      } else {
         handleOpen1()
      }
   }

   function masukkanKeranjang(idx) {
      if(userActive) {
         addKeranjangUser(idx)
         handleOpen2()
      } else {
         handleOpen1()
      }
   }

   return (
      <>
         <Grid2 size={3}>
            <Card sx={{ maxWidth: 375 }}>
               <CardMedia
               component="img"
               alt="green iguana"
               height="140"
               image={produkProp.gambar}
               />
               <CardContent sx={{height: '120px'}}>
               <Typography gutterBottom variant="h5" component="div">
                  {produkProp.nama}
               </Typography>
               <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Rp {(produkProp.harga).toLocaleString('ID-id')}
               </Typography>
               </CardContent>
               <CardActions>
               <Button variant='contained' sx={{backgroundColor: '#00b140'}} onClick={() => masukkanKeranjang(produkProp.idProduk)}>Masukkan Keranjang</Button>
               <Button variant='contained' sx={{backgroundColor: '#00b140'}} onClick={() => beliSekarang(produkProp)}>Beli Sekarang</Button>
               </CardActions>
            </Card>
            <div> 
               {/* modal warning kalau user belum login */}
               <Modal
               open={open1}
               onClose={handleClose1}
               aria-labelledby="modal-modal-title"
               aria-describedby="modal-modal-description"
               >
               <Box sx={styleModal}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                     Peringatan
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                     Silakan login / signup terlebih dahulu untuk melakukan aksi ini
                  </Typography>
               </Box>
               </Modal>

               {/* modal info berhasil masukkan keranjang */}
               <Modal
               open={open2}
               onClose={handleClose2}
               aria-labelledby="modal-modal-title"
               aria-describedby="modal-modal-description"
               >
               <Box sx={styleModal}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                     Anda berhasil memasukkan produk ke keranjang
                  </Typography>
               </Box>
               </Modal>
            </div>
         </Grid2>
      </>
   )
}