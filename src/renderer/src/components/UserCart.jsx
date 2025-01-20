import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Container, Paper, Button, Box, Typography, TextField, Grid2, Card, Avatar, CardContent, Divider, Stack, CardMedia, Modal, Checkbox } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { AuthContext } from '../context/Auth';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

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

export default function UserCart() {
   const {arrProducts, userActive, deleteItemKeranjang, buyProducts} = useContext(AuthContext)
   const [isiKeranjang, setIsiKeranjang] = useState([])
   const [keranjangChecked, setKeranjangChecked] = useState([])
   const [totalChecked, setTotalChecked] = useState(0)

   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   const [open2, setOpen2] = useState(false);
   const handleOpen2 = () => setOpen2(true);
   const handleClose2 = () => setOpen2(false);

   useEffect(() => {
      let newIsiKeranjang = []
      for (let i = 0; i < arrProducts.length; i++) {
         for (let j = 0; j < (userActive.keranjang).length; j++) {
            if(arrProducts[i].idProduk == (userActive.keranjang[j]).idProduk){
               newIsiKeranjang.push({
                  produk: arrProducts[i],
                  jumlah: (userActive.keranjang[j]).jumlah
               })
            }
         }
      }
      setIsiKeranjang(newIsiKeranjang)
   }, [userActive])

   function addKeranjang(e, produkChecked) {
      let newKeranjang = []
      if(e.target.checked) {
         newKeranjang = [...keranjangChecked, produkChecked]
         setKeranjangChecked(newKeranjang)
      } else {
         newKeranjang = keranjangChecked.filter((k) => k.produk.idProduk !== produkChecked.produk.idProduk)
         setKeranjangChecked(newKeranjang)
      }
      let newTotal = 0
      for (let i = 0; i < newKeranjang.length; i++) {
         newTotal = newTotal += (newKeranjang[i].produk.harga * newKeranjang[i].jumlah)
      }
      setTotalChecked(newTotal)
   }

   function deleteKeranjang(idx) {
      const newKeranjang = keranjangChecked.filter((k) => k.produk.idProduk !== idx)
      setKeranjangChecked(newKeranjang)
      let newTotal = 0
      for (let i = 0; i < newKeranjang.length; i++) {
         newTotal = newTotal += (newKeranjang[i].produk.harga * newKeranjang[i].jumlah)
      }
      setTotalChecked(newTotal)
      handleClose2()
      deleteItemKeranjang(idx)
    
   }

   const navigate = useNavigate()
   function handleBeli() {
      buyProducts(keranjangChecked, true)
      handleClose()
      navigate('/buysuccess')
   }

   return (
      <>
         <Container sx={{minHeight: '700px'}}>
            <Box style={{ padding: '20px' }}>
               <Typography variant="h4" gutterBottom>Keranjang Anda</Typography>

               {/* Grid untuk menampilkan produk dalam keranjang secara vertikal */}
               <Stack spacing={2}>
               {isiKeranjang.map((a, index) => (
                  <Box key={index}>
                     <Card sx={{ display: 'flex', flexDirection: 'row', boxShadow: 3 }}>
                     <CardMedia
                        component="img"
                        sx={{ width: 150, height: 150, objectFit: 'cover' }}
                        image={a.produk.gambar}
                        alt={a.produk.nama}
                     />
                     <Box sx={{display: 'flex', width: '100%'}}>
                        <Box sx={{ p: 2 }}>
                           <Typography variant="h6">{a.produk.nama}</Typography>
                           <Typography variant="body2" color="textSecondary" gutterBottom>
                              Rp {(a.produk.harga).toLocaleString('ID-id')}
                           </Typography>
                           <Typography variant="body2" color="textSecondary" gutterBottom>
                              x{a.jumlah}
                           </Typography>
                           </Box>
                           <Box sx={{p: 2, marginLeft: 'auto'}}>
                              <Box>
                                 <Checkbox sx={{float: 'right'}} {...label} onChange={(e) => addKeranjang(e, a)} />
                              </Box>
                              <Button
                                 variant="contained"
                                 color="error"
                                 onClick={handleOpen2}
                              >
                                 Delete
                              </Button>
                           </Box>
                     </Box>
                     </Card>
                     {/* Modal Konfirmasi Delete */}
                     <Modal
                        open={open2}
                        onClose={handleClose2}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                     >
                        <Box sx={styleModal}>
                           <Typography id="modal-modal-title" variant="h6" component="h2">
                              Apakah Anda yakin ingin menghapus produk ini dari keranjang?
                           </Typography>
                           <Button
                              variant="contained"
                              sx={{ mt: 2, backgroundColor: '#d32f2f' }}
                              onClick={() => deleteKeranjang(a.produk.idProduk)}
                           >
                              Hapus 
                           </Button>
                        </Box>
                     </Modal>
                  </Box>
                  
                  
               ))}
               </Stack>

               <Divider sx={{ my: 2 }} />

               <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 2 }}>
               <Typography variant="h6">Total: Rp {totalChecked.toLocaleString('ID-id')}</Typography>
               <Button variant="contained" sx={{ padding: 1.5, backgroundColor: '#00b140' }} onClick={handleOpen}>Checkout</Button>
               </Box>
            </Box>

            <div>
               <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
               >
                  {
                     userActive.saldo < totalChecked ? (
                        <Box sx={styleModal}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                           Saldo Anda tidak cukup
                        </Typography>
                        </Box>
                     ) : (
                        <Box sx={styleModal}>
                           <Typography id="modal-modal-title" variant="h6" component="h2">
                              Anda yakin ingin melakukan checkout?
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