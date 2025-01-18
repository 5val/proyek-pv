import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Profile from './components/Profile'
import BuyNow from './components/BuyNow'
import BuySuccess from './components/BuySuccess'
import UpdateProduct from './components/UpdateProduct'
import History from './components/History'
import UserCart from './components/UserCart'
import {Elektronik, Default, Fashion, Kecantikan, Kesehatan, MakananMinuman, RumahTangga} from './components/Categories'
import {
   createBrowserRouter,
   Navigate,
   RouterProvider,
 } from "react-router-dom";
import Auth from './context/Auth'

const router = createBrowserRouter([
   {
      element: <App />,
      children: [
         {
            path: "/",
            element: <Home />,
            children: [
               {
                  index: true,
                  element: <Default />
               }
            ]
         },
         {
            path: "/home",
            element: <Home />,
            children: [
               {
                  path: "elektronik",
                  element: <Elektronik />
               },
               {
                  path: "fashion",
                  element: <Fashion />
               },
               {
                  path: "kecantikan",
                  element: <Kecantikan />
               },
               {
                  path: "kesehatan",
                  element: <Kesehatan />
               },
               {
                  path: "makananMinuman",
                  element: <MakananMinuman />
               },
               {
                  path: "rumahTangga",
                  element: <RumahTangga />
               },
               {
                  index: true,
                  element: <Default />
               }
            ]
         },
         {
            path: '/profile',
            element: <Profile />
         },
         {
            path: '/buynow',
            element: <BuyNow />
         },
         {
            path: '/buysuccess',
            element: <BuySuccess />
         },
         {
            path: '/updateproduct',
            element: <UpdateProduct />
         },
         {
            path: '/history',
            element: <History />
         },
         {
            path: '/usercart',
            element: <UserCart />
         }
      ]
   },
   {
      path: '/login',
      element: <Login />
   },
   {
      path: '/signup',
      element: <Signup />
   }
])

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <Auth>
         <RouterProvider router={router}></RouterProvider>
      </Auth>
   </React.StrictMode>
)
