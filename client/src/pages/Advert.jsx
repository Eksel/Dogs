import React from 'react';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cards from '../components/Cards';
import { images } from '../assets/images';
import "./advert.css"
const Advert = ({dog}) => {
  const [objects, setObjects] = useState([]);
  
  useEffect(() => {
    axios.get("https://papito.onrender.com/dogs/")
    .then(res => setObjects(res.data))
    .catch(error => {
      console.log(error)
    })
  }, []);
  return (
    <>
      <Navbar/>
      <main className='advert'>
        <article className='info'>
          <div className="left">
              <img src={images[dog.image]} alt="" />
          </div>
          <div className="right">
            <h1 className='name'>{dog.name}</h1>
            <section>
              <div className="box">
                <div>
                  <h1>Rasa:</h1>
                  <h2>{dog.breedName}</h2>
                </div>
                <div>
                  <h1>Płec:</h1>
                  <h2>{dog.gender}</h2>
                </div>
                <div>
                  <h1>Wiek:</h1>
                  <h2>{dog.age} tygodni</h2>
                </div>
                <div>
                  <h1>Waga:</h1>
                  <h2>{dog.weight} kg</h2>
                </div>
              </div>
              <div className="box">
                <div>
                  <h1>Cena:</h1>
                  <h2>{dog.price} zł</h2>
                </div>
                <div>
                  <h1>Obserwujacyh:</h1>
                  <h2>{dog.views}</h2>
                </div>
                
              <div>
                <h1>Link do OlX:</h1>
                <h2><a href={dog.olxLink}>Zaufany sprzedawca</a></h2>
              </div>
            </div>
            </section>
            
          </div>
        </article>
      </main>
      <Footer/>
    </>
  );
}

export default Advert;


