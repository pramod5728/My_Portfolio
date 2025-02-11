import { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from "styled-components";
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from "./components/sections/Footer";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  height: 90vh;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
      flex-direction: column;
  }
`;

function App() {
  return (
    <Router basename="/My_Portfolio"> {Pramod99}
      <ThemeProvider theme={darkTheme}>
        <Navbar />
        <Body>
          <Hero />
          <Skills />
          <Projects />
          <Wrapper>
            <Contact />
          </Wrapper>
          <Footer />
        </Body>
      </ThemeProvider>
    </Router>
  );
}

export default App;
