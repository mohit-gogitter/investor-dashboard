// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="w-full bg-navy-900 text-gray-400 py-6 mt-4">
      <div className="container mx-auto text-center">
        <p className="text-gray-400 font-semibold">
          Investor Dashboard © {new Date().getFullYear()}
        </p>
        <div className="flex justify-center mt-4 space-x-4">
        <p className="text-gray-400 font-semibold">
          Created for <b>Prequin Test Assesment</b> by :  &nbsp;<a href="https://www.mohitsingh.app/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">Mohit Singh</a>
        </p>
          <a href="https://www.linkedin.com/in/mohit-singh-15a82288/" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:text-emerald-600 hover:underline">
            LinkedIn
          </a>
          <a href="https://github.com/mohit-gogitter" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:text-emerald-600 hover:underline">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
