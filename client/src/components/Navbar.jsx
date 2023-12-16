import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import image from "../assets/image.png"
import menu from "../assets/menu.png"

const Navbar = () => {
    const [condtion, setcondtion] = useState(true);
    function handleClick(){
        
        setcondtion(prev => {return !prev})
        showUp(condtion)
    }
    window.onscroll = function(){
        if(!condtion){
        setcondtion(prev => {return !prev}) 
        showUp(condtion)
        }
        
    }
    function showUp(con){
        if(con){
        
        document.getElementById('menu').style.display = "flex";
        }else{
        document.getElementById('menu').style.display = "none";
        }
    }
    return (
        <>
            <div className="baner">
                <header>
                    <div className="block" id='name'>
                        <Link to="/">
                            <img src={image} alt="" />
                            <p>PAPITO</p>
                        </Link>
                    </div>
                    <div className='links'>
                        <Link to="/dogs">
                            <p>Dogs</p>
                        </Link>
                        <Link to="/contact">
                            <p>Contact us</p>
                        </Link>
                    </div>
                    <div className="min" onClick={() => {handleClick()}} >
                        <img src={menu} alt="" />
                    </div>
                </header>
            </div>
            <div className="sidebar" id="menu">
                    <div className='links'>
                <Link to="/dogs">
                    <p>Dogs</p>
                </Link>
                <Link to="/contact">
                    <p>Contact us</p>
                </Link>
                </div>
            </div>
        </>
    );
}

export default Navbar;
