import React, { useContext, useState} from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box, TextField, IconButton, Avatar } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AuthContext } from '../context/Auth';

export default function Navbar({onSearch}) {
   const [inputValue, setInputValue] = useState("");

   const {userActive} = useContext(AuthContext)

   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };

   const handleInputChange = (event) => {
      const query = event.target.value;
      setInputValue(query);
      if (onSearch) {
          onSearch(query);
      }
    };

   return(
      <AppBar position="fixed" sx={{ backgroundColor: '#00b140' }}>
      <Toolbar>
         <Box sx={{display: 'flex', gap: 3, flexGrow: 1}}>
        <Typography variant="h6">
          Tokotokoan
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, marginLeft: 2 }}>
        <NavLink to='/home' style={{color: 'white'}}><Button color="inherit">Home</Button></NavLink>
          <div>
            <Button
            id="basic-button"
            color='inherit'
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            >
            Kategori
            </Button>
            <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
               'aria-labelledby': 'basic-button',
            }}
            >
            <NavLink to='/home/rumahTangga' style={{color: 'black', textDecoration: 'none'}}><MenuItem onClick={handleClose}>Rumah Tangga</MenuItem></NavLink>
            <NavLink to='/home/elektronik' style={{color: 'black', textDecoration: 'none'}}><MenuItem onClick={handleClose}>Elektronik</MenuItem></NavLink>
            <NavLink to='/home/fashion' style={{color: 'black', textDecoration: 'none'}}><MenuItem onClick={handleClose}>Fashion</MenuItem></NavLink>
            <NavLink to='/home/kecantikan' style={{color: 'black', textDecoration: 'none'}}><MenuItem onClick={handleClose}>Kecantikan</MenuItem></NavLink>
            <NavLink to='/home/kesehatan' style={{color: 'black', textDecoration: 'none'}}><MenuItem onClick={handleClose}>Kesehatan</MenuItem></NavLink>
            <NavLink to='/home/makananMinuman' style={{color: 'black', textDecoration: 'none'}}><MenuItem onClick={handleClose}>Makanan & Minuman</MenuItem></NavLink>
            </Menu>
         </div>
        </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 2, flexGrow: 1 }}>
          <TextField
            variant="outlined"
            size="small"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Search products, brands, or categories"
            sx={{ backgroundColor: 'white', borderRadius: 1, width: '700px' }}
          />
          <IconButton color="inherit" sx={{ marginLeft: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>
        {userActive ? (
         <Box sx={{display: 'flex'}}>
            <NavLink to="/usercart">
               <IconButton size='medium' sx={{ marginRight: 2}}>
                  <ShoppingCartIcon sx={{color: 'white'}} />
               </IconButton>
            </NavLink>
            <NavLink to="/profile"><Avatar /></NavLink>
         </Box>
        ) : (
         <Box sx={{ display: 'flex', gap: 2, flexGrow: 1, justifyContent: 'end' }}>
          <NavLink to="/signup" style={{color: 'white'}}><Button color="inherit">Sign Up</Button></NavLink>
          <NavLink to="/login" style={{color: 'white'}}><Button color="inherit">Log In</Button></NavLink>
        </Box>
        )}
      </Toolbar>
    </AppBar>
   )
}