import * as React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import './index.css';
import Nav from './components/Nav.js';
import Foot from './components/Footer.js';
  import HomePage from './pages/HomePage.js';
  import CalendarPage from './pages/CalendarPage.js';
  import AboutPage from './pages/AboutPage.js';
  import BookingPage from './pages/BookingPage.js';
import styledCom from 'styled-components';

function App() {
  return (
    <Router>
    <Wrapper>
      <Nav />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/About" element={<AboutPage/>} />
          <Route path="/Calendar" element={<CalendarPage />} />
          <Route path="/Booking" element={<BookingPage/>} />
        </Routes>
      </Wrapper>
      <Foot/>
    </Router>
  );
}

export default App;

// styled components //

const Wrapper = styledCom.div`
  width: 100%;
  min-width: 320px;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
`;