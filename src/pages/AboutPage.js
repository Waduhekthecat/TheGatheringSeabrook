import * as React from 'react';
import styledCom from 'styled-components';
import '../App.css';
import Banner from '../imgs/banner2.png';

function AboutPage() {
  return (
    <div style={{height: '800px', width: '100%', justifyContent: 'center', textAlign: 'center' }}>
      <BgBanner>
        <Content>
        <Header>
          <h1>ABOUT</h1>
        </Header>
        <Content2>
        The Gathering came about as a response to the isolation experienced due to the effects of
COVID regarding life as we knew it. The Gathering is about restoring life—heart, soul, mind and

strength. <br/><br/>

We are made for community. It’s part of who we are.<br/><br/>

The Gathering provides space for community to happen in ways that are life-giving.<br/><br/>

We are also made for the balance of quiet reflection to restore our soul.
The Gathering provides “Quiet Hours” for stepping away from the hustle and bustle of the
world. Whether it’s crawling up on one of our comfy sofas to read, or bringing your work or art
and having ample work space to create and explore, our “Quiet Hours” provide a respite from

the noise and stresses of life.<br/><br/>

The Gathering is a place of belonging.<br/><br/>
The Gathering is a place of learning.<br/><br/>
The Gathering is a place of celebration.<br/><br/>
The Gathering is a place to share life.<br/><br/>
The Gathering is a place for quiet reflection.<br/><br/>
The Gathering is a place to BE and BECOME.<br/><br/>
The Gathering is a place to elevate.
        </Content2>
        </Content>
      </BgBanner>
    </div>
  );
}

export default AboutPage;

// styled components //

const BgBanner = styledCom.div`
position:relative;
height:300px;
width:100%;
background-image: url(${Banner});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
`;

const Content = styledCom.div`
position:absolute;
display: inline-block;
background-color: white;
top:150px;
left:10%;
right:10%;
height:600px;
`;

const Header = styledCom.h2`
opacity:80%;
`;

const Content2 = styledCom.p`
margin-left:20%;
margin-right:20%;
opacity:60%;
font-family: "candara-light";
font-size:16px;
`;