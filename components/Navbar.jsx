import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="bg-yellow-600 shadow-md py-4">
        <div class="container mx-auto flex justify-between items-center px-6">
          <a href="#" class="text-2xl font-semibold text-black">
            Logix
          </a>
          <div class="space-x-6">
            <Link to="/" class="text-black hover:text-blue-700">
              Home
            </Link>
            <Link to="/stocks" class="text-black hover:text-blue-700">
              Stocks
            </Link>
            <Link to="/graph" class="text-black hover:text-blue-700">
              Graph
            </Link>
            <Link to="/trans" class="text-black hover:text-blue-700">
              History
            </Link>
            <Link to="/payment" class="text-black hover:text-blue-700">
              Buy
            </Link>
            <Link to="/contact" class="text-black hover:text-blue-700">
              Contacts
            </Link>
            <a
              href="#signup"
              class="bg-black text-yellow-600 px-4 py-2 rounded-lg hover:bg-yellow-700"
            >
              Sign Up
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
