// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="w-full bg-navy-900 text-gray-400 py-6 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-green-500 font-semibold">
          Investor Dashboard © {new Date().getFullYear()}
        </p>
        <p className="text-gray-500 mt-2">
          Created by <a href="https://www.yourwebsite.com" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">Your Name</a>
        </p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600">
            Twitter
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600">
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
