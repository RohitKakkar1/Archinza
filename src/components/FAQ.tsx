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
      answer: "Archinza is designed for professionals in the Design & Build industry, including architects, interior designers, contractors, engineers, and anyone involved in construction and design projects. It's also valuable for homeowners, students, and businesses looking for design and construction guidance."
    },
    {
      question: "What is the \"Ask\" feature in Archinza?",
      answer: "The 'Ask' feature is our AI-powered query system that allows you to get instant, relevant answers to your design and construction questions. Simply type your question, and our AI assistant will provide detailed, professional guidance tailored to your specific needs."
    },
    {
      question: "How will Archinza benefit me?",
      answer: "Archinza offers multiple benefits including instant access to professional design guidance, connections with industry experts, curated resources and materials, career opportunities, upskilling courses, and a platform to showcase your work. It streamlines your workflow and helps you make informed decisions faster."
    },
    {
      question: "Where do I sign up?",
      answer: "You can sign up for Archinza directly on our website. Simply click the 'Get Early Access' button or visit our registration page to create your account and start exploring all the features we offer."
    },
    {
      question: "Is Archinza free?",
      answer: "Archinza offers both free and premium features. Basic access to our AI assistant and some resources are available for free. Premium features, including advanced AI capabilities, exclusive content, and enhanced networking tools, are available through our subscription plans."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="h-fit py-36 px-4 sm:px-6 lg:px-8 bg-gray-50 text-gray-900 dark:bg-black dark:text-white">
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