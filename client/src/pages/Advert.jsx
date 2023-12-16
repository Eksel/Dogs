import React from 'react';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cards from '../components/Cards';

const Advert = () => {
  const [objects, setObjects] = useState([]);
  
  useEffect(() => {
    axios.get("/api/dogs/")
    .then(res => setObjects(res.data))
    .catch(error => {
      console.log(error)
    })
  }, []);
  return (
    <>
      <Navbar/>
      <main>
        <img src="./box1.jpg" alt="" />
      </main>
      <Footer/>
    </>
  );
}

export default Advert;


