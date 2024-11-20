import React from "react";

const Home = () => {
  return (
    <>
      <body class="bg-black font-sans text-white antialiased">
        <section class="relative bg-gradient-to-r from-yellow-600 to-yellow-500 text-black">
          <div class="container mx-auto px-6 py-32 text-center">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">
              Grow Your Future
            </h1>
            <p class="text-lg md:text-xl mb-8">
              Join us today and discover new ways to grow your potential in the
              digital world.
            </p>
            <a
              href="#signup"
              class="bg-black text-yellow-600 font-semibold py-3 px-6 rounded-full hover:bg-yellow-700"
            >
              Get Started
            </a>
          </div>
        </section>

        <section id="features" class="py-20 bg-gray-900">
          <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold mb-8 text-yellow-600">Features</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div class="bg-gray-800 p-8 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold mb-4">Easy to Use</h3>
                <p class="text-gray-400">
                  Our platform is designed with simplicity in mind. Start
                  growing your skills with just a few clicks.
                </p>
              </div>
              <div class="bg-gray-800 p-8 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold mb-4">Price Prediction</h3>
                <p class="text-gray-400">
                  Learn at your own pace with a wide range of resources and
                  tools to help you succeed.
                </p>
              </div>
              <div class="bg-gray-800 p-8 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold mb-4">Community Support</h3>
                <p class="text-gray-400">
                  Join a vibrant community of learners who are here to support
                  you every step of the way.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" class="py-20 bg-black">
          <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold mb-8 text-yellow-600">About Us</h2>
            <p class="text-lg text-gray-300 mb-8">
              We are passionate about helping individuals grow their skills and
              unlock their full potential. Whether you're just getting started
              or looking to enhance your expertise, we provide the resources you
              need to succeed.
            </p>
            <p class="text-lg text-gray-300">
              Join us today and take the first step toward a brighter future.
            </p>
          </div>
        </section>

        <section id="contact" class="py-20 bg-gray-900">
          <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold mb-8 text-yellow-600">Contact Us</h2>
            <p class="text-lg text-gray-300 mb-8">
              Have any questions? Reach out to us and we'd love to help.
            </p>
            <form class="max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your Email"
                class="w-full p-3 mb-4 border border-gray-600 rounded-lg text-gray-900"
                required
              />
              <textarea
                placeholder="Your Message"
                class="w-full p-3 mb-4 border border-gray-600 rounded-lg text-gray-900"
                required
              ></textarea>
              <button
                type="submit"
                class="bg-yellow-600 text-black py-3 px-6 rounded-lg hover:bg-yellow-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        <footer class="bg-black text-white py-6">
          <div class="container mx-auto text-center">
            <p>&copy; 2024 Grow Home. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </>
  );
};

export default Home;
