import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Link, Navigate, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Container, Paper, Button, Box, Typography, TextField, Grid2, Card, Avatar, CardContent, Divider, Stack, CardMedia, FormControl, InputLabel, Select, MenuItem, InputAdornment, OutlinedInput } from '@mui/material';
import { AuthContext } from '../context/Auth';

// import DataContext from '../context/Auth';

export default function UpdateProduct() {
   const {arrProducts, productEdit, editProduct, addProduct, userActive} = useContext(AuthContext)
   // const [products, setProducts] = useState(context.products)
   const [inpNama, setInpNama] = useState('')
   const [inpKategori, setInpKategori] = useState('')
   const [inpDesc, setInpDesc] = useState('')
   const [inpGbr, setInpGbr] = useState('')
   const [inpHarga, setInpHarga] = useState(0)
   const [inpStok, setInpStok] = useState(1)

   // const location = useLocation()
   // const produk = location.state
   const navigate = useNavigate()

   useEffect(() => {
      if(productEdit) {
         setInpNama(productEdit.nama)
         setInpKategori(productEdit.kategori)
         setInpDesc(productEdit.deskripsi)
         setInpGbr(productEdit.gambar)
         setInpHarga(productEdit.harga)
         setInpStok(productEdit.stok)
      }
   }, [])

   function handleSubmit() {
      if(productEdit) {
         const newProduct = {
            idProduk: productEdit.idProduk,
            idPenjual: productEdit.idPenjual,
            nama: inpNama,
            kategori: inpKategori,
            deskripsi: inpDesc,
            gambar: inpGbr,
            harga: inpHarga,
            stok: inpStok
         }

         editProduct(newProduct)

         // const newProducts = arrProducts.map((p) => {
         //    if(productEdit.idProduk === p.idProduk) {
         //       return newProduct
         //    } else {
         //       return p
         //    }
         // })
         // setProducts(newProducts)
         // context.editProduct(newProduk)
         // window.api.saveProducts(newProducts)
      } else {
         const newProduct = {
            idProduk: arrProducts.length + 1,
            idPenjual: userActive.id,
            nama: inpNama,
            kategori: inpKategori,
            deskripsi: inpDesc,
            gambar: inpGbr,
            harga: inpHarga,
            stok: inpStok
         }

         addProduct(newProduct)

         // const newProducts = [...arrProducts, newProduk]
         // setProducts(newProducts)
         // context.addProduct(newProduk)
         // window.api.saveProducts(newProducts)
      }
      // navigate('/profile')
      navigate('/profile')
   }

   return(
      <>
         <Container sx={{minHeight: '680px', marginTop: '100px'}}>
            <Typography variant="h5">{productEdit ? 'Edit Produk' : 'Tambah Produk Baru'}</Typography>
            
            <Box
               component="form"
               sx={{
               mt: 1,
               width: '100%',
               }}
            >
               <TextField
               label="Nama Produk"
               fullWidth
               variant="outlined"
               margin="normal"
               required
               value={inpNama}
               onChange={(e) => setInpNama(e.target.value)}
               />
               <FormControl fullWidth margin='normal'>
                  <InputLabel id="demo-simple-select-label">Kategori</InputLabel>
                  <Select
                     labelId="demo-simple-select-label"
                     id="demo-simple-select"
                     value={inpKategori}
                     label="Kategori"
                     onChange={(e) => setInpKategori(e.target.value)}
                  >
                     <MenuItem value='Rumah Tangga'>Rumah Tangga</MenuItem>
                     <MenuItem value='Elektronik'>Elektronik</MenuItem>
                     <MenuItem value='Fashion'>Fashion</MenuItem>
                     <MenuItem value='Kecantikan'>Kecantikan</MenuItem>
                     <MenuItem value='Kesehatan'>Kesehatan</MenuItem>
                     <MenuItem value='Makanan & Minuman'>Makanan & Minuman</MenuItem>
                  </Select>
                  </FormControl>
               <TextField
               id="outlined-multiline-static"
               multiline
               label="Deskripsi Produk"
               fullWidth
               variant="outlined"
               margin="normal"
               rows={4}
               required
               value={inpDesc}
               onChange={(e) => setInpDesc(e.target.value)}
               />
               <TextField
               label="Link Gambar"
               fullWidth
               variant="outlined"
               margin="normal"
               required
               value={inpGbr}
               onChange={(e) => setInpGbr(e.target.value)}
               />
               <FormControl fullWidth margin='normal'>
                  <InputLabel>Harga</InputLabel>
                  <OutlinedInput
                     startAdornment={<InputAdornment position="start">Rp</InputAdornment>}
                     label="Harga"
                     type='number'
                     required
                     value={inpHarga}
                     onChange={(e) => setInpHarga(e.target.value)}
                  />
               </FormControl>
               <TextField
               label="Stok"
               type='number'  
               fullWidth
               variant="outlined"
               margin="normal"
               required
               value={inpStok}
               onChange={(e) => setInpStok(e.target.value)}
               />
   
               <Button
               fullWidth
               variant="contained"
               sx={{
                  backgroundColor: '#00b94e',
                  '&:hover': { backgroundColor: '#009e3f' },
                  mt: 2,
                  padding: '10px',
               }}
               onClick={handleSubmit}
               >
               {productEdit ? 'Edit' : 'Tambah'}
               </Button>
            </Box>
         </Container>
      </>
   )
}