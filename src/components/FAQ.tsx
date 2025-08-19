import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "What is Archinza all about?",
      answer: "Archinza is an AI-powered Design Assistant built for stakeholders across the Design & Build industry. Whether you have construction or design-related queries or need professional guidance, Archinza provides relevant, real-time answers. From sourcing products, materials, and services to expanding your reach and visibility, the platform helps you search smarter and connect with the right people. In addition, the platform enables personal users to access curated resources, stay updated on industry events, explore career and hiring opportunities, and review businesses and firms. Archinza also offers AI-matched upskilling courses making it a one-stop platform for knowledge, discovery, and growth."
    },
    {
      question: "Who is Archinza for?",
      answer: " Archinza is designed for anyone seeking information or connections in the Design & Build industry. Whether you're a creative professional (designer, architect, content creator), a service provider (business owner, contractor, vendor, PR or marketing professional), a material or product seller/distributor, or simply someone passionate about the industry, Archinza is here to empower your journey at every stage."
    },
    {
      question: "What is the \"Ask\" feature in Archinza?",
      answer: " The Ask feature (available on Whatsapp) is powered by AI and provides instant, relevant answers to your queries about design, construction, and professional guidance. In the currently available Beta version of Archinza, you can ask about technical details, materials suggestions, methods, project tips, or even mentorship. After the full product you will be able to matchmade recommendations for vendors / consultants / designers or execution teams. Please note: Archinza AI™ is a model in development, doing its best to provide helpful responses in real time and continuously learning to improve."
    },
    {
      question: "How will Archinza benefit me?",
      answer: " Archinza provides an AI-based matchmaking for products and services, business and sourcing, and opportunities for jobs. With easy WhatsApp adoption, Archinza is quick, easy, hyperlocal and gives equal access to all. It also helps achieve targeted reach for all professionals and businesses in the Design & Build industry at a very low cost.In addition to intelligent search and targeted visibility, Archinza offers personal users with curated design and business resources, updates on industry events, the ability to review businesses and firms and access to personalised upskilling recommendations bringing meaningful value without high marketing or outreach costs."
    },
    {
      question: "Where do I sign up?",
      answer: "You can sign up for Archinza directly on our website. Simply click the 'Get Early Access' button or visit our registration page to create your account and start exploring all the features we offer."
    },
    {
      question: "Is Archinza free?",
      answer: "  Archinza is currently free for personal accounts during our limited early access phase available only until the full product launch. After that, subscription plans will range between ₹999 and ₹2999, depending on your account type and selected features. For Businesses We're also offering exclusive free access to our first 1000 business users for the SILVER Plan features —no charges, no catches. Post that, business accounts will be available at ₹ 800- ₹2,500 per month until the full product rollout. Click here to get free access to the Archinza Network "
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="h-fit py-36 px-4 sm:px-6 lg:px-8 bg-white text-gray-900 dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:sticky lg:top-8">
            <div className="max-w-lg">
              <h1 className="text-4xl sm:text-5xl font-sans font-medium leading-tight mb-4 text-gray-900 dark:text-white">
                Frequently asked questions
              </h1>
              <p className="text-lg mb-8 font-sans text-gray-600 dark:text-gray-300">
                Answers to most common Questions
              </p>
              <button className="inline-flex items-center font-sans px-6 py-3 rounded-full font-medium text-base bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black">
                Get Early Access - ₹5999 FREE
              </button>
            </div>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div 
                key={index} 
                className="border-b border-gray-200 dark:border-gray-800 pb-4"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between  font-sans items-center text-left group focus:outline-none"
                >
                  <h3 className="text-lg sm:text-xl  font-sans font-medium pr-4 text-orange-600 dark:text-orange-400 group-hover:opacity-80 transition-opacity duration-200">
                    {item.question}
                  </h3>
                  <div className={`flex-shrink-0 text-gray-900 dark:text-white transition-transform duration-200 ${openIndex === index ? 'transform rotate-180' : ''}`}>
                    {openIndex === index ? (
                      <Minus size={24} />
                    ) : (
                      <Plus size={24} />
                    )}
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-base leading-relaxed  font-sans text-gray-700 dark:text-gray-300">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;