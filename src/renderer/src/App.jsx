// import Versions from './components/Versions'
// import electronLogo from './assets/electron.svg'
import React, { useEffect, useState, useReducer, useContext } from 'react';
import { Link, Navigate, NavLink, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { AuthContext } from './context/Auth';
// import dataReducer from './context/dataReducer';
// import { ADD_PRODUCT, SET_PRODUCTS, SET_USERS, SET_TRANSACTIONS, SET_USERACTIVE, EDIT_PRODUCT } from './context/types';
import { Container } from '@mui/material';

function App() {
   const {userActive} = useContext(AuthContext)

   // if(!userActive) {
   //    return <Navigate to='/login' />
   // }

   // const location = useLocation()   
   // const [user, setUser] = useState(location.state)

   // const initialData = {
   //    products: [],
   //    users: [],
   //    transactions: []
   // }

   // const [state, dispatch] = useReducer(dataReducer, initialData)

   // useEffect(() => {
   //    window.api.loadProducts().then((data) => {
   //       dispatch({
   //          type: SET_PRODUCTS,
   //          payload: data
   //       })
   //    })
   //    window.api.loadUsers().then((data) => {
   //       dispatch({
   //          type: SET_USERS,
   //          payload: data
   //       })
   //    })
   //    window.api.loadTransactions().then((data) => {
   //       dispatch({
   //          type: SET_TRANSACTIONS,
   //          payload: data
   //       })
   //    })
   //    dispatch({
   //       type: SET_USERACTIVE,
   //       payload: user
   //    })
   // }, [dispatch])

   // const addProduct = (product) => {
   //    dispatch({
   //       type: ADD_PRODUCT,
   //       payload: product
   //    })
   // }
   // const editProduct = (product) => {
   //    dispatch({
   //       type: EDIT_PRODUCT,
   //       payload: product
   //    })
   // }

   // useEffect(() => {
   //    setProducts()
      // window.api.loadProducts().then((data) => {
      //    initialProducts.products = data
      // })
      // window.api.loadUsers().then((data) => {
      //    setUsers(data)
      // })
      // window.api.loadTransactions().then((data) => {
      //    setTransactions(data)
      // })
   // }, [])

   // useEffect(() => {
   //    window.api.saveProducts(products)
   // }, [products])
   // useEffect(() => {
   //    window.api.saveUsers(users)
   // }, [users])
   // useEffect(() => {
   //    window.api.saveTransactions(transactions)
   // }, [transactions])

  return (
   //  <DataContext.Provider
   //    value={{
   //       products: state.products,
   //       users: state.users,
   //       transactions: state.transactions,
   //       userActive: state.userActive,
   //       addProduct,
   //       editProduct
   //    }}>
      <>
         <Navbar />
         <div style={{marginTop: '80px'}}>
            <Outlet></Outlet>
         </div>
         <Footer />
      </>
   //  </DataContext.Provider>
  )
}

export default App

