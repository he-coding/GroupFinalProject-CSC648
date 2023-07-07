import React, { useEffect, useState } from "react";
import Image from 'react-bootstrap/Image'
import  '../../style/hero.css';
import Media from 'react-bootstrap/Media'


const Home= ({}) =>{
    return(
        <div className="body">
            <div className="hero-image">
                <div className="hero-text">
                    <p className="hero-title">A.I.R</p>
                    <a href="register" class="button">Login</a>
                </div>
            </div>
        </div>
        
        
    )
}

export default Home;