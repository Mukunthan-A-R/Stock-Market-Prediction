import React from "react";

const BlockChainTransaction = ({ data }) => {
  return (
    <div className="p-6 bg-black min-h-screen">
      <h2 className="text-2xl text-white mb-4">Block Chain Transaction List</h2>
      <table className="min-w-full table-auto bg-black text-white border border-gray-700">
        <thead>
          <tr className="bg-gray-800">
            <th className="px-4 py-2 border-b border-gray-600">User ID</th>
            <th className="px-4 py-2 border-b border-gray-600">Name</th>
            <th className="px-4 py-2 border-b border-gray-600">Username</th>
            <th className="px-4 py-2 border-b border-gray-600">Email</th>
            <th className="px-4 py-2 border-b border-gray-600">
              Shares Bought
            </th>
            <th className="px-4 py-2 border-b border-gray-600">Amount</th>
            <th className="px-4 py-2 border-b border-gray-600">Timestamp</th>
            <th className="px-4 py-2 border-b border-gray-600">Company</th>
          </tr>
        </thead>
        <tbody>
          {data.map((transaction, index) => (
            <tr
              key={index}
              className={`hover:bg-gray-700 ${
                index % 2 === 0 ? "bg-gray-900" : "bg-gray-800"
              }`}
            >
              <td className="px-4 py-4 border-b border-gray-600">
                {transaction.user.id}
              </td>
              <td className="px-4 py-2 border-b border-gray-600">
                {transaction.user.name}
              </td>
              <td className="px-4 py-2 border-b border-gray-600">
                {transaction.user.username}
              </td>
              <td className="px-4 py-2 border-b border-gray-600">
                {transaction.user.email}
              </td>
              <td className="px-4 py-2 border-b border-gray-600">
                {transaction.shares_bought}
              </td>
              <td className="px-4 py-2 border-b border-gray-600">
                {transaction.amount}
              </td>
              <td className="px-4 py-2 border-b border-gray-600">
                {new Date(transaction.timestamp).toLocaleString()}
              </td>
              <td className="px-4 py-2 border-b border-gray-600">
                {transaction.user.company.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlockChainTransaction;
