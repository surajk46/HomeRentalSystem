import React, { useState, useEffect } from 'react';

const ShowAllTransaction = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch data from the URL
    fetch('https://localhost:7236/api/Payments')
      .then(response => response.json())
      .then(data => setTransactions(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Transaction History</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Login ID</th>
            <th>Subscription ID</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.login_id}</td>
              <td>{transaction.subscription_id}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowAllTransaction;
