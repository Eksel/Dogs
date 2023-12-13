import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../Dogs.css"
import Cards from '../components/Cards';
import data from '../Data';
import { useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
const Dogs = () => {
    
    
    return (
        <>
            <Navbar/>
            <main>
                <section className='cards-conteinter'>
                    <h2>
                        Najcześciej przeglądane
                    </h2>
                    <div className='cards'>
                    {data.filter(dog => dog.views > 200).map((dog, index) => (
                        <Link key={index} to={`/dog/${dog.id}`}>
                            <Cards key={dog.id} dog={dog} />
                        </Link>
                    ))}
                    </div>
                </section>
                <section className='cards-conteinter'>
                    <h2>
                        Berneński pies pasterski
                    </h2>
                    <div className='cards'>
                    
                    {data.filter(dog => dog.breed == "Bernenski_pies_pasterski").map((dog, index) => (
                        <Link key={index} to={`/dog/${dog.id}`}>
                            <Cards key={dog.id} dog={dog} />
                        </Link>
                    ))}
                    </div>
                </section>
                <section className='cards-conteinter'>
                    <h2>
                        Golden Retriver
                    </h2>
                    <div className='cards'>
                    
                    {data.filter(dog => dog.breed == "Golden_retriver").map((dog, index) => (
                        <Link key={index} to={`/dog/${dog.id}`}>
                            <Cards key={dog.id} dog={dog} />
                        </Link>
                    ))}
                    </div>
                </section>
                <section className='cards-conteinter'>
                    <h2>
                        Husky
                    </h2>
                    <div className='cards'>
                    {data.filter(dog => dog.breed == "Husky").map((dog, index) => (
                        <Link key={index} to={`/dog/${dog.id}`}>
                            <Cards key={dog.id} dog={dog}/>
                        </Link>
                    ))}
                    </div>
                </section>
                <section className='cards-conteinter'>
                    <h2>
                        Pudel
                    </h2>
                    <div className='cards'>
                    {data.filter(dog => dog.breed == "Pudel").map((dog, index) => (
                        <Link key={index} to={`/dog/${dog.id}`}>
                            <Cards key={dog.id} dog={dog}/>
                        </Link>
                        
                    ))}
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default Dogs;
