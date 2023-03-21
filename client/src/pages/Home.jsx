import React, { useState } from 'react'
import Announcement from '../components/Announcement.jsx'
import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar.jsx'
import Products from '../components/Products.jsx'
import Slider from '../components/Slider.jsx'

const Home = () => {
  const [filters] = useState({sex: "boy"});
  return (
    <div>
      <Announcement/>
      <Navbar />
      <Slider/>
      <Products filters={filters} />
      <Footer/>
    </div>
  )
};

export default Home;
