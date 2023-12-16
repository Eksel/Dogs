import {useState,useEffect} from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Dogs from './pages/Dogs.jsx';
import About from './pages/About.jsx'
import Dontexist from './Dontexist.jsx';
import './App.css'

import Advert from './pages/Advert.jsx';
import axios from 'axios';
const App = () => {
    const [objects, setObjects] = useState([]);
  
    useEffect(() => {
        axios.get("https://papito.onrender.com/dogs/")
        .then(res => setObjects(res.data))
        .catch(error => {
        console.log(error)
        })
    }, []);
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/dogs" element={<Dogs/>}/>
                <Route path="/contact" element={<About/>}/>
                <Route path='/null' element={<Dontexist/>}/>
                {objects.map((dog, index) => (
                    <Route key={index} path={`/dog/${dog._id}`} element={<Advert dog={dog} />}/>
                ))}
            </Routes>
        </Router>
    );
}

export default App;
