import React, { useState, useEffect } from 'react';
import Carousel from '../components/Carousel.js';
import Intro from '../components/Intro.js';
import QuietHours from '../components/Quiet.js';
import Banner from '../imgs/banner.png';
import Form from '../components/Form.js';
import PracticeForm from '../PracticeForm.js';
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
        <CardWrapper>
          <Link to="/Attend" ><Card innerBackground={Logo2} outerBackground={Logo} title="Attend" /></Link>
          <br/><br/><br/>
          <Link to="/Host" ><Card innerBackground={Logo2} outerBackground={Logo} title="Host" /></Link>
        </CardWrapper>
        <Form />
    </div>
  );
}

export default HomePage;

// styled components //

const CardWrapper = styledCom.div`
zIndex:1200;
display:flex;
width:98vw;
height:400px;
justify-content:center;
gap:10vw;
padding-bottom:10%;
@media (max-width: 785px) {
  position:relative;
  display:block;
  height:600px;
  margin: auto;
  padding-left:31%;
  padding-right:35%;
  padding-bottom:45%;
  }
  @media (max-width: 700px) {
    padding-left:29%;
    padding-bottom:60%;
    }
  @media (max-width: 600px) {
    padding-left:26%;
    padding-bottom:60%;
    }
    @media (max-width: 500px) {
      padding-left:24%;
      padding-bottom:65%;
      }
      @media (max-width: 450px) {
        padding-left:21%;
        padding-bottom:70%;
        }
        @media (max-width: 400px) {
          padding-left:17%;
          padding-bottom:75%;
          }
          @media (max-width: 370px) {
            padding-left:14%;
            padding-bottom:85%;
            }
`;

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