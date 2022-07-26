import * as React from 'react';
import styledCom from 'styled-components';
import VisionBoard from '../imgs/vision-board.png';
import { Link } from 'react-router-dom';
import '../App.css';



function AttendPage() {
      return (
        <div className="App">
<Wrapper>
<Vision>
  <Content>
  <Header>
    <h1>Attend</h1>
  </Header>
  <Content2>The Gathering hosts a variety of popular events! <br/><br/>
               <Link style={{textDecoration:'none', color:'pink'}} to="/Calendar"><LinkCalendar>Find an event</LinkCalendar></Link> 
               <br/><br/>
  On our calendar pages you will find current
       offerings. Click on the event in the calendar to register. Pay event fee through Venmo @
       Pamela-Newberry-1 or Zelle @ 281.435.5793 or pamnewberry7@gmail.com or through prior
       arrangement with Pam. Your payment secures your spot!
  </Content2>
  </Content>
</Vision>
</Wrapper></div>
);
}

export default AttendPage;

// styled components //

const Wrapper = styledCom.div`
padding-top:20vh; 
height: 600px; 
width: 100%; 
justifyContent: center; 
textAlign: center;
@media (max-width: 785px) {
padding-top:5vh;
  }
`;

const LinkCalendar = styledCom.h2`
&:hover {
  transform: scale(1.1);
}
&:active {
  transform: scale(0.9);
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
@media (max-width: 785px) {
font-size:20px;
  margin-left:10%;
  margin-right:10%;
}
`;
