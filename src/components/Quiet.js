import styledCom from 'styled-components';
import '../App.css';

function QuietHours() {
  return (
    <div className="App" style={{ width: '100%', height: '300px' }}>
 <Header>Quiet hours</Header>
      <Content>At The Gathering we believe that time to unplug from the noise and the laundry is essential for a
healthy, vibrant life. As such, we host quiet hours with complimentary coffee and snacks. Cost
for a visit is only $10. Donations appreciated for replenishing drinks and snacks. Pretend you
are in a library setting—Yes! There are even books and magazines? so that all who visit truly

have the space and peace and quiet they have come for.</Content>
    </div>
  )
};

export default QuietHours;

// styled components //

const Header = styledCom.h2`
opacity:60%;
`;

const Content = styledCom.p`
margin-left:20%;
margin-right:20%;
opacity:50%;
`;
