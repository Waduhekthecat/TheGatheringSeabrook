import * as React from 'react';
import styledCom from 'styled-components';
import Couches from '../imgs/couches.png';
import '../App.css';



function HostPage() {
      return (
        <div className="App">
<Wrapper>
<Room>
  <Content>
  <Header>
    <h1>Host</h1>
  </Header>
  <Content2>Interested in hosting an event or teaching a skill or craft that you’re passionate about? The
                        Gathering has the versatility for hosting an array of different events from celebrations, to
                        trainings, to Bible studies, book clubs, movie events, visual or performing arts classes, fitness
                        classes, business promotional events and more! <br /><br /><br />
                        Rates for hosting celebrations such as small weddings, showers, birthday parties,
                        quincenaneras, seminars, trainings and day retreats are $95/hour, including set-up and take-
                        down time, with a $100 cleaning fee. Minimum 3-hour booking. Some events are subject to a
                        deposit.<br /><br />
                        Rates for hosting classes and other events are $95/hour with a 2 hr. minimum, plus a $50
                        cleaning fee.<br /><br />
                        See calendar for availability. Contact Pam @ 281.435.5793 for more information.
                    </Content2>
                    <button>Book Now</button>
                </Content>
</Room>
</Wrapper></div>
);
}

export default HostPage;

// styled components //

const Wrapper = styledCom.div`
paddingTop:5vh; 
height: 800px; 
width: 100%; 
justifyContent: center; 
textAlign: center;
@media (max-width: 785px) {
    height:1200px;
    }
`;

const Room = styledCom.div`
position:relative;
height:400px;
width:100%;
background-image: url(${Couches});
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
text-align:left;
margin-left:20%;
margin-right:20%;
opacity:60%;
font-family: "candara-light";
font-size:16px;
@media (max-width: 785px) {
    margin-left:10%;
    margin-right:10%;
    }
`;
