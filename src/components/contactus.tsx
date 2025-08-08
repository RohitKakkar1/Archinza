import React from 'react';

const ContactUsSection: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Let's get in touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
            Have questions, feedback, or business inquiries? Fill out the form and we’ll get back to you as soon as possible.
          </p>
          <div className="text-gray-700 dark:text-gray-400 space-y-2">
            <p><strong>Email:</strong> contact@archinza.com</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Office:</strong> New Delhi, India</p>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-md dark:shadow-[0_0_20px_rgba(255,255,255,0.02)] border border-gray-200 dark:border-gray-700">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactUsSection;
