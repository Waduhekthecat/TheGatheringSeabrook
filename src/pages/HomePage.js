import React, { useState, useEffect } from 'react';
import Carousel from '../components/Carousel.js';
import Intro from '../components/Intro.js';
import QuietHours from '../components/Quiet.js';
import Signup from '../components/Signup.js';
import Host from '../components/Host.js';
import Banner from '../imgs/banner.png';
import Form from '../components/Form.js';
import styledCom from 'styled-components';
import Card from '../components/Card.js';
import Logo from '../imgs/LogoOg.png';
import Logo2 from '../imgs/iconweb.png';
import Events from '../components/Events.js';
import { Link } from 'react-router-dom';

import '../App.css';

function HomePage() {
  return (
    <div className="App">
      <Carousel />
      <Intro />
      <QuietHours />
      <Events />
        <div style={{zIndex:1200, display:'flex', width:'80vw', height:'400px', paddingLeft:'10vw', justifyContent:'center', gap:'10vw'}}>
          <Link to="/Attend" ><Card innerBackground={Logo2} outerBackground={Logo} title="Attend" /></Link>
          <Link to="/Host" ><Card innerBackground={Logo2} outerBackground={Logo} title="Host" /></Link>
        </div>
        <Form />
    </div>
  );
}

export default HomePage;

// styled components //

const BgBanner = styledCom.div`
position:relative;
height:350px;
width:100%;
background-image: url(${Banner});
background-size: cover;
background-repeat: no-repeat;
`;

const Content = styledCom.div`
position:absolute;
display: inline-block;
background-color: white;
top:150px;
left:10%;
right:10%;
height:400px;
`;

const Header = styledCom.h2`
opacity:60%;
`;

const Content2 = styledCom.p`
margin-left:20%;
margin-right:20%;
opacity:50%;
`;