import styledCom from 'styled-components';
import '../App.css';

function Signup() {
  return (
    <div className="App" style={{ width: '100%', height: '300px' }}>
 <Header>Attend</Header>
      <Content>Welcome to The Gathering! Check our calendar for current events! Click on the event to
        register. Your place is secured through Venmo payment to Pam @ Pamela-Newberry-1 or
        through Zelle @ 281.435.5793 or pamnewberry7@gmail.com or prior arrangement with Pam.</Content>
    </div>
  )
};

export default Signup;

// styled components //

const Header = styledCom.h2`
opacity:60%;
`;

const Content = styledCom.p`
margin-left:20%;
margin-right:20%;
opacity:50%;
`;
