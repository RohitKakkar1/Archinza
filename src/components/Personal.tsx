import Bus_Offering from "./personal/Offerings";
import SectionToggle from "./personal/Toggle";
import Bot from "./Bot_offering";
import WebOffering from "./Offerings";
import Features from "./personal/features";
import WhoIsItFor from "./personal/WhoIsItFor";
import Benefits from "./personal/benefits";
 import NetworkSection from "./personal/Network";
 import Footer from "./Footer";
import FeaturesUser from "./FeaturesUser";

const Personal = () => {
  return (
<section className="flex-1 px-4 pt-20 md:pt-0">
    
    <Bus_Offering />
    <SectionToggle />
    <section id="who-is-it-for"><WhoIsItFor /></section>
          <section id="features"><Features /></section>
                    

          <section id="benefits"><Benefits /></section>

          {/* <FeaturesUser /> */}
                                                        <Footer />


    </section>
  );
};

export default Personal;