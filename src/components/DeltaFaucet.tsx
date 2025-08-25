import Bus_Offering from "./business/Offerings";
import SectionToggle from "./business/Toggle";
import Bot from "./Bot_offering";
import WebOffering from "./Offerings";
import WhoIsItFor from "./business/WhoIsItFor";
import Benefits from "./business/benefits";
import NetworkSection from "./business/Network";
import Footer from "./Footer";
import Gallery from "./business_view/Gallery";
import BusinessPricing from "./business/businessPricing";
import RightPanelDesktop from "./DeltaFaucet/RightPanelDesktop";
import AboutDesktop from "./DeltaFaucet/AboutDesktop";
import AboutMobile from "./DeltaFaucet/AboutMobile";
import RightPanelMobile from "./DeltaFaucet/DBmobile";
import { useState } from "react";
import Header from "./Header";
import DBMobile from "./DeltaFaucet/DBmobile";
import BusinessFooter from "./BusinessFooter";
import BusinessTile from "./DeltaFaucet/BusinessTile";

const DeltaFaucet = () => {
  const tabs = ["Gallery", "PDF", "Courses", "Events", "Contact"];
  const [active, setActive] = useState("Gallery");

  return (
    <section className="flex-1 lg:pt-24 bg-white dark:bg-gray-900 duration-300">
      <div className="w-full hidden lg:block">
        <Header />
      </div>

      {/* Flexbox 2-column layout */}
      <div className="flex flex-col bg-white dark:bg-gray-900 lg:flex-row gap-8">
        {/* Left Part - About (30%) */}
        <div className="w-full lg:w-1/3 hidden lg:block">
          {/* Show on Desktop */}
          <div className="hidden lg:block">
            <AboutDesktop />
          </div>
        </div>

        {/* Right Part - Gallery (70%) */}
        <div className="w-full lg:w-2/3 hidden lg:block">
          {/* Show on Desktop */}
          <div className="hidden lg:block">
            <RightPanelDesktop />
          </div>
        </div>

        {/* Show on Mobile */}
        <div className="block lg:hidden">
          <DBMobile />
        </div>
      </div>

      {/* Footer below both */}
      <BusinessFooter />
    </section>
  );
};

export default DeltaFaucet;
