import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ShowAllTransaction = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch data from the URL
    // fetch('http://localhost:8080/getalltransaction')
    fetch('https://localhost:7236/api/Payments')
      .then(response => response.json())
      .then(data => setTransactions(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  

  return (
    <div class="container mt-5">
    <div className='nav-item'>
                    <ul className="nav navbar">
                        <li className="nav-item">
                        <Link to="/getalltenants" className="nav-link">ShowAllTenant</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/getallowners" className="nav-link">ShowAllOwner</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/getallproperties" className="nav-link">ShowAllProperties</Link></li>
                        <li className="nav-item">
                        <Link to="/getalltransactions" className="nav-link">ShowAllTransaction</Link></li>
                        
                        <li className="nav-item">
                        <Link to="/logout" className="nav-link">Log Out</Link></li>
                    </ul>
                </div>
  <h1 class="text-center">Transaction History</h1>
  <div class="table-responsive">
    <table class="table table-striped table-bordered">
      <thead class="table-dark">
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>Date</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <td>{transaction.id}</td>
            <td>{transaction.login?.email}</td>
            <td>{transaction.date}</td>
            <td>{transaction.amount} </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
  );
};

export default ShowAllTransaction;
