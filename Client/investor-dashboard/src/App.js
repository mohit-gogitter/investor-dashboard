// src/App.js
import React, { useState } from 'react';
import InvestorTable from './components/InvestorTable';
import InvestorModal from './components/InvestorModal';
import Footer from './components/Footer'; // Import Footer component
import logo from './assets/prequin-name-logo.png';

function App() {
  const [selectedInvestor, setSelectedInvestor] = useState(null);

  const openModal = (investor) => {
    setSelectedInvestor(investor);
  };

  const closeModal = () => {
    setSelectedInvestor(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-navy-900 via-blue-900 to-gray-800 text-gray-200">
      <header className="text-center p-8 flex flex-col items-center">
        <img src={logo} alt="Logo" className="w-56 h-24" />
        <h1 className="text-4xl font-bold text-white mb-2">Investor Dashboard</h1>
        <p className="text-gray-400">Track and manage investor commitments seamlessly.</p>
      </header>
      
      <main className="flex-grow w-full max-w-5xl mx-auto px-4">
        <InvestorTable onRowClick={openModal} />
      </main>

      {selectedInvestor && (
        <InvestorModal investor={selectedInvestor} onClose={closeModal} />
      )}
      
      <Footer /> {/* Footer at the bottom */}
    </div>
  );
}

export default App;
