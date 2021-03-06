import styledCom from 'styled-components';
import '../App.css';

function Intro() {
  return (
    <Wrapper className="App">
      <Header>
        <h1>INTRO</h1>
      </Header>
      <Content>
        The Gathering is a place “teeming with life”—a place of engaging body, soul, mind and spirit in
        living an abundant life!
        <br/><br/>
        From exploring our creativity to laughing out loud as we learn to line dance…
        <br/><br/>
        From movie nights with meaning to exploring our humanity and our place and purpose in the
        world…
        <br/><br/>
        From celebrations of marriage and babies to Celebrations of Life…
        <br/><br/>
        From the business of getting quiet to go deep to the synergy of seminars and innovation…
        <br/><br/>
        Come join us!<br/><br/>
        Come to give and to receive!<br/><br/>
        Come for connection and belonging!<br/><br/>
        Come to restore body, soul, mind and spirit!
      </Content>
    </Wrapper>
  )
};

export default Intro;

// styled components //

const Wrapper = styledCom.div`
width:100%; 
height:500px;
@media (max-width: 785px) {
  margin-top:45vh; 
  height:800px;
}
`;

const Header = styledCom.h2`
opacity:80%;
`;

const Content = styledCom.p`
margin-left:20%;
margin-right:20%;
opacity:60%;
font-family: "candara-light";
font-size:16px;
@media (max-width: 785px) {
font-size:20px;}
margin-left:10%;
margin-right:10%;
`;
