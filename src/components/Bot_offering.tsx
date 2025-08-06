import React from 'react';
import { ArrowRight } from 'lucide-react';

const Bot: React.FC = () => {
  return (
    <section className="">
      <div className="">
        <div className="relative aspect-video  rounded-2xl overflow-hidden ">
              {/* Desktop Image */}
              <img 
                src="/images/bot.png"
                alt="Business professionals collaborating"
                className="hidden sm:block"
              />
              {/* Mobile Image */}
              <img 
                src="/images/bot.png"
                alt="Business team meeting"
                className="sm:hidden"
              />
            </div>
      </div>
    </section>
  );
};

export default Bot;