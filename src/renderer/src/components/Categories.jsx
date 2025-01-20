import React, { useContext } from 'react';
import { Container, Grid2 } from '@mui/material';
import { AuthContext } from '../context/Auth';
import ProductCard from './ProductCard';
import { useOutletContext } from 'react-router-dom';

export function RumahTangga() {
   const {arrProducts} = useContext(AuthContext)
   const filteredProducts = arrProducts.filter((p) => p.kategori === 'Rumah Tangga')

   const { searchQuery } = useOutletContext()
   const filteredData = (searchQuery
   ? filteredProducts.filter((item) =>
         item.nama.toLowerCase().includes(searchQuery.toLowerCase())
      )
   : filteredProducts)

  return (
    <>
      <Container sx={{minHeight: '370px'}}>
         <h1>Produk Rumah Tangga</h1>
         <Grid2 container spacing={3} sx={{marginTop: '30px'}}>
            {filteredData.map((p, index) => (
               <ProductCard key={index} produkProp={p} />
            ))}
         </Grid2>
      </Container>
    </>
  )
}

export function Elektronik() {
   const {arrProducts} = useContext(AuthContext)
   const filteredProducts = arrProducts.filter((p) => p.kategori === 'Elektronik')

   const { searchQuery } = useOutletContext()
   const filteredData = (searchQuery
   ? filteredProducts.filter((item) =>
         item.nama.toLowerCase().includes(searchQuery.toLowerCase())
      )
   : filteredProducts)

  return (
    <>
      <Container sx={{minHeight: '370px'}}>
         <h1>Produk Elektronik</h1>
         <Grid2 container spacing={3} sx={{marginTop: '30px'}}>
            {filteredData.map((p, index) => (
               <ProductCard key={index} produkProp={p} />
            ))}
         </Grid2>
      </Container>
    </>
  )
}

export function Fashion() {
   const {arrProducts} = useContext(AuthContext)
   const filteredProducts = arrProducts.filter((p) => p.kategori === 'Fashion')

   const { searchQuery } = useOutletContext()
   const filteredData = (searchQuery
   ? filteredProducts.filter((item) =>
         item.nama.toLowerCase().includes(searchQuery.toLowerCase())
      )
   : filteredProducts)

  return (
    <>
      <Container sx={{minHeight: '370px'}}>
         <h1>Produk Fashion</h1>
         <Grid2 container spacing={3} sx={{marginTop: '30px'}}>
            {filteredData.map((p, index) => (
               <ProductCard key={index} produkProp={p} />
            ))}
         </Grid2>
      </Container>
    </>
  )
}

export function Kecantikan() {
   const {arrProducts} = useContext(AuthContext)
   const filteredProducts = arrProducts.filter((p) => p.kategori === 'Kecantikan')

   const { searchQuery } = useOutletContext()
   const filteredData = (searchQuery
   ? filteredProducts.filter((item) =>
         item.nama.toLowerCase().includes(searchQuery.toLowerCase())
      )
   : filteredProducts)

   return (
     <>
       <Container sx={{minHeight: '370px'}}>
          <h1>Produk Kecantikan</h1>
          <Grid2 container spacing={3} sx={{marginTop: '30px'}}>
            {filteredData.map((p, index) => (
               <ProductCard key={index} produkProp={p} />
            ))}
         </Grid2>
       </Container>
     </>
   )
 }

 export function Kesehatan() {
   const {arrProducts} = useContext(AuthContext)
   const filteredProducts = arrProducts.filter((p) => p.kategori === 'Kesehatan')

   const { searchQuery } = useOutletContext()
   const filteredData = (searchQuery
   ? filteredProducts.filter((item) =>
         item.nama.toLowerCase().includes(searchQuery.toLowerCase())
      )
   : filteredProducts)

   return (
     <>
       <Container sx={{minHeight: '370px'}}>
          <h1>Produk Kesehatan</h1>
          <Grid2 container spacing={3} sx={{marginTop: '30px'}}>
            {filteredData.map((p, index) => (
               <ProductCard key={index} produkProp={p} />
            ))}
         </Grid2>
       </Container>
     </>
   )
 }

 export function MakananMinuman() {
   const {arrProducts} = useContext(AuthContext)
   const filteredProducts = arrProducts.filter((p) => p.kategori === 'Makanan & Minuman')

   const { searchQuery } = useOutletContext()
   const filteredData = (searchQuery
   ? filteredProducts.filter((item) =>
         item.nama.toLowerCase().includes(searchQuery.toLowerCase())
      )
   : filteredProducts)

   return (
     <>
       <Container sx={{minHeight: '370px'}}>
          <h1>Produk Makanan & Minuman</h1>
          <Grid2 container spacing={3} sx={{marginTop: '30px'}}>
            {filteredData.map((p, index) => (
               <ProductCard key={index} produkProp={p} />
            ))}
         </Grid2>
       </Container>
     </>
   )
 }

export function Default() {
   const {arrProducts} = useContext(AuthContext)

   const { searchQuery } = useOutletContext()
   const filteredData = (searchQuery
   ? arrProducts.filter((item) =>
         item.nama.toLowerCase().includes(searchQuery.toLowerCase())
      )
   : arrProducts)

   return (
     <>
       <Container sx={{minHeight: '370px'}}>
         <Grid2 container spacing={3} sx={{marginTop: '30px'}}>
            {filteredData.map((p, index) => (
               <ProductCard key={index} produkProp={p} />
            ))}
         </Grid2>
      </Container>
     </>
   )
 }