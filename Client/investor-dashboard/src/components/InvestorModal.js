// src/components/InvestorModal.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import CubeLoader from "./CubeLoader";

const InvestorModal = ({ investor, onClose }) => {
  const [commitments, setCommitments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [assetClassesTotal, setAssetClassesTotal] = useState([]);
  const [selectedAssetClass, setSelectedAssetClass] = useState(null);
  const [showModal, setShowModal] = useState(false); // For entry and exit transition

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

  // Show modal on mount
  useEffect(() => {
    setShowModal(true);
  }, []);

  // Close modal with transition
  const handleClose = () => {
    setShowModal(false);
    setTimeout(onClose, 300); // Delay to allow the animation to complete
  };

  // Calculate the total amount across all asset classes
  const totalAllAssets = assetClassesTotal.reduce(
    (sum, asset) => sum + asset.total,
    0
  );

  // Filtered commitments based on selected asset class
  const filteredCommitments = selectedAssetClass
    ? commitments.filter((commitment) => commitment.assetClass === selectedAssetClass)
    : commitments;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
        showModal ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-navy-900 p-6 rounded-lg shadow-2xl w-full h-[90vh] overflow-hidden flex flex-col transform transition-all duration-300 ${
          showModal ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
      >
        <h2 className="text-2xl font-bold text-white mb-4">Investor Commitments</h2>
        <p className="text-gray-400 mb-4">
          <strong>Investor:</strong> {investor.investorName}
        </p>

        {loading ? (
          <CubeLoader data={`Commitments for ${investor.investorName}`} />
        ) : error ? (
          <p className="text-red-500 text-center">Error: {error}</p>
        ) : (
          <>
            {/* Asset Class Cards */}
            <div className="flex w-full space-x-4 mb-4">
              {/* "All" Card with Total Amount */}
              <div
                onClick={() => setSelectedAssetClass(null)}
                className={`cursor-pointer p-4 rounded-lg shadow-lg flex-1 transition-colors duration-200
                  ${
                    selectedAssetClass === null
                      ? "bg-gradient-to-r from-blue-500 to-teal-500 text-white"
                      : "bg-gradient-to-r from-gray-700 to-gray-800 text-gray-300"
                  }`}
              >
                <h3 className="text-md font-semibold">All</h3>
                <p className="text-lg font-semibold">
                  £ {totalAllAssets.toLocaleString()}
                </p>
              </div>

              {/* Dynamic Asset Class Cards */}
              {assetClassesTotal.map((assetTotal, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedAssetClass(assetTotal.assetClass)}
                  className={`cursor-pointer p-4 rounded-lg shadow-lg flex-1 transition-colors duration-200
                    ${
                      selectedAssetClass === assetTotal.assetClass
                        ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
                        : "bg-gradient-to-r from-gray-700 to-gray-800 text-gray-300"
                    }`}
                >
                  <h3 className="text-md font-semibold">{assetTotal.assetClass}</h3>
                  <p className="text-lg font-semibold">
                    £ {assetTotal.total.toLocaleString()}
                  </p>
                </div>
              ))}
            </div>

            {/* Commitments Table */}
            <div className="overflow-x-auto mb-4 flex-grow h-[50vh] scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 scrollbar-rounded-lg">
              <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden mb-4">
                <thead className="sticky top-0 bg-blue-900 z-10">
                  <tr className="text-gray-100">
                    <th className="py-2 px-4 text-left">ID</th>
                    <th className="py-2 px-4 text-left">Asset Class</th>
                    <th className="py-2 px-4 text-left">Currency</th>
                    <th className="py-2 px-4 text-left">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCommitments.map((commitment) => (
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
          </>
        )}

        {/* Close Button */}
        <button
          className="w-40 py-2 gap-4 ml-auto bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded hover:bg-purple-700 transition duration-200 mt-auto"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default InvestorModal;
