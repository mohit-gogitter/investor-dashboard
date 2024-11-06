// src/components/InvestorTable.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InvestorTable = ({ onRowClick }) => {
  const [investors, setInvestors] = useState([]); // State for the data
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error

  useEffect(() => {
    const fetchInvestors = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get("http://localhost:5020/api/Investor/investors"); // Replace with your API URL
        setInvestors(response.data);
        console.log(response.data);
      } catch (error) {
        setError(error.message || 'Something went wrong.');
      } finally {
        setLoading(false);
      }
    };

    fetchInvestors();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

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
            <th className="py-4 px-6 bg-navy-800 text-left">Total Commitment</th>
          </tr>
        </thead>
        <tbody>
          {investors.map((investor) => (
            <tr
              key={investor.id}
              className="cursor-pointer bg-navy-800 hover:bg-gradient-to-r from-green-700 to-blue-800 text-white"
              onClick={() => onRowClick(investor)}
            >
              <td className="py-4 px-6 border-b border-gray-700">{investor.investorId}</td>
              <td className="py-4 px-6 border-b border-gray-700">{investor.investorName}</td>
              <td className="py-4 px-6 border-b border-gray-700">{investor.typeId}</td>
              <td className="py-4 px-6 border-b border-gray-700">{investor.dateAdded}</td>
              <td className="py-4 px-6 border-b border-gray-700">{investor.address}</td>
              <td className="py-4 px-6 border-b border-gray-700"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvestorTable;
