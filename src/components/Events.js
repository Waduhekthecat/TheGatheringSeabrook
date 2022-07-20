import styledCom from 'styled-components';
import '../App.css';
import Banner from '../imgs/banner2.png';

function Events() {
  return (
<Wrapper>
      <Header><h1>EVENTS</h1></Header>
      <Content2>We offer you an invitation to host or attend an event at The Gathering. Peace amidst chaos and personal growth are attainable. Don't forget to check our upcoming events calendar!  <br/><br/> Choose an option below to learn more.
</Content2>
    </Wrapper>
      )
};

export default Events;

// styled components //

const Wrapper = styledCom.div`
height:300px;
width: 100%;
justifyContent: center;
textAlign: center;
@media (max-width: 785px) {
  height:30vh;
  }
  @media (max-width: 550px) {
    height:40vh;
    }
    @media (max-width: 450px) {
      height:50vh;
      }
`;

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
@media (max-width: 785px) {
  font-size:20px;
  }
`;


const Content2 = styledCom.p`
margin-left:20%;
margin-right:20%;
opacity:70%;
font-family: "candara-light";
font-size:16px;
@media (max-width: 785px) {
  font-size:20px;
  margin-left:10%;
  margin-right:10%;
  }
`;