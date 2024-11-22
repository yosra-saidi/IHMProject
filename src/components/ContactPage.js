import React from 'react';
import Sidebar from './Sidebar'; // Assurez-vous que le chemin est correct

function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Contenu principal */}
      <main className="ml-64 flex-1 flex items-center justify-center">
        {/* Section de contenu */}
        <div className="p-8 max-w-4xl w-full">
          <div className="bg-white rounded-lg shadow-md p-8 min-h-[600px]">
            <h3 className="text-3xl font-semibold mb-6 text-gray-700">Contact our friendly team</h3>
            <p className="text-base text-gray-500 mb-8">Let us know how we can help</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Formulaire */}
              <div>
                <form>
                  <div className="mb-6">
                    <label className="block text-base text-gray-600 mb-2" htmlFor="name">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="yosra saidi"
                      className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-base text-gray-600 mb-2" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="abc@gmail.com"
                      className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div className="mb-8">
                    <label className="block text-base text-gray-600 mb-2" htmlFor="message">
                      Message/Query
                    </label>
                    <textarea
                      id="message"
                      rows="6"
                      placeholder="Write your message here"
                      className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-pink-500 text-white py-4 text-lg rounded-lg hover:bg-pink-600 transition duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Informations de contact */}
              <div className="bg-gray-900 text-white rounded-lg p-8 space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Visit Us</h4>
                  <p className="text-sm">Directions Google Map</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Call Us</h4>
                  <p className="text-sm">Mon-Sat (8 AM - 11 PM)</p>
                  <p className="text-sm">+21620561464</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Email</h4>
                  <p className="text-sm">yosrasaidi23@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Live Chat Support</h4>
                  <p className="text-sm">Speak to our friendly team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ContactPage;
