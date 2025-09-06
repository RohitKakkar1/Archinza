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
import Businessview from './components/Business_View.tsx';
import MobileInsights from './components/Chirmee.tsx';
import DeltaFaucet from './components/DeltaFaucet.tsx';
import ShareSection from './components/ShareSection.tsx';
import NoPhotos from './components/nophotos.tsx';
import Wriver from './components/Wriver.tsx';
import DeltaFaucet2 from './components/DeltaFaucet2.tsx';
import Wriver_Edit from './components/Wriver-Edit.tsx';
import Wriver_Preview from './components/Wriver-Preview.tsx';
import SubscriptionPage from './components/Upgrade/upgrade-plan.tsx';
import Thank_You from './components/Upgrade/Thank_You.tsx';
import Verify from './components/Verify/verify.tsx';
import ZohoForm from './components/ZohoForm.tsx';
import ZohoFormEmbed from './components/ZohoFormF.tsx';
import ZohoFormBusinesses from './components/ZohoFormBusiness.tsx';
import MobileCards from './components/Personal_User.tsx';
import DeepSearch from './components/Search/Search.tsx';
import ProfilePage from './components/Search/search-menu.tsx';

function App() {
  return (
    <ThemeProvider>
      <Router>
                <ScrollToTop /> {/* ⬅ added here */}

        <div className="min-h-screen bg-white dark:bg-gray-900 duration-300">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <>
                            <Header />

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

            <Route path="/businessview" element={<Businessview />} />
            <Route path="/chirmee" element={<MobileInsights />} />
            <Route path="/delta-faucets" element={<DeltaFaucet />} />
                        <Route path="/wriver" element={<Wriver />} />
                                    <Route path="/no-photos" element={<NoPhotos />} />
            <Route path="/delta-faucets-2" element={<DeltaFaucet2 />} />
            <Route path="/wriver-edit" element={<Wriver_Edit />} />
            <Route path="/wriver-preview" element={<Wriver_Preview />} />

            <Route path="/upgrade" element={<SubscriptionPage />} />
            <Route path="/upgrade-thank-you" element={<Thank_You />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/feedback" element={<ZohoForm />} />
            <Route path="/feedback-bot" element={<ZohoFormEmbed />} />
            <Route path="/feedback-b" element={<ZohoFormBusinesses />} />

            <Route path="/personal-user" element={<MobileCards />} />
            <Route path="/archinza-search" element={<DeepSearch />} />
            <Route path="/personal-account" element={<ProfilePage />} />

          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;