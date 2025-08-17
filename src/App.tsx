import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import WebOffering from './components/Offerings';
import WhosItFor from './components/WhosItFor';
import Bot from './components/Bot_offering';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/Hero';
import Personal from './components/Personal.tsx';
import Business from './components/Business.tsx'; // New page
import MobileHeroSection from './components/MobileHeroSection.tsx';

import GetStarted from './components/GetStarted.tsx';
import ContactUsSection from './components/contactus.tsx';
import FoundingUserCard from './components/foundingUserCard.tsx';
import ScrollToTop from './components/scrollTop.tsx';
import FAQ from './components/FAQ.tsx';
import Footer from './components/Footer.tsx';
import ShareSection from './components/ShareSection.tsx';


function App() {
  return (
    <ThemeProvider>
      <Router>
                <ScrollToTop /> {/* ⬅ added here */}

        <div className="min-h-screen bg-white dark:bg-gray-900 duration-300">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <>
                    {/* Desktop View */}
                    <div className="hidden md:block">
                      <HeroSection />
                    </div>

                    {/* Mobile View */}
                    <div className="block pt-20  md:hidden">
                      <MobileHeroSection />
                    </div>
                  </>

                  <WhosItFor />
                  <WebOffering />
                  <Bot />
                  <GetStarted /> 
                        <FAQ />
                        

                        <section id="Found"><FoundingUserCard /></section>
                         

                        <ShareSection />

                  <hr className="border-t border-gray-300" />


                                              
                                              <Footer />

                 
                </>
              }
            />
            <Route path="/business" element={<Business />} />
            <Route path="/personal" element={<Personal />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;