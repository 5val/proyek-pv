import React, { useState, useContext } from 'react';
import { Link, Navigate, NavLink, Outlet, useNavigate } from "react-router-dom";
import { Container, Paper, Button, Grid2, Card, CardMedia, CardContent, Typography, CardActions, Modal, Box } from '@mui/material';
import { AuthContext } from '../context/Auth';
import ProductCard from './ProductCard';

// import DataContext from '../context/Auth';

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

export function RumahTangga() {
   const {arrProducts} = useContext(AuthContext)
   const filteredProducts = arrProducts.filter((p) => p.kategori === 'Rumah Tangga')

  return (
    <>
      <Container sx={{minHeight: '370px'}}>
         <h1>Produk Rumah Tangga</h1>
         <Grid2 container spacing={3} sx={{marginTop: '30px'}}>
            {filteredProducts.map((p, index) => (
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

  return (
    <>
      <Container sx={{minHeight: '370px'}}>
         <h1>Produk Elektronik</h1>
         <Grid2 container spacing={3} sx={{marginTop: '30px'}}>
            {filteredProducts.map((p, index) => (
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

  return (
    <>
      <Container sx={{minHeight: '370px'}}>
         <h1>Produk Fashion</h1>
         <Grid2 container spacing={3} sx={{marginTop: '30px'}}>
            {filteredProducts.map((p, index) => (
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

   return (
     <>
       <Container sx={{minHeight: '370px'}}>
          <h1>Produk Kecantikan</h1>
          <Grid2 container spacing={3} sx={{marginTop: '30px'}}>
            {filteredProducts.map((p, index) => (
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

   return (
     <>
       <Container sx={{minHeight: '370px'}}>
          <h1>Produk Kesehatan</h1>
          <Grid2 container spacing={3} sx={{marginTop: '30px'}}>
            {filteredProducts.map((p, index) => (
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

   return (
     <>
       <Container sx={{minHeight: '370px'}}>
          <h1>Produk Makanan & Minuman</h1>
          <Grid2 container spacing={3} sx={{marginTop: '30px'}}>
            {filteredProducts.map((p, index) => (
               <ProductCard key={index} produkProp={p} />
            ))}
         </Grid2>
       </Container>
     </>
   )
 }

export function Default() {
   const {arrProducts} = useContext(AuthContext)

   return (
     <>
       <Container sx={{minHeight: '370px'}}>
         <Grid2 container spacing={3} sx={{marginTop: '30px'}}>
            {arrProducts.map((p, index) => (
               <ProductCard key={index} produkProp={p} />
            ))}
         </Grid2>
      </Container>
     </>
   )
 }