import React, { useState } from "react";
import '../App.css';
import styledCom from 'styled-components';
import FB from '../imgs/facebook-icon.png';
import IG from '../imgs/instagram-icon.png';
import { Link } from 'react-router-dom';

function Foot() {

    return (
        <Footer>
            <Socials>
                <a href="https://www.facebook.com"><Facebook src={FB} alt="fb" /></a>
                <a href="https://www.instagram.com"><Instagram src={IG} alt="ig" /></a>
            </Socials>

        </Footer>
    );
}

export default Foot;

// styled components //

const Footer = styledCom.div`
height: 50px;
width: 100%;
bottom: 0;
position: absolute;
background-size: contain;
z-index: 100;
`;
const Socials = styledCom.div`
text-align: center;
position:absolute;
right:0px;
bottom:0px;
background-color: white;
opacity:70%;
height:40px;
width:100px;
z-index:100;
`;

const Facebook = styledCom.img`
display: inline-block;
width:30px;
height:30px;
padding:7px;
transform: translate(0%);
transition: 0.3s ease-out;
    &:hover {
        transform: scale(1.2) translateY(-15%);
        filter: drop-shadow(0 0 0.1rem teal);
        opacity:100%;
    }
    &:active {
        transform: scale(1.14) translateY(-5%);
    }
`;

const Instagram = styledCom.img`
display: inline-block;
width:30px;
height:30px;
padding:7px;
z-index:200;
transition: 0.3s ease-out;
    &:hover {
        transform: scale(1.2) translateY(-15%);
        filter: drop-shadow(0 0 0.1rem crimson);
    }
    &:active {
        transform: scale(1.14) translateY(-5%);
    }
`;