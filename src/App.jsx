import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Contact from './components/Contact/Contact';
import Starfield from './components/star/Starfield';
import Project from './components/Project/Project';
import Sponsor from './components/Timeline/Timeline';
import Team from './components/team/Team';
import About from './components/about/About';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/footer/Footer';
import Events from './components/Events/Events';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <div className='md:w-[100vw] w-[32rem] sm:w-[52rem]'>
      <Router>
        <ScrollToTop />
        <section id='Navbar'>
          <Navbar />
        </section>
        <Routes>
          <Route path="/" element={
            <>
              <Starfield
                starCount={5000}
                starColor={[255, 255, 255]}
                speedFactor={0.15}
                backgroundColor="black"
              />
              <section id='Home'>
                <Hero />
              </section>
              <section id='About'>
                <About />
              </section>
              <section id='Projects' className='sm:mt-30 mt-20 md:mt-0'>
                <Project />
              </section>
              <section id='Events'>
                <Events />
              </section>
              <section id='Timeline' className='sm-mt-0 mt-[36rem]'>
                <Sponsor />
              </section>
              <section id='Contact' className=''>
                <Contact />
              </section>
              <section id='Footer' >
                <Footer />
              </section>
            </>
          } />
          <Route path="/Team" element={<Team />} />
          <Route path="/Gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
