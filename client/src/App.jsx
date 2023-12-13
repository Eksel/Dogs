import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Dogs from './pages/Dogs.jsx';
import Contact from './pages/Contact.jsx';
import Dontexist from './Dontexist.jsx';
import './App.css'
import data from './Data.js';
import Advert from './pages/Advert.jsx';
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/dogs" element={<Dogs/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path='/null' element={<Dontexist/>}/>
                {data.map((dog, index) => (
                    <Route key={index} path={`/dog/${index}`} element={<Advert dog={dog} />}/>
                ))}
            </Routes>
        </Router>
    );
}

export default App;
