import { useState } from 'react'
import Cards from '../components/Cards'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import data from '../Data'

function Home() {
  
  return (
    <>
    <Navbar/>
    
    <div className="conteiner">
      <section className='left-box'>
        <p className='quote'>
          "Pies jest jedyną istotą na ziemi, która kocha cię bardziej, niż siebie samego" - Josh Billings
        </p>
      </section>
      
      <section>
        <div className="row">
          <div className="box">
            <img src="./box1.jpg" alt="" />
          </div>
          <div className="box">
            <img src="./box2.jpg" alt="" />
          </div>
        </div>
        <div className="row">
          <div className="box">
            <img src="./box3.jpg" alt="" />
          </div>
          <div className="box">
            <img src="./box4.jpg" alt="" />
          </div>
        </div>
        <div className="row">
          <div className="box">
            <img src="./box5.jpg" alt="" />
          </div>
          <div className="box">
            <img src="./box6.jpg" alt="" />
          </div>
        </div>
        
      </section>
    </div>
    <section className='info'>
      <div className="square">
        <img src="./inf1.jpg" alt="" />
        <h1>
          Indywidualne podejście
        </h1>
        <p>
          Nasza hodowla psów wyróżnia się indywidualnym podejściem do każdego czworonoga. Dla nas każdy pies to unikatowa osobowość, a my dostosowujemy opiekę, trening i uwagę do jego potrzeb, zapewniając mu najlepsze warunki rozwoju.
        </p>
      </div>
      <div className="square">
        <img src="./inf2.jpg" alt="" />
        <h1>
          Zdrowie i genetyka na pierwszym miejscu
        </h1>
        <p>
          Nasze psy to nie tylko urocze zwierzaki, ale także zdrowe, dobrze zbudowane jednostki. Stawiamy na staranne selekcjonowanie linii genetycznych, regularne badania zdrowotne i dbamy o to, aby nasze szczenięta wychowywane były w najzdrowszym środowisku, co gwarantuje nowym właścicielom psa pełną radość i spokój o jego dobre samopoczucie.
        </p>
      </div>
      <div className="square">
        <img src="./inf3.jpg" alt="" />
        <h1>
          Pasja i zaangażowanie
        </h1>
        <p>
          Nasza hodowla to nie tylko biznes, to pasja i miłość do psów. Każdy z naszych pracowników kocha to, co robi, i jest zaangażowany w zapewnienie najlepszych warunków życia naszym pupilom. Działamy z pasją, bo wierzymy, że szczęśliwy pies to zadowolony właściciel.
        </p>
      </div>
    </section>
    <h1 className='text'>Popularne psy: </h1>
    <div className="cards">
      
      
      {data.filter(dog => dog.views > 200).map((dog, index) => (
        
        <Link key={index} to={`/dog/${dog.id}`}>
            <Cards key={dog.id} dog={dog} />
        </Link>
      ))}
      
    </div>
    <Footer/>
    
    </>
  )
}

export default Home
