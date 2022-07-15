import React, { useState, useEffect } from 'react';
import Carousel from '../components/Carousel.js';
import Intro from '../components/Intro.js';
import Host from '../components/Host.js';
import Signup from '../components/Signup.js';
import QuietHours from '../components/Quiet.js';
import Banner from '../imgs/banner.png';
import Form from '../components/Form.js';
import styledCom from 'styled-components';
import '../App.css';

function HomePage() {
  return (
    <div className="App">
      <Carousel />
      <Intro />
      <Host />
      <QuietHours />
        <Signup />
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