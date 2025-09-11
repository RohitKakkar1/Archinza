import React from "react";
import Header from "./Header";

export default function LandingScreen() {
  const phone = "919871185558"; // Replace with your WhatsApp number
  const message = "Hi, I’ve filled my Feedback, I'd like to know more!";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <>
    <Header />
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 text-center p-6">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800">
        Thanks for your Feedback
      </h1>


      <div className="flex flex-col sm:flex-row gap-4">
        {/* WhatsApp Button */}
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg text-lg">
            Ask Archinza on WhatsApp
          </button>
        </a>

        {/* Explore Website */}
        <a href="/explore">
          <button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-xl shadow-lg text-lg">
            Explore Archinza
          </button>
        </a>
      </div>
    </div>
    </>
  );
}
