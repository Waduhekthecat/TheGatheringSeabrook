import styledCom from 'styled-components';
import '../App.css';

function Intro() {
  return (
    <div className="App" style={{ width: '100%', height: '300px' }}>
      <Header>
        Intro
      </Header>
      <Content>
        The Gathering is a place “teeming with life”—a place of engaging body, soul, mind and spirit in

        living an abundant life!

        From exploring our creativity to laughing out loud as we learn to line dance…
        From movie nights with meaning to exploring our humanity and our place and purpose in the

        world…

        From celebrations of marriage and babies to Celebrations of Life…

        From the business of getting quiet to go deep to the synergy of seminars and innovation…

        Come join us!
        Come to give and to receive!
        Come for connection and belonging!
        Come to restore body, soul, mind and spirit!
      </Content>
    </div>
  )
};

export default Intro;

// styled components //

const Header = styledCom.h2`
opacity:60%;
`;

const Content = styledCom.p`
margin-left:20%;
margin-right:20%;
opacity:50%;
`;
