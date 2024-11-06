// src/components/InvestorModal.js
import React from 'react';

const commitments = [
  { id: 1, description: 'Project Alpha', commitmentAmount: 30000 },
  { id: 2, description: 'Project Beta', commitmentAmount: 20000 },
];

const InvestorModal = ({ investor, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
    <div className="bg-gray-900 p-6 rounded-lg shadow-2xl w-full max-w-lg">
      <h2 className="text-2xl font-bold text-white mb-4">Investor Commitments</h2>
      <p className="text-gray-400 mb-4">
        <strong>Investor:</strong> {investor.name}
      </p>
      <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden mb-4">
        <thead>
          <tr className="text-gray-500">
            <th className="py-2 px-4">Description</th>
            <th className="py-2 px-4">Commitment Amount</th>
          </tr>
        </thead>
        <tbody>
          {commitments.map((commitment) => (
            <tr key={commitment.id}>
              <td className="py-2 px-4 border-b border-gray-700 text-gray-300">{commitment.description}</td>
              <td className="py-2 px-4 border-b border-gray-700 text-gray-300">
                ${commitment.commitmentAmount.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="w-full py-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold rounded hover:bg-purple-700 transition duration-200"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  </div>
);

export default InvestorModal;
