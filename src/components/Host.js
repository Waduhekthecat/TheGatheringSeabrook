import styledCom from 'styled-components';
import '../App.css';
import Banner from '../imgs/banner.png';

function Host() {
  return (
<div style={{ height: '600px', width: '100%', justifyContent: 'center', textAlign: 'center' }}>
      <BgBanner>
        <Content>
        <Header>
        Host your event
      </Header>
      <Content2>Interested in hosting a celebration, a training, a Bible study, a book club, a visual or performing
        arts class, a fitness class, teaching a skill or craft that you’re passionate about? The Gathering
        is your answer! Apply here!
        Rates for hosting celebrations such as small weddings, showers, birthday parties,
        quincenaneras, seminars, trainings and day retreats are $95/hour, including set-up and take-
        down time, with a $100 cleaning fee. Minimum 3-hour booking.
        Rates for hosting classes and other events are $95/hour with a 2 hr. minimum, plus a $50
        cleaning fee.
        See calendar for availability. Contact Pam @ 281.435.5793 for more information. 
        </Content2>    
        <button>Book Now</button>
        </Content>      
      </BgBanner>
    </div>
      )
};

export default Host;

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
height:200px;
`;

const Header = styledCom.h2`
opacity:60%;
`;

const Content2 = styledCom.p`
margin-left:20%;
margin-right:20%;
opacity:50%;
`;