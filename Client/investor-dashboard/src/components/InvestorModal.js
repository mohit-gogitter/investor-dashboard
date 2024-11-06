// src/components/InvestorModal.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
const InvestorModal = ({ investor, onClose }) => {
  const [commitments, setCommitments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [assetClassesTotal, setAssetClassesTotal] = useState([]);

  useEffect(() => {
    if (!investor.investorId) return;

    const fetchCommitments = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `http://localhost:5021/api/Commitment/commitments/${investor.investorId}`
        );
        setCommitments(response.data.investorCommitments);
        setAssetClassesTotal(response.data.assetCommitmentTotals);
      } catch (err) {
        setError("Failed to fetch commitments");
      } finally {
        setLoading(false);
      }
    };

    fetchCommitments();
  }, [investor.investorId]);

  // Example asset classes (replace with real data or pass them as props)

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="bg-navy-900 p-6 rounded-lg shadow-2xl max-w-7xl w-full h-[90vh] overflow-hidden flex flex-col">
        <h2 className="text-2xl font-bold text-white mb-4">
          Investor Commitments
        </h2>
        <p className="text-gray-400 mb-4">
          <strong>Investor:</strong> {investor.investorName}
        </p>

        {/* Asset Class Cards in a Single Row */}
        <div className="flex w-full space-x-4 mb-4">
          {assetClassesTotal.map((assetTotal, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r p-4 rounded-lg shadow-lg flex-1 
                        ${index === 0 ? "from-blue-500 to-teal-500" : ""}
                        ${index === 1 ? "from-indigo-600 to-purple-600" : ""}
                        ${index === 2 ? "from-indigo-600 to-purple-600" : ""}
                        ${index === 3 ? "from-indigo-600 to-purple-600" : ""}
                        ${index === 4 ? "from-indigo-600 to-purple-600" : ""}
                        ${index === 5 ? "from-indigo-600 to-purple-600" : ""}`}
            >
              <h3 className="text-md font-semibold ">{assetTotal.assetClass}</h3>
              <p className="text-xl">
                <span className="slot-machine">{`£ ${assetTotal.total.toLocaleString()}`}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="overflow-x-auto flex-grow h-[50vh] scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 scrollbar-rounded-lg">
          {/* Scroll only for table */}
          <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden mb-4">
            <thead className="sticky top-0 bg-blue-900 z-10">
              {/* Fixed header */}
              <tr className="text-gray-100">
                <th className="py-2 px-4 text-left">ID</th>
                <th className="py-2 px-4 text-left">Asset Class</th>
                <th className="py-2 px-4 text-left">Currency</th>
                <th className="py-2 px-4 text-left">Amount</th>
              </tr>
            </thead>
            <tbody>
              {commitments.map((commitment) => (
                <tr key={commitment.commitmentId}>
                  <td className="py-2 px-4 border-b border-gray-700 text-gray-300">
                    {commitment.commitmentId}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-700 text-gray-300">
                    {commitment.assetClass}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-700 text-gray-300">
                    {commitment.currency}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-700 text-gray-200">
                  £ {commitment.amount.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button
          className="w-40 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded hover:bg-purple-700 transition duration-200 mt-4 ml-auto"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default InvestorModal;
