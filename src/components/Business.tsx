import Bus_Offering from "./business/Offerings";
import SectionToggle from "./business/Toggle";
import Bot from "./Bot_offering";
import WebOffering from "./Offerings";
import Features from "./business/features";
import WhoIsItFor from "./business/WhoIsItFor";
import Benefits from "./business/benefits";
 import NetworkSection from "./business/Network";
import FoundingUserCard from "./foundingUserCard";
import Footer from "./Footer";
import FeaturesBus from "./features";

const Business = () => {
  return (
<section className="flex-1 px-4 pt-20 md:pt-0">
    
    <Bus_Offering />
    <NetworkSection />
    <SectionToggle />
    <section id="who-is-it-for"><WhoIsItFor /></section>
          <section id="features"><Features /></section>
                    

          <section id="benefits"><Benefits /></section>

          <FeaturesBus />
                                                        <Footer />


          

    </section>
  );
};

export default Business;