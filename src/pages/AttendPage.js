import * as React from 'react';
import styledCom from 'styled-components';
import VisionBoard from '../imgs/vision-board.png';
import '../App.css';



function AttendPage() {
      return (
<Wrapper>
<Vision>
  <Content>
  <Header>
    <h1>Attend</h1>
  </Header>
  <Content2>The Gathering hosts a variety of popular events! <br/><br/>
               <a href="">Find an event</a> 
               <br/><br/>
  On our calendar pages you will find current
       offerings. Click on the event in the calendar to register. Pay event fee through Venmo @
       Pamela-Newberry-1 or Zelle @ 281.435.5793 or pamnewberry7@gmail.com or through prior
       arrangement with Pam. Your payment secures your spot!
  </Content2>
  </Content>
</Vision>
</Wrapper>
);
}

export default AttendPage;


// styled components //

const Wrapper = styledCom.div`
paddingTop:20vh; 
height: 600px; 
width: 100%; 
justifyContent: center; 
textAlign: center;
@media (max-width: 785px) {
  display:none;
  }
`;


const Vision = styledCom.div`
position:relative;
height:300px;
width:100%;
background-image: url(${VisionBoard});
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
