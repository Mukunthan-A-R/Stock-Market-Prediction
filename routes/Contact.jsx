import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    issue: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <>
      <body className="bg-black font-sans text-white antialiased">
        <section id="contact" className="py-20 bg-gray-900">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-yellow-600">
              Contact Us
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Have any questions or need assistance? We're here to help!
            </p>
            <form
              onSubmit={handleSubmit}
              className="max-w-lg mx-auto space-y-4"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-3 mb-4 border border-gray-600 rounded-lg text-gray-900"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-3 mb-4 border border-gray-600 rounded-lg text-gray-900"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <select
                  name="issue"
                  className="w-full p-3 mb-4 border border-gray-600 rounded-lg text-gray-900"
                  value={formData.issue}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select Issue
                  </option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Account Issues">Account Issues</option>
                  <option value="Billing Questions">Billing Questions</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="w-full p-3 mb-4 border border-gray-600 rounded-lg text-gray-900"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-yellow-600 text-black py-3 px-6 rounded-lg hover:bg-yellow-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        <section id="help" className="py-20 bg-black">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-yellow-600">
              How Can We Help?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Technical Support
                </h3>
                <p className="text-gray-400">
                  Facing technical difficulties? Our support team can assist
                  with troubleshooting and resolving issues.
                </p>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Account Assistance
                </h3>
                <p className="text-gray-400">
                  Need help managing your account? We can assist with account
                  recovery, updates, and more.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-black text-white py-6">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Grow Home. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </>
  );
};

export default Contact;
