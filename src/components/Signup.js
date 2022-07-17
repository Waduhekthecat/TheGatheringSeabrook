import styledCom from 'styled-components';
import '../App.css';

function Signup() {
  return (
    <div className="App" style={{ width: '90%', height: '500px' }}>
 <Header><h1>Attend</h1></Header>
      <Content>The Gathering hosts a variety of popular events! <br/><br/>
        <a href="">Find an event</a>
        {/* On our calendar pages you will find current
offerings. Click on the event in the calendar to register. Pay event fee through Venmo @
Pamela-Newberry-1 or Zelle @ 281.435.5793 or pamnewberry7@gmail.com or through prior
arrangement with Pam. Your payment secures your spot! */}
</Content>
        
        
    </div>
  )
};

export default Signup;

// styled components //

const Header = styledCom.h2`
opacity:80%;
`;

const Content = styledCom.p`
margin-left:20%;
margin-right:20%;
opacity:60%;
font-family: "candara-light";
font-size:16px;
`;
