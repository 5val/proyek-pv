import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
   const [searchQuery, setSearchQuery] = useState("");
   const handleSearch = (query) => {
      setSearchQuery(query);
    };

  return (
      <>
         <Navbar onSearch={handleSearch} />
         <div style={{marginTop: '80px'}}>
            <Outlet context={{ searchQuery }} />
         </div>
         <Footer />
      </>
  )
}

export default App

