import * as React from 'react';
import styledCom from 'styled-components';
import '../App.css';

function HostPage() {
    return (
        <div className="App">
            <Wrapper>
                <Content>
                    <Header>
                        <h1>Host</h1>
                    </Header>
                    <Content2>Interested in hosting an event or teaching a skill or craft that you’re passionate about? The
                        Gathering has the versatility for hosting an array of different events from celebrations, to
                        trainings, to Bible studies, book clubs, movie events, visual or performing arts classes, fitness
                        classes, business promotional events and more! <br /><a href=""><br />Learn more</a><br /><br />
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
            </Wrapper>
        </div>
    )
};

export default HostPage;


// styled components //

const Wrapper = styledCom.div`
height:70vh;
align-items: center;
justify-content: center;
opacity:70%;
`;

const Header = styledCom.h2`
opacity:80%;
`;

const Content = styledCom.p`
margin-left:20%;
margin-right:20%;
opacity:80%;
font-family: "candara-light";
font-size:16px;
`;

const Content2 = styledCom.p`
opacity:80%;
font-family: "candara-light";
font-size:16px;
`;