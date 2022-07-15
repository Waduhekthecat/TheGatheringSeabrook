import * as React from 'react';
import styledCom from 'styled-components';
import '../App.css';
import Banner from '../imgs/banner.png';

function AboutPage() {
  return (
    <div style={{ height: '800px', width: '100%', justifyContent: 'center', textAlign: 'center' }}>
      <BgBanner>
        <Content>
        <Header>
          About
        </Header>
        <Content2>
        The Gathering came about as a response to the isolation experienced due to the effects of
COVID regarding life as we knew it. The Gathering is about restoring life—heart, soul, mind and

strength.

We are made for community. It’s part of who we are.

The Gathering provides space for community to happen in ways that are life-giving.

We are also made for the balance of quiet reflection to restore our soul.
The Gathering provides “Quiet Hours” for stepping away from the hustle and bustle of the
world. Whether it’s crawling up on one of our comfy sofas to read, or bringing your work or art
and having ample work space to create and explore, our “Quiet Hours” provide a respite from

the noise and stresses of life.

The Gathering is a place of belonging.
The Gathering is a place of learning.
The Gathering is a place of celebration.
The Gathering is a place to share life.
The Gathering is a place for quiet reflection.
The Gathering is a place to BE and BECOME.
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
height:600px;
`;

const Header = styledCom.h2`
opacity:60%;
`;

const Content2 = styledCom.p`
margin-left:20%;
margin-right:20%;
opacity:50%;
`;