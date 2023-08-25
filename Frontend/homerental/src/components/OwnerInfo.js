import React, { useState, useEffect } from "react";
import { json, useParams } from "react-router";

const OwnerInfo = () => {
 
  const [owner, setOwner] = useState({});
  const { ownerId } =useParams();

  useEffect(() => {
    // Fetch owner data based on ownerId from your API
    fetch(`http://localhost:8080/getownerbyid/${JSON.parse(localStorage.getItem("property")).owner_id.id}`)
      .then((response) => response.json())
      .then((data) => setOwner(data));
  }, [ownerId]);

  return (
    <div className="owner-info container mt-5">
    <h2 className="text-center mb-4">Owner Information</h2>
    <p className="mb-2">Name: {`${owner.fname} ${owner.lname}`}</p>
    <p className="mb-2">Contact No: {owner.contact_no}</p>
    <p className="mb-2">Address: {owner.address}</p>
    {/* Add more owner information fields here */}

    <button className="btn btn-success" onClick={(e) => { window.history.back() }}>Go Back</button>
</div>


  );
};

export default OwnerInfo;
