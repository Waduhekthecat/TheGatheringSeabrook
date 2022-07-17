import styledCom from 'styled-components';
import '../App.css';
import Banner from '../imgs/banner2.png';

function QuietHours() {
  return (
<div style={{ minHeight:'500px', maxHeight: '600px', width: '100%', justifyContent: 'center', textAlign: 'center' }}>
      <BgBanner>
        <Content>
      <Header><h1>Quiet Hours</h1></Header>
      <Content2>At The Gathering we believe that time to unplug from the noise and the laundry is essential for a
healthy, vibrant life. As such, we host quiet hours with complimentary coffee and snacks. Cost
for a visit is only $10. Donations appreciated for replenishing drinks and snacks. Pretend you
are in a library setting—Yes! There are even books and magazines? so that all who visit truly

have the space and peace and quiet they have come for.</Content2>
</Content>
      </BgBanner>
    </div>
      )
};

export default QuietHours;

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
left:10vw;
right:10vw;
height:600px;
font-family: "candara-light";
font-size:16px;
`;

const Header = styledCom.h2`
opacity:80%;
`;


const Content2 = styledCom.p`
margin-left:20%;
margin-right:20%;
opacity:50%;
opacity:60%;
font-family: "candara-light";
font-size:16px;
`;