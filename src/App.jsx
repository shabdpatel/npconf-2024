import React, { useEffect,useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import FAQ from './components/faq/Faq';
import Starfield from './components/star/Starfield';
import Speaker from './components/speaker/Speaker';
import Sponsor from './components/sponsor/Sponsor';
import Team from './components/team/Team';
import About from './components/about/About';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/footer/Footer';
import Socialwall from './components/socialwall/Socialwall';
import IntroAnimation from './components/intro/IntroAnimation';

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
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro ? (
        <IntroAnimation onComplete={() => setShowIntro(false)} />
      ) : (
        <div className='md:w-[100vw] w-[25rem] sm:w-[52rem]'>
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
                  <section id='Speakers' className='sm:mt-30 mt-20 md:mt-0'>
                    <Speaker />
                  </section>
                  <section id='Socialwall'>
                    <Socialwall />
                  </section>
                  <section id='Sponsors' className='sm-mt-0 mt-[36rem]'>
                    <Sponsor />
                  </section>
                  <section id='FAQ' className=''>
                    <FAQ />
                  </section>
                  <section id='Footer'>
                    <Footer />
                  </section>
                </>
              } />
              <Route path="/Team" element={<Team />} />
              <Route path="/Gallery" element={<Gallery />} />
            </Routes>
          </Router>
        </div>
      )}

      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </>
  );
}

export default App;
