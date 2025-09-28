import React from "react";

// Import your 4 images
import Dum1 from "/Emailers/Verify/dum1.png";
import Dum2 from "/Emailers/Verify/hero.png";
import Dum3 from "/Emailers/Verify/logo.png";
import Dum4 from "/Emailers/Verify/SUPPORTER.png";

const EmailerImages = () => {
  return (
    <div>
      <img src={Dum1} alt="Image 1" />
      <img src={Dum2} alt="Image 2" />
      <img src={Dum3} alt="Image 3" />
      <img src={Dum4} alt="Image 4" />
    </div>
  );
};

// Directly render in your app
function Email() {
  return (
    <div>
      <h1>Emailer Preview</h1>
      <EmailerImages />
    </div>
  );
}

export default Email;
