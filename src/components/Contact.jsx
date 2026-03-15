import React from 'react';

const Contact = () => {
  return (
    <div name="contact" className="w-full bg-slate-50 py-20 text-slate-900 border-t border-slate-200/50">
      <div className="flex flex-col p-4 justify-center max-w-screen-md mx-auto h-full">
        <div className="text-center mb-10">
          <p className="text-3xl sm:text-4xl font-extrabold inline border-b-4 border-indigo-500 pb-2">
            Get in Touch
          </p>
          <p className="py-6 text-slate-600 text-lg">
            Have a project in mind or just want to say hi? Let's connect.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/axoozolb"
            method="POST"
            className="flex flex-col w-full bg-white p-8 sm:p-10 rounded-3xl shadow-lg border border-slate-100 space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="john@example.com"
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                placeholder="How can I help you?"
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                required
              />
            </div>

            <button className="w-full text-white bg-indigo-600 font-semibold text-lg px-6 py-4 rounded-xl hover:bg-indigo-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;