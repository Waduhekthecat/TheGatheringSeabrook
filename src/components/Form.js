import * as React from 'react';
import styledCom from 'styled-components';
import { useState } from 'react';
import { send } from 'emailjs-com';
import '../App.css';

function Form() {
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [details, setDetails] = useState();
  const [isOpen, setIsOpen] = useState('none');
  const handleOpen = () => {
    setIsOpen('block');
  }
  const handleClose = () => {
    setIsOpen('none');
  }
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_wcilpwn',
      'template_wa1rvct',
      toSend,
      'PAp4Ujzl5HLYu1Fyt'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const handleName = (e) => {
    handleChange(e);
    setName(e.target.value);
  };

  const handleNumber = (e) => {
    handleChange(e);
    setNumber(e.target.value);
  };

  const handleValidate = (e) => {
    if (name!=='' && number!=='' && details!=='') {setDetails(e.target.value)};
    handleChange(e);
  };

  

  return (
    <>
    <Wrapper>
    <FormContainer>
        <FormSection>
        <form onSubmit={onSubmit}>
        <h1>Contact</h1>
            <FormGroup>
            <FormField id="name">
              <input 
                type="text"
                name='from_name'
                placeholder='First and Last name'
                value={toSend.from_name}
                onChange={handleName}
              />
            </FormField>
            <FormField id="email">
              <input
                type='text'
                name='reply_to'
                placeholder='Email'
                value={toSend.reply_to}
                onChange={handleChange}
              />
            </FormField>
                    <FormField id="phone">
              <input
                type='text'
                name='from_number'
                placeholder='Phone Number'
                value={toSend.from_number}
                onChange={handleNumber}
              />
            </FormField>
            <FormField id="date">
            <input
                type='text'
                name='date'
                placeholder='Date'
                value={toSend.date}
                onChange={handleChange}
              />
            </FormField>
            <FormField id="event">
            <input
              type='text'
              name='message'
              placeholder='Event Details'
              value={toSend.message}
              onChange={handleValidate}
            />
            </FormField>
            <FormField>
            <button style={{cursor:'pointer'}} type="submit" disabled={!details} onClick={handleOpen}>Send</button>
            </FormField>
            </FormGroup>
        </form>
        </FormSection>
    </FormContainer>
    </Wrapper>

    <Confirmation style={{display:isOpen}}>
      <div style={{position:'relative', top:'30%'}}>
    <h1>Confirmation Of Inquiry</h1>
    <p> Thank you! We will be in contact with you shortly. Have a blessed day.</p>
    <button onClick={handleClose}>Exit</button>
    </div>
    </Confirmation>
    
</>
  );
}

export default Form;

// styled components //

const Confirmation = styledCom.div`
border-radius:15px;
background-color:white;
width:70vw;
height:40vh;
position: fixed;
bottom:20vh;
left:15vw;
margin: 0 auto;
border: 3px solid pink;
padding: 10px;
`;


const Wrapper = styledCom.div`
display: flex;
height:70vh;
align-items: center;
justify-content: center;
background-color: #f0f0f0;
opacity:70%;
`;

const FormContainer = styledCom.div`
margin-bottom:10%;
width: 600px;
height: 450px;
display:flex;
box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.3);
`;

const FormSection = styledCom.div`
background-color: white;
height:100%;
width:100%;
`;

const FormGroup = styledCom.div`
display:flex;
flex-direction:column;
`;

const FormField = styledCom.div`
margin: 5px 15px;
align-items:center;
border-radius:5px;
padding: 10px 15px;
opacity:60%;
font-family: "candara-light";
font-size:16px;
`;
