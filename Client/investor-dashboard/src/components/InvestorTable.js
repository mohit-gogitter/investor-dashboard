// src/components/InvestorTable.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import CubeLoader from "./CubeLoader";
import InvestorModal from "./InvestorModal";

const InvestorTable = () => {
  const [investors, setInvestors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInvestor, setSelectedInvestor] = useState(null);

  useEffect(() => {
    const fetchInvestors = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://localhost:5020/api/Investor/investors"
        ); // Replace with your API URL
        const investorsData = response.data;

        // Now, for each investor, fetch the total commitment amount
        for (let i = 0; i < investorsData.length; i++) {
          const investor = investorsData[i];
          // Call GetTotalCommitmentAmountForInvestor API to fetch total commitment for this investor
          try {
            const commitmentResponse = await axios.get(
              `http://localhost:5020/api/Investor/totalcommitmentamount/${investor.investorId}`
            );
            const totalCommitment = commitmentResponse.data;

            // Update the investor with the total commitment amount
            investor.totalCommitment = totalCommitment;

            // Update the state with the modified investors array
            setInvestors((prevInvestors) => [...prevInvestors]);
          } catch (commitmentError) {
            console.error(
              `Error fetching commitment for investor ${investor.id}:`,
              commitmentError
            );
          }
        }

        setInvestors(investorsData);
      } catch (error) {
        console.error("Error fetching investors:", error);
        setError("Failed to load investors.");
      } finally {
        setLoading(false);
      }
    };

    fetchInvestors();
  }, []);

  const handleRowClick = (investor) => {
    setSelectedInvestor(investor);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedInvestor(null);
  };

  if (loading) return <CubeLoader data={"Investors"}/>;
  if (error) return <p className="text-red-500 font-semibold text-center">Error: {error}</p>;

  return (
    <div className="bg-navy-900 shadow-lg rounded-lg overflow-hidden">
      <table className="min-w-full bg-navy-900 rounded-lg">
        <thead>
          <tr className="text-cyan-400">
            <th className="py-4 px-6 bg-navy-800 text-left">ID</th>
            <th className="py-4 px-6 bg-navy-800 text-left">Name</th>
            <th className="py-4 px-6 bg-navy-800 text-left">Type</th>
            <th className="py-4 px-6 bg-navy-800 text-left">Date Added</th>
            <th className="py-4 px-6 bg-navy-800 text-left">Address</th>
            <th className="py-4 px-6 bg-navy-800 text-left">
              Total Commitment
            </th>
          </tr>
        </thead>
        <tbody>
          {investors.map((investor) => (
            <tr
              key={investor.id}
              className="cursor-pointer bg-navy-800 hover:bg-gradient-to-r from-green-700 to-blue-800 text-white transform transition-transform duration-200 hover:scale-[1.02] origin-center overflow-hidden"
              onClick={() => handleRowClick(investor)}
            >
              <td className="py-4 px-6 border-b border-gray-700">
                {investor.investorId}
              </td>
              <td className="py-4 px-6 border-b border-gray-700">
                {investor.investorName}
              </td>
              <td className="py-4 px-6 border-b border-gray-700">
                {investor.type}
              </td>
              <td className="py-4 px-6 border-b border-gray-700">
                {new Date(investor.dateAdded).toLocaleDateString()}
              </td>
              <td className="py-4 px-6 border-b border-gray-700">
                {investor.address}
              </td>
              <td className="py-4 px-6 border-b border-gray-700 font-bold">
                £ {investor.totalCommitment.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal Component */}
      {isModalOpen && (
        <InvestorModal investor={selectedInvestor} onClose={closeModal} />
      )}
    </div>
  );
};

export default InvestorTable;
