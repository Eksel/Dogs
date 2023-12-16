import { useState,useEffect} from 'react'
import Cards from '../components/Cards'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import data from '../Data'
import axios from 'axios'
import { images } from '../assets/images'
import box1 from "../assets/box1.jpg"
import box2 from "../assets/box2.jpg"
import box3 from "../assets/box3.jpg"
import box4 from "../assets/box4.jpg"
import box5 from "../assets/box5.jpg"
import box6 from "../assets/box6.jpg"
import inf1 from "../assets/inf1.jpg"
import inf2 from "../assets/inf2.jpg"
import inf3 from "../assets/inf3.jpg"
function Home() {
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
    <main className='home'>
      <div className="conteiner">
        <section className='left-box'>
          <p className='quote'>
            "Pies jest jedyną istotą na ziemi, która kocha cię bardziej, niż siebie samego" - Josh Billings
          </p>
        </section>
        
        <section>
          <div className="row">
            <div className="box">
              <img src={box1} alt="" />
            </div>
            <div className="box">
              <img src={box2} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="box">
              <img src={box3} alt="" />
            </div>
            <div className="box">
              <img src={box4} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="box">
              <img src={box5} alt="" />
            </div>
            <div className="box">
              <img src={box6} alt="" />
            </div>
          </div>
          
        </section>
      </div>
      <section className='info'>
        <div className="square">
          <img src={inf1} alt="" />
          <h1>
            Indywidualne podejście
          </h1>
          <p>
            Nasza hodowla psów wyróżnia się indywidualnym podejściem do każdego czworonoga. Dla nas każdy pies to unikatowa osobowość, a my dostosowujemy opiekę, trening i uwagę do jego potrzeb, zapewniając mu najlepsze warunki rozwoju.
          </p>
        </div>
        <div className="square">
          <img src={inf2} alt="" />
          <h1>
            Zdrowie i genetyka na pierwszym miejscu
          </h1>
          <p>
            Nasze psy to nie tylko urocze zwierzaki, ale także zdrowe, dobrze zbudowane jednostki. Stawiamy na staranne selekcjonowanie linii genetycznych, regularne badania zdrowotne i dbamy o to, aby nasze szczenięta wychowywane były w najzdrowszym środowisku, co gwarantuje nowym właścicielom psa pełną radość i spokój o jego dobre samopoczucie.
          </p>
        </div>
        <div className="square">
          <img src={inf3} alt="" />
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
        
      
        {objects && objects.filter(dog => dog.views > 200).map((dog, index) => (
          
          <Link key={index} to={`/dog/${dog._id}`}>
              <Cards key={index} dog={dog} />
          </Link>
        ))}
        
      </div>
    </main>
    
    <Footer/> 
    
    </>
  )
}

export default Home
